import React from "react"
import { NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <header>
            <div>
                <nav>
                    <NavLink>
                        Home
                    </NavLink>
                    <NavLink>
                        Blog Posts
                    </NavLink>
                    <NavLink>
                        Projects
                    </NavLink>
                    <NavLink>
                        About Me!
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}