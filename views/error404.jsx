const React = require('react')
const Def = require('./default')

function error404 () {
return (
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we can't find this page!</p>
            <div class="container mt-3">
                <img src="/images/404page.jpeg" class="img-thumbnail mx-auto d-block" alt="sorry page" />
            </div>
        </main>
    </Def>
)
}

module.exports = error404
