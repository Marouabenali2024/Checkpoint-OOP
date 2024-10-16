class TravelCart {
  constructor() {
    this.cartItems = document.querySelectorAll(".cart-item");
    this.totalPriceElement = document.getElementById("total-price");
    this.initCart();
  }

  initCart() {
    this.cartItems.forEach((item) => {
      const quantityElement = item.querySelector(".quantity");
      quantityElement.textContent = 0; 

      const increaseBtn = item.querySelector(".increase");
      const decreaseBtn = item.querySelector(".decrease");
      const deleteBtn = item.querySelector(".delete-btn");
      const likeBtn = item.querySelector(".like-btn");

      increaseBtn.addEventListener("click", () => this.increaseQuantity(item));
      decreaseBtn.addEventListener("click", () => this.decreaseQuantity(item));
      deleteBtn.addEventListener("click", () => this.deleteItem(item));
      likeBtn.addEventListener("click", () => this.toggleLike(likeBtn, item));

      this.updateTotal();
    });
  }

  increaseQuantity(item) {
    const quantityElement = item.querySelector(".quantity");
    let quantity = parseInt(quantityElement.textContent);
    quantity += 1;
    quantityElement.textContent = quantity;
    this.updateTotal();
  }

  decreaseQuantity(item) {
    const quantityElement = item.querySelector(".quantity");
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
      quantity -= 1; 
      quantityElement.textContent = quantity;
      this.updateTotal();
    }
  }

  deleteItem(item) {
    item.remove();
    this.updateTotal();
  }

  toggleLike(likeBtn, item) {
    likeBtn.classList.toggle("liked");

    if (likeBtn.classList.contains("liked")) {
      console.log(`Liked: ${item.querySelector("h2").textContent}`);
    }
  }

  updateTotal() {
    let total = 0;

    this.cartItems.forEach((item) => {
      const price = parseInt(item.getAttribute("data-price"));
      const quantity = parseInt(item.querySelector(".quantity").textContent);
      total += price * quantity;
    });

    this.totalPriceElement.textContent = total;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const cart = new TravelCart();
});
