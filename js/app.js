function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin(); 
    }
}

function generatePin (){
    const random = Math.round(Math.random()*10000);
    return random;
}

function setElementById (elementId, value){
    const element = document.getElementById(elementId);
    element.value = value;
}
document.getElementById('generate-pin').addEventListener('click', function(){
    const myPin = getPin();
    setElementById('display-pin', myPin);
    
});

document.getElementById('calculator').addEventListener('click', function(event){
    const typedNumberField = document.getElementById('typed-number');
    const number = event.target.innerText;
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
});

document.getElementById('varify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const curentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-number');
    const typedNumber = typedNumberField.value;

    const pinSuccesMessage = document.getElementById('pin-succes');
    const pinFailureMessage = document.getElementById('pin-faliure');
    if(typedNumber === curentPin){
        pinSuccesMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';

    }
    else{
        pinFailureMessage.style.display = 'block';
        pinSuccesMessage.style.display = 'none';
    }
});