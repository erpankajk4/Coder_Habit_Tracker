const Habit = require('../models/Habit');

// Function to Update habit Status
exports.updateHabitStatus = async (req, res) => {
    try {
        const date = req.query.date;
        const id = req.query.id;
        const habit = await Habit.findById(id);

        let dates = habit.dates;
        let found = false;

        dates.find(function (item, index) {
            if (item.date === date) {
                if (item.complete === 'yes') {
                    item.complete = 'no';
                } else if (item.complete === 'no') {
                    item.complete = 'none';
                } else if (item.complete === 'none') {
                    item.complete = 'yes';
                }
                found = true;
            }
        });

        if (!found) {
            dates.push({ date: date, complete: 'yes' });
        }

        habit.dates = dates;
        await habit.save();

        console.log(habit);
        res.redirect('back');
    } catch (err) {
        console.log('Error updating status!', err);
    }
};
