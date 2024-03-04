const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const rules = document.getElementById("rules");
const rules2 = document.getElementById("rules2");
const footer = document.getElementById("footer");
const footerTitle = document.getElementById("footerTitle");
const odkaz = document.getElementById("odkaz");

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white';
        footer.style.backgroundColor = "#11101b";
        footerTitle.style.color = "white";
        rules.style.backgroundColor = "#11101b";
        rules.style.color = "white";
        rules2.style.backgroundColor = "#11101b";
        rules2.style.color = "white";
        odkaz.style.color = "red";
        
    } else {
        body.style.background = '#11101b';
        footer.style.backgroundColor = "white";
        footerTitle.style.color = "#11101b";
        rules.style.backgroundColor = "white";
        rules.style.color = "#11101b";
        rules2.style.backgroundColor = "white";
        rules2.style.color = "#11101b";
        odkaz.style.color = "red";
    }
});