export default function NavbarComponent() {
    return (
        <>
            <header className="db-mainbar">
                <div className="container db-mainbar-container">
                    <div className="col db-mainbar-logo-container">
                        <p>Kanban</p>
                    </div>
                </div>
            </header>
            <header className="db-mainbar db-navbar">
                <div className="container db-navbar-options">
                    <div className="col-4 db-navbar-buttons">
                        <a className="db-navbar-button" href="">Home</a>
                        <a className="db-navbar-button" href="">Teams</a>
                        <a className="db-navbar-button" href="">Configuration</a>
                    </div>

                    <div className="col-2 db-navbar-end">
                        <div className="db-navbar-container-taskpoints">
                            <a className="db-navbar-button-taskpoints" href="">Taskpoints</a>
                            <p>329</p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
