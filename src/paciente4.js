var btn = document.querySelector('#mostrarDiv4');
var container = document.querySelector('.container--paciente-informacoes4');

btn.addEventListener('click',function(){
    if(container.style.display === 'flex'){
        container.style.display = 'none';
    }
    else{
        container.style.display = 'flex';
    }
});