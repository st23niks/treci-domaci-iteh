import Navbar from "./Navbar";

function Home() {
    return (
        <div>
            <Navbar />

            <div className="border-bottom p-5">
                <div className="container d-flex align-items-center flex-column justify-content-center">
                    <h1 className="text-success">
                        Home page!
                    </h1>
                    <p>
                        React aplikacija
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;