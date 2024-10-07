let english = +prompt('Enter english marks');
let math = +prompt('Enter math marks');
let science = +prompt('Enter science marks');
let chemistry = +prompt('Enter Sindhi marks');
let urdu = +prompt('Enter english marks');

let engDis = document.getElementById('english');
engDis.innerText = english;

let mathDis = document.getElementById('math');
mathDis.innerText = math;

let scienceDis = document.getElementById('science');
scienceDis.innerText = science;

let chemistryDis = document.getElementById('chemistry');
chemistryDis.innerText = chemistry;

let urduDis = document.getElementById('urdu');
urduDis.innerText = urdu;

let total = english + math + science + chemistry + urdu;

let displayTotal = document.getElementById('total');
displayTotal.innerText = total;

let percent = total / 500 * 100;

let percentDis = document.getElementById('percent');
percentDis.innerText = percent;

let gradeDis = document.getElementById('grade');
gradeDis.innerText = grade;

if (percent >= 90) {
    grade.innerText = 'A1'
} else if (percent >= 80) {
    grade.innerText = 'A'
} else if (percent >= 70) {
    grade.innerText = 'B'
} else if (percent >= 60) {
    grade.innerText = 'C'
} else if (percent >= 50) {
    grade.innerText = 'D'
} else {
    grade.innerText = 'fail'
}