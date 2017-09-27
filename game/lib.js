function getData(name, defa) {
	if (window.localStorage.getItem(name) || window.localStorage.getItem(name) == undefined) {
		return window.localStorage.getItem(name);
	} else {
		setData(name, defa)
		return defa;
	}
}

function preload() {
  imgs.miner = loadImage('assets/miner.png');
}

function setData(name, data) {
	window.localStorage.setItem(name, data)
}

function save() {
	setData('gold', gold);
	setData('buildings', JSON.stringify(buildings));
	console.log('saved data');
}

function createPage() {
	let div = createDiv('').id('container');
	let goldy = createElement('h1').id('gold').parent(div);
	goldy.style('font-family', 'Ubuntu Mono, sans-serif');
	let goldClick = createImg("assets/goldBar.png");
	goldClick.elt.width = windowWidth / 1123 / 4 * 1123;
	goldClick.elt.height = windowWidth / 1123 / 4 * 794;
	goldClick.mouseClicked(function () {
		gold += parseInt(goldWhenClick)
	});
}

function parse(thing) {
  let thingding = JSON.parse(JSON.stringify(thing))
  console.log(thing);
  if (typeof thingding === 'object') {
    return thingding;
  } else {
    return JSON.parse(thingding); 
  }
}

function stringify(thing) {
	return JSON.stringify(thing);
}

function amountOfGold(time, building) {
  return (building.amount/building.time)*time*building.perBuilding
}

function giveGold() {
		let keys = Object.keys(buildings)
		for (var i = 0; i < keys.length; i++) {
      let building = buildings[keys[i]]
      gold+=Math.floor(amountOfGold(1, building));
		}
}