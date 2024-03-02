const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const footer = document.getElementById("footer");
const footerTitle = document.getElementById("footerTitle");
const footerTitle2 = document.getElementById("footerTitle2");
const nadpis = document.getElementById("nadpis");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const fifth = document.getElementById("fifth");

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white';
        footer.style.backgroundColor = "#11101b";
        footer.style.backgroundColor = "#11101b";
        footerTitle.style.color = "white";
        footerTitle2.style.color = "white";
        nadpis.style.color = "#11101b";
        first.style.color = "#11101b";
        second.style.color = "#11101b";
        third.style.color = "#11101b";
        fourth.style.color = "#11101b";
        fifth.style.color = "#11101b";
    } else {
        body.style.background = '#11101b';
        footer.style.backgroundColor = "white";
        footer.style.backgroundColor = "white";
        footerTitle.style.color = "#11101b";
        footerTitle2.style.color = "#11101b";
        nadpis.style.color = "white";
        first.style.color = "white";
        second.style.color = "white";
        third.style.color = "white";
        fourth.style.color = "white";
        fifth.style.color = "white";
    }
});