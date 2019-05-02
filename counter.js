const state = {
  current: 0
};
function increment() {
  state.current++;
}
function reset(){
  state.current = 0;
}
function discrement() {
  state.current--;
}

document.getElementById('incrementButton').addEventListener(
  'click',
  function (){
    increment();
    render();
  }
);

document.getElementById('resetButton').addEventListener(
  'click',
  function (){
    reset();
    render();
  }
);
document.getElementById('discrementButton').addEventListener(
  'click',
  function () {
    discrement();
    render();
  }
)

const state1 = {
  current: 0
};
function increment1() {
  state1.current++;
}
function reset1() {
  state1.current = 0;
}
function discrement1() {
  state1.current--;
}



document.getElementById('increment1Button').addEventListener(
  'click',
  function () {
    increment1();
    render();
  }
);

document.getElementById('reset1Button').addEventListener(
  'click',
  function () {
    reset1();
    render();
  }
);
document.getElementById('discrement1Button').addEventListener(
  'click',
  function () {
    discrement1();
    render();
  }
);

function render() {
  const point1 = document.getElementById('point1');
  point1.innerText = state1.current;
  console.log(state1.current);
  const point = document.getElementById('point');
  point.innerText = state.current;
  console.log(state.current);
}