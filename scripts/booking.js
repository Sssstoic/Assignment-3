/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? No, the variables does not need to be initialized when the page is loaded.
// When do they need to be reset or updated? They will need to be reseted when the client chooses clear days or updated when the cliend chooses the day and if its full or half day.

var costPerDay = 35; 
var selectedDays = [];
var calculatedCostElement = document.getElementById('calculated-cost');
var dayButtons = document.querySelectorAll('.day-selector li');
var fullButton = document.getElementById('full');
var halfButton = document.getElementById('half');

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

dayButtons.forEach(function (dayButton) {
    dayButton.addEventListener('click', function () {
        if (!selectedDays.includes(dayButton)) {
            selectedDays.push(dayButton);
            dayButton.classList.add('clicked');
        }

        updateCost();
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

var clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', function () {
    selectedDays.forEach(function (dayButton) {
        dayButton.classList.remove('clicked');
    });
    selectedDays = [];
    updateCost();
});


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.addEventListener('click', function () {
    costPerDay = 20; 
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    updateCost();
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.addEventListener('click', function () {
    costPerDay = 35; // Assuming a cost of $10 for a full day
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    updateCost();
});



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function updateCost() {
    var totalCost = selectedDays.length * costPerDay;
    calculatedCostElement.innerHTML = totalCost;
}
