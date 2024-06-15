let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying",
];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateExcuse() {
  const randomWho = getRandomElement(who);
  const randomAction = getRandomElement(action);
  const randomWhat = getRandomElement(what);
  const randomWhen = getRandomElement(when);

  const excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  document.getElementById("excuse").textContent = excuse;
}
