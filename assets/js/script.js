// let x = document.getElementsByClassName('frequently-button');
let x = document.querySelectorAll('.frequently-button')
let con_to_array = Array.from(x);
console.log(con_to_array.length)
for (let index = 0; index < con_to_array.length; index++) {
    console.log(con_to_array[index])
    con_to_array[index].addEventListener('click',function(e) {
        
    })
}