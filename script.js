//demo product details
var productDetails = [
    {
        productId: 1,
        productTitle: 'Nirvana Ion',
        productDis: 'Wireless Earbuds',
        productRating: '4.2',
        productImg: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Nirvana_Ion.jpg?v=1697621745',
        productPrice: 2299,
        count: 0

    },
    {
        productId: 2,
        productTitle: 'Storm',
        productDis: 'Smart Watch',
        productRating: '4.8',
        productImg: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Wave_Arcade.webp?v=1703585870',
        productPrice: 1499,
        count: 0
    },
    {
        productId: 3,
        productTitle: 'Immortal 400',
        productDis: 'Gaming Headphone',
        productRating: '4.6',
        productImg: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/IM_400.gif?v=1691387449',
        productPrice: 1999,
        count: 0
    },
    {
        productId: 4,
        productTitle: 'Rockerz 255',
        productDis: 'Neckbands',
        productRating: '3.8',
        productImg: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/r255pro_55d805bc-f2e1-4861-9533-8eee57081305.jpg?v=1682573437',
        productPrice: 1399,
        count: 0
    },
    {
        productId: 5,
        productTitle: 'Airdopes 381',
        productDis: 'Wireless Earbuds',
        productRating: '4.8',
        productImg: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Airdopes-381.jpg?v=1682576552',
        productPrice: 1599,
        count: 0
    },
    {
        productId: 6,
        productTitle: 'Immortal 131',
        productDis: 'Wireless Earbuds',
        productRating: '4.2',
        productImg: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortal_131.gif?v=1698386535',
        productPrice: 1099,
        count: 0
    },
    {
        productId: 7,
        productTitle: 'Airdopes 122',
        productDis: 'Wireless Earbuds',
        productRating: '4.9',
        productImg: 'https://www.boat-lifestyle.com/cdn/shop/products/main-image-3_4a4b18dd-18dd-485f-9f4e-94e1f3613124_300x.png?v=1655535266',
        productPrice: 1299,
        count: 0
    },
    {
        productId: 8,
        productTitle: 'Watch Storm',
        productDis: 'Smart Watch',
        productRating: '4.2',
        productImg: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Watch-Storm---Iron-Man-Marvel-Edition.jpg?v=1682583585',
        productPrice: 3699,
        count: 0
    },
    // {
    //     productId: 9,
    //     productTitle: 'Aavante Bar',
    //     productDis: 'Soundbars',
    //     productRating: '4.8',
    //     productImg: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/stark.jpg?v=1684480562',
    //     productPrice: 9499,
    //     count: 0

    // },


]

