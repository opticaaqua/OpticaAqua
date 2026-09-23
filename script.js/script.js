    /* =====================================================
   INVENTARIO
   Cada fila representa una variante existente.
   Los productos con misma MARCA + MODELO
   se agrupan automáticamente.
===================================================== */

const inventario = [

    {
        marca: "SIN MARCA",
        modelo: "62013",
        caracteristicas: "PASTA TRANSPARENTE VERDE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ROWAN",
        modelo: "13",
        caracteristicas: "PASTA AZUL MARINO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "DANIEL PARKER",
        modelo: "25223",
        caracteristicas: "PASTA AZUL MARINO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "PRINCE NOBLE",
        modelo: "5007",
        caracteristicas: "PASTA GRIS",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "2807",
        caracteristicas: "PASTA NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "C-MARK",
        modelo: "102",
        caracteristicas: "SPORT TORNASOL",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: ["DEPORTE"]
    },

    {
        marca: "C-MARK",
        modelo: "102",
        caracteristicas: "SPORT TORNASOL",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: ["DEPORTE"]
    },

    {
        marca: "C-MARK",
        modelo: "104",
        caracteristicas: "SPORT AZUL",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: ["DEPORTE"]
    },

    {
        marca: "C-MARK",
        modelo: "105",
        caracteristicas: "SPORT AZUL",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: ["DEPORTE"]
    },

    {
        marca: "C-MARK",
        modelo: "105",
        caracteristicas: "SPORT ROJO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: ["DEPORTE"]
    },

    {
        marca: "C-MARK",
        modelo: "105",
        caracteristicas: "SPORT BLANCO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: ["DEPORTE"]
    },

    {
        marca: "C-MARK",
        modelo: "1",
        caracteristicas: "INDUSTRIAL TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: ["INDUSTRIAL"]
    },

    {
        marca: "AIDEFU",
        modelo: "9014",
        caracteristicas: "INDUSTRIAL TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: ["INDUSTRIAL"]
    },

    {
        marca: "AIDEFU",
        modelo: "87",
        caracteristicas: "INDUSTRIAL AZUL",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: ["INDUSTRIAL"]
    },

    {
        marca: "AIDEFU",
        modelo: "",
        caracteristicas: "INDUSTRIAL TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: ["INDUSTRIAL"]
    },

    {
        marca: "AIDEFU",
        modelo: "",
        caracteristicas: "INDUSTRIAL AMARILLO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: ["INDUSTRIAL"]
    },

    {
        marca: "FIORALBA",
        modelo: "8891",
        caracteristicas: "ACETATO GRIS CON VERDE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "LOTUS",
        modelo: "7006",
        caracteristicas: "ACETATO CAFÉ CON NARANJA",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CIELO",
        modelo: "10005-1",
        caracteristicas: "ACETATO CAFÉ CON NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "LATIV",
        modelo: "2334",
        caracteristicas: "METÁLICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "RIVALTO",
        modelo: "65",
        caracteristicas: "METALICO PLATEADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "VINCENT",
        modelo: "5034",
        caracteristicas: "METÁLICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SORAYA",
        modelo: "1013",
        caracteristicas: "RANURADO METALICO PLATA",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "138",
        caracteristicas: "RANURADO METALICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "MARINA",
        modelo: "23007",
        caracteristicas: "DOBLE PUENTE METÁLICO PLATEADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SIN MARCA",
        modelo: "81186",
        caracteristicas: "AVIADOR PASTA TRANSPARENTE CON GRIS",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "138",
        caracteristicas: "DOBLE PUENTE METÁLICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "140",
        caracteristicas: "DOBLE PUENTE METÁLICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "BRIGTH VISION",
        modelo: "145",
        caracteristicas: "DOBLE PUENTE METÁLICO GRIS",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ELLIS",
        modelo: "1009",
        caracteristicas: "AVIADOR DOBLE PUENTE METÁLICO NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "141",
        caracteristicas: "PASTA NEGRO CON TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "BRIGTH VISION",
        modelo: "88",
        caracteristicas: "PASTA AZUL CON MIEL",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "2800",
        caracteristicas: "PASTA GRIS TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "OLIVE PEOPLE",
        modelo: "7",
        caracteristicas: "PASTA NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [  
                "imagenes/OLIVE PEOPLE1.png",
                "imagenes/OLIVE PEOPLE.png"
],
        categorias: ["HOMBRE"]
    },
    {
    marca: "CAFFSEN",
    modelo: "SIN MODELO",
    caracteristicas: "PASTA TRANSPARENTE CON NEGRO",
    cantidad: 1,
    precio: null,
    imagenes: [
        "imagenes/CAFFSEN TRANSPARENTE NEGRO.png"
    ],
    categorias: []
},
    {
    marca: "CAFFSEN",
    modelo: "C2807",
    caracteristicas: "PASTA NEGRO",
    cantidad: 1,
    precio: null,
    imagenes: [
        "imagenes/CAFFSEN C2807.png"
    ],
    categorias: ["HOMBRE", "MUJER"]
},
{
    marca: "LATIV",
    modelo: "SIN MODELO",
    caracteristicas: "PASTA NEGRO",
    cantidad: 1,
    precio: null,
    imagenes: [
        "imagenes/LATIV NEGRO.png"
    ],
    categorias: []
},
{
    marca: "SIN MARCA",
    modelo: "SIN MODELO",
    caracteristicas: "PASTA AZUL MARINO",
    cantidad: 1,
    precio: null,
    imagenes: [
        "imagenes/SIN MARCA AZUL.png"
    ],
    categorias: ["MUJER","HOMBRE"]
},
    {
        marca: "UNIK",
        modelo: "1013",
        caracteristicas: "TRES PIEZAS DORADO CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "TEKOO",
        modelo: "8902",
        caracteristicas: "TRES PIEZAS METÁLICO NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "WHARTON",
        modelo: "7009",
        caracteristicas: "METÁLICO PLATA",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "LATIV",
        modelo: "4045",
        caracteristicas: "PASTA NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },
{
    marca: "CAFFSEN",
    modelo: "8082",
    caracteristicas: "PASTA TRANSPARENTE",
    cantidad: 1,
    precio: null,
    imagenes: [
        "imagenes/CAFFSEN 8082.png"
    ],
    categorias: []
},
    {
        marca: "CAFFSEN",
        modelo: "6925",
        caracteristicas: "HUMO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "HONOR MOMENT",
        modelo: "2247",
        caracteristicas: "METÁLICO PLATA CON AZUL",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ELEGANCIA",
        modelo: "5063",
        caracteristicas: "METÁLICO CAFE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "RIVALTO",
        modelo: "77",
        caracteristicas: "METÁLICO CAFÉ",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CACTUS",
        modelo: "101",
        caracteristicas: "METÁLICO PÚRPURA",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SORAYA",
        modelo: "8043",
        caracteristicas: "RANURADO METALICO NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "810",
        caracteristicas: "METÁLICO GRIS",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "VELOCITY VISTA",
        modelo: "219",
        caracteristicas: "METÁLICO NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ROYALTY",
        modelo: "6020",
        caracteristicas: "DOBLE PUENTE METÁLICO AZUL",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ROYALTY",
        modelo: "6020",
        caracteristicas: "DOBLE PUENTE METÁLICO PLATA CON NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "856",
        caracteristicas: "DOBLE PUENTE METÁLICO NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "WHARTON",
        modelo: "9067",
        caracteristicas: "METÁLICO PLATEADO CON AZUL",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "LORENTINO",
        modelo: "2302",
        caracteristicas: "AVIADOR METÁLICO VERDE AQUA",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "C-MARK",
        modelo: "8430",
        caracteristicas: "PASTA GRIS METALICO PLATA",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "LOTUS",
        modelo: "7005",
        caracteristicas: "ACETATO TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "LATIV",
        modelo: "4052",
        caracteristicas: "PASTA NEGRO TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SIN MARCA",
        modelo: "62014",
        caracteristicas: "PASTA VERDE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "8062",
        caracteristicas: "PASTA VERDE TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "8048",
        caracteristicas: "PASTA GRIS TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CACTUS",
        modelo: "105",
        caracteristicas: "PASTA AZUL TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "C-MARK",
        modelo: "1617",
        caracteristicas: "PASTA CAFÉ TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },
    {
        marca: "CAFFSEN",
        modelo: "915",
        caracteristicas: "RANURADO METÁLICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "HUMARS",
        modelo: "8002",
        caracteristicas: "METÁLICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "PRIETO",
        modelo: "151012",
        caracteristicas: "RANURADO METÁLICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "WHARTON",
        modelo: "7038",
        caracteristicas: "METÁLICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SIN MARCA",
        modelo: "5204",
        caracteristicas: "METÁLICO DORADO CON CAFE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "PRETTY GIRL",
        modelo: "3024",
        caracteristicas: "METÁLICO DORADO CON ROJO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "KIND",
        modelo: "31487",
        caracteristicas: "RANURADO METÁLICO DORADO CON MORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "MOSSON",
        modelo: "1107",
        caracteristicas: "METÁLICO ROSA",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SIN MARCA",
        modelo: "81102",
        caracteristicas: "METÁLICO DORADO CON MORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "GEMMA",
        modelo: "41",
        caracteristicas: "TRES PIEZAS METÁLICO ROSA",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "LOTUS",
        modelo: "11",
        caracteristicas: "TRES PIEZAS METÁLICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "LOTUS",
        modelo: "9",
        caracteristicas: "TRES PIEZAS METÁLICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "NOVICA",
        modelo: "1104",
        caracteristicas: "METÁLICO CORAZÓN VINO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "NOVICA",
        modelo: "1106",
        caracteristicas: "METÁLICO CORAZÓN ROSA",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "NOVICA",
        modelo: "1105",
        caracteristicas: "METÁLICO CORAZÓN VERDE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFDY",
        modelo: "842",
        caracteristicas: "PASTA TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "VITTORIO PEOPLE",
        modelo: "21010",
        caracteristicas: "PASTA BLANCO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "HUMARS",
        modelo: "29011",
        caracteristicas: "METÁLICO DORADO CON VERDE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "HUMARS",
        modelo: "29011",
        caracteristicas: "METÁLICO DORADO CON ROJO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "FUNKYFRED",
        modelo: "114",
        caracteristicas: "METÁLICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "2839",
        caracteristicas: "PASTA MELÓN",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
    marca: "FASHION",
    modelo: "12",
    caracteristicas: "PASTA MELON CON TRANSPARENTE",
    cantidad: 1,
    precio: null,
    imagenes: [
        "imagenes/FASHION 12.png"
    ],
    categorias: ["MUJER"]
},

    {
        marca: "CAFFSEN",
        modelo: "9042",
        caracteristicas: "PASTA MELÓN",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "MOSSON",
        modelo: "2433",
        caracteristicas: "DOBLE PUENTE PASTA BEIGE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "HONOR MOMENTO",
        modelo: "2021",
        caracteristicas: "DOBLE PUENTE METÁLICO DORADO BEIGE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SIN MARCA",
        modelo: "---",
        caracteristicas: "PASTA BEIGE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SIN MARCA",
        modelo: "96037",
        caracteristicas: "PASTA TRANSPARENTE GRIS",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SIN MARCA",
        modelo: "---",
        caracteristicas: "RANURADO CA",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
    marca: "LADY LUCK EYEWEAR",
    modelo: "ML 6046",
    caracteristicas: "ACETATO GRIS TRANSPARENTE",
    cantidad: 1,
    precio: null,
    imagenes: [
        "imagenes/LADY6046.png",
        "imagenes/LADY LUCK ML 6046.png",
        "imagenes/LadyLock.png"
    ],
    categorias: ["MUJER"]
},
{
    marca: "FIORALEA",
    modelo: "9060",
    caracteristicas: "TR90 NEGRO DORADO",
    cantidad: 1,
    precio: null,
    imagenes: [
        "imagenes/FIORALEA 9060.png",
         "imagenes/FIORALEA 9060-2.png",
         "imagenes/FIORALEA9060.png"
    ],
    categorias: ["HOMBRE"]
},

    {
        marca: "LADY LUCK",
        modelo: "6079",
        caracteristicas: "PASTA CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "FIORALBA",
        modelo: "9053",
        caracteristicas: "METÁLICO DORADO CON PASTA CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SIN MARCA",
        modelo: "95971",
        caracteristicas: "METÁLICO DORADO CON CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "LATIV",
        modelo: "5098",
        caracteristicas: "PASTA CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ROYALTY",
        modelo: "581079",
        caracteristicas: "PASTA CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "THE LORD BLACK",
        modelo: "2009",
        caracteristicas: "PASTA AMBAR",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "15",
        caracteristicas: "PASTA CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "LATIV",
        modelo: "5078",
        caracteristicas: "PASTA CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ROYALTY",
        modelo: "2821",
        caracteristicas: "PASTA CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "2817",
        caracteristicas: "PASTA CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFDY",
        modelo: "4123",
        caracteristicas: "PASTA NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "LADY LUCK",
        modelo: "6030",
        caracteristicas: "PASTA NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "1803",
        caracteristicas: "PASTA NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "HAND MADE",
        modelo: "6040",
        caracteristicas: "PASTA GRIS",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },
    {
    marca: "CACTUS EYEWEAR",
    modelo: "TR101",
    caracteristicas: "METÁLICO PÚRPURA",
    cantidad: 1,
    precio: null,
    imagenes: [
       
    ],
    categorias: []
},
{
    marca: "CISNE BLANCO",
    modelo: "81596",
    caracteristicas: "PASTA NEGRO",
    cantidad: 1,
    precio: null,
    imagenes: [
        "imagenes/CISNE BLANCO 81596.png",
        "imagenes/CISNE BLANCO2 81596.png"
    ],
    categorias: ["MUJER"]
},
   {
    marca: "CACTUS EYEWEAR",
    modelo: "101",
    caracteristicas: "PASTA CAFE",
    cantidad: 1,
    precio: null,
    imagenes: [
        "imagenes/TR101.png",
        "imagenes/TR101 CAFE.png"
    ],
    categorias: ["MUJER"]
},

{
    marca: "CACTUS EYEWEAR",
    modelo: "101",
    caracteristicas: "PASTA GRIS TRANSPARENTE",
    cantidad: 1,
    precio: null,
    imagenes: [
        "imagenes/TR101 GRIS.png"
    ],
    categorias: []
},
{
    marca: "FIORALBA",
    modelo: "ZOZA",
    caracteristicas: "PASTA NEGRO / METALICO DORADO",
    cantidad: 1,
    precio: null,
    imagenes: [
        "imagenes/ZOZA NEGRO.png",
        "imagenes/ZOZA NEGRO2.png"
    ],
    categorias: []
},
    {
        marca: "CACTUS",
        modelo: "143",
        caracteristicas: "PASTA NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFDY",
        modelo: "842",
        caracteristicas: "PASTA NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "KIND",
        modelo: "8958",
        caracteristicas: "METÁLICO DORADO CON NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "LATIV",
        modelo: "145",
        caracteristicas: "PASTA NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "2840",
        caracteristicas: "PASTA NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "VISUAL",
        modelo: "84011",
        caracteristicas: "PASTA NEGRO CON TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "2840",
        caracteristicas: "PASTA NEGRO CON TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ROSSELO",
    modelo: "2372",
    caracteristicas: "PASTA NEGRO",
    cantidad: 1,
    precio: null,
    imagenes: [
        "imagenes/ROSSELO2372.png"
    ],
    categorias: ["MUJER"]
    },

    {
    marca: "FASHION",
    modelo: "4",
    caracteristicas: "PASTA NEGRO",
    cantidad: 1,
    precio: null,
    imagenes: [
        "imagenes/FASHION4.png"
    ],
    categorias: ["MUJER"]
},

    {
        marca: "CAFFSEN",
        modelo: "9833",
        caracteristicas: "PASTA NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [
    "imagenes/CAFFSEN 9833.png"
],
        categorias: ["MUJER"]
    },

    {
        marca: "FUNKYFRED",
        modelo: "3112",
        caracteristicas: "PASTA ROSA TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
    marca: "VITTORIO PEOPLE",
    modelo: "21005",
    caracteristicas: "PASTA ROSA",
    cantidad: 1,
    precio: null,
    imagenes: [
        "imagenes/VITTORIO PEOPLE 21005.png"
    ],
    categorias: ["MUJER"]
},

    {
        marca: "TITO PLUS",
        modelo: "206",
        caracteristicas: "PASTA ROSA TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "DOTTI",
        modelo: "110",
        caracteristicas: "PASTA ROSA TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "KAROLINA",
        modelo: "506",
        caracteristicas: "PASTA ROSA",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "LATIV",
        modelo: "15",
        caracteristicas: "PASTA ROJO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "1606",
        caracteristicas: "PASTA ROJO CON TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "9116",
        caracteristicas: "PASTA TRANSPARENTE CON ROJO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "BEST",
        modelo: "5",
        caracteristicas: "PASTA AZUL TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ROYALTY",
        modelo: "85012",
        caracteristicas: "PASTA AZUL CON METÁLICO PLATA",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "9833",
        caracteristicas: "PASTA AZUL CON TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "C-MARK",
        modelo: "8455",
        caracteristicas: "PASTA TRANSPARENTE CON CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "HUMARS",
        modelo: "8386",
        caracteristicas: "PASTA TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "TITO PLUS",
        modelo: "206",
        caracteristicas: "PASTA TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "7005",
        caracteristicas: "PASTA TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },
        {
        marca: "TOP MODA",
        modelo: "473417130",
        caracteristicas: "PASTA AZUL CON FIGURAS",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "TOP MODA",
        modelo: "462414130",
        caracteristicas: "ACETATO ROSA",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "PLEX VISION",
        modelo: "3304",
        caracteristicas: "ACETATO AZUL CON MORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "FLORENTINA KIDS",
        modelo: "8904",
        caracteristicas: "PASTA BLANCO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: ["NIÑOS"]
    },

    {
        marca: "COOA",
        modelo: "12",
        caracteristicas: "PASTA AMARILLO CON VERDE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN 1839",
        modelo: "1839",
        caracteristicas: "PASTA AMARILLO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "PLEX VISION",
        modelo: "3304",
        caracteristicas: "ACETATO ROSA CON NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SIN MARCA",
        modelo: "81633",
        caracteristicas: "C_S PASTA GRIS",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SIN MARCA",
        modelo: "7101",
        caracteristicas: "METÁLICO NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SIN MARCA",
        modelo: "2216120",
        caracteristicas: "DOBLE PUENTE METÁLICO DORADO Y AZUL",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "GB",
        modelo: "2273053",
        caracteristicas: "RANURADO GRIS",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "GB",
        modelo: "2273053",
        caracteristicas: "RANURADO AZUL",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "GB",
        modelo: "6607",
        caracteristicas: "DOBLE PUENTE METÁLICO PLATEADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SIN MARCA",
        modelo: "97780",
        caracteristicas: "C_S METÁLICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SOLOMAX",
        modelo: "145",
        caracteristicas: "METÁLICO ROSA CON DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SIN MARCA",
        modelo: "5608",
        caracteristicas: "PASTA GRIS TRANSPARENTE CON METÁLICO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CISNE BLANCO",
        modelo: "81596",
        caracteristicas: "PASTA TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CISNE BLANCO",
        modelo: "229",
        caracteristicas: "PASTA AZUL CON ROJO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ZOZA",
        modelo: "8552",
        caracteristicas: "PASTA TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "MIZUMI",
        modelo: "8513",
        caracteristicas: "PASTA AZUL",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "MARINA",
        modelo: "3114",
        caracteristicas: "PASTA MORADA BRILLOSA",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "FOFO",
        modelo: "6751",
        caracteristicas: "PASTA AQUA CON GRIS BRILLOSO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SIN MARCA",
        modelo: "81596",
        caracteristicas: "PASTA NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SIN MARCA",
        modelo: "93515",
        caracteristicas: "PASTA TRANSPARENTE CON METÁLICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SIN MARCA",
        modelo: "220182262",
        caracteristicas: "PASTA NEGRO CON BRILLOS",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "GB",
        modelo: "2273136",
        caracteristicas: "METÁLICO DORADO CON CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "OLIVE PEOPLE",
        modelo: "9",
        caracteristicas: "METÁLICO NEGRO CON VINO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "MARINA",
        modelo: "3108",
        caracteristicas: "PASTA NEGRO CON METÁLICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "MARINA",
        modelo: "2403",
        caracteristicas: "METÁLICO DORADO CON VERDE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ZTOLO",
        modelo: "1023",
        caracteristicas: "METÁLICO DORADO CON NEGRO CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ZTOLO",
        modelo: "5029",
        caracteristicas: "METÁLICO DORADO CON CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ZOZA",
        modelo: "2350",
        caracteristicas: "PASTA NEGRO CON METÁLICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "PINKY PROMISE",
        modelo: "102",
        caracteristicas: "METÁLICO DORADO CON VERDE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SIN MARCA",
        modelo: "91019",
        caracteristicas: "METÁLICO DORADO CON MELÓN Y TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "GB",
        modelo: "2273098",
        caracteristicas: "METÁLICO NEGRO CON CAREY AZUL",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ZTOLO",
        modelo: "5034",
        caracteristicas: "METÁLICO ROSA CON CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "FIORALBA",
        modelo: "89005",
        caracteristicas: "TRES PIEZAS METÁLICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "FIORALBA",
        modelo: "89008",
        caracteristicas: "TRES PIEZAS METÁLICO DORADO CON CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "FIORALBA",
        modelo: "89008",
        caracteristicas: "TRES PIEZAS METÁLICO DORADO CON ROJO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "FIORALBA",
        modelo: "89004",
        caracteristicas: "TRES PIEZAS METÁLICO DORADO CON CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "GH",
        modelo: "2273098",
        caracteristicas: "METÁLICO DORADO CON CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "MARINA",
        modelo: "86102",
        caracteristicas: "PASTA CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "PINKY",
        modelo: "202",
        caracteristicas: "METALICO NEGRO CON ROJO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ZOZA",
        modelo: "8563",
        caracteristicas: "PASTA VERDE OLIVO CAREY CON CAFE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "FUNKY FRED",
        modelo: "4001",
        caracteristicas: "METALICO CAFE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ZOZA",
        modelo: "8573",
        caracteristicas: "PASTA GRIS CON AZUL",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SM",
        modelo: "7117",
        caracteristicas: "PASTA ROSA CON TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "OLIVE PEOPLE",
        modelo: "P006",
        caracteristicas: "METALICO PLATA CON AZUL C_S",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "PRINCE NOBLE",
        modelo: "2205",
        caracteristicas: "METELICO PLATA C_S",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "FUNKY FRED",
        modelo: "3017",
        caracteristicas: "METALICO DORADP CON VERDE C_S",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "PRINCE NOBLE",
        modelo: "1702",
        caracteristicas: "METALICO PLATA CON NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CB",
        modelo: "2260107",
        caracteristicas: "PASTA NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CB",
        modelo: "2273080",
        caracteristicas: "METALICO PLATA DOBLE PUENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SM",
        modelo: "--------",
        caracteristicas: "RANURADO METALICO DORADOO CON NARANJA Y NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "PS",
        modelo: "7109",
        caracteristicas: "METALICO NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ZTOLO",
        modelo: "8510",
        caracteristicas: "MATALICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CB",
        modelo: "2273136",
        caracteristicas: "MATALICO DORADO CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },
        {
        marca: "PINKY",
        modelo: "202",
        caracteristicas: "METALICO NEGRO CON ROJO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ZOZA",
        modelo: "8563",
        caracteristicas: "PASTA VERDE OLIVO CAREY CON CAFE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "FUNKY FRED",
        modelo: "4001",
        caracteristicas: "METALICO CAFE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CB",
        modelo: "2260111",
        caracteristicas: "ACETATO NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ZOZA",
        modelo: "8573",
        caracteristicas: "PASTA GRIS CON AZUL",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SM",
        modelo: "7117",
        caracteristicas: "PASTA ROSA CON TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "OLIVE PEOPLE",
        modelo: "P006",
        caracteristicas: "METALICO PLATA CON AZUL C_S",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "PRINCE NOBLE",
        modelo: "2205",
        caracteristicas: "METELICO PLATA C_S",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "FUNKY FRED",
        modelo: "3017",
        caracteristicas: "METALICO DORADP CON VERDE C_S",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "PRINCE NOBLE",
        modelo: "1702",
        caracteristicas: "METALICO PLATA CON NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CB",
        modelo: "2273080",
        caracteristicas: "METALICO DOBLE PUENTE GRIS",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CB",
        modelo: "2260107",
        caracteristicas: "PASTA NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CB",
        modelo: "2273080",
        caracteristicas: "METALICO PLATA DOBLE PUENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SM",
        modelo: "--------",
        caracteristicas: "RANURADO METALICO DORADOO CON NARANJA Y NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "PS",
        modelo: "7109",
        caracteristicas: "METALICO NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ZTOLO",
        modelo: "8510",
        caracteristicas: "MATALICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CB",
        modelo: "2273136",
        caracteristicas: "MATALICO DORADO CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "WHARTON",
        modelo: "9022",
        caracteristicas: "PASTA NEGRO CON METALICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "PRETTY GIRL",
        modelo: "9025",
        caracteristicas: "METALICO DORADO CON AZUL",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SM",
        modelo: "2001",
        caracteristicas: "PASTA TRANSPARENTE NARANJA",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SM",
        modelo: "HS27012",
        caracteristicas: "PASTA NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "C-MARK",
        modelo: "107",
        caracteristicas: "PASTA NEGRO CON METÁLICO NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "C-MARK",
        modelo: "109",
        caracteristicas: "ACETATO NEGRO CON META NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SM",
        modelo: "5606",
        caracteristicas: "PASTA NEGRO CON METÁLICO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CB",
        modelo: "2260107",
        caracteristicas: "PASTA NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SM",
        modelo: "7109",
        caracteristicas: "PASTA NEGRO METÁLICO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "902",
        caracteristicas: "RANURADO METÁLICO AZUL",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SM",
        modelo: "8022",
        caracteristicas: "METÁLICO CAFE RANURADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SM",
        modelo: "8022",
        caracteristicas: "METÁLICO DORADO RANURADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "902",
        caracteristicas: "RANURADO METÁLICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "GEMMA",
        modelo: "119",
        caracteristicas: "PASTA CAFE CUADRADO CIRCULAR",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "GEMMA",
        modelo: "119",
        caracteristicas: "PASTA NEGRO CUADRADO CIRCULAR",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "GEMMA",
        modelo: "119",
        caracteristicas: "PASTA TRANSPARENTE CUADRADO CIRCULAR",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SOLOMAX",
        modelo: "4",
        caracteristicas: "METÁLICO NEGRO CON DORADO MARIPOSAS",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "QKI",
        modelo: "6",
        caracteristicas: "METÁLICO DORADO CON CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ANNIE",
        modelo: "9307",
        caracteristicas: "PASTA MORADO TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "2853",
        caracteristicas: "PASTA ROSA TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
    marca: "INUSUAL",
    modelo: "403",
    caracteristicas: "PASTA NEGRO",
    cantidad: 1,
    precio: null,
    imagenes: [
        "imagenes/INUSUAL 403.png"
    ],
    categorias: ["MUJER"]
},

    {
        marca: "LATIV",
        modelo: "23",
        caracteristicas: "PASTA NEGRO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "DILO",
        modelo: "89012",
        caracteristicas: "METALICO GRIS",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ALECO",
        modelo: "5617",
        caracteristicas: "DOBLE PUENTE AVIADOR METALICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "CAFFSEN",
        modelo: "3026",
        caracteristicas: "DOBLE PUENTE AVIADOR METALICO DORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "NOVICA",
        modelo: "1104",
        caracteristicas: "METALICO CORAZON MORADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "ANTONIO MIRO",
        modelo: "5516145",
        caracteristicas: "PASTA AZUL DEGRADADO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "FOFO",
        modelo: "53129",
        caracteristicas: "PASTA ROSA TRANSPARENTE",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "YG",
        modelo: "78157",
        caracteristicas: "PASTA CAFE CHARM GATITO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SOLAMAX",
        modelo: "1",
        caracteristicas: "METÁLICO DORADO CORAZONES COLGANTES",
        cantidad: 2,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "FOFO",
        modelo: "9622",
        caracteristicas: "PASTA TRANSPARENTE CON CAREY",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SOLAMAX",
        modelo: "1",
        caracteristicas: "METÁLICO PLATA CORAZONES COLGANTES",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "YG",
        modelo: "78152",
        caracteristicas: "PASTA NEGRO CHARM MOÑO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "SOLAMAX",
        modelo: "1",
        caracteristicas: "METÁLICO ROSA FOSFORESCENTE CORAZONES COLGANTES",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    },

    {
        marca: "FOFO",
        modelo: "53090",
        caracteristicas: "PASTA ROJO",
        cantidad: 1,
        precio: null,
        imagenes: [],
        categorias: []
    }

];


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
                variantes: []
            };

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

botonAbrirFiltros.addEventListener(
    "click",
    () => {

        panelFiltros.classList.add("activo");

    }
);


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
botonAbrirFiltrosCatalogo.addEventListener(
    "click",
    () => {

        panelFiltros.classList.add("activo");

    }
);
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

mostrarProductos(productos);