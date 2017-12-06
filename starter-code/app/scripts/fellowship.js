console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');

// part 1

function makeMiddleEarth() {
  //console.log("middle-earth works");
    // create a section tag with an id of middle-earth
    var middleEarth = document.createElement('section');
    for(var i = 0, arry = lands.length; i < arry; i++){
      // add each land as an article tag
      var land = document.createElement('article');
      // inside each article tag include an h1 with the name of the land
      var h1 = document.createElement("h1")                
      var locations = document.createTextNode(lands[i]);    
      h1.appendChild(locations);
      land.appendChild(h1);
      middleEarth.appendChild(land);
    }
    // append middle-earth to your document body
    body.appendChild(middleEarth);
}

// part 2

makeMiddleEarth();

var theShire = body.querySelectorAll('article')[0]; //give the shire a global accessble location.
var rivendell = body.querySelectorAll('article')[1];//give the rivendell a global accessble location.
var mordor = body.querySelectorAll('article')[2];//give the mordor a global accessble location.

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var hobbitList = document.createElement('ul');
  for(var i = 0, arry = hobbits.length; i < arry; i++){
  // give each hobbit a class of hobbit
    var hobbit = document.createElement('li');
    hobbit.className = 'hobbit';
    var shortguys = document.createTextNode(hobbits[i]);
    console.log(shortguys);
    hobbit.appendChild(shortguys);
    hobbitList.appendChild(hobbit);
  }
  theShire.appendChild(hobbitList);
}

makeHobbits();
var frodo = body.querySelectorAll('li')[0]; //find frodo on a global level
var sam = body.querySelectorAll('li')[1]; // same thing for sam
var meriadoc = body.querySelectorAll('li')[2];
var peregrin = body.querySelectorAll('li')[3]; // meriadoc and peregrin located globally
console.log(frodo);
console.log(sam);
console.log(meriadoc);
console.log(peregrin);

// part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // give the div a class of 'magic-imbued-jewelry'
  // add the ring as a child of Frodo

  var theRing = document.createElement('div');
  theRing.setAttribute('id', 'the-ring');
  theRing.setAttribute('class', 'magic-imbued-jewelry');
  theRing.addEventListener('click', nazgulScreech);
  frodo.appendChild(theRing);
}

keepItSecretKeepItSafe();

// part 4

function makeBuddies() {
  // create an aside tag
      // attach an unordered list of the 'buddies' in the aside
        // insert your aside as a child element of rivendell

  var aside = document.createElement('aside');
  var buddyList = document.createElement('ul');
  for(var i = 0, arry = buddies.length; i < arry; i++){ //use this rule if you need to set variables before the loop starts. WC3 Schools.
    var buddy = document.createElement('li');
    buddy.textContent = buddies[i];
    buddyList.appendChild(buddy);
  }
  aside.appendChild(buddyList);
  rivendell.appendChild(aside);
}
makeBuddies();


// part 5

var strider = rivendell.querySelectorAll('li')[3];


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  strider.textContent = 'Aragon';
}

beautifulStranger();

// part 6

var hobbits = theShire.querySelector('ul');

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  rivendell.appendChild(hobbits);
}
leaveTheShire();

var fellowshipMembers = rivendell.querySelectorAll('li');

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
      // alert(fellowshipMembers[i].textContent + ' has joined the fellowship!');
        // add each hobbit and buddy one at a time to 'the-fellowship'
          // after each character is added make an alert that they have joined your party



  var theFellowship = document.createElement('div');
  theFellowship.setAttribute('id', 'the-fellowship');
  for(var i = 0, arry = fellowshipMembers.length; i < arry; i++){
    theFellowship.appendChild(fellowshipMembers[i]);
  }
  rivendell.appendChild(theFellowship);
}

forgeTheFellowShip();

var gandalf = fellowshipMembers[0];

 // part 7
function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border

    gandalf.textContent = 'Gandalf the White';

}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}





// // assemble the hobbits and move them to Rivendell
//     console.log("leaving the shire");

//   var hobbitsAssemble = document.getElementsByClassName("hobbits");
//     var ulHobbit = document.createElement("ul");

// for (i = 0; i < lands.length; i++) {
//         var liHobbit = document.createElement("li");
//         liHobbit.innerHTML =hobbits[i];
//         liHobbit.setAttribute("class", "hobbits");
//         liHobbit.setAttribute("id", hobbits[i]);
//         console.log(liHobbit);
//       }
//       var rivendell = document.querySelector("article");
//       rivendell.appendChild("hobbits");
