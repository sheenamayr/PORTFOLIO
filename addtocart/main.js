let subtotal = 0;

const calculateTax = (subtotal) => {
    const tax = subtotal * 0.13;
    const formattedTax = tax.toFixed(2);
    return formattedTax;
}

const calculateTotal = (subtotal) => {
    const tax = calculateTax(subtotal);
    const total = parseFloat(subtotal) + parseFloat(tax);
    const formattedTotal = total.toFixed(2);
    return formattedTotal;
}

const getImgLink = (title) => {
    let imgLink;
    switch (title) {
        case 'French Fries with Ketchup':
            imgLink = 'https://static.vecteezy.com/system/resources/previews/030/728/528/non_2x/french-fries-with-ketchup-on-a-plate-ai-generative-free-png.png';
            break;
        case 'Salmon and Vegetables':
            imgLink = 'https://www.pngarc.com/wp-content/uploads/2023/06/Salmon-with-vegetables-salad-in-plate-leaf-vegetable.png';
            break;
        case 'Spaghetti with Sauce':
            imgLink = 'https://www.pikpng.com/pngl/b/352-3527335_spaghetti-and-meat-sauce-pasta-italiana-png-clipart.png';
            break;

        case 'Tortellini':
            imgLink = 'https://assets-global.website-files.com/6305f7d600c9842969920a58/64be4dce089aca2670712bff_pasta.png';
            break;
        case 'Chicken Salad':
            imgLink = 'https://static.vecteezy.com/system/resources/previews/024/108/121/original/tasty-chicken-cheese-salad-plate-on-transparent-background-png.png';
            break;
        case 'Chicken Salad':
            imgLink = 'https://cookathomemom.com/wp-content/uploads/2020/04/Air-Fryer-Frozen-French-Fries.jpg';
            break;

    }
    return imgLink;
}

$('.add-button').on('click', function () {
    const title = $(this).data('title');
    const price = $(this).data('price');
    const imgLink = getImgLink(title);

    const element = `
    <li class="cart-item">
      <img src="${imgLink}" alt="${title}">
      <div class="cart-item-dets">
        <p class="cart-item-heading">${title}</p>
        <p class="g-price">$${price}</p>
      </div>
    </li>
  `
    $('.cart-items').append(element);

    subtotal = subtotal + price;

    const formattedSubtotal = subtotal.toFixed(2);
    const tax = calculateTax(subtotal);
    const total = calculateTotal(subtotal);

    $('.cart-math').html(`
    <p class="cart-math-item">
      <span class="cart-math-header">Subtotal:</span>
      <span class="g-price subtotal">$${formattedSubtotal}</span>
    </p>
    <p class="cart-math-item">
      <span class="cart-math-header">Tax:</span>
      <span class="g-price tax">$${tax}</span>
    </p>
    <p class="cart-math-item">
      <span class="cart-math-header">Total:</span>
      <span class="g-price total">$${total}</span>
    </p>
  `)
})