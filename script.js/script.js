const lentes = [
    {
        nombre: "Aqua 01",
        tipo: "Armazón oftálmico",
        precio: 899,
        imagen: "img/lente1.png"
    },
    {
        nombre: "Aqua 02",
        tipo: "Armazón oftálmico",
        precio: 799,
        imagen: "img/lente2.png"
    },
    {
        nombre: "Aqua 03",
        tipo: "Armazón de sol",
        precio: 949,
        imagen: "img/lente3.png"
    },
    {
        nombre: "Aqua 04",
        tipo: "Armazón oftálmico",
        precio: 850,
        imagen: "img/lente4.png"
    }
];


const contenedorProductos = document.querySelector(".productos");


lentes.forEach(lente => {

    const tarjeta = document.createElement("div");

    tarjeta.classList.add("tarjeta-producto");

    tarjeta.innerHTML = `
        <div class="producto-imagen">
            <img src="${lente.imagen}" alt="${lente.nombre}">
        </div>

        <div class="producto-info">
            <h3>${lente.nombre}</h3>
            <p class="tipo">${lente.tipo}</p>
            <p class="precio">$${lente.precio} MXN</p>
        </div>
    `;

    contenedorProductos.appendChild(tarjeta);

});