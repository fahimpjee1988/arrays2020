
//Lev1_1_1_js-vertiefung_arrays

let housing = ["Straße", "Postleitzahl", "Ort", "Bundesland"
]

let friends = ["Rigon","Fahim","Ilias"]

let teilnehmer = ["Adjmal","Karim","Tobias","Yayha","Daniel"]

let person = ["Namen", "Nachnamen", "Spitznamen", "Alter", "Hobby", "Geburtsort", "Bootcamp"]


console.log(housing)
console.log(friends)
console.log(teilnehmer)
console.log(person)

person.push("adresse", "teilnehmer", "bestefreunde")
console.log(person)

//Lev1_1_2_js-vertiefung_arrays-length


console.log(person.lenght);

let person1= person.slice(-3,10)

console.log(person1) 


//Lev1_2_js-vertiefung_arrays_3-moglichkeiten


let meineTrainers1= ["Sam", "Christian", "Anass","Michal" ] 
console.log(meineTrainers1)

var meineTrainer2 = new Array ("Sam", "Christian", "Anass", "Michal")

console.log(meineTrainer2);

var meineTrainer3 = new Array();
meineTrainer3[0] = "Sam";
meineTrainer3[1] = "Christian";
meineTrainer3[2] = "Anass";
meineTrainer3[3] = "Michal";

console.log(meineTrainer3)



//Lev1_5_1_js-vertiefung_arrays_push()

let songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"]

songs.push("Sweet Child O'Mine")

console.log(songs)

let soccerplayer = ["Zidane","Ronaldo","C.Ronaldo","Pele","Roberto Carlos"]


soccerplayer.push("Drogab","Maldini","Ronaldinho")

console.log(soccerplayer)


//Lev1_5_2_js-vertiefung_arrays_push()-arrays-in-array

let heroUndEnemy =[["Batman", "The Joker"],["Professor X", "Magneto"],["Thor", "Loki"]]

heroUndEnemy.push =[["Superman","DarkLord"],["Angela Merkel","Donald Trump"],["Sherlock Homes","Dr.NoHelp"]]

console.log(heroUndEnemy)

//Lev1_6_js-vertiefung_arrays_pop()

let entfernterSong = songs.pop()

console.log(entfernterSong)
console.log(songs)


let entfernterFussballer = soccerplayer.pop()

console.log(entfernterFussballer)
console.log(soccerplayer)

let soccerplayer1 = soccerplayer.pop(-3,-2,-1)

console.log(soccerplayer)
console.log(soccerplayer1)

//Lev1_7_js-vertiefung_arrays_unshift()


let gerichte =["Speckkuchen", "Thüringer Rostbratwurst", "Quarkkeulchen", "Sauerbraten"]


gerichte.unshift("Pasta","Pizza","Toast","Banane","Apfel")

console.log(gerichte)

gerichte.shift("Banane","irgendwas","neu")


//Lev1_9_js-vertiefung_arrays_push-pop-shift-unshift-difference 


let zahlen = [23, 54, 75];

zahlen.push(23,24,25)

console.log(zahlen)

zahlen.unshift(1, 3)

zahlen.pop()


//Lev1_3_js-vertiefung_arrays_index


let numberArray= [5,6,7,8,9,10]

console.log(numberArray)

numberArray[5],
console.log(numberArray[0],numberArray[5])