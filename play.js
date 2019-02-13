var textDiv = document.getElementById("textDiv");
var textArray = ("We're always desiging a better world at work").split('');
var cnv;

for (let i = 0; i < textArray.length; i++) {
  let ww = document.createElement('span');
  ww.textContent = textArray[i];
  let id = 'txt' + i;
  ww.id = id;
  ww.style.fontFamily = 'nouf';
  ww.style.fontSize = "50px";
  ww.style.color = '#F9C8C0';
  ww.style.fontVariationSettings = " 'wght' " + 0;
  textDiv.appendChild(ww);
}

function setup(){
  cnv = createCanvas(window.innerWidth, window.innerHeight);
  cnv.parent('container');
}

function draw() {
  background('#F0646115');
  noFill();
  ellipse(mouseX,mouseY,30,30);

  var ptList = {};
  var distances = {};
  var xCorner, yCorner, w, h;
  var letterDiv;

  // finding center of each letter
  for(let i=0;i<textArray.length;i++) {
    letterDiv = document.getElementById("txt" + i);

    let xCorner = letterDiv.offsetLeft;
    let yCorner = letterDiv.offsetTop;
    let w = letterDiv.offsetWidth / 2;
    let h = letterDiv.offsetHeight / 2;
    ptList[i] = {'x':xCorner+w,'y':yCorner+h, 'index': i, 'letter': letterDiv.innerHTML};
  }

  // calculating distances to mouse
  for (let l=0;l<textArray.length;l++)
  {
    let text = ptList[l].letter;
    let letter = ptList[l];
    let distance = dist(letter.x,letter.y,mouseX,mouseY);
    distances[l] = {'index':letter.index,'dist':distance, 'letter': text};
  }

  // attractor point - changing variability based on distances
  for (let n=0;n<textArray.length;n++){
    let letterDiv = document.getElementById("txt" + n);
    let text = distances[n].letter;
    var impact = 1272;
    let radius = map(distances[n].dist,0,impact/8,150,0);

    letterDiv.style.fontVariationSettings = " 'wght' " + radius;
  }
}
