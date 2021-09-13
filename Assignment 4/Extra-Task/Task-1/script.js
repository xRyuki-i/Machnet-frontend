const p = document.querySelector('p');
const initial = p.innerText;

const style = getComputedStyle(p);
const color = style.getPropertyValue('color');
const margin = style.getPropertyValue('margin');
const padding = style.getPropertyValue('padding');

p.addEventListener('mouseover', () => {
  p.innerText = "Told you it'd change";
  p.style.color = "purple";
  p.style.margin = '1em';
  p.style.padding = '1em';
});


p.addEventListener('mouseout', () => {
  p.innerText = initial;
  p.style.color = color; 
  p.style.margin = margin;
  p.style.padding = padding;
});