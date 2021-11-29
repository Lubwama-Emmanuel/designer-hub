const createFooter = function () {
  let footer = document.querySelector("footer");

  footer.innerHTML = `
    <div class = "footer-items">
    <ul class = "category">
      <li class = category-tittle>help & information</li>
      <li><a href="#" class="footer-link">help</a></li>
      <li><a href="#" class="footer-link">track order</a></li>
      <li><a href="#" class="footer-link">delivery & returns</a></li>
    </ul>
    <ul class = "category">
      <li class = category-tittle>about rex</li>
      <li><a href="#" class="footer-link">about us</a></li>
      <li><a href="#" class="footer-link">careers at REX</a></li>
      <li><a href="#" class="footer-link">corporate responsibility</a></li>
    </ul>
    <ul class = "category">
      <li class = category-tittle>more</li>
      <li><a href="#" class="footer-link">shoes</a></li>
      <li><a href="#" class="footer-link">glasses</a></li>
      <li><a href="#" class="footer-link">head socks</a></li>
      <li><a href="#" class="footer-link">pants and nickles</a></li>
    </ul>
  </div>
  <div class="social-networks">
    <h1>follow us</h1>
    <p>
      <a href="#" class="social-media"><i class="fab fa-instagram icons"></i></a>
      <a href="#" class="social-media"><i class="fab fa-facebook icons"></i></a>
      <a href="#" class="social-media"><i class="fab fa-linkedin-in icons"></i></a>
    </p>
  </div>
  <p class="footer-credit">the best online shop</p>`;
};
createFooter();
