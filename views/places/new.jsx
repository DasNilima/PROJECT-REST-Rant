const React = require('react')
const Def = require('../default')

//  Create a return statement in the new_form() function and then use the Def component as a wrapper
function new_form () {
return (
    <Def>
        <main>
        <h1>Add a New Place</h1>
        </main>
    </Def>
)
}

module.exports = new_form
