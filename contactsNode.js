console.log("1: Consulter les contacts.");
console.log("2: Ajouter un contact.");
console.log("3: Supprimer un contact."); 
console.log("4: Sortir");                   //Affichage des choix possible
class Contact {
    constructor (nom, prenom, numero){
        this.nom=nom;
        this.prenom=prenom;              //Construction d'un contact
        this.numero=numero;
    }

    decrire(){
        return `${this.nom}, ${this.prenom} : ${this.numero}`;  //Méthode de description du contact
    }
}

function ajoutContact(){
    prompt.start()

    const processPromptResponse = function(err,res) {
        const nom = res.nom
        const prenom = res.prenom
        const numero = res.numero

        const contact = new Contact(nom, prenom, numero);
        contacts.push(contact);

        console.log(contact.decrire());
        console.log("Contact ajouté.")
    }

    prompt.get(["nom", "prenom", "numero"], processPromptResponse)

    // const nom = console.log("Entrez le nom du contact");
    // const prenom = console.log("Entrez le prénom du contact");                                                //Fonction pour ajouter un contact au tableau
    // const numero = console.log("Entrez le numéro du contact");
    // const contact = new Contact(nom, prenom, numero);
    // contacts.push(contact);
    // return contact.decrire();
}

const contacts = ["Lorie, Pailhiez : 02646","Angy, Hamouis : 02515"]; //Tableau des contacts

var prompt = require("prompt");

let tour = 1;
//while (tour< 2){
    prompt.start();
    //console.log("Quoi faire ?");
    const choix = console.log("Quoi faire ?");
    prompt.get("choix", function(ess,res){
    if (res.choix === "1"){
        for (const cont of contacts){           //Boucle qui parcour le tableau et affiche les cases une à une
            console.log(cont); 
        }
    }
    else if (res.choix ==="2"){
        //const d = console.log("Ajout en début ou fin de tableau ? (Ecrire début ou fin)");
        //d.toLowerCase();
        /*if (d === "début"){
            const nom = prompt("Entrez le nom du contact");
            const prenom = prompt("Entrez le prénom du contact");       //Fonction pour ajouter un contact au tableau
            const numero = prompt("Entrez le numéro du contact");
            const contact = new Contact(nom, prenom, numero);
            contacts.unshift(contact);
            console.log(contact.decrire());
            //console.log(ajout);
            console.log("Contact ajouté.")
        } else {
            const ajout = ajoutContact();        //Appele de la fonction d'ajout de contact
            console.log(ajout);
            console.log("Contact ajouté.");
        }*/
        const ajout = ajoutContact();        //Appele de la fonction d'ajout de contact
    } else if (res.choix ==="3"){
        contacts.pop();
        for (const cont of contacts){           //Suppression du dernier contact
            console.log(cont); 
        }
    }
    else {
        console.log("Bye bye");
        tour ++;                               //Sortie de la boucle
    }
});
//}