const favouriteSongs = ["Tiny Dancer", "Running Up That Hill", "Don't Stop Moving", "Tragedy", "Crazy Horses"];
const profit = [1, 2, 4, 8, 16, 32, 64];
const friends = [
    {"name": "Chris", "skill": "changing lives"},
    {"name": "Lizzie", "skill": "being friendly"},
    {"name": "Ben", "skill": "code rapping"},
    {"name": "Tao", "skill": "hand raising"},
    {"name": "Liz", "skill": "crochet"},
    {"name": "Patrick", "skill": "Call of Duty"},
    {"name": "Tim", "skill": "analogies"},
    {"name": "James", "skill": "friendship"},
    {"name": "Joseph", "skill": "being positive"},
    {"name": "Max", "skill": "papier-mâché"},
]

let options = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  console.log(options[11]);
  console.log(options[1]);
  console.log(options[0]);

  let englishNumbers = ["one", "two", "three", "four", "five"];

  let index = 0;

  //In a while loop, console.log the array item at the current index and add 1 to the index variable.
  //Have the while loop run until the index is equal to or greater than the array's length property.

  while (index <= englishNumbers.length) {
    console.log(englishNumbers[index])
    index++
  };

  for (let index = 0; index <= englishNumbers.length; index++) {
    console.log(englishNumbers[index]);
  }

 // Use a for loop to iterate over the words array and add the letter t to the end of each word ("ben" becomes "bent", "ha" becomes "hat", etc.).

  let words = ["ben", "ha", "spla", "fa", "ca", "dra"];

for (let i = 0; i < words.length; i++) {
   words[i] =  `${words[i]}t`;
}
console.log(words);