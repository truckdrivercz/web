const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const informations = document.getElementById("informations");
const achievements = document.getElementById("achievements");
const footer = document.getElementById("footer");
const footerTitle = document.getElementById("footerTitle");
const odkaz = document.getElementById("odkaz");

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        informations.style.backgroundColor = "#11101b";
        informations.style.color = "white";
        achievements.style.backgroundColor = "#11101b";
        achievements.style.color = "white";
        footer.style.backgroundColor = "#11101b";
        footerTitle.style.color = "white";
        odkaz.style.color = "red";
    } else{
        body.style.background = '#11101b';
        informations.style.backgroundColor = "white";
        informations.style.color = "#11101b";
        achievements.style.backgroundColor = "white";
        achievements.style.color = "#11101b";
        footer.style.backgroundColor = "white";
        footerTitle.style.color = "#11101b";
        odkaz.style.color = "red";
    }
});