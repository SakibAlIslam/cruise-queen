const firstClassIncreaseBtn = document.getElementById('first-class-passenger-increase').addEventListener(
    'click', function(){
        const firstClassPassengerInput = document.getElementById('first-class-passengers');
        const firstClassPassengerAmount = parseInt(firstClassPassengerInput.value);
        const firstClassPassengersAmount = firstClassPassengerAmount + 1;
        firstClassPassengerInput.value = firstClassPassengersAmount;
        const subTotal =  firstClassPassengersAmount * 150;
        document.getElementById('sub-total').innerText = '$' + subTotal;

        const vat = subTotal * 0.1;
        document.getElementById('vat').innerText = vat;

        const total = subTotal + vat;
        document.getElementById('grand-total').innerText = total;
    }
)

const firstClassDecreaseBtn = document.getElementById('first-class-passenger-decrease').addEventListener(
    'click', function(){
        const firstClassPassengerInput = document.getElementById('first-class-passengers');
        const firstClassPassengerAmount = parseInt(firstClassPassengerInput.value);
        const firstClassPassengersAmount = firstClassPassengerAmount - 1;
        firstClassPassengerInput.value = firstClassPassengersAmount;

        const subTotal =  firstClassPassengersAmount * 150;
        document.getElementById('sub-total').innerText = '$' + subTotal;

        const vat = subTotal * 0.1;
        document.getElementById('vat').innerText = vat;

        const total = subTotal + vat;
        document.getElementById('grand-total').innerText = total;
    }
)