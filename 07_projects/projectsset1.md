# Projects related to DOM
## solution code

### project 1
``` javascript
javaScript

const Buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

Buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click', function(e){
        // console.log(e)
        // console.log(e.target)
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id;
          }
          if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id;
          }
          if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
          }
          if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
          }
        

    })      
})
 

```
## Project 2

``` javascript
const form = document.querySelector('form');

form.addEventListener('submit', function(e){
  e.preventDefault();
 const height = parseInt(document.querySelector('#height').value);
 const weight =  parseInt(document.querySelector('#weight').value);
 const result = document.querySelector('#results');

if( height === '' || height <= 0 || isNaN(height)) {
result.innerHTML =`enter valid height ${height}`
} else if ( weight === '' || weight <= 0 || isNaN(weight)){
  result.innerHTML =`enter valid weight ${weight}`
} else {
   const bmi = (weight / ((height * height) / 10000)).toFixed(2);
   result.innerHTML = `<span> ${bmi}</span>`;
}
const bmi = (weight / ((height * height) / 10000)).toFixed(2);
let weightCategory;
if (bmi < 18.6) {
    weightCategory = 'Under Weight';
} else if (bmi >= 18.6 && bmi <= 24.9) {
    weightCategory = 'Normal Range';
} else {
    weightCategory = 'Overweight';
}
result.innerHTML = `<span>BMI: ${bmi}</span><br>Weight Category: ${weightCategory}`;

});
