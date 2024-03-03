const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropDownMenu = document.querySelector('.dropmenu')
//-const activePage = window.location.pathname;

//const homeActivePage = "/weedingList/index.html";
//console.log(homeActivePage);

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open')
}


//-const navLinks = document.querySelectorAll('nav a').
//-forEach(link => {
//-    if(link.href.includes(`${activePage}`)){
//-        link.classList.add('active');
//-}});


//const nav2Links = document.querySelectorAll('nav a').
//forEach(link => {
//    if(link.href.includes(`${activePage}`) && link.href.includes(`${homeActivePage}`)){
//        link.classList.remove('active');
//        console.log("x");
//}})

