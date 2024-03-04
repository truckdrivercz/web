const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");
const footer = document.getElementById("footer");
const footerTitle = document.getElementById("footerTitle");
const footerTitle2 = document.getElementById("footerTitle2");

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white';
        footer.style.backgroundColor = "#11101b";
        info1.style.backgroundColor = "#11101b";
        info1.style.color = "white";
        info2.style.backgroundColor = "#11101b";
        info2.style.color = "white";
        info3.style.backgroundColor = "#11101b";
        info3.style.color = "white";
        footer.style.backgroundColor = "#11101b";
        footerTitle.style.color = "white";
        footerTitle2.style.color = "white";
    } else {
        body.style.background = '#11101b';
        footer.style.backgroundColor = "white";
        info1.style.backgroundColor = "white";
        info1.style.color = "#11101b";
        info2.style.backgroundColor = "white";
        info2.style.color = "#11101b";
        info3.style.backgroundColor = "white";
        info3.style.color = "#11101b";
        footer.style.backgroundColor = "white";
        footerTitle.style.color = "#11101b";
        footerTitle2.style.color = "#11101b";
    }
});