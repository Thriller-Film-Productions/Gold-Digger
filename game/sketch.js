let gold = parseInt(getData('gold', 0));
let buildings = parse(getData('buildings', stringify({
	"miner": {
		"amount": 10,
		"time": 10,
    "perBuilding":1
	}
})));
let goldWhenClick = 1;
let world = [];
let presets;
let seconds;
let imgs = {};
let scrl = 0;

function setup() {
	createPage();
	createCanvas(windowWidth / 3 * 2, windowHeight).position(width / 2, 0);
}

function draw() {
  //setup
	background(255, 255, 220);
	select('#gold').elt.innerHTML = "Gold: " + gold;
	stroke(51);
	strokeWeight(5);
	noFill();
	rect(0, 0, width, height);
  line(width/3, 0, width/3, height);
  renderButton();
}

function onBlur() {
	seconds = Math.floor(new Date().getTime()/1000);
}

function onFocus() {
	if (seconds) {
		let seconds2 = Math.floor(new Date().getTime()/1000);
		let keys = Object.keys(buildings)
		for (var i = 0; i < keys.length; i++) {
      let building = buildings[keys[i]]
      gold+=amountOfGold(seconds2-seconds, building);
		}
	}
}

function handleVisibilityChange() {
  if (document.hidden) {
    onBlur();
  } else  {
    onFocus();
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);

setInterval(save, 5000)
setInterval(giveGold, 1000)
