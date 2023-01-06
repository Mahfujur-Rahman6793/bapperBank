// deposite and withdrawal balance from input field
function getBalance(id) {
    const enter_Amount_Field = document.getElementById(id);
    const enter_Amount = enter_Amount_Field.value;
    const enter_AmountText = parseFloat(enter_Amount);
    enter_Amount_Field.value = '';
    return enter_AmountText;
}


//extra
// function initial_balance(id_1) {
//     const initial_Balance = document.getElementById(id_1);
//     const initialBalance_Text = parseFloat(initial_Balance.innerText);
//     console.log(initialBalance_Text);
//     // return initialBalance_Text;
// }
//extra

// Total initial balace from main accout box

function updateTotalField(id_2,boxValue) {
    const initialBoxValue = document.getElementById(id_2);
    const initialBoxValueText = parseFloat(initialBoxValue.innerText);
    const afterUpdateField = boxValue + initialBoxValueText;
    // console.log(afterUpdateField);
    initialBoxValue.innerText = afterUpdateField;
}

function currentBalance() {
    const initialBalance = document.getElementById('initial_balance');
    const initialBalanceText = parseFloat(initialBalance.innerText);
    return initialBalanceText;
}

// Balance
function BalanceHandle(fileldInput,isAdd) {
    const initialBalance = document.getElementById('initial_balance');
    // console.log(initialDepositeText);
    // const initialBalanceText = parseFloat(initialBalance.innerText);
    const initialBalanceText=currentBalance();

    if (isAdd == true) {
        const afterDepositeBalance = fileldInput + initialBalanceText;
        initialBalance.innerText = afterDepositeBalance;
    }
    else {
        const afterwithdralBalance = initialBalanceText - fileldInput ;
        initialBalance.innerText = afterwithdralBalance;
    }
}
const depositeSubmit = document.getElementById('deposite-submit');
// console.log(depositeSubmit);
depositeSubmit.addEventListener('click', function () {
    
    // const enter_Amount_Field = document.getElementById('enterAmount');
    // const enter_Amount = enter_Amount_Field.value;
    // const enter_AmountText = parseFloat(enter_Amount);
    // console.log(enter_AmountText);
    const deposite = getBalance('enterAmount');
    // initial deposite
    // const initialDeposite = document.getElementById('initial_deposite');
    // const initialDepositeText = parseFloat(initialDeposite.innerText);
    // const afterDeposite = deposite + initialDepositeText;
    // initialDeposite.innerText = afterDeposite;

    if (deposite > 0) {
        updateTotalField('initial_deposite', deposite);
    // const initialDeposite = initial_balance('initial_deposite');
    // const initialBalance = initial_balance('initial_balance');
    

    // const initialBalance = document.getElementById('initial_balance');
    // // console.log(initialDepositeText);
    // const initialBalanceText = parseFloat(initialBalance.innerText);
    // const afterDepositeBalance = deposite + initialBalanceText;
    // initialBalance.innerText = afterDepositeBalance;
    // enter_Amount_Field.value = '';
    BalanceHandle(deposite,true);
    }
    
})



const withdrawalSubmit = document.getElementById('withdrawal-submit');
withdrawalSubmit.addEventListener('click', function () {
    
    // const enter_Amount_Field1 =document.getElementById('withdralAmount');
    // const enter_Amount =enter_Amount_Field1.value;
    // const enter_AmountText = parseFloat(enter_Amount);

    const withdraw = getBalance('withdralAmount');
    // const initialWithdraw = document.getElementById('initial_withdraw');
    // const initialWithdrawText = parseFloat(initialWithdraw.innerText);
    // const afterWithdraw = withdraw + initialWithdrawText;
    // initialWithdraw.innerText = afterWithdraw;
    const current_store_balance = currentBalance();
    if (withdraw > 0 && current_store_balance > withdraw) {
    updateTotalField('initial_withdraw',withdraw);

    // const initialBalance = document.getElementById('initial_balance');
    // const initialBalanceText = parseFloat(initialBalance.innerText);
    // const afterwithdralBalance = initialBalanceText - withdraw ;
    // initialBalance.innerText = afterwithdralBalance;
    // enter_Amount_Field1.value = '';
    BalanceHandle(withdraw,false);
    }
})
