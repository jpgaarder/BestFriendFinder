# BestFriendFinder

This activity was to build a compatibility-based friendfinder app. Basically a dating app. This full-stack site will take in results from The users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

Best Friend Finder is an app that helps find your most compatible friend type. This is primarily an exercise in setting up an Express server and handling routing. On the front end the user fills out a survey form, and on the back end an Express server handles the routing to help determine the right type of friend.

The survey has 10 questions. Each answer is on a scale from 1 to 5 based on the user's level of agreement or disagreement with the question. The server.js file requires express and body-parser as npm packages, as well as node's internal path package. htmlRoutes.js contains a GET route for displaying the survey, as well as a default USE route for the home page. apiRroutes.js contains a GET route to display all possible matches as well as a POST route to handle incoming survey results and perform the compatibility logic.

Also used in this mini project are jQuery and Bootstrap