document.getElementById('form-register-notas').addEventListener('submit', function (event) {
    event.preventDefault();

    const studentId = document.getElementById('student-id').value;
    const subject = document.getElementById('subject').value;
    const grade = document.getElementById('grade').value;

    const tableBody = document.querySelector('#table-notas tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${studentId}</td>
        <td>${subject}</td>
        <td>${grade}</td>
    `;

    tableBody.appendChild(row);

    alert('Nota registrada con éxito');
    this.reset();
});

document.getElementById('form-register-usuarios').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    alert(`Usuario ${username} registrado con el correo ${email}`);
    this.reset();
});

document.getElementById('form-notificaciones').addEventListener('submit', function (event) {
    event.preventDefault();

    const message = document.getElementById('notification-message').value;
    alert(`Notificación enviada: ${message}`);
    this.reset();
});
