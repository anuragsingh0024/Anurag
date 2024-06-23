const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcn = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
}


