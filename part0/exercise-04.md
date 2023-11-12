title Exercise 0.4- New diagram

actor User

User->Browser: Click submit button
note right of Browser: Send user input to server
Browser->Server: POST Request "https://studies.cs.helsinki.fi/exampleapp/notes"
note left of Server: add input to notes
Server->Browser: Send response server
note right of Browser: 302 status code response
note right of Browser: Reload
Browser->Server: GET request main.css
Server->Browser: main.css
Browser->Server: GET request main.js
Server->Browser: main.js
Browser->Server: GET request data.json
Server->Browser: update data.json
Browser->User: Render page

