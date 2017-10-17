# Youtube Sheet

I created this project to test how to use a google spreadsheet as a database.

This project uses a hard-coded spreadsheet as a tiny database. The sheet contains URLs of some youtube videos. The application loads the videos from the sheet. So when you update the sheet and reload the app, it updates with the new videos.

I have enabled public access (only view) to the sheet used in this project.
https://docs.google.com/spreadsheets/d/1GRL0ztqPSLk8ClW1octpB0HSKKp3RVJITm0q3Lw2QYc/edit?usp=sharing

# Deployed to Heroku
This application is hosted on https://harryi3t-youtube-sheet.herokuapp.com
You can host you own, just make sure these two environment variables are present
```
CLIENT_EMAIL
PRIVATE_KEY
```
You can get these credentials from google developer console.
You can also follow this tutorial to learn how to use sheet api https://codelabs.developers.google.com/codelabs/sheets-api/#3