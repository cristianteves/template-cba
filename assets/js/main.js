(function(){
  var arrows = document.getElementsByClassName('rotateArrow');

  for (arrow of arrows){
    arrow.addEventListener('click', function(){
      this.degrees = this.nextSibling.nextSibling.getAttribute('class') == 'collapse' ? 90 : 0;
      this.querySelector('i').style.transform = 'rotate(' + Number(this.degrees) + 'deg)';
      this.querySelector('i').style.transition = 'all ease 0.2s';
    })
  }

})()
