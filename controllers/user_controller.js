const User = require('../models/User');

// get login page
const getLoginPage = async (req, res) => {
  res.render('login');
};

// get register page
const getRegisterPage = async (req, res) => {
  res.render('register');
};

// register user
const postRegister = async (req, res) => {
  const { name, email } = req.body;
  // checking for errors
  let errors = [];
  if (!name || !email) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (errors.length > 0) {
    res.render('register', { errors,name,email});
  } else {
    try {
      // validation passed
      const userExists = await User.findOne({ email: email });
      if (userExists) {
        // user already exists
        errors.push({ msg: 'Email ID already exists' });
        res.render('register', {
          errors,
          name,
          email
        });
      } else {
        const newUser = new User({name, email});

        // save user
        await newUser.save();
        req.flash('success_msg', 'You are now registered and can log in');
        res.redirect('/users/login');
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Server error');
    }
  }
};

// log in user
const postLogin = async (req, res) => {
  const { email } = req.body;
  try {
    // checking user in database
    const user = await User.findOne({ email: email });
    if (!user) {
      let errors = [];
      errors.push({ msg: 'This email is not registered' });
      res.render('login', {
        errors,
        email
      });
    } else {
      // redirect to dashboard
      res.redirect(`/dashboard?user=${user.email}`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

// log out user
const logout = async (req, res) => {
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
};

module.exports = {
  getLoginPage,
  getRegisterPage,
  postRegister,
  postLogin,
  logout
};
