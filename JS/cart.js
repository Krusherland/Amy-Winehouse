document.addEventListener("DOMContentLoaded", () => {
  const Ticket = document.getElementById("Ticket");
  const totalTicket = document.getElementById("totalTicket");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const renderCart = () => {
    Ticket.innerHTML = "";

    if (cart.length === 0) {
      Ticket.innerHTML = "<tr><td>Your cart is empty</tr></td>";
      totalTicket.textContent = "0.00";
      return;
    }

    cart.forEach((product, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>
                    <button class="Delete" data-index="${index}"><a href=""><i class="fa-solid fa-trash-can"></i>
                    </a></button>
                </td>
            `;
      Ticket.appendChild(row);
    });
    calculateTotalTicket();
  };

  const calculateTotalTicket = () => {
    const total = cart.reduce((sum, product) => sum + parseFloat(product.price),0);
    totalTicket.textContent = total.toFixed(2);
  };

  Ticket.addEventListener("click", (event) => {
    if (event.target.classList.contains("Delete")) {
      const index = event.target.getAttribute("data-index");
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }
  });
  renderCart();
});
