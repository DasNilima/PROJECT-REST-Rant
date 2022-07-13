//import React and the Def function that created in the default.jsx file
const React = require('react')
const Def = require('./default')

//Create a home function with return statement that includes Def component 
function home () {
return (
    <Def>
        <main>
            <h1>REST-Rant</h1>
            <div className="container mt-3">
                <img src="/images/chia-fruit-drink.jpg" className="img-thumbnail mx-auto d-block" alt="Chia Fruit Shake" />
            </div> 
            <div>Photo by <a href="https://unsplash.com/@cravethebenefits">Brenda Godinez</a> on <a href="https://unsplash.com/s/photos/free">Unsplash</a>
            </div><br/>
            <a href="/places">
                <button className="btn-primary">Places Page</button>
            </a>
        </main>
    </Def>
)
}

module.exports = home


