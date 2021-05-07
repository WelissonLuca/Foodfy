function activeMenuItems() {
  const currentLocation = location.href;
  const menuItem = document.querySelectorAll('nav a');
  const menuLength = menuItem.length;
  for (let i = 0; i < menuLength; i += 1) {
    if (menuItem[i].href === currentLocation) {
      menuItem[i].className = 'active';
    }
  }
}

function hideShow() {
  const hideShowButton = document.querySelectorAll('.button');
  console.log(hideShowButton);
  for (let i = 0; i < hideShowButton.length; i += 1) {
    hideShowButton.item(i).addEventListener('click', () => {
      const detailsContent = document.querySelectorAll('.details-content')[i];

      if (hideShowButton.item(i).innerHTML == 'ESCONDER') {
        hideShowButton.item(i).innerHTML = 'MOSTRAR';

        detailsContent.style.display = 'none';
      } else if (hideShowButton.item(i).innerHTML == 'MOSTRAR') {
        hideShowButton.item(i).innerHTML = 'ESCONDER';

        detailsContent.style.display = 'block';
      }
    });
  }
}
activeMenuItems();
hideShow();
