document.addEventListener('DOMContentLoaded', () => {
    let carts = document.querySelectorAll('.cart, .cart1, .cart2');
    let totalPriceElements = document.querySelectorAll('.total-price');

    carts.forEach(cart => {
        let items = cart.querySelectorAll('.item, .item1, .item2');
        let clearBtn = cart.querySelector('.clear-btn');
        let checkoutBtn = cart.querySelector('.checkout-btn');

        items.forEach(item => {
            let likeBtn = item.querySelector('.like-btn');
            let minusBtn = item.querySelector('.minus-btn');
            let plusBtn = item.querySelector('.plus-btn');
            let quantityElement = item.querySelector('.quantity');
            let priceElement = item.querySelector('.price');

            let quantity = parseInt(quantityElement.textContent);
            let price  = parseFloat(priceElement.textContent.replace('€', ''));

            likeBtn.addEventListener('click', () => {
                likeBtn.classList.toggle('liked');
            });

            minusBtn.addEventListener('click', () => {
                if (quantity > 1) {
                    quantity--;
                    quantityElement.textContent = quantity;
                    updateTotalPrice();
                }
            });

            plusBtn.addEventListener('click', () => {
                quantity++;
                quantityElement.textContent = quantity;
                updateTotalPrice();
            });

            function updateTotalPrice() {
                let total = 0;
                carts.forEach(cart => {
                    const items = cart.querySelectorAll('.item, .item1, .item2');
                    items.forEach(item => {
                        const quantity = parseInt(item.querySelector('.quantity').textContent);
                        const price = parseFloat(item.querySelector('.price').textContent.replace('€', ''));
                        total += quantity * price;
                    });
                });
                totalPriceElements.forEach(totalPriceElement => {
                    totalPriceElement.textContent = total + '€';
                });
            }

            clearBtn.addEventListener('click', () => {
                items.forEach(item => {
                    item.querySelector('.quantity').textContent = '1';
                });
                updateTotalPrice();
            });

            checkoutBtn.addEventListener('click', () => {
                alert('Commande passée avec succès!');
            });
        });
    });
});
