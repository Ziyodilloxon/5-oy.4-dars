let btn = document.querySelector("#btn");
function RandomDegree() {
  let RandomDegree1 = Math.floor(Math.random() * 271);
  let RandomDegree2 = Math.floor(Math.random() * 271);
  let RandomDegree3 = Math.floor(Math.random() * 271);
  return `rgb(${RandomDegree1},${RandomDegree2},${RandomDegree3})`;
}
function RandomColor() {
  let RandomNum1 = Math.floor(Math.random() * 256);
  let RandomNum2 = Math.floor(Math.random() * 256);
  let RandomNum3 = Math.floor(Math.random() * 256);
  return `rgb(${RandomNum1},${RandomNum2}, ${RandomNum3})`;
}
function BgColor1() {
  let randomColor1 = RandomColor();
  let randomColor2 = RandomColor();
  let background =
    "linear-gradient( " + randomColor1 + ", " + randomColor2 + ")";
  document.body.style.background = background;
}
function BgColor2() {
  let randomColor = RandomColor();
  body.style.backgroundColor = randomColor;
}
