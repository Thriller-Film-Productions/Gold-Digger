const renderButton = function() {
  image(imgs.miner, 0, scrl, width / 3, width / 9);
  line(0, width / 9, width, width / 9);
  fill(0);
  noStroke();
  textSize(14);
  text('cost:'+calcPrice(buildings.miner.amount + 1, 1, 5)+' you have '+buildings.miner.amount, 10, scrl+50, width/3/2, width/9/1.1);
}

const mousePressed = function() {
  if (mouseX > 0 && mouseX < width/3 && mouseY < width/9+scrl && mouseY > 0 && calcPrice(buildings.miner.amount + 1, 1, 5) <= gold) {
    gold-=calcPrice(buildings.miner.amount + 1, 1, 5);
    buildings.miner.amount++;
  }
}

const calcPrice = function(x, y, z) {
  return round(pow(x, 2)*sqrt(y)+z);
}