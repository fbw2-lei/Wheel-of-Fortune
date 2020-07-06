let counter = 0;
let stopLocations = [];
let scores = [];

function pleaseRotate() {
  counter++;
  if (counter <= 3) {
    var randDeg = (Math.round(Math.random() * 7) + 1) * 45;

    /* grab wheel and apply animation on it */
    var wheel = document.getElementById("wheel");
    wheel.style.setProperty("--r", `${randDeg}deg`);
    animationName = `circle-rotate${counter}`;
    wheel.style.animation = `${animationName} 5s ease-out forwards`;

    /* define the sections to in array to find values when wheel stops rotating */
    var wheelVals = [60, 80, 30, 30, 50, 10, 90, 20, 60];
    stopLocations.push(randDeg / 45);
    console.log(stopLocations);
    scores.push(wheelVals[stopLocations[counter - 1]]);
    console.log(scores);
    var result = scores.reduce(function (a, b) {
      return a + b;
    }, 0);

    document.getElementById("score").innerHTML = `Score: ${result}`;
  }
}
