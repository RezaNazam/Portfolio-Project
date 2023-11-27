const header = document.querySelector('header');
const navlist = document.querySelector('.navlist');
const myLink = navlist.querySelector('a:first-child');
const spanMy = header.querySelector('.logos');

window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    header.classList.add('sticky');
    myLink.style.color = `var(--bg-color)`;
    spanMy.style.color = `var(--bg-color)`;
  } else {
    header.classList.remove('sticky');
    spanMy.style.color = `var(--text-color-thrd)`;
    myLink.style.color = `var(--text-color-thrd)`;
  }
});

let menu = document.querySelector(`#menu-icon`);
let listnav = document.querySelector(`.navlist`);

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  listnav.classList.toggle('open');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  listnav.classList.remove('open');
};
