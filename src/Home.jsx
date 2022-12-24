import Navbar from "./Navbar";
import InputField from "./InputField";
import { useState } from "react";

function Home() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [result, setResult] = useState(0);

    // https://www.calculator.net/bmi-calculator.html
    const color = () => {
        if (result >= 18.5 && result < 25) {
            return "alert-success";
        }

        if ((result >= 17 && result < 18.5) || (result >= 25 && result < 30)) {
            return "alert-warning";
        }

        if ((result > 0 && result < 17) || result >= 30) {
            return "alert-danger";
        }

        return "alert-info";
    };

    return (
        <div>
            <Navbar />

            <div className="border-bottom p-5">
                <div className="container d-flex align-items-center flex-column justify-content-center">
                    <h1 className="text-success">
                        Pocetna stranica!
                    </h1>
                    <p>
                        React aplikacija
                    </p>
                </div>
            </div>

            <div className="border-bottom p-5">
                <div className="container d-flex flex-column justifu-content-center align-items-center">
                    <h2 className="text-info">
                        BMI Kalkulator
                    </h2>
                    <p>
                        Unesite visinu i tezinu u formi ispod, i rezultat ce se prikazati sa desne strane
                    </p>
                    <div className="d-flex justify-content-space-between">
                        <form>
                            <InputField
                                type="number"
                                onChange={(e) => setWeight(e.target.value)}
                                placeholder="Weight (kg)"
                            />

                            <InputField
                                type="number"
                                step=".1"
                                onChange={(e) => setHeight(e.target.value)}
                                placeholder="Height (m)"
                            />

                            <button
                                type="button"
                                onClick={() => setResult(weight / (height ^ 2))}
                                className="btn btn-dark">Izracunaj &gt;</button>
                        </form>

                        <div className={`ms-5 alert ${color()}`} role="alert">
                            <strong>Rezultat:</strong>
                            <br/>
                            {result}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;