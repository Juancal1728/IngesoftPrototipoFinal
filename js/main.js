// Función genérica para manejar el envío de formularios
function handleFormSubmit(formId, callback) {
    document.getElementById(formId).addEventListener('submit', function (event) {
        event.preventDefault();
        callback(this); // Llama a la función callback pasando el formulario como contexto
    });
}

// Función para agregar una fila a una tabla
function addRowToTable(tableId, rowData) {
    const tableBody = document.querySelector(`#${tableId} tbody`);
    const row = document.createElement('tr');
    row.innerHTML = rowData;
    tableBody.appendChild(row);
}

// Función para redirigir al Dashboard
function redirectToDashboard() {
    window.location.href = "index.html";
}

// Función para registrar notas
handleFormSubmit('form-register-notas', function (form) {
    const studentId = document.getElementById('student-id').value;
    const subject = document.getElementById('subject').value;
    const grade = document.getElementById('grade').value;

    // Agrega la fila con los datos del formulario
    addRowToTable('table-notas', `
        <td>${studentId}</td>
        <td>${subject}</td>
        <td>${grade}</td>
    `);

    alert('Nota registrada con éxito');
    form.reset();
});

// Función para registrar usuarios
handleFormSubmit('form-register-usuarios', function (form) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    alert(`Usuario ${username} registrado con el correo ${email}`);
    form.reset();
});

// Función para enviar notificaciones
handleFormSubmit('form-notificaciones', function (form) {
    const message = document.getElementById('notification-message').value;

    alert(`Notificación enviada: ${message}`);
    form.reset();
});

// Función para cargar notas de ejemplo (consulta de notas)
function fetchStudentGrades() {
    // Simula datos de notas
    const grades = [
        { subject: "Pediatria", grade: 4.5, status: "Aprobado" },
        { subject: "Investigación", grade: 3.0, status: "Aprobado" },
        { subject: "Rotación", grade: 2.5, status: "Reprobado" },
    ];

    const tableBody = document.querySelector("#table-notas tbody");
    tableBody.innerHTML = ""; // Limpia las filas existentes

    grades.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.subject}</td>
            <td>${item.grade}</td>
            <td>${item.status}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Función para corregir errores en el envío de SNIES
handleFormSubmit('form-correction-snies', function (form) {
    const correction = document.getElementById('correction').value;

    if (correction) {
        alert(`Corrección guardada: ${correction}`);
        form.reset();
    } else {
        alert("Por favor ingresa los datos de corrección.");
    }
});

// Función para enviar calificaciones al SNIES
function sendGradesToSNIES() {
    alert("Calificaciones enviadas al SNIES con éxito.");
}

// Evento para el botón de enviar calificaciones al SNIES
document.getElementById('btn-send-snies').addEventListener('click', sendGradesToSNIES);

// Función para mostrar notificaciones dinámicas
function sendNotification() {
    const notificationMessage = prompt("Escribe tu notificación:");
    if (notificationMessage) {
        alert(`Notificación enviada: ${notificationMessage}`);
    } else {
        alert("No se envió ninguna notificación.");
    }
}

// Agregar evento para enviar notificación desde el botón
document.getElementById('btn-notification').addEventListener('click', sendNotification);

let slideIndex = 0;
showSlides(slideIndex);

// Cambiar diapositiva manualmente
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Mostrar diapositiva actual
function showSlides(n) {
    const slides = document.querySelectorAll(".slide");

    // Reinicia el índice si supera el número de diapositivas
    if (n >= slides.length) {
        slideIndex = 0;
    }

    // Ve a la última diapositiva si el índice es negativo
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Oculta todas las diapositivas
    slides.forEach(slide => (slide.style.display = "none"));

    // Muestra la diapositiva actual
    slides[slideIndex].style.display = "block";
}

// Cambio automático cada 5 segundos
setInterval(() => {
    changeSlide(1);
}, 5000);
// Función para registrar notas
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
        <td>${grade >= 3 ? 'Aprobado' : 'Reprobado'}</td>
    `;
    tableBody.appendChild(row);

    alert('Nota registrada con éxito');
    this.reset();
});

// Función para enviar calificaciones al SNIES
document.getElementById('btn-send-snies').addEventListener('click', function () {
    alert('Calificaciones enviadas al SNIES con éxito');
    document.querySelector('#snies-status span').innerText = 'Enviado';
});

// Función para guardar correcciones
document.getElementById('form-correction-snies').addEventListener('submit', function (event) {
    event.preventDefault();

    const correction = document.getElementById('correction').value;
    if (correction) {
        alert(`Corrección guardada: ${correction}`);
        this.reset();
    } else {
        alert('Por favor ingresa los datos de corrección.');
    }
});

// Función para generar reportes
document.getElementById('btn-generate-report').addEventListener('click', function () {
    const reportOutput = document.getElementById('report-output');
    reportOutput.innerHTML = '<p>Reporte generado con éxito. Detalles...</p>';
});
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

