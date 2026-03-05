document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let lastname = document.getElementById("lastname").value.trim();
    let email = document.getElementById("email").value.trim();
    let topic = document.getElementById("topic").value;
    let message = document.getElementById("message").value.trim();

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      name === "" ||
      lastname === "" ||
      email === "" ||
      message === "" ||
      topic === "Selecciona un tema"
    ) {
      alert("Por favor llena todos los campos");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Ingresa un correo electrónico válido");
      return;
    }

    // abrir modal
    let modal = new bootstrap.Modal(document.getElementById("successModal"));
    modal.show();

    // limpiar formulario
    document.getElementById("contactForm").reset();
  });

// Código para dibujar el diagrama de microservicios en el canvas
const canvas = document.getElementById("microservicesDiagram");
const ctx = canvas.getContext("2d");

// Dibujar servicios
ctx.fillStyle = "#007bff";
ctx.fillRect(50, 50, 100, 50);
ctx.fillRect(200, 50, 100, 50);
ctx.fillRect(350, 50, 100, 50);

// Etiquetas de servicios
ctx.fillStyle = "#fff";
ctx.font = "16px Arial";
ctx.fillText("Servicio A", 60, 80);
ctx.fillText("Servicio B", 210, 80);
ctx.fillText("Servicio C", 360, 80);

// Dibujar flechas de comunicación
ctx.strokeStyle = "#000";
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(150, 75);
ctx.lineTo(200, 75);
ctx.moveTo(300, 75);
ctx.lineTo(350, 75);
ctx.stroke();
