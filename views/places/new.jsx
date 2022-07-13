const React = require('react')
const Def = require('../default.jsx')

//  Create a return statement in the new_form() function and then use the Def component as a wrapper
function new_form () {
return (
    <Def>
        <main>
            <h1>Add a New Place</h1>
            <form method="POST" action="/places">
                <div className="form-group mb-3 mt-3">
                    <label htmlFor="name">Place Name</label>
                    <input className="form-control" id="name" name="name" required />
                </div>
                <div className="form-group mb-3 mt-3">
                    <label htmlFor="pic">Place Picture</label>
                    <input className="form-control" id="pic" name="pic" />
                </div>
                <div className="form-group mb-3 mt-3">
                    <label htmlFor="city">City</label>
                    <input className="form-control" id="city" name="city" />
                </div>
                <div className="form-group mb-3 mt-3">
                    <label htmlFor="state">State</label>
                    <input className="form-control" id="state" name="state" />
                </div>
                <div className="form-group mb-3 mt-3">
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className="form-control" id="cuisines" name="cuisines" required />
                </div>
                <input className="btn btn-primary" type="submit" value="Add Place" />
            </form>
        </main>
    </Def>
)
}

module.exports = new_form
