function addProduct(name, price){
    addToProductList(name);
    calculateTotal(price);
    calculateGrandTotal();
}

function getElement(id){
    return document.getElementById(id)
}

function getElementValue(id){
    const element = getElement(id);
    return parseFloat(element.innerText);
}

function addToProductList(name){
    const productContainer = getElement('product-list-container');
    const h4 = document.createElement('h4');
    h4.classList.add('text-2xl', 'font-medium', 'text-gray-950', 'my-1');
    const count = productContainer.childElementCount;
    h4.innerText = `${count + 1}. ${name}`;

    productContainer.appendChild(h4);
}

function calculateTotal(price){
    const previousTotal = getElement('total-price');
    const previousTotalValue = parseFloat(previousTotal.innerText);
    const newTotal = previousTotalValue + price;

    previousTotal.innerText = newTotal;
}

function calculateDiscount(){
    const total = getElementValue('total-price');
    const discount = (total * 20) / 100;

    getElement('discount').innerText = discount;
    calculateGrandTotal();

    getElement('coupon').value = '';
    getElement('coupon-btn').setAttribute('disabled', true);
}


function calculateGrandTotal(){
    const total = getElementValue('total-price');
    const discount = getElementValue('discount');
    console.log(total, discount);
    const grandTotal = total - discount;

    getElement('grand-total').innerText = grandTotal;
}


getElement('coupon').addEventListener('keyup', function(event){
    if(event.target.value === 'SELL200' && getElementValue('total-price') >= 200){
        getElement('coupon-btn').removeAttribute('disabled');
    } else{
        getElement('coupon-btn').setAttribute('disabled', true);
    }
})


// The End //