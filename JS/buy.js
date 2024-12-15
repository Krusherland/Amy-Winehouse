document.addEventListener("DOMContentLoaded", () => {
    const inTicket = document.querySelectorAll(".buy");
    const totalTicket = document.getElementById("totalTicket");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    inTicket.forEach(add => {
      add.addEventListener("click", (event) => {
        event.preventDefault();
        alert(`Your ticket is being proccessed! Your ticket price is ${totalTicket}`);
      });
    });
  });