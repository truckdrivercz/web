const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        addImageBorders('black');
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        addImageBorders('white');
    }
});

function addImageBorders(borderColor, textColor) {
    const images = document.querySelectorAll('.foto'); // vyhledání obrázků s třídou 'foto'
    images.forEach(image => {
        image.style.border = `2px solid ${borderColor}`;
        image.style.padding = '2px';
        image.style.color = textColor;
    });
}