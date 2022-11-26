import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light">
                <a class="navbar-brand mx-4 fs-2 text-light" href="/">TheShoeStore</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto mx-4 fs-5">
                        <li class="nav-item active">
                            <a class="nav-link text-light" href="/">Home </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="/">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="/">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light " href="/">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
