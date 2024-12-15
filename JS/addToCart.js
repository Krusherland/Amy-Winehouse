document.addEventListener("DOMContentLoaded", () => {
  const addToCart = document.querySelectorAll(".addToCart");

  addToCart.forEach(add => {
    add.addEventListener("click", (event) => {
      event.preventDefault();
      const name = add.getAttribute("data-name");
      const price = add.getAttribute("data-price");
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({name, price});
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`Added ${name} to your cart!`);
    });
  });
});
