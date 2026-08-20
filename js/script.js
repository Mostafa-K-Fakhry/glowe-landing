document.addEventListener("DOMContentLoaded", () => {
  // Navbar scroll effect
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        navbar.classList.add("nav-scrolled");
        navbar.classList.remove("bg-transparent", "py-3");
        navbar.classList.add("py-2");
      } else {
        navbar.classList.remove("nav-scrolled", "py-2");
        navbar.classList.add("bg-transparent", "py-3");
      }
    });
  }

  // Quantity Selector functionality
  const btnMinus = document.getElementById("btn-minus");
  const btnPlus = document.getElementById("btn-plus");
  const qtyInput = document.getElementById("quantity");

  if (btnMinus && btnPlus && qtyInput) {
    btnMinus.addEventListener("click", () => {
      let val = parseInt(qtyInput.value, 10);
      if (val > 1) {
        qtyInput.value = val - 1;
      }
    });

    btnPlus.addEventListener("click", () => {
      let val = parseInt(qtyInput.value, 10);
      qtyInput.value = val + 1;
    });
  }

  // WhatsApp Ordering Logic
  const btnBuyNow = document.getElementById("btn-buy-now");
  const btnAddCart = document.getElementById("btn-add-cart");
  
  const handleOrder = () => {
    let qty = 1;
    if (qtyInput) {
      qty = parseInt(qtyInput.value, 10) || 1;
    }
    const phoneNumber = "201020699718";
    const message = `Hello, I would like to order ${qty} piece(s) of Glowé Vitamin C Serum.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (btnBuyNow) {
    btnBuyNow.addEventListener("click", handleOrder);
  }
  if (btnAddCart) {
    btnAddCart.addEventListener("click", handleOrder);
  }
});
