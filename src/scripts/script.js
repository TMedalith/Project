document
.getElementById("cryptoForm")
.addEventListener("submit", async (event) => {
    event.preventDefault();

    const results = document.getElementById("results");
    results.innerHTML = "";
    const option1 = parseInt(document.getElementById("option1").value);
    const option2 = parseInt(document.getElementById("option2").value);
    const key1 = parseInt(document.getElementById("key1").value);
    const key2 = parseInt(document.getElementById("key2").value);
    const message = document.getElementById("message").value.toUpperCase();

    let n,
        d,
        e,
        p = 2,
        q = 2,
        euler;
    let tabla = [];
    let mensaje = message;

    n = key1;
    if (option2 == 1) {
        d = key2;
        while (p * q < n) {
            if (n == p * q) break;
            q++;
            if (q >= n) {
                q = 2;
                p++;
            }
        }
        euler = (p - 1) * (q - 1);
        e = 1;
        while ((d * e) % euler != 1) {
            e++;
        }
        results.innerHTML += `<p>Su clave privada es: (${n}, ${d})</p><p>Por tanto, su clave pública sería: (${n}, ${e})</p>`;
    } else if (option2 == 2) {
        e = key2;
        while (p * q < n) {
            if (n == p * q) break;
            q++;
            if (q >= n) {
                q = 2;
                p++;
            }
        }
        euler = (p - 1) * (q - 1);
        d = 1;
        while ((d * e) % euler != 1) {
            d++;
        }
        results.innerHTML += `<p>Su clave pública es: (${n}, ${e})</p><p>Por tanto, su clave privada sería: (${n}, ${d})</p>`;
    }

    let charMappingTable = null;
    const charMappingContainer = document.getElementById(
        "char-mapping-container",
    );

    if (charMappingContainer) {
        charMappingContainer.innerHTML = `
<h2 class="text-lg w-full font-semibold mb-4">Ingrese los caracteres correspondientes:</h2>
<div id="char-mapping-container" class="flex flex-wrap gap-4 items-center  mt-4">
</div>`; // Initialize container first

        const mappingContainer = document.getElementById(
            "char-mapping-container",
        ); // Get the container reference

        for (let i = 0; i < n; i++) {
            mappingContainer.innerHTML += ` 
    <div class="flex flex-col text-center">
        <label for="char${i}" class="text-sm font-medium text-gray-700">${ i}</label> 
        <input type="text" id="char${i}" maxlength="1" class="mt-1 w-10 p-1 shadow-sm border-2 focus:ring-orange-500 focus:border-orange-500 outline-none sm:text-sm border-orange-300 rounded-md" onkeydown="if (event.keyCode === 13) document.getElementById('char' + (parseInt(this.id.replace('char', '')) + 1)).focus()" required>
    </div>`;
        }

        const submitButton = document.createElement("button");
        submitButton.id = "char-mapping-submit";
        submitButton.className =
            "w-full p-2.5 mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md focus:outline-none focus:ring focus:ring-orange-200";
        submitButton.innerText = "Procesar";
        submitButton.onclick = function () {
            for (let i = 0; i < n; i++) {
                tabla[i] = document.getElementById(`char${i}`).value.toUpperCase();
            }

            let finalResult = "";

            if (option1 == 1) {
                // Encrypt
                let mensajecifrado = "";
                for (let i = 0; i < mensaje.length; i++) {
                    for (let k = 0; k < n; k++) {
                        if (mensaje[i] === tabla[k]) {
                            let num = k;
                            let numconv = Math.pow(num, e) % n;
                            for (let j = 0; j < n; j++) {
                                if (j === numconv) {
                                    mensajecifrado += tabla[j];
                                    break;
                                }
                            }
                            break;
                        }
                    }
                }
                finalResult = `<p>Al encriptar ${mensaje} se obtiene: ${mensajecifrado}</p>`;
            } else if (option1 == 2) {
                // Decrypt (Corrected comparison)
                let mensajecifrado = mensaje;
                let mensajeDescifrado = "";
                for (let i = 0; i < mensajecifrado.length; i++) {
                    for (let k = 0; k < n; k++) {
                        if (mensajecifrado[i] === tabla[k]) {
                            let num = k;
                            let numconv = Math.pow(num, d) % n;
                            for (let j = 0; j < n; j++) {
                                if (j === numconv) {
                                    mensajeDescifrado += tabla[j];
                                    break;
                                }
                            }
                            break;
                        }
                    }
                }
                finalResult = `<p>Al desencriptar ${mensajecifrado} se obtiene: ${mensajeDescifrado}</p>`;
            }

            results.innerHTML += finalResult;
        };

        charMappingContainer.appendChild(submitButton);

        const inputs = charMappingTable.getElementsByTagName("input");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("keydown", function (event) {
                if (event.key === "Tab" && i < inputs.length - 1) {
                    event.preventDefault();
                    inputs[i + 1].focus();
                }
            });
        }
    } else {
        console.error(
            "Element with id 'char-mapping-container' not found",
        );
    }
});