// Asegúrate de que el script se cargue al final del body o usa DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formCompra");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

        // 1. Recuperar valores del formulario
        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const concierto = document.getElementById("concierto").value;
        const cantidad = document.getElementById("cantidad").value;
        
        // Categoría
        const categoriaRadios = document.getElementsByName("categoria");
        let categoriaSeleccionada = "";
        categoriaRadios.forEach(radio => {
            if (radio.checked) categoriaSeleccionada = radio.value;
        });
        
        // Método de pago
        const pagoRadios = document.getElementsByName("pago");
        let pagoSeleccionado = "";
        pagoRadios.forEach(radio => {
            if (radio.checked) pagoSeleccionado = radio.value;
        });

        // 2. Guardar en sessionStorage
        sessionStorage.setItem("nombre", nombre);
        sessionStorage.setItem("correo", correo);
        sessionStorage.setItem("concierto", concierto);
        sessionStorage.setItem("cantidad", cantidad);
        sessionStorage.setItem("categoria", categoriaSeleccionada);
        sessionStorage.setItem("pago", pagoSeleccionado);

        // 3. Redirigir a confirmacion.html
        window.location.href = "confirmacion.html";
    });
});
