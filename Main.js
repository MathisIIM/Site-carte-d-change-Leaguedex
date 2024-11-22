class Gladiateur {
    constructor(nom, vie, attaque, precision) {
        this.nom = nom;
        this.vie = vie;
        this.attaque = attaque;
        this.precision = precision;
    }
     // Méthode pour tester si l'attaque touche
     toucher() {
        let chance = Math.random(); // Génère un nombre entre 0 et 1
        return chance < this.precision; // L'attaque touche si le nombre est inférieur à la précision
    }

    // Méthode pour effectuer une attaque sur un autre gladiateur
    attaquer(cible) {
        if (this.toucher()) {
            console.log(`${this.nom} reussit son attaque sur ${cible.nom} et inflige ${this.attaque} points de degats!`);
            cible.vie -= this.attaque; // Réduit la vie de la cible
        } else {
            console.log(`${this.nom} rate son attaque contre ${cible.nom}!`);
        }
    }
    // Affiche l'état de vie actuel du gladiateur
    afficherVie() {
        console.log(`${this.nom} a ${this.vie} points de vie restants.`);
    }
     // Vérifie si le gladiateur est encore vivant
     estVivant() {
        return this.vie > 0;
    }
}
let Spartacus = new Gladiateur("Spartacus", 30, 8, 0.7);
let Maximus = new Gladiateur("Maximus", 35, 7, 0.6);

while (Spartacus.estVivant() && Maximus.estVivant()) {
    Spartacus.attaquer(Maximus);
    Maximus.afficherVie();
    if (!Maximus.estVivant()) break;
    Maximus.attaquer(Spartacus); 
    Spartacus.afficherVie();
    if (!Spartacus.estVivant()) break;

    console.log("----- Nouveau tour -----");
}
if (Spartacus.estVivant()) {
    console.log("Spartacus remporte le combat !");
} else {
    console.log("Maximus remporte le combat !");
}