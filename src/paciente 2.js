var btn = document.querySelector('#mostrarDiv2');
var container = document.querySelector('.container--paciente-informacoes2');

btn.addEventListener('click',function(){
    if(container.style.display === 'flex'){
        container.style.display = 'none';
    }
    else{
        container.style.display = 'flex';
    }
});