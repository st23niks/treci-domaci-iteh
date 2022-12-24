import Navbar from "./Navbar";
import InputField from "./InputField";
import { useState } from "react";

function ContactUs() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [isSubmitted, submit] = useState(false);

    return (
        <div>
            <Navbar />

            <div className="border-bottom p-5">
                <div className="container d-flex align-items-center flex-column justify-content-center">
                    <h1 className="text-success">
                        Kontakt stranica!
                    </h1>
                    <p>
                        React aplikacija
                    </p>
                </div>
            </div>

            <div className="border-bottom p-5">
                <div className="container d-flex justify-content-center">
                    <div>
                    <form>
                        <div className="row">
                            <div className="col-6">
                                <InputField
                                    onChange={(e) => setFirstName(e.target.value)}
                                    placeholder="Ime"
                                />
                            </div>
                            <div className="col-6">
                                <InputField
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder="Prezime"
                                />
                            </div>
                            <div className="col-6">
                                <InputField
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email adresa"
                                />
                            </div>
                            <div className="col-6">
                                <InputField
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Broj telefona (+381 ...)"
                                />
                            </div>
                            <div className="col-6"></div>
                            <div className="col-6 d-flex justify-content-end">
                                <button type="button" onClick={() => submit(true)} className="btn btn-dark">
                                    Prosledi &gt;
                                </button>
                            </div>
                        </div>
                    </form>

                    {
                        isSubmitted && firstName && lastName && email && phone &&
                        <div className="mt-5">
                            <div className="alert alert-success" role="alert">
                                Uspesno prosledjeni podaci!
                            </div>

                            <ul>
                                <li>{firstName}</li>
                                <li>{lastName}</li>
                                <li>{email}</li>
                                <li>{phone}</li>
                            </ul>
                        </div>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;