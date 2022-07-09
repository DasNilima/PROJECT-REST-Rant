//import React and the Def function that created in the default.jsx file
const React = require('react')
const Def = require('./default')

//Create a home function with return statement that includes Def component 
function home () {
return (
    <Def>
        <main>
            <h1>HOME</h1>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
                </a>
        </main>
    </Def>
)
}

module.exports = home