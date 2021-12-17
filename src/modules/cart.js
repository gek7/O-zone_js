const cart = () => {
    const btnCart = document.querySelector("#cart");
    const cartModal = document.querySelector(".cart");
    const cartCloseBtn = document.querySelector(".cart-close");

    const openCart = () => {
        cartModal.style.display = 'flex';
    };

    const closeCart = () => {
        cartModal.style.display = '';
    };

    btnCart.addEventListener("click", openCart);
    cartCloseBtn.addEventListener("click", closeCart);
};

export default cart;