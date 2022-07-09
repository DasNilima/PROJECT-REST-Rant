//import React
const React = require('react')

// Create a Def function that has one parameter html and return statement that includes the HTML skeleton

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
                <link rel= "stylesheet" href= "/css/style.css"></link>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def

