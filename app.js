document.addEventListener("DOMContentLoaded", function() {
    function toggleMenu() {
      const screenWidth = window.innerWidth;
      const menuList = document.getElementById('menu-list');
      const mobileSelect = document.getElementById('mobile-select');

      if (screenWidth <= 767) { // Kích thước màn hình điện thoại
        menuList.classList.add('hidden');
        mobileSelect.classList.remove('hidden');
      } else {
        menuList.classList.remove('hidden');
        mobileSelect.classList.add('hidden');
      }
    }

    // Gọi hàm khi tải trang và khi thay đổi kích thước màn hình
    toggleMenu();
    window.addEventListener('resize', toggleMenu);
  });
  