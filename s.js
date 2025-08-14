const acc = document.querySelector('#accordion');
const panel = document.querySelector('#panel');
const pm = document.querySelector('#plusminus');

acc.addEventListener('click', () => {
    if (panel.style.display === 'block') {
        panel.style.display = 'none';   // content hide
        pm.textContent = '+';           // button me + dikhaye
    } else {
        panel.style.display = 'block';  // content show
        pm.textContent = '-';           // button me - dikhaye
    }
});
acc.addEventListener('click', () => {
  panel.classList.toggle('show');
  pm.textContent = panel.classList.contains('show') ? '-' : '+';
});
