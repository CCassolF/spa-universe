function selectMenuItem(item) {
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach((menuItem) => {
    menuItem.classList.remove('selected');
  });
  item.classList.add('selected');
};