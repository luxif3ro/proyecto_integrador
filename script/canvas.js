const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Rectángulo azul oscuro (arriba)
ctx.fillStyle = "#0a0aff";
ctx.fillRect(20, 20, 120, 30);

// Rectángulo azul claro (largo)
ctx.fillStyle = "#00a2ff";
ctx.fillRect(20, 50, 220, 35);

// Rectángulo amarillo
ctx.fillStyle = "#ffe100";
ctx.fillRect(20, 85, 80, 35);

// Rectángulo azul marino
ctx.fillStyle = "#001f5b";
ctx.fillRect(20, 120, 100, 35);

// Rectángulo verde (abajo)
ctx.fillStyle = "#00d400";
ctx.fillRect(20, 155, 180, 35);
