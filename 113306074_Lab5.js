const mathInput = document.getElementById('mathGrade');
const englishInput = document.getElementById('englishGrade');
const submitBtn = document.getElementById('submitBtn');
const gradesTable = document.getElementById('gradesTable').querySelector('tbody');
const mathAverageCell = document.getElementById('mathAverage');
const englishAverageCell = document.getElementById('englishAverage');
const overallAverageCell = document.getElementById('overallAverage');

let grades = [];

submitBtn.addEventListener('click', () => {
    const mathGrade = parseFloat(mathInput.value);
    const englishGrade = parseFloat(englishInput.value);

    if (isNaN(mathGrade) || isNaN(englishGrade)) {
        alert('Please enter valid numeric grades.');
        return;
    }

    const average = ((mathGrade + englishGrade) / 2).toFixed(2);
    const attemptNumber = grades.length + 1;

    // Add new row to table
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${attemptNumber}</td>
        <td>${mathGrade}</td>
        <td>${englishGrade}</td>
        <td>${average}</td>
    `;
    gradesTable.appendChild(newRow);

    // Store grades
    grades.push({ math: mathGrade, english: englishGrade });

    // Update averages
    updateAverages();

    // Clear inputs
    mathInput.value = '';
    englishInput.value = '';
        
} );

function updateAverages() {
    let mathSum = 0, englishSum = 0;
    grades.forEach( grade => {
        mathSum += grade.math;
        englishSum += grade.english;
    } );

    const mathAvg = (mathSum / grades.length).toFixed(2);
    const englishAvg = (englishSum / grades.length).toFixed(2);
    const overallAvg = ((mathSum + englishSum) / (grades.length * 2)).toFixed(2);

    mathAverageCell.textContent = mathAvg;
    englishAverageCell.textContent = englishAvg;
    overallAverageCell.textContent = overallAvg;
}