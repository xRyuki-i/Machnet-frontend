const table = document.querySelector('table');
const input = document.querySelector('input')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  value = input.value;
  
  const tr = document.createElement("tr")
  table.append(tr)

  const td = document.createElement("td")
    tr.append(td)
    td.innerText = value;

  input.value = " ";
})
