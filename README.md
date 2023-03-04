# Songs API Documentation

Welcome to the documentation for the Songs Management API. This API manages the songs of a web application and provides various routes to add, update, retrieve, and delete songs. This API is built using Node.js, Express, MongoDB, Mongoose, and Cors.
API Endpoint

The API endpoint for this application is https://songs-api-wheq.onrender.com/v1.
Routes

This API provides the following routes:
Add a new song

This route adds a new song to the application's database. The endpoint for this route is /addnewsong and it accepts a POST request. The addnewSong function handles this request by taking the necessary data from the request body and inserting it into the database.
Edit an existing song

This route updates an existing song in the application's database. The endpoint for this route is /editsong and it accepts a PUT request. The editSong function handles this request by taking the necessary data from the request body and updating the relevant fields in the database.
Delete an existing song

This route deletes an existing song from the application's database. The endpoint for this route is /deletesong and it accepts a DELETE request. The deleteSong function handles this request by taking the necessary data, specifically the id from the request body, and removing the song from the database.
Get all songs

This route retrieves all songs in the application's database. The endpoint for this route is /getsongs and it accepts a GET request. The getAllSongs function handles this request by querying the database for all songs and returning the result as a response.
Get status information

This route retrieves the total number of songs, artists, genre, and the number of songs by statistics data in the application's database. The endpoint for this route is /gestatus and it accepts a GET request. The getTotalCounts function handles this request by querying the database for the relevant counts and returning the result as a response.
Technologies Used

This API is built using the following technologies:

  -  Node.js
 -    Express
  -  MongoDB
   - Mongoose
   - Cors

Installation and Usage

To install and run this API, follow these steps:

    Clone this repository.
    Install the dependencies using npm install.
    Start the API using npm start.

The API w