//maindiv function starts here
function mainDiv() {

    var container = document.createElement('div')
    container.id = 'container'
    container.className = 'container'
    document.body.appendChild(container)

    //navBar starts here-----------------------------------------------------------------
    const navBar = document.createElement('div')
    navBar.id = 'navBar'
    navBar.className = 'navBar'

    const logo = document.createElement('h1')
    logo.className = 'logo'
    logo.innerText = 'NEXTON'

    const cartIcon = document.createElement('span')
    cartIcon.className = 'cartIcon'
    cartIcon.id = 'cartIcon'
    cartIcon.innerHTML = '🛒'
    const cartSize = document.createElement('span')
    cartSize.className = 'cartSize'
    cartSize.id = 'cartSize'
    cartSize.innerHTML = '2'
    cartIcon.appendChild(cartSize)


    cartIcon.addEventListener('click', function () {
        var cart = document.getElementById('cartDiv')
        if (cart.style.display === 'none' || cartDiv.style.display === '') {
            cart.style.display = 'block'
        }
        else {
            cart.style.display = 'none'
        }


    })

    navBar.appendChild(logo)
    navBar.appendChild(cartIcon)
    //--------------------------------navbar ends here---------------------------------

    //--------------------------------cartdiv starts here------------------------------
    const cartDiv = document.createElement('div')
    cartDiv.id = 'cartDiv'
    cartDiv.className = 'cartDiv'

    const cartHead = document.createElement('div')
    cartHead.id = 'cartHead'
    cartHead.className = 'cartHead'

    const cartH1 = document.createElement('h1')
    cartH1.innerHTML = 'Your Cart'
    cartH1.id = 'cartH1'
    cartH1.className = 'cartH1'

    const cartCloseBtn = document.createElement('button')
    cartCloseBtn.id = 'cartCloseBtn'
    cartCloseBtn.className = 'cartCloseBtn'
    cartCloseBtn.innerHTML = '✖'
    cartCloseBtn.addEventListener('click', function () {
        var cart = document.getElementById('cartDiv')
        cart.style.display = 'none'
    })
    cartHead.appendChild(cartH1)
    cartHead.appendChild(cartCloseBtn

    )
    var cartItem = JSON.parse(localStorage.getItem('cart')) || [];

    var cartItemsContainer = document.createElement('div');
    cartItemsContainer.id = 'cartItemsContainer';
    cartItemsContainer.className = 'cartItemsContainer';


    // if (cartItem.length > 0) {
    //     // If there are items in the cart, create elements to display cart items

    //     cartItem.forEach(function (item) {
    //         const cartItemDiv = document.createElement('div');
    //         cartItemDiv.className = 'cartItem';

    //         const itemName = document.createElement('span');
    //         itemName.textContent = item.productTitle;

    //         const itemQuantity = document.createElement('span');
    //         itemQuantity.textContent = ` x ${item.count}`;

    //         cartItemDiv.appendChild(itemName);
    //         cartItemDiv.appendChild(itemQuantity);

    //         cartItemsContainer.appendChild(cartItemDiv);
    //     });
    //     const cartTotalDiv = document.createElement('div')
    //     cartTotalDiv.className = 'cartTotalDiv'
    //     cartTotalDiv.innerText = `TOTAL : ₹ 234`
    //     cartDiv.appendChild(cartHead);

    //     cartDiv.appendChild(cartTotalDiv)
    // } else {
    //     const noItemsMessage = document.createElement('div');
    //     noItemsMessage.textContent = 'No items in cart';
    //     cartDiv.appendChild(cartHead);
    //     cartDiv.appendChild(noItemsMessage);
    // }

    // updateCartDisplay(cartItem)
    cartDiv.appendChild(cartHead)
    cartDiv.appendChild(cartItemsContainer)


    //----------------------------cart div ends here------------------------------------------

    //---------------------------paragraph_head starts here----------------------------------

    const paraHead = document.createElement('div')
    paraHead.id = 'paraHead'
    paraHead.className = 'paraHead'

    const paraHeadH1 = document.createElement('h1')
    paraHeadH1.innerText = 'Start exploring.'
    paraHeadH1.className = 'paraHeadH1'

    const paraHeadSpan = document.createElement('span')
    paraHeadSpan.innerHTML = '  Good things are waiting for you'
    paraHeadSpan.className = 'paraHeadSpan'

    paraHead.appendChild(paraHeadH1)
    paraHeadH1.appendChild(paraHeadSpan)
    //---------------------------paragraph_head ends here----------------------------------


    //-------------------------------productCard starts here------------------------------------
    function showProductsCard() {

        var productCardsDiv = document.createElement('div')
        productCardsDiv.innerHTML = '';
        productCardsDiv.id = 'productCardsDiv'
        productCardsDiv.className = 'productCardsDiv'
        container.appendChild(productCardsDiv)

        productDetails.map((product) => {
            {
                var productCard = document.createElement('div')
                productCard.id = 'productCard'
                productCard.className = 'productCard'

                const productImgDiv = document.createElement('div')
                productImgDiv.className = 'productImgDiv'

                const productImg = document.createElement('img')
                productImg.className = 'productImg'
                productImg.src = product.productImg

                productImgDiv.appendChild(productImg)

                const productDetailDiv = document.createElement('div')
                productDetailDiv.id = 'productDetailDiv'
                productDetailDiv.className = 'productDetailDiv'

                const productDetailDiv1 = document.createElement('div')
                productDetailDiv1.id = 'productDetailDiv1'
                productDetailDiv1.className = 'productDetailDiv1'

                const productDetailDiv1Head = document.createElement('h1')
                productDetailDiv1Head.id = 'productDetailDiv1Head'
                productDetailDiv1Head.className = 'productDetailDiv1Head'
                productDetailDiv1Head.innerText = product.productTitle

                const productDetailDiv1Span = document.createElement('span')
                productDetailDiv1Span.id = 'productDetailDiv1Span'
                productDetailDiv1Span.className = 'productDetailDiv1Span'
                productDetailDiv1Span.innerText = `₹ ${product.productPrice}`

                productDetailDiv1.appendChild(productDetailDiv1Head)
                productDetailDiv1.appendChild(productDetailDiv1Span)

                const productDetailDiv2 = document.createElement('div')
                productDetailDiv2.id = 'productDetailDiv2'
                productDetailDiv2.className = 'productDetailDiv2'

                const productDetailDiv2Head = document.createElement('h1')
                productDetailDiv2Head.id = 'productDetailDiv2Head'
                productDetailDiv2Head.className = 'productDetailDiv2Head'
                productDetailDiv2Head.innerText = product.productDis

                const productDetailDiv2Span = document.createElement('span')
                productDetailDiv2Span.id = 'productDetailDiv2Span'
                productDetailDiv2Span.className = 'productDetailDiv2Span'
                productDetailDiv2Span.innerText = `★ ${product.productRating}`

                productDetailDiv2.appendChild(productDetailDiv2Head)
                productDetailDiv2.appendChild(productDetailDiv2Span)

                const productDetailDiv3 = document.createElement('div')
                productDetailDiv3.id = 'productDetailDiv3' + product.productId
                productDetailDiv3.className = 'productDetailDiv3'

                productDetailDiv.appendChild(productDetailDiv1)
                productDetailDiv.appendChild(productDetailDiv2)
                productDetailDiv.appendChild(productDetailDiv3)

                productCard.appendChild(productImgDiv)
                productCard.appendChild(productDetailDiv)
                productCardsDiv.appendChild(productCard)

                const updateBtns = () => {
                    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
                    const isInCart = cartItems.some(item => item.productId === product.productId);

                    if (isInCart) {
                        console.log("in_cart")
                        const productCounter = document.createElement('div');
                        productCounter.id = 'productCounter' + product.productId;
                        productCounter.className = 'productCounter';

                        //starts here...
                        const incQuantityBtn = document.createElement('button')
                        incQuantityBtn.className = 'incQuantityBtn'
                        incQuantityBtn.id = 'incQuantityBtn'

                        const decQuantityBtn = document.createElement('button')
                        decQuantityBtn.className = 'decQuantityBtn'
                        decQuantityBtn.id = 'decQuantityBtn'

                        incQuantityBtn.innerHTML = '+'
                        decQuantityBtn.innerHTML = '-'

                        const countQuantity = document.createElement('span')
                        countQuantity.id = 'countQuantity'
                        countQuantity.className = 'countQuantity'
                        const cartItem = cartItems.find(item => item.productId === product.productId);
                        if (cartItem) {
                            countQuantity.innerHTML = cartItem.count;
                        }

                        productCounter.appendChild(decQuantityBtn)
                        productCounter.appendChild(countQuantity)
                        productCounter.appendChild(incQuantityBtn)

                        //starts here
                        incQuantityBtn.addEventListener('click', function () {
                            var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
                            cartItems.forEach(function (item) {
                                if (item.productId === product.productId) {
                                    item.count++;

                                }
                            });
                            localStorage.setItem('cart', JSON.stringify(cartItems));
                            updateCartDisplay(cartItems)
                            updateBtns()
                        })

                        decQuantityBtn.addEventListener("click", function () {
                            if (cartItem.count == '1') {

                                var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
                                cartItems = cartItems.filter(item => item.productId !== product.productId);
                                localStorage.setItem('cart', JSON.stringify(cartItems));
                                updateCartDisplay(cartItems)
                                updateBtns()
                            }
                            else {
                                var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
                                cartItems.forEach(function (item) {
                                    if (item.productId === product.productId) {
                                        item.count--;
                                    }
                                });
                                localStorage.setItem('cart', JSON.stringify(cartItems));
                                updateCartDisplay(cartItems)
                                updateBtns()
                            }
                        })



                        var productDiv3 = document.getElementById('productDetailDiv3' + product.productId)
                        productDiv3.innerHTML = ''
                        if (productDiv3) {
                            productDiv3.appendChild(productCounter);
                        }

                    }
                    else {

                        var productDiv3 = document.getElementById('productDetailDiv3' + product.productId)
                        productDiv3.innerHTML = ''
                        var productAddBtn = document.createElement('button')
                        productAddBtn.id = 'productAddBtn' + product.productId
                        productAddBtn.className = 'productAddBtn'
                        productAddBtn.innerText = 'Add To Cart'

                        productAddBtn.addEventListener('click', function () {

                            var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
                            var found = false;
                            cartItems.forEach(function (item) {
                                if (item.productId === product.productId) {
                                    item.count++;
                                    found = true;
                                }
                            });

                            if (!found) {
                                var newProduct = { ...product };
                                newProduct.count = 1;
                                cartItems.push(newProduct);
                            }

                            localStorage.setItem('cart', JSON.stringify(cartItems));
                            updateCartDisplay(cartItems)
                            updateBtns()

                        })
                        var productDiv3 = document.getElementById('productDetailDiv3' + product.productId)


                        if (productDiv3) {
                            productDiv3.appendChild(productAddBtn)
                        }

                    }
                }


                updateBtns()

            }
        })

    }


    //-------------------------------productCard ends here------------------------------------

    // {
    //     const productCard = document.createElement('div')
    //     productCard.id = 'productCard'
    //     productCard.className = 'productCard'

    //     const productImgDiv = document.createElement('div')
    //     productImgDiv.className = 'productImgDiv'

    //     const productImg = document.createElement('img')
    //     productImg.className = 'productImg'
    //     productImg.src = productDetails[0].productImg

    //     productImgDiv.appendChild(productImg)

    //     const productDetailDiv = document.createElement('div')
    //     productDetailDiv.id = 'productDetailDiv'
    //     productDetailDiv.className = 'productDetailDiv'

    //     const productDetailDiv1 = document.createElement('div')
    //     productDetailDiv1.id = 'productDetailDiv1'
    //     productDetailDiv1.className = 'productDetailDiv1'

    //     const productDetailDiv1Head = document.createElement('h1')
    //     productDetailDiv1Head.id = 'productDetailDiv1Head'
    //     productDetailDiv1Head.className = 'productDetailDiv1Head'
    //     productDetailDiv1Head.innerText = productDetails[0].productTitle

    //     const productDetailDiv1Span = document.createElement('span')
    //     productDetailDiv1Span.id = 'productDetailDiv1Span'
    //     productDetailDiv1Span.className = 'productDetailDiv1Span'
    //     productDetailDiv1Span.innerText = `₹ ${productDetails[0].productPrice}`

    //     productDetailDiv1.appendChild(productDetailDiv1Head)
    //     productDetailDiv1.appendChild(productDetailDiv1Span)

    //     const productDetailDiv2 = document.createElement('div')
    //     productDetailDiv2.id = 'productDetailDiv2'
    //     productDetailDiv2.className = 'productDetailDiv2'

    //     const productDetailDiv2Head = document.createElement('h1')
    //     productDetailDiv2Head.id = 'productDetailDiv2Head'
    //     productDetailDiv2Head.className = 'productDetailDiv2Head'
    //     productDetailDiv2Head.innerText = productDetails[0].productDis

    //     const productDetailDiv2Span = document.createElement('span')
    //     productDetailDiv2Span.id = 'productDetailDiv2Span'
    //     productDetailDiv2Span.className = 'productDetailDiv2Span'
    //     productDetailDiv2Span.innerText = `★ ${productDetails[0].productRating}`

    //     productDetailDiv2.appendChild(productDetailDiv2Head)
    //     productDetailDiv2.appendChild(productDetailDiv2Span)



    //     const productDetailDiv3 = document.createElement('div')
    //     productDetailDiv3.id = 'productDetailDiv3'
    //     productDetailDiv3.className = 'productDetailDiv3'

    //     const productAddBtn = document.createElement('button')
    //     productAddBtn.id = 'productAddBtn'
    //     productAddBtn.className = 'productAddBtn'
    //     productAddBtn.innerText = 'Add To Cart'

    //     productDetailDiv3.appendChild(productAddBtn)


    //     productDetailDiv.appendChild(productDetailDiv1)
    //     productDetailDiv.appendChild(productDetailDiv2)
    //     productDetailDiv.appendChild(productDetailDiv3)

    //     productCard.appendChild(productImgDiv)
    //     productCard.appendChild(productDetailDiv)
    // }

    //container appends here-----------------------------------

    container.appendChild(navBar)
    container.appendChild(cartDiv)
    container.appendChild(paraHead)
    showProductsCard()


}
// const updateBtns2 = () => {
//     const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//     const isInCart = cartItems.some(item => item.productId === product.productId);
//     if (isInCart) {
//         console.log("in_cart")
//         const productCounter = document.createElement('div');
//         productCounter.id = 'productCounter' + product.productId;
//         productCounter.className = 'productCounter';
//         productCounter.innerHTML = 'SUB----ADD';

