const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const footer = document.getElementById("footer");
const footerTitle = document.getElementById("footerTitle");
const footerTitle2 = document.getElementById("footerTitle2");
const nadpis = document.getElementById("nadpis");

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white';
        footer.style.backgroundColor = "#11101b";
        footer.style.backgroundColor = "#11101b";
        footerTitle.style.color = "white";
        footerTitle2.style.color = "white";
        nadpis.style.color = "#11101b"
    } else {
        body.style.background = '#11101b';
        footer.style.backgroundColor = "white";
        footer.style.backgroundColor = "white";
        footerTitle.style.color = "#11101b";
        footerTitle2.style.color = "#11101b";
        nadpis.style.color = "white"
    }
});