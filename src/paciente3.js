var btn = document.querySelector('#mostrarDiv3');
var container = document.querySelector('.container--paciente-informacoes3');

btn.addEventListener('click',function(){
    if(container.style.display === 'flex'){
        container.style.display = 'none';
    }
    else{
        container.style.display = 'flex';
    }
});