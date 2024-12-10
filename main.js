// Selecciona el elemento con la clase "screen", que muestra el contenido actual de la calculadora.
const screen = document.querySelector(".screen");

// Selecciona todos los elementos con la clase "btn", es decir, todos los botones de la calculadora.
const buttons = document.querySelectorAll(".btn");

// Itera sobre cada botón seleccionado.
buttons.forEach(button => {
    // Añade un evento "click" a cada botón.
    button.addEventListener("click", () => {
        // Obtiene el texto del botón que se presionó.
        const buttonPressed = button.textContent;

        // Si el botón tiene el id "c", reinicia la pantalla a "0".
        if (button.id === "c") {
            screen.textContent = "0";
            return; // Termina la ejecución del evento para este caso.
        }

        // Si el botón tiene el id "remove", elimina el último carácter de la pantalla.
        if (button.id === "remove") {
            // Si solo queda un carácter o si hay un mensaje de "Error", reinicia la pantalla a "0".
            if (screen.textContent.length === 1 || screen.textContent === "Error") {
                screen.textContent = "0";
            } else {
                // Elimina el último carácter de la cadena actual.
                screen.textContent = screen.textContent.slice(0, -1);
           }
            return; // Termina la ejecución del evento para este caso.
        }

        // Si el botón tiene el id "percent", calcula el porcentaje del número actual en la pantalla.
        if (button.id === "percent") {
            try {
                // Convierte el valor de la pantalla en un número.
                const currentValue = parseFloat(screen.textContent);
                // Divide el valor por 100 y actualiza la pantalla.
                screen.textContent = (currentValue / 100).toString();
            } catch {
                // Si ocurre algún error (por ejemplo, un valor inválido), muestra "Error" en la pantalla.
                screen.textContent = "Error";
            }
            return; // Termina la ejecución del evento para este caso.
        }

        // Si el botón tiene el id "equal", evalúa la expresión matemática en la pantalla.
        if (button.id === "equal") {
            try {
                // Usa la función eval para calcular el resultado de la expresión en pantalla.
                screen.textContent = eval(screen.textContent);
            } catch {
                // Si ocurre un error al evaluar (por ejemplo, expresión inválida), muestra "Error".
                screen.textContent = "Error";
            }
            return; // Termina la ejecución del evento para este caso.
        }

        // Si el contenido de la pantalla es "0" o "Error", reemplaza el contenido por el texto del botón presionado.
        if (screen.textContent === "0" || screen.textContent === "Error") {
            screen.textContent = buttonPressed;
        } else {
            // Si ya hay contenido válido en la pantalla, agrega el texto del botón presionado al final.
            screen.textContent += buttonPressed;
        }
    });
});
