import { Link, useNavigate } from 'react-router-dom';
import { BiSearchAlt2 } from "react-icons/bi";
import { GoOctoface } from "react-icons/go";
import { useState } from "react"
import "./Navbar.css";


const Navbar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return;

        navigate(`/?user=${search}`);
    }

    return (
        <nav id="navBar">
            <h2>
                <Link to="/">
                    <GoOctoface /> Github Viewer
                </Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Buscar usuário"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>);
};

export default Navbar;

