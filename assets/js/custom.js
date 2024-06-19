const accrdum = document.getElementsByClassName('table');
for (let i = 0; i<accrdum.length; i++){
    accrdum[i].addEventListener("click" , function(){
        this.classList.toggle("active")
    })
}