import React from 'react'
import { Link } from 'react-router-dom'

const SubHeader = () => {
    return (
        <div>

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Railway-management-app</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <Link class="nav-link" to="/login">Login</Link>
                            <Link class="nav-link active" aria-current="page" to="/">Add</Link>
                            <Link class="nav-link" to="/view">Viewsection</Link>
                            <Link class="nav-link" to="/book">book</Link>
                            
                           


                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default SubHeader