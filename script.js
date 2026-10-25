var form = document.getElementById('registerForm');
var savedList = document.getElementById('savedList');
var message = document.getElementById('message');
var clearButton = document.getElementById('clearButton');

function showRegistrations() {
    var registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    savedList.innerHTML = '';
    for (var i = 0; i < registrations.length; i++) {
        var row = document.createElement('tr');
        var values = [registrations[i].name, registrations[i].email,
            registrations[i].phone, registrations[i].event, registrations[i].source];
        for (var j = 0; j < values.length; j++) {
            var cell = document.createElement('td');
            cell.textContent = values[j];
            row.appendChild(cell);
        }
        savedList.appendChild(row);
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var registration = {
        name: document.getElementById('studentName').value,
        email: document.getElementById('studentEmail').value,
        phone: document.getElementById('phone').value,
        event: document.getElementById('eventChoice').value,
        source: document.querySelector('input[name="source"]:checked').value
    };
    var registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    registrations.push(registration);
    localStorage.setItem('registrations', JSON.stringify(registrations));
    message.textContent = 'Registration saved!';
    form.reset();
    showRegistrations();
});

clearButton.addEventListener('click', function() {
    localStorage.removeItem('registrations');
    message.textContent = 'All registrations cleared.';
    showRegistrations();
});

showRegistrations();
