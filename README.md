Football Tournament Web Application ⚽

This is a web application for visualizing and exploring a football tournament. The app provides a detailed view of a tournament, including teams, players, matches, and in-game records.
The application processes CSV files containing tournament data (matches, players, teams, and records). After submission, these files are uploaded and stored in MongoDB.
The backend is built with Node.js and Express, currently exposing several API endpoints, with additional functionality planned for future development.

Features

Tournament Bracket View
Users land on a visual tournament bracket schema, displaying the competition from the Round of 16 to the Grand Final.

Stage Navigation
Separate tabs allow users to explore matches for each tournament stage.

Detailed Match View
Each match can be opened to see detailed information including:

- tactics and formations
- starting 11 players
- substitutions
- head coach
- full squad list with player positions

Match Search
Users can quickly search for matches using the search bar in the top-right corner.

Flexible Date Formatting
The match date format can be dynamically changed based on user preference.

Tech Stack

Frontend

- React
- Tailwind CSS

Backend
- Node.js
- Express

Database
- MongoDB Atlas

Deployment
- Firebase Hosting

Planned Improvements
- Implement TanStack Query for improved server-state management.
- Integrate a production-grade logger such as Winston.
- Improve application responsiveness and UI polishing.
- Secure database access by restricting MongoDB Atlas network access (currently open to 0.0.0.0/0).

The application is live and accessible at:

🔗 https://football-tournament-75ff0.web.app/group-stage


