var slideMenuMinified = true;
var menuElements = document.getElementsByClassName('menuBtn');

function openSlideMenu() {
  
  if(slideMenuMinified){
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '250px';
    document.getElementsByClassName('btn-menu')[0].style.paddingLeft = '120px';
    document.getElementById('searchBar').style.marginLeft = '170px';
    document.getElementById('navArrow').src = "./svgs/arrow_left.svg";

    setTimeout(function(){
      for (var i = 0; i < menuElements.length; i++) {
        menuElements[i].classList.remove('description-hidden');
        menuElements[i].style.paddingLeft = '20px';
      }
    }, 200);

    slideMenuMinified = false;
  }
  else {
    document.getElementById('side-menu').style.width = '100px';
    document.getElementById('main').style.marginLeft = '100px';
    document.getElementsByClassName('btn-menu')[0].style.paddingLeft = '0px';
    document.getElementById('searchBar').style.marginLeft = '20px';
    document.getElementById('navArrow').src = "./svgs/arrow_right.svg";
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].classList.add('description-hidden');
      menuElements[i].style.paddingLeft = '0px';
    }

    slideMenuMinified = true;
  }
}