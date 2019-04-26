const facets = [
  [[82, 183], [97, 162], [83, 164], [83, 173]],
  [[82, 154], [90, 158], [92, 161], [82, 164], [82, 164]],
  [
    [80, 225],
    [110, 219],
    [116, 150],
    [79, 152],
    [97, 163],
    [82, 182],
    [82, 182]
  ],
  [[82, 120], [108, 145], [114, 148], [83, 148], [83, 148]],
  [
    [88, 119],
    [108, 116],
    [127, 134],
    [142, 121],
    [183, 119],
    [200, 134],
    [214, 121],
    [217, 120],
    [219, 144],
    [205, 149],
    [117, 149],
    [100, 135]
  ],
  [[118, 223], [118, 164], [147, 189], [148, 218], [117, 219], [120, 216]],
  [
    [118, 152],
    [150, 188],
    [218, 184],
    [218, 165],
    [206, 153],
    [124, 152],
    [124, 152]
  ]
];
const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

canvas.style.border = "1px solid green";

function rgb() {
  return Math.floor(Math.random() * 256);
}

function randomColor() {
  return `rgb(${rgb()},${rgb()},${rgb()})`;
}

function drawShape(points) {
  points.forEach(([x, y], i) => {
    if (i == 0) {
      ctx.moveTo(x, y)
    } else {
      ctx.lineTo(x, y)
    }

    ctx.fillStyle = randomColor();
    ctx.fill();
  });
}

function drawPolygons(coordList) {
  coordList.forEach((shape) => {
    ctx.beginPath()
    drawShape(shape)
  })
}

drawPolygons(facets)



const squarePoints = [[0, 0], [0, 4], [4, 4], [4, 0]] // 16
const rectPoints = [[0, 0], [0, 4], [8, 4], [8, 0]] // 32

function polygonArea(points) {
  const numPoints = points.length
  const xList = points.map(([x]) => (x))
  const yList = points.map(([, y]) => (y))
  let area = 0;         // Accumulates area in the loop
  let j = numPoints - 1;  // The last vertex is the 'previous' one to the first

  for (i = 0; i < numPoints; i++) {
    area = area + (xList[j] + xList[i]) * (yList[j] - yList[i]);
    j = i;  //j is previous vertex to i
  }

  return area / 2;
}

const squareArea = polygonArea(squarePoints)
const rectArea = polygonArea(rectPoints)

console.log('sq', squareArea)
console.log('rect', rectArea)

const roofArea2D = facets.reduce((acc, facet) => {
  const facetArea = polygonArea(facet)
  acc += facetArea
  return acc
}, 0)

document.getElementById('areaLabel').innerText = `Area: ${roofArea2D}`


