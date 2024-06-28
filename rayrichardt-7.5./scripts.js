document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById('registration-form');
    const registrantTableBody = document.querySelector('#registrant-table tbody');
    const summary = document.getElementById('summary');

    let registrants = [];

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = event.target.name.value.trim();
        const age = parseInt(event.target.age.value.trim());
        const allowance = parseInt(event.target.allowance.value.trim());

        if (name.length >= 10 && age >= 25 && allowance >= 100000 && allowance <= 1000000) {
            registrants.push({ name, age, allowance });
            updateTable();
            updateSummary();
            registrationForm.reset();
        } else {
            alert('Please enter valid data according to the criteria.');
        }
    });

    function updateTable() {
        registrantTableBody.innerHTML = '';
        registrants.forEach(registrant => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${registrant.name}</td><td>${registrant.age}</td><td>${registrant.allowance}</td>`;
            registrantTableBody.appendChild(row);
        });
    }

    function updateSummary() {
        if (registrants.length > 0) {
            const totalAllowance = registrants.reduce((acc, curr) => acc + curr.allowance, 0);
            const totalAge = registrants.reduce((acc, curr) => acc + curr.age, 0);
            const averageAllowance = totalAllowance / registrants.length;
            const averageAge = totalAge / registrants.length;

            summary.textContent = `The average registrant has an allowance of ${averageAllowance} with an average age of ${averageAge}.`;
        } else {
            summary.textContent = 'No registrants yet.';
        }
    }
});

function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
}

// Show the registration tab by default
document.addEventListener('DOMContentLoaded', function() {
    showTab('registration');
});