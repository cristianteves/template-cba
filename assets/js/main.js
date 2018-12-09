(function(){
  var arrows = document.getElementsByClassName('rotateArrow');

  for (arrow of arrows){
    arrow.addEventListener('click', function(){
      this.degrees = this.nextSibling.nextSibling.getAttribute('class') == 'submenu collapse' ? 90 : 0;
      this.querySelector('i').style.transform = 'rotate(' + Number(this.degrees) + 'deg)';
      this.querySelector('i').style.transition = 'all ease 0.2s';
    })
  }

  function resize(){

      if (($(window).width() || window.innerWidth()) < 1367){
        document.getElementById('menu-main').classList.remove('show')
        document.getElementById('btn-buscar').classList.add('mb-2')
      }else{
        document.getElementById('menu-main').classList.add('show')
        document.getElementById('btn-buscar').classList.remove('mb-2')
      }
  }

  $(window).resize(resize);

  resize();


})()
