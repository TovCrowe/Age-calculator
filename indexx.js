
const btn = document.querySelector('#buttonLoad')
btn.addEventListener('click', calculateAge)
function calculateAge() {
    // Get the input values and parse them as integers
    const day = parseInt(document.querySelector('#day').value.trim());
    const month = parseInt(document.querySelector('#months').value.trim());
    const year = parseInt(document.querySelector('#years').value.trim());
    const paragraphInput = document.querySelectorAll('.Pinputs');
    const inputsError = document.querySelectorAll('input');
    const formItems = document.querySelectorAll('form');
   

    // Validate the input values
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      paragraphInput.forEach( (p) => {
        p.style.color = "hsl(0, 100%, 67%)"
      })
      inputsError.forEach( (i) =>{
        i.style.borderColor = "hsl(0, 100%, 67%)"
      })
      formItems.forEach((form) => {
        console.log('Processing form:', form);
        let errorMsg = form.querySelector('.error');
        console.log('Existing error message:', errorMsg);
        if (!errorMsg) {
          console.log('Creating new error message...');
          errorMsg = document.createElement('p');
          errorMsg.classList.add('error');
          errorMsg.style.color = 'hsl(0, 100%, 67%)';
          form.appendChild(errorMsg);
        }
        console.log('Updating error message text content...');
        errorMsg.textContent = 'Please enter a valid input';
      });
    }


}

