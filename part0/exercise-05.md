title Exercise 0.5- SPA diagram

actor User

User->Browser: Enter htts://studies.cs.helsinki.fi/exampleapp/spa
Browser->Server: HTTP GET Request "https://studies.cs.helsinki.fi/exampleapp/spa"
note left of Server: server response one HTML document
Browser->Server: GET request main.css
Server->Browser: main.css
Browser->Server: GET request main.js
Server->Browser: main.js
note right of Browser: start executing js file
Browser->Server: GET request data.json
Server->Browser: data.json
Browser->User: display notes
