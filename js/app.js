const btn = document.querySelector('.arrow');
const currentDate = new Date();

btn.addEventListener('click', () => {
    let day = document.querySelector('.input-day').value;
    let month = document.querySelector('.input-month').value;
    let year = document.querySelector('.input-year').value;
    let DateVal = new Date(`${month} ${day} ${year}`);
    console.log(DateVal-currentDate);
});