const xArray = [80, 75, 35, 25, 95, 5];
const yArray = ["HTML ", "CSS ", "JavaScript ", "Laravel ", "Figma ", "fue js ", ];

const data = [{
  x:xArray,
  y:yArray,
  type:"bar",
  orientation:"h",
  marker: {color:"rgba(255,0,0,0.6)"}
}];

const layout = {title:"Program Language and Skill"};

Plotly.newPlot("myPlot", data, layout);