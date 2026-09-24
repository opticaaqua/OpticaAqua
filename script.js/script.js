/* =====================================================
   CONFIGURACIÓN
===================================================== */

const coloresConocidos = [
    "NEGRO",
    "AZUL MARINO",
    "AZUL REY",
    "AZUL",
    "DORADO",
    "PLATEADO",
    "PLATA",
    "CAFE",
    "CAREY",
    "VINO",
    "ROJO",
    "ROSA",
    "VERDE",
    "MORADO",
    "PURPURA",
    "NARANJA",
    "AMARILLO",
    "BLANCO",
    "GRIS",
    "MELON",
    "BEIGE",
    "AMBAR",
    "AQUA",
    "TORNASOL"
];


/* =====================================================
   NORMALIZAR TEXTO
===================================================== */

function normalizar(texto) {

    return String(texto ?? "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toUpperCase()
        .trim();

}


/* =====================================================
   DETECTAR COLORES
===================================================== */

function obtenerColores(caracteristicas) {

    const texto = normalizar(caracteristicas);

    return coloresConocidos.filter(color =>
        texto.includes(normalizar(color))
    );

}


/* =====================================================
   DETECTAR MATERIAL
===================================================== */

function obtenerMaterial(caracteristicas) {

    const texto = normalizar(caracteristicas);

    const materiales = [];

    if (texto.includes("PASTA")) {
        materiales.push("PASTA");
    }

    if (texto.includes("ACETATO")) {
        materiales.push("ACETATO");
    }

    if (texto.includes("METALICO")) {
        materiales.push("METALICO");
    }

    if (texto.includes("TITANIO")) {
        materiales.push("TITANIO");
    }

    return materiales;

}


/* =====================================================
   AGRUPAR PRODUCTOS
===================================================== */

function agruparProductos(inventario) {

    const grupos = {};

    inventario.forEach(item => {

        const clave =
            `${normalizar(item.marca)}-${normalizar(item.modelo)}`;

        if (!grupos[clave]) {

            grupos[clave] = {
    marca: item.marca,
    modelo: item.modelo,
    destacado: false,
    variantes: []
};
if (item.destacado === true) {
    grupos[clave].destacado = true;
}
        }

        grupos[clave].variantes.push({

            caracteristicas: item.caracteristicas,

            colores:
                obtenerColores(item.caracteristicas),

            materiales:
                obtenerMaterial(item.caracteristicas),

            cantidad:
                item.cantidad,

            categorias:
    item.categorias || [],

            precio:
                item.precio,

            imagenes:
                item.imagenes || []

        });

    });

    return Object.values(grupos);

}


const productos = agruparProductos(inventario);
function prioridadProducto(producto) {

    const tieneImagen = producto.variantes.some(variante =>
        variante.imagenes &&
        variante.imagenes.length > 0
    );

    const tieneCategoria = producto.variantes.some(variante =>
        variante.categorias &&
        variante.categorias.length > 0
    );

    // 1. Imagen + categoría
    if (tieneImagen && tieneCategoria) {
        return 1;
    }

    // 2. Solo imagen
    if (tieneImagen) {
        return 2;
    }

    // 3. Imagen default
    return 3;
}

productos.sort((a, b) =>
    prioridadProducto(a) - prioridadProducto(b)
);


/* =====================================================
   ELEMENTOS DE LA PÁGINA
===================================================== */

const contenedorProductos =
    document.querySelector(".productos");

const botonAbrirFiltros =
    document.querySelector("#abrir-filtros");

const botonAbrirFiltrosCatalogo =
    document.querySelector("#abrir-filtros-catalogo");

const botonCerrarFiltros =
    document.querySelector("#cerrar-filtros");

const panelFiltros =
    document.querySelector("#panel-filtros");

const buscarModelo =
    document.querySelector("#buscar-modelo");

const filtroMarca =
    document.querySelector("#filtro-marca");

const filtroMaterial =
    document.querySelector("#filtro-material");

const botonesCategoria = document.querySelectorAll(".categoria");

let categoriaActiva = "TODOS";

const filtroColor =
    document.querySelector("#filtro-color");

const filtroPrecio =
    document.querySelector("#filtro-precio");

const limpiarFiltros =
    document.querySelector("#limpiar-filtros");

const aplicarFiltrosBoton =
    document.querySelector("#aplicar-filtros");


/* =====================================================
   IMAGEN TEMPORAL
===================================================== */

function obtenerImagenPrincipal(producto) {

    for (const variante of producto.variantes) {

        if (
            variante.imagenes &&
            variante.imagenes.length > 0
        ) {
            return variante.imagenes[0];
        }

    }

    return "imagenes/01.png";

}


/* =====================================================
   COLORES DE UN PRODUCTO
===================================================== */

function coloresProducto(producto) {

    const colores = producto.variantes.flatMap(
        variante => variante.colores
    );

    return [...new Set(colores)];

}


/* =====================================================
   MOSTRAR PRODUCTOS
===================================================== */

function mostrarProductos(lista) {

    contenedorProductos.innerHTML = "";

    if (lista.length === 0) {

        contenedorProductos.innerHTML = `
            <p class="sin-resultados">
                No encontramos armazones con esos filtros.
            </p>
        `;

        return;

    }


    lista.forEach(producto => {

        const tarjeta =
            document.createElement("div");

        tarjeta.classList.add("tarjeta-producto");


        const colores =
            coloresProducto(producto);


        const textoColores =
            colores.length === 1
                ? "1 color disponible"
                : `${colores.length} colores disponibles`;


        tarjeta.innerHTML = `

            <div class="producto-imagen">

                <img
                    src="${obtenerImagenPrincipal(producto)}"
                    alt="${producto.marca} ${producto.modelo}"
                >

            </div>

            <div class="producto-info">

                <h3>
                    ${producto.marca}
                </h3>

                <p class="modelo">
                    Modelo ${producto.modelo}
                </p>

                <p class="tipo">
                    ${textoColores}
</p>

</div>

            </div>

        `;


        /* ABRIR FICHA DEL PRODUCTO */

        tarjeta.addEventListener("click", () => {

            abrirProducto(producto);

        });


        /* CAMBIO DE FOTO CON HOVER */

        prepararHover(tarjeta, producto);


        contenedorProductos.appendChild(tarjeta);

    });

}


/* =====================================================
   HOVER DE FOTOGRAFÍAS
===================================================== */

function prepararHover(tarjeta, producto) {

    const imagen =
        tarjeta.querySelector(".producto-imagen img");


    const imagenes = producto.variantes.flatMap(
        variante => variante.imagenes || []
    );


    if (imagenes.length <= 1) {
        return;
    }


    let indice = 0;
    let intervalo;


    tarjeta.addEventListener("mouseenter", () => {

        intervalo = setInterval(() => {

            indice++;

            if (indice >= imagenes.length) {
                indice = 0;
            }

            imagen.src =
                imagenes[indice];

        }, 900);

    });


    tarjeta.addEventListener("mouseleave", () => {

        clearInterval(intervalo);

        indice = 0;

        imagen.src =
            imagenes[0];

    });

}


/* =====================================================
   CREAR MODAL
===================================================== */

const modal = document.createElement("div");

modal.classList.add("modal-producto");

modal.innerHTML = `

    <div class="modal-contenido">

        <button class="cerrar-modal">
            ×
        </button>

        <div class="modal-interior"></div>

    </div>

`;

document.body.appendChild(modal);


const cerrarModal =
    modal.querySelector(".cerrar-modal");

const modalInterior =
    modal.querySelector(".modal-interior");


cerrarModal.addEventListener("click", () => {

    modal.classList.remove("activo");

});


modal.addEventListener("click", evento => {

    if (evento.target === modal) {

        modal.classList.remove("activo");

    }

});


/* =====================================================
   ABRIR PRODUCTO
===================================================== */

function abrirProducto(producto) {
    panelFiltros.classList.remove("activo");

    const colores =
        coloresProducto(producto);


    modalInterior.innerHTML = `

        <div class="modal-galeria">

    <div class="modal-imagen">

        <img
            id="imagen-modal"
            src="${obtenerImagenPrincipal(producto)}"
            alt="${producto.marca} ${producto.modelo}"
        >

    </div>

    <div
        class="miniaturas-modal"
        id="miniaturas-modal">
    </div>

</div>


        <div class="modal-datos">

            <p class="subtitulo">
                ${producto.marca}
            </p>

            <h2>
                Modelo ${producto.modelo}
            </h2>


            <p>
                ${producto.variantes.length}
                ${
                    producto.variantes.length === 1
                        ? "variante disponible"
                        : "variantes disponibles"
                }
            </p>


            <div class="variantes-modal">

                ${producto.variantes.map(
                    (variante, indice) => `

                    <button
                        class="boton-variante"
                        data-indice="${indice}"
                    >

                        ${
                            variante.colores.length > 0
                                ? variante.colores.join(" / ")
                                : variante.caracteristicas
                        }

                    </button>

                `).join("")}

            </div>


            <div
                class="detalle-variante"
                id="detalle-variante"
            ></div>

        </div>

    `;


    modal.classList.add("activo");


    const botones =
        modalInterior.querySelectorAll(
            ".boton-variante"
        );


    botones.forEach(boton => {

        boton.addEventListener("click", () => {

            const indice =
                Number(boton.dataset.indice);

            mostrarVariante(
                producto.variantes[indice]
            );

        });

    });


    mostrarVariante(
        producto.variantes[0]
    );

}


/* =====================================================
   MOSTRAR VARIANTE EN MODAL
===================================================== */

function mostrarVariante(variante) {

    const detalle =
        document.querySelector("#detalle-variante");

    const imagenModal =
        document.querySelector("#imagen-modal");

    detalle.innerHTML = `

        <p>
            ${variante.caracteristicas}
        </p>

        <p>
            Existencia: ${variante.cantidad}
        </p>

        ${
            variante.precio !== null
                ? `<p class="precio">
                    $${variante.precio} MXN
                   </p>`
                : ""
        }

    `;


    if (
        variante.imagenes &&
        variante.imagenes.length > 0
    ) {

        imagenModal.src =
            variante.imagenes[0];


        const miniaturas =
            document.createElement("div");

        miniaturas.classList.add("miniaturas-modal");


        variante.imagenes.forEach(
            (imagen, indice) => {

                const miniatura =
                    document.createElement("img");

                miniatura.src = imagen;
                miniatura.alt =
                    `Vista ${indice + 1}`;

                if (indice === 0) {
                    miniatura.classList.add("activa");
                }


                miniatura.addEventListener(
                    "click",
                    () => {

                        imagenModal.src = imagen;

                        miniaturas
                            .querySelectorAll("img")
                            .forEach(img =>
                                img.classList.remove("activa")
                            );

                        miniatura.classList.add("activa");

                    }
                );


                miniaturas.appendChild(miniatura);

            }
        );


        detalle.prepend(miniaturas);

    }

}


/* =====================================================
   GENERAR MARCAS AUTOMÁTICAMENTE
===================================================== */

function generarMarcas() {

    const marcas = [
        ...new Set(
            productos.map(
                producto => producto.marca
            )
        )
    ];


    marcas.sort(
        (a, b) =>
            a.localeCompare(b, "es")
    );


    marcas.forEach(marca => {

        const opcion =
            document.createElement("option");

        opcion.value = marca;

        opcion.textContent = marca;

        filtroMarca.appendChild(opcion);

    });

}


/* =====================================================
   FILTROS
===================================================== */

function aplicarFiltros() {

    const texto =
        normalizar(buscarModelo.value);

    const marca =
        normalizar(filtroMarca.value);

    const material =
        normalizar(filtroMaterial.value);

    const color =
        normalizar(filtroColor.value);

    const precio =
        filtroPrecio.value;


    const resultados =
        productos.filter(producto => {


            const textoProducto =
                normalizar(`

                    ${producto.marca}

                    ${producto.modelo}

                    ${
                        producto.variantes
                            .map(
                                variante =>
                                    variante.caracteristicas
                            )
                            .join(" ")
                    }

                `);


            const coincideTexto =
                textoProducto.includes(texto);


            const coincideMarca =
                marca === "" ||
                normalizar(producto.marca) === marca;


            const coincideMaterial =
                material === "" ||

                producto.variantes.some(
                    variante =>
                        variante.materiales.some(
                            item =>
                                normalizar(item) === material
                        )
                );


            const coincideColor =
                color === "" ||

                producto.variantes.some(
                    variante =>
                        variante.colores.some(
                            item =>
                                normalizar(item)
                                    .includes(color)
                        )
                );


            const coincidePrecio =
                precio === "" ||

                producto.variantes.some(
                    variante =>
                        variante.precio !== null &&
                        variante.precio <= Number(precio)
                );
const coincideCategoria =
    categoriaActiva === "TODOS" ||

    producto.variantes.some(
        variante =>
            variante.categorias?.includes(categoriaActiva)
    );

            return (

    coincideTexto &&
    coincideMarca &&
    coincideMaterial &&
    coincideColor &&
    coincidePrecio &&
    coincideCategoria

);

        });


    mostrarProductos(resultados);

}


/* =====================================================
   EVENTOS
===================================================== */

if (botonAbrirFiltros) {

    botonAbrirFiltros.addEventListener(
        "click",
        () => {

            panelFiltros.classList.add("activo");

        }
    );

}


botonCerrarFiltros.addEventListener(
    "click",
    () => {

        panelFiltros.classList.remove("activo");

    }
);


buscarModelo.addEventListener(
    "input",
    aplicarFiltros
);


filtroMarca.addEventListener(
    "change",
    aplicarFiltros
);


filtroMaterial.addEventListener(
    "change",
    aplicarFiltros
);


filtroColor.addEventListener(
    "change",
    aplicarFiltros
);


filtroPrecio.addEventListener(
    "change",
    aplicarFiltros
);


limpiarFiltros.addEventListener(
    "click",
    () => {

        buscarModelo.value = "";
        filtroMarca.value = "";
        filtroMaterial.value = "";
        filtroColor.value = "";
        filtroPrecio.value = "";

        mostrarProductos(productos);

    }
);
aplicarFiltrosBoton.addEventListener("click", () => {

    aplicarFiltros();

    panelFiltros.classList.remove("activo");

    document.querySelector("#catalogo").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});

if (botonAbrirFiltrosCatalogo) {

    botonAbrirFiltrosCatalogo.addEventListener(
        "click",
        () => {

            panelFiltros.classList.add("activo");

        }
    );

}

botonesCategoria.forEach(boton => {

    boton.addEventListener("click", () => {

        // Quitar el seleccionado anterior
        botonesCategoria.forEach(b => {
            b.classList.remove("activa");
        });

        // Marcar el botón que acabamos de tocar
        boton.classList.add("activa");

        // Guardar qué categoría elegimos
        categoriaActiva = boton.dataset.categoria;

        // Mostrar todos o filtrar por categoría
        if (categoriaActiva === "TODOS") {

            mostrarProductos(productos);

        } else {

            const filtrados = productos.filter(producto =>
                producto.variantes.some(variante =>
                    variante.categorias?.includes(categoriaActiva)
                )
            );

            mostrarProductos(filtrados);
        }

    });

});
botonesCategoria.forEach(boton => {

    boton.addEventListener("click", () => {

        // Quitar selección anterior
        botonesCategoria.forEach(b => {
            b.classList.remove("activa");
        });

        // Marcar la categoría seleccionada
        boton.classList.add("activa");

        categoriaActiva = boton.dataset.categoria;

        // TODOS muestra todo
        if (categoriaActiva === "TODOS") {
            mostrarProductos(productos);
            return;
        }

        // Filtrar productos por categoría
        const productosFiltrados = productos.filter(producto => {

            return producto.variantes.some(variante =>
                variante.categorias?.includes(categoriaActiva)
            );

        });

        mostrarProductos(productosFiltrados);

    });

});

/* =====================================================
   INICIAR
===================================================== */

generarMarcas();

const paginaActual = document.body.dataset.pagina;

if (paginaActual === "inicio") {

    const productosDestacados = productos.filter(
        producto => producto.destacado === true
    );

    mostrarProductos(productosDestacados);

} else {

    mostrarProductos(productos);

}
/* =====================================================
   VOLVER ARRIBA
===================================================== */

const botonVolverArriba =
    document.querySelector("#volver-arriba");

if (botonVolverArriba) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            botonVolverArriba.classList.add("visible");
        } else {
            botonVolverArriba.classList.remove("visible");
        }

    });

    botonVolverArriba.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}
/* =====================================================
   ANIMACIÓN NOSOTROS
===================================================== */

const seccionNosotros = document.querySelector(".nosotros");

if (seccionNosotros) {

    const observarNosotros = new IntersectionObserver(
        (entradas) => {

            entradas.forEach(entrada => {

                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visible");
                    observarNosotros.unobserve(entrada.target);
                }

            });

        },
        {
            threshold: 0.2
        }
    );

    observarNosotros.observe(seccionNosotros);
}