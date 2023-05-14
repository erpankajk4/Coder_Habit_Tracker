const express = require('express');
const router = express.Router();

// Home
const homeController = require('../controllers/home_controller');
router.get('/', homeController.home);

// Dashboard
const dashboardController = require('../controllers/dashboard_controller');
router.get('/dashboard', dashboardController.getDashboard);

// Change View: Daily / Weekly
router.post('/user-view', dashboardController.changeView); 

// Add Habit
router.post('/dashboard', dashboardController.addHabit);

// Add/Remove Habit to/from Favorites
router.get('/favorite-habit', dashboardController.favoriteHabit);

// Update status of habit completion
const updateHabitStatusController = require('../controllers/updateHabitStatus_controller');
router.get('/status-update', updateHabitStatusController.updateHabitStatus);

// Deleting a habit 
router.get("/remove", dashboardController.removeHabit);
module.exports = router;