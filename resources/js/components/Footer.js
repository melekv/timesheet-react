const Footer = () => {
    return(
        <footer className="footer">
            <div className="d-flex justify-content-center">
                Copyright &copy; 2021
            </div>
            <div className="d-flex justify-content-center">
                <ul className="nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Dniówki</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Profil</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;