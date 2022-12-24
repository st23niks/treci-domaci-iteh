import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header>
            <div className="py-4 border-bottom">
                <nav className="container d-flex justify-content-end">
                    <ul className="m-0">
                        <li className="d-inline-block me-3">
                            <Link className="text-dark" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="d-inline-block">
                            <Link className="text-dark" to="/contact-us">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;