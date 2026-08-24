import type { Article } from "./types";

import featuredJapon from "@/assets/featured-japon.jpg";
import japon from "@/assets/dest-japon.jpg";
import italia from "@/assets/dest-italia.jpg";
import portugal from "@/assets/dest-portugal.jpg";
import islandia from "@/assets/dest-islandia.jpg";
import espana from "@/assets/art-espana.jpg";
import marruecos from "@/assets/dest-marruecos.jpg";
import gastronomia from "@/assets/cat-gastronomia.jpg";
import roadtrip from "@/assets/cat-roadtrip.jpg";

export const articles: Article[] = [
  {
    slug: "7-dias-en-japon",
    title: "7 días en Japón: la ruta perfecta para un primer viaje",
    subtitle:
      "Tokio, Hakone y Kioto en una semana, sin correr y sin dejarse lo esencial.",
    excerpt:
      "Una semana es poco para Japón, pero suficiente para entenderlo. Esta es la ruta que recomendamos a quien viaja por primera vez: tres bases, trenes cómodos y tiempo para caminar sin plan.",
    category: "guias",
    categoryLabel: "Guía",
    destinationSlug: "japon",
    image: featuredJapon,
    author: "Marta Ferrer",
    date: "2026-07-28",
    readingMinutes: 12,
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "Hay viajes que se planifican y viajes que se ensayan mentalmente durante años. Japón suele ser del segundo tipo. Cuando por fin se compra el billete, aparece la misma duda: siete días, ¿son suficientes? La respuesta corta es que no, nunca lo son. La respuesta larga es que una semana bien organizada permite entender el país lo bastante como para querer volver, que al final es de lo que se trata.",
      },
      {
        type: "paragraph",
        text: "Esta ruta se apoya en tres bases y en el tren. Nada de maletas rodando cada mañana ni de madrugones para llegar a un templo antes que nadie. Japón se disfruta mejor cuando se deja espacio a lo que no estaba previsto: una calle lateral, un restaurante de seis asientos, una tienda de papel abierta desde 1912.",
      },
      { type: "heading", text: "Días 1 a 3 · Tokio" },
      {
        type: "paragraph",
        text: "Tokio no es una ciudad, es una suma de ciudades pegadas. Intentar verla entera en tres días es un error garantizado, así que conviene elegir tres o cuatro barrios y recorrerlos a fondo. Shibuya y Shinjuku para el Tokio que uno ya ha visto en fotos; Yanaka y Kagurazaka para el que no. Entre medias, un mercado, un jardín y un baño público.",
      },
      {
        type: "list",
        items: [
          "Mañana del primer día: jardín Hamarikyu y desayuno en Tsukiji Outer Market.",
          "Tarde: paseo por Yanaka, cementerio incluido, hasta el atardecer en Nezu.",
          "Segundo día: Meiji Jingu, Omotesando y las callejuelas de Shimokitazawa.",
          "Tercer día: excursión a Kamakura o mañana lenta en Kiyosumi Shirakawa.",
        ],
      },
      {
        type: "note",
        text: "Compra una tarjeta Suica nada más aterrizar: sirve para metro, trenes urbanos, máquinas expendedoras y la mayoría de konbini.",
      },
      { type: "heading", text: "Día 4 · Hakone y el Fuji" },
      {
        type: "paragraph",
        text: "Un día entero de transición entre Tokio y Kioto que además funciona como descanso. Hakone se recorre con un pase circular que combina tren de montaña, funicular, teleférico y barco. Si el cielo acompaña, el Fuji aparece detrás del lago Ashi durante unos minutos y desaparece otra vez. Dormir en un ryokan con onsen privado es, probablemente, el mejor dinero que se gasta en todo el viaje.",
      },
      {
        type: "quote",
        text: "En Japón, el trayecto rara vez es tiempo perdido: es parte del paisaje.",
      },
      { type: "heading", text: "Días 5 a 7 · Kioto y alrededores" },
      {
        type: "paragraph",
        text: "Kioto concentra más de mil templos, y ese es exactamente su problema. La estrategia que mejor funciona es elegir una zona por día y recorrerla a pie: el este con Kiyomizu-dera y Gion, el noroeste con Kinkaku-ji y Ryoan-ji, y el sur con Fushimi Inari muy temprano. Deja la última tarde libre para el mercado de Nishiki y una cena sin reserva.",
      },
      {
        type: "paragraph",
        text: "Si sobra medio día, Nara está a cuarenta minutos en tren y su parque, con los ciervos y el Todai-ji, sigue siendo una de las mejores excursiones cortas del país. Otra opción menos transitada es Uji, la ciudad del té matcha, con templos junto al río y casas de té donde se aprende a preparar lo que después se echa de menos en casa.",
      },
      { type: "heading", text: "Presupuesto orientativo" },
      {
        type: "list",
        items: [
          "Vuelos desde España: 700–950 € ida y vuelta según temporada.",
          "Alojamiento: 90–140 € por noche en hoteles bien situados.",
          "Transporte interno: 120 € aproximados para esta ruta sin JR Pass.",
          "Comida: 35–50 € al día comiendo bien y sin restaurantes de lujo.",
        ],
      },
      {
        type: "paragraph",
        text: "Con todo incluido, una semana en Japón para dos personas sale entre 2.600 y 3.400 €. No es un destino barato, pero sí uno de los que mejor devuelven cada euro gastado: transporte impecable, seguridad total y una relación calidad-precio en la comida que sigue siendo difícil de igualar.",
      },
    ],
  },
  {
    slug: "ruta-costa-amalfitana",
    title: "La ruta definitiva por la Costa Amalfitana",
    subtitle: "Cinco días entre Positano, Amalfi y Ravello, con las paradas que sí merecen la pena.",
    excerpt:
      "La carretera más fotografiada de Italia se puede recorrer sin colas si se sabe cuándo moverse. Esta es nuestra ruta de cinco días, con base fija y transporte en barco.",
    category: "road-trips",
    categoryLabel: "Road trips",
    destinationSlug: "italia",
    image: italia,
    author: "Álvaro Sanz",
    date: "2026-07-14",
    readingMinutes: 9,
    body: [
      {
        type: "paragraph",
        text: "La Costa Amalfitana tiene un problema evidente: cabe muy poca gente en muy poco espacio, y en agosto lo intenta todo el mundo a la vez. La buena noticia es que basta con cambiar el mes y el medio de transporte para que el viaje sea otro.",
      },
      { type: "heading", text: "Elige una base y quédate" },
      {
        type: "paragraph",
        text: "Cambiar de hotel cada noche en esta costa es perder horas en curvas. Nosotros recomendamos Praiano o Minori: están en el centro geográfico, tienen precios más razonables y buenas conexiones en ferry con Positano y Amalfi.",
      },
      {
        type: "list",
        items: [
          "Día 1: llegada y atardecer en la playa de Marina di Praia.",
          "Día 2: Positano temprano y baño en Fornillo antes de comer.",
          "Día 3: Sendero de los Dioses de Bomerano a Nocelle.",
          "Día 4: Amalfi, Atrani y tarde en los jardines de Villa Cimbrone, Ravello.",
          "Día 5: barco a Capri o mañana lenta en el mercado de Minori.",
        ],
      },
      {
        type: "note",
        text: "El ferry entre pueblos cuesta poco más que el autobús y evita las dos horas de atasco de la SS163 en temporada alta.",
      },
      {
        type: "paragraph",
        text: "Si viajas en coche, comprueba el aparcamiento del alojamiento antes de reservar: en muchos pueblos no existe alternativa pública y los parkings privados superan los 30 € diarios. En mayo y en octubre, la costa recupera su ritmo y se puede comer sin reserva casi en cualquier sitio.",
      },
    ],
  },
  {
    slug: "que-ver-en-lisboa-en-3-dias",
    title: "Qué ver en Lisboa en 3 días",
    subtitle: "Un itinerario por barrios, con miradores, pastelerías y un día para Sintra.",
    excerpt:
      "Tres días dan para conocer Lisboa sin agobios si se organiza por barrios y se acepta una regla: subir cuestas forma parte del plan.",
    category: "ciudades",
    categoryLabel: "Ciudades",
    destinationSlug: "portugal",
    image: portugal,
    author: "Marta Ferrer",
    date: "2026-06-30",
    readingMinutes: 8,
    body: [
      {
        type: "paragraph",
        text: "Lisboa se ha convertido en una de las ciudades más visitadas de Europa y, aun así, sigue teniendo barrios donde la vida transcurre igual que hace veinte años. La clave está en alternar: una mañana de imprescindibles y una tarde sin plan.",
      },
      { type: "heading", text: "Día 1 · Baixa, Chiado y Bairro Alto" },
      {
        type: "paragraph",
        text: "Empieza en la Praça do Comércio y sube hasta el Chiado sin usar el elevador de Santa Justa, que rara vez compensa la cola. Come en el Mercado da Ribeira solo si vas fuera de hora; si no, cualquier tasca de la Rua dos Correeiros funciona mejor.",
      },
      { type: "heading", text: "Día 2 · Alfama y Graça" },
      {
        type: "paragraph",
        text: "El barrio antiguo se recorre sin mapa. Sube en el tranvía 28 desde Martim Moniz a primera hora y baja caminando entre callejones hasta el Panteón. Termina en el Miradouro da Senhora do Monte, el más alto y el menos concurrido.",
      },
      { type: "heading", text: "Día 3 · Belém o Sintra" },
      {
        type: "paragraph",
        text: "Si es tu primera vez, Sintra gana. Reserva la entrada a la Quinta da Regaleira con antelación, evita el Palacio da Pena a mediodía y vuelve a Lisboa a tiempo para cenar en Campo de Ourique, un barrio residencial donde todavía se come a precio local.",
      },
    ],
  },
  {
    slug: "lugares-de-espana-que-parecen-otro-continente",
    title: "10 lugares de España que parecen de otro continente",
    subtitle: "Desiertos, fiordos y selvas dentro de nuestras fronteras.",
    excerpt:
      "No hace falta cruzar un océano para cambiar de paisaje. Diez rincones de España que podrían estar en Islandia, Marruecos o Nueva Zelanda.",
    category: "inspiracion",
    categoryLabel: "Inspiración",
    destinationSlug: "espana",
    image: espana,
    author: "Nuria Blanco",
    date: "2026-06-18",
    readingMinutes: 7,
    body: [
      {
        type: "paragraph",
        text: "Cada cierto tiempo conviene recordar que España es uno de los países geográficamente más variados de Europa. Esta lista no busca los lugares más bonitos, sino los más inesperados: sitios donde uno tarda unos segundos en ubicar dónde está.",
      },
      {
        type: "list",
        items: [
          "Bardenas Reales, Navarra: badlands que recuerdan al suroeste americano.",
          "Playa de las Catedrales, Lugo: arcos de piedra solo visibles con marea baja.",
          "Las Médulas, León: una mina romana convertida en paisaje rojo.",
          "Cañón del Sil, Ourense: viñedos verticales sobre un río encajado.",
          "Timanfaya, Lanzarote: campos de lava aún calientes bajo la superficie.",
          "Bosque de Muniellos, Asturias: el mayor robledal de Europa, con acceso limitado.",
          "Desierto de Tabernas, Almería: el único desierto de Europa continental.",
          "Somiedo, Asturias: lagos glaciares y cabañas de teito.",
          "Rincón de Ademuz, Valencia: relieves de arcilla en un enclave aislado.",
          "Ordesa en otoño, Huesca: hayedos y cascadas a la altura de cualquier parque nacional.",
        ],
      },
      {
        type: "paragraph",
        text: "Casi todos se pueden visitar en una escapada de fin de semana desde una ciudad grande, y varios permiten combinarse entre sí en un road trip de cinco o seis días.",
      },
    ],
  },
  {
    slug: "islandia-en-camper",
    title: "Islandia en camper: todo lo que necesitas saber",
    subtitle: "Presupuesto real, normas de aparcamiento y la verdad sobre el clima.",
    excerpt:
      "Recorrer la Ring Road en camper es la forma más libre de ver Islandia, pero también la que más letra pequeña tiene. Esto es lo que aprendimos en diez días.",
    category: "consejos",
    categoryLabel: "Consejos",
    destinationSlug: "islandia",
    image: islandia,
    author: "Álvaro Sanz",
    date: "2026-05-22",
    readingMinutes: 11,
    body: [
      {
        type: "paragraph",
        text: "La camper resuelve dos de los grandes problemas de Islandia: el precio del alojamiento y la rigidez de los itinerarios. A cambio exige aceptar que dormirás en campings, que el viento condiciona los planes y que ducharse será parte de la logística diaria.",
      },
      { type: "heading", text: "Cuánto cuesta realmente" },
      {
        type: "list",
        items: [
          "Alquiler de camper 2 plazas en temporada media: 130–180 € por día.",
          "Combustible para la Ring Road completa: unos 320 €.",
          "Campings: 15–20 € por persona y noche; la Camping Card compensa a partir de ocho noches.",
          "Comida comprando en Bónus y Krónan: 25 € por persona al día.",
        ],
      },
      {
        type: "note",
        text: "Está prohibido pernoctar fuera de campings desde 2015. Las multas son habituales y no hay margen de negociación.",
      },
      { type: "heading", text: "El clima manda" },
      {
        type: "paragraph",
        text: "Consulta vedur.is y road.is cada mañana. No es una recomendación, es una rutina: las carreteras del interior se cierran sin aviso y el viento puede arrancar la puerta del coche, un daño que casi ningún seguro básico cubre.",
      },
      {
        type: "paragraph",
        text: "Con todo, sigue siendo uno de los viajes más satisfactorios que se pueden hacer en Europa. Diez días bastan para completar el círculo sin correr, con dos noches en la zona este, que es la que casi todo el mundo sacrifica y la que menos gente tiene.",
      },
    ],
  },
  {
    slug: "cuanto-cuesta-viajar-a-japon",
    title: "Cuánto cuesta viajar a Japón",
    subtitle: "Un desglose honesto de vuelos, tren, hoteles y comida en 2026.",
    excerpt:
      "Japón tiene fama de caro y en parte la merece, pero no en todo. Desglosamos el gasto real de dos semanas para dos personas.",
    category: "consejos",
    categoryLabel: "Consejos",
    destinationSlug: "japon",
    image: japon,
    author: "Nuria Blanco",
    date: "2026-05-09",
    readingMinutes: 10,
    body: [
      {
        type: "paragraph",
        text: "La percepción de que Japón es carísimo viene sobre todo del vuelo y del alojamiento en Tokio. El resto —transporte urbano, comida, entradas— es más asequible de lo que la gente espera, y en muchos casos más barato que en cualquier capital europea.",
      },
      {
        type: "list",
        items: [
          "Vuelo directo desde Madrid o Barcelona: 750–1.000 € por persona.",
          "Hotel de tres estrellas bien situado: 100–140 € la noche para dos.",
          "Comida: entre 8 € un ramen y 30 € una cena completa con bebida.",
          "JR Pass de 7 días: 350 €; solo compensa con dos trayectos largos o más.",
        ],
      },
      {
        type: "heading",
        text: "Dónde se ahorra de verdad",
      },
      {
        type: "paragraph",
        text: "Comiendo como comen los japoneses. Los konbini tienen comida decente por menos de 6 €, los izakaya de barrio salen a mitad de precio que los del centro y los menús de mediodía en restaurantes buenos rondan los 12 €. El segundo ahorro grande está en cambiar el JR Pass nacional por pases regionales.",
      },
    ],
  },
  {
    slug: "pueblos-mas-bonitos-del-norte-de-espana",
    title: "Los pueblos más bonitos del norte de España",
    subtitle: "De la costa asturiana a los valles del Pirineo aragonés.",
    excerpt:
      "Doce pueblos del norte peninsular que justifican por sí solos un fin de semana, ordenados de oeste a este para montar tu propia ruta.",
    category: "escapadas",
    categoryLabel: "Escapadas",
    destinationSlug: "espana",
    image: gastronomia,
    author: "Marta Ferrer",
    date: "2026-04-27",
    readingMinutes: 6,
    body: [
      {
        type: "paragraph",
        text: "El norte tiene una ventaja sobre cualquier otra región española: las distancias son cortas y el paisaje cambia cada pocos kilómetros. En un fin de semana largo se pueden encadenar cuatro o cinco pueblos sin conducir más de una hora entre ellos.",
      },
      {
        type: "list",
        items: [
          "Combarro (Pontevedra): hórreos a pie de ría.",
          "Cudillero (Asturias): anfiteatro de casas de colores sobre el puerto.",
          "Lastres (Asturias): mirador sobre el Cantábrico y los Picos de Europa.",
          "Santillana del Mar (Cantabria): piedra medieval y calles sin coches.",
          "Bárcena Mayor (Cantabria): el pueblo más antiguo del valle del Saja.",
          "Getaria (Gipuzkoa): pescado a la brasa y txakoli frente al mar.",
          "Aínsa (Huesca): plaza porticada con el Pirineo de fondo.",
        ],
      },
      {
        type: "paragraph",
        text: "Nuestra recomendación: evita agosto y ve entre semana. El norte funciona mejor con niebla que con multitudes.",
      },
    ],
  },
  {
    slug: "marruecos-en-una-semana",
    title: "Marruecos en una semana: del Atlas al desierto",
    subtitle: "Una ruta circular desde Marrakech con dos noches fuera de los circuitos.",
    excerpt:
      "Siete días bastan para recorrer Marrakech, el Alto Atlas y las dunas de Merzouga si se organiza el transporte con cabeza.",
    category: "aventura",
    categoryLabel: "Aventura",
    destinationSlug: "marruecos",
    image: marruecos,
    author: "Álvaro Sanz",
    date: "2026-04-08",
    readingMinutes: 8,
    body: [
      {
        type: "paragraph",
        text: "Marruecos se puede recorrer en transporte público, con conductor privado o de alquiler. Para una semana con desierto incluido, el conductor privado compartido entre cuatro personas suele ser la mejor combinación de precio y libertad.",
      },
      {
        type: "list",
        items: [
          "Días 1–2: Marrakech, medina y jardines, sin excursiones.",
          "Día 3: Alto Atlas por el puerto de Tizi n'Tichka y noche en Aït Ben Haddou.",
          "Días 4–5: valle del Draa y noche en campamento en Merzouga.",
          "Día 6: gargantas del Todra y valle de las Rosas.",
          "Día 7: regreso a Marrakech con parada en Ouarzazate.",
        ],
      },
      {
        type: "note",
        text: "Lleva efectivo: fuera de las ciudades grandes, muchos alojamientos y casi todos los restaurantes no aceptan tarjeta.",
      },
    ],
  },
  {
    slug: "road-trip-por-portugal",
    title: "Road trip por Portugal: del Duero al Alentejo",
    subtitle: "Diez días de carretera entre viñedos, playas salvajes y pueblos blancos.",
    excerpt:
      "Portugal de norte a sur en coche, con etapas cortas y noches en quintas, montes y casas de piedra recuperadas.",
    category: "road-trips",
    categoryLabel: "Road trips",
    destinationSlug: "portugal",
    image: roadtrip,
    author: "Nuria Blanco",
    date: "2026-03-19",
    readingMinutes: 9,
    body: [
      {
        type: "paragraph",
        text: "Portugal es un país pequeño y eso lo convierte en un destino ideal para conducir: nunca hay más de tres horas entre dos etapas y las carreteras secundarias son mejores que muchas autopistas europeas.",
      },
      {
        type: "list",
        items: [
          "Días 1–2: Oporto y las bodegas de Vila Nova de Gaia.",
          "Días 3–4: valle del Duero, con noche en una quinta con viñedos.",
          "Día 5: Serra da Estrela y queso en Manteigas.",
          "Días 6–7: Évora y los pueblos blancos del Alentejo.",
          "Días 8–10: Costa Vicentina hasta Sagres.",
        ],
      },
      {
        type: "paragraph",
        text: "Las autopistas portuguesas funcionan con peaje electrónico: pide el dispositivo al recoger el coche o acabarás pagando recargos en cada tramo.",
      },
    ],
  },
];
