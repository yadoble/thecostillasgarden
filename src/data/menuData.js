export const menuCategories = [
  { id: 'all', name: 'Todo el Menú', icon: 'Flame' },
  { id: 'brisket', name: 'Brisket Insignia', icon: 'Beef' },
  { id: 'ribs', name: 'Costillas BBQ', icon: 'Utensils' },
  { id: 'specialties', name: 'Especialidades & Burnt Ends', icon: 'Sparkles' },
  { id: 'sides', name: 'Guarniciones & Combos', icon: 'Soup' },
  { id: 'drinks', name: 'Bebidas & Postres', icon: 'Beer' }
];

export const menuItems = [
  {
    id: 'brisket-prime',
    category: 'brisket',
    name: 'Brisket Insignia 16 Horas',
    tagline: 'Corte Black Angus Prime con corteza de pimienta negra',
    description: 'El rey indiscutible de nuestra cocina. Ahumado pacientemente durante 16 horas con leña de roble blanco y nogal. Servido en rebanadas ultra jugosas con su mítica corteza negra caramelizada (bark) y el distintivo smoke ring rosado.',
    price: 395,
    formattedPrice: '$395 MXN',
    portion: '300g de corte suave',
    badge: 'Platillo Insignia',
    badgeColor: 'amber',
    image: '/images/brisket.jpg',
    specs: {
      smokeTime: '16 Horas',
      wood: 'Roble Blanco & Pecan',
      temp: '105°C / 225°F',
      cut: 'Black Angus Prime'
    },
    popular: true
  },
  {
    id: 'ribs-st-louis',
    category: 'ribs',
    name: 'Costillas St. Louis Glaseadas BBQ',
    tagline: 'Costillar completo con glaseado artesanal de miel y bourbon',
    description: 'Costillas de cerdo premium seleccionadas, tiernas y jugosas que se desprenden del hueso sin esfuerzo. Bañadas en nuestra salsa barbecue ahumada de la casa elaborada con miel de agave, chipotle y un toque de bourbon añejo.',
    price: 430,
    formattedPrice: '$430 MXN',
    portion: 'Costillar completo (~850g)',
    badge: 'Favorito del Pitmaster',
    badgeColor: 'amber',
    image: '/images/ribs.jpg',
    specs: {
      smokeTime: '6 Horas',
      wood: 'Mezquite & Manzano',
      temp: '110°C / 230°F',
      cut: 'St. Louis Spare Ribs'
    },
    popular: true
  },
  {
    id: 'burnt-ends-caramel',
    category: 'specialties',
    name: 'Brisket Burnt Ends Dulces & Picantes',
    tagline: 'Dulces gemas de brisket caramelizadas en hierro fundido',
    description: 'Conocidos en el mundo del BBQ como el "oro negro". Cubos de la punta grasa del brisket dos veces ahumados, bañados en salsa agridulce especiada y terminados en sartén de hierro con cebollín y ajonjolí tostado.',
    price: 340,
    formattedPrice: '$340 MXN',
    portion: '280g de cubos caramelizados',
    badge: 'Gourmet Crunch',
    badgeColor: 'silver',
    image: '/images/burnt_ends.jpg',
    specs: {
      smokeTime: '18 Horas (Doble ahumado)',
      wood: 'Roble & Hickory',
      temp: '115°C / 240°F',
      cut: 'Brisket Point Cut'
    },
    popular: true
  },
  {
    id: 'ribs-baby-back',
    category: 'ribs',
    name: 'Baby Back Ribs Ahumadas al Rub Seco',
    tagline: 'Para los puristas del humo texano sin salsas',
    description: 'Costillas Baby Back sazonadas exclusivamente con nuestra mezcla secreta de 12 especias, azúcar morena y pimienta de Tellicherry. Ahumadas a fuego lento para saborear la textura genuina de la carne.',
    price: 385,
    formattedPrice: '$385 MXN',
    portion: 'Medio costillar (~500g)',
    badge: 'Puristas BBQ',
    badgeColor: 'silver',
    image: '/images/ribs.jpg',
    specs: {
      smokeTime: '5.5 Horas',
      wood: 'Nogal & Roble',
      temp: '105°C / 225°F',
      cut: 'Pork Baby Back'
    },
    popular: false
  },
  {
    id: 'combo-pitmaster-feast',
    category: 'sides',
    name: 'Gran Banquete The Garden (Combo para 3-4)',
    tagline: 'Lo mejor del smoker pit en una sola tabla',
    description: 'Una generosa experiencia para compartir: 400g de Brisket Insignia, medio costillar St. Louis, orden de Burnt Ends, Mac & Cheese al horno, Frijoles Charros ahumados con tocino y Pan de Maíz calientito.',
    price: 1190,
    formattedPrice: '$1,190 MXN',
    portion: 'Para 3 a 4 personas',
    badge: 'El Más Pedido',
    badgeColor: 'amber',
    image: '/images/sides.jpg',
    specs: {
      smokeTime: 'Selección Mixta',
      wood: 'Maderas Finas',
      temp: 'Artesanal',
      cut: 'Tabla Mixta Completa'
    },
    popular: true
  },
  {
    id: 'smoked-mac-cheese',
    category: 'sides',
    name: 'Mac & Cheese Ahumado a 4 Quesos',
    tagline: 'Cheddar añejo, gouda, gruyère y mozzarella en cazuela',
    description: 'Pasta cavatappi en salsa cremosa de cuatro quesos madurados, con costra dorada de panko con mantequilla de ajo y un toque ahumado que proviene directamente de las brasas.',
    price: 145,
    formattedPrice: '$145 MXN',
    portion: 'Cazuela individual generosa (250g)',
    badge: 'Acompañamiento Top',
    badgeColor: 'silver',
    image: '/images/sides.jpg',
    specs: {
      smokeTime: '45 Minutos',
      wood: 'Manzano Suave',
      temp: 'Horno de Leña',
      cut: 'Quesos Artesanales'
    },
    popular: false
  },
  {
    id: 'cornbread-jalapeno',
    category: 'sides',
    name: 'Pan de Maíz Horneado al Momento',
    tagline: 'Con mantequilla de miel y hojuelas de jalapeño rostizado',
    description: 'Tradicional cornbread sureño con granos de elote tierno, crujiente por fuera y esponjoso y húmedo por dentro. Servido con mantequilla batida artesanal de miel de abeja orgánica.',
    price: 110,
    formattedPrice: '$110 MXN',
    portion: '2 piezas recién horneadas',
    badge: 'Receta Secreta',
    badgeColor: 'silver',
    image: '/images/sides.jpg',
    specs: {
      smokeTime: 'Horneado Diario',
      wood: 'Leña Seca',
      temp: '180°C',
      cut: 'Maíz Criollo'
    },
    popular: false
  },
  {
    id: 'pit-smoked-beans',
    category: 'sides',
    name: 'Frijoles Vaqueros con Puntas de Brisket',
    tagline: 'Cocidos debajo de los briskets para capturar sus jugos',
    description: 'Frijoles bayos cocinados a fuego muy lento en olla de hierro, cargados con trozos de tocino grueso, cebolla caramelizada, melaza y las gotas de jugo puro que caen de los briskets en el ahumador.',
    price: 125,
    formattedPrice: '$125 MXN',
    portion: 'Tazón de 280g',
    badge: 'Auténtico Pit',
    badgeColor: 'silver',
    image: '/images/sides.jpg',
    specs: {
      smokeTime: '8 Horas',
      wood: 'Roble Americano',
      temp: 'Calor Indirecto',
      cut: 'Brisket & Bacon'
    },
    popular: false
  },
  {
    id: 'smoked-old-fashioned',
    category: 'drinks',
    name: 'The Pitmaster Smoked Old Fashioned',
    tagline: 'Cóctel insignia infusionado con humo de madera de nogal',
    description: 'Bourbon añejado de Kentucky, bitter aromático de naranja y angostura, jarabe de piloncillo ahumado y twist de naranja flameado, servido bajo campana de cristal con humo vivo de virutas de nogal.',
    price: 190,
    formattedPrice: '$190 MXN',
    portion: 'Copa de autor (120ml)',
    badge: 'Mixología Viva',
    badgeColor: 'amber',
    image: '/images/burnt_ends.jpg',
    specs: {
      smokeTime: 'Infusión al momento',
      wood: 'Pecan Wood Smoke',
      temp: 'Frío con roca cristalina',
      cut: 'Bourbon & Bitters'
    },
    popular: false
  },
  {
    id: 'pecan-pie-smoked',
    category: 'drinks',
    name: 'Pie de Nuez Pecana con Helado de Vainilla Bourbon',
    tagline: 'El postre texano por excelencia',
    description: 'Tarta tibia de nuez pecana tostada al horno de leña, con toffee de mantequilla dorada y servida con una bola de helado artesanal de vainilla de Papantla y reducción de bourbon.',
    price: 165,
    formattedPrice: '$165 MXN',
    portion: 'Rebanada generosa con helado',
    badge: 'Cierre Perfecto',
    badgeColor: 'silver',
    image: '/images/sides.jpg',
    specs: {
      smokeTime: 'Horneado de Leña',
      wood: 'Manzano Aromático',
      temp: 'Postre',
      cut: 'Nuez Pecana & Vainilla'
    },
    popular: false
  }
];

