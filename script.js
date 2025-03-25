window.onload = function() {
    if (localStorage.getItem("LoggedIn") === "true") {
        document.getElementById("admin_welcome").innerHTML = "Velkommen Administrator";
        document.getElementById("login").innerHTML = "";
    } else {
        document.getElementById("admin_welcome").innerHTML = "Velkommen Gjest";
        document.getElementById("post_articles").innerHTML = "";
    }
}

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
    } else if (login_username.value === "test" && login_password.value === "test") {
        login_output.innerHTML = "Hei Administrator";
        localStorage.setItem("LoggedIn", "true");
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

function AdminLogout() {
    if (localStorage.getItem("LoggedIn") === "true") {
        localStorage.setItem("LoggedIn", "false");
    }
}

function PostArticle() {
    const article = document.getElementById("the_article");
    const art_image = document.getElementById("imageSelected").files[0];
    const art_text = document.getElementById("articleText");

    if (art_image) {
        const reader = new FileReader();
        reader.onload = function (e) {
            article.innerHTML = `<img src="${e.target.result}" style="max-width:500px; height:auto;">
            <p>${art_text.value}</p>`;
        };
        reader.readAsDataURL(art_image);
    } else {
        article.innerHTML = `<p>${art_text.value}</p>`;
    }
}

const navLinks = document.querySelectorAll('.topnav a');

// Add click event listeners to each link
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove active class from all links
    navLinks.forEach(l => l.classList.remove('active'));
    
    // Add active class to the clicked link
    this.classList.add('active');
  });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

