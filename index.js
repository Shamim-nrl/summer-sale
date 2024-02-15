
let titleCount = 1;
let totalPrice = 0
const cards = document.querySelectorAll('.card')
for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    card.addEventListener('click', function () {

        // get the title 

        const title = card.querySelector('h3').innerText;

        const titleContainer = document.getElementById('title-container')

        const p = document.createElement('p')
        p.innerText = titleCount + '. ' + title;

        titleContainer.appendChild(p)
        titleCount++

        // Price section 

        const price = parseFloat(card.querySelector('span').innerText.split(' ')[1])
        totalPrice += price


        document.getElementById('totalPrice').innerText = totalPrice.toFixed(2)


    })

}

const btn = document.getElementById('apply-btn')

btn.addEventListener('click', function () {

    // get input field
    const inputField = document.getElementById('input-field').value;
    

    const promoCode = inputField.split(' ').join('').toUpperCase();

    if (totalPrice >= 200) {
        if (promoCode === 'SELL200') {
            // discount calculation
            const discountPriceElement = document.getElementById('discountPrice')
            const discountPrice = totalPrice * 0.2;
            discountPriceElement.innerText = discountPrice.toFixed(2);
            // rest amaunt 
            const restAmountTotal = document.getElementById('total')

            restAmountTotal.innerText = totalPrice - discountPrice.toFixed(2);
            document.getElementById('input-field').value = '';




        } else {
            alert('invalid promo code')
        }

    } else {
        alert('aro bay koro')
    }

})

