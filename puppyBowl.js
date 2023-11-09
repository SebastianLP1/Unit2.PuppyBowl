//2310-FSA-ET-WEB-FT-SF
const input = document.querySelector(`input`);
const form = document.querySelector(`form`);
form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const numberInput = input.value
    console.log(numberInput)
    
})
