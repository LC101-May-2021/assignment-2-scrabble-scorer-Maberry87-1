// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85
const input = require('readline-sync');

const oldPointStructure = {
	1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
	2: ['D', 'G'],
	3: ['B', 'C', 'M', 'P'],
	4: ['F', 'H', 'V', 'W', 'Y'],
	5: ['K'],
	8: ['J', 'X'],
	10: ['Q', 'Z']
};

const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

function transform(oldPointingSystem) {
	let newStructure = {};
	for (item in oldPointingSystem) {
		for (i = 0; i < oldPointingSystem[item].length; i++) {
			let letter = oldPointingSystem[item][i].toLowerCase();
			newStructure[letter] = Number(item);
		}
	}
	return newStructure;
}

let newPointStructure = transform(oldPointStructure);
newPointStructure[' '] = 0;

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = '';

	for (let i = 0; i < word.length; i++) {
		for (const pointValue in oldPointStructure) {
			if (oldPointStructure[pointValue].includes(word[i])) {
				letterPoints += `Points for '${word[i]}': ${pointValue}\n`;
			}
		}
	}
	return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0123456789]/;
function initialPrompt() {
	let userWord = input.question(
		"Let's play some scrabble! \n \nEnter a word to score: "
	);
	while (specialChars.test(userWord)) {
		userWord = input.question(
			"Let's play some scrabble! \n \nEnter a word to score: "
		);
	}
	return userWord;
}

function simpleScore(word) {
	let points = 0;
	for (let i = 0; i < word.length; i++) {
		if (word[i] === ' ') {
			points = points + 0;
		} else {
			points = points + 1;
		}
	}
	return points;
}

function vowelBonusScore(word) {
	let points = 0;
	//word = word.toUpperCase();
	for (let i = 0; i < word.length; i++) {
		if (vowels.includes(word[i])) {
			points = points + 3;
		} else if (word[i] === ' ') {
			points = points + 0;
		} else {
			points = points + 1;
		}
	}
	return points;
}

function scrabbleScore(word) {
	word = word.toLowerCase();
	let points = 0;
	for (i = 0; i < word.length; i++) {
		points = points + newPointStructure[word[i]];
	}
	return points;
}

let simple = {
	name: 'Simple Score',
	description: 'Each letter is worth 1 point.',
	scoringFunction: simpleScore
  //scoringFunction: function(word) {
//		return simpleScore(word);
//	}
};

let vowelBonus = {
	name: 'Bonus Vowels',
	description: 'Vowels are 3 pts, consonants are 1 pt.',
	scoringFunction: vowelBonusScore
  /*scoringFunction: function(word) {
		return vowelBonusScore(word);
  }*/
};

let scrabble = {
	name: 'Scrabble',
	description: 'The traditional scoring algorithm.',
	scoringFunction: scrabbleScore
  //scorerFunction: function (word){return oldScrabbleScorer (word)}
	/*scoringFunction: function(word) {
		return scrabbleScore(word);
  }*/
};

const scoringAlgorithms = [ simple, vowelBonus, scrabble ];
//console.log(scoringAlgorithms);

function scorerPrompt(word) {
	let scoreType = input.question(
		'Which scoring algorithm would you like to use? \n\n0 - Simple: One point per character \n1 - Vowel Bonus: Vowels are worth 3 points \n2 - Scrabble: Uses scrabble point system \nEnter 0, 1, or 2: '
	);

	while (isNaN(scoreType) || scoreType > 2 || scoreType < 0) {
		scoreType = input.question(
			'\nWhich scoring algorithm would you like to use? \n\n0 - Simple: One point per character \n1 - Vowel Bonus: Vowels are worth 3 points \n2 - Scrabble: Uses scrabble point system \nEnter 0, 1, or 2: '
		);
	}
	return console.log(
		`Score for '${word}': ${scoringAlgorithms[scoreType].scoringFunction(word)}`
	);
}

function runProgram() {
	scorerPrompt(initialPrompt());
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scconst input = require("readline-sync");

   const oldPointStructure = {
     1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
     2: ['D', 'G'],
     3: ['B', 'C', 'M', 'P'],
     4: ['F', 'H', 'V', 'W', 'Y'],
     5: ['K'],
     8: ['J', 'X'],
     10: ['Q', 'Z']
   };
   
   function oldScrabbleScorer(word) {
     word = word.toLowerCase();
     let letterPoints = 0;
   
     for (let i = 0; i < word.length; i++) {
   
       for (pointValue in oldPointStructure) {
         if (oldPointStructure[pointValue].includes(word[i])) {
           letterPoints += Number(pointValue);
         }
   
       }
     }
   
     return letterPoints;
   }
   
   // your job is to finish writing these functions and variables that we've named //
   // don't change the names or your program won't work as expected. //
   
   function initialPrompt() {
     let userInput = input.question("Let's play some scrabble! \n\nEnter a word: ")
     return userInput;
   };
   
   let simpleScore = function(word) {
     let numericalScore = word.length;
     console.log(`Your score for '${word}': ${numericalScore}`);
     return numericalScore;
   };
   
   let vowelBonusScore = function(word) {
     word = word.toUpperCase();
     const vowelScoring = {
       3: ["A", "E", "I", "O", "U"],
       1: ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
     };
     let letterPoints = 0;
     for (let i = 0; i < word.length; i++) {
   
       for (const pointValue in vowelScoring) {
         if (vowelScoring[pointValue].includes(word[i])) {
           letterPoints += Number(pointValue)
         };
   
       };
     };
     console.log(`Your score for '${word}': ${letterPoints}`);
     return letterPoints;
   };
   
   let scrabbleScore = function(word) {
     word = word.toUpperCase();
     let letterPoints = 0;
   
     for (let i = 0; i < word.length; i++) {
   
       for (pointValue in oldPointStructure) {
         if (oldPointStructure[pointValue].includes(word[i])) {
           letterPoints += Number(pointValue);
         }
   
       }
     }
   
     return letterPoints;
   };
   let simpleScoreObject = {
     name: "Simple Score",
     description: "Each letter is worth 1 point.",
     scoringFunction: simpleScore
   };
   let vowelBonusScoreObject = {
     name: "Bonus Vowels",
     description: "Vowels are 3 pts, consonants are 1 pt.",
     scoringFunction: vowelBonusScore
   };
   let oldScrabbleScorerObject = {
     name: "Scrabble",
     description: "The traditional scoring algorithm.",
     scoringFunction: scrabbleScore
   };
   let scoringAlgorithms = [simpleScoreObject, vowelBonusScoreObject, oldScrabbleScorerObject];
   
   function scorerPrompt() {
     word = initialPrompt()
     let userInput = Number(input.question(`Which scoring algorithm would you like to use?\n
     0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}\n
     1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}\n
     2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}\n
     Enter 0, 1, or 2:  `));
     
     if (userInput === 0) {
       return simpleScore(word)
     } else if (userInput === 1) {
       return vowelBonusScore(word)
     } else if (userInput === 2) {
       return oldScrabbleScorer(word)
     };
   
   };
   
   function transform(oldObject) {
     let newPointStructure = {};
     
       for (pointValue in oldObject) {
         console.log(oldObject[pointValue])
         let letters = oldObject[pointValue];
         for (let i = 0; i < letters.length; i++){
         let letter = letters[i].toLowerCase();
         newPointStructure[letter] = Number(pointValue);
   
       }
     }
     return newPointStructure;
      
     
   };
   let newPointStructure = transform(oldPointStructure);
   console.log(newPointStructure)
    /* a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10*/oringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
