var btn = document.querySelector('#mostrarDiv1');
var container = document.querySelector('.container--paciente-informacoes1');

btn.addEventListener('click',function(){
    if(container.style.display === 'flex'){
        container.style.display = 'none';
    }
    else{
        container.style.display = 'flex';
    }
});