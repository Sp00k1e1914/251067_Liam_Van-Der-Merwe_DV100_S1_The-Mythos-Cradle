
//home Slider (attempted)


//Adoption page

// Azuron

lesserCountAZ = () => {

    let nom = document.getElementById('draakNom').value;
    if(nom > 0){
        nom--;
    }
    document.getElementById('draakNom').value = nom; 
}

greaterCountAZ = () => {

    let nom = document.getElementById('draakNom').value;
    nom++;
    document.getElementById('draakNom').value = nom;
}

finalAmountAZ = () => {

    let nom = document.getElementById('draakNom').value;

    let tot = nom * 2500;

    document.getElementById('azuronCost').value = tot;
}


//Yuki

lesserCountK = () => {

    let nom = document.getElementById('kitNom').value;
    if(nom > 0){
        nom--;
    }
    document.getElementById('kitNom').value = nom; 
}

greaterCountK = () => {

    nom = document.getElementById('kitNom').value;
    nom++;
    document.getElementById('kitNom').value = nom;
}
 
finalAmountK = () => {

    let nom = document.getElementById('kitNom').value;

    let tot = nom * 4500;

 document.getElementById('kitCost').value = tot; 
}

//Aurelia

lesserCountA = () => {

    let nom = document.getElementById('grifNom').value;
    if(nom > 0){
        nom--;
    }
    document.getElementById('grifNom').value = nom; 
}

greaterCountA = () => {

    nom = document.getElementById('grifNom').value;
    nom++;
    document.getElementById('grifNom').value = nom;
}
 
finalAmountA = () => {

    let nom = document.getElementById('grifNom').value;

    let tot = nom * 6500;

 document.getElementById('grifCost').value = tot; 
}

//lumina

lesserCountL = () => {

    let nom = document.getElementById('luminNom').value;
    if(nom > 0){
        nom--;
    }
    document.getElementById('luminNom').value = nom; 
}

greaterCountL = () => {

    nom = document.getElementById('luminNom').value;
    nom++;
    document.getElementById('luminNom').value = nom;
}
 
finalAmountL = () => {

    let nom = document.getElementById('luminNom').value;

    let tot = nom * 40000;

 document.getElementById('luminCost').value = tot; 
}

//Starwind

lesserCountS = () => {

    let nom = document.getElementById('starNom').value;
    if(nom > 0){
        nom--;
    }
    document.getElementById('starNom').value = nom; 
}

greaterCountS = () => {

    nom = document.getElementById('starNom').value;
    nom++;
    document.getElementById('starNom').value = nom;
}
 
finalAmountS = () => {

    let nom = document.getElementById('starNom').value;

    let tot = nom * 5000;

 document.getElementById('starCost').value = tot; 
}

//Briar

lesserCountB = () => {

    let nom = document.getElementById('briNom').value;
    if(nom > 0){
        nom--;
    }
    document.getElementById('briNom').value = nom; 
}

greaterCountB = () => {

    nom = document.getElementById('briNom').value;
    nom++;
    document.getElementById('briNom').value = nom;
}
 
finalAmountB = () => {

    let nom = document.getElementById('briNom').value;

    let tot = nom * 3500;

 document.getElementById('briCost').value = tot; 
}


//Grand Total 


// form (attempted)

let form = document.forms['Cform'];
form.addEventListener("submitC", getValues);


 getValues = (event) => {
    event.preventDefault();

    let formData = {
        "naam": this.naam.value,
        "address": this.address.value,
        "subject": this.subject.value,
        "boodskap": this.boodskap.value,

    };
}



//Thank you Message (attempted)


let thanks = document.getElementById('dankie');

openMessage = () => {

    thanks.classList.add("openMessage");

}

closeMessage = () => {

    thanks.classList.remove("openMessage");
}




















let uForm = document.forms['cForm'];

uForm.addEventListener("submitC", retainInfo);

retainInfo = (event) => {

    event.preventDefault();

}