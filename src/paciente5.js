var btn = document.querySelector('#mostrarDiv5');
var container = document.querySelector('.container--paciente-informacoes5');

btn.addEventListener('click',function(){
    if(container.style.display === 'flex'){
        container.style.display = 'none';
    }
    else{
        container.style.display = 'flex';
    }
});