export const smokingTechniques = [
  {
    number: '01',
    title: 'Selección de la Madera',
    subtitle: 'Roble Blanco, Manzano & Mezquite',
    description: 'No usamos gas, electricidad ni carbón comprimido. Solo leña dura curada durante 12 meses que quema a llama limpia, aportando notas aromáticas dulces y tostadas.',
    icon: 'TreePine'
  },
  {
    number: '02',
    title: 'Ahumado Low & Slow',
    subtitle: '14 a 16 Horas a 225°F Constantes',
    description: 'El calor indirecto transforma el colágeno en gelatina sedosa. La paciencia de nuestros pitmasters vigila el tiro de aire minuto a minuto para mantener un flujo de humo azul perfecto.',
    icon: 'Hourglass'
  },
  {
    number: '03',
    title: 'Corteza y Aro de Humo',
    subtitle: 'El "Bark" Oscuro y Smoke Ring Rosado',
    description: 'La reacción de Maillard combinada con el humo natural crea una costra crujiente de rub especiado y un anillo rosa vibrante que certifica la autenticidad de la pieza.',
    icon: 'ShieldCheck'
  },
  {
    number: '04',
    title: 'Reposo en Caliente',
    subtitle: 'Mínimo 4 Horas antes del Corte',
    description: 'Tras el ahumado, la carne reposa a temperatura controlada envuelta en papel carnicero de Texas, permitiendo que todos los jugos se redistribuyan de manera homogénea.',
    icon: 'Flame'
  }
];
