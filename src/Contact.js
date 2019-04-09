import React from 'react';
const Contact = () => {
    return (
        <section><form>
        <div class="box">
        <h1>Formularz kontaktowy :</h1>
        <label>
        <span>Nazwa użytkownika</span>
        <input type="text" class="wpis" name="nazwa" id="nazwa"/>
        </label>
        <label>
        <span>E-mail :</span>
        <input type="text" class="wpis" name="email" id="email"/>
        </label>
        <label>
        <span>Temat :</span>
        <input type="text" class="wpis" name="temat" id="temat"/>
        </label>
        <label>
        <span>Wiadomość :</span>
        <textarea class="wiadomosc" name="wiadomosc" id="tresc"></textarea>
        <input type="button" class="button" value="Wyślj" />
        </label>
        </div>
        </form></section>

        
    );
};

export default Contact;