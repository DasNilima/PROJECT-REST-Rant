//import React
const React = require('react')

// Create a Def function that has one parameter html and return statement that includes the HTML skeleton
function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def