//         var productDiv3 = document.getElementById('productDetailDiv3' + product.productId)
//         productDiv3.innerHTML = ''
//         if (productDiv3) {
//             productDiv3.appendChild(productCounter);
//         }

//     }
//     else {

//         console.log("not_in_cart")
//         var productAddBtn = document.createElement('button')
//         productAddBtn.id = 'productAddBtn' + product.productId
//         productAddBtn.className = 'productAddBtn'
//         productAddBtn.innerText = 'Add To Cart'

//         productAddBtn.addEventListener('click', function () {

//             var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
//             var found = false;
//             cartItems.forEach(function (item) {
//                 if (item.productId === product.productId) {
//                     item.count++;
//                     found = true;
//                 }
//             });

//             if (!found) {
//                 var newProduct = { ...product };
//                 newProduct.count = 1;
//                 cartItems.push(newProduct);
//             }

//             localStorage.setItem('cart', JSON.stringify(cartItems));
//             updateCartDisplay(cartItems)
//             updateBtns2()

//         })
//         var productDiv3 = document.getElementById('productDetailDiv3' + product.productId)


//         if (productDiv3) {
//             productDiv3.appendChild(productAddBtn)
//         }

//     }
// }

function showProductsCard2() {

    // var todel = document.getElementById('')
    var productCardsDiv = document.getElementById('productCardsDiv')
    productCardsDiv.innerHTML = '';
    productCardsDiv.id = 'productCardsDiv'
    productCardsDiv.className = 'productCardsDiv'
    container.appendChild(productCardsDiv)

    productDetails.map((product) => {
        {
            var productCard = document.createElement('div')
            productCard.id = 'productCard'
            productCard.className = 'productCard'

            const productImgDiv = document.createElement('div')
            productImgDiv.className = 'productImgDiv'

            const productImg = document.createElement('img')
            productImg.className = 'productImg'
            productImg.src = product.productImg

            productImgDiv.appendChild(productImg)

            const productDetailDiv = document.createElement('div')
            productDetailDiv.id = 'productDetailDiv'
            productDetailDiv.className = 'productDetailDiv'

            const productDetailDiv1 = document.createElement('div')
            productDetailDiv1.id = 'productDetailDiv1'
            productDetailDiv1.className = 'productDetailDiv1'

            const productDetailDiv1Head = document.createElement('h1')
            productDetailDiv1Head.id = 'productDetailDiv1Head'
            productDetailDiv1Head.className = 'productDetailDiv1Head'
            productDetailDiv1Head.innerText = product.productTitle

            const productDetailDiv1Span = document.createElement('span')
            productDetailDiv1Span.id = 'productDetailDiv1Span'
            productDetailDiv1Span.className = 'productDetailDiv1Span'
            productDetailDiv1Span.innerText = `₹ ${product.productPrice}`

            productDetailDiv1.appendChild(productDetailDiv1Head)
            productDetailDiv1.appendChild(productDetailDiv1Span)

            const productDetailDiv2 = document.createElement('div')
            productDetailDiv2.id = 'productDetailDiv2'
            productDetailDiv2.className = 'productDetailDiv2'

            const productDetailDiv2Head = document.createElement('h1')
            productDetailDiv2Head.id = 'productDetailDiv2Head'
            productDetailDiv2Head.className = 'productDetailDiv2Head'
            productDetailDiv2Head.innerText = product.productDis

            const productDetailDiv2Span = document.createElement('span')
            productDetailDiv2Span.id = 'productDetailDiv2Span'
            productDetailDiv2Span.className = 'productDetailDiv2Span'
            productDetailDiv2Span.innerText = `★ ${product.productRating}`

            productDetailDiv2.appendChild(productDetailDiv2Head)
            productDetailDiv2.appendChild(productDetailDiv2Span)

            const productDetailDiv3 = document.createElement('div')
            productDetailDiv3.id = 'productDetailDiv3' + product.productId
            productDetailDiv3.className = 'productDetailDiv3'

            productDetailDiv.appendChild(productDetailDiv1)
            productDetailDiv.appendChild(productDetailDiv2)
            productDetailDiv.appendChild(productDetailDiv3)

            productCard.appendChild(productImgDiv)
            productCard.appendChild(productDetailDiv)
            productCardsDiv.appendChild(productCard)

            const updateBtns = () => {
                const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
                const isInCart = cartItems.some(item => item.productId === product.productId);
                if (isInCart) {

                    const productCounter = document.createElement('div');
                    productCounter.id = 'productCounter' + product.productId;
                    productCounter.className = 'productCounter';

                    const incQuantityBtn = document.createElement('button')
                    incQuantityBtn.className = 'incQuantityBtn'
                    incQuantityBtn.id = 'incQuantityBtn'

                    const decQuantityBtn = document.createElement('button')
                    decQuantityBtn.className = 'decQuantityBtn'
                    decQuantityBtn.id = 'decQuantityBtn'

                    incQuantityBtn.innerHTML = '+'
                    decQuantityBtn.innerHTML = '-'

                    const countQuantity = document.createElement('span')
                    countQuantity.id = 'countQuantity'
                    countQuantity.className = 'countQuantity'
                    const cartItem = cartItems.find(item => item.productId === product.productId);
                    if (cartItem) {
                        countQuantity.innerHTML = cartItem.count;
                    }

                    productCounter.appendChild(decQuantityBtn)
                    productCounter.appendChild(countQuantity)
                    productCounter.appendChild(incQuantityBtn)





                    incQuantityBtn.addEventListener('click', function () {
                        var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
                        cartItems.forEach(function (item) {
                            if (item.productId === product.productId) {
                                item.count++;

                            }
                        });
                        localStorage.setItem('cart', JSON.stringify(cartItems));
                        updateCartDisplay(cartItems)
                        updateBtns()
                    })

                    decQuantityBtn.addEventListener("click", function () {
                        if (cartItem.count == '1') {

                            var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
                            cartItems = cartItems.filter(item => item.productId !== product.productId);
                            localStorage.setItem('cart', JSON.stringify(cartItems));
                            updateCartDisplay(cartItems)
                            updateBtns()
                        }
                        else {
                            var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
                            cartItems.forEach(function (item) {
                                if (item.productId === product.productId) {
                                    item.count--;
                                }
                            });
                            localStorage.setItem('cart', JSON.stringify(cartItems));
                            updateCartDisplay(cartItems)
                            updateBtns()
                        }
                    })

                    var productDiv3 = document.getElementById('productDetailDiv3' + product.productId)
                    productDiv3.innerHTML = ''
                    if (productDiv3) {
                        productDiv3.appendChild(productCounter);
                    }

                }
                else {


                    var productAddBtn = document.createElement('button')
                    productAddBtn.id = 'productAddBtn' + product.productId
                    productAddBtn.className = 'productAddBtn'
                    productAddBtn.innerText = 'Add To Cart'

                    productAddBtn.addEventListener('click', function () {

                        var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
                        var found = false;
                        cartItems.forEach(function (item) {
                            if (item.productId === product.productId) {
                                item.count++;
                                found = true;
                            }
                        });

                        if (!found) {
                            var newProduct = { ...product };
                            newProduct.count = 1;
                            cartItems.push(newProduct);
                        }

                        localStorage.setItem('cart', JSON.stringify(cartItems));
                        updateCartDisplay(cartItems)
                        updateBtns()

                    })
                    var productDiv3 = document.getElementById('productDetailDiv3' + product.productId)

                    var productDiv3 = document.getElementById('productDetailDiv3' + product.productId)
                    productDiv3.innerHTML = ''
                    if (productDiv3) {
                        productDiv3.appendChild(productAddBtn)
                    }

                }
            }


            updateBtns()

        }
    })

}

