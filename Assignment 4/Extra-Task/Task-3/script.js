const height = document.querySelector('.height');
const width = document.querySelector('.width');
const btn = document.querySelector('.area');
const p = document.querySelector('p');



btn.addEventListener('click', () => {
  let hValue = height.value;
  let wValue = width.value;
  let area = hValue * wValue;
  p.innerText = area;
  btn.style.display = "none";
})