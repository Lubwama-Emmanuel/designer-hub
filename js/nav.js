const createNav = function () {
  let nav = document.querySelector(".navBar");

  nav.innerHTML = `
  <div class="nav">
  <img src="img/dht2.png" class="brand-logo" alt="" />
  <div class="nav-items">
    <div class="linksContainer">
    <ul class="linksContainer">
      <li class="linksItem"><a href="#" class="link">home</a></li>
      <li class="linksItem"><a href="#" class="link">women</a></li>
      <li class="linksItem"><a href="#" class="link">men</a></li>
      <li class="linksItem"><a href="#" class="link">accesories</a></li>
    </ul></div>
    <div class="search-bar">
      <input
        type="text"
        class="search-box"
        placeholder="Search Brands and Products!"
      />
      <button class="search-btn"><i class="fas fa-search"></i></button>
    </div>
    <a href="#" ><i  class="fas fa-user acts"></i></a>
    <a href="#" ><i class="fas fa-shopping-bag acts"></i></a>
  </div>
</div>`;
};
createNav();
