import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header className="header d-flex align-items-center">
            <div className="container d-flex justify-content-between">
                <div className="logo">Logo</div>
                <div>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="timesheet" className="nav-link">Dniówki</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link">Profil</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;