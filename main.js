function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError("El factorial solo está definido para enteros ≥ 0.");
  }
  if (n === 0 || n === 1) return 1;

  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado; 
}

const $form = document.getElementById("formFactorial");
const $n = document.getElementById("n");
const $mensaje = document.getElementById("mensaje");

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  const valorStr = $n.value.trim();

  if (valorStr === "" || isNaN(valorStr) || !Number.isInteger(Number(valorStr))) {
    $mensaje.textContent = "Error: ingresa un número entero mayor o igual a 0.";
    $mensaje.className = "salida error";
    console.error("Entrada inválida:", valorStr);
    $n.focus();
    $n.select();
    return;
  }

  const valor = Number(valorStr);

  if (valor < 0) {
    $mensaje.textContent = "Error: el número debe ser mayor o igual a 0.";
    $mensaje.className = "salida error";
    console.error("Número negativo:", valor);
    $n.focus();
    $n.select();
    return;
  }

  try {
    const res = factorial(valor);
    $mensaje.textContent = `${valor}! = ${res}`;
    $mensaje.className = "salida ok";
    console.log(`${valor}! = ${res}`);
  } catch (err) {
    $mensaje.textContent = "Error: " + err.message;
    $mensaje.className = "salida error";
    console.error(err);
  }
});

