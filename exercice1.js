let sonText = document.getElementById("myText");

let sonInfos = document.getElementById("infos");

let mySend = document.getElementById("send")

let myChoose = document.getElementById("choose")
let myHide = document.getElementById("hide")

let hasard = document.getElementById("hasard")
let elementFive = document.getElementById("elementFive")

let myList = document.getElementById("myList") // UL

let myDelete = document.getElementById("delete") //
let deleteAll = document.getElementById("deleteAll") //

let myTable = []

sonText.innerHTML = "Entrée au mois 10 valeur"; //

myChoose.addEventListener("click", function (){
    let random = Math.floor(Math.random() * myTable.length)
    hasard.innerHTML = "Votre élément choisi aléatoirement :" + myTable[random];
})

myHide.addEventListener("click", function (){
    myFunc()
})

function myFunc() {
    myList.innerHTML  = "";

    for (let obj of myTable){
        let list = document.createElement('li')
        list.innerHTML = obj;
        myList.appendChild(list)
    }
}

deleteAll.addEventListener("click", function (){
    myTable = [];
    myList.innerHTML  = "Tout à était supprimer";
})

myDelete.addEventListener("click", function (){
    myTable.pop()
    console.log(myTable)
    myFunc()
})


mySend.addEventListener("click", function (){
    myTable.push(sonInfos.value)
    if (myTable.length === 10){
        sonText.innerHTML = sonInfos.value; // Affiche ce qu'il a écrit
        myTable.push(sonInfos.value)
    }
    if (myTable.length > 10){
        let random = Math.floor(Math.random() * myTable.length)
        hasard.innerHTML = "Votre élément choisi aléatoirement :" + myTable[random];
    }
    else if (myTable.length > 5){
        elementFive.innerHTML = "Votre 5ème élément est :" + myTable[5]
    }
    console.log(myTable)
})
console.log(myTable)
