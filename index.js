const inputEl = document.querySelector('.input');
const submitEl = document.querySelector('.submit');
const ulEl = document.querySelector('ul');
const btnHigh = document.querySelector('.btn--high');
const btnModerate = document.querySelector('.btn--moderate');
const btnall = document.querySelector('.btn--all');
const select = document.querySelector('select');

const add = function (e) {
  e.preventDefault();
  const li = document.createElement('li');
  const p = document.createElement('p');
  const btnDel = document.createElement('button');
  p.textContent = inputEl.value;
  btnDel.textContent = 'DELETE';
  const add = function () {
    // let set = prompt('set the priority').toLowerCase();
    if (select.value === 'hp') {
      ulEl.appendChild(li);
      li.append(p, btnDel);
      p.style.color = '#f03e3e';
      li.classList.add('high');
      li.classList.add('all');
    } else if (select.value === 'mp') {
      ulEl.appendChild(li);
      li.append(p, btnDel);
      p.style.color = '#fcc419';
      li.classList.add('moderate');
      li.classList.add('all');
    }
  };
  add();

  const pModerate = document.querySelectorAll('.moderate');
  console.log(pModerate);
  const pHigh = document.querySelectorAll('.high');
  const pAll = document.querySelectorAll('.all');
  const high = function () {
    for (let i = 0; i < pModerate.length; i++) {
      pHigh[i].classList.remove('none');
      pModerate[i].classList.add('none');
    }
  };

  const moderate = function () {
    for (let i = 0; i < pHigh.length; i++) {
      pModerate[i].classList.remove('none');
      pHigh[i].classList.add('none');
    }
  };

  const all = function () {
    for (let i = 0; i < pAll.length; i++) {
      pAll[i].classList.remove('none');
    }
  };

  btnHigh.addEventListener('click', high);
  btnModerate.addEventListener('click', moderate);
  btnall.addEventListener('click', all);

  const del = function (e) {
    let target = e.target;
    target.parentNode.remove();
  };

  btnDel.addEventListener('click', del);
};

submitEl.addEventListener('click', add);
