const old_box =document.getElementsByClassName('old-box');
const changes = document.getElementById('changes')

changes.addEventListener('click', e => {
    if(e.target.value === 'si'){
        old_box[0].style.display='block';
    }else{
        old_box[0].style.display='none';
    }
})
