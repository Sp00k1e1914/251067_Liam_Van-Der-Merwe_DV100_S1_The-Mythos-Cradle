lesserCount = () => {

    let nom = document.getElementById('hoeveelheidWit').value;
    if(nom > 0){
        nom--;
    }
    document.getElementById('hoeveelheidWit').value = nom; 
}

greaterCount = () => {

    let nom = document.getElementById('hoeveelheidWit').value;
    nom++;
    document.getElementById('hoeveelheidWit').value = nom;
}



let uForm = document.forms['cForm'];

uForm.addEventListener("submitC", retainInfo);

retainInfo = (event) => {

    event.preventDefault();

}