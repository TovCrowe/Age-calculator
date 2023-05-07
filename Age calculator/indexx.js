const btn = document.querySelector('#buttonLoad');
btn.addEventListener('click', calculateAge);

function borderColorError (arg) {
  arg.forEach((i) => {
    i.style.color = "hsl(0, 100%, 67%)";
  });
}

function borderColorInputError (arg) {
  arg.forEach((i) => {
    i.style.borderColor = "hsl(0, 100%, 67%)";
  });
}

// function errpremptyinput is gonna ge a form element
function errorEmptyInput (arg) {
  //we set that the from with the query check if theres already error class in a child from the form 
  let errorMsg = arg.querySelector('.error');
  // if theres no error class we added it
  if (!errorMsg) {
    errorMsg = document.createElement('p');
    errorMsg.classList.add('error');
    errorMsg.style.color = 'hsl(0, 100%, 67%)';
    errorMsg.style.fontSize = '10px';
    errorMsg.style.margin = '0 0 0 0';
    errorMsg.style.height = '0px'; // set a fixed height for the error message
    arg.appendChild(errorMsg);
  }
  errorMsg.textContent = 'Please dont leave space empty';
}

function notValidDate (form) {
  let errorMsg = form.querySelector('.error');
  if (!errorMsg) {
    errorMsg = document.createElement('p');
    errorMsg.classList.add('error');
    errorMsg.style.color = 'hsl(0, 100%, 67%)';
    errorMsg.style.fontSize = '10px';
    errorMsg.style.margin = '0 0 0 0';
    errorMsg.style.height = '0px'; // set a fixed height for the error message
    form.appendChild(errorMsg);
  }
  errorMsg.textContent = 'Please enter a valid date';
}


function calculateAge() {
  const day = parseInt(document.querySelector('#day').value.trim());
  const month = parseInt(document.querySelector('#months').value.trim());
  const year = parseInt(document.querySelector('#years').value.trim());
  const paragraphInput = document.querySelectorAll('.Pinputs');
  const inputsError = document.querySelectorAll('input');
  const formItemsDay = document.querySelector('.form-day');
  const formItemsMonth = document.querySelector('.form-month');
  const formItemsYear = document.querySelector('.form-year');
  const displayDay = document.querySelector('.days')
  const displayMonth = document.querySelector('.months')
  const displayYear = document.querySelector('.years')
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear()

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    borderColorError(paragraphInput);
    borderColorInputError(inputsError);
    errorEmptyInput(formItemsDay);
    errorEmptyInput(formItemsMonth);
    errorEmptyInput(formItemsYear);
  }
  else if(day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > currentYear){
    borderColorError(paragraphInput);
    borderColorInputError(inputsError);
    notValidDate(formItemsDay)
    notValidDate(formItemsMonth)
    notValidDate(formItemsYear)
  }
  else if((month === 4 || month === 6 || month === 9 || month === 11) && day > 30){
    notValidDate(formItemsDay)
    notValidDate(formItemsMonth)
    notValidDate(formItemsYear)
  }
  else if(month === 2){
    // year % 4 === 0    p
    // year % 100 !== 0  ~q
    // year % 400 === 0  r
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
      if(day > 29){
        borderColorError(paragraphInput);
        borderColorInputError(inputsError);
        notValidDate(formItemsDay)
        notValidDate(formItemsMonth)
        notValidDate(formItemsYear)
      }
      else {
        if(day > 28){
          borderColorError(paragraphInput);
          borderColorInputError(inputsError);
          notValidDate(formItemsDay)
          notValidDate(formItemsMonth)
          notValidDate(formItemsYear)
        }
      }
    }
  }
else {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  let showAge = currentYear - year;
  let showMonth = currentMonth - month;
  let showDay = currentDay - day;

  if (showDay < 0) {
    showMonth--;
    const daysInPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
    showDay = daysInPreviousMonth + showDay + 1;
  }

  if (showMonth < 0) {
    showAge--;
    showMonth = 12 + showMonth;
  }



  displayYear.textContent = showAge;
  displayDay.textContent = showDay;
  displayMonth.textContent = showMonth;
}


}
