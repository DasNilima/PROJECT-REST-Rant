const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
return (
    <Def>
        <main>
            <h1>Edit Place</h1>
                <form method="POST" action={`/places/${data.id}?_method=PUT`}>
                <div className='row'>
                <div className="form-group mb-3 col-sm-6">
                    <label htmlFor="name">Place Name</label>
                    <input 
                        className="form-control"
                        id="name" 
                        name="name" 
                        defaultValue={data.place.name} 
                        required />
                    </div>
                    <div className="form-group mb-3 col-sm-6">
                        <label htmlFor="pic">Place Picture</label>
                        <input
                        className="form-control"
                        name="pic"
                        id="pic"
                        defaultValue={data.place.pic} 
                        />
                    </div>
                    <div className="form-group mb-3 col-sm-6">
                        <label htmlFor="city">City</label>
                        <input
                        className="form-control"
                        name="city"
                        id="city"
                        defaultValue={data.place.city} 
                        />
                    </div>
                    <div className="form-group mb-3 col-sm-6">
                        <label htmlFor="state">State</label>
                        <input
                        className="form-control"
                        name="state"
                        id="state"
                        defaultValue={data.place.state} 
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="cuisine">Cuisines</label>
                        <input
                        className="form-control"
                        name="cuisine"
                        id="cuisine"
                        defaultValue={data.place.cuisine} 
                        />
                    </div>
                </div><br/>
                <button type="submit" className="btn btn-primary">Add Place</button>
                </form>
        </main>
    </Def>
)
}

module.exports = edit_form
