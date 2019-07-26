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
    const nom = prompt("Entrez le nom du contact");
    const prenom = prompt("Entrez le prénom du contact");       //Fonction pour ajouter un contact au tableau
    const numero = prompt("Entrez le numéro du contact");
    const contact = new Contact(nom, prenom, numero);
    contacts.push(contact);
    return contact.decrire();
}

const contacts = ["Lorie, Pailhiez : 02646","Angy, Hamouis : 02515"]; //Tableau des contacts


let tour = 1;
while (tour< 2){
    const choix = prompt("Quoi faire ?")
    if (choix === "1"){
        for (const cont of contacts){           //Boucle qui parcour le tableau et affiche les cases une à une
            console.log(cont); 
        }
    }
    else if (choix ==="2"){
        const d = prompt("Ajout en début ou fin de tableau ? (Ecrire début ou fin)");
        d.toLowerCase();
        if (d === "début"){
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
        }
        /*const ajout = ajoutContact();        //Appele de la fonction d'ajout de contact
        console.log(ajout);
        console.log("Contact ajouté.")*/
    } else if (choix ==="3"){
        contacts.pop();
        for (const cont of contacts){           //Suppression du dernier contact
            console.log(cont); 
        }
    }
    else {
        console.log("Bye bye");
        tour ++;                               //Sortie de la boucle
    }
}

 