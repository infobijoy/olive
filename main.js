import './src/scss/style.scss';


document.querySelector('.select-field').addEventListener('click',()=>{
    document.querySelector('.list').classList.toggle('show');
    document.querySelector('.down-arrow').classList.toggle('rotate180');

});

document.querySelector('.select-field2').addEventListener('click',()=>{
    document.querySelector('.list2').classList.toggle('show');
    document.querySelector('.down-arrow2').classList.toggle('rotate180');

});