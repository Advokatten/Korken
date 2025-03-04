let login_username = document.getElementById("login_username");
let login_password = document.getElementById("login_password");
let login_output = document.getElementById("login_output");

let login_attempts = 0;

function AdminLogin() {

    let username_label = document.getElementById("login_username_label");
    let password_label = document.getElementById("login_password_label");

    // Brukernavn og passord laget av registrering
    if (login_attempts === 8) {
        login_output.innerHTML = "Du har nådd grensen av antall forsøk. Prøv igjen senere.";
    } else if (login_username.value === "KorkenLord" && login_password.value === "LegoMan3251") {
        login_output.innerHTML = "Hei Administrator";
    } else {
        login_output.innerHTML = "Feil brukernavn eller passord";
        login_attempts++;
    }

    // Legg til rød * i felt navnene for å representere at de må fylles
    if (login_username.value.trim() === "") {
        username_label.innerHTML = "Brukernavn:<span class='signToFillField'>*</span>";
        login_output.innerHTML = `Du må fylle alle feltene`;
    } else {
        username_label.innerHTML = "Brukernavn:";
    }

    if (login_password.value.trim() === "") {
        password_label.innerHTML = "Passord:<span class='signToFillField'>*</span>";
        login_output.innerHTML = `Du må fylle alle feltene`;
    } else {
        password_label.innerHTML = "Passord:";
    }
}