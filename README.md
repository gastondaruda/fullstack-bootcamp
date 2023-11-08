# fullstack-bootcamp
sequenceDiagram
    participant browser
    participant server

    Note right of browser: El usuario ingresa una nueva nota y guarda

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/notes
    browser->>server: notes.push({content: req.body.note})
 
    server-->>browser: HTML.code
    deactivate server
