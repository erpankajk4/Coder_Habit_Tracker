# Coder Habit Tracker App
> The habit tracker app allows users to add and track multiple habits daily. It displays the status of each habit for the last 7 days and allows users to toggle between the three statuses (done, not done, none). All habit data is stored in a database for easy retrieval, and the app can also track the user's longest streak and total completion days. Overall, the app is a useful tool for developing positive habits and staying motivated.
![4](https://github.com/erpankajk4/Coder_Habit_Tracker/assets/118353291/c0e1831a-186e-4104-9d37-6349db24aa5d)

## Features 
- Add multiple habits to track.
- Track each habit every day.
- View all current habits.
- Display 7 days of each habit.
- Toggle between the three statuses.
- Store data in a database.

## Technologies Used
1.  NodeJS
2.  Express
3.  MongoDB
4.  EJS

### 📚 Libraries:
- connect-flash
- express-ejs-layout
- ejs
- mongoose
- express-session
- cookie-parser
- connect-mongo
- dotenv
- express

## Installation

##### Install NPM dependencies

`npm install`

##### Start your app

`npm start`

#### The Server should now be running at http://localhost:8000/

## Folder Structure
📦coder-habit-tracker<br>
 ┣ 📂DEMO ----> Some screenshoots of project<br>
 ┣ 📂assets<br>
 ┃ ┗ 📂css<br>
 ┃ ┃ ┣ 📜habit.jpg<br>
 ┃ ┃ ┗ 📜styles.css<br>
 ┣ 📂config<br>
 ┃ ┗ 📜mongoose.js<br>
 ┣ 📂controllers<br>
 ┃ ┣ 📜dashboard_controller.js<br>
 ┃ ┣ 📜home_controller.js<br>
 ┃ ┣ 📜updateHabitStatus_controller.js<br>
 ┃ ┗ 📜user_controller.js<br>
 ┣ 📂models<br>
 ┃ ┣ 📜Habit.js<br>
 ┃ ┗ 📜User.js<br>
 ┣ 📂routes<br>
 ┃ ┣ 📜index.js<br>
 ┃ ┗ 📜users.js<br>
 ┣ 📂views<br>
 ┃ ┣ 📂partials<br>
 ┃ ┃ ┗ 📜messages.ejs<br>
 ┃ ┣ 📜dashboard.ejs<br>
 ┃ ┣ 📜home.ejs<br>
 ┃ ┣ 📜layout.ejs<br>
 ┃ ┣ 📜login.ejs<br>
 ┃ ┗ 📜register.ejs<br>
 ┣ 📜.env<br>
 ┣ 📜.gitignore<br>
 ┣ 📜app.js<br>
 ┣ 📜package-lock.json<br>
 ┣ 📜package.json<br>
 ┗ 📜README.md<br>

## Credits
This project was developed by PANKAJ KUMAR as a coding exercise. It is not intended for production use.

## License
This project is licensed under the MIT License. Feel free to use and modify the code as you see fit.
![0](https://github.com/erpankajk4/Coder_Habit_Tracker/assets/118353291/392d91c0-ec42-4acb-be8e-8c51e4716434)
![1](https://github.com/erpankajk4/Coder_Habit_Tracker/assets/118353291/7585b4ff-e21d-4f98-93f8-5b460efea870)
![2](https://github.com/erpankajk4/Coder_Habit_Tracker/assets/118353291/e11ffc1a-097e-4356-b921-bf17c596c984)
![3](https://github.com/erpankajk4/Coder_Habit_Tracker/assets/118353291/2425c0cc-fe2f-46f4-9e06-c92b26b93cb9)

