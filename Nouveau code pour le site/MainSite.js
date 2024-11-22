// Fonction pour basculer le thème
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
}

// Écouteur d'événement sur le bouton pour basculer le thème
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

// Tabs 
const tabs = document.querySelectorAll(".tab");

        // Ajoute un événement de clic à chaque <li>
        tabs.forEach(tab => {
            tab.addEventListener("click", function() {
                
                // Retire la classe "tab-active" de tous les <li>
                tabs.forEach(tab => tab.classList.remove("tab-active"));

                // Sélectionne toutes les <div> de contenu et retire la classe "active"
                const contents = document.querySelectorAll(".content");
                contents.forEach(content => content.classList.remove("active"));

                // Ajoute la classe "tab-active" à l'élément cliqué
                this.classList.add("tab-active");

                // Vérifie quelle tab est sélectionnée et active le contenu correspondant
                if (this.classList.contains("tab-content1")) {
                    document.querySelector(".content1").classList.add("active");
                } else if (this.classList.contains("tab-content2")) {
                    document.querySelector(".content2").classList.add("active");
                } else if (this.classList.contains("tab-content3")) {
                    document.querySelector(".content3").classList.add("active");
                } else if (this.classList.contains("tab-content4")) {
                    document.querySelector(".content4").classList.add("active");
            }
        });
        });

        document.addEventListener("DOMContentLoaded", function () {
            const form = document.querySelector(".form-style");
            const password = document.getElementById("password");
            const confirmPassword = document.getElementById("confirm-password");
        
            form.addEventListener("submit", function (e) {
                // Vérifie si les mots de passe correspondent
                if (password.value !== confirmPassword.value) {
                    e.preventDefault(); // Empêche l'envoi du formulaire
                    alert("Les mots de passe ne correspondent pas !");
                }
            });
            confirmPassword.addEventListener("input", function () {
                if (confirmPassword.value !== password.value) {
                    confirmPassword.style.borderColor = "red";
                } else {
                    confirmPassword.style.borderColor = "green";
                }
            });
        });

