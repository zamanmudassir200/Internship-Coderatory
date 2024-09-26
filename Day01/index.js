// 1. xml to json -normal function
// 2. dict wala - callback function
// 3. revrse String - recursive
// 4. identify part of speech -
// 5. khud bana lenge -
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  `          Press 1: XML TO JSON CONVERTER
             Press 2: Duplicate Words Finder
             Press 3: Reverse String
             Press 4: Parts of Speech Finder
             Press 5: Add Function \n`,
  (option) => {
    if (option === "1") {
      xmlToJson();
      exit = false;
    } else if (option === "2") {
      duplicateWords();
    } else if (option === "3") {
      reverseString();
    } else if (option === "4") {
      partsOfSpeechFinder();
    } else if (option === "5") {
      add();
    } else {
      console.log("Invalid option");
      rl.close();
    }
  }
);

// ? Q:1
const xml2js = require("xml2js");
function xmlToJson() {
  // fs.readFile("./xmlData.xml", "utf-8", (err, xmlData) => {
  //   if (err) {
  //     console.log("Error reading XML file: ", err);
  //   }
  // });
  const xmlData = `<note>
       <to>Tove</to>
        <from>Jani</from>
        <heading>Reminder</heading>
         <body>Don't forget me this weekend!</body> 
</note>`;
  const parser = new xml2js.Parser();

  parser.parseString(xmlData, (err, result) => {
    if (err) {
      console.error("Error parsing XML:", err);
    } else {
      const jsonData = JSON.stringify(result, null, 2);
      console.log("Converted JSON:", jsonData);
    }
  });
}

// //? Q:2
const duplicateWords = () => {
  rl.question("--- Please enter a paragraph: ---", (para) => {
    rl.question("--- Enter any word: --- ", (findWord) => {
      let splittedPara = para.split(" ");
      let countDuplicatedWord = 0;
      let dictOfDuplicateWord = [];

      for (let word of splittedPara) {
        if (findWord !== "") {
          if (word === findWord) {
            countDuplicatedWord += 1;
            dictOfDuplicateWord.push(word);
          }
        } else {
          console.log("Please enter all fields");
        }
      }
      console.log(`The count of duplicate word is:, ${countDuplicatedWord} `);
      console.log(dictOfDuplicateWord);
      rl.close();
    });
  });
};

//? Q:3

const reverseString = () => {
  rl.question("Please enter any string: ", (str) => {
    if (str !== "" || str !== null) {
      let reverseStr = "";
      for (let char = str.length - 1; char >= 0; char--) {
        reverseStr += str[char];
      }
      console.log(reverseStr);
    } else {
      console.log("Please add a string argrument");
    }
    rl.close();
  });
};

// ? Q4

function add() {
  rl.question("Enter num 1: ", (a) => {
    rl.question("Enter num 2: ", (b) => {
      rl.question("Enter num 3: ", (c) => {
        console.log(Number(a) + Number(b) + Number(c));
      });
    });
  });
}

// ? Q:5
const nlp = require("compromise");
const partsOfSpeechFinder = () => {
  rl.question("Please enter any paragraph --  :", (para) => {
    const doc = nlp(para);

    const pos = doc.out("tags");
    // const pos = doc.json().forEach((token) => {
    //   token.terms.forEach((term) => {
    //     console.log(`Word: ${term.text}, Part of Speech: ${term.tags.join(", ")}`);
    //   });
    // });
    console.log(pos);
    rl.close();
  });
};
