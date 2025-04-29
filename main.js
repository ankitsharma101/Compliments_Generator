let btn = document.getElementById("btn");
let output = document.getElementById("output");
let compliment = [
  "You have the best laugh.",
  "You're like sunshine on a rainy day.",
  "You're even more beautiful on the inside than you are on the outside.",
  "You bring out the best in other people.",
  "You're the reason someone believes in good people.",
  "You light up the room without even trying.",
  "You're cooler than a polar bear in sunglasses.",
  "You have something on your face… oh wait, it’s just pure charm.",
  "You're the human version of a Sunday morning.",
  "You're basically a walking playlist of good vibes.",
  "You’re not just a snack—you’re the whole funky buffet.",
  "You're so smooth, butter takes notes.",
  "You make even Mondays feel like a festival.",
  "You're genuinely a good person.",
];

btn.addEventListener("click", function () {
  var randomCompliment = compliment[Math.floor(Math.random() * compliment.length)];
  output.style.opacity=0;
  setTimeout(()=>{
      output.innerHTML = randomCompliment;
      output.style.opacity=1;
  },150)
});
