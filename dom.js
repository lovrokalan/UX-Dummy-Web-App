var slideMenuMinified = true;
var menuElements = document.getElementsByClassName('menuBtn');

function slideMenu() {
  
  if(slideMenuMinified){
    document.getElementById('side-menu').style.width = '250px';
    document.getElementById('main').style.marginLeft = '240px';
    document.getElementsByClassName('btn-menu')[0].style.paddingLeft = '120px';
    document.getElementById('logo').style.marginLeft = '170px';
    document.getElementById('navArrow').src = "./svgs/arrow_left.svg";

    setTimeout(function(){
      for (var i = 0; i < menuElements.length; i++) {
        menuElements[i].classList.remove('description-hidden');
        menuElements[i].style.paddingLeft = '20px';
      }
    }, 200);
    slideMenuMinified = false;

  } else {
    document.getElementById('side-menu').style.width = '100px';
    document.getElementById('main').style.marginLeft = '90px';
    document.getElementsByClassName('btn-menu')[0].style.paddingLeft = '0px';
    document.getElementById('logo').style.marginLeft = '20px';
    document.getElementById('navArrow').src = "./svgs/arrow_right.svg";
    for (var i = 0; i < menuElements.length; i++) {
      menuElements[i].classList.add('description-hidden');
      menuElements[i].style.paddingLeft = '0px';
    }
    slideMenuMinified = true;
  }
}

function slideToMobile(){
  document.getElementById('side-menu').style.width = '50px';
  document.getElementById('main').style.marginLeft = '40px';
  document.getElementsByClassName('btn-menu')[0].style.paddingLeft = '0px';
  document.getElementById('logo').style.marginLeft = '20px';
  document.getElementById('navArrow').src = "./svgs/arrow_right.svg";
  for (var i = 0; i < menuElements.length; i++) {
    menuElements[i].classList.add('description-hidden');
    menuElements[i].style.paddingLeft = '0px';
  }
  slideMenuMinified = true;
}

$(window).resize(function () {
  if ($(window).width() < 700) {
    slideToMobile();
  } else {
    slideMenuMinified = false;
    slideMenu();
  }
});

var dropdownUser = document.getElementById('drop-down');
var usernameLogo = document.getElementById('userInfo');
  usernameLogo.addEventListener('mouseover', openDropdown);
  usernameLogo.addEventListener('mouseout', closeDropdown);
  dropdownUser.addEventListener('mouseover', openDropdown);
  dropdownUser.addEventListener('mouseout', closeDropdown); 

function openDropdown() {
  dropdownUser.style.display = 'block';
}  

function closeDropdown() {
  dropdownUser.style.display = 'none';
}

