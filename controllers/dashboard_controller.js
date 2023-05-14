//---------User model----------//
const User = require('../models/User');
const Habit = require('../models/Habit');

let email = "";

// Render Dashbord
exports.getDashboard = async (req, res) => {
    try {
        email = req.query.user;
        // console.log(email);
        const user = await User.findOne({ email });
        // console.log(user);
        const habits = await Habit.find({ email });
        const days = [getD(0), getD(1), getD(2), getD(3), getD(4), getD(5), getD(6)];
        res.render('dashboard', { habits, user, days, email });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Function to return date string
function getD(n) {
    let d = new Date();
    d.setDate(d.getDate() + n);
    var newDate = d.toLocaleDateString('pt-br').split('/').reverse().join('-');
    var day;
    switch (d.getDay()) {
        case 0: day = 'Sun';
            break;
        case 1: day = 'Mon';
            break;
        case 2: day = 'Tue';
            break;
        case 3: day = 'Wed';
            break;
        case 4: day = 'Thu';
            break;
        case 5: day = 'Fri';
            break;
        case 6: day = 'Sat';
            break;
    }
    return { date: newDate, day };
}
// Function to add habit
exports.addHabit = async (req, res) => {
    const { content } = req.body; // const content = req.body.content;

    try {
        const habit = await Habit.findOne({ content: content, email: email });
        if (habit) {
            //---------Update existing habit----------//
            let dates = habit.dates, tzoffset = (new Date()).getTimezoneOffset() * 60000;
            var today = (new Date(Date.now() - tzoffset)).toISOString().slice(0, 10);

            const isTodayExist = dates.some(item => item.date === today);

            if (isTodayExist) {
                console.log("Habit exists!");
                req.flash(
                    'error_msg',
                    'Habit already exists!'
                );
                return res.redirect('back');
            }
            else {
                dates.push({ date: today, complete: 'none' });
                habit.dates = dates;
                await habit.save();
                console.log(habit);
                return res.redirect('back');
            }
        }
        else {
            let dates = [], tzoffset = (new Date()).getTimezoneOffset() * 60000;
            var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, 10);
            dates.push({ date: localISOTime, complete: 'none' });

            const newHabit = new Habit({content, email, dates});

            await newHabit.save(); //Save Habit
            console.log(newHabit);
            return res.redirect('back');
        }
    } catch (error) {
        console.log(error);
        req.flash(
            'error_msg',
            'An error occurred while adding the habit!'
        );
        return res.redirect('back');
    }
};

// Handle Change View: Daily / Weekly
exports.changeView = async (req, res) => {
    try {
        const user = await User.findOne({ email});
        console.log(user);
        user.view = user.view === 'daily' ? 'weekly' : 'daily';
        await user.save();
        res.redirect('back');
    } catch (error) {
        console.log("Error changing view!", error);
        return res.status(500).send('Error changing view!');
    }
};

// Add/Remove Habit to/from Favorites
exports.favoriteHabit = async (req, res) => {
    try {
        const id = req.query.id;
        const habit = await Habit.findOne({ _id: id, email });
        if (habit) {
            habit.favorite = !habit.favorite;
            await habit.save();
            req.flash(
                'success_msg',
                habit.favorite ? 'Habit added to Favorites!' : 'Habit removed from Favorites!'
            );
            return res.redirect('back');
        } else {
            console.log('Error adding to favorites: habit not found');
            return;
        }
    } catch (err) {
        console.log('Error adding to favorites:', err);
        return;
    }
};
// Delete Habit
exports.removeHabit = async (req, res) => {
  try {
    const id = req.query.id;
    const result = await Habit.deleteMany({ _id: id, email: email});

    if (result.deletedCount > 0) {
      req.flash("success_msg", "Record(s) deleted successfully!");
    } else {
      req.flash("error_msg", "Failed to delete record(s)!");
    }
    return res.redirect("back");
  } catch (err) {
    console.error("Error in deleting record(s)!", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};