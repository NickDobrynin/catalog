window.addEventListener('load', () => {
  $('.popup-link').magnificPopup({
    type:'image'
  });
  
  const productsGroup = document.querySelectorAll('.products__group');

  productsGroup.forEach(group => {
    const title = group.querySelector('.subtitle');
    const list = group.querySelector('.products__list');
    const listHeight = list.offsetHeight;
    list.style.height = listHeight + 'px';
  
    title.addEventListener('click', function () {
      this.classList.toggle('active');
      if (this.classList.contains('active')) list.style.height = listHeight + 10 + 'px';
      else list.style.height = 0;
    })
  })
})