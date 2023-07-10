const btn = document.querySelector('.arrow');
const currentDate = new Date();
const yearOut = document.querySelector('.years span');
const monthOut = document.querySelector('.months span');
const dayOut = document.querySelector('.days span');

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

    let birthday = `${month}/${day}/${year}`;
    let birthdayObj = new Date(birthday);
    let ageDiff = Date.now() - birthdayObj;
    let ageDate = new Date(ageDiff);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonths = ageDate.getUTCMonth();
    let ageDays = ageDate.getUTCDay() - 1;

    yearOut.textContent = ageYears;
    monthOut.textContent = ageMonths;
    dayOut.textContent = ageDays;
});