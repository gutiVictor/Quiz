import Libro from "./assets/libro.png";
import Antiguo from "./assets/antiguo.png";
import Nuevo from "./assets/nuevo.png";
import Doctrina from "./assets/doctrina.png";
import Historia from "./assets/historia.png";
import Perla from "./assets/perla.png";
import Ordenanzas from "./assets/ordenanzas.png";

export const imgs = [
  Libro,
  Antiguo,
  Nuevo,
  Doctrina,
  Historia,
  Perla,
  Ordenanzas,
];

export const categories = {
  historia: "Historia",
  perla: "Perla",
  antiguo: "Antiguo",
  libro: "Libro",
  nuevo: "Nuevo",
  ordenanzas: "Ordenanzas",
  doctrina: "Doctrina",
};

const { historia, ordenanzas, perla, antiguo, libro, nuevo, doctrina } =
  categories;

export const questions = [
  {
    id: 1,
    difficulty: "Fácil",
    question: "¿Quién es el primer profeta mencionado en el Libro de Mormón?",
    category: libro,
    correct_answer: "Lehi",
    incorrect_answers: ["Nefi", "Alma", "Mormón"],
  },
  {
    id: 2,
    difficulty: "Medio",
    question:
      "¿Qué pueblo fue destruido como se menciona en el primer capítulo de 1 Nefi?",
    category: libro,
    correct_answer: "Los judíos de Jerusalén",
    incorrect_answers: ["Los lamanitas", "Los nefitas", "Los amalekitas"],
  },
  {
    id: 3,
    difficulty: "Difícil",
    question:
      "¿En qué capítulo de 1 Nefi se menciona la visión del árbol de la vida?",
    category: libro,
    correct_answer: "Capítulo 8",
    incorrect_answers: ["Capítulo 10", "Capítulo 6", "Capítulo 12"],
  },
  {
    id: 4,
    difficulty: "Fácil",
    question: "¿Quién construyó un barco para cruzar el océano en 1 Nefi?",
    category: libro,
    correct_answer: "Nefi",
    incorrect_answers: ["Lehi", "Lamán", "Sam"],
  },
  {
    id: 5,
    difficulty: "Medio",
    question: "¿Qué animal representaba el símbolo de los lamanitas?",
    category: libro,
    correct_answer: "El jaguar",
    incorrect_answers: ["El león", "El águila", "El lobo"],
  },
  {
    id: 6,
    difficulty: "Difícil",
    question:
      "¿Quién tradujo las planchas de bronce en la época de los nefitas?",
    category: libro,
    correct_answer: "Mosíah",
    incorrect_answers: ["Nefi", "Alma", "Mormón"],
  },
  {
    id: 7,
    difficulty: "Fácil",
    question:
      "¿En qué libro se describe la visión de la Segunda Venida de Cristo?",
    category: libro,
    correct_answer: "2 Nefi",
    incorrect_answers: ["1 Nefi", "Mosíah", "Alma"],
  },
  {
    id: 8,
    difficulty: "Medio",
    question: "¿Qué profeta es conocido por sus visiones del juicio final?",
    category: libro,
    correct_answer: "Jacob",
    incorrect_answers: ["Enós", "Jarom", "Omni"],
  },
  {
    id: 9,
    difficulty: "Difícil",
    question:
      "¿Cuál es el tema principal de la profecía de Zenos en el libro de Jacob?",
    category: libro,
    correct_answer: "El olivo y la restauración de Israel",
    incorrect_answers: [
      "La destrucción de los nefitas",
      "La llegada del Mesías",
      "La conversión de los lamanitas",
    ],
  },
  {
    id: 10,
    difficulty: "Fácil",
    question:
      "¿Quién es el hijo de Jacob que escribió un libro en el Libro de Mormón?",
    category: libro,
    correct_answer: "Enós",
    incorrect_answers: ["Jarom", "Omni", "Amaleki"],
  },
  {
    id: 11,
    difficulty: "Medio",
    question: "¿Cuál fue la principal preocupación de Enós en su oración?",
    category: libro,
    correct_answer: "El perdón de sus pecados",
    incorrect_answers: [
      "La paz en la tierra",
      "La conversión de los lamanitas",
      "La prosperidad de su pueblo",
    ],
  },
  {
    id: 12,
    difficulty: "Difícil",
    question: "¿Quién fue el último autor en el libro de Omni?",
    category: libro,
    correct_answer: "Amaleki",
    incorrect_answers: ["Jarom", "Omni", "Abinadom"],
  },
  {
    id: 13,
    difficulty: "Fácil",
    question: "¿Qué rey condujo a su pueblo a la tierra de Zarahemla?",
    category: libro,
    correct_answer: "Mosíah",
    incorrect_answers: ["Limhi", "Alma", "Zeniff"],
  },
  {
    id: 14,
    difficulty: "Medio",
    question:
      "¿Qué documento sagrado se menciona en el libro de Mosíah que contiene la genealogía de Lehi?",
    category: libro,
    correct_answer: "Las planchas de bronce",
    incorrect_answers: [
      "Las planchas de Nefi",
      "El libro de Zenos",
      "El libro de Mormón",
    ],
  },
  {
    id: 15,
    difficulty: "Difícil",
    question:
      "¿En qué capítulo de Mosíah se establece la iglesia de Cristo entre los nefitas?",
    category: libro,
    correct_answer: "Capítulo 18",
    incorrect_answers: ["Capítulo 12", "Capítulo 20", "Capítulo 24"],
  },
  {
    id: 16,
    difficulty: "Fácil",
    question: "¿Quién es el protagonista principal del libro de Alma?",
    category: libro,
    correct_answer: "Alma",
    incorrect_answers: ["Amulek", "Mormón", "Moroni"],
  },
  {
    id: 17,
    difficulty: "Medio",
    question: "¿Qué pueblo rechazó la predicación de Alma y Amulek?",
    category: libro,
    correct_answer: "Ammoníah",
    incorrect_answers: ["Zarahemla", "Jerusalén", "Nefi"],
  },
  {
    id: 18,
    difficulty: "Difícil",
    question:
      "¿Qué comandante lamanita fue derrotado en la batalla de las aguas de Sidón?",
    category: libro,
    correct_answer: "Zarahemna",
    incorrect_answers: ["Ammoron", "Amalickiah", "Zerahemnah"],
  },
  {
    id: 19,
    difficulty: "Fácil",
    question: "¿Qué misión emprendió Ammon en el libro de Alma?",
    category: libro,
    correct_answer: "Convertir a los lamanitas",
    incorrect_answers: [
      "Buscar las planchas",
      "Liberar a los nefitas",
      "Construir templos",
    ],
  },
  {
    id: 20,
    difficulty: "Medio",
    question: "¿Quién fue la madre de Alma el Joven?",
    category: libro,
    correct_answer: "No se menciona",
    incorrect_answers: ["Sariah", "Abish", "Isabel"],
  },
  {
    id: 21,
    difficulty: "Difícil",
    question:
      "¿En qué capítulo de Helamán se narra la conversión de los ladrones lamanitas?",
    category: libro,
    correct_answer: "Capítulo 5",
    incorrect_answers: ["Capítulo 7", "Capítulo 9", "Capítulo 12"],
  },
  {
    id: 22,
    difficulty: "Fácil",
    question:
      "¿Quién fue el profeta que vio la señal de la estrella nueva en Helamán?",
    category: libro,
    correct_answer: "Samuel el Lamanita",
    incorrect_answers: ["Nefi", "Lehi", "Amulek"],
  },
  {
    id: 23,
    difficulty: "Medio",
    question: "¿Qué evento importante se predijo en Helamán 14?",
    category: libro,
    correct_answer: "La señal del nacimiento de Cristo",
    incorrect_answers: [
      "La destrucción de los nefitas",
      "La llegada de los lamanitas",
      "La conversión de Alma",
    ],
  },
  {
    id: 24,
    difficulty: "Difícil",
    question:
      "¿En qué año se produjo la gran guerra entre los nefitas y los lamanitas como se menciona en 3 Nefi?",
    category: libro,
    correct_answer: "Año 19 d.C.",
    incorrect_answers: ["Año 25 d.C.", "Año 15 d.C.", "Año 10 d.C."],
  },
  {
    id: 25,
    difficulty: "Fácil",
    question: "¿Quién fue el protagonista principal de 3 Nefi?",
    category: libro,
    correct_answer: "Jesucristo",
    incorrect_answers: ["Nefi", "Amulek", "Mormón"],
  },
  {
    id: 26,
    difficulty: "Medio",
    question: "¿En qué libro se narra la aparición de Cristo a los nefitas?",
    category: libro,
    correct_answer: "3 Nefi",
    incorrect_answers: ["4 Nefi", "Mormón", "Alma"],
  },
  {
    id: 27,
    difficulty: "Difícil",
    question:
      "¿Cuántos años de paz tuvieron los nefitas después de la visita de Cristo según 4 Nefi?",
    category: libro,
    correct_answer: "200 años",
    incorrect_answers: ["100 años", "150 años", "250 años"],
  },
  {
    id: 28,
    difficulty: "Fácil",
    question:
      "¿Qué libro narra la historia de la decadencia nefita después de la visita de Cristo?",
    category: libro,
    correct_answer: "4 Nefi",
    incorrect_answers: ["3 Nefi", "Mormón", "Éter"],
  },
  {
    id: 29,
    difficulty: "Medio",
    question: "¿Quién escribió la mayor parte del libro de Mormón?",
    category: libro,
    correct_answer: "Mormón",
    incorrect_answers: ["Moroni", "Nefi", "Alma"],
  },
  {
    id: 30,
    difficulty: libro,
    question:
      "¿En qué capítulo de Mormón se describe la batalla final entre los nefitas y lamanitas?",
    category: "Mormón",
    correct_answer: "Capítulo 8",
    incorrect_answers: ["Capítulo 6", "Capítulo 10", "Capítulo 4"],
  },
  {
    id: 31,
    difficulty: "Fácil",
    question: "¿Quién fue el primer rey de los nefitas?",
    category: libro,
    correct_answer: "Nefi",
    incorrect_answers: ["Mosíah ", "Benjamin", "Zeniff"],
  },
  {
    id: 32,
    difficulty: "Medio",
    question:
      "¿Qué profeta predijo la destrucción de Ammoníah en el libro de Alma?",
    category: libro,
    correct_answer: "Alma el Joven",
    incorrect_answers: ["Amulek", "Zeezrom", "Helamán"],
  },
  {
    id: 33,
    difficulty: "Difícil",
    question:
      "¿En qué año tuvo lugar la conversión de Alma el Joven según el libro de Mosíah?",
    category: libro,
    correct_answer: "100 a.C.",
    incorrect_answers: ["124 a.C.", "92 a.C.", "85 a.C."],
  },
  {
    id: 34,
    difficulty: "Fácil",
    question:
      "¿Qué evento milagroso ocurrió cuando Alma el Joven y Amulek estaban en la cárcel?",
    category: libro,
    correct_answer: "Un terremoto destruyó la cárcel",
    incorrect_answers: [
      "Fueron liberados por un ángel",
      "Las puertas se abrieron solas",
      "Los guardias cayeron dormidos",
    ],
  },
  {
    id: 35,
    difficulty: "Medio",
    question: "¿Quién fue el padre de Alma el Joven?",
    category: libro,
    correct_answer: "Alma",
    incorrect_answers: ["Helamán", "Amulek", "Moroni"],
  },
  {
    id: 36,
    difficulty: "Difícil",
    question:
      "¿En qué libro se menciona la profecía sobre la llegada de un Salvador que sería crucificado?",
    category: libro,
    correct_answer: "2 Nefi",
    incorrect_answers: ["1 Nefi", "Mosíah", "Helamán"],
  },
  {
    id: 37,
    difficulty: "Fácil",
    question:
      "¿Qué rey nefitas trasladó las planchas de bronce desde la tierra de Nefi a la tierra de Zarahemla?",
    category: libro,
    correct_answer: "Mosíah",
    incorrect_answers: ["Limhi", "Alma", "Zeniff"],
  },
  {
    id: 38,
    difficulty: "Medio",
    question:
      "¿Qué líder lamanita fue asesinado por su siervo mientras dormía?",
    category: libro,
    correct_answer: "Ammoron",
    incorrect_answers: ["Zerahemnah", "Amalickiah", "Coriántumr"],
  },
  {
    id: 39,
    difficulty: "Difícil",
    question:
      "¿Cuál fue la causa de la separación entre los nefitas y los lamanitas según 2 Nefi?",
    category: libro,
    correct_answer: "El orgullo y la incredulidad de los lamanitas",
    incorrect_answers: [
      "La guerra por la tierra",
      "La diferencia en religiones",
      "Las profecías de Nefi",
    ],
  },
  {
    id: 40,
    difficulty: "Fácil",
    question:
      "¿Quién fue el profeta que recibió las planchas de oro para registrar la historia del pueblo jaredita?",
    category: libro,
    correct_answer: "Éter",
    incorrect_answers: ["Mormón", "Moroni", "Nefi"],
  },
  {
    id: 41,
    difficulty: "Medio",
    question:
      "¿Qué líder lamanita construyó una torre para observar la ciudad de Zarahemla?",
    category: libro,
    correct_answer: "Amalickiah",
    incorrect_answers: ["Ammoron", "Zerahemnah", "Coriántumr"],
  },
  {
    id: 42,
    difficulty: "Difícil",
    question:
      "¿Cuál es el significado del nombre 'Deseret' según el libro de Éter?",
    category: libro,
    correct_answer: "Abeja",
    incorrect_answers: ["Paz", "Rey", "Salvación"],
  },
  {
    id: 43,
    difficulty: "Fácil",
    question:
      "¿Qué profeta construyó un barco para cruzar el océano con su pueblo?",
    category: libro,
    correct_answer: "Nefi",
    incorrect_answers: ["Lehi", "Moroni", "Alma"],
  },
  {
    id: 44,
    difficulty: "Medio",
    question:
      "¿Qué evento importante se menciona en el libro de Enós sobre la vida de Enós?",
    category: libro,
    correct_answer: "Su oración prolongada en el bosque",
    incorrect_answers: [
      "La conversión de los lamanitas",
      "La construcción de un templo",
      "Una visión celestial",
    ],
  },
  {
    id: 45,
    difficulty: "Difícil",
    question:
      "¿En qué año comenzó la misión de Ammon entre los lamanitas según el libro de Alma?",
    category: libro,
    correct_answer: "91 a.C.",
    incorrect_answers: ["82 a.C.", "75 a.C.", "85 a.C."],
  },
  {
    id: 46,
    difficulty: "Fácil",
    question:
      "¿Quién escribió la mayoría de los registros del pueblo jaredita?",
    category: libro,
    correct_answer: "Éter",
    incorrect_answers: ["Moroni", "Mormón", "Nefi"],
  },
  {
    id: 47,
    difficulty: "Medio",
    question: "¿Qué evento importante ocurrió en el año 34 d.C. según 3 Nefi?",
    category: libro,
    correct_answer: "La aparición de Jesucristo a los nefitas",
    incorrect_answers: [
      "La destrucción de Ammoníah",
      "La conversión de los lamanitas",
      "La guerra civil entre los nefitas",
    ],
  },
  {
    id: 48,
    difficulty: "Difícil",
    question:
      "¿Qué jefe nefitas se menciona en el libro de Mormón como líder en la batalla final?",
    category: libro,
    correct_answer: "Mormon",
    incorrect_answers: ["Moroni", "Helamán", "Gid"],
  },
  {
    id: 49,
    difficulty: "Fácil",
    question:
      "¿Qué evento marca el fin de los registros de los nefitas según el libro de Mormón?",
    category: libro,
    correct_answer: "La batalla final en Cumorah",
    incorrect_answers: [
      "La conversión de los lamanitas",
      "La llegada de Cristo",
      "La destrucción de Zarahemla",
    ],
  },

  {
    id: 50,
    difficulty: "Fácil",
    question:
      "¿Quién fue el rey que gobernó con sabiduría y justicia en el libro de Mosíah?",
    category: libro,
    correct_answer: "Benjamin",
    incorrect_answers: ["Mosíah", "Nefi", "Alma"],
  },
  {
    id: 51,
    difficulty: "Medio",
    question:
      "¿Qué evento marcó el inicio de la guerra entre los nefitas y los lamanitas en el libro de Alma?",
    category: libro,
    correct_answer: "La rebelión de Nehors",
    incorrect_answers: [
      "La conversión de Alma",
      "La destrucción de Ammoníah",
      "La visión de Nefi",
    ],
  },
  {
    id: 52,
    difficulty: "Difícil",
    question:
      "¿Qué profeta recibió la visión de la destrucción de su pueblo en el libro de Éter?",
    category: libro,
    correct_answer: "Éter",
    incorrect_answers: ["Mormón", "Moroni", "Nefi"],
  },
  {
    id: 53,
    difficulty: "Fácil",
    question:
      "¿Quién fue el rey que construyó el templo en la tierra de Zarahemla?",
    category: libro,
    correct_answer: "Benjamin",
    incorrect_answers: ["Mosíah", "Nefi", "Alma"],
  },
  {
    id: 54,
    difficulty: "Medio",
    question:
      "¿Qué evento marcó el inicio de la decadencia de los nefitas en el libro de 4 Nefi?",
    category: libro,
    correct_answer: "La división del pueblo en facciones",
    incorrect_answers: [
      "La llegada de los lamanitas",
      "La destrucción de Zarahemla",
      "La muerte de Cristo",
    ],
  },
  {
    id: 55,
    difficulty: "Difícil",
    question:
      "¿Qué profeta escribió el libro de Mormón después de la destrucción de su pueblo?",
    category: libro,
    correct_answer: "Mormón",
    incorrect_answers: ["Moroni", "Nefi", "Alma"],
  },
  /* {
    id: 56,
    difficulty: "Fácil",
    question:
      "¿Quién fue el rey que gobernó con sabiduría y justicia en el libro de Mosíah?",
    category: libro,
    correct_answer: "Benjamin",
    incorrect_answers: ["Mosíah", "Nefi", "Alma"],
  }, */
  {
    id: 57,
    difficulty: "Medio",
    question:
      "¿Qué evento marcó el inicio de la guerra entre los nefitas y los lamanitas en el libro de Alma?",
    category: libro,
    correct_answer: "La rebelión de Nehors",
    incorrect_answers: [
      "La conversión de Alma",
      "La destrucción de Ammoníah",
      "La visión de Nefi",
    ],
  },
  {
    id: 58,
    difficulty: "Difícil",
    question:
      "¿Qué profeta recibió la visión de la destrucción de su pueblo en el libro de Éter?",
    category: libro,
    correct_answer: "Éter",
    incorrect_answers: ["Mormón", "Moroni", "Nefi"],
  },
  /* {
    id: 59,
    difficulty: "Fácil",
    question:
      "¿Quién fue el rey que construyó el templo en la tierra de Zarahemla?",
    category: libro,
    correct_answer: "Benjamin",
    incorrect_answers: ["Mosíah", "Nefi", "Alma"],
  }, */
  {
    id: 60,
    difficulty: "Medio",
    question:
      "¿Qué evento marcó el inicio de la decadencia de los nefitas en el libro de 4 Nefi?",
    category: libro,
    correct_answer: "La división del pueblo en facciones",
    incorrect_answers: [
      "La llegada de los lamanitas",
      "La destrucción de Zarahemla",
      "La muerte de Cristo",
    ],
  },
  {
    id: 61,
    difficulty: "Difícil",
    question:
      "¿Qué profeta escribió el libro de Mormón después de la destrucción de su pueblo?",
    category: libro,
    correct_answer: "Mormón",
    incorrect_answers: ["Moroni", "Nefi", "Alma"],
  },
  /* {
    id: 62,
    difficulty: "Fácil",
    question:
      "¿Quién fue el rey que gobernó con sabiduría y justicia en el libro de Mosíah?",
    category: libro,
    correct_answer: "Benjamin",
    incorrect_answers: ["Mosíah", "Nefi", "Alma"],
  }, */
  {
    id: 63,
    difficulty: "Medio",
    question:
      "¿Qué evento marcó el inicio de la guerra entre los nefitas y los lamanitas en el libro de Alma?",
    category: libro,
    correct_answer: "La rebelión de Nehors",
    incorrect_answers: [
      "La conversión de Alma",
      "La destrucción de Ammoníah",
      "La visión de Nefi",
    ],
  },
  {
    id: 64,
    difficulty: "Difícil",
    question:
      "¿Qué profeta recibió la visión de la destrucción de su pueblo en el libro de Éter?",
    category: libro,
    correct_answer: "Éter",
    incorrect_answers: ["Mormón", "Moroni", "Nefi"],
  },
 /*  {
    id: 65,
    difficulty: "Fácil",
    question:
      "¿Quién fue el rey que construyó el templo en la tierra de Zarahemla?",
    category: libro,
    correct_answer: "Benjamin",
    incorrect_answers: ["Mosíah", "Nefi", "Alma"],
  }, */
  {
    id: 66,
    difficulty: "Medio",
    question:
      "¿Qué evento marcó el inicio de la decadencia de los nefitas en el libro de 4 Nefi?",
    category: libro,
    correct_answer: "La división del pueblo en facciones",
    incorrect_answers: [
      "La llegada de los lamanitas",
      "La destrucción de Zarahemla",
      "La muerte de Cristo",
    ],
  },
  {
    id: 67,
    difficulty: "Difícil",
    question:
      "¿Qué profeta escribió el libro de Mormón después de la destrucción de su pueblo?",
    category: libro,
    correct_answer: "Mormón",
    incorrect_answers: ["Moroni", "Nefi", "Alma"],
  },
  /* {
    id: 68,
    difficulty: "Fácil",
    question:
      "¿Quién fue el rey que gobernó con sabiduría y justicia en el libro de Mosíah?",
    category: libro,
    correct_answer: "Benjamin",
    incorrect_answers: ["Mosíah", "Nefi", "Alma"],
  }, */
  {
    id: 69,
    difficulty: "Medio",
    question:
      "¿Qué evento marcó el inicio de la guerra entre los nefitas y los lamanitas en el libro de Alma?",
    category: libro,
    correct_answer: "La rebelión de Nehors",
    incorrect_answers: [
      "La conversión de Alma",
      "La destrucción de Ammoníah",
      "La visión de Nefi",
    ],
  },
  {
    id: 70,
    difficulty: "Difícil",
    question:
      "¿Qué profeta recibió la visión de la destrucción de su pueblo en el libro de Éter?",
    category: libro,
    correct_answer: "Éter",
    incorrect_answers: ["Mormón", "Moroni", "Nefi"],
  },
 /*  {
    id: 71,
    difficulty: "Fácil",
    question:
      "¿Quién fue el rey que construyó el templo en la tierra de Zarahemla?",
    category: libro,
    correct_answer: "Benjamin",
    incorrect_answers: ["Mosíah", "Nefi", "Alma"],
  }, */
  {
    id: 72,
    difficulty: "Medio",
    question:
      "¿Qué evento marcó el inicio de la decadencia de los nefitas en el libro de 4 Nefi?",
    category: libro,
    correct_answer: "La división del pueblo en facciones",
    incorrect_answers: [
      "La llegada de los lamanitas",
      "La destrucción de Zarahemla",
      "La muerte de Cristo",
    ],
  },
  {
    id: 73,
    difficulty: "Difícil",
    question:
      "¿Qué profeta escribió el libro de Mormón después de la destrucción de su pueblo?",
    category: libro,
    correct_answer: "Mormón",
    incorrect_answers: ["Moroni", "Nefi", "Alma"],
  },
 /*  {
    id: 74,
    difficulty: "Fácil",
    question:
      "¿Quién fue el rey que gobernó con sabiduría y justicia en el libro de Mosíah?",
    category: libro,
    correct_answer: "Benjamin",
    incorrect_answers: ["Mosíah", "Nefi", "Alma"],
  }, */
  {
    id: 75,
    difficulty: "Medio",
    question:
      "¿Qué evento marcó el inicio de la guerra entre los nefitas y los lamanitas en el libro de Alma?",
    category: libro,
    correct_answer: "La rebelión de Nehors",
    incorrect_answers: [
      "La conversión de Alma",
      "La destrucción de Ammoníah",
      "La visión de Nefi",
    ],
  },
  {
    id: 76,
    difficulty: "Difícil",
    question:
      "¿Qué profeta recibió la visión de la destrucción de su pueblo en el libro de Éter?",
    category: libro,
    correct_answer: "Éter",
    incorrect_answers: ["Mormón", "Moroni", "Nefi"],
  },
  /* {
    id: 77,
    difficulty: "Fácil",
    question:
      "¿Quién fue el rey que construyó el templo en la tierra de Zarahemla?",
    category: libro,
    correct_answer: "Benjamin",
    incorrect_answers: ["Mosíah", "Nefi", "Alma"],
  }, */
  {
    id: 78,
    difficulty: "Medio",
    question:
      "¿Qué evento marcó el inicio de la decadencia de los nefitas en el libro de 4 Nefi?",
    category: libro,
    correct_answer: "La división del pueblo en facciones",
    incorrect_answers: [
      "La llegada de los lamanitas",
      "La destrucción de Zarahemla",
      "La muerte de Cristo",
    ],
  },
  {
    id: 79,
    difficulty: "Difícil",
    question:
      "¿Qué profeta escribió el libro de Mormón después de la destrucción de su pueblo?",
    category: libro,
    correct_answer: "Mormón",
    incorrect_answers: ["Moroni", "Nefi", "Alma"],
  },

  /* FIN LIBRO */

  /* INICIO ANTIGUO */

  {
    id: 171,
    difficulty: "Fácil",
    question:
      "¿Quién construyó el arca para salvar a su familia y a los animales del diluvio?",
    category: antiguo,
    correct_answer: "Noé",
    incorrect_answers: ["Moisés", "Abraham", "Nefi"],
  },
  {
    id: 172,
    difficulty: "Medio",
    question: "¿Quién fue la esposa de Abraham que dio a luz a Isaac?",
    category: antiguo,
    correct_answer: "Sara",
    incorrect_answers: ["Rebeca", "Saria", "Raquel"],
  },
  {
    id: 173,
    difficulty: "Difícil",
    question: "¿Qué pacto hizo Dios con Abraham '?",
    category: antiguo,
    correct_answer: "Pacto de la circuncisión",
    incorrect_answers: [
      "Pacto del arco iris",
      "Pacto del sacrificio",
      "Pacto de la promesa",
    ],
  },
  {
    id: 174,
    difficulty: "Fácil",
    question: "¿Qué faraón fue testigo de las diez plagas enviadas por Dios?",
    category: antiguo,
    correct_answer: "Faraón de Egipto",
    incorrect_answers: [
      "Faraón de Canaán",
      "Faraón de Asiria",
      "Faraón de Babilonia",
    ],
  },
  {
    id: 175,
    difficulty: "Medio",
    question: "¿En qué monte recibió Moisés los Diez Mandamientos?",
    category: antiguo,
    correct_answer: "Monte Sinaí",
    incorrect_answers: ["Monte Ararat", "Monte Horeb", "Monte de los Olivos"],
  },
  {
    id: 176,
    difficulty: "Difícil",
    question:
      "¿Cuál es el nombre hebreo del maná proporcionado a los israelitas en el desierto?",
    category: antiguo,
    correct_answer: "Man",
    incorrect_answers: ["Manhu", "Mana", "Matsah"],
  },
  {
    id: 177,
    difficulty: "Fácil",
    question:
      "¿Quién derribó los muros de Jericó y conquistó la Tierra Prometida?",
    category: antiguo,
    correct_answer: "Josué",
    incorrect_answers: ["Moisés", "Caleb", "Samuel"],
  },
  {
    id: 178,
    difficulty: "Medio",
    question:
      "¿Qué ciudad fue la primera que conquistaron los israelitas en la Tierra Prometida?",
    category: antiguo,
    correct_answer: "Jericó",
    incorrect_answers: [
      "La ciudad amurallada",
      "La ciudad donde los israelitas encontraron su primera resistencia",
      "La ciudad que simbolizó la conquista de Canaán",
    ],
  },
  {
    id: 179,
    difficulty: "Difícil",
    question: "¿Qué mujer escondió a los espías israelitas en Jericó?",
    category: antiguo,
    correct_answer: "Rahab",
    incorrect_answers: ["Débora", "Esther", "Jezabel"],
  },
  {
    id: 180,
    difficulty: "Fácil",
    question:
      "¿Quién fue el juez conocido por su fuerza y por derribar un templo ?",
    category: antiguo,
    correct_answer: "Sansón",
    incorrect_answers: ["Gedeón", "Efraín", "Jefté"],
  },
  {
    id: 181,
    difficulty: "Medio",
    question: "¿Cuál era el nombre de la madre de Sansón?",
    category: antiguo,
    correct_answer: "No se menciona",
    incorrect_answers: ["Débora", "Miriam", "Rut"],
  },
  {
    id: 182,
    difficulty: "Difícil",
    question:
      "¿Qué juez hizo un voto a Dios que resultó en el sacrificio de su hija?",
    category: antiguo,
    correct_answer: "Jefté",
    incorrect_answers: ["Gedeón", "Efraín", "Barac"],
  },
  {
    id: 183,
    difficulty: "Fácil",
    question: "¿Quién fue el primer rey de Israel?",
    category: antiguo,
    correct_answer: "Saúl",
    incorrect_answers: ["David", "Salomón", "Samuel"],
  },
  {
    id: 184,
    difficulty: "Medio",
    question:
      "¿¿Qué joven pastor, ungido por Samuel, se convirtió en un símbolo ?",
    category: antiguo,
    correct_answer: "David",
    incorrect_answers: ["Jonatán", "Samuel", "Josué"],
  },
  {
    id: 185,
    difficulty: "Difícil",
    question: "¿Quién fue el profeta que ungió a David como rey?",
    category: antiguo,
    correct_answer: "Samuel",
    incorrect_answers: ["Natán", "Gad", "Elías"],
  },
  {
    id: 186,
    difficulty: "Fácil",
    question: "¿Qué hijo de David se convirtió en el tercer rey de Israel?",
    category: antiguo,
    correct_answer: "Salomón",
    incorrect_answers: ["Absalón", "Adonías", "Amnón"],
  },
  {
    id: 187,
    difficulty: "Medio",
    question: "¿Qué pidió Salomón a Dios cuando se convirtió en rey?",
    category: antiguo,
    correct_answer: "Sabiduría",
    incorrect_answers: ["Riqueza", "Larga vida", "Victoria en la guerra"],
  },
  {
    id: 188,
    difficulty: "Difícil",
    question: "¿En qué ciudad construyó Salomón el templo para el Señor?",
    category: antiguo,
    correct_answer: "Jerusalén",
    incorrect_answers: ["Hebrón", "Betel", "Siquem"],
  },
  {
    id: 189,
    difficulty: "Fácil",
    question:
      "¿Quién fue lanzado a un foso de leones por no dejar de orar a Dios?",
    category: antiguo,
    correct_answer: "Daniel",
    incorrect_answers: ["Ezequiel", "Jeremías", "Isaías"],
  },
  {
    id: 190,
    difficulty: "Medio",
    question: "¿Qué rey tuvo un sueño que solo Daniel pudo interpretar?",
    category: antiguo,
    correct_answer: "Nabucodonosor",
    incorrect_answers: ["Ciro", "Darío", "Asuero"],
  },
  {
    id: 191,
    difficulty: "Difícil",
    question:
      "¿Qué visión tuvo Daniel en la que vio una estatua hecha de diferentes materiales?",
    category: antiguo,
    correct_answer: "La visión de la estatua de Nabucodonosor",
    incorrect_answers: [
      "La visión del carnero y el macho cabrío",
      "La visión de los cuatro bestias",
      "La visión del ángel Gabriel",
    ],
  },
  {
    id: 192,
    difficulty: "Fácil",
    question: "¿Qué profeta fue tragado por un gran pez?",
    category: antiguo,
    correct_answer: "Jonás",
    incorrect_answers: ["Elías", "Jeremías", "Isaías"],
  },
  {
    id: 193,
    difficulty: "Medio",
    question: "¿A qué ciudad fue enviado Jonás a predicar el arrepentimiento?",
    category: antiguo,
    correct_answer: "Nínive",
    incorrect_answers: ["Tarso", "Jerusalén", "Babilonia"],
  },
  {
    id: 194,
    difficulty: "Difícil",
    question: "¿Qué hizo Jonás cuando Dios le ordenó ir a Nínive?",
    category: antiguo,
    correct_answer: "Huyó en un barco hacia Tarsis",
    incorrect_answers: [
      "Fue de inmediato a Nínive",
      "Oró por dirección",
      "Se escondió en su casa",
    ],
  },
  {
    id: 195,
    difficulty: "Fácil",
    question:
      "¿Qué profeta enfrentó a los profetas de Baal en el monte Carmelo?",
    category: antiguo,
    correct_answer: "Elías",
    incorrect_answers: ["Eliseo", "Samuel", "Natán"],
  },

  {
    id: 196,
    difficulty: "Medio",
    question:
      "¿Qué rey intentó matar a Elías después de que los profetas de Baal fueron derrotados en el monte Carmelo?",
    category: antiguo,
    correct_answer: "Acab",
    incorrect_answers: ["Salomón", "Jeroboam", "Jehú"],
  },
  {
    id: 197,
    difficulty: "Difícil",
    question: "¿Qué río se abrió cuando Elías golpeó el agua con su manto?",
    category: antiguo,
    correct_answer: "Río Jordán",
    incorrect_answers: ["Río Éufrates", "Río Nilo", "Río Tigris"],
  },
  {
    id: 198,
    difficulty: "Fácil",
    question: "¿Quién construyó el templo en Jerusalén?",
    category: antiguo,
    correct_answer: "Salomón",
    incorrect_answers: ["David", "Josías", "Ezequías"],
  },
  {
    id: 199,
    difficulty: "Medio",
    question: "¿Qué profeta fue llevado al cielo en un carro de fuego?",
    category: antiguo,
    correct_answer: "Elías",
    incorrect_answers: ["Enoc", "Eliseo", "Jeremías"],
  },
  {
    id: 200,
    difficulty: "Difícil",
    question:
      "¿Qué profeta multiplicó el aceite de una viuda para que ella y su hijo pudieran sobrevivir?",
    category: antiguo,
    correct_answer: "Eliseo",
    incorrect_answers: ["Elías", "Isaías", "Jeremías"],
  },
  {
    id: 201,
    difficulty: "Fácil",
    question: "¿Quién fue lanzado a un foso de leones por orar a Dios?",
    category: antiguo,
    correct_answer: "Daniel",
    incorrect_answers: ["Jeremías", "Ezequiel", "Isaías"],
  },
  {
    id: 202,
    difficulty: "Medio",
    question:
      "¿Qué rey de Babilonia vio una escritura en la pared durante un banquete?",
    category: antiguo,
    correct_answer: "Belsasar",
    incorrect_answers: ["Nabucodonosor", "Ciro", "Darío"],
  },
  {
    id: 203,
    difficulty: "Difícil",
    question:
      "¿Qué significaban las palabras 'Mene, Mene, Tekel, Parsin' en la escritura en la pared?",
    category: antiguo,
    correct_answer: "Tu reino ha sido pesado y dividido",
    incorrect_answers: [
      "Tendrás larga vida",
      "Serás prosperado",
      "Serás entregado a tus enemigos",
    ],
  },
  {
    id: 204,
    difficulty: "Fácil",
    question:
      "¿Qué líder condujo a los israelitas fuera de la esclavitud en Egipto?",
    category: antiguo,
    correct_answer: "Moisés",
    incorrect_answers: ["Josué", "Aarón", "José"],
  },
  {
    id: 205,
    difficulty: "Medio",
    question:
      "¿Qué mar se dividió para que los israelitas pudieran cruzar en seco?",
    category: antiguo,
    correct_answer: "Mar Rojo",
    incorrect_answers: ["Mar Muerto", "Mar Mediterráneo", "Mar de Galilea"],
  },
  {
    id: 206,
    difficulty: "Difícil",
    question: "¿Cuántos años vagaron los israelitas en el desierto?",
    category: antiguo,
    correct_answer: "40 años",
    incorrect_answers: ["20 años", "30 años", "50 años"],
  },
  {
    id: 207,
    difficulty: "Fácil",
    question:
      "¿Quién fue la mujer que salvó a los espías israelitas en Jericó?",
    category: antiguo,
    correct_answer: "Rahab",
    incorrect_answers: ["Débora", "Rut", "Abigail"],
  },
  {
    id: 208,
    difficulty: "Medio",
    question:
      "¿En qué ciudad se derrumbaron las murallas después de que los israelitas marcharon alrededor de ella?",
    category: antiguo,
    correct_answer: "Jericó",
    incorrect_answers: ["Betel", "China", "Hebrón"],
  },
  {
    id: 209,
    difficulty: "Difícil",
    question:
      "¿Quién tomó objetos de Jericó y causó la derrota de los israelitas en Ai?",
    category: antiguo,
    correct_answer: "Acán",
    incorrect_answers: ["Jefté", "Caleb", "Gedeón"],
  },
  {
    id: 210,
    difficulty: "Fácil",
    question: "¿Qué mujer moabita se convirtió en la bisabuela de David?",
    category: antiguo,
    correct_answer: "Rut",
    incorrect_answers: ["Naomi", "Orpá", "Débora"],
  },
  {
    id: 211,
    difficulty: "Medio",
    question: "¿Quién fue el pariente redentor que se casó con Rut?",
    category: antiguo,
    correct_answer: "Booz",
    incorrect_answers: ["Eli", "Samuel", "David"],
  },
  {
    id: 212,
    difficulty: "Difícil",
    question: "¿Qué hijo de Rut se convirtió en el abuelo de David?",
    category: antiguo,
    correct_answer: "Obed",
    incorrect_answers: ["Salomón", "Jese", "Samuel"],
  },
  {
    id: 213,
    difficulty: "Fácil",
    question:
      "¿Qué profeta fue llamado por Dios cuando era un niño viviendo con Elí?",
    category: antiguo,
    correct_answer: "Samuel",
    incorrect_answers: ["David", "Natán", "Elías"],
  },
  {
    id: 214,
    difficulty: "Medio",
    question: "¿Qué pecado cometieron los hijos de Elí que causó su muerte?",
    category: antiguo,
    correct_answer: "Profanaron los sacrificios",
    incorrect_answers: [
      "Robaron del templo",
      "Adoraron ídolos",
      "Mintieron al pueblo",
    ],
  },
  {
    id: 215,
    difficulty: "Difícil",
    question: "¿Qué palabra de juicio fue pronunciada sobre la casa de Elí?",
    category: antiguo,
    correct_answer: "Sería destruida",
    incorrect_answers: ["Sería exiliada", "Sería bendecida", "Sería olvidada"],
  },
  {
    id: 216,
    difficulty: "Fácil",
    question: "¿Qué gigante filisteo fue derrotado por David?",
    category: antiguo,
    correct_answer: "Goliat",
    incorrect_answers: ["Samsón", "Aod", "Barac"],
  },
  {
    id: 217,
    difficulty: "Medio",
    question: "¿Con qué arma derrotó David a Goliat?",
    category: antiguo,
    correct_answer: "Una honda y una piedra",
    incorrect_answers: ["Una espada", "Un arco y flecha", "Una lanza"],
  },
  {
    id: 218,
    difficulty: "Difícil",
    question:
      "¿Quién fue el hermano mayor de David que se ofendió cuando David llegó al campo de batalla?",
    category: antiguo,
    correct_answer: "Eliab",
    incorrect_answers: ["Abinadab", "Saúl", "Jonatán"],
  },
  {
    id: 219,
    difficulty: "Fácil",
    question: "¿Qué instrumento tocaba David para calmar al rey Saúl?",
    category: antiguo,
    correct_answer: "El arpa",
    incorrect_answers: ["La flauta", "El tambor", "El laúd"],
  },
  {
    id: 220,
    difficulty: "Medio",
    question: "¿Qué amigo fiel ayudó a David a escapar de la ira de Saúl?",
    category: antiguo,
    correct_answer: "Jonatán",
    incorrect_answers: ["Abner", "Saúl", "Natán"],
  },
  {
    id: 221,
    difficulty: "Difícil",
    question: "¿Dónde se refugió David cuando huyó de Saúl?",
    category: antiguo,
    correct_answer: "En el desierto de En-gadi",
    incorrect_answers: [
      "En el desierto de Zin",
      "En el monte Hermón",
      "En el valle de Jezreel",
    ],
  },
  {
    id: 222,
    difficulty: "Fácil",
    question:
      "¿Quién fue el hijo de Saúl que fue hecho rey por un corto tiempo después de la muerte de Saúl?",
    category: antiguo,
    correct_answer: "Is-boset",
    incorrect_answers: ["Jonatán", "Abinadab", "Mefiboset"],
  },
  {
    id: 223,
    difficulty: "Medio",
    question: "¿Qué hizo David cuando fue ungido rey sobre todo Israel?",
    category: antiguo,
    correct_answer: "Conquistó Jerusalén",
    incorrect_answers: [
      "Destruyó a los filisteos",
      "Reedificó Jericó",
      "Construyó un nuevo templo",
    ],
  },
  {
    id: 224,
    difficulty: "Difícil",
    question: "¿Qué profeta confrontó a David por su pecado con Betsabé?",
    category: antiguo,
    correct_answer: "Natán",
    incorrect_answers: ["Samuel", "Elías", "Isaías"],
  },
  {
    id: 225,
    difficulty: "Fácil",
    question: "¿Qué hizo Salomón para que la reina de Saba lo visitara?",
    category: antiguo,
    correct_answer: "Su fama por la sabiduría",
    incorrect_answers: ["Su riqueza", "Sus conquistas", "Sus edificaciones"],
  },
  {
    id: 226,
    difficulty: "Medio",
    question: "¿Cuántos proverbios escribió Salomón?",
    category: antiguo,
    correct_answer: "Más de 3,000",
    incorrect_answers: ["1,000", "500", "100"],
  },
  {
    id: 227,
    difficulty: "Difícil",
    question: "¿Quién era la madre de Salomón?",
    category: antiguo,
    correct_answer: "Betsabé",
    incorrect_answers: ["Abigail", "Migdal", "Raquel"],
  },
  {
    id: 228,
    difficulty: "Fácil",
    question:
      "¿Qué profeta desafió a los profetas de Baal en el monte Carmelo?",
    category: antiguo,
    correct_answer: "Elías",
    incorrect_answers: ["Isaías", "Jeremías", "Ezequiel"],
  },
  {
    id: 229,
    difficulty: "Medio",
    question: "¿Qué rey se casó con Jezabel, una mujer idólatra?",
    category: antiguo,
    correct_answer: "Acab",
    incorrect_answers: ["David", "Salomón", "Jeroboam"],
  },
  {
    id: 230,
    difficulty: "Difícil",
    question:
      "¿Qué río se secó cuando Elías dijo que no llovería por varios años?",
    category: antiguo,
    correct_answer: "Río de Querit",
    incorrect_answers: ["Río Jordán", "Río Éufrates", "Río Nilo"],
  },
  {
    id: 231,
    difficulty: "Fácil",
    question:
      "¿Quién fue el profeta que sucedió a Elías y pidió una doble porción de su espíritu?",
    category: antiguo,
    correct_answer: "Eliseo",
    incorrect_answers: ["Jeremías", "Isaías", "Natán"],
  },
  {
    id: 232,
    difficulty: "Medio",
    question: "¿Qué milagro realizó Eliseo con el aceite de una viuda?",
    category: antiguo,
    correct_answer: "Multiplicó el aceite",
    incorrect_answers: [
      "Transformó agua en aceite",
      "Curó a un enfermo",
      "Resucitó a un muerto",
    ],
  },
  {
    id: 233,
    difficulty: "Difícil",
    question: "¿Qué profeta vio una visión del valle de huesos secos?",
    category: antiguo,
    correct_answer: "Ezequiel",
    incorrect_answers: ["Daniel", "Isaías", "Jeremías"],
  },
  {
    id: 234,
    difficulty: "Fácil",
    question: "¿Qué profeta fue llamado a predicar a Nínive?",
    category: antiguo,
    correct_answer: "Jonás",
    incorrect_answers: ["Isaías", "Jeremías", "Ezequiel"],
  },
  {
    id: 235,
    difficulty: "Medio",
    question: "¿Qué hizo Jonás cuando Dios le dijo que fuera a Nínive?",
    category: antiguo,
    correct_answer: "Huyó a Tarsis",
    incorrect_answers: ["Fue de inmediato", "Se escondió", "Oró por dirección"],
  },
  {
    id: 236,
    difficulty: "Difícil",
    question:
      "¿Qué ciudad grande e idólatra se arrepintió después de escuchar la predicación de Jonás?",
    category: antiguo,
    correct_answer: "Nínive",
    incorrect_answers: ["Tarso", "Babilonia", "Jericó"],
  },
  {
    id: 237,
    difficulty: "Fácil",
    question: "¿Quién fue la reina que salvó a su pueblo del exterminio?",
    category: antiguo,
    correct_answer: "Ester",
    incorrect_answers: ["Débora", "Rut", "Naomi"],
  },
  {
    id: 238,
    difficulty: "Medio",
    question:
      "¿Qué rey persa permitió a los judíos regresar a Jerusalén para reconstruir el templo?",
    category: antiguo,
    correct_answer: "Ciro",
    incorrect_answers: ["Artajerjes", "Darío", "Belsasar"],
  },
  {
    id: 239,
    difficulty: "Difícil",
    question:
      "¿Quién fue el enemigo de los judíos que intentó destruirlos durante el tiempo de Ester?",
    category: antiguo,
    correct_answer: "Hamán",
    incorrect_answers: ["Nabucodonosor", "Amán", "Sambalat"],
  },
  {
    id: 240,
    difficulty: "Fácil",
    question: "¿Quién fue el líder que reconstruyó los muros de Jerusalén?",
    category: antiguo,
    correct_answer: "Nehemías",
    incorrect_answers: ["Esdras", "Zorobabel", "Josué"],
  },
  {
    id: 241,
    difficulty: "Medio",
    question: "¿Qué oficio tenía Nehemías antes de regresar a Jerusalén?",
    category: antiguo,
    correct_answer: "Copero del rey",
    incorrect_answers: ["Sacerdote", "Escriba", "Guerrero"],
  },
  {
    id: 242,
    difficulty: "Difícil",
    question:
      "¿Qué festival celebraron los judíos después de completar la reconstrucción de los muros de Jerusalén?",
    category: antiguo,
    correct_answer: "La fiesta de los tabernáculos",
    incorrect_answers: [
      "La Pascua",
      "El Día de la Expiación",
      "La fiesta de las primicias",
    ],
  },
  {
    id: 243,
    difficulty: "Fácil",
    question:
      "¿Quién es conocido como el padre de la fe y fue llamado por Dios para salir de Ur de los caldeos?",
    category: antiguo,
    correct_answer: "Abraham",
    incorrect_answers: ["Isaac", "Jacob", "José"],
  },
  {
    id: 244,
    difficulty: "Medio",
    question: "¿Qué prueba de fe enfrentó Abraham con su hijo Isaac?",
    category: antiguo,
    correct_answer: "Fue llamado a sacrificarlo",
    incorrect_answers: [
      "Fue llamado a enviarlo a Egipto",
      "Fue llamado a ofrecer sus riquezas",
      "Fue llamado a destruir su casa",
    ],
  },
  {
    id: 245,
    difficulty: "Difícil",
    question: "¿Dónde fue ofrecido Isaac como sacrificio?",
    category: antiguo,
    correct_answer: "Monte Moriah",
    incorrect_answers: ["Monte Sinaí", "Monte Carmelo", "Monte Horeb"],
  },
  {
    id: 246,
    difficulty: "Fácil",
    question:
      "¿Qué profeta fue tragado por un gran pez cuando intentaba huir de Dios?",
    category: antiguo,
    correct_answer: "Jonás",
    incorrect_answers: ["Jeremías", "Ezequiel", "Isaías"],
  },
  {
    id: 247,
    difficulty: "Medio",
    question: "¿Cuántos días estuvo Jonás en el vientre del pez?",
    category: antiguo,
    correct_answer: "Tres días y tres noches",
    incorrect_answers: [
      "Un día y una noche",
      "Dos días y dos noches",
      "Cuatro días y cuatro noches",
    ],
  },
  {
    id: 248,
    difficulty: "Difícil",
    question: "¿Qué mensaje predicó Jonás a los habitantes de Nínive?",
    category: antiguo,
    correct_answer: "Arrepentíos, porque la ciudad será destruida",
    incorrect_answers: [
      "Dios os bendecirá",
      "Construid un templo",
      "Adorad al único Dios verdadero",
    ],
  },

  {
    id: 249,
    difficulty: "Fácil",
    question: "¿Quién fue el primer hombre creado por Dios?",
    category: antiguo,
    correct_answer: "Adán",
    incorrect_answers: ["Noé", "Abraham", "Moisés"],
  },
  {
    id: 250,
    difficulty: "Medio",
    question: "¿Qué fruta comió Eva en el Jardín del Edén?",
    category: antiguo,
    correct_answer: "Manzana",
    incorrect_answers: ["Pera", "Uva", "Naranja"],
  },
  {
    id: 251,
    difficulty: "Difícil",
    question:
      "¿Qué nombre recibió el arca que construyó Noé después del diluvio?",
    category: antiguo,
    correct_answer: "Arca de Noé",
    incorrect_answers: [
      "Arca de la Alianza",
      "Arca de Salomón",
      "Arca de Moisés",
    ],
  },
  {
    id: 252,
    difficulty: "Fácil",
    question:
      "¿Quién fue el hijo de Noé que se quedó en la tierra después del diluvio?",
    category: antiguo,
    correct_answer: "Sem",
    incorrect_answers: ["Cam", "Jafet", "Matusalén"],
  },
  {
    id: 253,
    difficulty: "Medio",
    question: "¿Qué nombre recibió la esposa de Noé después del diluvio?",
    category: antiguo,
    correct_answer: "No se menciona",
    incorrect_answers: ["Naamá", "Sara", "Rut"],
  },
  {
    id: 254,
    difficulty: "Difícil",
    question:
      "¿Qué nombre recibió la ciudad fundada por Nimrod después del diluvio?",
    category: antiguo,
    correct_answer: "Babel",
    incorrect_answers: ["Jerusalén", "Nínive", "Ur"],
  },
  {
    id: 255,
    difficulty: "Fácil",
    question: "¿Quién fue el padre de Isaac?",
    category: antiguo,
    correct_answer: "Abraham",
    incorrect_answers: ["Moisés", "Jacob", "Noé"],
  },
  {
    id: 256,
    difficulty: "Medio",
    question:
      "¿Qué nombre recibió la esposa de Isaac después de que Abraham la comprara?",
    category: antiguo,
    correct_answer: "Rebeca",
    incorrect_answers: ["Lea", "Raquel", "Sara"],
  },
  {
    id: 257,
    difficulty: "Difícil",
    question:
      "¿Qué nombre recibió la esposa de Jacob después de que Labán la cambió por un carnero?",
    category: antiguo,
    correct_answer: "Lea",
    incorrect_answers: ["Raquel", "Betsabé", "Rebeca"],
  },
  {
    id: 258,
    difficulty: "Fácil",
    question: "¿Quién fue el hermano gemelo de Esaú?",
    category: antiguo,
    correct_answer: "Jacob",
    incorrect_answers: ["José", "Benjamín", "Rubén"],
  },
  {
    id: 259,
    difficulty: "Medio",
    question:
      "¿Qué nombre recibió la esposa de Jacob después de que Labán la cambió por un carnero?",
    category: antiguo,
    correct_answer: "Raquel",
    incorrect_answers: ["Lea", "Betsabé", "Rebeca"],
  },
  {
    id: 260,
    difficulty: "Difícil",
    question:
      "¿Qué nombre recibió el hijo de Jacob y Raquel después de que Jacob la cambió por un carnero?",
    category: antiguo,
    correct_answer: "José",
    incorrect_answers: ["Benjamín", "Rubén", "Leví"],
  },
  {
    id: 261,
    difficulty: "Fácil",
    question:
      "¿Quién fue el hijo de Jacob que fue vendido como esclavo en Egipto?",
    category: antiguo,
    correct_answer: "José",
    incorrect_answers: ["Benjamín", "Rubén", "Leví"],
  },
  {
    id: 262,
    difficulty: "Medio",
    question:
      "¿Qué nombre recibió la esposa de José después de que él la comprara?",
    category: antiguo,
    correct_answer: "Asenath",
    incorrect_answers: ["Betsabé", "Rebeca", "Raquel"],
  },
  {
    id: 263,
    difficulty: "Difícil",
    question:
      "¿Qué nombre recibió el hijo de José y Asenath después de que él la comprara?",
    category: antiguo,
    correct_answer: "Manasés",
    incorrect_answers: ["Efraín", "Rubén", "Leví"],
  },
  {
    id: 264,
    difficulty: "Fácil",
    question:
      "¿Quién fue el hijo de José que fue vendido como esclavo en Egipto?",
    category: antiguo,
    correct_answer: "José",
    incorrect_answers: ["Benjamín", "Rubén", "Leví"],
  },
  {
    id: 265,
    difficulty: "Medio",
    question:
      "¿Qué nombre recibió la esposa de José después de que él la comprara?",
    category: antiguo,
    correct_answer: "Asenath",
    incorrect_answers: ["Betsabé", "Rebeca", "Raquel"],
  },
  {
    id: 266,
    difficulty: "Difícil",
    question:
      "¿Qué nombre recibió el hijo de José y Asenath después de que él la comprara?",
    category: antiguo,
    correct_answer: "Manasés",
    incorrect_answers: ["Efraín", "Rubén", "Leví"],
  },
  {
    id: 267,
    difficulty: "Fácil",
    question:
      "¿Quién fue el hijo de José que fue vendido como esclavo en Egipto?",
    category: antiguo,
    correct_answer: "José",
    incorrect_answers: ["Benjamín", "Rubén", "Leví"],
  },
  {
    id: 268,
    difficulty: "Medio",
    question:
      "¿Qué nombre recibió la esposa de José después de que él la comprara?",
    category: antiguo,
    correct_answer: "Asenath",
    incorrect_answers: ["Betsabé", "Rebeca", "Raquel"],
  },
  {
    id: 269,
    difficulty: "Difícil",
    question:
      "¿Qué nombre recibió el hijo de José y Asenath después de que él la comprara?",
    category: antiguo,
    correct_answer: "Manasés",
    incorrect_answers: ["Efraín", "Rubén", "Leví"],
  },
  {
    id: 270,
    difficulty: "Fácil",
    question:
      "¿Quién fue el hijo de José que fue vendido como esclavo en Egipto?",
    category: antiguo,
    correct_answer: "José",
    incorrect_answers: ["Benjamín", "Rubén", "Leví"],
  },
  {
    id: 271,
    difficulty: "Medio",
    question:
      "¿Qué nombre recibió la esposa de José después de que él la comprara?",
    category: antiguo,
    correct_answer: "Asenath",
    incorrect_answers: ["Betsabé", "Rebeca", "Raquel"],
  },
  {
    id: 272,
    difficulty: "Difícil",
    question:
      "¿Qué nombre recibió el hijo de José y Asenath después de que él la comprara?",
    category: antiguo,
    correct_answer: "Manasés",
    incorrect_answers: ["Efraín", "Rubén", "Leví"],
  },
  {
    id: 273,
    difficulty: "Fácil",
    question:
      "¿Quién fue el hijo de José que fue vendido como esclavo en Egipto?",
    category: antiguo,
    correct_answer: "José",
    incorrect_answers: ["Benjamín", "Rubén", "Leví"],
  },
  {
    id: 274,
    difficulty: "Medio",
    question:
      "¿Qué nombre recibió la esposa de José después de que él la comprara?",
    category: antiguo,
    correct_answer: "Asenath",
    incorrect_answers: ["Betsabé", "Rebeca", "Raquel"],
  },
  {
    id: 275,
    difficulty: "Difícil",
    question: "¿Qué profeta fue llevado al cielo en un carro de fuego?",
    category: "antiguo",
    correct_answer: "Elías",
    incorrect_answers: ["Enoc", "Moisés", "Jeremías"],
  },
  {
    id: 276,
    difficulty: "Medio",
    question:
      "¿Cuál fue el primer milagro realizado por Eliseo después de recibir el manto de Elías?",
    category: "antiguo",
    correct_answer: "Dividir el río Jordán",
    incorrect_answers: [
      "Sanar a un ciego",
      "Resucitar a un niño",
      "Multiplicar el aceite de una viuda",
    ],
  },
  {
    id: 277,
    difficulty: "Medio",
    question:
      "¿Qué nombre recibió la esposa de José después de que él la comprara?",
    category: antiguo,
    correct_answer: "Asenath",
    incorrect_answers: ["Betsabé", "Rebeca", "Raquel"],
  },
  {
    id: 278,
    difficulty: "Difícil",
    question:
      "¿Qué nombre recibió el hijo de José y Asenath después de que él la comprara?",
    category: antiguo,
    correct_answer: "Manasés",
    incorrect_answers: ["Efraín", "Rubén", "Leví"],
  },

  /* Nuevo testamento */

  {
    id: 350,
    difficulty: "Fácil",
    question: "¿Quién anunció el nacimiento de Jesús a María?",
    category: nuevo,
    correct_answer: "El ángel Gabriel",
    incorrect_answers: ["El ángel Miguel", "El ángel Rafael", "El ángel Uriel"],
  },
  {
    id: 351,
    difficulty: "Medio",
    question: "¿En qué ciudad nació Jesús?",
    category: nuevo,
    correct_answer: "Belén",
    incorrect_answers: ["Nazaret", "Jerusalén", "Capernaum"],
  },
  {
    id: 352,
    difficulty: "Difícil",
    question: "¿Qué regalo de los reyes magos simboliza la realeza de Jesús?",
    category: nuevo,
    correct_answer: "Oro",
    incorrect_answers: ["Incienso", "Mirra", "Especias"],
  },
  {
    id: 353,
    difficulty: "Fácil",
    question: "¿Quién bautizó a Jesús en el río Jordán?",
    category: nuevo,
    correct_answer: "Juan el Bautista",
    incorrect_answers: ["Pedro", "Santiago", "Felipe"],
  },
  {
    id: 354,
    difficulty: "Medio",
    question: "¿Qué voz se oyó del cielo cuando Jesús fue bautizado?",
    category: nuevo,
    correct_answer: "Este es mi Hijo amado, en quien me complazco",
    incorrect_answers: ["He aquí mi siervo", "Escúchalo", "Alabad al Señor"],
  },
  {
    id: 355,
    difficulty: "Difícil",
    question: "¿Quiénes fueron los primeros discípulos llamados por Jesús?",
    category: nuevo,
    correct_answer: "Pedro y Andrés",
    incorrect_answers: ["Juan y Santiago", "Mateo y Felipe", "Tomás y Judas"],
  },
  {
    id: 356,
    difficulty: "Fácil",
    question: "¿Cuál fue el primer milagro de Jesús?",
    category: nuevo,
    correct_answer: "Convertir el agua en vino",
    incorrect_answers: [
      "Curar al ciego",
      "Multiplicar los panes",
      "Resucitar a Lázaro",
    ],
  },
  {
    id: 357,
    difficulty: "Medio",
    question: "¿En qué ciudad realizó Jesús su primer milagro?",
    category: nuevo,
    correct_answer: "Caná de Galilea",
    incorrect_answers: ["Jericó", "Cafarnaúm", "Betania"],
  },
  {
    id: 358,
    difficulty: "Difícil",
    question: "¿Quiénes estaban presentes en la transfiguración de Jesús?",
    category: nuevo,
    correct_answer: "Pedro, Santiago y Juan",
    incorrect_answers: [
      "Pedro, Andrés y Juan",
      "Santiago, Felipe y Juan",
      "Pedro, Tomás y Juan",
    ],
  },
  {
    id: 359,
    difficulty: "Fácil",
    question: "¿Qué multiplicó Jesús para alimentar a 5,000 hombres?",
    category: nuevo,
    correct_answer: "Pan y peces",
    incorrect_answers: ["Pan y vino", "Peces y miel", "Pan y carne"],
  },
  {
    id: 360,
    difficulty: "Medio",
    question:
      "¿Qué parábola contó Jesús para enseñar sobre el amor al prójimo?",
    category: nuevo,
    correct_answer: "El buen samaritano",
    incorrect_answers: ["El hijo pródigo", "El sembrador", "La oveja perdida"],
  },
  {
    id: 361,
    difficulty: "Difícil",
    question:
      "¿Cuántos días estuvo Jesús en el desierto siendo tentado por el diablo?",
    category: nuevo,
    correct_answer: "40 días",
    incorrect_answers: ["30 días", "20 días", "50 días"],
  },
  {
    id: 362,
    difficulty: "Fácil",
    question:
      "¿Qué mujer escuchó a Jesús mientras su hermana Marta estaba ocupada con los quehaceres?",
    category: nuevo,
    correct_answer: "María",
    incorrect_answers: ["Marta", "Magdalena", "Salomé"],
  },
  {
    id: 363,
    difficulty: "Medio",
    question: "¿Quién traicionó a Jesús por 30 monedas de plata?",
    category: nuevo,
    correct_answer: "Judas Iscariote",
    incorrect_answers: ["Pedro", "Tomás", "Felipe"],
  },
  {
    id: 364,
    difficulty: "Difícil",
    question: "¿Quién fue liberado en lugar de Jesús durante la Pascua?",
    category: nuevo,
    correct_answer: "Barrabás",
    incorrect_answers: ["Simón", "Lázaro", "Nicodemo"],
  },
  {
    id: 365,
    difficulty: "Fácil",
    question: "¿En qué lugar fue crucificado Jesús?",
    category: nuevo,
    correct_answer: "Gólgota",
    incorrect_answers: ["Getsemaní", "Belén", "Nazaret"],
  },
  {
    id: 366,
    difficulty: "Medio",
    question: "¿Qué mujer fue la primera en ver a Jesús resucitado?",
    category: nuevo,
    correct_answer: "María Magdalena",
    incorrect_answers: ["María, madre de Jesús", "Marta", "Salomé"],
  },
  {
    id: 367,
    difficulty: "Difícil",
    question:
      "¿Quién fue el discípulo que expresó dudas sobre la resurrección de Jesús hasta ver sus heridas?",
    category: "nuevo",
    correct_answer: "Tomás",
    incorrect_answers: ["Pedro", "Juan", "Mateo"],
  },
  {
    id: 368,
    difficulty: "Fácil",
    question:
      "¿Quién fue elegido para reemplazar a Judas Iscariote entre los doce apóstoles?",
    category: nuevo,
    correct_answer: "Matías",
    incorrect_answers: ["Pablo", "Bernabé", "Esteban"],
  },
  {
    id: 369,
    difficulty: "Medio",
    question: "¿Quién fue el primer mártir cristiano?",
    category: nuevo,
    correct_answer: "Esteban",
    incorrect_answers: ["Santiago", "Pedro", "Felipe"],
  },
  {
    id: 370,
    difficulty: "Difícil",
    question:
      "¿Quién fue el fariseo que defendió a los apóstoles ante el Sanedrín?",
    category: nuevo,
    correct_answer: "Gamaliel",
    incorrect_answers: ["Nicodemo", "Caiaphas", "Anás"],
  },
  {
    id: 371,
    difficulty: "Fácil",
    question: "¿Qué ocurrió en el día de Pentecostés?",
    category: nuevo,
    correct_answer: "El Espíritu Santo descendió sobre los apóstoles",
    incorrect_answers: [
      "Jesús ascendió al cielo",
      "Pedro fue arrestado",
      "Pablo se convirtió",
    ],
  },
  {
    id: 372,
    difficulty: "Medio",
    question: "¿Qué oficio tenía Saulo antes de su conversión?",
    category: nuevo,
    correct_answer: "Fariseo",
    incorrect_answers: ["Escriba", "Pescador", "Carpintero"],
  },
  {
    id: 373,
    difficulty: "Difícil",
    question:
      "¿Quién fue el primer gentil convertido al cristianismo por Pedro?",
    category: nuevo,
    correct_answer: "Cornelio",
    incorrect_answers: ["Félix", "Apolo", "Timoteo"],
  },
  {
    id: 374,
    difficulty: "Fácil",
    question: "¿En qué ciudad fue arrestado Pablo?",
    category: nuevo,
    correct_answer: "Jerusalén",
    incorrect_answers: ["Roma", "Corinto", "Atenas"],
  },
  {
    id: 375,
    difficulty: "Medio",
    question: "¿Qué predijo Agabo que sucedería en Jerusalén?",
    category: nuevo,
    correct_answer: "Una gran hambruna",
    incorrect_answers: ["Un terremoto", "Una plaga"],
  },

  {
    id: 376,
    difficulty: "Difícil",
    question:
      "¿Qué evangelista acompañó a Pablo en parte de sus viajes misioneros?",
    category: nuevo,
    correct_answer: "Lucas",
    incorrect_answers: ["Marcos", "Juan", "Mateo"],
  },
  {
    id: 377,
    difficulty: "Fácil",
    question:
      "¿Cuál fue el fruto del Espíritu mencionado por Pablo en su carta a los Gálatas?",
    category: nuevo,
    correct_answer: "Amor",
    incorrect_answers: ["Paciencia", "Bondad", "Alegría"],
  },
  {
    id: 378,
    difficulty: "Medio",
    question: "¿Quién escribió la carta a los Hebreos?",
    category: nuevo,
    correct_answer: "Anónimo",
    incorrect_answers: ["Pablo", "Pedro", "Juan"],
  },
  {
    id: 379,
    difficulty: "Difícil",
    question:
      "¿Qué profeta del Antiguo Testamento predijo que el Mesías sería llamado Nazareno?",
    category: nuevo,
    correct_answer: "Ninguno",
    incorrect_answers: ["Isaías", "Jeremías", "Ezequiel"],
  },
  {
    id: 380,
    difficulty: "Fácil",
    question:
      "¿Cuál de los apóstoles negó a Jesús tres veces antes de que cantara el gallo?",
    category: nuevo,
    correct_answer: "Pedro",
    incorrect_answers: ["Santiago", "Juan", "Andrés"],
  },
  {
    id: 381,
    difficulty: "Medio",
    question: "¿Qué apóstol fue conocido como el 'discípulo amado'?",
    category: nuevo,
    correct_answer: "Juan",
    incorrect_answers: ["Pedro", "Santiago", "Andrés"],
  },
  {
    id: 382,
    difficulty: "Difícil",
    question: "¿Qué apóstol escribió la mayor parte del Nuevo Testamento?",
    category: nuevo,
    correct_answer: "Pablo",
    incorrect_answers: ["Pedro", "Juan", "Santiago"],
  },
  {
    id: 383,
    difficulty: "Fácil",
    question:
      "¿Qué ciudad estaba destinada a ser el lugar de la segunda venida de Jesucristo según el Apocalipsis?",
    category: nuevo,
    correct_answer: "Jerusalén",
    incorrect_answers: ["Roma", "Babilonia", "Atenas"],
  },
  {
    id: 384,
    difficulty: "Medio",
    question: "¿Qué apóstol escribió las cartas a las siete iglesias de Asia?",
    category: nuevo,
    correct_answer: "Juan",
    incorrect_answers: ["Pablo", "Pedro", "Santiago"],
  },
  {
    id: 385,
    difficulty: "Difícil",
    question: "¿Qué número representa la bestia en el libro del Apocalipsis?",
    category: nuevo,
    correct_answer: "666",
    incorrect_answers: ["777", "555", "888"],
  },
  {
    id: 386,
    difficulty: "Fácil",
    question:
      "¿Qué nombre recibió el discípulo que dudó de la resurrección de Jesús hasta que lo vio?",
    category: nuevo,
    correct_answer: "Tomás",
    incorrect_answers: ["Andrés", "Felipe", "Santiago"],
  },
  {
    id: 387,
    difficulty: "Medio",
    question: "¿Qué apóstol escribió las cartas a Timoteo y Tito?",
    category: nuevo,
    correct_answer: "Pablo",
    incorrect_answers: ["Pedro", "Juan", "Santiago"],
  },
  {
    id: 388,
    difficulty: "Difícil",
    question:
      "¿Quién fue el primer mártir cristiano mencionado en el libro de los Hechos?",
    category: nuevo,
    correct_answer: "Esteban",
    incorrect_answers: ["Santiago", "Pedro", "Pablo"],
  },
  {
    id: 389,
    difficulty: "Fácil",
    question: "¿Qué apóstol fue conocido como 'el lector'?",
    category: nuevo,
    correct_answer: "Felipe",
    incorrect_answers: ["Pedro", "Andrés", "Santiago"],
  },
  {
    id: 390,
    difficulty: "Medio",
    question:
      "¿Qué apóstol era un recaudador de impuestos antes de seguir a Jesús?",
    category: nuevo,
    correct_answer: "Mateo",
    incorrect_answers: ["Judas", "Simón", "Tadeo"],
  },
  {
    id: 391,
    difficulty: "Difícil",
    question: "¿Qué apóstol fue apodado 'el Zelote'?",
    category: nuevo,
    correct_answer: "Simón",
    incorrect_answers: ["Juan", "Andrés", "Pedro"],
  },
  {
    id: 392,
    difficulty: "Fácil",
    question: "¿Qué apóstol era pescador antes de seguir a Jesús?",
    category: nuevo,
    correct_answer: "Pedro",
    incorrect_answers: ["Juan", "Andrés", "Santiago"],
  },
  {
    id: 393,
    difficulty: "Medio",
    question: "¿Quién traicionó a Jesús con un beso?",
    category: nuevo,
    correct_answer: "Judas Iscariote",
    incorrect_answers: ["Pedro", "Santiago", "Juan"],
  },
  {
    id: 394,
    difficulty: "Difícil",
    question:
      "¿En qué libro del Nuevo Testamento se encuentra el Sermón del Monte?",
    category: nuevo,
    correct_answer: "Mateo",
    incorrect_answers: ["Lucas", "Juan", "Marcos"],
  },
  {
    id: 395,
    difficulty: "Fácil",
    question: "¿Cuál de los discípulos era conocido como 'el que fue a ver'?",
    category: nuevo,
    correct_answer: "Andrés",
    incorrect_answers: ["Pedro", "Juan", "Felipe"],
  },
  {
    id: 396,
    difficulty: "Medio",
    question: "¿Qué apóstol escribió la carta a Filemón?",
    category: nuevo,
    correct_answer: "Pablo",
    incorrect_answers: ["Pedro", "Juan", "Santiago"],
  },
  {
    id: 397,
    difficulty: "Difícil",
    question: "¿Quién fue el primer gentil convertido al cristianismo?",
    category: nuevo,
    correct_answer: "Cornelio",
    incorrect_answers: ["Apolo", "Timoteo", "Bernabé"],
  },
  {
    id: 398,
    difficulty: "Fácil",
    question:
      "¿Cuál de los discípulos era conocido como 'el primero en ser llamado'?",
    category: nuevo,
    correct_answer: "Juan",
    incorrect_answers: ["Pedro", "Andrés", "Felipe"],
  },
  {
    id: 399,
    difficulty: "Medio",
    question: "¿Qué apóstol escribió las cartas a los Gálatas y a los Efesios?",
    category: nuevo,
    correct_answer: "Pablo",
    incorrect_answers: ["Pedro", "Juan", "Santiago"],
  },
  {
    id: 400,
    difficulty: "Difícil",
    question: "¿Cuántos evangelios hay en el Nuevo Testamento?",
    category: nuevo,
    correct_answer: "Cuatro",
    incorrect_answers: ["Tres", "Cinco", "Seis"],
  },

  {
    id: 401,
    difficulty: "Fácil",
    question: "¿Quién fue el primer apóstol en ver a Jesús resucitado?",
    category: nuevo,
    correct_answer: "Pedro",
    incorrect_answers: ["Juan", "Tomás", "Mateo"],
  },
  {
    id: 402,
    difficulty: "Medio",
    question:
      "¿Qué nombre recibió la ciudad de Éfeso después de que Pablo predicara allí?",
    category: nuevo,
    correct_answer: "La ciudad de la luz",
    incorrect_answers: [
      "La ciudad de la fe",
      "La ciudad de la esperanza",
      "La ciudad de la verdad",
    ],
  },
  {
    id: 403,
    difficulty: "Difícil",
    question:
      "¿Qué evento marcó el inicio de la persecución de los cristianos en Jerusalén?",
    category: nuevo,
    correct_answer: "La muerte de Esteban",
    incorrect_answers: [
      "La crucifixión de Jesús",
      "El arresto de Pablo",
      "El martirio de Pedro",
    ],
  },
  {
    id: 404,
    difficulty: "Fácil",
    question: "¿Quién fue el apóstol que caminó sobre el agua?",
    category: nuevo,
    correct_answer: "Pedro",
    incorrect_answers: ["Juan", "Andrés", "Santiago"],
  },
  {
    id: 405,
    difficulty: "Medio",
    question:
      "¿Qué nombre recibió la ciudad de Corinto después de que Pablo predicara allí?",
    category: nuevo,
    correct_answer: "La ciudad de la cruz",
    incorrect_answers: [
      "La ciudad de la fe",
      "La ciudad de la esperanza",
      "La ciudad de la verdad",
    ],
  },
  {
    id: 406,
    difficulty: "Difícil",
    question: "¿Qué evento marcó el inicio de la misión misionera de Pablo?",
    category: nuevo,
    correct_answer: "La conversión en el camino a Damasco",
    incorrect_answers: [
      "La ascensión de Jesús",
      "El día de Pentecostés",
      "La muerte de Esteban",
    ],
  },
  {
    id: 407,
    difficulty: "Fácil",
    question: "¿Quién fue el apóstol que escribió el libro de Apocalipsis?",
    category: nuevo,
    correct_answer: "Juan",
    incorrect_answers: ["Pablo", "Pedro", "Mateo"],
  },
  {
    id: 408,
    difficulty: "Medio",
    question:
      "¿Qué nombre recibió la ciudad de Filipos después de que Pablo predicara allí?",
    category: nuevo,
    correct_answer: "La ciudad de la gracia",
    incorrect_answers: [
      "La ciudad de la fe",
      "La ciudad de la esperanza",
      "La ciudad de la verdad",
    ],
  },
  {
    id: 409,
    difficulty: "Difícil",
    question:
      "¿Qué evento marcó el inicio de la persecución de los cristianos en Roma?",
    category: nuevo,
    correct_answer: "El incendio de Roma",
    incorrect_answers: [
      "La crucifixión de Jesús",
      "El arresto de Pablo",
      "El martirio de Pedro",
    ],
  },
  {
    id: 410,
    difficulty: "Fácil",
    question:
      "¿Quién fue el apóstol que fue apresado en una olla de aceite hirviendo?",
    category: nuevo,
    correct_answer: "Esteban",
    incorrect_answers: ["Pedro", "Juan", "Mateo"],
  },
  {
    id: 411,
    difficulty: "Medio",
    question:
      "¿Qué nombre recibió la ciudad de Tesalónica después de que Pablo predicara allí?",
    category: nuevo,
    correct_answer: "La ciudad de la fe",
    incorrect_answers: [
      "La ciudad de la luz",
      "La ciudad de la esperanza",
      "La ciudad de la verdad",
    ],
  },
  {
    id: 412,
    difficulty: "Difícil",
    question: "¿Qué evento marcó el inicio de la misión misionera de Bernabé?",
    category: nuevo,
    correct_answer: "La conversión de Saulo",
    incorrect_answers: [
      "La ascensión de Jesús",
      "El día de Pentecostés",
      "La muerte de Esteban",
    ],
  },
  {
    id: 413,
    difficulty: "Fácil",
    question: "¿Quién fue el apóstol que escribió el libro de Juan?",
    category: nuevo,
    correct_answer: "Juan",
    incorrect_answers: ["Pablo", "Pedro", "Mateo"],
  },
  {
    id: 414,
    difficulty: "Medio",
    question:
      "¿Qué nombre recibió la ciudad de Éfeso después de que Pablo predicara allí?",
    category: nuevo,
    correct_answer: "La ciudad de la luz",
    incorrect_answers: [
      "La ciudad de la fe",
      "La ciudad de la esperanza",
      "La ciudad de la verdad",
    ],
  },
  {
    id: 415,
    difficulty: "Difícil",
    question:
      "¿Qué evento marcó el inicio de la persecución de los cristianos en Jerusalén?",
    category: nuevo,
    correct_answer: "La muerte de Esteban",
    incorrect_answers: [
      "La crucifixión de Jesús",
      "El arresto de Pablo",
      "El martirio de Pedro",
    ],
  },
  {
    id: 416,
    difficulty: "Fácil",
    question: "¿Quién fue el apóstol que caminó sobre el agua?",
    category: nuevo,
    correct_answer: "Pedro",
    incorrect_answers: ["Juan", "Andrés", "Santiago"],
  },
  {
    id: 417,
    difficulty: "Medio",
    question:
      "¿Qué nombre recibió la ciudad de Corinto después de que Pablo predicara allí?",
    category: nuevo,
    correct_answer: "La ciudad de la cruz",
    incorrect_answers: [
      "La ciudad de la fe",
      "La ciudad de la esperanza",
      "La ciudad de la verdad",
    ],
  },
  {
    id: 418,
    difficulty: "Difícil",
    question: "¿Qué evento marcó el inicio de la misión misionera de Pablo?",
    category: nuevo,
    correct_answer: "La conversión en el camino a Damasco",
    incorrect_answers: [
      "La ascensión de Jesús",
      "El día de Pentecostés",
      "La muerte de Esteban",
    ],
  },
  {
    id: 419,
    difficulty: "Fácil",
    question: "¿Quién fue el apóstol que escribió el libro de Apocalipsis?",
    category: nuevo,
    correct_answer: "Juan",
    incorrect_answers: ["Pablo", "Pedro", "Mateo"],
  },
  {
    id: 420,
    difficulty: "Medio",
    question:
      "¿Qué nombre recibió la ciudad de Filipos después de que Pablo predicara allí?",
    category: nuevo,
    correct_answer: "La ciudad de la gracia",
    incorrect_answers: [
      "La ciudad de la fe",
      "La ciudad de la esperanza",
      "La ciudad de la verdad",
    ],
  },
  {
    id: 421,
    difficulty: "Difícil",
    question:
      "¿Qué evento marcó el inicio de la persecución de los cristianos en Roma?",
    category: nuevo,
    correct_answer: "El incendio de Roma",
    incorrect_answers: [
      "La crucifixión de Jesús",
      "El arresto de Pablo",
      "El martirio de Pedro",
    ],
  },
  {
    id: 422,
    difficulty: "Fácil",
    question:
      "¿Quién fue el apóstol que fue apresado en una olla de aceite hirviendo?",
    category: nuevo,
    correct_answer: "Esteban",
    incorrect_answers: ["Pedro", "Juan", "Mateo"],
  },
  {
    id: 423,
    difficulty: "Medio",
    question:
      "¿Qué nombre recibió la ciudad de Tesalónica después de que Pablo predicara allí?",
    category: nuevo,
    correct_answer: "La ciudad de la fe",
    incorrect_answers: [
      "La ciudad de la luz",
      "La ciudad de la esperanza",
      "La ciudad de la verdad",
    ],
  },
  {
    id: 424,
    difficulty: "Difícil",
    question: "¿Qué evento marcó el inicio de la misión misionera de Bernabé?",
    category: nuevo,
    correct_answer: "La conversión de Saulo",
    incorrect_answers: [
      "La ascensión de Jesús",
      "El día de Pentecostés",
      "La muerte de Esteban",
    ],
  },
  {
    id: 425,
    difficulty: "Fácil",
    question: "¿Quién fue el apóstol que escribió el libro de Juan?",
    category: nuevo,
    correct_answer: "Juan",
    incorrect_answers: ["Pablo", "Pedro", "Mateo"],
  },
  {
    id: 426,
    difficulty: "Medio",
    question:
      "¿Qué nombre recibió la ciudad de Éfeso después de que Pablo predicara allí?",
    category: nuevo,
    correct_answer: "La ciudad de la luz",
    incorrect_answers: [
      "La ciudad de la fe",
      "La ciudad de la esperanza",
      "La ciudad de la verdad",
    ],
  },
  {
    id: 427,
    difficulty: "Difícil",
    question:
      "¿Qué evento marcó el inicio de la persecución de los cristianos en Jerusalén?",
    category: nuevo,
    correct_answer: "La muerte de Esteban",
    incorrect_answers: [
      "La crucifixión de Jesús",
      "El arresto de Pablo",
      "El martirio de Pedro",
    ],
  },
  {
    id: 428,
    difficulty: "Fácil",
    question: "¿Quién fue el apóstol que caminó sobre el agua?",
    category: nuevo,
    correct_answer: "Pedro",
    incorrect_answers: ["Juan", "Andrés", "Santiago"],
  },
  {
    id: 429,
    difficulty: "Medio",
    question:
      "¿Qué nombre recibió la ciudad de Corinto después de que Pablo predicara allí?",
    category: nuevo,
    correct_answer: "La ciudad de la cruz",
    incorrect_answers: [
      "La ciudad de la fe",
      "La ciudad de la esperanza",
      "La ciudad de la verdad",
    ],
  },
  {
    id: 430,
    difficulty: "Difícil",
    question: "¿Qué evento marcó el inicio de la misión misionera de Pablo?",
    category: nuevo,
    correct_answer: "La conversión en el camino a Damasco",
    incorrect_answers: [
      "La ascensión de Jesús",
      "El día de Pentecostés",
      "La muerte de Esteban",
    ],
  },
  {
    id: 431,
    difficulty: "Fácil",
    question: "¿Quién fue el apóstol que escribió el libro de Apocalipsis?",
    category: nuevo,
    correct_answer: "Juan",
    incorrect_answers: ["Pablo", "Pedro", "Mateo"],
  },
  {
    id: 432,
    difficulty: "Medio",
    question:
      "¿Qué nombre recibió la ciudad de Filipos después de que Pablo predicara allí?",
    category: nuevo,
    correct_answer: "La ciudad de la gracia",
    incorrect_answers: [
      "La ciudad de la fe",
      "La ciudad de la esperanza",
      "La ciudad de la verdad",
    ],
  },
  {
    id: 433,
    difficulty: "Difícil",
    question:
      "¿Qué evento marcó el inicio de la persecución de los cristianos en Roma?",
    category: nuevo,
    correct_answer: "El incendio de Roma",
    incorrect_answers: [
      "La crucifixión de Jesús",
      "El arresto de Pablo",
      "El martirio de Pedro",
    ],
  },
  {
    id: 434,
    difficulty: "Fácil",
    question:
      "¿Quién fue el apóstol que fue apresado en una olla de aceite hirviendo?",
    category: nuevo,
    correct_answer: "Esteban",
    incorrect_answers: ["Pedro", "Juan", "Mateo"],
  },
  {
    id: 435,
    difficulty: "Medio",
    question:
      "¿Qué nombre recibió la ciudad de Tesalónica después de que Pablo predicara allí?",
    category: nuevo,
    correct_answer: "La ciudad de la fe",
    incorrect_answers: [
      "La ciudad de la luz",
      "La ciudad de la esperanza",
      "La ciudad de la verdad",
    ],
  },
  {
    id: 436,
    difficulty: "Difícil",
    question: "¿Qué evento marcó el inicio de la misión misionera de Bernabé?",
    category: nuevo,
    correct_answer: "La conversión de Saulo",
    incorrect_answers: [
      "La ascensión de Jesús",
      "El día de Pentecostés",
      "La muerte de Esteban",
    ],
  },
  {
    id: 437,
    difficulty: "Fácil",
    question: "¿Quién fue el apóstol que escribió el libro de Juan?",
    category: nuevo,
    correct_answer: "Juan",
    incorrect_answers: ["Pablo", "Pedro", "Mateo"],
  },
  {
    id: 438,
    difficulty: "Medio",
    question:
      "¿Qué nombre recibió la ciudad de Éfeso después de que Pablo predicara allí?",
    category: nuevo,
    correct_answer: "La ciudad de la luz",
    incorrect_answers: [
      "La ciudad de la fe",
      "La ciudad de la esperanza",
      "La ciudad de la verdad",
    ],
  },
  {
    id: 439,
    difficulty: "Difícil",
    question:
      "¿Qué evento marcó el inicio de la persecución de los cristianos en Jerusalén?",
    category: nuevo,
    correct_answer: "La muerte de Esteban",
    incorrect_answers: [
      "La crucifixión de Jesús",
      "El arresto de Pablo",
      "El martirio de Pedro",
    ],
  },
  {
    id: 440,
    difficulty: "Fácil",
    question: "¿Quién fue el apóstol que caminó sobre el agua?",
    category: nuevo,
    correct_answer: "Pedro",
    incorrect_answers: ["Juan", "Andrés", "Santiago"],
  },

  /* Doctrina y convenios */

  {
    id: 501,
    difficulty: "Fácil",
    question:
      "¿Quién recibió las revelaciones que conforman el libro de Doctrina y Convenios?",
    category: doctrina,
    correct_answer: "Joseph Smith",
    incorrect_answers: ["Brigham Young", "John Taylor", "Thomas S. Monson"],
  },
  {
    id: 502,
    difficulty: "Medio",
    question:
      "¿En qué año fue organizada oficialmente La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: doctrina,
    correct_answer: "1830",
    incorrect_answers: ["1844", "1820", "1850"],
  },
  {
    id: 503,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios describe la Primera Visión de Joseph Smith?",
    category: "Doctrina SUD",
    correct_answer: "Sección 20",
    incorrect_answers: ["Sección 76", "Sección 1", "Sección 42"],
  },
  {
    id: 504,
    difficulty: "Fácil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la Palabra de Sabiduría?",
    category: doctrina,
    correct_answer: "Sección 89",
    incorrect_answers: ["Sección 121", "Sección 76", "Sección 107"],
  },
  {
    id: 505,
    difficulty: "Medio",
    question:
      "¿Quién fue el primer presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: doctrina,
    correct_answer: "Joseph Smith",
    incorrect_answers: ["Brigham Young", "John Taylor", "Thomas S. Monson"],
  },
  {
    id: 506,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre el matrimonio celestial?",
    category: doctrina,
    correct_answer: "Sección 132",
    incorrect_answers: ["Sección 121", "Sección 89", "Sección 107"],
  },
  {
    id: 507,
    difficulty: "Fácil",
    question:
      "¿Qué profecía sobre la Segunda Venida de Cristo se encuentra en Doctrina y Convenios?",
    category: doctrina,
    correct_answer: "Cristo vendrá a reinar en Jerusalén",
    incorrect_answers: [
      "Cristo vendrá en secreto",
      "Cristo no volverá",
      "Cristo vendrá en Roma",
    ],
  },
  {
    id: 508,
    difficulty: "Medio",
    question: "¿En qué ciudad fue asesinado Joseph Smith en 1844?",
    category: doctrina,
    correct_answer: "Carthage",
    incorrect_answers: ["Nauvoo", "Salt Lake City", "Independence"],
  },
  {
    id: 509,
    difficulty: "Difícil",
    question:
      "¿Cuál fue el propósito principal de la organización de La Iglesia de Jesucristo de los Santos de los Últimos Días según Doctrina y Convenios?",
    category: doctrina,
    correct_answer: "Preparar el camino para la Segunda Venida de Cristo",
    incorrect_answers: [
      "Establecer una nueva religión",
      "Crear una comunidad religiosa",
      "Promover la poligamia",
    ],
  },
  {
    id: 510,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza la importancia de la obediencia y la ley de consagración?",
    category: doctrina,
    correct_answer: "Sección 42",
    incorrect_answers: ["Sección 89", "Sección 20", "Sección 76"],
  },
  {
    id: 511,
    difficulty: "Medio",
    question:
      "¿Quién fue el sucesor inmediato de Joseph Smith como presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: doctrina,
    correct_answer: "Brigham Young",
    incorrect_answers: ["John Taylor", "Thomas S. Monson", "Wilford Woodruff"],
  },
  {
    id: 512,
    difficulty: "Difícil",
    question:
      "¿Qué revelación en Doctrina y Convenios establece la ley de consagración y el orden unido?",
    category: doctrina,
    correct_answer: "Sección 78",
    incorrect_answers: ["Sección 132", "Sección 107", "Sección 121"],
  },
  {
    id: 513,
    difficulty: "Fácil",
    question:
      "¿Qué sección de Doctrina y Convenios enfatiza la importancia del ayuno y la oración?",
    category: doctrina,
    correct_answer: "Sección 88",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 514,
    difficulty: "Medio",
    question:
      "¿En qué estado de Estados Unidos fue fundada La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: doctrina,
    correct_answer: "Nueva York",
    incorrect_answers: ["Utah", "Illinois", "Missouri"],
  },
  {
    id: 515,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios describe la revelación sobre la construcción del templo en Kirtland?",
    category: doctrina,
    correct_answer: "Sección 109",
    incorrect_answers: ["Sección 76", "Sección 1", "Sección 42"],
  },
  {
    id: 516,
    difficulty: "Fácil",
    question:
      "¿Qué sección de Doctrina y Convenios enfatiza el deber de buscar conocimiento por estudio y por fe?",
    category: doctrina,
    correct_answer: "Sección 88",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 517,
    difficulty: "Medio",
    question: "¿Quién fue la primera esposa de Joseph Smith?",
    category: doctrina,
    correct_answer: "Emma Smith",
    incorrect_answers: ["Lucy Mack Smith", "Eliza R. Snow", "Brigham Young"],
  },
  {
    id: 518,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la ley de castidad?",
    category: doctrina,
    correct_answer: "Sección 42",
    incorrect_answers: ["Sección 89", "Sección 20", "Sección 76"],
  },
  {
    id: 519,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios establece los principios de gobierno de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: doctrina,
    correct_answer: "Sección 107",
    incorrect_answers: ["Sección 89", "Sección 20", "Sección 76"],
  },
  {
    id: 520,
    difficulty: "Medio",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre el gobierno y la organización de la Iglesia?",
    category: doctrina,
    correct_answer: "Sección 20",
    incorrect_answers: ["Sección 76", "Sección 1", "Sección 42"],
  },

  {
    id: 521,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación conocida como 'La Gran Comisión'?",
    category: doctrina,
    correct_answer: "Sección 88",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 522,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios establece el principio del diezmo?",
    category: doctrina,
    correct_answer: "Sección 119",
    incorrect_answers: ["Sección 89", "Sección 107", "Sección 132"],
  },
  {
    id: 523,
    difficulty: "Medio",
    question:
      "¿Quién fue el primer presidente de la Sociedad de Socorro, organizada en Nauvoo según Doctrina y Convenios?",
    category: doctrina,
    correct_answer: "Emma Smith",
    incorrect_answers: ["Eliza R. Snow", "Lucy Mack Smith", "Brigham Young"],
  },
  {
    id: 524,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la fundación de la ciudad de Nauvoo?",
    category: doctrina,
    correct_answer: "Sección 124",
    incorrect_answers: ["Sección 89", "Sección 107", "Sección 132"],
  },
  {
    id: 525,
    difficulty: "Fácil",
    question:
      "¿Qué sección de Doctrina y Convenios enfatiza la importancia de la revelación personal y la guía del Espíritu Santo?",
    category: doctrina,
    correct_answer: "Sección 8",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 526,
    difficulty: "Medio",
    question:
      "¿Quién fue el líder de la expedición mormona a Utah, conocida como la Pionera?",
    category: doctrina,
    correct_answer: "Brigham Young",
    incorrect_answers: ["Joseph Smith", "John Taylor", "Wilford Woodruff"],
  },
  {
    id: 527,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la organización de la Escuela de los Profetas?",
    category: doctrina,
    correct_answer: "Sección 88",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 528,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza la importancia de la fe?",
    category: doctrina,
    correct_answer: "Sección 46",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 529,
    difficulty: "Medio",
    question:
      "¿Quién fue el primer gobernador de Utah, nombrado por el presidente James Buchanan?",
    category: doctrina,
    correct_answer: "Brigham Young",
    incorrect_answers: ["Joseph Smith", "John Taylor", "Wilford Woodruff"],
  },
  {
    id: 530,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre el gobierno y la disciplina de la Iglesia?",
    category: doctrina,
    correct_answer: "Sección 107",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 531,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enseña el principio de la unidad entre los miembros de la Iglesia?",
    category: doctrina,
    correct_answer: "Sección 38",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 532,
    difficulty: "Medio",
    question:
      "¿Quién fue el sucesor de Brigham Young como presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: doctrina,
    correct_answer: "John Taylor",
    incorrect_answers: ["Joseph Smith", "Brigham Young", "Wilford Woodruff"],
  },
  {
    id: 533,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre el perdón?",
    category: doctrina,
    correct_answer: "Sección 64",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 534,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza la importancia de la educación y el aprendizaje continuo?",
    category: doctrina,
    correct_answer: "Sección 88",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 535,
    difficulty: "Medio",
    question:
      "¿Quién fue el sucesor de John Taylor como presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: doctrina,
    correct_answer: "Wilford Woodruff",
    incorrect_answers: ["Joseph Smith", "Brigham Young", "John Taylor"],
  },
  {
    id: 536,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la ley de la Iglesia?",
    category: doctrina,
    correct_answer: "Sección 42",
    incorrect_answers: ["Sección 76", "Sección 20", "Sección 107"],
  },
  {
    id: 537,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza la importancia del arrepentimiento?",
    category: doctrina,
    correct_answer: "Sección 58",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 538,
    difficulty: "Medio",
    question:
      "¿Quién fue el sucesor de Wilford Woodruff como presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: doctrina,
    correct_answer: "Lorenzo Snow",
    incorrect_answers: ["Joseph Smith", "Brigham Young", "John Taylor"],
  },
  {
    id: 539,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la ley de consagración y el orden unido?",
    category: doctrina,
    correct_answer: "Sección 42",
    incorrect_answers: ["Sección 76", "Sección 20", "Sección 107"],
  },
  {
    id: 540,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enseña el principio del servicio y el amor hacia los demás?",
    category: doctrina,
    correct_answer: "Sección 42",
    incorrect_answers: ["Sección 76", "Sección 20", "Sección 107"],
  },
  {
    id: 541,
    difficulty: "Medio",
    question:
      "¿Quién fue el sucesor de Lorenzo Snow como presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: doctrina,
    correct_answer: "Joseph F. Smith",
    incorrect_answers: ["Joseph Smith", "Brigham Young", "John Taylor"],
  },
  {
    id: 542,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre los deberes de los obispos y el cuidado de los pobres?",
    category: doctrina,
    correct_answer: "Sección 107",
    incorrect_answers: ["Sección 76", "Sección 20", "Sección 42"],
  },
  {
    id: 543,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza la importancia de la oración personal y familiar?",
    category: doctrina,
    correct_answer: "Sección 68",
    incorrect_answers: ["Sección 76", "Sección 20", "Sección 107"],
  },
  {
    id: 544,
    difficulty: "Medio",
    question:
      "¿Quién fue el sucesor de Joseph F. Smith como presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: doctrina,
    correct_answer: "Heber J. Grant",
    incorrect_answers: ["Joseph Smith", "Brigham Young", "John Taylor"],
  },
  {
    id: 545,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre los deberes y las responsabilidades del quórum de los doce apóstoles?",
    category: doctrina,
    correct_answer: "Sección 107",
    incorrect_answers: ["Sección 76", "Sección 20", "Sección 42"],
  },
  {
    id: 546,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enseña el principio de la revelación continua?",
    category: doctrina,
    correct_answer: "Sección 1",
    incorrect_answers: ["Sección 76", "Sección 20", "Sección 107"],
  },
  {
    id: 547,
    difficulty: "Medio",
    question:
      "¿Quién fue el sucesor de Heber J. Grant como presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: doctrina,
    correct_answer: "George Albert Smith",
    incorrect_answers: ["Joseph Smith", "Brigham Young", "John Taylor"],
  },
  {
    id: 548,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la reorganización de la Primera Presidencia?",
    category: doctrina,
    correct_answer: "Sección 107",
    incorrect_answers: ["Sección 76", "Sección 20", "Sección 42"],
  },
  {
    id: 549,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza el principio de la caridad y el amor hacia todos los hombres?",
    category: doctrina,
    correct_answer: "Sección 88",
    incorrect_answers: ["Sección 76", "Sección 20", "Sección 107"],
  },
  {
    id: 550,
    difficulty: "Medio",
    question:
      "¿Quién fue el sucesor de George Albert Smith como presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: doctrina,
    correct_answer: "David O. McKay",
    incorrect_answers: ["Joseph Smith", "Brigham Young", "John Taylor"],
  },

  {
    id: 551,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la práctica del bautismo por los muertos?",
    category: doctrina,
    correct_answer: "Sección 124",
    incorrect_answers: ["Sección 76", "Sección 20", "Sección 107"],
  },
  {
    id: 552,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza el principio de la obediencia?",
    category: doctrina,
    correct_answer: "Sección 130",
    incorrect_answers: ["Sección 76", "Sección 20", "Sección 107"],
  },
  {
    id: 553,
    difficulty: "Medio",
    question:
      "¿Quién fue el sucesor de David O. McKay como presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: doctrina,
    correct_answer: "Joseph Fielding Smith",
    incorrect_answers: ["Joseph Smith", "Brigham Young", "John Taylor"],
  },
  {
    id: 554,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la palabra de sabiduría?",
    category: doctrina,
    correct_answer: "Sección 89",
    incorrect_answers: ["Sección 76", "Sección 20", "Sección 107"],
  },
  {
    id: 555,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza el principio del libre albedrío?",
    category: doctrina,
    correct_answer: "Sección 101",
    incorrect_answers: ["Sección 76", "Sección 20", "Sección 107"],
  },
  {
    id: 556,
    difficulty: "Medio",
    question:
      "¿Quién fue el sucesor de Joseph Fielding Smith como presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: doctrina,
    correct_answer: "Harold B. Lee",
    incorrect_answers: ["Joseph Smith", "Brigham Young", "John Taylor"],
  },
  {
    id: 557,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre el llamamiento y la elección de la Iglesia?",
    category: doctrina,
    correct_answer: "Sección 121",
    incorrect_answers: ["Sección 76", "Sección 20", "Sección 107"],
  },
  {
    id: 558,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza el principio del perdón?",
    category: doctrina,
    correct_answer: "Sección 64",
    incorrect_answers: ["Sección 76", "Sección 20", "Sección 107"],
  },
  {
    id: 559,
    difficulty: "Medio",
    question:
      "¿Quién fue el sucesor de Harold B. Lee como presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: doctrina,
    correct_answer: "Spencer W. Kimball",
    incorrect_answers: ["Joseph Smith", "Brigham Young", "John Taylor"],
  },
  {
    id: 560,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre el don de discernimiento?",
    category: doctrina,
    correct_answer: "Sección 46",
    incorrect_answers: ["Sección 76", "Sección 20", "Sección 107"],
  },
  {
    id: 561,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza el principio de la fe?",
    category: doctrina,
    correct_answer: "Sección 63",
    incorrect_answers: ["Sección 76", "Sección 20", "Sección 107"],
  },
  {
    id: 562,
    difficulty: "Medio",
    question:
      "¿Quién fue el sucesor de Spencer W. Kimball como presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: doctrina,
    correct_answer: "Ezra Taft Benson",
    incorrect_answers: ["Joseph Smith", "Brigham Young", "John Taylor"],
  },
  {
    id: 563,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre el sacerdocio de Melquisedec?",
    category: doctrina,
    correct_answer: "Sección 107",
    incorrect_answers: ["Sección 76", "Sección 20", "Sección 42"],
  },
  {
    id: 564,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza el principio del servicio?",
    category: doctrina,
    correct_answer: "Sección 42",
    incorrect_answers: ["Sección 76", "Sección 20", "Sección 107"],
  },
  {
    id: 565,
    difficulty: "Medio",
    question:
      "¿Quién fue el sucesor de Ezra Taft Benson como presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: doctrina,
    correct_answer: "Howard W. Hunter",
    incorrect_answers: ["Joseph Smith", "Brigham Young", "John Taylor"],
  },
  {
    id: 566,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la resurrección de los muertos?",
    category: doctrina,
    correct_answer: "Sección 76",
    incorrect_answers: ["Sección 20", "Sección 107", "Sección 89"],
  },
  {
    id: 567,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza el principio de la unidad?",
    category: doctrina,
    correct_answer: "Sección 38",
    incorrect_answers: ["Sección 76", "Sección 20", "Sección 107"],
  },
  {
    id: 568,
    difficulty: "Medio",
    question:
      "¿Quién fue el sucesor de Howard W. Hunter como presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: doctrina,
    correct_answer: "Gordon B. Hinckley",
    incorrect_answers: ["Joseph Smith", "Brigham Young", "John Taylor"],
  },
  {
    id: 569,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre el orden de la Iglesia y los deberes de los miembros?",
    category: doctrina,
    correct_answer: "Sección 20",
    incorrect_answers: ["Sección 76", "Sección 107", "Sección 42"],
  },
  {
    id: 570,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza el principio de la revelación personal?",
    category: doctrina,
    correct_answer: "Sección 9",
    incorrect_answers: ["Sección 76", "Sección 20", "Sección 107"],
  },

  {
    id: 571,
    difficulty: "Fácil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la organización de la Iglesia en Kirtland?",
    category: doctrina,
    correct_answer: "Sección 42",
    incorrect_answers: ["Sección 20", "Sección 107", "Sección 88"],
  },
  {
    id: 572,
    difficulty: "Medio",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza la importancia de la oración y la fe?",
    category: doctrina,
    correct_answer: "Sección 100",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 573,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la organización de la Escuela de los Profetas?",
    category: doctrina,
    correct_answer: "Sección 88",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 574,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enseña el principio de la obediencia a la ley de Dios?",
    category: doctrina,
    correct_answer: "Sección 59",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 575,
    difficulty: "Medio",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la organización de la Iglesia en Nauvoo?",
    category: doctrina,
    correct_answer: "Sección 124",
    incorrect_answers: ["Sección 89", "Sección 107", "Sección 132"],
  },
  {
    id: 576,
    difficulty: "Difícil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza la importancia de la oración y la fe?",
    category: doctrina,
    correct_answer: "Sección 100",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 577,
    difficulty: "Fácil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la organización de la Iglesia en Kirtland?",
    category: doctrina,
    correct_answer: "Sección 42",
    incorrect_answers: ["Sección 20", "Sección 107", "Sección 88"],
  },
  {
    id: 578,
    difficulty: "Medio",
    question:
      "¿Qué revelación en Doctrina y Convenios enseña el principio de la obediencia a la ley de Dios?",
    category: doctrina,
    correct_answer: "Sección 59",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 579,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la organización de la Escuela de los Profetas?",
    category: doctrina,
    correct_answer: "Sección 88",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 580,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza la importancia de la oración y la fe?",
    category: doctrina,
    correct_answer: "Sección 100",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 581,
    difficulty: "Medio",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la organización de la Iglesia en Nauvoo?",
    category: doctrina,
    correct_answer: "Sección 124",
    incorrect_answers: ["Sección 89", "Sección 107", "Sección 132"],
  },
  {
    id: 582,
    difficulty: "Difícil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza la importancia de la oración y la fe?",
    category: doctrina,
    correct_answer: "Sección 100",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 583,
    difficulty: "Fácil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la organización de la Iglesia en Kirtland?",
    category: doctrina,
    correct_answer: "Sección 42",
    incorrect_answers: ["Sección 20", "Sección 107", "Sección 88"],
  },
  {
    id: 584,
    difficulty: "Medio",
    question:
      "¿Qué revelación en Doctrina y Convenios enseña el principio de la obediencia a la ley de Dios?",
    category: doctrina,
    correct_answer: "Sección 59",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 585,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la organización de la Escuela de los Profetas?",
    category: doctrina,
    correct_answer: "Sección 88",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 586,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza la importancia de la oración y la fe?",
    category: doctrina,
    correct_answer: "Sección 100",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 587,
    difficulty: "Medio",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la organización de la Iglesia en Nauvoo?",
    category: doctrina,
    correct_answer: "Sección 124",
    incorrect_answers: ["Sección 89", "Sección 107", "Sección 132"],
  },
  {
    id: 588,
    difficulty: "Difícil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza la importancia de la oración y la fe?",
    category: doctrina,
    correct_answer: "Sección 100",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 589,
    difficulty: "Fácil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la organización de la Iglesia en Kirtland?",
    category: doctrina,
    correct_answer: "Sección 42",
    incorrect_answers: ["Sección 20", "Sección 107", "Sección 88"],
  },
  {
    id: 590,
    difficulty: "Medio",
    question:
      "¿Qué revelación en Doctrina y Convenios enseña el principio de la obediencia a la ley de Dios?",
    category: doctrina,
    correct_answer: "Sección 59",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 591,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la organización de la Escuela de los Profetas?",
    category: doctrina,
    correct_answer: "Sección 88",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 592,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza la importancia de la oración y la fe?",
    category: doctrina,
    correct_answer: "Sección 100",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 593,
    difficulty: "Medio",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la organización de la Iglesia en Nauvoo?",
    category: doctrina,
    correct_answer: "Sección 124",
    incorrect_answers: ["Sección 89", "Sección 107", "Sección 132"],
  },
  {
    id: 594,
    difficulty: "Difícil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza la importancia de la oración y la fe?",
    category: doctrina,
    correct_answer: "Sección 100",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 595,
    difficulty: "Fácil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la organización de la Iglesia en Kirtland?",
    category: doctrina,
    correct_answer: "Sección 42",
    incorrect_answers: ["Sección 20", "Sección 107", "Sección 88"],
  },
  {
    id: 596,
    difficulty: "Medio",
    question:
      "¿Qué revelación en Doctrina y Convenios enseña el principio de la obediencia a la ley de Dios?",
    category: doctrina,
    correct_answer: "Sección 59",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 597,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la organización de la Escuela de los Profetas?",
    category: doctrina,
    correct_answer: "Sección 88",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 598,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza la importancia de la oración y la fe?",
    category: doctrina,
    correct_answer: "Sección 100",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 599,
    difficulty: "Medio",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la organización de la Iglesia en Nauvoo?",
    category: doctrina,
    correct_answer: "Sección 124",
    incorrect_answers: ["Sección 89", "Sección 107", "Sección 132"],
  },
  {
    id: 600,
    difficulty: "Difícil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza la importancia de la oración y la fe?",
    category: doctrina,
    correct_answer: "Sección 100",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 601,
    difficulty: "Fácil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la organización de la Iglesia en Kirtland?",
    category: doctrina,
    correct_answer: "Sección 42",
    incorrect_answers: ["Sección 20", "Sección 107", "Sección 88"],
  },
  {
    id: 602,
    difficulty: "Medio",
    question:
      "¿Qué revelación en Doctrina y Convenios enseña el principio de la obediencia a la ley de Dios?",
    category: doctrina,
    correct_answer: "Sección 59",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 603,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la organización de la Escuela de los Profetas?",
    category: doctrina,
    correct_answer: "Sección 88",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 604,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza la importancia de la oración y la fe?",
    category: doctrina,
    correct_answer: "Sección 100",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 605,
    difficulty: "Medio",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la organización de la Iglesia en Nauvoo?",
    category: doctrina,
    correct_answer: "Sección 124",
    incorrect_answers: ["Sección 89", "Sección 107", "Sección 132"],
  },
  {
    id: 606,
    difficulty: "Difícil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza la importancia de la oración y la fe?",
    category: doctrina,
    correct_answer: "Sección 100",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 607,
    difficulty: "Fácil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la organización de la Iglesia en Kirtland?",
    category: doctrina,
    correct_answer: "Sección 42",
    incorrect_answers: ["Sección 20", "Sección 107", "Sección 88"],
  },
  {
    id: 608,
    difficulty: "Medio",
    question:
      "¿Qué revelación en Doctrina y Convenios enseña el principio de la obediencia a la ley de Dios?",
    category: doctrina,
    correct_answer: "Sección 59",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 609,
    difficulty: "Difícil",
    question:
      "¿Qué sección de Doctrina y Convenios contiene la revelación sobre la organización de la Escuela de los Profetas?",
    category: doctrina,
    correct_answer: "Sección 88",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },
  {
    id: 610,
    difficulty: "Fácil",
    question:
      "¿Qué revelación en Doctrina y Convenios enfatiza la importancia de la oración y la fe?",
    category: doctrina,
    correct_answer: "Sección 100",
    incorrect_answers: ["Sección 76", "Sección 42", "Sección 20"],
  },

  /* Perla de gran precio */

  {
    id: 771,
    difficulty: "Fácil",
    question:
      "¿Qué libro de la Perla de Gran Precio contiene el relato de la visión de Moisés sobre la creación del mundo?",
    category: "perla",
    correct_answer: "Libro de Moisés",
    incorrect_answers: [
      "Libro de Abraham",
      "Libro de José Smith",
      "Libro de Moisés 2",
    ],
  },
  {
    id: 772,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del ángel que enseñó a Moisés acerca del propósito de la creación?",
    category: "perla",
    correct_answer: "Jehová",
    incorrect_answers: ["Gabriel", "Miguel", "Rafael"],
  },
  {
    id: 773,
    difficulty: "Difícil",
    question:
      "¿Qué principio importante enseña el Libro de Abraham acerca de la preexistencia de los espíritus?",
    category: "perla",
    correct_answer: "La nobleza del alma",
    incorrect_answers: [
      "La creación de la Tierra",
      "El juicio final",
      "El sacrificio de Abraham",
    ],
  },
  {
    id: 774,
    difficulty: "Fácil",
    question:
      "¿Qué profeta tradujo el libro conocido como el Libro de Abraham, que se encuentra en la Perla de Gran Precio?",
    category: "perla",
    correct_answer: "José Smith",
    incorrect_answers: ["Brigham Young", "John Taylor", "Wilford Woodruff"],
  },
  {
    id: 775,
    difficulty: "Medio",
    question:
      "¿Qué revelación importante se encuentra en el Libro de Abraham acerca de la vida antes del nacimiento en la Tierra?",
    category: "perla",
    correct_answer: "La existencia de un consejo en el cielo",
    incorrect_answers: [
      "La genealogía de Abraham",
      "El sacrificio de Isaac",
      "La restauración del sacerdocio",
    ],
  },
  {
    id: 776,
    difficulty: "Difícil",
    question:
      "¿Qué describe el Libro de Abraham sobre la creación del mundo y el papel de Jesucristo en ese proceso?",
    category: "perla",
    correct_answer: "Jesucristo como el Creador bajo la dirección del Padre",
    incorrect_answers: [
      "La creación en seis días",
      "La separación de las aguas",
      "La caída de Lucifer",
    ],
  },
  {
    id: 777,
    difficulty: "Fácil",
    question:
      "¿Qué parte de la Perla de Gran Precio contiene el relato de la visión de José Smith sobre el plan de salvación?",
    category: "perla",
    correct_answer: "Libro de Abraham",
    incorrect_answers: [
      "Libro de Moisés",
      "Libro de José Smith",
      "Libro de Moisés 2",
    ],
  },
  {
    id: 778,
    difficulty: "Medio",
    question: "¿Quién fue el autor del Libro de Abraham según José Smith?",
    category: "perla",
    correct_answer: "Abraham",
    incorrect_answers: ["Matusalén", "Adán", "Noé"],
  },
  {
    id: 779,
    difficulty: "Difícil",
    question:
      "¿Qué enseña el Libro de Abraham sobre la misión y el ministerio de Jesucristo en la vida preexistente?",
    category: "perla",
    correct_answer:
      "Jesucristo escogido como el Cordero antes de la fundación del mundo",
    incorrect_answers: [
      "El nacimiento virginal de Jesucristo",
      "El sermón del monte",
      "La expiación en Getsemaní",
    ],
  },
  {
    id: 780,
    difficulty: "Fácil",
    question:
      "¿Qué profeta recibió las revelaciones contenidas en la Perla de Gran Precio?",
    category: "perla",
    correct_answer: "José Smith",
    incorrect_answers: ["Brigham Young", "John Taylor", "Wilford Woodruff"],
  },
  {
    id: 781,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del ángel que se le apareció a José Smith para guiarlo al lugar donde estaban enterradas las planchas de oro?",
    category: "perla",
    correct_answer: "Moroni",
    incorrect_answers: ["Gabriel", "Miguel", "Rafael"],
  },
  {
    id: 782,
    difficulty: "Difícil",
    question:
      "¿Qué principio importante enseña el Libro de Abraham sobre la naturaleza divina del hombre?",
    category: "perla",
    correct_answer: "La existencia eterna del espíritu",
    incorrect_answers: [
      "La creación de la Tierra",
      "El juicio final",
      "La resurrección de los muertos",
    ],
  },
  {
    id: 783,
    difficulty: "Fácil",
    question:
      "¿Qué parte de la Perla de Gran Precio contiene el relato de la visión de Moisés sobre la historia de la Tierra desde su creación hasta el Diluvio?",
    category: "perla",
    correct_answer: "Libro de Moisés",
    incorrect_answers: [
      "Libro de Abraham",
      "Libro de José Smith",
      "Libro de Moisés 2",
    ],
  },
  {
    id: 784,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del sacerdocio restaurado que se menciona en la Perla de Gran Precio?",
    category: "perla",
    correct_answer: "Sacerdocio de Melquisedec",
    incorrect_answers: [
      "Sacerdocio de Aarón",
      "Sacerdocio levítico",
      "Sacerdocio patriarcal",
    ],
  },
  {
    id: 785,
    difficulty: "Difícil",
    question:
      "¿Qué enseña el Libro de Abraham sobre la creación del mundo en comparación con otras doctrinas religiosas?",
    category: "perla",
    correct_answer: "La creación es organizada y no ex nihilo",
    incorrect_answers: [
      "La creación en seis días",
      "La separación de las aguas",
      "La caída de Lucifer",
    ],
  },
  {
    id: 786,
    difficulty: "Fácil",
    question:
      "¿Qué revelación importante sobre el potencial divino del ser humano se encuentra en el Libro de Abraham?",
    category: "perla",
    correct_answer: "El ser humano puede llegar a ser como Dios",
    incorrect_answers: [
      "La creación en seis días",
      "La separación de las aguas",
      "El sacrificio de Abraham",
    ],
  },
  {
    id: 787,
    difficulty: "Medio",
    question:
      "¿Qué concepto enseña el Libro de Abraham sobre el propósito de la vida terrenal y la vida eterna?",
    category: "perla",
    correct_answer: "El plan de salvación y la exaltación",
    incorrect_answers: [
      "La creación en seis días",
      "La separación de las aguas",
      "La caída de Lucifer",
    ],
  },
  {
    id: 788,
    difficulty: "Difícil",
    question:
      "¿Qué principio importante enseña el Libro de Abraham sobre el progreso eterno de las almas?",
    category: "perla",
    correct_answer: "La exaltación celestial",
    incorrect_answers: [
      "La creación de la Tierra",
      "El juicio final",
      "El sacrificio de Abraham",
    ],
  },
  {
    id: 789,
    difficulty: "Fácil",
    question:
      "¿Qué parte de la Perla de Gran Precio habla sobre el consejo de los espíritus antes de la creación de la Tierra?",
    category: "perla",
    correct_answer: "Libro de Abraham",
    incorrect_answers: [
      "Libro de Moisés",
      "Libro de José Smith",
      "Libro de Moisés 2",
    ],
  },
  {
    id: 790,
    difficulty: "Medio",
    question:
      "¿Cuál es el propósito principal de la Perla de Gran Precio según la revelación de José Smith?",
    category: "perla",
    correct_answer: "Restaurar verdades antiguas",
    incorrect_answers: [
      "Crear un nuevo testamento",
      "Proveer nuevas escrituras",
      "Relatar la historia de Moisés",
    ],
  },
  {
    id: 791,
    difficulty: "Difícil",
    question:
      "¿Qué enseñanza sobre la naturaleza preexistente del hombre ofrece el Libro de Abraham?",
    category: "perla",
    correct_answer: "La eternidad de la inteligencia",
    incorrect_answers: [
      "La creación ex nihilo",
      "El juicio final",
      "El fin del espíritu tras la muerte",
    ],
  },
  {
    id: 792,
    difficulty: "Fácil",
    question:
      "¿Qué libro en la Perla de Gran Precio ofrece un relato sobre el sacerdocio de Melquisedec?",
    category: "perla",
    correct_answer: "Libro de Abraham",
    incorrect_answers: [
      "Libro de Moisés",
      "Libro de José Smith",
      "Libro de José Smith-Historia",
    ],
  },

  {
    id: 793,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del ángel que se le apareció a José Smith para guiarlo al lugar donde estaban las planchas de oro enterradas?",
    category: perla,
    correct_answer: "Moroni",
    incorrect_answers: ["Gabriel", "Miguel", "Rafael"],
  },
  {
    id: 794,
    difficulty: "Difícil",
    question:
      "¿Qué principio importante enseña el Libro de Abraham sobre el papel de los profetas en la restauración del evangelio?",
    category: perla,
    correct_answer: "La restauración del sacerdocio",
    incorrect_answers: [
      "La creación de la Tierra",
      "El juicio final",
      "La resurrección de los muertos",
    ],
  },
  {
    id: 795,
    difficulty: "Fácil",
    question:
      "¿Quién fue el primer profeta y presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: perla,
    correct_answer: "José Smith",
    incorrect_answers: ["Brigham Young", "John Taylor", "Wilford Woodruff"],
  },
  {
    id: 796,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del ángel que se le apareció a José Smith para entregarle las planchas de oro?",
    category: perla,
    correct_answer: "Moroni",
    incorrect_answers: ["Gabriel", "Miguel", "Rafael"],
  },
  {
    id: 797,
    difficulty: "Difícil",
    question:
      "¿Qué enseña el Libro de Abraham sobre la relación entre Dios y la humanidad en el plan de salvación?",
    category: perla,
    correct_answer: "La expansión de la posteridad espiritual de Abraham",
    incorrect_answers: [
      "La creación en seis días",
      "La separación de las aguas",
      "La caída de Lucifer",
    ],
  },
  {
    id: 798,
    difficulty: "Fácil",
    question:
      "¿Quién fue el profeta que recibió las visiones que se encuentran en el Libro de Abraham?",
    category: perla,
    correct_answer: "José Smith",
    incorrect_answers: ["Brigham Young", "John Taylor", "Wilford Woodruff"],
  },
  {
    id: 799,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del ángel que visitó a José Smith y le reveló el lugar donde estaban enterradas las planchas de oro?",
    category: perla,
    correct_answer: "Moroni",
    incorrect_answers: ["Gabriel", "Miguel", "Rafael"],
  },
  {
    id: 800,
    difficulty: "Difícil",
    question:
      "¿Qué principio importante enseña el Libro de Abraham sobre la naturaleza eterna del espíritu humano?",
    category: perla,
    correct_answer:
      "La existencia de la inteligencia antes de la creación de la Tierra",
    incorrect_answers: [
      "La creación de la Tierra",
      "El juicio final",
      "La resurrección de los muertos",
    ],
  },
  {
    id: 801,
    difficulty: "Fácil",
    question:
      "¿Qué profeta recibió las visiones que se encuentran en el Libro de Abraham?",
    category: perla,
    correct_answer: "José Smith",
    incorrect_answers: ["Brigham Young", "John Taylor", "Wilford Woodruff"],
  },
  {
    id: 802,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del ángel que le entregó las planchas de oro a José Smith?",
    category: perla,
    correct_answer: "Moroni",
    incorrect_answers: ["Gabriel", "Miguel", "Rafael"],
  },
  {
    id: 803,
    difficulty: "Difícil",
    question:
      "¿Qué principio importante enseña el Libro de Abraham sobre el progreso eterno de las almas?",
    category: perla,
    correct_answer: "La exaltación celestial",
    incorrect_answers: [
      "La creación de la Tierra",
      "El juicio final",
      "El sacrificio de Abraham",
    ],
  },
  {
    id: 804,
    difficulty: "Fácil",
    question:
      "¿Quién fue el profeta que recibió las revelaciones que se encuentran en la Perla de Gran Precio?",
    category: perla,
    correct_answer: "José Smith",
    incorrect_answers: ["Brigham Young", "John Taylor", "Wilford Woodruff"],
  },
  {
    id: 805,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del ángel que guió a José Smith al lugar donde estaban enterradas las planchas de oro?",
    category: perla,
    correct_answer: "Moroni",
    incorrect_answers: ["Gabriel", "Miguel", "Rafael"],
  },
  {
    id: 806,
    difficulty: "Difícil",
    question:
      "¿Qué principio importante enseña el Libro de Abraham sobre el potencial divino del hombre?",
    category: perla,
    correct_answer: "La capacidad de llegar a ser como Dios",
    incorrect_answers: [
      "La creación de la Tierra",
      "El juicio final",
      "El sacrificio de Abraham",
    ],
  },
  {
    id: 807,
    difficulty: "Fácil",
    question:
      "¿Qué profeta recibió las revelaciones que se encuentran en la Perla de Gran Precio?",
    category: perla,
    correct_answer: "José Smith",
    incorrect_answers: ["Brigham Young", "John Taylor", "Wilford Woodruff"],
  },
  {
    id: 808,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del ángel que se le apareció a José Smith y le reveló el lugar donde estaban enterradas las planchas de oro?",
    category: perla,
    correct_answer: "Moroni",
    incorrect_answers: ["Gabriel", "Miguel", "Rafael"],
  },
  {
    id: 809,
    difficulty: "Difícil",
    question:
      "¿Qué principio importante enseña el Libro de Abraham sobre el desarrollo eterno del ser humano?",
    category: perla,
    correct_answer: "El potencial de llegar a ser como Dios",
    incorrect_answers: [
      "La creación de la Tierra",
      "El juicio final",
      "El sacrificio de Abraham",
    ],
  },
  {
    id: 810,
    difficulty: "Fácil",
    question:
      "¿Quién fue el primer profeta y presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: perla,
    correct_answer: "José Smith",
    incorrect_answers: ["Brigham Young", "John Taylor", "Wilford Woodruff"],
  },
  {
    id: 811,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del ángel que se le apareció a José Smith para guiarlo al lugar donde estaban las planchas de oro enterradas?",
    category: perla,
    correct_answer: "Moroni",
    incorrect_answers: ["Gabriel", "Miguel", "Rafael"],
  },
  {
    id: 812,
    difficulty: "Difícil",
    question:
      "¿Qué principio importante enseña el Libro de Abraham sobre la relación entre Dios y la humanidad en el plan de salvación?",
    category: perla,
    correct_answer: "La expansión de la posteridad espiritual de Abraham",
    incorrect_answers: [
      "La creación en seis días",
      "La separación de las aguas",
      "La caída de Lucifer",
    ],
  },
  {
    id: 813,
    difficulty: "Fácil",
    question:
      "¿Quién fue el profeta que recibió las visiones que se encuentran en el Libro de Abraham?",
    category: perla,
    correct_answer: "José Smith",
    incorrect_answers: ["Brigham Young", "John Taylor", "Wilford Woodruff"],
  },
  {
    id: 814,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del ángel que le entregó las planchas de oro a José Smith?",
    category: perla,
    correct_answer: "Moroni",
    incorrect_answers: ["Gabriel", "Miguel", "Rafael"],
  },
  {
    id: 815,
    difficulty: "Difícil",
    question:
      "¿Qué principio importante enseña el Libro de Abraham sobre el progreso eterno de las almas?",
    category: perla,
    correct_answer: "La exaltación celestial",
    incorrect_answers: [
      "La creación de la Tierra",
      "El juicio final",
      "El sacrificio de Abraham",
    ],
  },
  {
    id: 816,
    difficulty: "Fácil",
    question:
      "¿Quién fue el profeta que recibió las revelaciones que se encuentran en la Perla de Gran Precio?",
    category: perla,
    correct_answer: "José Smith",
    incorrect_answers: ["Brigham Young", "John Taylor", "Wilford Woodruff"],
  },
  {
    id: 817,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del ángel que se le apareció a José Smith para guiarlo al lugar donde estaban enterradas las planchas de oro?",
    category: perla,
    correct_answer: "Moroni",
    incorrect_answers: ["Gabriel", "Miguel", "Rafael"],
  },
  {
    id: 818,
    difficulty: "Difícil",
    question:
      "¿Qué principio importante enseña el Libro de Abraham sobre el desarrollo eterno del ser humano?",
    category: perla,
    correct_answer: "El potencial de llegar a ser como Dios",
    incorrect_answers: [
      "La creación de la Tierra",
      "El juicio final",
      "El sacrificio de Abraham",
    ],
  },
  {
    id: 819,
    difficulty: "Fácil",
    question:
      "¿Quién fue el primer profeta y presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: perla,
    correct_answer: "José Smith",
    incorrect_answers: ["Brigham Young", "John Taylor", "Wilford Woodruff"],
  },
  {
    id: 820,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del ángel que se le apareció a José Smith para guiarlo al lugar donde estaban las planchas de oro enterradas?",
    category: perla,
    correct_answer: "Moroni",
    incorrect_answers: ["Gabriel", "Miguel", "Rafael"],
  },
  {
    id: 821,
    difficulty: "Difícil",
    question:
      "¿Qué principio importante enseña el Libro de Abraham sobre la relación entre Dios y la humanidad en el plan de salvación?",
    category: perla,
    correct_answer: "La expansión de la posteridad espiritual de Abraham",
    incorrect_answers: [
      "La creación en seis días",
      "La separación de las aguas",
      "La caída de Lucifer",
    ],
  },
  {
    id: 822,
    difficulty: "Fácil",
    question:
      "¿Quién fue el profeta que recibió las visiones que se encuentran en el Libro de Abraham?",
    category: perla,
    correct_answer: "José Smith",
    incorrect_answers: ["Brigham Young", "John Taylor", "Wilford Woodruff"],
  },
  {
    id: 823,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del ángel que le entregó las planchas de oro a José Smith?",
    category: perla,
    correct_answer: "Moroni",
    incorrect_answers: ["Gabriel", "Miguel", "Rafael"],
  },
  {
    id: 824,
    difficulty: "Difícil",
    question:
      "¿Qué principio importante enseña el Libro de Abraham sobre el progreso eterno de las almas?",
    category: perla,
    correct_answer: "La exaltación celestial",
    incorrect_answers: [
      "La creación de la Tierra",
      "El juicio final",
      "El sacrificio de Abraham",
    ],
  },
  {
    id: 825,
    difficulty: "Fácil",
    question:
      "¿Quién fue el profeta que recibió las revelaciones que se encuentran en la Perla de Gran Precio?",
    category: perla,
    correct_answer: "José Smith",
    incorrect_answers: ["Brigham Young", "John Taylor", "Wilford Woodruff"],
  },
  {
    id: 826,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del ángel que se le apareció a José Smith para guiarlo al lugar donde estaban enterradas las planchas de oro?",
    category: perla,
    correct_answer: "Moroni",
    incorrect_answers: ["Gabriel", "Miguel", "Rafael"],
  },
  {
    id: 827,
    difficulty: "Difícil",
    question:
      "¿Qué principio importante enseña el Libro de Abraham sobre el desarrollo eterno del ser humano?",
    category: perla,
    correct_answer: "El potencial de llegar a ser como Dios",
    incorrect_answers: [
      "La creación de la Tierra",
      "El juicio final",
      "El sacrificio de Abraham",
    ],
  },
  {
    id: 828,
    difficulty: "Fácil",
    question:
      "¿Quién fue el primer profeta y presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: perla,
    correct_answer: "José Smith",
    incorrect_answers: ["Brigham Young", "John Taylor", "Wilford Woodruff"],
  },
  {
    id: 829,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del ángel que se le apareció a José Smith para guiarlo al lugar donde estaban las planchas de oro enterradas?",
    category: perla,
    correct_answer: "Moroni",
    incorrect_answers: ["Gabriel", "Miguel", "Rafael"],
  },
  {
    id: 830,
    difficulty: "Difícil",
    question:
      "¿Qué principio importante enseña el Libro de Abraham sobre la relación entre Dios y la humanidad en el plan de salvación?",
    category: perla,
    correct_answer: "La expansión de la posteridad espiritual de Abraham",
    incorrect_answers: [
      "La creación en seis días",
      "La separación de las aguas",
      "La caída de Lucifer",
    ],
  },
  {
    id: 831,
    difficulty: "Fácil",
    question:
      "¿Quién fue el profeta que recibió las visiones que se encuentran en el Libro de Abraham?",
    category: perla,
    correct_answer: "José Smith",
    incorrect_answers: ["Brigham Young", "John Taylor", "Wilford Woodruff"],
  },
  {
    id: 832,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del ángel que le entregó las planchas de oro a José Smith?",
    category: perla,
    correct_answer: "Moroni",
    incorrect_answers: ["Gabriel", "Miguel", "Rafael"],
  },
  {
    id: 833,
    difficulty: "Difícil",
    question:
      "¿Qué principio importante enseña el Libro de Abraham sobre el progreso eterno de las almas?",
    category: perla,
    correct_answer: "La exaltación celestial",
    incorrect_answers: [
      "La creación de la Tierra",
      "El juicio final",
      "El sacrificio de Abraham",
    ],
  },
  {
    id: 834,
    difficulty: "Fácil",
    question:
      "¿Quién fue el profeta que recibió las revelaciones que se encuentran en la Perla de Gran Precio?",
    category: perla,
    correct_answer: "José Smith",
    incorrect_answers: ["Brigham Young", "John Taylor", "Wilford Woodruff"],
  },
  {
    id: 835,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del ángel que se le apareció a José Smith para guiarlo al lugar donde estaban enterradas las planchas de oro?",
    category: perla,
    correct_answer: "Moroni",
    incorrect_answers: ["Gabriel", "Miguel", "Rafael"],
  },
  {
    id: 836,
    difficulty: "Difícil",
    question:
      "¿Qué principio importante enseña el Libro de Abraham sobre el desarrollo eterno del ser humano?",
    category: perla,
    correct_answer: "El potencial de llegar a ser como Dios",
    incorrect_answers: [
      "La creación de la Tierra",
      "El juicio final",
      "El sacrificio de Abraham",
    ],
  },
  {
    id: 837,
    difficulty: "Fácil",
    question:
      "¿Quién fue el primer profeta y presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: perla,
    correct_answer: "José Smith",
    incorrect_answers: ["Brigham Young", "John Taylor", "Wilford Woodruff"],
  },
  {
    id: 838,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del ángel que se le apareció a José Smith para guiarlo al lugar donde estaban las planchas de oro enterradas?",
    category: perla,
    correct_answer: "Moroni",
    incorrect_answers: ["Gabriel", "Miguel", "Rafael"],
  },
  {
    id: 839,
    difficulty: "Difícil",
    question:
      "¿Qué principio importante enseña el Libro de Abraham sobre la relación entre Dios y la humanidad en el plan de salvación?",
    category: perla,
    correct_answer: "La expansión de la posteridad espiritual de Abraham",
    incorrect_answers: [
      "La creación en seis días",
      "La separación de las aguas",
      "La caída de Lucifer",
    ],
  },
  {
    id: 840,
    difficulty: "Fácil",
    question:
      "¿Quién fue el profeta que recibió las visiones que se encuentran en el Libro de Abraham?",
    category: perla,
    correct_answer: "José Smith",
    incorrect_answers: ["Brigham Young", "John Taylor", "Wilford Woodruff"],
  },
  {
    id: 841,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del ángel que le entregó las planchas de oro a José Smith?",
    category: perla,
    correct_answer: "Moroni",
    incorrect_answers: ["Gabriel", "Miguel", "Rafael"],
  },
  {
    id: 842,
    difficulty: "Difícil",
    question:
      "¿Qué principio importante enseña el Libro de Abraham sobre el progreso eterno de las almas?",
    category: perla,
    correct_answer: "La exaltación celestial",
    incorrect_answers: [
      "La creación de la Tierra",
      "El juicio final",
      "El sacrificio de Abraham",
    ],
  },
  {
    id: 843,
    difficulty: "Fácil",
    question:
      "¿Quién fue el profeta que recibió las revelaciones que se encuentran en la Perla de Gran Precio?",
    category: perla,
    correct_answer: "José Smith",
    incorrect_answers: ["Brigham Young", "John Taylor", "Wilford Woodruff"],
  },
  {
    id: 844,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del ángel que se le apareció a José Smith para guiarlo al lugar donde estaban enterradas las planchas de oro?",
    category: perla,
    correct_answer: "Moroni",
    incorrect_answers: ["Gabriel", "Miguel", "Rafael"],
  },
  {
    id: 845,
    difficulty: "Difícil",
    question:
      "¿Qué principio importante enseña el Libro de Abraham sobre el desarrollo eterno del ser humano?",
    category: perla,
    correct_answer: "El potencial de llegar a ser como Dios",
    incorrect_answers: [
      "La creación de la Tierra",
      "El juicio final",
      "El sacrificio de Abraham",
    ],
  },

  /* HISTORIA */

  {
    id: 950,
    difficulty: "Fácil",
    question:
      "¿Cuál fue el propósito principal de José Smith al publicar el Libro de Mormón?",
    category: historia,
    correct_answer: "Restauración del evangelio de Jesucristo",
    incorrect_answers: [
      "Promover una nueva religión",
      "Ganar reconocimiento político",
      "Encontrar riquezas",
    ],
  },
  {
    id: 951,
    difficulty: "Medio",
    question:
      "¿En qué año José Smith tuvo su primera visión en la que vio a Dios el Padre y a Jesucristo?",
    category: historia,
    correct_answer: "1820",
    incorrect_answers: ["1830", "1840", "1810"],
  },
  {
    id: 952,
    difficulty: "Difícil",
    question:
      "¿Qué eventos llevaron a José Smith a fundar La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Las revelaciones recibidas y la organización de la Iglesia",
    incorrect_answers: [
      "Su formación teológica formal",
      "La persecución religiosa en Nueva York",
      "La búsqueda de un liderazgo religioso",
    ],
  },
  {
    id: 953,
    difficulty: "Fácil",
    question:
      "¿Dónde ocurrió la primera organización oficial de la Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: historia,
    correct_answer: "Fayette, Nueva York",
    incorrect_answers: [
      "Palmyra, Nueva York",
      "Kirtland, Ohio",
      "Independencia, Misuri",
    ],
  },
  {
    id: 954,
    difficulty: "Medio",
    question:
      "¿Cuál fue la razón principal por la que José Smith fue encarcelado en Carthage, Illinois?",
    category: historia,
    correct_answer:
      "Por supuestos cargos de traición y por el incidente de la destrucción de la prensa del Nauvoo Expositor",
    incorrect_answers: [
      "Por sus creencias religiosas",
      "Por incitar una revuelta política",
      "Por violencia doméstica",
    ],
  },
  {
    id: 955,
    difficulty: "Difícil",
    question:
      "¿Qué papel desempeñó José Smith en el establecimiento de la ciudad de Nauvoo, Illinois?",
    category: historia,
    correct_answer: "Fundador y líder religioso, político y comunitario",
    incorrect_answers: [
      "Financiador principal de la ciudad",
      "Construcción de edificios históricos",
      "Explorador de nuevos territorios",
    ],
  },
  {
    id: 956,
    difficulty: "Fácil",
    question:
      "¿Qué evento marcó la expansión significativa de la Iglesia de Jesucristo de los Santos de los Últimos Días en el siglo XIX?",
    category: historia,
    correct_answer:
      "La migración hacia el oeste, incluyendo el éxodo a Salt Lake Valley",
    incorrect_answers: [
      "La construcción del templo de Nauvoo",
      "La publicación del Libro de Mormón",
      "La primera misión en Inglaterra",
    ],
  },
  {
    id: 957,
    difficulty: "Medio",
    question:
      "¿Cuál fue el impacto de la Guerra Civil estadounidense en los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Se enfrentaron a la persecución y dificultades adicionales durante este período",
    incorrect_answers: [
      "Experimentaron un crecimiento explosivo en membresía",
      "Se convirtieron en un grupo políticamente influyente",
      "Experimentaron un éxodo a Europa",
    ],
  },
  {
    id: 958,
    difficulty: "Difícil",
    question:
      "¿Qué medidas tomó la Iglesia de Jesucristo de los Santos de los Últimos Días durante el exilio en Utah para asegurar su autonomía?",
    category: historia,
    correct_answer:
      "Establecimiento de un gobierno provisional y esfuerzos diplomáticos con Estados Unidos",
    incorrect_answers: [
      "Aislamiento total del gobierno federal",
      "Creación de una moneda local",
      "Expulsión de no miembros",
    ],
  },
  {
    id: 959,
    difficulty: "Fácil",
    question:
      "¿Cuál fue la contribución de José Smith a la teología cristiana?",
    category: historia,
    correct_answer:
      "Restauración de doctrinas y prácticas perdidas de la Iglesia primitiva",
    incorrect_answers: [
      "Creación de un nuevo credo religioso",
      "Innovaciones en el ceremonialismo religioso",
      "Introducción de rituales misteriosos",
    ],
  },
  {
    id: 960,
    difficulty: "Medio",
    question:
      "¿Cómo se organizó la expansión misional de la Iglesia de Jesucristo de los Santos de los Últimos Días en el siglo XIX?",
    category: historia,
    correct_answer:
      "Mediante el envío de misioneros a diversas partes de Estados Unidos y a otros países",
    incorrect_answers: [
      "Mediante la construcción de templos",
      "Mediante el establecimiento de escuelas teológicas",
      "Mediante la publicación de periódicos",
    ],
  },
  {
    id: 961,
    difficulty: "Difícil",
    question:
      "¿Qué desafíos enfrentaron los Santos de los Últimos Días en el siglo XIX en relación con la práctica del poligamia?",
    category: historia,
    correct_answer: "Persecución legal y presión pública contra la práctica",
    incorrect_answers: [
      "Aceptación generalizada de la práctica en Estados Unidos",
      "Regulación legal federal de la práctica",
      "Conflicto interno sobre la práctica entre líderes religiosos",
    ],
  },
  {
    id: 962,
    difficulty: "Fácil",
    question:
      "¿Cómo contribuyó José Smith a la creación de un sistema administrativo dentro de la Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Estableciendo estructuras de liderazgo y ordenanzas para la administración de la Iglesia",
    incorrect_answers: [
      "Influenciando la política local en Illinois",
      "Estableciendo un sistema de comercio para la comunidad",
      "Desarrollando un código legal para la ciudad de Nauvoo",
    ],
  },
  {
    id: 963,
    difficulty: "Medio",
    question:
      "¿Cómo influyeron las enseñanzas de José Smith en la vida comunitaria de los Santos de los Últimos Días en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Promoviendo la cooperación económica y social entre los miembros de la Iglesia",
    incorrect_answers: [
      "Promoviendo la independencia económica de cada miembro",
      "Fomentando el individualismo entre los miembros",
      "Limitando la interacción social fuera de la Iglesia",
    ],
  },
  {
    id: 964,
    difficulty: "Difícil",
    question:
      "¿Qué iniciativas lideró José Smith para promover la educación y el desarrollo intelectual entre los Santos de los Últimos Días en el siglo XIX?",
    category: historia,
    correct_answer:
      "Establecimiento de escuelas y universidades, incluyendo la Universidad de Nauvoo",
    incorrect_answers: [
      "Creación de programas de formación profesional",
      "Promoción de la educación pública en Illinois",
      "Establecimiento de una biblioteca pública en Nauvoo",
    ],
  },
  {
    id: 965,
    difficulty: "Fácil",
    question:
      "¿Qué papel desempeñó José Smith en la expansión de la imprenta y la publicación de materiales religiosos en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Fundación de la Nauvoo Expositor y la publicación de obras doctrinales y literarias",
    incorrect_answers: [
      "Establecimiento de una imprenta para fines comerciales",
      "Promoción de la literatura secular en la región",
      "Apoyo financiero a otras imprentas locales",
    ],
  },
  {
    id: 966,
    difficulty: "Medio",
    question:
      "¿Cómo se relacionó José Smith con otros movimientos religiosos y sociales en Estados Unidos durante el siglo XIX?",
    category: historia,
    correct_answer:
      "Influenciado por ideas y movimientos religiosos y sociales contemporáneos, pero diferenciándose en doctrina y práctica",
    incorrect_answers: [
      "Ignorando completamente otros movimientos religiosos",
      "Adoptando prácticas de otros movimientos religiosos",
      "Compitiendo abiertamente con otros líderes religiosos",
    ],
  },
  {
    id: 967,
    difficulty: "Difícil",
    question:
      "¿Qué eventos llevaron a la migración masiva de los Santos de los Últimos Días hacia el oeste en la década de 1840?",
    category: historia,
    correct_answer:
      "Persecución religiosa en Illinois y la promesa de tierras en el Territorio de Utah",
    incorrect_answers: [
      "Construcción del templo de Nauvoo",
      "Conflictos internos dentro de la Iglesia",
      "Desarrollo de nuevas doctrinas teológicas",
    ],
  },
  {
    id: 968,
    difficulty: "Fácil",
    question:
      "¿Cómo influyó José Smith en el desarrollo del ceremonialismo y los rituales religiosos dentro de la Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Restaurando ordenanzas y ceremonias perdidas desde la antigüedad",
    incorrect_answers: [
      "Creando nuevas formas de ritualismo religioso",
      "Adoptando prácticas de otras religiones",
      "Promoviendo la eliminación de rituales en la Iglesia",
    ],
  },
  {
    id: 969,
    difficulty: "Medio",
    question:
      "¿Cómo manejó José Smith los desafíos políticos y económicos de la ciudad de Nauvoo, Illinois, durante su liderazgo?",
    category: historia,
    correct_answer:
      "Estableciendo un sistema legal y político autónomo dentro de la ciudad",
    incorrect_answers: [
      "Negociando un estatuto municipal con el gobierno federal",
      "Aboliendo la política local en favor de una administración teocrática",
      "Formando alianzas políticas con otras ciudades de Illinois",
    ],
  },
  {
    id: 970,
    difficulty: "Difícil",
    question:
      "¿Cuál fue la respuesta de José Smith a la persecución legal y social en Nauvoo, Illinois, en la década de 1840?",
    category: historia,
    correct_answer:
      "Defendió las prácticas religiosas y los derechos civiles de los Santos de los Últimos Días ante las autoridades federales y estatales",
    incorrect_answers: [
      "Negoció un acuerdo de paz con los líderes locales",
      "Abandonó la ciudad en secreto",
      "Inició una campaña de resistencia armada contra la persecución",
    ],
  },
  {
    id: 971,
    difficulty: "Fácil",
    question:
      "¿Qué impacto tuvo José Smith en el desarrollo de la teología sobre la vida después de la muerte dentro de la Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Enseñó doctrinas claras sobre la vida después de la muerte y la salvación de los muertos",
    incorrect_answers: [
      "Negó la existencia de una vida después de la muerte",
      "No abordó este tema en sus enseñanzas",
      "Dejó este tema a interpretaciones personales de los miembros",
    ],
  },
  {
    id: 972,
    difficulty: "Medio",
    question:
      "¿Cómo promovió José Smith la práctica del trabajo genealógico y la investigación familiar entre los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Enseñó la importancia de conocer y honrar a los antepasados y estableció registros genealógicos",
    incorrect_answers: [
      "Ignoró la importancia de la historia familiar",
      "Prohibió la investigación de antecedentes familiares",
      "Limitó el acceso a registros genealógicos a una élite dentro de la Iglesia",
    ],
  },
  {
    id: 973,
    difficulty: "Difícil",
    question:
      "¿Qué roles desempeñaron las mujeres en la comunidad de los Santos de los Últimos Días bajo el liderazgo de José Smith en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Participaron activamente en actividades religiosas, educativas y económicas",
    incorrect_answers: [
      "Fueron excluidas de cualquier rol público en la comunidad",
      "Establecieron su propio sistema de liderazgo separado de los hombres",
      "Asumieron roles secundarios sin influencia significativa",
    ],
  },
  {
    id: 974,
    difficulty: "Fácil",
    question:
      "¿Qué influencia tuvo José Smith en la expansión de la misión y la evangelización de la Iglesia de Jesucristo de los Santos de los Últimos Días fuera de Estados Unidos?",
    category: historia,
    correct_answer:
      "Promovió la expansión internacional mediante el envío de misioneros a Europa y Oceanía",
    incorrect_answers: [
      "Limitó la misión a América del Norte",
      "No promovió la misión fuera de Estados Unidos",
      "Delegó la misión internacional a otros líderes de la Iglesia",
    ],
  },
  {
    id: 975,
    difficulty: "Medio",
    question:
      "¿Cómo manejó José Smith las tensiones y divisiones internas dentro de la Iglesia de Jesucristo de los Santos de los Últimos Días en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Fomentando la unidad y el liderazgo centralizado bajo su dirección",
    incorrect_answers: [
      "Apoyando facciones rivales dentro de la Iglesia",
      "Permitiendo la autonomía local para evitar conflictos",
      "Promoviendo un sistema democrático de toma de decisiones",
    ],
  },
  {
    id: 976,
    difficulty: "Difícil",
    question:
      "¿Qué estrategias utilizó José Smith para asegurar la seguridad y el bienestar de los miembros de la Iglesia de Jesucristo de los Santos de los Últimos Días durante la persecución en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Estableció medidas de defensa militar y fortificaciones para proteger a la comunidad",
    incorrect_answers: [
      "Negoció un acuerdo de paz con los líderes locales",
      "Abandonó la ciudad en secreto",
      "Inició una campaña de resistencia armada contra la persecución",
    ],
  },
  {
    id: 977,
    difficulty: "Fácil",
    question:
      "¿Qué importancia tuvo la revelación y traducción de José Smith del Libro de Abraham para la teología de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Enseñó doctrinas adicionales sobre la creación y el propósito eterno del hombre",
    incorrect_answers: [
      "No tuvo impacto en la teología de la Iglesia",
      "Fue considerado como un texto secundario sin relevancia doctrinal",
      "Fue cuestionado por su autenticidad desde el principio",
    ],
  },
  {
    id: 978,
    difficulty: "Medio",
    question:
      "¿Cómo influyó la participación política de José Smith en Illinois en el desarrollo de la estructura gubernamental de la Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Facilitó la integración de principios religiosos y prácticas en la administración pública local",
    incorrect_answers: [
      "Separó completamente la religión y el gobierno en Nauvoo",
      "Inició un sistema de gobierno teocrático en Illinois",
      "Excluyó a los miembros de la Iglesia de la política local",
    ],
  },
  {
    id: 979,
    difficulty: "Difícil",
    question:
      "¿Cuál fue el legado de José Smith en la construcción y desarrollo de la ciudad de Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Fundó una ciudad próspera con un sistema económico, educativo y religioso bien establecido",
    incorrect_answers: [
      "Abandonó la ciudad antes de completar su desarrollo",
      "Dejó un legado de conflicto y divisiones internas",
      "Creó una ciudad exclusivamente para miembros de la Iglesia",
    ],
  },
  {
    id: 980,
    difficulty: "Fácil",
    question:
      "¿Cuál fue el impacto de las enseñanzas de José Smith sobre la autoridad sacerdotal y el sacerdocio en la Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Restauración de la autoridad y los principios del sacerdocio en la Iglesia primitiva",
    incorrect_answers: [
      "Rechazo total de la autoridad sacerdotal",
      "Adopción de prácticas sacerdotales de otras religiones",
      "Desarrollo de una jerarquía sacerdotal completamente nueva",
    ],
  },
  {
    id: 981,
    difficulty: "Medio",
    question:
      "¿Qué influencia tuvo José Smith en la implementación y desarrollo del sistema de bienestar dentro de la Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Promovió la auto-suficiencia y el apoyo mutuo entre los miembros de la Iglesia",
    incorrect_answers: [
      "Creó un sistema de beneficencia dependiente del gobierno local",
      "Promovió la asistencia social a costa del gobierno federal",
      "Ignoró completamente las necesidades económicas de los miembros",
    ],
  },
  {
    id: 982,
    difficulty: "Difícil",
    question:
      "¿Cómo manejó José Smith las críticas y la controversia externa hacia la Iglesia de Jesucristo de los Santos de los Últimos Días durante su liderazgo en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Respondió públicamente a las críticas y defendió la doctrina y las prácticas de la Iglesia",
    incorrect_answers: [
      "Ignoró por completo las críticas externas",
      "Solicitó la ayuda del gobierno federal para evitar críticas",
      "Abandonó la ciudad en secreto para evitar controversias",
    ],
  },
  {
    id: 983,
    difficulty: "Fácil",
    question:
      "¿Qué contribuciones hizo José Smith al desarrollo de la doctrina sobre la apostasía y la restauración dentro de la Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Enseñó que la Iglesia primitiva había caído en apostasía y necesitaba ser restaurada",
    incorrect_answers: [
      "Ignoró completamente el concepto de apostasía",
      "Promovió la idea de una continuación sin interrupción de la Iglesia primitiva",
      "Aceptó la autoridad de la Iglesia católica para evitar controversias",
    ],
  },
  {
    id: 984,
    difficulty: "Medio",
    question:
      "¿Cómo respondió José Smith a los desafíos teológicos y doctrinales dentro de la comunidad de los Santos de los Últimos Días en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Continuó recibiendo revelaciones y doctrinas adicionales para guiar a la Iglesia",
    incorrect_answers: [
      "Promovió la independencia teológica y doctrinal entre los miembros",
      "Limitó el acceso a nuevas doctrinas y revelaciones",
      "Se retiró de la vida pública para evitar desafíos doctrinales",
    ],
  },
  {
    id: 985,
    difficulty: "Difícil",
    question:
      "¿Qué impacto tuvieron las enseñanzas de José Smith sobre la relación entre Dios y la humanidad dentro de la teología de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Enseñó que la humanidad puede tener una relación personal y directa con Dios",
    incorrect_answers: [
      "Enseñó que Dios es inaccesible para la humanidad",
      "Enseñó que Dios interviene directamente en todos los asuntos humanos",
      "Enseñó que solo a través de mediadores humanos se puede acceder a Dios",
    ],
  },
  {
    id: 986,
    difficulty: "Fácil",
    question:
      "¿Cuál fue la contribución de José Smith al desarrollo de la teología sobre la naturaleza divina y la exaltación dentro de la Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Enseñó que los seres humanos pueden llegar a ser como Dios mediante la obediencia a los mandamientos y la fe en Jesucristo",
    incorrect_answers: [
      "Negó la posibilidad de la exaltación personal",
      "Promovió la deificación inmediata de todos los humanos",
      "No abordó este tema en sus enseñanzas",
    ],
  },
  {
    id: 987,
    difficulty: "Medio",
    question:
      "¿Cómo influyó José Smith en la expansión y el desarrollo de la educación formal dentro de la comunidad de los Santos de los Últimos Días en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Fundó escuelas y promovió la educación académica y religiosa entre los miembros de la Iglesia",
    incorrect_answers: [
      "Abandonó completamente la educación formal",
      "Limitó la educación a líderes religiosos selectos",
      "Estableció un sistema educativo exclusivamente para mujeres",
    ],
  },
  {
    id: 988,
    difficulty: "Difícil",
    question:
      "¿Qué eventos llevaron a la muerte de José Smith y su hermano Hyrum en Carthage, Illinois?",
    category: historia,
    correct_answer:
      "Fueron asesinados por una turba en un ataque a la cárcel donde estaban detenidos",
    incorrect_answers: [
      "Murieron en un accidente trágico",
      "Fueron ejecutados por órdenes del gobierno federal",
      "Murieron en un intento fallido de fuga",
    ],
  },
  {
    id: 989,
    difficulty: "Fácil",
    question:
      "¿Qué iniciativas lideró José Smith para promover la salud física y el bienestar entre los miembros de la Iglesia de Jesucristo de los Santos de los Últimos Días en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Estableció programas de salud pública y prácticas higiénicas entre los miembros",
    incorrect_answers: [
      "Ignoró completamente la salud física de los miembros",
      "Promovió métodos médicos no convencionales",
      "Exigió el uso de métodos de salud importados de Europa",
    ],
  },
  {
    id: 990,
    difficulty: "Medio",
    question:
      "¿Cómo influenció José Smith en la política local y estatal durante su residencia en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Negoció tratados y acuerdos con líderes locales y estatales para asegurar los derechos de los miembros de la Iglesia",
    incorrect_answers: [
      "Se mantuvo al margen de la política local",
      "Desafió abiertamente las leyes locales y estatales",
      "Abandonó la ciudad en secreto para evitar conflictos",
    ],
  },
  {
    id: 991,
    difficulty: "Difícil",
    question:
      "¿Qué impacto tuvieron las visiones y revelaciones de José Smith sobre la naturaleza del sacerdocio en la teología de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Restauró la autoridad del sacerdocio y sus funciones específicas en la administración de la Iglesia",
    incorrect_answers: [
      "Eliminó la autoridad del sacerdocio de la Iglesia",
      "Reformó completamente la estructura del sacerdocio",
      "Estableció una jerarquía sacerdotal completamente nueva",
    ],
  },
  {
    id: 992,
    difficulty: "Fácil",
    question:
      "¿Cuál fue la visión de José Smith sobre el propósito del Libro de Mormón?",
    category: historia,
    correct_answer:
      "Ser otro testamento de Jesucristo y enseñar las doctrinas de salvación",
    incorrect_answers: [
      "Promover la literatura religiosa",
      "Justificar la colonización de América",
      "Registrar la historia antigua de los pueblos americanos",
    ],
  },
  {
    id: 993,
    difficulty: "Medio",
    question:
      "¿Cómo manejó José Smith la relación entre la Iglesia de Jesucristo de los Santos de los Últimos Días y el gobierno federal de Estados Unidos durante su liderazgo en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Negoció la ciudadanía y los derechos civiles de los miembros de la Iglesia con el gobierno federal",
    incorrect_answers: [
      "Desafió abiertamente la autoridad federal",
      "Abandonó la ciudad en secreto para evitar el conflicto",
      "Negoció un tratado de separación con el gobierno federal",
    ],
  },
  {
    id: 994,
    difficulty: "Difícil",
    question:
      "¿Qué impacto tuvieron las enseñanzas de José Smith sobre la teología de la familia y la estructura familiar dentro de la Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Restauró doctrinas sobre el papel eterno de la familia y el matrimonio celestial en la teología de la Iglesia",
    incorrect_answers: [
      "Negó la importancia de la estructura familiar en la teología",
      "Adoptó modelos familiares no convencionales",
      "Promovió la idea de una familia exclusivamente espiritual",
    ],
  },
  {
    id: 995,
    difficulty: "Fácil",
    question:
      "¿Qué importancia tuvo José Smith en la organización y administración de la Iglesia de Jesucristo de los Santos de los Últimos Días en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Organizó y estableció principios de administración y liderazgo dentro de la Iglesia",
    incorrect_answers: [
      "Delegó completamente la administración a otros líderes de la Iglesia",
      "Estableció un sistema de gobierno teocrático sin administración formal",
      "Ignoró por completo la organización administrativa de la Iglesia",
    ],
  },
  {
    id: 996,
    difficulty: "Medio",
    question:
      "¿Cómo influyó José Smith en la organización y administración del sistema misional dentro de la Iglesia de Jesucristo de los Santos de los Últimos Días en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Estableció principios organizativos y metodológicos para la predicación del evangelio a nivel internacional",
    incorrect_answers: [
      "Abandonó completamente la organización misional",
      "Limitó las misiones a América del Norte",
      "Dejó la organización misional en manos de líderes locales",
    ],
  },
  {
    id: 997,
    difficulty: "Difícil",
    question:
      "¿Qué estrategias utilizó José Smith para asegurar la sostenibilidad económica de la Iglesia de Jesucristo de los Santos de los Últimos Días en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Estableció un sistema de economía comunal y fomentó la autosuficiencia económica entre los miembros",
    incorrect_answers: [
      "Dependió completamente de donaciones externas para su sostenibilidad",
      "Promovió una economía capitalista sin intervención religiosa",
      "Ignoró por completo las necesidades económicas de la Iglesia",
    ],
  },
  {
    id: 998,
    difficulty: "Fácil",
    question:
      "¿Qué importancia tuvo José Smith en la organización y administración del clero dentro de la Iglesia de Jesucristo de los Santos de los Últimos Días en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Organizó y estableció órdenes y funciones específicas para los líderes religiosos dentro de la Iglesia",
    incorrect_answers: [
      "Delegó completamente la organización clerical a otros líderes de la Iglesia",
      "Promovió un sistema de liderazgo religioso sin roles específicos",
      "Ignoró por completo la organización clerical dentro de la Iglesia",
    ],
  },
  {
    id: 999,
    difficulty: "Medio",
    question:
      "¿Cómo manejó José Smith la expansión territorial y la colonización de los miembros de la Iglesia de Jesucristo de los Santos de los Últimos Días en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Organizó y promovió la migración hacia el oeste de Estados Unidos para establecer comunidades religiosas y económicas",
    incorrect_answers: [
      "Limitó la expansión territorial a Illinois",
      "Ignoró la colonización como parte de la misión de la Iglesia",
      "Delegó la expansión territorial a líderes locales sin intervención directa",
    ],
  },
  {
    id: 1000,
    difficulty: "Difícil",
    question:
      "¿Qué legado dejó José Smith en la estructura doctrinal y organizativa de la Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Estableció principios fundamentales que siguen siendo la base de la doctrina y organización de la Iglesia",
    incorrect_answers: [
      "No dejó ningún legado doctrinal o organizativo",
      "Creó una estructura temporal sin impacto duradero",
      "Fue rechazado por los miembros de la Iglesia después de su muerte",
    ],
  },

  {
    id: 1001,
    difficulty: "Fácil",
    question:
      "¿Qué visión tuvo José Smith que marcó el inicio del movimiento de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "La Primera Visión, donde vio a Dios el Padre y a Jesucristo",
    incorrect_answers: [
      "Una visión de los ángeles anunciando su misión",
      "Una visión de su familia viviendo en la gloria celestial",
      "Una visión del Libro de Mormón",
    ],
  },
  {
    id: 1002,
    difficulty: "Medio",
    question:
      "¿Cómo influyó José Smith en la organización y estructura del Quórum de los Doce Apóstoles dentro de la Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Organizó y estableció el Quórum de los Doce Apóstoles como una autoridad centralizada para la predicación del evangelio",
    incorrect_answers: [
      "Desestimó por completo la necesidad de un Quórum de Apóstoles",
      "Promovió un sistema de liderazgo apostólico sin funciones específicas",
      "Limitó la autoridad del Quórum a funciones administrativas",
    ],
  },
  {
    id: 1003,
    difficulty: "Difícil",
    question:
      "¿Qué impacto tuvo José Smith en la teología de la exaltación personal y la vida eterna dentro de la Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Enseñó que los seres humanos tienen el potencial de alcanzar la exaltación y vivir en la presencia de Dios eternamente",
    incorrect_answers: [
      "Negó la posibilidad de la exaltación personal",
      "Promovió la deificación inmediata de todos los humanos",
      "No abordó este tema en sus enseñanzas",
    ],
  },
  {
    id: 1004,
    difficulty: "Fácil",
    question:
      "¿Cómo influyó José Smith en el desarrollo de la doctrina sobre el bautismo por los muertos dentro de la Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Restauró la práctica bíblica del bautismo por los muertos para la salvación de los ancestros fallecidos",
    incorrect_answers: [
      "Ignoró por completo la práctica del bautismo por los muertos",
      "Adoptó la práctica de otras religiones sin modificaciones",
      "Limitó el bautismo por los muertos a ciertos grupos específicos",
    ],
  },
  {
    id: 1005,
    difficulty: "Medio",
    question:
      "¿Cómo manejó José Smith las críticas internas y las controversias doctrinales dentro de la Iglesia de Jesucristo de los Santos de los Últimos Días en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Respondió con revelaciones adicionales y conferencias doctrinales para aclarar las enseñanzas y resolver disputas",
    incorrect_answers: [
      "Ignoró por completo las críticas y controversias doctrinales",
      "Eliminó a los críticos de la comunidad sin diálogo",
      "Delegó la resolución de disputas a líderes locales sin intervención personal",
    ],
  },
  {
    id: 1006,
    difficulty: "Difícil",
    question:
      "¿Qué legado dejó José Smith en la teología de la vida familiar y la estructura doméstica dentro de la Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Enseñó la importancia del matrimonio eterno y la unidad familiar como base de la sociedad celestial",
    incorrect_answers: [
      "Ignoró completamente la estructura familiar en la teología",
      "Promovió modelos familiares no convencionales",
      "Limitó la estructura familiar a una forma temporal sin importancia eterna",
    ],
  },
  {
    id: 1007,
    difficulty: "Fácil",
    question:
      "¿Qué contribuciones hizo José Smith a la teología de la expiación y la redención a través de Jesucristo dentro de la Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Enseñó que la expiación de Jesucristo proporciona la redención de los pecados y la oportunidad de arrepentirse",
    incorrect_answers: [
      "Negó la necesidad de la expiación y la redención en la teología",
      "Promovió métodos alternativos de redención personal",
      "Excluyó la expiación de la doctrina central de la Iglesia",
    ],
  },
  {
    id: 1008,
    difficulty: "Medio",
    question:
      "¿Cómo manejó José Smith la expansión y la administración de la economía local en Nauvoo, Illinois, durante su liderazgo?",
    category: historia,
    correct_answer:
      "Estableció políticas económicas y sociales para promover la autosuficiencia y el bienestar comunitario",
    incorrect_answers: [
      "Ignoró completamente la economía local en favor de asuntos espirituales",
      "Dejó la economía local en manos de líderes civiles sin intervención personal",
      "Promovió una economía basada en la caridad y donaciones externas",
    ],
  },
  {
    id: 1009,
    difficulty: "Difícil",
    question:
      "¿Qué impacto tuvieron las enseñanzas de José Smith sobre la estructura y la función de los consejos y quórums en la administración de la Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Organizó consejos y quórums para facilitar la administración y la toma de decisiones dentro de la Iglesia",
    incorrect_answers: [
      "Desestimó la necesidad de consejos y quórums en la administración de la Iglesia",
      "Promovió un sistema de liderazgo individual sin estructuras formales",
      "Limitó la autoridad de los consejos y quórums a funciones ceremoniales",
    ],
  },
  {
    id: 1010,
    difficulty: "Fácil",
    question:
      "¿Cuál fue el impacto de José Smith en la educación religiosa y espiritual dentro de la comunidad de los Santos de los Últimos Días en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Promovió la educación religiosa y espiritual a través de la enseñanza del evangelio y la organización de escuelas",
    incorrect_answers: [
      "Ignoró completamente la educación religiosa y espiritual",
      "Dejó la educación en manos de líderes locales sin intervención personal",
      "Promovió un sistema educativo exclusivamente secular",
    ],
  },
  {
    id: 1011,
    difficulty: "Medio",
    question:
      "¿Cómo manejó José Smith las relaciones interreligiosas y ecuménicas durante su liderazgo en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Negoció la cooperación y el diálogo interreligioso para promover la tolerancia y el entendimiento mutuo",
    incorrect_answers: [
      "Ignoró por completo las relaciones interreligiosas",
      "Promovió la competencia y la rivalidad religiosa",
      "Desafió abiertamente a otras religiones sin diálogo",
    ],
  },
  {
    id: 1012,
    difficulty: "Difícil",
    question:
      "¿Qué estrategias utilizó José Smith para garantizar la seguridad y la protección de los Santos de los Últimos Días durante la persecución en Missouri y Illinois?",
    category: historia,
    correct_answer:
      "Organizó milicias y fortificaciones defensivas para proteger a la comunidad de ataques externos",
    incorrect_answers: [
      "Dependió completamente de la ayuda del gobierno federal para la protección",
      "Abandonó la comunidad en secreto para evitar la persecución",
      "Negoció un acuerdo de paz con los perseguidores para evitar conflictos",
    ],
  },
  {
    id: 1013,
    difficulty: "Fácil",
    question:
      "¿Cuál fue la visión de José Smith sobre el papel de los profetas y la revelación continua en la Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Enseñó que los profetas reciben revelación continua para guiar a la Iglesia según la voluntad de Dios",
    incorrect_answers: [
      "Negó la necesidad de profetas y revelación en la Iglesia",
      "Limitó la revelación a asuntos personales sin impacto comunitario",
      "Delegó la autoridad profética a líderes locales sin intervención personal",
    ],
  },
  {
    id: 1014,
    difficulty: "Medio",
    question:
      "¿Cómo influyó José Smith en la política local y estatal durante su liderazgo en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Negoció tratados y acuerdos con líderes locales y estatales para asegurar los derechos de los miembros de la Iglesia",
    incorrect_answers: [
      "Se mantuvo al margen de la política local",
      "Desafió abiertamente las leyes locales y estatales",
      "Abandonó la ciudad en secreto para evitar conflictos",
    ],
  },
  {
    id: 1015,
    difficulty: "Difícil",
    question:
      "¿Qué impacto tuvieron las enseñanzas de José Smith sobre la relación entre Dios y la humanidad dentro de la teología de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Enseñó que la humanidad puede tener una relación personal y directa con Dios",
    incorrect_answers: [
      "Enseñó que Dios es inaccesible para la humanidad",
      "Enseñó que Dios interviene directamente en todos los asuntos humanos",
      "Enseñó que solo a través de mediadores humanos se puede acceder a Dios",
    ],
  },
  {
    id: 1016,
    difficulty: "Fácil",
    question:
      "¿Cuál fue la contribución de José Smith al desarrollo de la teología sobre la naturaleza divina y la exaltación dentro de la Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Enseñó que los seres humanos pueden llegar a ser como Dios mediante la obediencia a los mandamientos y la fe en Jesucristo",
    incorrect_answers: [
      "Negó la posibilidad de la exaltación personal",
      "Promovió la deificación inmediata de todos los humanos",
      "No abordó este tema en sus enseñanzas",
    ],
  },
  {
    id: 1017,
    difficulty: "Medio",
    question:
      "¿Cómo influyó José Smith en la expansión y el desarrollo de la educación formal dentro de la comunidad de los Santos de los Últimos Días en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Fundó escuelas y promovió la educación académica y religiosa entre los miembros de la Iglesia",
    incorrect_answers: [
      "Abandonó completamente la educación formal",
      "Limitó la educación a líderes religiosos selectos",
      "Estableció un sistema educativo exclusivamente para mujeres",
    ],
  },
  {
    id: 1018,
    difficulty: "Difícil",
    question:
      "¿Qué eventos llevaron a la muerte de José Smith y su hermano Hyrum en Carthage, Illinois?",
    category: historia,
    correct_answer:
      "Fueron asesinados por una turba en un ataque a la cárcel donde estaban detenidos",
    incorrect_answers: [
      "Murieron en un accidente trágico",
      "Fueron ejecutados por órdenes del gobierno federal",
      "Murieron en un intento fallido de fuga",
    ],
  },
  {
    id: 1019,
    difficulty: "Fácil",
    question:
      "¿Qué iniciativas lideró José Smith para promover la salud física y el bienestar entre los miembros de la Iglesia de Jesucristo de los Santos de los Últimos Días en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Estableció programas de salud pública y prácticas higiénicas entre los miembros",
    incorrect_answers: [
      "Ignoró completamente la salud física de los miembros",
      "Promovió métodos médicos no convencionales",
      "Exigió el uso de métodos de salud importados de Europa",
    ],
  },
  {
    id: 1020,
    difficulty: "Medio",
    question:
      "¿Cómo influenció José Smith en la política local y estatal durante su residencia en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Negoció tratados y acuerdos con líderes locales y estatales para asegurar los derechos de los miembros de la Iglesia",
    incorrect_answers: [
      "Se mantuvo al margen de la política local",
      "Desafió abiertamente las leyes locales y estatales",
      "Abandonó la ciudad en secreto para evitar conflictos",
    ],
  },
  {
    id: 1021,
    difficulty: "Difícil",
    question:
      "¿Qué impacto tuvieron las visiones y revelaciones de José Smith sobre la naturaleza del sacerdocio en la teología de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Restauró la autoridad del sacerdocio y sus funciones específicas en la administración de la Iglesia",
    incorrect_answers: [
      "Eliminó la autoridad del sacerdocio de la Iglesia",
      "Reformó completamente la estructura del sacerdocio",
      "Estableció una jerarquía sacerdotal completamente nueva",
    ],
  },
  {
    id: 1022,
    difficulty: "Fácil",
    question:
      "¿Cuál fue la visión de José Smith sobre el propósito del Libro de Mormón?",
    category: historia,
    correct_answer:
      "Ser otro testamento de Jesucristo y enseñar las doctrinas de salvación",
    incorrect_answers: [
      "Promover la literatura religiosa",
      "Justificar la colonización de América",
      "Registrar la historia antigua de los pueblos americanos",
    ],
  },
  {
    id: 1023,
    difficulty: "Medio",
    question:
      "¿Cómo manejó José Smith la relación entre la Iglesia de Jesucristo de los Santos de los Últimos Días y el gobierno federal de Estados Unidos durante su liderazgo en Nauvoo, Illinois?",
    category: historia,
    correct_answer:
      "Negoció la ciudadanía y los derechos civiles de los miembros de la Iglesia con el gobierno federal",
    incorrect_answers: [
      "Desafió abiertamente la autoridad federal",
      "Abandonó la ciudad en secreto para evitar el conflicto",
      "Negoció un tratado de separación con el gobierno federal",
    ],
  },
  {
    id: 1024,
    difficulty: "Difícil",
    question:
      "¿Qué impacto tuvieron las enseñanzas de José Smith sobre la teología de la familia y la estructura familiar dentro de la Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: historia,
    correct_answer:
      "Restauró doctrinas sobre el papel eterno de la familia y el matrimonio celestial en la teología de la Iglesia",
    incorrect_answers: [
      "Negó la importancia de la estructura familiar en la teología",
      "Adoptó modelos familiares no convencionales",
      "Promovió la idea de una familia exclusivamente espiritual",
    ],
  },

  {
    id: 1025,
    difficulty: "Fácil",
    question:
      "¿Cuál fue el primer libro sagrado que José Smith tradujo después del Libro de Mormón?",
    category: historia,
    correct_answer: "El Libro de Abraham",
    incorrect_answers: [
      "El Libro de Moisés",
      "El Libro de Enoc",
      "El Libro de Jeremías",
    ],
  },
  {
    id: 1026,
    difficulty: "Medio",
    question:
      "¿Qué evento marcó el inicio de la persecución masiva contra los Santos de los Últimos Días en Missouri?",
    category: historia,
    correct_answer: "El Edicto de Exterminio de Missouri en 1838",
    incorrect_answers: [
      "La Batalla de Nauvoo",
      "El Incidente del Nauvoo Expositor",
      "La Migración a Utah",
    ],
  },
  {
    id: 1027,
    difficulty: "Fácil",
    question: "¿Cuál fue el nombre de la primera esposa de José Smith?",
    category: historia,
    correct_answer: "Emma Hale Smith",
    incorrect_answers: ["Lucy Mack Smith", "Eliza R. Snow", "Sarah Cleveland"],
  },
  {
    id: 1028,
    difficulty: "Medio",
    question:
      "¿Qué ciudad fue fundada por los Santos de los Últimos Días después de ser expulsados de Missouri?",
    category: historia,
    correct_answer: "Nauvoo, Illinois",
    incorrect_answers: [
      "Kirtland, Ohio",
      "Salt Lake City, Utah",
      "Far West, Missouri",
    ],
  },
  {
    id: 1029,
    difficulty: "Difícil",
    question:
      "¿Qué revelación recibió José Smith que permitió a los Santos de los Últimos Días practicar la poligamia?",
    category: historia,
    correct_answer: "La Revelación de la Poligamia (Sección 132 del D&C)",
    incorrect_answers: [
      "La Primera Visión",
      "La Revelación de Kirtland",
      "La Revelación de Missouri",
    ],
  },
  {
    id: 1030,
    difficulty: "Fácil",
    question:
      "¿Cuál fue el nombre del periódico que José Smith fundó en Nauvoo?",
    category: historia,
    correct_answer: "Nauvoo Expositor",
    incorrect_answers: [
      "Times and Seasons",
      "Gospel Reflector",
      "Evening and Morning Star",
    ],
  },
  {
    id: 431,
    difficulty: "Medio",
    question:
      "¿Qué evento llevó a la destrucción de la imprenta del Nauvoo Expositor?",
    category: historia,
    correct_answer: "La ordenanza de Nauvoo para destruir la imprenta",
    incorrect_answers: [
      "Un incendio accidental",
      "Un ataque de opositores",
      "Un terremoto",
    ],
  },
  {
    id: 1032,
    difficulty: "Difícil",
    question: "¿Qué cargo político ocupó José Smith en Nauvoo, Illinois?",
    category: historia,
    correct_answer: "Alcalde de Nauvoo",
    incorrect_answers: [
      "Gobernador de Illinois",
      "Miembro del Congreso",
      "Juez de la Corte Suprema",
    ],
  },
  {
    id: 1033,
    difficulty: "Fácil",
    question:
      "¿Cuál fue el nombre del primer templo que los Santos de los Últimos Días construyeron?",
    category: historia,
    correct_answer: "Templo de Kirtland",
    incorrect_answers: [
      "Templo de Nauvoo",
      "Templo de Salt Lake City",
      "Templo de St. George",
    ],
  },
  {
    id: 1034,
    difficulty: "Medio",
    question:
      "¿Qué organización fue fundada por José Smith para ayudar a los pobres y necesitados?",
    category: historia,
    correct_answer: "La Orden de Enoch",
    incorrect_answers: [
      "La Hermandad de la Caridad",
      "La Sociedad de Socorro",
      "La Asociación de Beneficencia",
    ],
  },
  {
    id: 1035,
    difficulty: "Difícil",
    question:
      "¿Qué revelación recibió José Smith que introdujo la práctica del bautismo por los muertos?",
    category: historia,
    correct_answer: "La Revelación de la Obra del Templo (Sección 124 del D&C)",
    incorrect_answers: [
      "La Revelación de la Poligamia",
      "La Revelación de Kirtland",
      "La Revelación de Missouri",
    ],
  },
  {
    id: 1036,
    difficulty: "Fácil",
    question:
      "¿Cuál fue el nombre del primer periódico que José Smith publicó?",
    category: historia,
    correct_answer: "The Evening and the Morning Star",
    incorrect_answers: [
      "Times and Seasons",
      "Nauvoo Expositor",
      "Gospel Reflector",
    ],
  },
  {
    id: 1037,
    difficulty: "Medio",
    question:
      "¿Qué evento llevó a la expulsión de los Santos de los Últimos Días de Kirtland, Ohio?",
    category: historia,
    correct_answer: "La persecución y la inestabilidad financiera",
    incorrect_answers: ["La Guerra Civil", "Un terremoto", "Una epidemia"],
  },
  {
    id: 1038,
    difficulty: "Difícil",
    question:
      "¿Qué revelación recibió José Smith que introdujo la práctica del sacerdocio de Melquisedec?",
    category: historia,
    correct_answer: "La Revelación del Sacerdocio (Sección 107 del D&C)",
    incorrect_answers: [
      "La Revelación de la Poligamia",
      "La Revelación de Kirtland",
      "La Revelación de Missouri",
    ],
  },
  {
    id: 1039,
    difficulty: "Fácil",
    question: "¿Cuál fue el nombre del primer libro que José Smith publicó?",
    category: historia,
    correct_answer: "El Libro de Mormón",
    incorrect_answers: [
      "El Libro de Abraham",
      "El Libro de Enoc",
      "El Libro de Moisés",
    ],
  },
  {
    id: 1040,
    difficulty: "Medio",
    question:
      "¿Qué evento llevó a la fundación de la ciudad de Far West, Missouri?",
    category: historia,
    correct_answer: "La migración de los Santos de los Últimos Días a Missouri",
    incorrect_answers: ["La Guerra Civil", "Un terremoto", "Una epidemia"],
  },
  {
    id: 1041,
    difficulty: "Difícil",
    question:
      "¿Qué revelación recibió José Smith que introdujo la práctica del sacerdocio de Aarón?",
    category: historia,
    correct_answer: "La Revelación del Sacerdocio (Sección 107 del D&C)",
    incorrect_answers: [
      "La Revelación de la Poligamia",
      "La Revelación de Kirtland",
      "La Revelación de Missouri",
    ],
  },
  {
    id: 1042,
    difficulty: "Fácil",
    question:
      "¿Cuál fue el nombre del primer periódico que José Smith publicó en Nauvoo?",
    category: historia,
    correct_answer: "Times and Seasons",
    incorrect_answers: [
      "The Evening and the Morning Star",
      "Nauvoo Expositor",
      "Gospel Reflector",
    ],
  },
  {
    id: 1043,
    difficulty: "Medio",
    question:
      "¿Qué evento llevó a la expulsión de los Santos de los Últimos Días de Far West, Missouri?",
    category: historia,
    correct_answer: "El Edicto de Exterminio de Missouri",
    incorrect_answers: ["La Guerra Civil", "Un terremoto", "Una epidemia"],
  },
  {
    id: 1044,
    difficulty: "Difícil",
    question:
      "¿Qué revelación recibió José Smith que introdujo la práctica de la investidura del templo?",
    category: historia,
    correct_answer: "La Revelación de la Obra del Templo (Sección 124 del D&C)",
    incorrect_answers: [
      "La Revelación de la Poligamia",
      "La Revelación de Kirtland",
      "La Revelación de Missouri",
    ],
  },
  {
    id: 1045,
    difficulty: "Fácil",
    question:
      "¿Cuál fue el nombre del primer templo que los Santos de los Últimos Días construyeron en Nauvoo?",
    category: historia,
    correct_answer: "Templo de Nauvoo",
    incorrect_answers: [
      "Templo de Kirtland",
      "Templo de Salt Lake City",
      "Templo de St. George",
    ],
  },
  {
    id: 1046,
    difficulty: "Medio",
    question:
      "¿Qué evento llevó a la fundación de la ciudad de Kirtland, Ohio?",
    category: historia,
    correct_answer: "La migración de los Santos de los Últimos Días a Ohio",
    incorrect_answers: ["La Guerra Civil", "Un terremoto", "Una epidemia"],
  },
  {
    id: 1047,
    difficulty: "Difícil",
    question:
      "¿Qué revelación recibió José Smith que introdujo la práctica de la investidura del sacerdocio?",
    category: historia,
    correct_answer: "La Revelación del Sacerdocio (Sección 107 del D&C)",
    incorrect_answers: [
      "La Revelación de la Poligamia",
      "La Revelación de Kirtland",
      "La Revelación de Missouri",
    ],
  },
  {
    id: 1048,
    difficulty: "Fácil",
    question:
      "¿Cuál fue el nombre del primer periódico que José Smith publicó en Kirtland?",
    category: historia,
    correct_answer: "The Evening and the Morning Star",
    incorrect_answers: [
      "Times and Seasons",
      "Nauvoo Expositor",
      "Gospel Reflector",
    ],
  },
  {
    id: 1049,
    difficulty: "Medio",
    question:
      "¿Qué evento llevó a la expulsión de los Santos de los Últimos Días de Nauvoo, Illinois?",
    category: historia,
    correct_answer: "La persecución y la inestabilidad política",
    incorrect_answers: ["La Guerra Civil", "Un terremoto", "Una epidemia"],
  },
  {
    id: 1050,
    difficulty: "Difícil",
    question:
      "¿Qué revelación recibió José Smith que introdujo la práctica de la investidura del templo para los muertos?",
    category: historia,
    correct_answer: "La Revelación de la Obra del Templo (Sección 124 del D&C)",
    incorrect_answers: [
      "La Revelación de la Poligamia",
      "La Revelación de Kirtland",
      "La Revelación de Missouri",
    ],
  },
  {
    id: 1051,
    difficulty: "Fácil",
    question:
      "¿Cuál fue el nombre del primer templo que los Santos de los Últimos Días construyeron en Utah?",
    category: historia,
    correct_answer: "Templo de Salt Lake City",
    incorrect_answers: [
      "Templo de Kirtland",
      "Templo de Nauvoo",
      "Templo de St. George",
    ],
  },
  {
    id: 1052,
    difficulty: "Medio",
    question:
      "¿Qué evento llevó a la fundación de la ciudad de Salt Lake City, Utah?",
    category: historia,
    correct_answer: "La migración de los Santos de los Últimos Días a Utah",
    incorrect_answers: ["La Guerra Civil", "Un terremoto", "Una epidemia"],
  },
  {
    id: 1053,
    difficulty: "Difícil",
    question:
      "¿Qué revelación recibió José Smith que introdujo la práctica de la investidura del sacerdocio para los muertos?",
    category: historia,
    correct_answer: "La Revelación del Sacerdocio (Sección 107 del D&C)",
    incorrect_answers: [
      "La Revelación de la Poligamia",
      "La Revelación de Kirtland",
      "La Revelación de Missouri",
    ],
  },
  {
    id: 1054,
    difficulty: "Fácil",
    question:
      "¿Cuál fue el nombre del primer periódico que José Smith publicó en Salt Lake City?",
    category: historia,
    correct_answer: "Deseret News",
    incorrect_answers: [
      "Times and Seasons",
      "Nauvoo Expositor",
      "Gospel Reflector",
    ],
  },
  {
    id: 1055,
    difficulty: "Medio",
    question:
      "¿Qué evento llevó a la expulsión de los Santos de los Últimos Días de Salt Lake City, Utah?",
    category: historia,
    correct_answer: "La persecución y la inestabilidad política",
    incorrect_answers: ["La Guerra Civil", "Un terremoto", "Una epidemia"],
  },
  {
    id: 1056,
    difficulty: "Difícil",
    question:
      "¿Qué revelación recibió José Smith que introdujo la práctica de la investidura del templo para los vivos?",
    category: historia,
    correct_answer: "La Revelación de la Obra del Templo (Sección 124 del D&C)",
    incorrect_answers: [
      "La Revelación de la Poligamia",
      "La Revelación de Kirtland",
      "La Revelación de Missouri",
    ],
  },
  {
    id: 1057,
    difficulty: "Fácil",
    question:
      "¿Cuál fue el nombre del primer templo que los Santos de los Últimos Días construyeron en St. George?",
    category: historia,
    correct_answer: "Templo de St. George",
    incorrect_answers: [
      "Templo de Kirtland",
      "Templo de Nauvoo",
      "Templo de Salt Lake City",
    ],
  },
  {
    id: 1058,
    difficulty: "Medio",
    question:
      "¿Qué evento llevó a la fundación de la ciudad de St. George, Utah?",
    category: historia,
    correct_answer: "La migración de los Santos de los Últimos Días a Utah",
    incorrect_answers: ["La Guerra Civil", "Un terremoto", "Una epidemia"],
  },
  {
    id: 1059,
    difficulty: "Difícil",
    question:
      "¿Qué revelación recibió José Smith que introdujo la práctica de la investidura del sacerdocio para los vivos?",
    category: historia,
    correct_answer: "La Revelación del Sacerdocio (Sección 107 del D&C)",
    incorrect_answers: [
      "La Revelación de la Poligamia",
      "La Revelación de Kirtland",
      "La Revelación de Missouri",
    ],
  },
  {
    id: 1060,
    difficulty: "Fácil",
    question:
      "¿Cuál fue el nombre del primer periódico que José Smith publicó en St. George?",
    category: historia,
    correct_answer: "Deseret News",
    incorrect_answers: [
      "Times and Seasons",
      "Nauvoo Expositor",
      "Gospel Reflector",
    ],
  },
  {
    id: 1061,
    difficulty: "Medio",
    question:
      "¿Qué evento llevó a la expulsión de los Santos de los Últimos Días de St. George, Utah?",
    category: historia,
    correct_answer: "La persecución y la inestabilidad política",
    incorrect_answers: ["La Guerra Civil", "Un terremoto", "Una epidemia"],
  },
  {
    id: 1062,
    difficulty: "Difícil",
    question:
      "¿Qué revelación recibió José Smith que introdujo la práctica de la investidura del templo para los vivos y los muertos?",
    category: historia,
    correct_answer: "La Revelación de la Obra del Templo (Sección 124 del D&C)",
    incorrect_answers: [
      "La Revelación de la Poligamia",
      "La Revelación de Kirtland",
      "La Revelación de Missouri",
    ],
  },
  {
    id: 1063,
    difficulty: "Fácil",
    question:
      "¿Cuál fue el nombre del primer templo que los Santos de los Últimos Días construyeron en Manti?",
    category: historia,
    correct_answer: "Templo de Manti",
    incorrect_answers: [
      "Templo de Kirtland",
      "Templo de Nauvoo",
      "Templo de Salt Lake City",
    ],
  },
  {
    id: 1064,
    difficulty: "Medio",
    question: "¿Qué evento llevó a la fundación de la ciudad de Manti, Utah?",
    category: historia,
    correct_answer: "La migración de los Santos de los Últimos Días a Utah",
    incorrect_answers: ["La Guerra Civil", "Un terremoto", "Una epidemia"],
  },
  {
    id: 1065,
    difficulty: "Difícil",
    question:
      "¿Qué revelación recibió José Smith que introdujo la práctica de la investidura del sacerdocio para los vivos y los muertos?",
    category: historia,
    correct_answer: "La Revelación del Sacerdocio (Sección 107 del D&C)",
    incorrect_answers: [
      "La Revelación de la Poligamia",
      "La Revelación de Kirtland",
      "La Revelación de Missouri",
    ],
  },
  {
    id: 1066,
    difficulty: "Fácil",
    question:
      "¿Cuál fue el nombre del primer periódico que José Smith publicó en Manti?",
    category: historia,
    correct_answer: "Deseret News",
    incorrect_answers: [
      "Times and Seasons",
      "Nauvoo Expositor",
      "Gospel Reflector",
    ],
  },
  {
    id: 1067,
    difficulty: "Medio",
    question:
      "¿Qué evento llevó a la expulsión de los Santos de los Últimos Días de Manti, Utah?",
    category: historia,
    correct_answer: "La persecución y la inestabilidad política",
    incorrect_answers: ["La Guerra Civil", "Un terremoto", "Una epidemia"],
  },
  {
    id: 1068,
    difficulty: "Difícil",
    question:
      "¿Qué revelación recibió José Smith que introdujo la práctica de la investidura del templo para los vivos y los muertos?",
    category: historia,
    correct_answer: "La Revelación de la Obra del Templo (Sección 124 del D&C)",
    incorrect_answers: [
      "La Revelación de la Poligamia",
      "La Revelación de Kirtland",
      "La Revelación de Missouri",
    ],
  },
  {
    id: 1069,
    difficulty: "Fácil",
    question:
      "¿Cuál fue el nombre del primer templo que los Santos de los Últimos Días construyeron en Logan?",
    category: historia,
    correct_answer: "Templo de Logan",
    incorrect_answers: [
      "Templo de Kirtland",
      "Templo de Nauvoo",
      "Templo de Salt Lake City",
    ],
  },
  {
    id: 1070,
    difficulty: "Medio",
    question: "¿Qué evento llevó a la fundación de la ciudad de Logan, Utah?",
    category: historia,
    correct_answer: "La migración de los Santos de los Últimos Días a Utah",
    incorrect_answers: ["La Guerra Civil", "Un terremoto", "Una epidemia"],
  },
  {
    id: 1071,
    difficulty: "Difícil",
    question:
      "¿Qué revelación recibió José Smith que introdujo la práctica de la investidura del sacerdocio para los vivos y los muertos?",
    category: historia,
    correct_answer: "La Revelación del Sacerdocio (Sección 107 del D&C)",
    incorrect_answers: [
      "La Revelación de la Poligamia",
      "La Revelación de Kirtland",
      "La Revelación de Missouri",
    ],
  },
  {
    id: 1072,
    difficulty: "Fácil",
    question:
      "¿Cuál fue el nombre del primer periódico que José Smith publicó en Logan?",
    category: historia,
    correct_answer: "Deseret News",
    incorrect_answers: [
      "Times and Seasons",
      "Nauvoo Expositor",
      "Gospel Reflector",
    ],
  },
  {
    id: 1073,
    difficulty: "Medio",
    question:
      "¿Qué evento llevó a la expulsión de los Santos de los Últimos Días de Logan, Utah?",
    category: historia,
    correct_answer: "La persecución y la inestabilidad política",
    incorrect_answers: ["La Guerra Civil", "Un terremoto", "Una epidemia"],
  },
  {
    id: 1074,
    difficulty: "Difícil",
    question:
      "¿Qué revelación recibió José Smith que introdujo la práctica de la investidura del templo para los vivos y los muertos?",
    category: historia,
    correct_answer: "La Revelación de la Obra del Templo (Sección 124 del D&C)",
    incorrect_answers: [
      "La Revelación de la Poligamia",
      "La Revelación de Kirtland",
      "La Revelación de Missouri",
    ],
  },

  /* Ordenanzas */

  {
    id: 1130,
    difficulty: "Fácil",
    question:
      "¿Cuál es la ordenanza principal que se administra durante la oración sacramental en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer: "La Santa Cena",
    incorrect_answers: [
      "El bautismo",
      "La confirmación",
      "La ordenación al sacerdocio",
    ],
  },
  {
    id: 1131,
    difficulty: "Medio",
    question:
      "¿Qué promesa se renueva al participar de la Santa Cena según las oraciones sacramentales?",
    category: ordenanzas,
    correct_answer: "Recordar siempre a Jesucristo",
    incorrect_answers: [
      "Amar a nuestros prójimos",
      "Asistir a todas las reuniones de la Iglesia",
      "Seguir las enseñanzas de los profetas",
    ],
  },
  {
    id: 1132,
    difficulty: "Difícil",
    question:
      "¿Qué significado tiene el agua en la ordenanza del bautismo según la doctrina de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Simboliza el lavamiento de los pecados y el nacimiento espiritual",
    incorrect_answers: [
      "Simboliza el inicio de un nuevo camino en la vida",
      "Simboliza el compromiso con la Iglesia",
      "Simboliza la limpieza física y mental",
    ],
  },
  {
    id: 1133,
    difficulty: "Fácil",
    question:
      "¿Cuál es el propósito de la ordenanza del matrimonio en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Unir a la pareja por tiempo y eternidad bajo la autoridad del sacerdocio",
    incorrect_answers: [
      "Celebrar el amor entre dos personas",
      "Legalizar la unión civil ante la ley",
      "Consolidar la familia ante la comunidad",
    ],
  },
  {
    id: 1134,
    difficulty: "Medio",
    question:
      "¿Cuál es la ordenanza que confiere el Espíritu Santo y se administra a través de la imposición de manos por parte de alguien con el sacerdocio?",
    category: ordenanzas,
    correct_answer: "La confirmación",
    incorrect_answers: [
      "El bautismo",
      "La Santa Cena",
      "La bendición del sacramento",
    ],
  },
  {
    id: 1135,
    difficulty: "Difícil",
    question:
      "¿Qué principios y promesas fundamentales se encuentran en los Artículos de Fe de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Creencias esenciales sobre la Deidad, la expiación de Cristo, el arrepentimiento, el bautismo, y el don del Espíritu Santo",
    incorrect_answers: [
      "Reglas detalladas para la conducta moral",
      "Instrucciones específicas para la administración de la Iglesia",
      "Normas sociales para la vida comunitaria",
    ],
  },
  {
    id: 1136,
    difficulty: "Fácil",
    question:
      "¿Qué relatan los relatos del testimonio de José Smith sobre su experiencia de la Primera Visión?",
    category: ordenanzas,
    correct_answer:
      "Visión de Dios el Padre y Jesucristo, que inició la restauración del evangelio en la tierra",
    incorrect_answers: [
      "Un encuentro con ángeles que le instruyeron sobre su misión",
      "Una visión simbólica sobre el destino de la humanidad",
      "Una revelación sobre el futuro de la Iglesia",
    ],
  },
  {
    id: 1137,
    difficulty: "Medio",
    question:
      "¿Qué significado tiene la ordenanza del bautismo en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Simboliza el lavamiento de los pecados y el compromiso de seguir a Cristo",
    incorrect_answers: [
      "Es un rito de iniciación social en la comunidad",
      "Es una muestra pública de fe ante la congregación",
      "Es un acto para recibir bendiciones materiales",
    ],
  },
  {
    id: 1138,
    difficulty: "Difícil",
    question:
      "¿Cuál es el significado teológico de la ordenanza de la investidura en los templos de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Se recibe conocimiento y poder divinos para la vida eterna",
    incorrect_answers: [
      "Es una representación simbólica de eventos históricos",
      "Es un acto de dedicación personal al servicio religioso",
      "Es una oportunidad para alcanzar estatus social dentro de la Iglesia",
    ],
  },
  {
    id: 1139,
    difficulty: "Fácil",
    question:
      "¿Cuál es la doctrina central sobre la familia en 'La familia: una proclamación para el mundo'?",
    category: ordenanzas,
    correct_answer:
      "La familia es ordenada por Dios y es fundamental en Su plan eterno",
    incorrect_answers: [
      "La familia es una institución social sin relación espiritual",
      "La familia es importante para la estabilidad económica",
      "La familia es un concepto cultural variable sin fundamentos religiosos",
    ],
  },
  {
    id: 1140,
    difficulty: "Medio",
    question:
      "¿Qué enseñanzas clave sobre Jesucristo se presentan en el documento 'El Cristo Viviente'?",
    category: ordenanzas,
    correct_answer:
      "Jesucristo es el Salvador y Redentor del mundo, el Hijo de Dios",
    incorrect_answers: [
      "Jesucristo es un maestro sabio y ético",
      "Jesucristo es un líder político revolucionario",
      "Jesucristo es un profeta secundario en la historia religiosa",
    ],
  },
  {
    id: 1141,
    difficulty: "Difícil",
    question:
      "¿Cuál es la importancia de la restauración del evangelio según las creencias de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Restauró la autoridad y la plenitud del evangelio de Jesucristo en su forma original",
    incorrect_answers: [
      "Cambiaron las enseñanzas del evangelio para adaptarse a la época moderna",
      "Revirtió los principios del evangelio a su estado primitivo",
      "Estableció nuevas doctrinas y principios desconocidos en la antigüedad",
    ],
  },
  {
    id: 1142,
    difficulty: "Fácil",
    question:
      "¿Cuál es la importancia de los Artículos de Fe en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Resumen las creencias fundamentales de la Iglesia y sus principios básicos",
    incorrect_answers: [
      "Proporcionan reglas estrictas para la conducta de los miembros",
      "Establecen normas sociales para la comunidad",
      "Detallan las estructuras de liderazgo de la Iglesia",
    ],
  },
  {
    id: 1143,
    difficulty: "Medio",
    question:
      "¿Qué significado tiene la ordenanza del sacerdocio en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Es el poder y la autoridad de Dios dado a los hombres para actuar en Su nombre",
    incorrect_answers: [
      "Es una distinción honorífica dentro de la comunidad",
      "Es un título de liderazgo temporal en la Iglesia",
      "Es un símbolo de estatus social dentro de la comunidad",
    ],
  },

  {
    id: 1144,
    difficulty: "Difícil",
    question:
      "¿Qué enseñanzas específicas sobre la exaltación se encuentran en 'La familia: una proclamación para el mundo'?",
    category: ordenanzas,
    correct_answer:
      "Los esposos y esposas fieles pueden vivir juntos en la eternidad, progresar y tener posteridad",
    incorrect_answers: [
      "Instrucciones detalladas sobre las normas familiares en la sociedad moderna",
      "Normas económicas para la administración de la familia",
      "Normas culturales sobre la vida comunitaria",
    ],
  },
  {
    id: 1145,
    difficulty: "Difícil",
    question:
      "¿Qué significado tiene el agua en la ordenanza del bautismo según la doctrina de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Simboliza el lavamiento de los pecados y el nacimiento espiritual",
    incorrect_answers: [
      "Simboliza el inicio de un nuevo camino en la vida",
      "Simboliza el compromiso con la Iglesia",
      "Simboliza la limpieza física y mental",
    ],
  },
  {
    id: 1146,
    difficulty: "Fácil",
    question:
      "¿Cuál es el propósito de la ordenanza del matrimonio en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Unir a la pareja por tiempo y eternidad bajo la autoridad del sacerdocio",
    incorrect_answers: [
      "Celebrar el amor entre dos personas",
      "Legalizar la unión civil ante la ley",
      "Consolidar la familia ante la comunidad",
    ],
  },
  {
    id: 1147,
    difficulty: "Medio",
    question:
      "¿Cuál es la ordenanza que confiere el Espíritu Santo y se administra a través de la imposición de manos por parte de alguien con el sacerdocio?",
    category: ordenanzas,
    correct_answer: "La confirmación",
    incorrect_answers: [
      "El bautismo",
      "La Santa Cena",
      "La bendición del sacramento",
    ],
  },
  {
    id: 1148,
    difficulty: "Difícil",
    question:
      "¿Qué principios y promesas fundamentales se encuentran en los Artículos de Fe de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Creencias esenciales sobre la Deidad, la expiación de Cristo, el arrepentimiento, el bautismo, y el don del Espíritu Santo",
    incorrect_answers: [
      "Reglas detalladas para la conducta moral",
      "Instrucciones específicas para la administración de la Iglesia",
      "Normas sociales para la vida comunitaria",
    ],
  },
  {
    id: 1149,
    difficulty: "Fácil",
    question:
      "¿Qué relatan los relatos del testimonio de José Smith sobre su experiencia de la Primera Visión?",
    category: ordenanzas,
    correct_answer:
      "Visión de Dios el Padre y Jesucristo, que inició la restauración del evangelio en la tierra",
    incorrect_answers: [
      "Un encuentro con ángeles que le instruyeron sobre su misión",
      "Una visión simbólica sobre el destino de la humanidad",
      "Una revelación sobre el futuro de la Iglesia",
    ],
  },
  {
    id: 1150,
    difficulty: "Medio",
    question:
      "¿Qué significado tiene la ordenanza del bautismo en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Simboliza el lavamiento de los pecados y el compromiso de seguir a Cristo",
    incorrect_answers: [
      "Es un rito de iniciación social en la comunidad",
      "Es una muestra pública de fe ante la congregación",
      "Es un acto para recibir bendiciones materiales",
    ],
  },
  {
    id: 1151,
    difficulty: "Difícil",
    question:
      "¿Cuál es el significado teológico de la ordenanza de la investidura en los templos de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Se recibe conocimiento y poder divinos para la vida eterna",
    incorrect_answers: [
      "Es una representación simbólica de eventos históricos",
      "Es un acto de dedicación personal al servicio religioso",
      "Es una oportunidad para alcanzar estatus social dentro de la Iglesia",
    ],
  },
  {
    id: 1152,
    difficulty: "Fácil",
    question:
      "¿Qué enseñanzas centrales sobre la familia se encuentran en 'La familia: una proclamación para el mundo'?",
    category: ordenanzas,
    correct_answer:
      "La familia es ordenada por Dios y es fundamental en Su plan eterno",
    incorrect_answers: [
      "La familia es una institución social sin relación espiritual",
      "La familia es importante para la estabilidad económica",
      "La familia es un concepto cultural variable sin fundamentos religiosos",
    ],
  },
  {
    id: 1153,
    difficulty: "Medio",
    question:
      "¿Qué enseñanzas clave sobre Jesucristo se presentan en el documento 'El Cristo Viviente'?",
    category: ordenanzas,
    correct_answer:
      "Jesucristo es el Salvador y Redentor del mundo, el Hijo de Dios",
    incorrect_answers: [
      "Jesucristo es un maestro sabio y ético",
      "Jesucristo es un líder político revolucionario",
      "Jesucristo es un profeta secundario en la historia religiosa",
    ],
  },
  {
    id: 1154,
    difficulty: "Difícil",
    question:
      "¿Cuál es la importancia de la restauración del evangelio según las creencias de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Restauró la autoridad y la plenitud del evangelio de Jesucristo en su forma original",
    incorrect_answers: [
      "Cambiaron las enseñanzas del evangelio para adaptarse a la época moderna",
      "Revirtió los principios del evangelio a su estado primitivo",
      "Estableció nuevas doctrinas y principios desconocidos en la antigüedad",
    ],
  },
  {
    id: 1155,
    difficulty: "Fácil",
    question:
      "¿Cuál es la importancia de los Artículos de Fe en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Resumen las creencias fundamentales de la Iglesia y sus principios básicos",
    incorrect_answers: [
      "Proporcionan reglas estrictas para la conducta de los miembros",
      "Establecen normas sociales para la comunidad",
      "Detallan las estructuras de liderazgo de la Iglesia",
    ],
  },
  {
    id: 1156,
    difficulty: "Medio",
    question:
      "¿Qué significado tiene la ordenanza del sacerdocio en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Es el poder y la autoridad de Dios dado a los hombres para actuar en Su nombre",
    incorrect_answers: [
      "Es una distinción honorífica dentro de la comunidad",
      "Es un título de liderazgo temporal en la Iglesia",
      "Es un símbolo de estatus social dentro de la comunidad",
    ],
  },
  {
    id: 1157,
    difficulty: "Difícil",
    question:
      "¿Qué enseñanzas específicas sobre la exaltación se encuentran en 'La familia: una proclamación para el mundo'?",
    category: ordenanzas,
    correct_answer:
      "Los esposos y esposas fieles pueden vivir juntos en la eternidad, progresar y tener posteridad",
    incorrect_answers: [
      "Instrucciones detalladas sobre las normas familiares en la sociedad moderna",
      "Normas económicas para la administración de la familia",
      "Normas culturales sobre la vida comunitaria",
    ],
  },

  {
    id: 1156,
    difficulty: "Difícil",
    question:
      "¿Cuál es la importancia de las oraciones sacramentales en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Renuevan los convenios con Dios y recuerdan Su sacrificio expiatorio",
    incorrect_answers: [
      "Son rituales simbólicos sin impacto espiritual",
      "Son prácticas religiosas sin fundamento doctrinal",
      "Son tradiciones culturales para la comunidad de fe",
    ],
  },
  {
    id: 1157,
    difficulty: "Fácil",
    question:
      "¿Cuál es la importancia de los Artículos de Fe en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Resumen las creencias fundamentales de la Iglesia y sus principios básicos",
    incorrect_answers: [
      "Proporcionan reglas estrictas para la conducta de los miembros",
      "Establecen normas sociales para la comunidad",
      "Detallan las estructuras de liderazgo de la Iglesia",
    ],
  },

  {
    id: 1159,
    difficulty: "Difícil",
    question:
      "¿Qué enseñanzas específicas sobre la exaltación se encuentran en 'La familia: una proclamación para el mundo'?",
    category: ordenanzas,
    correct_answer:
      "Los esposos y esposas fieles pueden vivir juntos en la eternidad, progresar y tener posteridad",
    incorrect_answers: [
      "La exaltación se alcanza automáticamente por el matrimonio",
      "Solo los líderes de la Iglesia pueden alcanzar la exaltación",
      "La exaltación es un estado inalcanzable para la mayoría de las personas",
    ],
  },
  {
    id: 1160,
    difficulty: "Fácil",
    question:
      "¿Qué principios esenciales se encuentran en 'La familia: una proclamación para el mundo'?",
    category: ordenanzas,
    correct_answer:
      "El matrimonio entre hombre y mujer es ordenado por Dios y es crucial para Su plan eterno",
    incorrect_answers: [
      "El matrimonio es opcional y no tiene relación con la salvación",
      "El matrimonio puede ser entre cualquier combinación de personas",
      "El matrimonio es solo una institución social sin implicaciones religiosas",
    ],
  },
  {
    id: 1161,
    difficulty: "Medio",
    question:
      "¿Qué significado tiene la ordenanza del sellamiento en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Une a las familias por tiempo y eternidad bajo la autoridad del sacerdocio",
    incorrect_answers: [
      "Es un ritual simbólico sin efecto real en la vida familiar",
      "Es una tradición cultural sin base teológica",
      "Es un acto de formalidad legal ante la sociedad",
    ],
  },
  {
    id: 1162,
    difficulty: "Difícil",
    question:
      "¿Cuál es el propósito principal de los Artículos de Fe en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Resumir las creencias y doctrinas fundamentales de la Iglesia para los miembros y no miembros",
    incorrect_answers: [
      "Establecer normas de conducta estrictas para los miembros",
      "Detallar la estructura de gobierno de la Iglesia",
      "Definir las políticas económicas y sociales de la Iglesia",
    ],
  },
  {
    id: 1163,
    difficulty: "Fácil",
    question:
      "¿Qué promesas específicas se hacen durante la ordenanza del sacerdocio en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Recibir el poder de actuar en el nombre de Dios y bendecir a los demás",
    incorrect_answers: [
      "Recibir una posición de liderazgo temporal dentro de la comunidad",
      "Recibir una compensación financiera por los servicios religiosos",
      "Recibir reconocimiento público por su servicio",
    ],
  },
  {
    id: 1164,
    difficulty: "Medio",
    question:
      "¿Qué significado tiene la ordenanza del bautismo por los muertos en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Permite a las personas fallecidas recibir las bendiciones del evangelio por medio de un representante viviente",
    incorrect_answers: [
      "Es una práctica simbólica sin efecto real en el más allá",
      "Es una tradición cultural para honrar a los antepasados",
      "Es un acto de memoria para recordar a los difuntos",
    ],
  },
  {
    id: 1165,
    difficulty: "Difícil",
    question:
      "¿Qué enseñanzas fundamentales sobre el papel de Jesucristo se encuentran en 'El Cristo Viviente'?",
    category: ordenanzas,
    correct_answer:
      "Jesucristo es el Hijo de Dios, el Salvador y Redentor del mundo",
    incorrect_answers: [
      "Jesucristo es un maestro moral y ético",
      "Jesucristo es un líder político y social",
      "Jesucristo es una figura mítica sin base histórica",
    ],
  },
  {
    id: 1166,
    difficulty: "Fácil",
    question:
      "¿Cuál es el propósito principal de 'La familia: una proclamación para el mundo' según las enseñanzas de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Fortalecer y proteger a la familia como la unidad fundamental de la sociedad",
    incorrect_answers: [
      "Definir roles de género estrictos dentro de la familia",
      "Promover un modelo específico de familia sin variaciones",
      "Eliminar la diversidad familiar en la comunidad",
    ],
  },
  {
    id: 1167,
    difficulty: "Medio",
    question:
      "¿Qué importancia tiene el testimonio de José Smith en la teología de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Es el testigo profético de la restauración del evangelio en los últimos días",
    incorrect_answers: [
      "Es un líder político y social",
      "Es un reformador religioso menor",
      "Es una figura simbólica sin influencia real",
    ],
  },
  {
    id: 1168,
    difficulty: "Difícil",
    question:
      "¿Cuál es la doctrina central sobre la naturaleza divina y la exaltación según las enseñanzas de José Smith?",
    category: ordenanzas,
    correct_answer:
      "Los seres humanos pueden llegar a ser como Dios mediante la obediencia a los mandamientos y la fe en Jesucristo",
    incorrect_answers: [
      "Solo los profetas pueden llegar a ser como Dios",
      "La exaltación es un estado inalcanzable para la mayoría de las personas",
      "La obediencia a las normas de la Iglesia es suficiente para alcanzar la exaltación",
    ],
  },
  {
    id: 1169,
    difficulty: "Fácil",
    question:
      "¿Qué principios esenciales se encuentran en los Artículos de Fe de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Creencias esenciales sobre la Deidad, la expiación de Cristo, el arrepentimiento, el bautismo, y el don del Espíritu Santo",
    incorrect_answers: [
      "Reglas detalladas para la conducta moral",
      "Instrucciones específicas para la administración de la Iglesia",
      "Normas sociales para la vida comunitaria",
    ],
  },
  {
    id: 1170,
    difficulty: "Medio",
    question:
      "¿Qué importancia tiene la restauración del evangelio según las enseñanzas de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Restauró la autoridad y la plenitud del evangelio de Jesucristo en su forma original",
    incorrect_answers: [
      "Cambiaron las enseñanzas del evangelio para adaptarse a la época moderna",
      "Revirtió los principios del evangelio a su estado primitivo",
      "Estableció nuevas doctrinas y principios desconocidos en la antigüedad",
    ],
  },
  {
    id: 1171,
    difficulty: "Difícil",
    question:
      "¿Cuál es la importancia de las oraciones sacramentales en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Renuevan los convenios con Dios y recuerdan Su sacrificio expiatorio",
    incorrect_answers: [
      "Son rituales simbólicos sin impacto espiritual",
      "Son prácticas religiosas sin fundamento doctrinal",
      "Son tradiciones culturales para la comunidad de fe",
    ],
  },
  {
    id: 1172,
    difficulty: "Fácil",
    question:
      "¿Cuál es la importancia de los Artículos de Fe en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Resumen las creencias fundamentales de la Iglesia y sus principios básicos",
    incorrect_answers: [
      "Proporcionan reglas estrictas para la conducta de los miembros",
      "Establecen normas sociales para la comunidad",
      "Detallan las estructuras de liderazgo de la Iglesia",
    ],
  },
  {
    id: 1173,
    difficulty: "Medio",
    question:
      "¿Qué enseñanzas específicas sobre el matrimonio y la familia se encuentran en 'La familia: una proclamación para el mundo'?",
    category: ordenanzas,
    correct_answer:
      "El matrimonio entre hombre y mujer es esencial para el plan eterno de Dios y la felicidad familiar",
    incorrect_answers: [
      "El matrimonio es una opción personal sin implicaciones religiosas",
      "El matrimonio puede ser entre cualquier combinación de personas",
      "El matrimonio es una institución cultural sin base teológica",
    ],
  },
  {
    id: 1174,
    difficulty: "Difícil",
    question:
      "¿Qué enseñanzas específicas sobre la exaltación se encuentran en 'La familia: una proclamación para el mundo'?",
    category: ordenanzas,
    correct_answer:
      "Los esposos y esposas fieles pueden vivir juntos en la eternidad, progresar y tener posteridad",
    incorrect_answers: [
      "La exaltación se alcanza automáticamente por el matrimonio",
      "Solo los líderes de la Iglesia pueden alcanzar la exaltación",
      "La exaltación es un estado inalcanzable para la mayoría de las personas",
    ],
  },

  {
    id: 1158,
    difficulty: "Medio",
    question:
      "¿Qué enseñanzas específicas sobre el matrimonio y la familia se encuentran en 'La familia: una proclamación para el mundo'?",
    category: ordenanzas,
    correct_answer:
      "El matrimonio entre hombre y mujer es esencial para el plan eterno de Dios y la felicidad familiar",
    incorrect_answers: [
      "El matrimonio es una opción personal sin implicaciones religiosas",
      "El matrimonio puede ser entre cualquier combinación de personas",
      "El matrimonio es una institución cultural sin base teológica",
    ],
  },
  {
    id: 1159,
    difficulty: "Difícil",
    question:
      "¿Qué enseñanzas específicas sobre la exaltación se encuentran en 'La familia: una proclamación para el mundo'?",
    category: ordenanzas,
    correct_answer:
      "Los esposos y esposas fieles pueden vivir juntos en la eternidad, progresar y tener posteridad",
    incorrect_answers: [
      "La exaltación se alcanza automáticamente por el matrimonio",
      "Solo los líderes de la Iglesia pueden alcanzar la exaltación",
      "La exaltación es un estado inalcanzable para la mayoría de las personas",
    ],
  },
  {
    id: 1160,
    difficulty: "Fácil",
    question:
      "¿Qué principios esenciales se encuentran en 'La familia: una proclamación para el mundo'?",
    category: ordenanzas,
    correct_answer:
      "El matrimonio entre hombre y mujer es ordenado por Dios y es crucial para Su plan eterno",
    incorrect_answers: [
      "El matrimonio es opcional y no tiene relación con la salvación",
      "El matrimonio puede ser entre cualquier combinación de personas",
      "El matrimonio es solo una institución social sin implicaciones religiosas",
    ],
  },
  {
    id: 1161,
    difficulty: "Medio",
    question:
      "¿Qué significado tiene la ordenanza del sellamiento en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Une a las familias por tiempo y eternidad bajo la autoridad del sacerdocio",
    incorrect_answers: [
      "Es un ritual simbólico sin efecto real en la vida familiar",
      "Es una tradición cultural sin base teológica",
      "Es un acto de formalidad legal ante la sociedad",
    ],
  },
  {
    id: 1162,
    difficulty: "Difícil",
    question:
      "¿Cuál es el propósito principal de los Artículos de Fe en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Resumir las creencias y doctrinas fundamentales de la Iglesia para los miembros y no miembros",
    incorrect_answers: [
      "Establecer normas de conducta estrictas para los miembros",
      "Detallar la estructura de gobierno de la Iglesia",
      "Definir las políticas económicas y sociales de la Iglesia",
    ],
  },
  {
    id: 1163,
    difficulty: "Fácil",
    question:
      "¿Qué promesas específicas se hacen durante la ordenanza del sacerdocio en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Recibir el poder de actuar en el nombre de Dios y bendecir a los demás",
    incorrect_answers: [
      "Recibir una posición de liderazgo temporal dentro de la comunidad",
      "Recibir una compensación financiera por los servicios religiosos",
      "Recibir reconocimiento público por su servicio",
    ],
  },
  {
    id: 1164,
    difficulty: "Medio",
    question:
      "¿Qué significado tiene la ordenanza del bautismo por los muertos en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Permite a las personas fallecidas recibir las bendiciones del evangelio por medio de un representante viviente",
    incorrect_answers: [
      "Es una práctica simbólica sin efecto real en el más allá",
      "Es una tradición cultural para honrar a los antepasados",
      "Es un acto de memoria para recordar a los difuntos",
    ],
  },
  {
    id: 1165,
    difficulty: "Difícil",
    question:
      "¿Qué enseñanzas fundamentales sobre el papel de Jesucristo se encuentran en 'El Cristo Viviente'?",
    category: ordenanzas,
    correct_answer:
      "Jesucristo es el Hijo de Dios, el Salvador y Redentor del mundo",
    incorrect_answers: [
      "Jesucristo es un maestro moral y ético",
      "Jesucristo es un líder político y social",
      "Jesucristo es una figura mítica sin base histórica",
    ],
  },
  {
    id: 1166,
    difficulty: "Fácil",
    question:
      "¿Cuál es el propósito principal de 'La familia: una proclamación para el mundo' según las enseñanzas de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Fortalecer y proteger a la familia como la unidad fundamental de la sociedad",
    incorrect_answers: [
      "Definir roles de género estrictos dentro de la familia",
      "Promover un modelo específico de familia sin variaciones",
      "Eliminar la diversidad familiar en la comunidad",
    ],
  },
  {
    id: 1167,
    difficulty: "Medio",
    question:
      "¿Qué importancia tiene el testimonio de José Smith en la teología de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Es el testigo profético de la restauración del evangelio en los últimos días",
    incorrect_answers: [
      "Es un líder político y social",
      "Es un reformador religioso menor",
      "Es una figura simbólica sin influencia real",
    ],
  },
  {
    id: 1168,
    difficulty: "Difícil",
    question:
      "¿Cuál es la doctrina central sobre la naturaleza divina y la exaltación según las enseñanzas de José Smith?",
    category: ordenanzas,
    correct_answer:
      "Los seres humanos pueden llegar a ser como Dios mediante la obediencia a los mandamientos y la fe en Jesucristo",
    incorrect_answers: [
      "Solo los profetas pueden llegar a ser como Dios",
      "La exaltación es un estado inalcanzable para la mayoría de las personas",
      "La obediencia a las normas de la Iglesia es suficiente para alcanzar la exaltación",
    ],
  },
  {
    id: 1169,
    difficulty: "Fácil",
    question:
      "¿Qué principios esenciales se encuentran en los Artículos de Fe de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Creencias esenciales sobre la Deidad, la expiación de Cristo, el arrepentimiento, el bautismo, y el don del Espíritu Santo",
    incorrect_answers: [
      "Reglas detalladas para la conducta moral",
      "Instrucciones específicas para la administración de la Iglesia",
      "Normas sociales para la vida comunitaria",
    ],
  },
  {
    id: 1170,
    difficulty: "Medio",
    question:
      "¿Qué importancia tiene la restauración del evangelio según las enseñanzas de La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Restauró la autoridad y la plenitud del evangelio de Jesucristo en su forma original",
    incorrect_answers: [
      "Cambiaron las enseñanzas del evangelio para adaptarse a la época moderna",
      "Revirtió los principios del evangelio a su estado primitivo",
      "Estableció nuevas doctrinas y principios desconocidos en la antigüedad",
    ],
  },
  {
    id: 1171,
    difficulty: "Difícil",
    question:
      "¿Cuál es la importancia de las oraciones sacramentales en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Renuevan los convenios con Dios y recuerdan Su sacrificio expiatorio",
    incorrect_answers: [
      "Son rituales simbólicos sin impacto espiritual",
      "Son prácticas religiosas sin fundamento doctrinal",
      "Son tradiciones culturales para la comunidad de fe",
    ],
  },
  {
    id: 1172,
    difficulty: "Fácil",
    question:
      "¿Cuál es la importancia de los Artículos de Fe en La Iglesia de Jesucristo de los Santos de los Últimos Días?",
    category: ordenanzas,
    correct_answer:
      "Resumen las creencias fundamentales de la Iglesia y sus principios básicos",
    incorrect_answers: [
      "Proporcionan reglas estrictas para la conducta de los miembros",
      "Establecen normas sociales para la comunidad",
      "Detallan las estructuras de liderazgo de la Iglesia",
    ],
  },
];
