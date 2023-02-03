const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const chunks = expr.match(/.{10}/g);
  const morseCode = chunks.map((chunk) =>
    chunk.replace(/^0+/, "").replace(/10/g, ".").replace(/11/g, "-")
  );
  const decodedMessage = morseCode.reduce((acc, morseCode) => {
    if (morseCode === "**********") {
      return acc + " ";
    } else {
      return acc + MORSE_TABLE[morseCode];
    }
  }, "");
  return decodedMessage;
}

module.exports = {
  decode,
};
