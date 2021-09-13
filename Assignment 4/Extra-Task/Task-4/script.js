const holder = document.querySelectorAll('.holder');
const radio = document.querySelectorAll('.radio');

const removeOthers = (index) => {
  for (let i=0; i<3; i++){
    if (i !== index) {
      holder[i].style.display = "none";
    }
  }
}

for (let i=0; i<3; i++) {
  radio[i].addEventListener('click', () => {
  removeOthers(i);
});
}
