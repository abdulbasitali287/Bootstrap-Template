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
// console.log(a)
// Array.from(accordian);
const toggleNavbar = document.getElementById('toggleNavbar');
const toggleNavbarIcon = document.getElementById('menu-bars');
toggleNavbarIcon.addEventListener('click', function () {
    // let a = this.getAttribute('class');
    if (this.classList.contains('fa-bars')) {
        this.classList.add('fa-x');
        this.classList.remove('fa-bars');
        toggleNavbar.classList.remove('d-none');
    }else{
        this.classList.add('fa-bars');
        this.classList.remove('fa-x');
        toggleNavbar.classList.add('d-none')
    }
    
    
        // this.classList.add('fa-bars');
        // this.classList.remove('fa-x');
    
})


const accordian = document.querySelectorAll('.accordion-section');
accordian.forEach(element => {
    element.addEventListener('click',function () {
        element.classList.add('pb-4');
        element.lastElementChild.classList.toggle('d-none');
        element.lastElementChild.classList.add('mx-5');
        // element.classList.toggle('d-none');
    })
});
const frequently_accordian = document.querySelectorAll('.content-box');
frequently_accordian.forEach(e => {
    e.setAttribute('style','border: none; background-color: #FFFFFF;width: 80%;padding: 20px 15px;');
    e.addEventListener('click',() => {
        e.lastElementChild.classList.toggle('d-none');
        e.lastElementChild.classList.add('text-start')
        e.lastElementChild.classList.add('py-3')
    })
})
// let frequently_accordian = document.querySelectorAll('.content-box');
// const para = document.createElement('p');
// const textNode = document.createTextNode('Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.')
// frequently_accordian.forEach(e => {
//     e.addEventListener('click',function() {
//         para.appendChild(textNode);
//         e.append(para);
//     })
// });