# Gratitude Journal Capstone Client

Purpose: to provide a space for a registered user to make short gratitude journal entries and click a simple button for “overall mood" to keep track of their day and what they are grateful for.

## Working Prototype
You can access a working prototype of the React app here: https://gratitude-journal-capstone-client.vercel.app/ and Node app here: https://gratitude-journal-server.herokuapp.com/


## User Stories
This app is for two types of users: a visitor and a logged-in user.


#### Landing Page
* as a non-registered user
* I want to understand what I can do with this app (or sign up, or log in)
* so I can decide if I want to make an account and use it

#### Sign Up
* as a non-registered user
* I want to create a username and password
* so I can create my account and use the service.

#### Login Page
* As a registered user
* I want to log in to my account
* So I can create an entry or view my saved entries

#### Navbar
* As a registered user
* I want to be able to nagivate to different sections of the app
* So I can easily see all of the features

#### New Journal Entry Page
* As a registered user
* I want to fill out a new journal entry
* So I can keep track of what I am grateful for each day

#### All Journal Entries Page
* As a registered user
* I want to view my all of my journal entries
* So I can notice patterns in my mood and keep track of how I'm feeling

#### Forgot Password
* As a registered user
* I want to update/change my password when I forget it
* So that I can log back into my account


### Wireframes
Landing/Login Page 
:-------------------------:
![Landing Page](/github-images/wireframes/landing-page.jpg) 
Sign Up Page
![Sign Up Page](/github-images/wireframes/signup.jpg)
Login Page
![Login Page](/github-images/wireframes/login.jpg)
New Entry Page
![New Entry Page](/github-images/wireframes/new-entry.jpg)
All Entries Page
![All Entries Page](/github-images/wireframes/all-entries.jpg)


## Screenshots
Landing/Login Page 
:-------------------------:
![Landing Page](/github-images/screenshots/landing-page.png)  
Sign Up Page
![Sign Up Page](/github-images/screenshots/signup.png)
Login Page
![Login Page](/github-images/screenshots/login.png)
New Entry Page
![New Entry Page](/github-images/screenshots/new-entry.png)
All Entries Page
![All Entries Page](/github-images/screenshots/all-entries.png)


## Functionality
The app's functionality includes:
* Every User has the ability to create journal entries 
* a journal entry will consist of: a bullet point list and an "overall mood" button
    * inputs
        * gratitude points
        * overall mood (choice between 3)
    * output
        * finished journal entry

## Front-end Structure - React Components Map
* __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __header.js__ (stateless)
        * __landing-page.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
            * __login.js__ (stateful) -
            * __signup.js__ (stateful) -
        * __navbar.js__ (stateless) -
        * __all-journal-entires.js__ (stateless) -
        * __create-journal-entry.js__ (stateful) -
        * __button.js__ (stateless) -


## Back End Structure - Business Objects (database structure)

* users
    * id
    * user_name (minimum 6 characters)
    * password (minimum 8 characters, 1 uppercase, 1 number)
    * first_name (minimum 2 characters)
    * last_name (minimum 2 characters)

* journal_entries
    * id
    * user_id
    * title (varchar)
    * date (date)
    * bullet_1 (varchar)
    * bullet_2 (varchar)
    * bullet_3 (varchar)
    * mood (varchar)
    * is_public (default: false)

## Technology
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver

## API Documentation
API Documentation details: 
* get all users => /api/users
* get users by id => /api/users/:user_id
* get all entries => /api/entries
* get entry by id => /api/entries/:entry_id
* post new user => /api/users
* post new entry => /api/entries
* post auth login => /api/auth/login

## Responsive
App is built to be usable on mobile devices, as well as responsive across mobile, tablet, laptop, and desktop screen resolutions.

## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* Forgot Password 
* Color code entries based on mood
* Publicly show some entries
* More than 3 gratitude points (a + component)
* Add/upload photos
* Weather report for your location (mood based on weather)
* Send reminders to jounral
* Separate past entries into weeks

## How to run it
Use command line to navigate into the project folder and run the following in terminal

### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test

### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test

