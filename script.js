const display = document.getElementById('calc-display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.forEach( button => {
    button.addEventListener('click', e => {
         switch(e.target.innerText) {
             case 'AC': 
                display.innerText = '';
                break;
             case 'DEL':
                 display.innerText = display.innerText.slice(0,-1);
                 break;
             case '=':
                 try {
                    display.innerText = eval(display.innerText);  
                 } catch {
                     display.innerText = 'Invalid Input';
                 }
                break;
             default:
                display.innerText += e.target.innerText;
         }

    })
})