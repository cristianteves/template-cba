(function(){
  var arrows = document.getElementsByClassName('rotateArrow');

  for (arrow of arrows){
    arrow.addEventListener('click', function(){
      this.degrees = this.nextSibling.nextSibling.getAttribute('class') == 'submenu collapse' ? 90 : 0;
      this.querySelector('i').style.transform = 'rotate(' + Number(this.degrees) + 'deg)';
      this.querySelector('i').style.transition = 'all ease 0.2s';
    })
  }

if (window.innerWidth < 1367){
  document.getElementById('menu-main').classList.remove('show');
}else {
  document.getElementById('menu-main').classList.add('show');
}

})()
