const submission = document.getElementById('login-submit');
submission.addEventListener('click',function(){
    const InputEmail = document.getElementById('inputEmail');
    const InputPassword = document.getElementById('inputPassword');
    const InputEmailValue = InputEmail.value;
    const InputPasswordValue = InputPassword.value;
    if(InputEmailValue == 'mahfujurrahman6793@gmail.com' && InputPasswordValue =='miraz123'){
        window.location.href = 'banking.html';
        
    }
})