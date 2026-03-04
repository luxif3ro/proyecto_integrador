document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío del formulario por defecto

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name.trim() === "" || email.trim() === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Si todo está bien, envía el formulario
  this.submit();
});