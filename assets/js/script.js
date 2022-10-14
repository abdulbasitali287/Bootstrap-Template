// let a = document.getElementById('navigation-menu').classList;
// a.forEach(element => {
//     console.log(element)
// });
// let a = document.getElementById('navigation-menu').firstElementChild;
// let a = document.getElementById('navigation-menu').lastElementChild;
// let a = document.getElementById('navigation-menu').firstElementChild.innerHTML;
// let a = document.getElementById('navigation-menu').parentElement;
// let a = document.getElementById('navigation-menu').childElementCount;
// let a = document.getElementById('navigation-menu').childElementCount;
//         console.log(a)
let menu = document.getElementById('navigation-menu');
let toggleMenu = document.getElementById('menu-bars');
toggleMenu.addEventListener('click', function(){
        menu.classList.forEach(element => {
            if (element === "d-none") {
                menu.setAttribute('class','d-md-flex justify-content-end flex-wrap flex-shrink-1');
            }else{
                menu.setAttribute('class','d-none')
            }
        });
});
// function showMenu() {
// }
// console.log(toggleMenu)