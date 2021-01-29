const firstClassIncreaseBtn = document.getElementById('first-class-passenger-increase').addEventListener(
    'click', function(){
        handlePassengerCounting(true, 'first-class-passengers');
        totalCalculations('sub-total', 'vat', 'grand-total');
    }
);

const firstClassDecreaseBtn = document.getElementById('first-class-passenger-decrease').addEventListener(
    'click', function(){
        handlePassengerCounting(false, 'first-class-passengers');
        totalCalculations('sub-total', 'vat', 'grand-total');
    }
);

const economyClassIncreaseBtn = document.getElementById('economy-class-passenger-increase').addEventListener(
    'click', function(){
        handlePassengerCounting(true, 'economy-class-passengers');
        totalCalculations('sub-total', 'vat', 'grand-total');
    }
);

const economyClassDecreaseBtn = document.getElementById('economy-class-passenger-decrease').addEventListener(
    'click', function(){
        handlePassengerCounting(false, 'economy-class-passengers');
        totalCalculations('sub-total', 'vat', 'grand-total');
    }
);

//this function for counting passengers
function handlePassengerCounting(isIncrease, passengers) {
        const passengerInput = document.getElementById(passengers);
        const passengerAmount = parseInt(passengerInput.value);
        let passengersNewAmount = passengerAmount;
        if(isIncrease == true){
            passengersNewAmount = passengerAmount + 1;
        }
        else if(isIncrease == false && passengerAmount > 0){
            passengersNewAmount = passengerAmount - 1;
        }
        passengerInput.value = passengersNewAmount;
}

//this function for calculating subtotal, vat, grand total
function totalCalculations(subTotalId, vatId, grandTotalId) {
        const firstClassPassengerInput = document.getElementById('first-class-passengers');
        const passengerAmount = parseInt(firstClassPassengerInput.value);
        const economyClassPassengerInput = document.getElementById('economy-class-passengers');
        const economyClassPassengerAmount = parseInt(economyClassPassengerInput.value);

        //subtotal calculation
        const subTotal =  (passengerAmount * 150) + (economyClassPassengerAmount * 100);
        document.getElementById(subTotalId).innerText = '$' + subTotal;

        //vat calculation
        const vat = subTotal * 0.1;
        document.getElementById(vatId).innerText = '$' + vat;

        //total cost calculation
        const total = subTotal + vat;
        document.getElementById(grandTotalId).innerText = '$' + total;
}

//this function will give us the details when user press the book now button
function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        const departureDate = document.getElementById('departureDate').value;
        const returnDate = document.getElementById('returnDate').value;
        const firstClassPassengerInput = document.getElementById('first-class-passengers').value;
        const economyClassPassengerInput = document.getElementById('economy-class-passengers').value;
        const subTotal = document.getElementById('sub-total').innerText;
        const vat = document.getElementById('vat').innerText;
        const grandTotal = document.getElementById('grand-total').innerText;
        console.log(grandTotal);
        console.log(vat);
        document.getElementById('fromInfo').innerText = 'From: ' + from;
        document.getElementById('toInfo').innerText = 'To: ' + to;
        document.getElementById('departureDateInfo').innerText = 'Departure Date: '  + departureDate;
        document.getElementById('returnDateInfo').innerText = 'Return Date: ' + returnDate;
        document.getElementById('firstClassPassengerInputInfo').innerText = 'First Class: ' + firstClassPassengerInput;
        document.getElementById('economyClassPassengerInputInfo').innerText = 'Economy Class: ' + economyClassPassengerInput;
        document.getElementById('subTotalInfo').innerText = 'Sub Total: ' + subTotal;
        document.getElementById('vatInfo').innerText = 'Vat: ' + vat;
        document.getElementById('grandTotalInfo').innerText = 'Grand Total: ' + grandTotal;
  }