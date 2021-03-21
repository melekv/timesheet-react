const Main = () => {
    return(
        <main className="container d-flex align-items-center">
            <form className="col-12">
                <div className="row justify-content-center mb-2">
                    <h2 className="col-auto">Zaloguj się</h2>
                </div>
                <div className="row justify-content-center mb-2">
                    <div className="col-1">
                        <label className="col-form-label">Email:</label>
                    </div>
                    <div className="col-4">
                        <input type="text" className="form-control" />
                    </div>
                </div>
                <div className="row justify-content-center mb-2">
                    <div className="col-1">
                        <label className="col-form-label">Hasło:</label>
                    </div>
                    <div className="col-4">
                        <input type="password" className="form-control" />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-5">
                        <input type="submit" className="btn btn-primary" value="Zaloguj" />
                    </div>
                </div>
            </form>
        </main>
    );
};

export default Main;
