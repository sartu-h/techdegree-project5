const search = document.getElementById('search-bar');
search.addEventListener('keyup', e => {
    let currValue = e.target.value.toLowerCase();
    let pictures = document.querySelectorAll('.gallery a');
    pictures.forEach(picture => {
        if(picture.getAttribute('data-caption').toLowerCase().includes(currValue)){
            picture.style.display = 'block';
        } else{
            picture.style.display = 'none';
        }
    })
})
