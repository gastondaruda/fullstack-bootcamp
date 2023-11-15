title Exercise 0.6- New note - SPA diagram

actor User

User->Browser: Enter new note
Browser->Server: HTTP POST Request "https://fullstack-exampleapp.herokupp.com/new_note_spa"
note left of Server: send content type "aplication/json"
note left of Server: 201 - Created
Server -> Browser: start executed js file
note right of Browser: manipulate the DOM with javascript to render new note
Browser->User: display notes