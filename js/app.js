const btn = document.querySelector('.arrow');
const currentDate = new Date();
const yearOut = document.querySelector('.years span');
const monthOut = document.querySelector('.months span');
const dayOut = document.querySelector('.days span');
const requiredFirst = document.querySelector('.required-01');
const requiredSecond = document.querySelector('.required-02');
const requiredThird = document.querySelector('.required-03');
const validMonth = document.querySelector('.valid-month');
const validYear = document.querySelector('.valid-year');
const validDay = document.querySelector('.valid-day');

btn.addEventListener('click', () => {

    let day = document
        .querySelector('.input-day')
        .value;
    let month = document
        .querySelector('.input-month')
        .value;
    let year = document
        .querySelector('.input-year')
        .value;

    if (day == '') {
        requiredFirst.classList.remove('hide');
    } if (month == '') {
        requiredSecond.classList.remove('hide');
    } if (year == '') {
        requiredThird.classList.remove('hide');
    } else  {
        requiredFirst.classList.add('hide');
        requiredSecond.classList.add('hide');
        requiredThird.classList.add('hide');
    }


    if (month > 12) {
        validMonth.classList.remove('hide');
    } if (year > 2023) {
        validYear.classList.remove('hide');
    }

    if (month == 2  && day > 28) {
        validDay.classList.remove('hide');
    } else if (month == 4 || month == 6 || month == 9 || month == 11 && day > 30) {
        validDay.classList.remove('hide');
    } else if (month != 2 && month != 4 && month != 6 && month != 9 && month != 11 & day > 31) {
        validDay.classList.remove('hide');
    } else {
        let birthday = `${month}/${day}/${year}`;
        let birthdayObj = new Date(birthday);
        let ageDiff = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiff);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonths = ageDate.getUTCMonth();
        let ageDays = ageDate.getUTCDay() - 1;
    
    
        validDay.classList.add('hide');
        validMonth.classList.add('hide');
        validYear.classList.add('hide');
        
        yearOut.textContent = ageYears;
        monthOut.textContent = ageMonths;
        dayOut.textContent = ageDays;   
    }
});