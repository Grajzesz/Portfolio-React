import React from 'react';
const Contact = () => {
    return (
        <section className="formularz">
            <div id="form__container-title" className="form__container-title">Contact</div>
            <form method="POST" action="./mail.php">
                <div className="box">
                    {/* <h1>Formularz kontaktowy :</h1> */}
                    {/* <label>
        <span>Nazwa użytkownika</span>
        <input type="text" className="wpis" name="nazwa" id="nazwa"/>
        </label> */}
                    <label>
                        <span>E-mail :</span>
                        <input
                            type="text"
                            className="wpis"
                            name="email"
                            id="email"
                        />
                    </label>
                    <label>
                        <span>Temat :</span>
                        <input
                            type="text"
                            className="wpis"
                            name="temat"
                            id="temat"
                        />
                    </label>
                    <label>
                        <span>Wiadomość :</span>
                        <textarea
                            className="wiadomosc"
                            name="wiadomosc"
                            id="tresc"
                        />
                    </label>
                    <input type="submit" className="button" value="Wyślj" />
                </div>
            </form>
        </section>
    );
};

export default Contact;