function updateProductsCard() {
    console.log('update_dom_called')
}

function updateCartDisplay(cartItems) {

    var cartContainer = document.getElementById('cartItemsContainer');
    cartContainer.innerHTML = '';

    if (cartContainer) {

        if (cartItems.length > 0) {

            const cartItemDiv = document.createElement('div');
            cartItemDiv.className = 'cartItem';
            let grandTotal = 0;

            var cartNumber = document.getElementById('cartSize')
            cartNumber.style.display = 'flex'
            cartNumber.innerHTML = cartItems.length


            cartItems.forEach(function (item) {

                const eachItemDiv = document.createElement('div')
                eachItemDiv.className = 'eachItemDiv'

                const itemName = document.createElement('span');
                itemName.className = 'itemName'
                itemName.textContent = item.productTitle;

                const itemQuantity = document.createElement('span');
                itemQuantity.textContent = ` Quantity:${item.count} `;

                const itemTotal = document.createElement('span')
                const total = item.count * item.productPrice;
                itemTotal.textContent = ` Total Price: ₹${total}`;
                grandTotal += total; // Add total price to gran

                const deleteOneBtn = document.createElement('button')
                deleteOneBtn.className = 'deleteOneBtn'
                deleteOneBtn.id = 'deleteOneBtn'
                deleteOneBtn.innerText = 'REMOVE'

                deleteOneBtn.addEventListener('click', function () {
                    var cart = JSON.parse(localStorage.getItem('cart')) || [];
                    const productIdToRemove = item.productId
                    const updatedCart = cart.filter(item => item.productId !== productIdToRemove);
                    localStorage.setItem('cart', JSON.stringify(updatedCart));
                    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
                    updateCartDisplay(cartItems)
                    showProductsCard2()
                })

                eachItemDiv.appendChild(itemName);
                eachItemDiv.appendChild(itemQuantity);
                eachItemDiv.appendChild(itemTotal);
                eachItemDiv.appendChild(deleteOneBtn)
                cartItemDiv.appendChild(eachItemDiv)
                cartContainer.appendChild(cartItemDiv);

            });
            const cartTotalDiv = document.createElement('div')
            cartTotalDiv.className = 'cartTotalDiv'
            cartTotalDiv.innerText = `Total : ₹${grandTotal}`
            cartContainer.appendChild(cartTotalDiv)

            const deleteAllBtn = document.createElement('button')
            deleteAllBtn.className = 'deleteAllBtn'
            deleteAllBtn.id = 'deleteAllBtn'
            deleteAllBtn.innerText = '🗑 DELETE ALL'
            cartTotalDiv.appendChild(deleteAllBtn)
            deleteAllBtn.addEventListener('click', function () {
                localStorage.removeItem('cart')
                var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
                updateCartDisplay(cartItems)
                showProductsCard2()
            })

        } else {

            var cartNumber = document.getElementById('cartSize')
            cartNumber.style.display = 'none'
            const noItemsMessage = document.createElement('div');
            noItemsMessage.textContent = 'No items in cart';
            cartContainer.appendChild(noItemsMessage);
        }
    }
    else {
        console.log("not found")
    }
}

window.onload = function () {

    mainDiv()
    var cartItem = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartDisplay(cartItem)

}