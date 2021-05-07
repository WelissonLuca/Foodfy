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
activeMenuItems();