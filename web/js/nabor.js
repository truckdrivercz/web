const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const offers = document.getElementById("offers");
const requirements = document.getElementById("requirements");
const footer = document.getElementById("footer");
const footerTitle = document.getElementById("footerTitle");
const odkaz = document.getElementById("odkaz");

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        offers.style.backgroundColor = "#11101b";
        offers.style.color = "white";
        requirements.style.backgroundColor = "#11101b";
        requirements.style.color = "white";
        footer.style.backgroundColor = "#11101b";
        footerTitle.style.color = "white";
        odkaz.style.color = "red";
    } else{
        body.style.background = '#11101b';
        offers.style.backgroundColor = "white";
        offers.style.color = "#11101b";
        requirements.style.backgroundColor = "white";
        requirements.style.color = "#11101b";
        footer.style.backgroundColor = "white";
        footerTitle.style.color = "#11101b";
        odkaz.style.color = "red";
    }
});