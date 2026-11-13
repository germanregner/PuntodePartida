

const _ASSET_DEDUP_0 = "../pdp-assets/09c6ff6fbf91136cff481d96749a6bf7.png";
const _ASSET_DEDUP_1 = "../pdp-assets/ad5f6f72be0bfdc0abd179880c245aa6.png";
const _ASSET_DEDUP_2 = "../pdp-assets/66b6c4bedacf83bc9887231a370309af.mp3";
const _ASSET_DEDUP_3 = "../pdp-assets/0663369229d60e8a6a3f8383fdb21556.mp3";
const _ASSET_DEDUP_4 = "../pdp-assets/c742076d6d0ea1c3422a90ed2d1b447a.mp3";
const _ASSET_DEDUP_5 = "../pdp-assets/95c84a7d93f9d8beb7c1e652bad032fe.mp3";
const _ASSET_DEDUP_6 = "../pdp-assets/720f622a7e406bb5b28dcecf80aad7c1.mp3";
const _ASSET_DEDUP_7 = "../pdp-assets/47bbc4ca78d2b20675823b3278937023.mp3";
const _ASSET_DEDUP_8 = "../pdp-assets/1667cbc5322dcab739c5581609e77302.mp3";
const _ASSET_DEDUP_9 = "../pdp-assets/393a713a0d182f341c60f69329b48470.mp3";
const _ASSET_DEDUP_10 = "../pdp-assets/23caed10c25dfeb36cc9d574a637767a.mp3";

/* DATA ZONE generado por Pipeline v0 — 2026-11-13T17:43:42.438Z
   Proyecto: _trabajo/2026-11-10-modo-examen/unidad/pdp-examen-a2key
   Motor fuente: template-standard-v3.html
   NO EDITAR — artefacto generado. Toda modificación vuelve a la Unidad
   (Principio de generación, DOCTRINA_CONGELADA.md §4). */

const PDP_BUILD = {
  "fecha": "2026-11-13 14:43",
  "id": "4217f2"
};

const APP_CONFIG = {
  "titulo": "Preparación A2 Key",
  "materia": "Inglés · Preparación de examen (A2)",
  "saludo": "Practicá el examen por partes o hacé el test completo.",
  "version": "0.1",
  "colorScheme": "language",
  "imgTrofeo": "../pdp-assets/10180e80e81a35f794065b371f39dad1.png",
  "acompanante": "adulto",
  "ayudaTraduccion": "contada",
  "skillCheckAviso": false
};

const TUTOR = {
  "nombre": "Spike",
  "inicial": "S",
  "colorPrimary": "#DB2777",
  "colorLight": "#FCE7F3",
  "colorAccent": "#F472B6",
  "imgHero": _ASSET_DEDUP_0,
  "imgTip": "../pdp-assets/b3b56e1df2cd49f0b9a82744601b8626.png",
  "fraseCierre": "Terminaste. Mirá las explicaciones de lo que no salió.",
  "mensajesHome": [
    [
      0,
      "Elegí una parte para practicar o empezá el simulacro del Test 1."
    ]
  ],
  "mensajesCorrecto": [
    "Correcto.",
    "Bien.",
    "Así es."
  ],
  "mensajesCorrectoConReintento": [
    "Correcto, en el segundo intento."
  ],
  "mensajesIncorrecto": [
    "Todavía no. Volvé al texto.",
    "No es esa. Revisá de nuevo."
  ],
  "mensajesRacha": [
    "{n} seguidas bien."
  ],
  "mensajesDificultad": [
    "Tomate tu tiempo: leé otra vez con calma."
  ],
  "imgCelebrateLight": _ASSET_DEDUP_0,
  "imgCelebrateDark": _ASSET_DEDUP_0
};

const MODULES = [
  {
    "id": "m0",
    "nombre": "Práctica por partes",
    "icono": _ASSET_DEDUP_1,
    "subtitulo": "Una parte del examen por vez, con consejos y explicación",
    "alexClose": "\"Parte terminada. Mirá las explicaciones de lo que no salió.\"",
    "niveles": [
      {
        "id": "m0-r1",
        "nombre": "Reading · Part 1",
        "traducciones": 2,
        "marca": true,
        "minutosRecomendados": 7,
        "sinSkillCheck": {
          "motivo": "práctica por partes de un examen: la medición la hace el simulacro; la parte cierra con «Tu marca»",
          "autoriza": "Director, 2026-11-12 (y Resolución del 2026-11-10, punto 2: excepciones de dominio)"
        }
      },
      {
        "id": "m0-r2",
        "nombre": "Reading · Part 2",
        "traducciones": 2,
        "marca": true,
        "minutosRecomendados": 8,
        "sinSkillCheck": {
          "motivo": "práctica por partes de un examen: la medición la hace el simulacro; la parte cierra con «Tu marca»",
          "autoriza": "Director, 2026-11-12 (y Resolución del 2026-11-10, punto 2: excepciones de dominio)"
        }
      },
      {
        "id": "m0-r3",
        "nombre": "Reading · Part 3",
        "traducciones": 2,
        "marca": true,
        "minutosRecomendados": 10,
        "sinSkillCheck": {
          "motivo": "práctica por partes de un examen: la medición la hace el simulacro; la parte cierra con «Tu marca»",
          "autoriza": "Director, 2026-11-12 (y Resolución del 2026-11-10, punto 2: excepciones de dominio)"
        }
      },
      {
        "id": "m0-r4",
        "nombre": "Reading · Part 4",
        "traducciones": 2,
        "marca": true,
        "minutosRecomendados": 7,
        "sinSkillCheck": {
          "motivo": "práctica por partes de un examen: la medición la hace el simulacro; la parte cierra con «Tu marca»",
          "autoriza": "Director, 2026-11-12 (y Resolución del 2026-11-10, punto 2: excepciones de dominio)"
        }
      },
      {
        "id": "m0-r5",
        "nombre": "Reading · Part 5",
        "traducciones": 2,
        "marca": true,
        "minutosRecomendados": 8,
        "sinSkillCheck": {
          "motivo": "práctica por partes de un examen: la medición la hace el simulacro; la parte cierra con «Tu marca»",
          "autoriza": "Director, 2026-11-12 (y Resolución del 2026-11-10, punto 2: excepciones de dominio)"
        }
      },
      {
        "id": "m0-w6",
        "nombre": "Writing · Part 6",
        "tipo": "evaluacion"
      },
      {
        "id": "m0-w7",
        "nombre": "Writing · Part 7",
        "tipo": "evaluacion"
      },
      {
        "id": "m0-l1",
        "nombre": "Listening · Part 1",
        "traducciones": 2,
        "marca": true,
        "minutosRecomendados": 6,
        "sinSkillCheck": {
          "motivo": "práctica por partes de un examen: la medición la hace el simulacro; la parte cierra con «Tu marca»",
          "autoriza": "Director, 2026-11-12 (y Resolución del 2026-11-10, punto 2: excepciones de dominio)"
        }
      },
      {
        "id": "m0-l2",
        "nombre": "Listening · Part 2",
        "traducciones": 2,
        "marca": true,
        "minutosRecomendados": 6,
        "sinSkillCheck": {
          "motivo": "práctica por partes de un examen: la medición la hace el simulacro; la parte cierra con «Tu marca»",
          "autoriza": "Director, 2026-11-12 (y Resolución del 2026-11-10, punto 2: excepciones de dominio)"
        }
      },
      {
        "id": "m0-l3",
        "nombre": "Listening · Part 3",
        "traducciones": 2,
        "marca": true,
        "minutosRecomendados": 6,
        "sinSkillCheck": {
          "motivo": "práctica por partes de un examen: la medición la hace el simulacro; la parte cierra con «Tu marca»",
          "autoriza": "Director, 2026-11-12 (y Resolución del 2026-11-10, punto 2: excepciones de dominio)"
        }
      },
      {
        "id": "m0-l4",
        "nombre": "Listening · Part 4",
        "traducciones": 2,
        "marca": true,
        "minutosRecomendados": 6,
        "sinSkillCheck": {
          "motivo": "práctica por partes de un examen: la medición la hace el simulacro; la parte cierra con «Tu marca»",
          "autoriza": "Director, 2026-11-12 (y Resolución del 2026-11-10, punto 2: excepciones de dominio)"
        }
      },
      {
        "id": "m0-l5",
        "nombre": "Listening · Part 5",
        "traducciones": 2,
        "marca": true,
        "minutosRecomendados": 6,
        "sinSkillCheck": {
          "motivo": "práctica por partes de un examen: la medición la hace el simulacro; la parte cierra con «Tu marca»",
          "autoriza": "Director, 2026-11-12 (y Resolución del 2026-11-10, punto 2: excepciones de dominio)"
        }
      },
      {
        "id": "m0-s1",
        "nombre": "Speaking · Part 1",
        "tipo": "evaluacion"
      },
      {
        "id": "m0-s2",
        "nombre": "Speaking · Part 2",
        "tipo": "evaluacion"
      }
    ]
  },
  {
    "id": "m1",
    "evaluacion": true,
    "veredicto": "alFinal",
    "nombre": "Simulacro · Test 2",
    "icono": _ASSET_DEDUP_1,
    "subtitulo": "Un intento, sin ayudas. Preguntas nuevas: no están en la práctica por partes.",
    "alexClose": "\"Test entregado.\"",
    "niveles": [
      {
        "id": "m1-rw",
        "nombre": "Reading and Writing · 30 preguntas + 2 partes con un adulto · 60 min",
        "tipo": "evaluacion",
        "minutos": 60,
        "alCumplir": "entregar",
        "traducciones": 1,
        "escrituraEnEntrega": true
      },
      {
        "id": "m1-l",
        "nombre": "Listening · 25 preguntas · 30 min",
        "tipo": "evaluacion",
        "minutos": 30,
        "alCumplir": "entregar",
        "traducciones": 1
      },
      {
        "id": "m1-s",
        "nombre": "Speaking · con un adulto · 10 min",
        "tipo": "evaluacion",
        "minutos": 10
      }
    ]
  },
  {
    "id": "m2",
    "evaluacion": true,
    "veredicto": "alFinal",
    "nombre": "Simulacro · Test 3",
    "icono": _ASSET_DEDUP_1,
    "subtitulo": "Un intento, sin ayudas. Preguntas nuevas: no están en la práctica por partes.",
    "alexClose": "\"Test entregado.\"",
    "niveles": [
      {
        "id": "m2-rw",
        "nombre": "Reading and Writing · 30 preguntas + 2 partes con un adulto · 60 min",
        "tipo": "evaluacion",
        "minutos": 60,
        "alCumplir": "entregar",
        "traducciones": 1,
        "escrituraEnEntrega": true
      },
      {
        "id": "m2-l",
        "nombre": "Listening · 25 preguntas · 30 min",
        "tipo": "evaluacion",
        "minutos": 30,
        "alCumplir": "entregar",
        "traducciones": 1
      },
      {
        "id": "m2-s",
        "nombre": "Speaking · con un adulto · 10 min",
        "tipo": "evaluacion",
        "minutos": 10
      }
    ]
  },
  {
    "id": "m3",
    "nombre": "Hoja del adulto",
    "icono": _ASSET_DEDUP_1,
    "subtitulo": "Para quien corrige Writing y Speaking: qué mirar y cómo poner el puntaje",
    "alexClose": "\"Hoja leída.\"",
    "niveles": [
      {
        "id": "m3-w",
        "nombre": "Writing · cómo corregir",
        "tipo": "lectura"
      },
      {
        "id": "m3-s",
        "nombre": "Speaking · cómo puntuar",
        "tipo": "lectura"
      }
    ]
  }
];

const EXERCISES_M0 = [
  {
    "id": "A2K-R1-TIPS",
    "status": "draft",
    "nivelId": "m0-r1",
    "kind": "concept",
    "stage": "Consejos",
    "concept": "consejos Reading · Part 1",
    "feedback": "Listo. Ahora, la tarea.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Reading · Part 1",
        "regla": "Leés seis textos cortos de todos los días y elegís la oración que **dice lo mismo**.",
        "notas": [
          "Primero pensá dónde aparece el texto: un cartel, un mensaje, un mail.",
          "La opción correcta casi nunca repite las palabras del texto: dice lo mismo con otras.",
          "Antes de elegir, buscá en el texto por qué las otras dos están mal."
        ],
        "idea": "Leés seis textos cortos de todos los días y elegís la oración que dice lo mismo. Primero pensá dónde aparece el texto: un cartel, un mensaje, un mail. La opción correcta casi nunca repite las palabras del texto: dice lo mismo con otras. Antes de elegir, buscá en el texto por qué las otras dos están mal. Tiempo recomendado: 7 minutos."
      }
    ]
  },
  {
    "id": "A2K-T1-R1-1",
    "status": "draft",
    "nivelId": "m0-r1",
    "stage": "Test 1 · Reading · Part 1",
    "concept": "Reading · Part 1 (lectura-mensaje-3op)",
    "kind": "mc",
    "skill": "COMP_01",
    "difficulty": 1,
    "question": "Choose the sentence (A, B or C) that says the same as the text.",
    "estimulo": {
      "rotulo": "NOTICE ON A SCHOOL BOARD",
      "parrafos": [
        "ART CLUB\nNo meeting this Thursday – Mrs Hill is ill.\nSee you next week, same room!"
      ],
      "centrado": true
    },
    "options": [
      "The art club will meet in a different room next week.",
      "There is no art club this week.",
      "Mrs Hill wants students to visit her on Thursday."
    ],
    "correct": 1,
    "feedback": "Sí: «no meeting this Thursday» = esta semana no hay club.",
    "feedbackWrong": "Releé la primera línea del cartel: ¿qué pasa con la reunión de este jueves?",
    "hint": "«No meeting» quiere decir que algo no se hace. ¿Qué cosa y cuándo?",
    "feedbackExtra": "El cartel dice que este jueves no hay reunión. La sala es la misma («same room»), así que A no va. Nadie pide visitar a Mrs Hill: está enferma y por eso no hay club.",
    "scaffold": {
      "altExplanation": "Un cartel que suspende algo dice dos cosas: qué no se hace y cuándo se retoma. Marcá las dos en el cartel y fijate si cada opción respeta esos dos datos o cambia alguno."
    },
    "consignaEs": "Elegí la oración (A, B o C) que dice lo mismo que el texto."
  },
  {
    "id": "A2K-T1-R1-2",
    "status": "draft",
    "nivelId": "m0-r1",
    "stage": "Test 1 · Reading · Part 1",
    "concept": "Reading · Part 1 (lectura-mensaje-3op)",
    "kind": "mc",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "Choose the sentence (A, B or C) that says the same as the text.",
    "estimulo": {
      "rotulo": "TEXT MESSAGE",
      "parrafos": [
        "Hi Dan, I left my trainers at your house. Can you bring them to school tomorrow? I need them for football practice after lunch. Thanks! Sam"
      ]
    },
    "options": [
      "Sam wants Dan to take something to school.",
      "Sam is asking Dan to play football at his house.",
      "Sam needs to borrow Dan’s trainers tomorrow."
    ],
    "correct": 0,
    "feedback": "Sí: Sam le pide a Dan que lleve las zapatillas a la escuela.",
    "feedbackWrong": "Buscá la pregunta que hace Sam: ¿qué le pide a Dan y dónde?",
    "hint": "¿De quién son las zapatillas?",
    "feedbackExtra": "Las zapatillas son de Sam («my trainers») y quedaron en la casa de Dan; le pide que las lleve a la escuela. No son de Dan (C) y el fútbol es en la escuela, después del almuerzo, no en la casa (B).",
    "scaffold": {
      "altExplanation": "En un pedido hay tres datos: de quién es la cosa, dónde está ahora y adónde tiene que ir. Anotá los tres antes de leer las opciones: cada opción equivocada cambia uno."
    },
    "consignaEs": "Elegí la oración (A, B o C) que dice lo mismo que el texto."
  },
  {
    "id": "A2K-T1-R1-3",
    "status": "draft",
    "nivelId": "m0-r1",
    "stage": "Test 1 · Reading · Part 1",
    "concept": "Reading · Part 1 (lectura-mensaje-3op)",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "Choose the sentence (A, B or C) that says the same as the text.",
    "estimulo": {
      "rotulo": "SIGN IN A SHOP WINDOW",
      "parrafos": [
        "SPORT SHOP SALE\nAll football shirts half price\nThis weekend only"
      ],
      "centrado": true
    },
    "options": [
      "The shop is only open at weekends.",
      "Everything in the shop costs half price.",
      "You can buy cheaper football shirts until Sunday."
    ],
    "correct": 2,
    "feedback": "Sí: solo las camisetas de fútbol, y solo este fin de semana.",
    "feedbackWrong": "Mirá dos cosas del cartel: qué está a mitad de precio y hasta cuándo.",
    "hint": "¿«All» qué cosa? ¿«Only» cuándo?",
    "feedbackExtra": "A mitad de precio están solo las camisetas de fútbol, no todo el negocio (B). «This weekend only» habla de cuánto dura la oferta, no de qué días abre el negocio (A).",
    "scaffold": {
      "altExplanation": "Las palabras chicas mandan: «all» va pegada a una cosa y «only» a un momento. Fijate a qué palabra acompaña cada una antes de aceptar una opción que habla de todo el negocio o de sus horarios."
    },
    "consignaEs": "Elegí la oración (A, B o C) que dice lo mismo que el texto."
  },
  {
    "id": "A2K-T1-R1-4",
    "status": "draft",
    "nivelId": "m0-r1",
    "stage": "Test 1 · Reading · Part 1",
    "concept": "Reading · Part 1 (lectura-mensaje-3op)",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "Choose the sentence (A, B or C) that says the same as the text.",
    "estimulo": {
      "rotulo": "EMAIL",
      "parrafos": [
        "To: Class 8B\nFrom: Mr Gray\nThe trip to the science museum is on Friday. The coach leaves at 8.15, so be at the school gate by 8.00. Bring your own lunch."
      ]
    },
    "options": [
      "Students should arrive at school before the coach leaves.",
      "Students can buy their lunch at the museum.",
      "Mr Gray will meet the students at the museum at 8.15."
    ],
    "correct": 0,
    "feedback": "Sí: hay que estar a las 8.00 y el micro sale a las 8.15.",
    "feedbackWrong": "Compará las dos horas del mail: ¿qué pasa a cada una y dónde?",
    "hint": "Hay dos horas. ¿Cuál es para los alumnos?",
    "feedbackExtra": "Los alumnos tienen que estar en la puerta de la escuela a las 8.00, antes de que salga el micro (8.15). El almuerzo se lleva («bring your own lunch»), no se compra (B). A las 8.15 sale el micro de la escuela; nadie se encuentra en el museo (C).",
    "scaffold": {
      "altExplanation": "Cuando hay dos horas, armá una línea de tiempo: qué pasa primero, qué pasa después y en qué lugar. Después buscá la opción que respeta ese orden."
    },
    "consignaEs": "Elegí la oración (A, B o C) que dice lo mismo que el texto."
  },
  {
    "id": "A2K-T1-R1-5",
    "status": "draft",
    "nivelId": "m0-r1",
    "stage": "Test 1 · Reading · Part 1",
    "concept": "Reading · Part 1 (lectura-mensaje-3op)",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "Choose the sentence (A, B or C) that says the same as the text.",
    "estimulo": {
      "rotulo": "NOTICE AT A SWIMMING POOL",
      "parrafos": [
        "SWIMMING POOL\nChildren under 10 must be with an adult."
      ],
      "centrado": true
    },
    "options": [
      "Adults can’t swim with children under ten.",
      "Young children can’t use the pool alone.",
      "Only people over ten can use the pool."
    ],
    "correct": 1,
    "feedback": "Sí: los menores de 10 pueden entrar, pero con un adulto.",
    "feedbackWrong": "Pensá qué significa «must be with»: ¿prohíbe entrar o pide compañía?",
    "hint": "Mirá bien «must be with».",
    "feedbackExtra": "El cartel no prohíbe la entrada a los chicos de menos de 10 (C): pide que estén con un adulto, o sea que no pueden ir solos. A dice lo contrario del cartel.",
    "scaffold": {
      "altExplanation": "En este cartel «must» obliga a algo (estar con un adulto): no prohíbe entrar. Preguntate quién puede entrar igual y con qué condición. Descartá la opción que deja a alguien afuera del todo."
    },
    "consignaEs": "Elegí la oración (A, B o C) que dice lo mismo que el texto."
  },
  {
    "id": "A2K-T1-R1-6",
    "status": "draft",
    "nivelId": "m0-r1",
    "stage": "Test 1 · Reading · Part 1",
    "concept": "Reading · Part 1 (lectura-mensaje-3op)",
    "kind": "mc",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "Choose the sentence (A, B or C) that says the same as the text.",
    "estimulo": {
      "rotulo": "NOTE ON THE FRIDGE",
      "parrafos": [
        "Mum – Katie phoned. She can’t come to dinner tonight because she has a lot of homework. She’ll call you again tomorrow. Ben"
      ]
    },
    "options": [
      "Katie wants Ben to help her with her homework.",
      "Katie is coming to dinner tomorrow.",
      "Katie is going to speak to Mum tomorrow."
    ],
    "correct": 2,
    "feedback": "Sí: «She’ll call you again tomorrow» = mañana vuelve a llamar a mamá.",
    "feedbackWrong": "Releé la última oración: ¿qué va a hacer Katie mañana?",
    "hint": "Mirá para quién es la nota.",
    "feedbackExtra": "Mañana Katie va a llamar otra vez a mamá, no a ir a cenar (B). Katie tiene mucha tarea, pero no le pide ayuda a Ben (A): Ben solo escribe la nota.",
    "scaffold": {
      "altExplanation": "En una nota con tres personas, anotá quién hace cada cosa: quién llamó, quién escribe y a quién le hablan. «You» es la persona que recibe la nota."
    },
    "consignaEs": "Elegí la oración (A, B o C) que dice lo mismo que el texto."
  },
  {
    "id": "A2K-R2-TIPS",
    "status": "draft",
    "nivelId": "m0-r2",
    "kind": "concept",
    "stage": "Consejos",
    "concept": "consejos Reading · Part 2",
    "feedback": "Listo. Ahora, la tarea.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Reading · Part 2",
        "regla": "Leés tres textos sobre el mismo tema y decidís **de quién habla** cada una de las siete preguntas.",
        "notas": [
          "Leé primero las preguntas y marcá la idea clave de cada una.",
          "Después leé los textos buscando esa idea; puede estar dicha con otras palabras.",
          "Si una palabra de la pregunta aparece en dos textos, leé esas partes con cuidado: solo una responde."
        ],
        "idea": "Leés tres textos sobre el mismo tema y decidís de quién habla cada una de las siete preguntas. Leé primero las preguntas y marcá la idea clave de cada una. Después leé los textos buscando esa idea; puede estar dicha con otras palabras. Si una palabra de la pregunta aparece en dos textos, leé esas partes con cuidado: solo una responde. Tiempo recomendado: 8 minutos."
      }
    ]
  },
  {
    "id": "A2K-T1-R2-1",
    "status": "draft",
    "nivelId": "m0-r2",
    "stage": "Test 1 · Reading · Part 2",
    "concept": "Reading · Part 2 (lectura-emparejar-textos)",
    "kind": "mc",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "Who learns new things about their hobby on the internet?",
    "estimulo": {
      "rotulo": "READ THE THREE TEXTS",
      "titulo": "My hobby",
      "parrafos": [
        "[[Ella]]\nI started taking photos two years ago, when my uncle gave me his old camera. At first, I only took pictures of my cat! Now I go to a photography club every Saturday morning. Our teacher shows us how to take better photos of people and places. Last month, one of my pictures won a prize in a school competition. I’d like to be a photographer for a magazine one day.",
        "[[Marco]]\nMy hobby is cooking. I learned from my grandmother when I stayed at her house in the holidays. She makes the best pasta in the world! I don’t go to a club. I watch videos online and then try the dishes in our kitchen. My family eats everything I cook, and my little sister always asks for more. Cooking isn’t cheap, so I buy the food with money I earn helping in my aunt’s shop.",
        "[[Jess]]\nI play the drums in a band with three friends from my class. We practise in my garage twice a week, on Tuesdays and Fridays. My neighbours aren’t very happy because we’re quite noisy! At first, my dad taught me. But now I have a music teacher who comes to my house on Mondays. Our band is going to play at the school festival in June. I feel excited but also a little afraid."
      ]
    },
    "options": [
      "Ella",
      "Marco",
      "Jess"
    ],
    "correct": 1,
    "feedback": "Sí: Marco mira videos «online» y después prueba los platos.",
    "feedbackWrong": "Buscá en los tres textos una palabra que tenga que ver con internet.",
    "hint": "Puede no decir «internet»: buscá un sinónimo.",
    "feedbackExtra": "Marco dice «I watch videos online and then try the dishes». Ella aprende con el profesor del club y Jess con su papá y con su profe de música.",
    "scaffold": {
      "altExplanation": "Los tres aprenden de alguien o de algo. Anotá al lado de cada nombre de quién o de dónde aprende, y compará eso con lo que pide la pregunta."
    },
    "consignaEs": "¿Quién aprende cosas nuevas sobre su pasatiempo en internet?"
  },
  {
    "id": "A2K-T1-R2-2",
    "status": "draft",
    "nivelId": "m0-r2",
    "stage": "Test 1 · Reading · Part 2",
    "concept": "Reading · Part 2 (lectura-emparejar-textos)",
    "kind": "mc",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "Who uses something that a person in their family gave them?",
    "estimulo": {
      "rotulo": "READ THE THREE TEXTS",
      "titulo": "My hobby",
      "parrafos": [
        "[[Ella]]\nI started taking photos two years ago, when my uncle gave me his old camera. At first, I only took pictures of my cat! Now I go to a photography club every Saturday morning. Our teacher shows us how to take better photos of people and places. Last month, one of my pictures won a prize in a school competition. I’d like to be a photographer for a magazine one day.",
        "[[Marco]]\nMy hobby is cooking. I learned from my grandmother when I stayed at her house in the holidays. She makes the best pasta in the world! I don’t go to a club. I watch videos online and then try the dishes in our kitchen. My family eats everything I cook, and my little sister always asks for more. Cooking isn’t cheap, so I buy the food with money I earn helping in my aunt’s shop.",
        "[[Jess]]\nI play the drums in a band with three friends from my class. We practise in my garage twice a week, on Tuesdays and Fridays. My neighbours aren’t very happy because we’re quite noisy! At first, my dad taught me. But now I have a music teacher who comes to my house on Mondays. Our band is going to play at the school festival in June. I feel excited but also a little afraid."
      ]
    },
    "options": [
      "Ella",
      "Marco",
      "Jess"
    ],
    "correct": 0,
    "feedback": "Sí: el tío de Ella le dio su cámara vieja.",
    "feedbackWrong": "Buscá quién recibió un objeto de un familiar (no una clase ni una receta).",
    "hint": "Buscá un verbo en pasado que signifique «dar».",
    "feedbackExtra": "El tío de Ella le dio la cámara («my uncle gave me his old camera»). A Marco su abuela le enseñó y la plata la gana él; a Jess su papá le enseñó: aprender de alguien no es recibir un objeto.",
    "scaffold": {
      "altExplanation": "Recibir una cosa no es lo mismo que recibir una enseñanza. En cada texto hay un familiar: fijate si ese familiar entregó un objeto o enseñó a hacer algo."
    },
    "consignaEs": "¿Quién usa algo que le regaló una persona de su familia?"
  },
  {
    "id": "A2K-T1-R2-3",
    "status": "draft",
    "nivelId": "m0-r2",
    "stage": "Test 1 · Reading · Part 2",
    "concept": "Reading · Part 2 (lectura-emparejar-textos)",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "Who is going to do their hobby in front of other people soon?",
    "estimulo": {
      "rotulo": "READ THE THREE TEXTS",
      "titulo": "My hobby",
      "parrafos": [
        "[[Ella]]\nI started taking photos two years ago, when my uncle gave me his old camera. At first, I only took pictures of my cat! Now I go to a photography club every Saturday morning. Our teacher shows us how to take better photos of people and places. Last month, one of my pictures won a prize in a school competition. I’d like to be a photographer for a magazine one day.",
        "[[Marco]]\nMy hobby is cooking. I learned from my grandmother when I stayed at her house in the holidays. She makes the best pasta in the world! I don’t go to a club. I watch videos online and then try the dishes in our kitchen. My family eats everything I cook, and my little sister always asks for more. Cooking isn’t cheap, so I buy the food with money I earn helping in my aunt’s shop.",
        "[[Jess]]\nI play the drums in a band with three friends from my class. We practise in my garage twice a week, on Tuesdays and Fridays. My neighbours aren’t very happy because we’re quite noisy! At first, my dad taught me. But now I have a music teacher who comes to my house on Mondays. Our band is going to play at the school festival in June. I feel excited but also a little afraid."
      ]
    },
    "options": [
      "Ella",
      "Marco",
      "Jess"
    ],
    "correct": 2,
    "feedback": "Sí: la banda de Jess va a tocar en el festival de la escuela.",
    "feedbackWrong": "Buscá un plan para el futuro («is going to…») con público.",
    "hint": "Buscá un mes o una fecha que todavía no llegó.",
    "feedbackExtra": "«Our band is going to play at the school festival in June»: es futuro y con público. El premio de Ella ya pasó (el mes pasado). Marco cocina para su familia, pero no habla de un plan.",
    "scaffold": {
      "altExplanation": "La pregunta tiene dos condiciones juntas: que sea futuro y que haya público. Descartá los textos donde se cumple una sola: algo con público que ya pasó, o gente que mira pero sin un plan."
    },
    "consignaEs": "¿Quién va a practicar su pasatiempo delante de otras personas dentro de poco?"
  },
  {
    "id": "A2K-T1-R2-4",
    "status": "draft",
    "nivelId": "m0-r2",
    "stage": "Test 1 · Reading · Part 2",
    "concept": "Reading · Part 2 (lectura-emparejar-textos)",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "Who pays for the things they need for their hobby?",
    "estimulo": {
      "rotulo": "READ THE THREE TEXTS",
      "titulo": "My hobby",
      "parrafos": [
        "[[Ella]]\nI started taking photos two years ago, when my uncle gave me his old camera. At first, I only took pictures of my cat! Now I go to a photography club every Saturday morning. Our teacher shows us how to take better photos of people and places. Last month, one of my pictures won a prize in a school competition. I’d like to be a photographer for a magazine one day.",
        "[[Marco]]\nMy hobby is cooking. I learned from my grandmother when I stayed at her house in the holidays. She makes the best pasta in the world! I don’t go to a club. I watch videos online and then try the dishes in our kitchen. My family eats everything I cook, and my little sister always asks for more. Cooking isn’t cheap, so I buy the food with money I earn helping in my aunt’s shop.",
        "[[Jess]]\nI play the drums in a band with three friends from my class. We practise in my garage twice a week, on Tuesdays and Fridays. My neighbours aren’t very happy because we’re quite noisy! At first, my dad taught me. But now I have a music teacher who comes to my house on Mondays. Our band is going to play at the school festival in June. I feel excited but also a little afraid."
      ]
    },
    "options": [
      "Ella",
      "Marco",
      "Jess"
    ],
    "correct": 1,
    "feedback": "Sí: Marco compra la comida con la plata que gana.",
    "feedbackWrong": "Buscá quién habla de plata o de comprar.",
    "hint": "Buscá ganar, comprar o barato.",
    "feedbackExtra": "Marco dice que cocinar no es barato y que compra la comida con plata que gana («money I earn»). A Ella le regalaron la cámara, y Jess no habla de plata.",
    "scaffold": {
      "altExplanation": "La palabra «pay» puede no estar escrita: buscá la idea de gastar plata propia. Ojo con los regalos: quien recibió algo gratis no lo pagó."
    },
    "consignaEs": "¿Quién paga las cosas que necesita para su pasatiempo?"
  },
  {
    "id": "A2K-T1-R2-5",
    "status": "draft",
    "nivelId": "m0-r2",
    "stage": "Test 1 · Reading · Part 2",
    "concept": "Reading · Part 2 (lectura-emparejar-textos)",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "Who says that some people are not pleased about their hobby?",
    "estimulo": {
      "rotulo": "READ THE THREE TEXTS",
      "titulo": "My hobby",
      "parrafos": [
        "[[Ella]]\nI started taking photos two years ago, when my uncle gave me his old camera. At first, I only took pictures of my cat! Now I go to a photography club every Saturday morning. Our teacher shows us how to take better photos of people and places. Last month, one of my pictures won a prize in a school competition. I’d like to be a photographer for a magazine one day.",
        "[[Marco]]\nMy hobby is cooking. I learned from my grandmother when I stayed at her house in the holidays. She makes the best pasta in the world! I don’t go to a club. I watch videos online and then try the dishes in our kitchen. My family eats everything I cook, and my little sister always asks for more. Cooking isn’t cheap, so I buy the food with money I earn helping in my aunt’s shop.",
        "[[Jess]]\nI play the drums in a band with three friends from my class. We practise in my garage twice a week, on Tuesdays and Fridays. My neighbours aren’t very happy because we’re quite noisy! At first, my dad taught me. But now I have a music teacher who comes to my house on Mondays. Our band is going to play at the school festival in June. I feel excited but also a little afraid."
      ]
    },
    "options": [
      "Ella",
      "Marco",
      "Jess"
    ],
    "correct": 2,
    "feedback": "Sí: los vecinos de Jess no están contentos con el ruido.",
    "feedbackWrong": "Buscá personas que no están contentas. Ojo: «not pleased» = «not happy».",
    "hint": "Pensá qué hobby puede molestar a otras personas y por qué.",
    "feedbackExtra": "Los vecinos de Jess «aren’t very happy» porque la banda hace ruido. En el texto de Marco la familia come todo y la hermana pide más; en el de Ella nadie se queja.",
    "scaffold": {
      "altExplanation": "La pregunta no es qué siente quien escribe, sino qué sienten otras personas. En cada texto buscá a los demás (familia, vecinos, profesores) y fijate si están contentos o no."
    },
    "consignaEs": "¿Quién dice que a algunas personas no les gusta su pasatiempo?"
  },
  {
    "id": "A2K-T1-R2-6",
    "status": "draft",
    "nivelId": "m0-r2",
    "stage": "Test 1 · Reading · Part 2",
    "concept": "Reading · Part 2 (lectura-emparejar-textos)",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "Who wants to do their hobby as a job in the future?",
    "estimulo": {
      "rotulo": "READ THE THREE TEXTS",
      "titulo": "My hobby",
      "parrafos": [
        "[[Ella]]\nI started taking photos two years ago, when my uncle gave me his old camera. At first, I only took pictures of my cat! Now I go to a photography club every Saturday morning. Our teacher shows us how to take better photos of people and places. Last month, one of my pictures won a prize in a school competition. I’d like to be a photographer for a magazine one day.",
        "[[Marco]]\nMy hobby is cooking. I learned from my grandmother when I stayed at her house in the holidays. She makes the best pasta in the world! I don’t go to a club. I watch videos online and then try the dishes in our kitchen. My family eats everything I cook, and my little sister always asks for more. Cooking isn’t cheap, so I buy the food with money I earn helping in my aunt’s shop.",
        "[[Jess]]\nI play the drums in a band with three friends from my class. We practise in my garage twice a week, on Tuesdays and Fridays. My neighbours aren’t very happy because we’re quite noisy! At first, my dad taught me. But now I have a music teacher who comes to my house on Mondays. Our band is going to play at the school festival in June. I feel excited but also a little afraid."
      ]
    },
    "options": [
      "Ella",
      "Marco",
      "Jess"
    ],
    "correct": 0,
    "feedback": "Sí: a Ella le gustaría ser fotógrafa de una revista.",
    "feedbackWrong": "Buscá un deseo para el futuro («I’d like to…») que nombre un trabajo.",
    "hint": "El deseo suele estar al final del texto.",
    "feedbackExtra": "Ella dice «I’d like to be a photographer for a magazine one day»: un trabajo. Jess habla de un festival, no de un trabajo, y Marco no dice qué quiere ser.",
    "scaffold": {
      "altExplanation": "Un deseo de trabajo nombra una profesión. Un plan cercano, como un festival o una competencia, no es un trabajo. Buscá dónde aparece el nombre de una profesión."
    },
    "consignaEs": "¿Quién quiere tener su pasatiempo como trabajo en el futuro?"
  },
  {
    "id": "A2K-T1-R2-7",
    "status": "draft",
    "nivelId": "m0-r2",
    "stage": "Test 1 · Reading · Part 2",
    "concept": "Reading · Part 2 (lectura-emparejar-textos)",
    "kind": "mc",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "Who has lessons at home with a teacher?",
    "estimulo": {
      "rotulo": "READ THE THREE TEXTS",
      "titulo": "My hobby",
      "parrafos": [
        "[[Ella]]\nI started taking photos two years ago, when my uncle gave me his old camera. At first, I only took pictures of my cat! Now I go to a photography club every Saturday morning. Our teacher shows us how to take better photos of people and places. Last month, one of my pictures won a prize in a school competition. I’d like to be a photographer for a magazine one day.",
        "[[Marco]]\nMy hobby is cooking. I learned from my grandmother when I stayed at her house in the holidays. She makes the best pasta in the world! I don’t go to a club. I watch videos online and then try the dishes in our kitchen. My family eats everything I cook, and my little sister always asks for more. Cooking isn’t cheap, so I buy the food with money I earn helping in my aunt’s shop.",
        "[[Jess]]\nI play the drums in a band with three friends from my class. We practise in my garage twice a week, on Tuesdays and Fridays. My neighbours aren’t very happy because we’re quite noisy! At first, my dad taught me. But now I have a music teacher who comes to my house on Mondays. Our band is going to play at the school festival in June. I feel excited but also a little afraid."
      ]
    },
    "options": [
      "Ella",
      "Marco",
      "Jess"
    ],
    "correct": 2,
    "feedback": "Sí: su profe de música va a la casa de Jess los lunes.",
    "feedbackWrong": "Hay dos «teacher» en los textos. ¿Cuál va a la casa de alguien?",
    "hint": "Mirá dónde es cada clase.",
    "feedbackExtra": "Jess tiene «a music teacher who comes to my house». El profesor de Ella está en el club de fotografía. Marco aprendió con su abuela, en la casa de ella, y con videos.",
    "scaffold": {
      "altExplanation": "Son dos condiciones: que enseñe un profesor y que la clase sea en la casa de quien escribe. Un familiar que enseña no es «a teacher», y una clase en un club no es «at home»."
    },
    "consignaEs": "¿Quién tiene clases en su casa con un profesor?"
  },
  {
    "id": "A2K-R3-TIPS",
    "status": "draft",
    "nivelId": "m0-r3",
    "kind": "concept",
    "stage": "Consejos",
    "concept": "consejos Reading · Part 3",
    "feedback": "Listo. Ahora, la tarea.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Reading · Part 3",
        "regla": "Leés un texto largo y contestás cinco preguntas. Las preguntas **siguen el orden** del texto.",
        "notas": [
          "Leé todo el texto una vez, sin frenarte en cada palabra.",
          "Para cada pregunta, encontrá el párrafo que habla de eso.",
          "Las tres opciones suelen aparecer en el texto: fijate cuál contesta ESA pregunta."
        ],
        "idea": "Leés un texto largo y contestás cinco preguntas. Las preguntas siguen el orden del texto. Leé todo el texto una vez, sin frenarte en cada palabra. Para cada pregunta, encontrá el párrafo que habla de eso. Las tres opciones suelen aparecer en el texto: fijate cuál contesta ESA pregunta. Tiempo recomendado: 10 minutos."
      }
    ]
  },
  {
    "id": "A2K-T1-R3-1",
    "status": "draft",
    "nivelId": "m0-r3",
    "stage": "Test 1 · Reading · Part 3",
    "concept": "Reading · Part 3 (lectura-larga-3op)",
    "kind": "mc",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "Why did Leo start to like vegetables?",
    "estimulo": {
      "rotulo": "ARTICLE",
      "titulo": "A garden at school",
      "parrafos": [
        "Thirteen-year-old Leo Baker loves vegetables, but he didn’t always. ‘When I was little, I only wanted chips and pizza,’ he says. Everything changed two years ago, when he spent the summer on his grandparents’ farm. He helped them grow tomatoes and carrots, and he was surprised that they tasted so good.",
        "When Leo went back to school in September, he asked his science teacher, Mrs Okoro, if the students could have a garden. She liked the idea, but there was a problem: the school didn’t have any money for it. So Leo and his classmates made cakes and sold them at break time. After a month, they had enough money to buy plants and tools.",
        "At first, only six students came to work in the garden after school. It was hard work, and in winter it was cold and wet. But in spring the first vegetables were ready, and the school cook used them to make soup for all the students and teachers. After that, lots of students wanted to join. Now there are forty members, and they have to work in two groups on different days.",
        "Leo is happy that the garden is so popular, but that isn’t his favourite thing about it. ‘The best thing is that students from different classes have become friends,’ he says. Next year, he wants to sell the vegetables at the Saturday market in town and use the money to make the garden bigger."
      ]
    },
    "options": [
      "He ate them every day at school.",
      "He helped to grow some during a holiday.",
      "He learned about them in a science lesson."
    ],
    "correct": 1,
    "feedback": "Sí: pasó el verano en la granja de sus abuelos y los ayudó.",
    "feedbackWrong": "Volvé al primer párrafo: ¿qué pasó hace dos años?",
    "hint": "El cambio empezó lejos de la escuela.",
    "feedbackExtra": "Todo cambió cuando pasó el verano en la granja de sus abuelos y ayudó a cultivar tomates y zanahorias. La profesora de ciencias aparece después, cuando Leo pide la huerta (C). De comer verduras en la escuela no dice nada (A).",
    "scaffold": {
      "altExplanation": "Las tres opciones nombran cosas que están en el texto. La pregunta pide el motivo del cambio: buscá qué hizo Leo justo cuando cambió, no lo que vino después."
    },
    "consignaEs": "¿Por qué a Leo empezaron a gustarle las verduras?"
  },
  {
    "id": "A2K-T1-R3-2",
    "status": "draft",
    "nivelId": "m0-r3",
    "stage": "Test 1 · Reading · Part 3",
    "concept": "Reading · Part 3 (lectura-larga-3op)",
    "kind": "mc",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "How did the students get money for the garden?",
    "estimulo": {
      "rotulo": "ARTICLE",
      "titulo": "A garden at school",
      "parrafos": [
        "Thirteen-year-old Leo Baker loves vegetables, but he didn’t always. ‘When I was little, I only wanted chips and pizza,’ he says. Everything changed two years ago, when he spent the summer on his grandparents’ farm. He helped them grow tomatoes and carrots, and he was surprised that they tasted so good.",
        "When Leo went back to school in September, he asked his science teacher, Mrs Okoro, if the students could have a garden. She liked the idea, but there was a problem: the school didn’t have any money for it. So Leo and his classmates made cakes and sold them at break time. After a month, they had enough money to buy plants and tools.",
        "At first, only six students came to work in the garden after school. It was hard work, and in winter it was cold and wet. But in spring the first vegetables were ready, and the school cook used them to make soup for all the students and teachers. After that, lots of students wanted to join. Now there are forty members, and they have to work in two groups on different days.",
        "Leo is happy that the garden is so popular, but that isn’t his favourite thing about it. ‘The best thing is that students from different classes have become friends,’ he says. Next year, he wants to sell the vegetables at the Saturday market in town and use the money to make the garden bigger."
      ]
    },
    "options": [
      "The school gave it to them.",
      "Their teacher paid for the tools.",
      "They sold food that they made."
    ],
    "correct": 2,
    "feedback": "Sí: hicieron tortas y las vendieron en el recreo.",
    "feedbackWrong": "Segundo párrafo: había un problema. ¿Qué hicieron Leo y sus compañeros?",
    "hint": "La solución viene después del problema.",
    "feedbackExtra": "La escuela no tenía plata (A). Entonces los chicos hicieron tortas y las vendieron: «cakes» = «food that they made». A la profesora le gustó la idea, pero el texto no dice que pagó (B).",
    "scaffold": {
      "altExplanation": "Seguí la plata: quién no tenía, quién hizo algo para conseguirla y qué compraron. La opción correcta lo dice con otras palabras; no esperes ver la misma palabra del texto."
    },
    "consignaEs": "¿Cómo consiguieron dinero los alumnos para la huerta?"
  },
  {
    "id": "A2K-T1-R3-3",
    "status": "draft",
    "nivelId": "m0-r3",
    "stage": "Test 1 · Reading · Part 3",
    "concept": "Reading · Part 3 (lectura-larga-3op)",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "What happened in spring?",
    "estimulo": {
      "rotulo": "ARTICLE",
      "titulo": "A garden at school",
      "parrafos": [
        "Thirteen-year-old Leo Baker loves vegetables, but he didn’t always. ‘When I was little, I only wanted chips and pizza,’ he says. Everything changed two years ago, when he spent the summer on his grandparents’ farm. He helped them grow tomatoes and carrots, and he was surprised that they tasted so good.",
        "When Leo went back to school in September, he asked his science teacher, Mrs Okoro, if the students could have a garden. She liked the idea, but there was a problem: the school didn’t have any money for it. So Leo and his classmates made cakes and sold them at break time. After a month, they had enough money to buy plants and tools.",
        "At first, only six students came to work in the garden after school. It was hard work, and in winter it was cold and wet. But in spring the first vegetables were ready, and the school cook used them to make soup for all the students and teachers. After that, lots of students wanted to join. Now there are forty members, and they have to work in two groups on different days.",
        "Leo is happy that the garden is so popular, but that isn’t his favourite thing about it. ‘The best thing is that students from different classes have become friends,’ he says. Next year, he wants to sell the vegetables at the Saturday market in town and use the money to make the garden bigger."
      ]
    },
    "options": [
      "It was too cold and wet to work in the garden.",
      "Six more students joined the garden group.",
      "People at the school ate food from the garden."
    ],
    "correct": 2,
    "feedback": "Sí: con las primeras verduras hicieron sopa para todos.",
    "feedbackWrong": "Tercer párrafo: separá lo que pasó en invierno de lo que pasó en primavera.",
    "hint": "Cada estación tiene sus hechos.",
    "feedbackExtra": "En primavera las verduras estuvieron listas y en la cocina de la escuela hicieron sopa para alumnos y profesores. El frío y la lluvia fueron en invierno (A). Los seis alumnos son los del principio, no nuevos (B).",
    "scaffold": {
      "altExplanation": "El párrafo recorre las estaciones del año. Hacé dos columnas, invierno y primavera, y poné cada hecho en la suya. Los números del principio cuentan el comienzo, no la primavera."
    },
    "consignaEs": "¿Qué pasó en primavera?"
  },
  {
    "id": "A2K-T1-R3-4",
    "status": "draft",
    "nivelId": "m0-r3",
    "stage": "Test 1 · Reading · Part 3",
    "concept": "Reading · Part 3 (lectura-larga-3op)",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "Why do the members work in two groups now?",
    "estimulo": {
      "rotulo": "ARTICLE",
      "titulo": "A garden at school",
      "parrafos": [
        "Thirteen-year-old Leo Baker loves vegetables, but he didn’t always. ‘When I was little, I only wanted chips and pizza,’ he says. Everything changed two years ago, when he spent the summer on his grandparents’ farm. He helped them grow tomatoes and carrots, and he was surprised that they tasted so good.",
        "When Leo went back to school in September, he asked his science teacher, Mrs Okoro, if the students could have a garden. She liked the idea, but there was a problem: the school didn’t have any money for it. So Leo and his classmates made cakes and sold them at break time. After a month, they had enough money to buy plants and tools.",
        "At first, only six students came to work in the garden after school. It was hard work, and in winter it was cold and wet. But in spring the first vegetables were ready, and the school cook used them to make soup for all the students and teachers. After that, lots of students wanted to join. Now there are forty members, and they have to work in two groups on different days.",
        "Leo is happy that the garden is so popular, but that isn’t his favourite thing about it. ‘The best thing is that students from different classes have become friends,’ he says. Next year, he wants to sell the vegetables at the Saturday market in town and use the money to make the garden bigger."
      ]
    },
    "options": [
      "There are too many of them to work together.",
      "Some of them prefer to work at weekends.",
      "The garden is in two different places."
    ],
    "correct": 0,
    "feedback": "Sí: ahora son cuarenta, y por eso se dividen.",
    "feedbackWrong": "Fin del tercer párrafo: ¿cuántos eran al principio y cuántos son ahora?",
    "hint": "Compará «six» con «forty».",
    "feedbackExtra": "Pasaron de seis a cuarenta miembros y «have to work in two groups»: son muchos para trabajar todos juntos. El texto dice «different days», no fines de semana (B), y habla de una sola huerta (C).",
    "scaffold": {
      "altExplanation": "«Have to» marca una obligación, y la causa está justo antes, en la misma oración. Preguntate qué cambió entre el principio y ahora para que ya no puedan trabajar todos juntos."
    },
    "consignaEs": "¿Por qué ahora los miembros trabajan en dos grupos?"
  },
  {
    "id": "A2K-T1-R3-5",
    "status": "draft",
    "nivelId": "m0-r3",
    "stage": "Test 1 · Reading · Part 3",
    "concept": "Reading · Part 3 (lectura-larga-3op)",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "What does Leo like most about the garden?",
    "estimulo": {
      "rotulo": "ARTICLE",
      "titulo": "A garden at school",
      "parrafos": [
        "Thirteen-year-old Leo Baker loves vegetables, but he didn’t always. ‘When I was little, I only wanted chips and pizza,’ he says. Everything changed two years ago, when he spent the summer on his grandparents’ farm. He helped them grow tomatoes and carrots, and he was surprised that they tasted so good.",
        "When Leo went back to school in September, he asked his science teacher, Mrs Okoro, if the students could have a garden. She liked the idea, but there was a problem: the school didn’t have any money for it. So Leo and his classmates made cakes and sold them at break time. After a month, they had enough money to buy plants and tools.",
        "At first, only six students came to work in the garden after school. It was hard work, and in winter it was cold and wet. But in spring the first vegetables were ready, and the school cook used them to make soup for all the students and teachers. After that, lots of students wanted to join. Now there are forty members, and they have to work in two groups on different days.",
        "Leo is happy that the garden is so popular, but that isn’t his favourite thing about it. ‘The best thing is that students from different classes have become friends,’ he says. Next year, he wants to sell the vegetables at the Saturday market in town and use the money to make the garden bigger."
      ]
    },
    "options": [
      "It has become very popular.",
      "It has helped students to make friends.",
      "It will make money for the school."
    ],
    "correct": 1,
    "feedback": "Sí: lo mejor para Leo es que chicos de distintos cursos se hicieron amigos.",
    "feedbackWrong": "Último párrafo: Leo dice qué NO es lo que más le gusta y después qué es «the best thing».",
    "hint": "Leo descarta una cosa y elige otra.",
    "feedbackExtra": "Leo está contento de que la huerta sea popular, «but that isn’t his favourite thing» (A). Lo mejor es que alumnos de distintas clases se hicieron amigos. Vender en el mercado es un plan, y la plata es para la huerta (C).",
    "scaffold": {
      "altExplanation": "Cuando alguien dice «but that isn’t…», lo que nombró antes queda descartado, aunque sea verdad. Y un plan para el año que viene tampoco es lo que más le gusta hoy."
    },
    "consignaEs": "¿Qué es lo que más le gusta a Leo de la huerta?"
  },
  {
    "id": "A2K-R4-TIPS",
    "status": "draft",
    "nivelId": "m0-r4",
    "kind": "concept",
    "stage": "Consejos",
    "concept": "consejos Reading · Part 4",
    "feedback": "Listo. Ahora, la tarea.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Reading · Part 4",
        "regla": "Un texto con seis huecos. Para cada hueco elegís **una palabra** entre tres.",
        "notas": [
          "Leé todo el texto antes de mirar las opciones.",
          "Mirá las palabras de antes y de después del hueco: te dicen cuál entra.",
          "Probá cada opción dentro de la oración y leela entera."
        ],
        "idea": "Un texto con seis huecos. Para cada hueco elegís una palabra entre tres. Leé todo el texto antes de mirar las opciones. Mirá las palabras de antes y de después del hueco: te dicen cuál entra. Probá cada opción dentro de la oración y leela entera. Tiempo recomendado: 7 minutos."
      }
    ]
  },
  {
    "id": "A2K-T1-R4-1",
    "status": "draft",
    "nivelId": "m0-r4",
    "stage": "Test 1 · Reading · Part 4",
    "concept": "Reading · Part 4 (cloze-3op)",
    "kind": "mc",
    "skill": "COMP_03",
    "difficulty": 1,
    "question": "Choose the best word for gap (1).",
    "estimulo": {
      "titulo": "Bees",
      "parrafos": [
        "Bees are very small, but they are very important for our world. They [[(1) ____]] from flower to flower to find food, and this helps plants to grow new fruit and vegetables.",
        "A bee’s home is (2) …… a hive. Thousands of bees live together in one hive, and every bee has a different (3) ……. Some look after the baby bees, some clean the hive, and others go out to look for flowers.",
        "In summer, bees make honey. They (4) …… it in the hive and eat it in winter, when there are no flowers. People have eaten honey for thousands of years. It is sweet, and many people (5) …… it in their tea when they have a cold.",
        "Today, bees are in danger in many countries because there are not enough wild flowers. You can help: grow some flowers in your garden, and bees will soon come to (6) …… you."
      ]
    },
    "options": [
      "climb",
      "fly",
      "ride"
    ],
    "correct": 1,
    "feedback": "Sí: las abejas vuelan de flor en flor.",
    "feedbackWrong": "Pensá cómo se mueve este animal de una flor a otra.",
    "hint": "Pensá en el cuerpo de este animal.",
    "feedbackExtra": "Las abejas tienen alas: «fly» (volar). «Climb» es trepar con manos o patas y «ride» se usa con una bici o un caballo.",
    "scaffold": {
      "altExplanation": "Imaginá la escena: un animal chico que va por el aire de una flor a otra. Decí el verbo en castellano y buscá su par en inglés. Después revisá qué significan los otros dos."
    },
    "consignaEs": "Elegí la mejor palabra para el espacio (1)."
  },
  {
    "id": "A2K-T1-R4-2",
    "status": "draft",
    "nivelId": "m0-r4",
    "stage": "Test 1 · Reading · Part 4",
    "concept": "Reading · Part 4 (cloze-3op)",
    "kind": "mc",
    "skill": "COMP_03",
    "difficulty": 2,
    "question": "Choose the best word for gap (2).",
    "estimulo": {
      "titulo": "Bees",
      "parrafos": [
        "Bees are very small, but they are very important for our world. They (1) …… from flower to flower to find food, and this helps plants to grow new fruit and vegetables.",
        "A bee’s home is [[(2) ____]] a hive. Thousands of bees live together in one hive, and every bee has a different (3) ……. Some look after the baby bees, some clean the hive, and others go out to look for flowers.",
        "In summer, bees make honey. They (4) …… it in the hive and eat it in winter, when there are no flowers. People have eaten honey for thousands of years. It is sweet, and many people (5) …… it in their tea when they have a cold.",
        "Today, bees are in danger in many countries because there are not enough wild flowers. You can help: grow some flowers in your garden, and bees will soon come to (6) …… you."
      ]
    },
    "options": [
      "called",
      "told",
      "said"
    ],
    "correct": 0,
    "feedback": "Sí: «is called» = se llama.",
    "feedbackWrong": "La oración da el nombre de una cosa. ¿Qué verbo se usa para decir cómo se llama algo?",
    "hint": "Pensá en «What is it … in English?».",
    "feedbackExtra": "Para dar el nombre de algo se usa «be called»: «A bee’s home is called a hive». «Told» y «said» son de hablar: cuentan que alguien dijo algo; no sirven para dar el nombre de una cosa.",
    "scaffold": {
      "altExplanation": "Convertí la oración en pregunta: «What is a bee’s home …?». Dos de las opciones cuentan que alguien habló; una sola sirve para dar un nombre."
    },
    "consignaEs": "Elegí la mejor palabra para el espacio (2)."
  },
  {
    "id": "A2K-T1-R4-3",
    "status": "draft",
    "nivelId": "m0-r4",
    "stage": "Test 1 · Reading · Part 4",
    "concept": "Reading · Part 4 (cloze-3op)",
    "kind": "mc",
    "skill": "COMP_03",
    "difficulty": 3,
    "question": "Choose the best word for gap (3).",
    "estimulo": {
      "titulo": "Bees",
      "parrafos": [
        "Bees are very small, but they are very important for our world. They (1) …… from flower to flower to find food, and this helps plants to grow new fruit and vegetables.",
        "A bee’s home is (2) …… a hive. Thousands of bees live together in one hive, and every bee has a different [[(3) ____]]. Some look after the baby bees, some clean the hive, and others go out to look for flowers.",
        "In summer, bees make honey. They (4) …… it in the hive and eat it in winter, when there are no flowers. People have eaten honey for thousands of years. It is sweet, and many people (5) …… it in their tea when they have a cold.",
        "Today, bees are in danger in many countries because there are not enough wild flowers. You can help: grow some flowers in your garden, and bees will soon come to (6) …… you."
      ]
    },
    "options": [
      "work",
      "staff",
      "job"
    ],
    "correct": 2,
    "feedback": "Sí: «a different job» — «job» se puede contar.",
    "feedbackWrong": "Mirá las palabras de antes del hueco: «a different …». ¿Cuál de las tres se puede contar?",
    "hint": "Después de «a» va algo que se cuenta: uno, dos…",
    "feedbackExtra": "Después de «a different» va un sustantivo que se cuenta: «a job, two jobs». «Work» no se cuenta (no se dice «a work») y «staff» son las personas que trabajan en un lugar.",
    "scaffold": {
      "altExplanation": "Poné «two» delante de cada opción y agregale una «s». Si suena mal, esa palabra no se cuenta y no puede ir después de «a». Además, una de las tres nombra personas, no una tarea."
    },
    "consignaEs": "Elegí la mejor palabra para el espacio (3)."
  },
  {
    "id": "A2K-T1-R4-4",
    "status": "draft",
    "nivelId": "m0-r4",
    "stage": "Test 1 · Reading · Part 4",
    "concept": "Reading · Part 4 (cloze-3op)",
    "kind": "mc",
    "skill": "COMP_03",
    "difficulty": 3,
    "question": "Choose the best word for gap (4).",
    "estimulo": {
      "titulo": "Bees",
      "parrafos": [
        "Bees are very small, but they are very important for our world. They (1) …… from flower to flower to find food, and this helps plants to grow new fruit and vegetables.",
        "A bee’s home is (2) …… a hive. Thousands of bees live together in one hive, and every bee has a different (3) ……. Some look after the baby bees, some clean the hive, and others go out to look for flowers.",
        "In summer, bees make honey. They [[(4) ____]] it in the hive and eat it in winter, when there are no flowers. People have eaten honey for thousands of years. It is sweet, and many people (5) …… it in their tea when they have a cold.",
        "Today, bees are in danger in many countries because there are not enough wild flowers. You can help: grow some flowers in your garden, and bees will soon come to (6) …… you."
      ]
    },
    "options": [
      "stay",
      "keep",
      "wait"
    ],
    "correct": 1,
    "feedback": "Sí: «keep it in the hive» = la guardan en la colmena.",
    "feedbackWrong": "Después del hueco viene «it». ¿Cuál de los tres verbos puede llevar una cosa después?",
    "hint": "Probá cada verbo con «it» atrás.",
    "feedbackExtra": "«Keep» + una cosa + un lugar quiere decir guardar esa cosa ahí: «keep it in the hive». «Stay» es quedarse y «wait» es esperar: ninguno de los dos habla de guardar algo.",
    "scaffold": {
      "altExplanation": "Preguntate qué hacen las abejas con la miel entre el verano y el invierno. Dos de los verbos hablan de lo que hace uno mismo (quedarse, esperar); el que buscás habla de lo que se hace con una cosa."
    },
    "consignaEs": "Elegí la mejor palabra para el espacio (4)."
  },
  {
    "id": "A2K-T1-R4-5",
    "status": "draft",
    "nivelId": "m0-r4",
    "stage": "Test 1 · Reading · Part 4",
    "concept": "Reading · Part 4 (cloze-3op)",
    "kind": "mc",
    "skill": "COMP_03",
    "difficulty": 2,
    "question": "Choose the best word for gap (5).",
    "estimulo": {
      "titulo": "Bees",
      "parrafos": [
        "Bees are very small, but they are very important for our world. They (1) …… from flower to flower to find food, and this helps plants to grow new fruit and vegetables.",
        "A bee’s home is (2) …… a hive. Thousands of bees live together in one hive, and every bee has a different (3) ……. Some look after the baby bees, some clean the hive, and others go out to look for flowers.",
        "In summer, bees make honey. They (4) …… it in the hive and eat it in winter, when there are no flowers. People have eaten honey for thousands of years. It is sweet, and many people [[(5) ____]] it in their tea when they have a cold.",
        "Today, bees are in danger in many countries because there are not enough wild flowers. You can help: grow some flowers in your garden, and bees will soon come to (6) …… you."
      ]
    },
    "options": [
      "make",
      "do",
      "put"
    ],
    "correct": 2,
    "feedback": "Sí: «put it in their tea» = se la ponen al té.",
    "feedbackWrong": "Leé hasta «in their tea»: ¿qué hace la gente con la miel y el té?",
    "hint": "La miel va adentro del té.",
    "feedbackExtra": "Para decir que algo va adentro de otra cosa se usa «put … in»: «put honey in their tea». «Make» sería preparar la miel, y eso lo hacen las abejas; «do it in their tea» no significa nada.",
    "scaffold": {
      "altExplanation": "No pienses en el verbo que usarías en castellano con el té. Mirá la palabra «in»: el verbo tiene que hablar de mover una cosa hacia adentro de otra."
    },
    "consignaEs": "Elegí la mejor palabra para el espacio (5)."
  },
  {
    "id": "A2K-T1-R4-6",
    "status": "draft",
    "nivelId": "m0-r4",
    "stage": "Test 1 · Reading · Part 4",
    "concept": "Reading · Part 4 (cloze-3op)",
    "kind": "mc",
    "skill": "COMP_03",
    "difficulty": 2,
    "question": "Choose the best word for gap (6).",
    "estimulo": {
      "titulo": "Bees",
      "parrafos": [
        "Bees are very small, but they are very important for our world. They (1) …… from flower to flower to find food, and this helps plants to grow new fruit and vegetables.",
        "A bee’s home is (2) …… a hive. Thousands of bees live together in one hive, and every bee has a different (3) ……. Some look after the baby bees, some clean the hive, and others go out to look for flowers.",
        "In summer, bees make honey. They (4) …… it in the hive and eat it in winter, when there are no flowers. People have eaten honey for thousands of years. It is sweet, and many people (5) …… it in their tea when they have a cold.",
        "Today, bees are in danger in many countries because there are not enough wild flowers. You can help: grow some flowers in your garden, and bees will soon come to [[(6) ____]] you."
      ]
    },
    "options": [
      "visit",
      "look",
      "arrive"
    ],
    "correct": 0,
    "feedback": "Sí: «come to visit you».",
    "feedbackWrong": "Después del hueco viene «you», sin ninguna palabra en el medio. ¿Cuál lo permite?",
    "hint": "Probá cada verbo pegado a «you».",
    "feedbackExtra": "«Visit» lleva la persona directamente: «visit you». «Look» necesita «at» («look at you») y «arrive» no lleva una persona después.",
    "scaffold": {
      "altExplanation": "Pensá primero el sentido: ¿qué hace alguien que viene a tu casa un rato? Después comprobá la forma: ese verbo tiene que poder ir pegado a «you», sin «at» ni «to» en el medio."
    },
    "consignaEs": "Elegí la mejor palabra para el espacio (6)."
  },
  {
    "id": "A2K-R5-TIPS",
    "status": "draft",
    "nivelId": "m0-r5",
    "kind": "concept",
    "stage": "Consejos",
    "concept": "consejos Reading · Part 5",
    "feedback": "Listo. Ahora, la tarea.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Reading · Part 5",
        "regla": "Un mail con seis huecos. Escribís **una sola palabra** en cada uno, bien escrita.",
        "notas": [
          "Casi siempre faltan palabras cortas de gramática: a, the, to, in, do, is, because.",
          "Mirá qué hay antes y después del hueco y pensá qué tipo de palabra falta.",
          "Al terminar, leé el mail completo con tus palabras puestas."
        ],
        "idea": "Un mail con seis huecos. Escribís una sola palabra en cada uno, bien escrita. Casi siempre faltan palabras cortas de gramática: a, the, to, in, do, is, because. Mirá qué hay antes y después del hueco y pensá qué tipo de palabra falta. Al terminar, leé el mail completo con tus palabras puestas. Tiempo recomendado: 8 minutos."
      }
    ]
  },
  {
    "id": "A2K-T1-R5-1",
    "status": "draft",
    "nivelId": "m0-r5",
    "stage": "Test 1 · Reading · Part 5",
    "concept": "Reading · Part 5 (cloze-abierto)",
    "kind": "fill",
    "skill": "PROD_01",
    "difficulty": 2,
    "question": "Write ONE word for gap (1).",
    "estimulo": {
      "rotulo": "EMAIL",
      "parrafos": [
        "From: Anna\nTo: Lucy",
        "Hi Lucy,\nThanks for your email. I’m so happy you can come and stay with us [[(1) ____]] the holidays!\nThere is a lot to do here. We live near the beach, so don’t forget (2) …… bring your swimsuit. My brother has (3) …… new boat, and he says he will take us sailing on Saturday.\n(4) …… you like eating fish? There is a great restaurant next to the sea, and my parents want to take us there.\nMy mum will meet you at the station. What time (5) …… your train arrive? Please tell me soon, (6) …… she needs to know before Friday.\nSee you soon!\nAnna"
      ]
    },
    "answer": "in",
    "acceptVariants": [
      "during",
      "for",
      "over",
      "throughout"
    ],
    "feedback": "Sí. Valen «in», «during», «for» y «over the holidays».",
    "feedbackWrong": "Falta la palabrita que va antes de un período de tiempo («the holidays»).",
    "hint": "Es una preposición de tiempo.",
    "feedbackExtra": "Antes de «the holidays» va una preposición de tiempo: «in the holidays», «during the holidays», «for the holidays» u «over the holidays». «On» y «at» no van con un período largo en esta frase.",
    "scaffold": {
      "altExplanation": "Decí la frase en castellano: «quedarte con nosotros ___ las vacaciones». Te sale una preposición. Pensá cuáles usa el inglés antes de un período largo (un mes, un verano), no antes de un día o una hora."
    },
    "consignaEs": "Escribí UNA palabra para el espacio (1)."
  },
  {
    "id": "A2K-T1-R5-2",
    "status": "draft",
    "nivelId": "m0-r5",
    "stage": "Test 1 · Reading · Part 5",
    "concept": "Reading · Part 5 (cloze-abierto)",
    "kind": "fill",
    "skill": "PROD_01",
    "difficulty": 2,
    "question": "Write ONE word for gap (2).",
    "estimulo": {
      "rotulo": "EMAIL",
      "parrafos": [
        "From: Anna\nTo: Lucy",
        "Hi Lucy,\nThanks for your email. I’m so happy you can come and stay with us (1) …… the holidays!\nThere is a lot to do here. We live near the beach, so don’t forget [[(2) ____]] bring your swimsuit. My brother has (3) …… new boat, and he says he will take us sailing on Saturday.\n(4) …… you like eating fish? There is a great restaurant next to the sea, and my parents want to take us there.\nMy mum will meet you at the station. What time (5) …… your train arrive? Please tell me soon, (6) …… she needs to know before Friday.\nSee you soon!\nAnna"
      ]
    },
    "answer": "to",
    "acceptVariants": [],
    "feedback": "Sí: «don’t forget to bring…».",
    "feedbackWrong": "Mirá el verbo de antes («forget») y el de después («bring»): ¿qué palabra los une?",
    "hint": "forget + … + verbo.",
    "feedbackExtra": "Después de «forget» el otro verbo va con «to»: «don’t forget to bring your swimsuit». Pasa lo mismo con «want to» y «need to».",
    "scaffold": {
      "altExplanation": "En castellano «no te olvides de traer» lleva «de». En inglés entre esos dos verbos no va «of»: va la misma palabra que aparece en «want … go» y «need … buy»."
    },
    "consignaEs": "Escribí UNA palabra para el espacio (2)."
  },
  {
    "id": "A2K-T1-R5-3",
    "status": "draft",
    "nivelId": "m0-r5",
    "stage": "Test 1 · Reading · Part 5",
    "concept": "Reading · Part 5 (cloze-abierto)",
    "kind": "fill",
    "skill": "PROD_01",
    "difficulty": 1,
    "question": "Write ONE word for gap (3).",
    "estimulo": {
      "rotulo": "EMAIL",
      "parrafos": [
        "From: Anna\nTo: Lucy",
        "Hi Lucy,\nThanks for your email. I’m so happy you can come and stay with us (1) …… the holidays!\nThere is a lot to do here. We live near the beach, so don’t forget (2) …… bring your swimsuit. My brother has [[(3) ____]] new boat, and he says he will take us sailing on Saturday.\n(4) …… you like eating fish? There is a great restaurant next to the sea, and my parents want to take us there.\nMy mum will meet you at the station. What time (5) …… your train arrive? Please tell me soon, (6) …… she needs to know before Friday.\nSee you soon!\nAnna"
      ]
    },
    "answer": "a",
    "acceptVariants": [],
    "feedback": "Sí: «a new boat».",
    "feedbackWrong": "Después del hueco hay un adjetivo y una cosa en singular. ¿Qué va delante?",
    "hint": "Es un artículo.",
    "feedbackExtra": "«Boat» es una cosa que se cuenta y está en singular, y es la primera vez que se nombra: «a new boat». «The» no se acepta acá porque Lucy todavía no sabe de qué bote se habla.",
    "scaffold": {
      "altExplanation": "Preguntate si Lucy ya conoce ese bote. Si es la primera vez que se lo nombran, es «uno», no «el». Y fijate con qué sonido empieza la palabra que sigue al hueco."
    },
    "consignaEs": "Escribí UNA palabra para el espacio (3)."
  },
  {
    "id": "A2K-T1-R5-4",
    "status": "draft",
    "nivelId": "m0-r5",
    "stage": "Test 1 · Reading · Part 5",
    "concept": "Reading · Part 5 (cloze-abierto)",
    "kind": "fill",
    "skill": "PROD_01",
    "difficulty": 2,
    "question": "Write ONE word for gap (4).",
    "estimulo": {
      "rotulo": "EMAIL",
      "parrafos": [
        "From: Anna\nTo: Lucy",
        "Hi Lucy,\nThanks for your email. I’m so happy you can come and stay with us (1) …… the holidays!\nThere is a lot to do here. We live near the beach, so don’t forget (2) …… bring your swimsuit. My brother has (3) …… new boat, and he says he will take us sailing on Saturday.\n[[(4) ____]] you like eating fish? There is a great restaurant next to the sea, and my parents want to take us there.\nMy mum will meet you at the station. What time (5) …… your train arrive? Please tell me soon, (6) …… she needs to know before Friday.\nSee you soon!\nAnna"
      ]
    },
    "answer": "Do",
    "acceptVariants": [],
    "feedback": "Sí: «Do you like eating fish?».",
    "feedbackWrong": "Es una pregunta con «you like». ¿Con qué palabra empieza?",
    "hint": "Mirá el signo del final de la oración.",
    "feedbackExtra": "Las preguntas en presente con «you» y un verbo como «like» empiezan con «Do»: «Do you like eating fish?». «Are» no va con «like», y «Does» es para he, she o it.",
    "scaffold": {
      "altExplanation": "No traduzcas palabra por palabra: en castellano la pregunta empieza directo con el verbo. En inglés hace falta un auxiliar antes de «you», y con «like» ese auxiliar no es «are»."
    },
    "consignaEs": "Escribí UNA palabra para el espacio (4)."
  },
  {
    "id": "A2K-T1-R5-5",
    "status": "draft",
    "nivelId": "m0-r5",
    "stage": "Test 1 · Reading · Part 5",
    "concept": "Reading · Part 5 (cloze-abierto)",
    "kind": "fill",
    "skill": "PROD_01",
    "difficulty": 3,
    "question": "Write ONE word for gap (5).",
    "estimulo": {
      "rotulo": "EMAIL",
      "parrafos": [
        "From: Anna\nTo: Lucy",
        "Hi Lucy,\nThanks for your email. I’m so happy you can come and stay with us (1) …… the holidays!\nThere is a lot to do here. We live near the beach, so don’t forget (2) …… bring your swimsuit. My brother has (3) …… new boat, and he says he will take us sailing on Saturday.\n(4) …… you like eating fish? There is a great restaurant next to the sea, and my parents want to take us there.\nMy mum will meet you at the station. What time [[(5) ____]] your train arrive? Please tell me soon, (6) …… she needs to know before Friday.\nSee you soon!\nAnna"
      ]
    },
    "answer": "does",
    "acceptVariants": [
      "will"
    ],
    "feedback": "Sí. Valen «does» y «will».",
    "feedbackWrong": "Es una pregunta sobre «your train». ¿Qué palabra va entre «What time» y el tren?",
    "hint": "El tren es «it».",
    "feedbackExtra": "«Your train» es una sola cosa (it): «What time does your train arrive?». También vale «will», porque habla del futuro. «Do» no, porque es para I, you, we y they.",
    "scaffold": {
      "altExplanation": "Buscá el sujeto de la pregunta: no es «you», es «your train». Cambialo por «it» y armá la pregunta: «What time … it arrive?». El auxiliar cambia según el sujeto."
    },
    "consignaEs": "Escribí UNA palabra para el espacio (5)."
  },
  {
    "id": "A2K-T1-R5-6",
    "status": "draft",
    "nivelId": "m0-r5",
    "stage": "Test 1 · Reading · Part 5",
    "concept": "Reading · Part 5 (cloze-abierto)",
    "kind": "fill",
    "skill": "PROD_01",
    "difficulty": 2,
    "question": "Write ONE word for gap (6).",
    "estimulo": {
      "rotulo": "EMAIL",
      "parrafos": [
        "From: Anna\nTo: Lucy",
        "Hi Lucy,\nThanks for your email. I’m so happy you can come and stay with us (1) …… the holidays!\nThere is a lot to do here. We live near the beach, so don’t forget (2) …… bring your swimsuit. My brother has (3) …… new boat, and he says he will take us sailing on Saturday.\n(4) …… you like eating fish? There is a great restaurant next to the sea, and my parents want to take us there.\nMy mum will meet you at the station. What time (5) …… your train arrive? Please tell me soon, [[(6) ____]] she needs to know before Friday.\nSee you soon!\nAnna"
      ]
    },
    "answer": "because",
    "acceptVariants": [
      "as",
      "since"
    ],
    "feedback": "Sí: «because» une el pedido con su motivo.",
    "feedbackWrong": "La segunda parte de la oración explica el motivo de la primera. ¿Qué palabra une las dos?",
    "hint": "Es un conector.",
    "feedbackExtra": "Anna pide el horario y después da el motivo: «because she needs to know before Friday». «So» no va: daría vuelta el sentido (el motivo pasaría a ser la consecuencia).",
    "scaffold": {
      "altExplanation": "Tapá el hueco y leé las dos partes: «decime pronto» y «ella necesita saberlo antes del viernes». ¿La segunda es la causa o el resultado de la primera? Elegí un conector de causa."
    },
    "consignaEs": "Escribí UNA palabra para el espacio (6)."
  },
  {
    "id": "A2K-W6-TIPS",
    "status": "draft",
    "nivelId": "m0-w6",
    "kind": "concept",
    "stage": "Consejos",
    "concept": "consejos Writing · Part 6",
    "feedback": "Listo. Ahora, la tarea.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Writing · Part 6",
        "regla": "Escribís un mensaje corto, de **25 palabras o más**, que contesta los tres puntos de la consigna.",
        "notas": [
          "Antes de escribir, marcá los tres puntos y fijate a quién le escribís.",
          "Contestá los tres: si falta uno, perdés puntos aunque el inglés esté bien.",
          "Saludá al empezar y despedite con tu nombre."
        ],
        "idea": "Escribís un mensaje corto, de 25 palabras o más, que contesta los tres puntos de la consigna. Antes de escribir, marcá los tres puntos y fijate a quién le escribís. Contestá los tres: si falta uno, perdés puntos aunque el inglés esté bien. Saludá al empezar y despedite con tu nombre. Tiempo recomendado: 8 minutos."
      }
    ]
  },
  {
    "id": "A2K-T1-W6-1",
    "status": "draft",
    "nivelId": "m0-w6",
    "stage": "Test 1 · Writing · Part 6 · con un adulto",
    "concept": "Writing · Part 6 (escritura-mensaje-guiado)",
    "kind": "free",
    "skill": "PROD_02",
    "difficulty": 4,
    "question": "Your English friend Alex is coming to stay with you next weekend. Write an email to Alex. In your email: say what you can do together on Saturday; tell Alex what clothes to bring; ask what food Alex likes. Write 25 words or more.",
    "placeholder": "Hi Alex, …",
    "feedback": "Antes de tocar Continuar, mostrale tu texto al adulto: la app no lo guarda.",
    "checklist": [
      "¿Contestaste los tres puntos de la consigna?",
      "¿Escribiste 25 palabras o más?",
      "¿Empezaste con un saludo y terminaste con tu nombre?",
      "¿Releíste las mayúsculas y los puntos?"
    ]
  },
  {
    "id": "A2K-T1-W6-1-ADULTO",
    "status": "draft",
    "nivelId": "m0-w6",
    "stage": "Test 1 · Writing · Part 6 · con un adulto",
    "concept": "Writing · Part 6 (escritura-mensaje-guiado)",
    "kind": "profe",
    "forma": "pausa",
    "question": "Corrección del adulto. Mostrale tu texto: lo corrige con su hoja.",
    "feedback": "Listo. El puntaje lo anota el adulto.",
    "paraProfe": {
      "criterios": [
        "Los tres puntos de esta consigna: (1) un plan para el sábado, (2) qué ropa llevar, (3) una pregunta sobre comida. Si falta uno, baja Content.",
        "Que sea un mail a un amigo: saludo, mensaje y despedida.",
        "Que tenga 25 palabras o más. Si es más corto, casi siempre falta contenido.",
        "Puntaje: de 0 a 5 en Content, Organisation, Language. Máximo 15. Las bandas están en «Hoja del adulto»."
      ],
      "modelo": "Respuesta de muestra (hay muchas otras posibles): Hi Alex, I’m so happy you’re coming! On Saturday we can go to the park and play football. Bring a jacket because it’s cold in the evening. What food do you like? See you soon, Tomi",
      "objetivo": "Leé el texto en la pantalla del chico o de la chica y poné los tres puntajes en papel. En la app marcá cómo lo escribió: solo, con ayuda, o todavía no.",
      "registra": "La app guarda solo esa marca de tres niveles. No guarda el texto ni el puntaje de 0 a 5."
    }
  },
  {
    "id": "A2K-W7-TIPS",
    "status": "draft",
    "nivelId": "m0-w7",
    "kind": "concept",
    "stage": "Consejos",
    "concept": "consejos Writing · Part 7",
    "feedback": "Listo. Ahora, la tarea.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Writing · Part 7",
        "regla": "Escribís una historia corta, de **35 palabras o más**, que cuenta los tres dibujos.",
        "notas": [
          "Mirá los tres dibujos antes de empezar: quién está, dónde, qué pasa.",
          "Contá los tres, en orden, y unilos con then, but o because.",
          "Poneles nombre a los personajes: así es más fácil contar."
        ],
        "idea": "Escribís una historia corta, de 35 palabras o más, que cuenta los tres dibujos. Mirá los tres dibujos antes de empezar: quién está, dónde, qué pasa. Contá los tres, en orden, y unilos con then, but o because. Poneles nombre a los personajes: así es más fácil contar. Tiempo recomendado: 12 minutos."
      }
    ]
  },
  {
    "id": "A2K-T1-W7-1",
    "status": "draft",
    "nivelId": "m0-w7",
    "stage": "Test 1 · Writing · Part 7 · con un adulto",
    "concept": "Writing · Part 7 (escritura-historia-imagenes)",
    "kind": "free",
    "skill": "PROD_02",
    "difficulty": 4,
    "question": "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
    "placeholder": "One day, …",
    "feedback": "Antes de tocar Continuar, mostrale tu texto al adulto: la app no lo guarda.",
    "image": "../pdp-assets/d2d47ba9b1d23a395e5a69e9db9b9bed.jpg",
    "imageAlt": "Tres dibujos sin texto, en fila. Cuentan una historia de izquierda a derecha.",
    "checklist": [
      "¿Tu historia cuenta los tres dibujos?",
      "¿Escribiste 35 palabras o más?",
      "¿Contaste la historia en pasado?",
      "¿Uniste las partes con and, then, but o because?"
    ]
  },
  {
    "id": "A2K-T1-W7-1-ADULTO",
    "status": "draft",
    "nivelId": "m0-w7",
    "stage": "Test 1 · Writing · Part 7 · con un adulto",
    "concept": "Writing · Part 7 (escritura-historia-imagenes)",
    "kind": "profe",
    "forma": "pausa",
    "question": "Corrección del adulto. Mostrale tu texto: lo corrige con su hoja.",
    "feedback": "Listo. El puntaje lo anota el adulto.",
    "paraProfe": {
      "criterios": [
        "Que la historia cuente los tres dibujos, en orden. Si falta un dibujo, baja Content.",
        "Que las partes estén unidas (and, then, but, because, in the end) y no sean tres frases sueltas.",
        "Que tenga 35 palabras o más. Lo esperable es que la cuente en pasado (made, looked, ate). Si se le escapa algún verbo en presente pero la historia se entiende, no baja Content: eso se mira en Language.",
        "Puntaje: de 0 a 5 en Content, Organisation, Language. Máximo 15. Las bandas están en «Hoja del adulto»."
      ],
      "modelo": "Respuesta de muestra (hay muchas otras posibles): Last Saturday, Ben and his dad made a chocolate cake. Then they looked out of the window, and their dog ate the cake! In the end, they went to a café and had ice cream. Everybody laughed.",
      "objetivo": "Leé el texto en la pantalla del chico o de la chica y poné los tres puntajes en papel. En la app marcá cómo lo escribió: solo, con ayuda, o todavía no.",
      "registra": "La app guarda solo esa marca de tres niveles. No guarda el texto ni el puntaje de 0 a 5."
    }
  },
  {
    "id": "A2K-L1-TIPS",
    "status": "draft",
    "nivelId": "m0-l1",
    "kind": "concept",
    "stage": "Consejos",
    "concept": "consejos Listening · Part 1",
    "feedback": "Listo. Ahora, la tarea.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Listening · Part 1",
        "regla": "Escuchás cinco diálogos cortos. En cada uno elegís **la opción** que responde la pregunta.",
        "notas": [
          "Antes de escuchar, leé la pregunta y las tres opciones (en el examen son imágenes).",
          "Las tres cosas se nombran en el diálogo: escuchá cuál responde la pregunta.",
          "La segunda vez, comprobá tu respuesta."
        ],
        "idea": "Escuchás cinco diálogos cortos. En cada uno elegís la opción que responde la pregunta. Antes de escuchar, leé la pregunta y las tres opciones (en el examen son imágenes). Las tres cosas se nombran en el diálogo: escuchá cuál responde la pregunta. La segunda vez, comprobá tu respuesta. Tiempo recomendado: 6 minutos."
      }
    ]
  },
  {
    "id": "A2K-T1-L1-1",
    "status": "draft",
    "nivelId": "m0-l1",
    "stage": "Test 1 · Listening · Part 1",
    "concept": "Listening · Part 1 (escucha-imagen-3op)",
    "kind": "listen",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "What will the girl take to the picnic?",
    "image": "../pdp-assets/3793815cbf4caa4fb6b24fc2f503114b.jpg",
    "imageAlt": "Tres dibujos con las letras A, B y C: A, fruit; B, sandwiches; C, a cake.",
    "options": [
      "A",
      "B",
      "C"
    ],
    "correct": 0,
    "vozEntrada": "Are you bringing sandwiches to the picnic on Saturday, Mia? No, Tom’s making those. I wanted to bring a chocolate cake, but I haven’t got time to make one. So I’ll just bring some fruit. Apples and grapes, I think. Great. I’ll bring the drinks.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Are you bringing sandwiches to the picnic on Saturday, Mia?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No, Tom’s making those. I wanted to bring a chocolate cake, but I haven’t got time to make one. So I’ll just bring some fruit. Apples and grapes, I think.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Great. I’ll bring the drinks.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/4ca048f49d0d44e1987bce8a6a6ae011.mp3",
    "audioGrupo": "T1-L1-1",
    "feedback": "Sí: al final decide llevar fruta.",
    "feedbackWrong": "Las tres cosas se nombran. Escuchá cuál queda después de «So…».",
    "hint": "Atención a «but» y a «so».",
    "feedbackExtra": "Los sándwiches los hace Tom. La torta era la idea de Mia, «but I haven’t got time». «So I’ll just bring some fruit»: lo que lleva es fruta.",
    "scaffold": {
      "altExplanation": "Hacé una lista con las tres comidas y anotá al lado quién la lleva o por qué no. La pregunta es por la chica: lo que lleva otra persona y lo que ella quería pero no puede quedan afuera."
    },
    "consignaEs": "¿Qué va a llevar la chica al pícnic?"
  },
  {
    "id": "A2K-T1-L1-2",
    "status": "draft",
    "nivelId": "m0-l1",
    "stage": "Test 1 · Listening · Part 1",
    "concept": "Listening · Part 1 (escucha-imagen-3op)",
    "kind": "listen",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "What time does the film start?",
    "image": "../pdp-assets/c35da56f24164edb54c6cd3a448cfbd2.jpg",
    "imageAlt": "Tres dibujos con las letras A, B y C: A, 7.00; B, 7.15; C, 9.30.",
    "options": [
      "A",
      "B",
      "C"
    ],
    "correct": 1,
    "vozEntrada": "Dad, can you drive me to the cinema tonight? The film starts at quarter past seven. I thought it was at seven o’clock. No, that’s when I’m meeting Julia. And we’ll be home by half past nine.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Dad, can you drive me to the cinema tonight? The film starts at quarter past seven.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "I thought it was at seven o’clock.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No, that’s when I’m meeting Julia. And we’ll be home by half past nine.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/9a75d13c4cdf0f8b21649e4c8d318928.mp3",
    "audioGrupo": "T1-L1-2",
    "feedback": "Sí: «quarter past seven» = 7.15.",
    "feedbackWrong": "Se dicen tres horas. Escuchá qué pasa a cada una.",
    "hint": "Una de las horas es una confusión del papá.",
    "feedbackExtra": "La película empieza a «quarter past seven» (7.15). A las siete se encuentra con Julia, y las nueve y media es la hora de volver a casa.",
    "scaffold": {
      "altExplanation": "Escribí las tres horas en orden y al lado un verbo: encontrarse, empezar, volver. La pregunta pide una sola de esas acciones. Y ojo: lo que el papá cree puede no ser lo correcto."
    },
    "consignaEs": "¿A qué hora empieza la película?"
  },
  {
    "id": "A2K-T1-L1-3",
    "status": "draft",
    "nivelId": "m0-l1",
    "stage": "Test 1 · Listening · Part 1",
    "concept": "Listening · Part 1 (escucha-imagen-3op)",
    "kind": "listen",
    "skill": "COMP_01",
    "difficulty": 1,
    "question": "Where is the boy’s phone?",
    "image": "../pdp-assets/aef09e4f69a3046a2617e6e95438a6b9.jpg",
    "imageAlt": "Tres dibujos con las letras A, B y C: A, in his school bag; B, on the kitchen table; C, in his jacket pocket.",
    "options": [
      "A",
      "B",
      "C"
    ],
    "correct": 2,
    "vozEntrada": "Mum, have you seen my phone? It isn’t in my school bag. Did you leave it on the kitchen table again? I looked there. Oh, wait! Here it is, in my jacket pocket.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Mum, have you seen my phone? It isn’t in my school bag.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Did you leave it on the kitchen table again?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "I looked there. Oh, wait! Here it is, in my jacket pocket.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/5d5d1502220627d9cf8f857b702c813b.mp3",
    "audioGrupo": "T1-L1-3",
    "feedback": "Sí: lo encuentra en el bolsillo de la campera.",
    "feedbackWrong": "Escuchá hasta el final: ¿qué dice el chico después de «Here it is»?",
    "hint": "Dos lugares se descartan.",
    "feedbackExtra": "En la mochila no está («It isn’t in my school bag») y en la mesa ya miró («I looked there»). Al final: «Here it is, in my jacket pocket».",
    "scaffold": {
      "altExplanation": "Cuando alguien busca algo, casi todos los lugares que nombra son lugares donde NO está. Tachá cada lugar cuando escuches «it isn’t» o «I looked there»."
    },
    "consignaEs": "¿Dónde está el teléfono del chico?"
  },
  {
    "id": "A2K-T1-L1-4",
    "status": "draft",
    "nivelId": "m0-l1",
    "stage": "Test 1 · Listening · Part 1",
    "concept": "Listening · Part 1 (escucha-imagen-3op)",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "How will they get to the sports centre?",
    "image": "../pdp-assets/8bab54bd68efe76ca7f5f1acb5bc214c.jpg",
    "imageAlt": "Tres dibujos con las letras A, B y C: A, on foot; B, by bus; C, by bike.",
    "options": [
      "A",
      "B",
      "C"
    ],
    "correct": 0,
    "vozEntrada": "Shall we cycle to the sports centre? I can’t. My bike is broken. Let’s take the bus. The bus takes too long, and it’s sunny today. Why don’t we walk? It’s only fifteen minutes. OK, good idea.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Shall we cycle to the sports centre?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "I can’t. My bike is broken. Let’s take the bus.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "The bus takes too long, and it’s sunny today. Why don’t we walk? It’s only fifteen minutes.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "OK, good idea.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/61035833b743983aa6776c1a0ea39e8b.mp3",
    "audioGrupo": "T1-L1-4",
    "feedback": "Sí: van caminando.",
    "feedbackWrong": "Hay tres ideas. Escuchá cuál recibe un «OK, good idea».",
    "hint": "¿A qué idea le dicen que sí?",
    "feedbackExtra": "La bici del chico está rota. El colectivo tarda mucho. La chica propone caminar («Why don’t we walk?») y el chico acepta: van a pie («on foot»).",
    "scaffold": {
      "altExplanation": "Es una negociación: cada idea recibe una respuesta. Anotá idea y respuesta (no puedo, tarda mucho, dale). Y acordate: la opción correcta puede decirlo con otras palabras que el audio."
    },
    "consignaEs": "¿Cómo van a ir al centro deportivo?"
  },
  {
    "id": "A2K-T1-L1-5",
    "status": "draft",
    "nivelId": "m0-l1",
    "stage": "Test 1 · Listening · Part 1",
    "concept": "Listening · Part 1 (escucha-imagen-3op)",
    "kind": "listen",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "What did the boy buy for his sister?",
    "image": "../pdp-assets/adb59f77f78d413834d7b84c0eaaa969.jpg",
    "imageAlt": "Tres dibujos con las letras A, B y C: A, a book; B, a scarf; C, earrings.",
    "options": [
      "A",
      "B",
      "C"
    ],
    "correct": 1,
    "vozEntrada": "Did you find a present for your sister? Yes. I wanted to get her a book, but she’s got so many. Then I saw some nice earrings, but they were too expensive. So in the end I got her a scarf. It’s blue, her favourite colour.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Did you find a present for your sister?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Yes. I wanted to get her a book, but she’s got so many. Then I saw some nice earrings, but they were too expensive. So in the end I got her a scarf. It’s blue, her favourite colour.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/fc60cb1b175eaa3084ad9a38b3d0d935.mp3",
    "audioGrupo": "T1-L1-5",
    "feedback": "Sí: al final le compró una bufanda.",
    "feedbackWrong": "Escuchá qué dice después de «in the end».",
    "hint": "Dos regalos llevan un «but».",
    "feedbackExtra": "El libro no, porque la hermana ya tiene muchos. Los aros eran muy caros. «So in the end I got her a scarf»: compró la bufanda.",
    "scaffold": {
      "altExplanation": "El chico cuenta la compra en orden: lo que pensó, lo que vio y lo que hizo. «I wanted» y «I saw» no son comprar. Buscá el verbo que dice que se lo llevó."
    },
    "consignaEs": "¿Qué le compró el chico a su hermana?"
  },
  {
    "id": "A2K-L2-TIPS",
    "status": "draft",
    "nivelId": "m0-l2",
    "kind": "concept",
    "stage": "Consejos",
    "concept": "consejos Listening · Part 2",
    "feedback": "Listo. Ahora, la tarea.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Listening · Part 2",
        "regla": "Escuchás a una persona y completás cinco huecos de una hoja de notas con **una palabra, un número, una fecha o una hora**.",
        "notas": [
          "Leé las notas antes: te dicen qué tipo de dato falta en cada hueco.",
          "Los datos se escuchan en el orden de las notas.",
          "Si deletrean un nombre, escribí letra por letra."
        ],
        "idea": "Escuchás a una persona y completás cinco huecos de una hoja de notas con una palabra, un número, una fecha o una hora. Leé las notas antes: te dicen qué tipo de dato falta en cada hueco. Los datos se escuchan en el orden de las notas. Si deletrean un nombre, escribí letra por letra. Tiempo recomendado: 6 minutos."
      }
    ]
  },
  {
    "id": "A2K-T1-L2-1",
    "status": "draft",
    "nivelId": "m0-l2",
    "stage": "Test 1 · Listening · Part 2",
    "concept": "Listening · Part 2 (escucha-notas)",
    "kind": "fill",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "You will hear a teacher telling her class about a school trip. Write one word or a number or a date or a time for gap (1).",
    "estimulo": {
      "rotulo": "NOTES",
      "titulo": "SCHOOL TRIP TO GREENHILL FARM",
      "parrafos": [
        "Day of the trip: [[(1) ____]]\nCoach leaves at: (2) …… a.m.\nStudents must bring: a (3) ……\nCost: £ (4) ……\nTeacher on the trip: Mr (5) ……"
      ]
    },
    "answer": "Thursday",
    "acceptVariants": [
      "thurs",
      "thu"
    ],
    "vozEntrada": "Good morning, everyone. I want to tell you about our class trip to Greenhill Farm. We wanted to go on Tuesday, but the farm is closed that day, so the trip is now on Thursday. Please be at school early. The coach leaves at eight forty-five, not at nine o’clock like a normal school day. You don’t need to bring any food, because we’ll have lunch at the farm café. But you must bring a raincoat. The weather may be wet, and we’ll be outside for most of the day. The trip costs twelve pounds. That’s for the coach and your lunch. Please give me the money before Friday. Oh, and I won’t be there on the day. Mr Dalton is going with you. That’s D, A, L, T, O, N. He’s the new geography teacher.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Good morning, everyone. I want to tell you about our class trip to Greenhill Farm. We wanted to go on Tuesday, but the farm is closed that day, so the trip is now on Thursday. Please be at school early. The coach leaves at eight forty-five, not at nine o’clock like a normal school day. You don’t need to bring any food, because we’ll have lunch at the farm café. But you must bring a raincoat. The weather may be wet, and we’ll be outside for most of the day. The trip costs twelve pounds. That’s for the coach and your lunch. Please give me the money before Friday. Oh, and I won’t be there on the day. Mr Dalton is going with you. That’s D, A, L, T, O, N. He’s the new geography teacher.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_2,
    "audioGrupo": "T1-L2",
    "feedback": "Sí: el viaje pasó al jueves.",
    "feedbackWrong": "Se nombran dos días. Uno se descarta: escuchá por qué.",
    "hint": "Falta un día de la semana.",
    "feedbackExtra": "Querían ir el martes, «but the farm is closed that day, so the trip is now on Thursday».",
    "scaffold": {
      "altExplanation": "Cuando se cambia un plan, primero se dice el plan viejo y después el nuevo. En las notas va siempre el plan que quedó. Escuchá la palabra «now»."
    },
    "consignaEs": "Vas a escuchar a una profesora que le cuenta a su clase sobre una excursión. Escribí una palabra, un número, una fecha o una hora para el espacio (1)."
  },
  {
    "id": "A2K-T1-L2-2",
    "status": "draft",
    "nivelId": "m0-l2",
    "stage": "Test 1 · Listening · Part 2",
    "concept": "Listening · Part 2 (escucha-notas)",
    "kind": "fill",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "You will hear a teacher telling her class about a school trip. Write one word or a number or a date or a time for gap (2).",
    "estimulo": {
      "rotulo": "NOTES",
      "titulo": "SCHOOL TRIP TO GREENHILL FARM",
      "parrafos": [
        "Day of the trip: (1) ……\nCoach leaves at: [[(2) ____]] a.m.\nStudents must bring: a (3) ……\nCost: £ (4) ……\nTeacher on the trip: Mr (5) ……"
      ]
    },
    "answer": "8.45",
    "acceptVariants": [
      "8:45",
      "8 45",
      "845",
      "eight forty-five",
      "eight forty five",
      "quarter to nine",
      "a quarter to nine"
    ],
    "vozEntrada": "Good morning, everyone. I want to tell you about our class trip to Greenhill Farm. We wanted to go on Tuesday, but the farm is closed that day, so the trip is now on Thursday. Please be at school early. The coach leaves at eight forty-five, not at nine o’clock like a normal school day. You don’t need to bring any food, because we’ll have lunch at the farm café. But you must bring a raincoat. The weather may be wet, and we’ll be outside for most of the day. The trip costs twelve pounds. That’s for the coach and your lunch. Please give me the money before Friday. Oh, and I won’t be there on the day. Mr Dalton is going with you. That’s D, A, L, T, O, N. He’s the new geography teacher.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Good morning, everyone. I want to tell you about our class trip to Greenhill Farm. We wanted to go on Tuesday, but the farm is closed that day, so the trip is now on Thursday. Please be at school early. The coach leaves at eight forty-five, not at nine o’clock like a normal school day. You don’t need to bring any food, because we’ll have lunch at the farm café. But you must bring a raincoat. The weather may be wet, and we’ll be outside for most of the day. The trip costs twelve pounds. That’s for the coach and your lunch. Please give me the money before Friday. Oh, and I won’t be there on the day. Mr Dalton is going with you. That’s D, A, L, T, O, N. He’s the new geography teacher.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_2,
    "audioGrupo": "T1-L2",
    "feedback": "Sí: el micro sale a las 8.45.",
    "feedbackWrong": "Se dicen dos horas. ¿Cuál es la del micro y cuál la de un día normal?",
    "hint": "Falta una hora.",
    "feedbackExtra": "«The coach leaves at eight forty-five, not at nine o’clock like a normal school day»: las nueve es la hora de siempre, no la del micro.",
    "scaffold": {
      "altExplanation": "Una hora se puede decir de dos maneras: con los minutos después de la hora o con «quarter to». Escribila en números apenas la escuches, y fijate cuál viene con «not»: esa no va."
    },
    "consignaEs": "Vas a escuchar a una profesora que le cuenta a su clase sobre una excursión. Escribí una palabra, un número, una fecha o una hora para el espacio (2)."
  },
  {
    "id": "A2K-T1-L2-3",
    "status": "draft",
    "nivelId": "m0-l2",
    "stage": "Test 1 · Listening · Part 2",
    "concept": "Listening · Part 2 (escucha-notas)",
    "kind": "fill",
    "skill": "COMP_01",
    "difficulty": 3,
    "question": "You will hear a teacher telling her class about a school trip. Write one word or a number or a date or a time for gap (3).",
    "estimulo": {
      "rotulo": "NOTES",
      "titulo": "SCHOOL TRIP TO GREENHILL FARM",
      "parrafos": [
        "Day of the trip: (1) ……\nCoach leaves at: (2) …… a.m.\nStudents must bring: a [[(3) ____]]\nCost: £ (4) ……\nTeacher on the trip: Mr (5) ……"
      ]
    },
    "answer": "raincoat",
    "acceptVariants": [
      "rain coat",
      "rain-coat"
    ],
    "vozEntrada": "Good morning, everyone. I want to tell you about our class trip to Greenhill Farm. We wanted to go on Tuesday, but the farm is closed that day, so the trip is now on Thursday. Please be at school early. The coach leaves at eight forty-five, not at nine o’clock like a normal school day. You don’t need to bring any food, because we’ll have lunch at the farm café. But you must bring a raincoat. The weather may be wet, and we’ll be outside for most of the day. The trip costs twelve pounds. That’s for the coach and your lunch. Please give me the money before Friday. Oh, and I won’t be there on the day. Mr Dalton is going with you. That’s D, A, L, T, O, N. He’s the new geography teacher.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Good morning, everyone. I want to tell you about our class trip to Greenhill Farm. We wanted to go on Tuesday, but the farm is closed that day, so the trip is now on Thursday. Please be at school early. The coach leaves at eight forty-five, not at nine o’clock like a normal school day. You don’t need to bring any food, because we’ll have lunch at the farm café. But you must bring a raincoat. The weather may be wet, and we’ll be outside for most of the day. The trip costs twelve pounds. That’s for the coach and your lunch. Please give me the money before Friday. Oh, and I won’t be there on the day. Mr Dalton is going with you. That’s D, A, L, T, O, N. He’s the new geography teacher.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_2,
    "audioGrupo": "T1-L2",
    "feedback": "Sí: hay que llevar un piloto («raincoat»).",
    "feedbackWrong": "Escuchá qué dice después de «you must bring». Lo anterior es lo que NO hace falta.",
    "hint": "Falta una cosa que se lleva puesta.",
    "feedbackExtra": "Comida no hace falta («You don’t need to bring any food»). «But you must bring a raincoat», porque puede llover y van a estar afuera.",
    "scaffold": {
      "altExplanation": "La profesora nombra una cosa que no hace falta y una que sí: «don’t need» y «must» son opuestos. La palabra que falta tiene adentro otra que ya conocés, y tiene que ver con el tiempo que va a hacer."
    },
    "consignaEs": "Vas a escuchar a una profesora que le cuenta a su clase sobre una excursión. Escribí una palabra, un número, una fecha o una hora para el espacio (3)."
  },
  {
    "id": "A2K-T1-L2-4",
    "status": "draft",
    "nivelId": "m0-l2",
    "stage": "Test 1 · Listening · Part 2",
    "concept": "Listening · Part 2 (escucha-notas)",
    "kind": "fill",
    "skill": "COMP_01",
    "difficulty": 1,
    "question": "You will hear a teacher telling her class about a school trip. Write one word or a number or a date or a time for gap (4).",
    "estimulo": {
      "rotulo": "NOTES",
      "titulo": "SCHOOL TRIP TO GREENHILL FARM",
      "parrafos": [
        "Day of the trip: (1) ……\nCoach leaves at: (2) …… a.m.\nStudents must bring: a (3) ……\nCost: £ [[(4) ____]]\nTeacher on the trip: Mr (5) ……"
      ]
    },
    "answer": "12",
    "acceptVariants": [
      "twelve",
      "12.00",
      "12,00"
    ],
    "vozEntrada": "Good morning, everyone. I want to tell you about our class trip to Greenhill Farm. We wanted to go on Tuesday, but the farm is closed that day, so the trip is now on Thursday. Please be at school early. The coach leaves at eight forty-five, not at nine o’clock like a normal school day. You don’t need to bring any food, because we’ll have lunch at the farm café. But you must bring a raincoat. The weather may be wet, and we’ll be outside for most of the day. The trip costs twelve pounds. That’s for the coach and your lunch. Please give me the money before Friday. Oh, and I won’t be there on the day. Mr Dalton is going with you. That’s D, A, L, T, O, N. He’s the new geography teacher.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Good morning, everyone. I want to tell you about our class trip to Greenhill Farm. We wanted to go on Tuesday, but the farm is closed that day, so the trip is now on Thursday. Please be at school early. The coach leaves at eight forty-five, not at nine o’clock like a normal school day. You don’t need to bring any food, because we’ll have lunch at the farm café. But you must bring a raincoat. The weather may be wet, and we’ll be outside for most of the day. The trip costs twelve pounds. That’s for the coach and your lunch. Please give me the money before Friday. Oh, and I won’t be there on the day. Mr Dalton is going with you. That’s D, A, L, T, O, N. He’s the new geography teacher.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_2,
    "audioGrupo": "T1-L2",
    "feedback": "Sí: cuesta doce libras.",
    "feedbackWrong": "Escuchá el número que va con «costs» y «pounds».",
    "hint": "Falta un precio.",
    "feedbackExtra": "«The trip costs twelve pounds»: 12. Ese precio incluye el micro y el almuerzo.",
    "scaffold": {
      "altExplanation": "Un precio se dice con el número y después la moneda. Escribí solo el número, en cifras, y escuchá qué incluye ese precio para estar seguro de que es el del viaje."
    },
    "consignaEs": "Vas a escuchar a una profesora que le cuenta a su clase sobre una excursión. Escribí una palabra, un número, una fecha o una hora para el espacio (4)."
  },
  {
    "id": "A2K-T1-L2-5",
    "status": "draft",
    "nivelId": "m0-l2",
    "stage": "Test 1 · Listening · Part 2",
    "concept": "Listening · Part 2 (escucha-notas)",
    "kind": "fill",
    "skill": "COMP_01",
    "difficulty": 3,
    "question": "You will hear a teacher telling her class about a school trip. Write one word or a number or a date or a time for gap (5).",
    "estimulo": {
      "rotulo": "NOTES",
      "titulo": "SCHOOL TRIP TO GREENHILL FARM",
      "parrafos": [
        "Day of the trip: (1) ……\nCoach leaves at: (2) …… a.m.\nStudents must bring: a (3) ……\nCost: £ (4) ……\nTeacher on the trip: Mr [[(5) ____]]"
      ]
    },
    "answer": "Dalton",
    "acceptVariants": [],
    "vozEntrada": "Good morning, everyone. I want to tell you about our class trip to Greenhill Farm. We wanted to go on Tuesday, but the farm is closed that day, so the trip is now on Thursday. Please be at school early. The coach leaves at eight forty-five, not at nine o’clock like a normal school day. You don’t need to bring any food, because we’ll have lunch at the farm café. But you must bring a raincoat. The weather may be wet, and we’ll be outside for most of the day. The trip costs twelve pounds. That’s for the coach and your lunch. Please give me the money before Friday. Oh, and I won’t be there on the day. Mr Dalton is going with you. That’s D, A, L, T, O, N. He’s the new geography teacher.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Good morning, everyone. I want to tell you about our class trip to Greenhill Farm. We wanted to go on Tuesday, but the farm is closed that day, so the trip is now on Thursday. Please be at school early. The coach leaves at eight forty-five, not at nine o’clock like a normal school day. You don’t need to bring any food, because we’ll have lunch at the farm café. But you must bring a raincoat. The weather may be wet, and we’ll be outside for most of the day. The trip costs twelve pounds. That’s for the coach and your lunch. Please give me the money before Friday. Oh, and I won’t be there on the day. Mr Dalton is going with you. That’s D, A, L, T, O, N. He’s the new geography teacher.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_2,
    "audioGrupo": "T1-L2",
    "feedback": "Sí: D-A-L-T-O-N.",
    "feedbackWrong": "El apellido se deletrea. Escribí cada letra a medida que la escuchás.",
    "hint": "Falta un apellido de seis letras.",
    "feedbackExtra": "La profesora deletrea el apellido: D, A, L, T, O, N. En esta parte, un nombre deletreado tiene que quedar con todas sus letras.",
    "scaffold": {
      "altExplanation": "Al deletrear, las letras que más se confunden son A, E e I: en inglés la A suena «ei», la E suena «i» y la I suena «ai». Escribí letra por letra, sin adivinar el apellido."
    },
    "consignaEs": "Vas a escuchar a una profesora que le cuenta a su clase sobre una excursión. Escribí una palabra, un número, una fecha o una hora para el espacio (5)."
  },
  {
    "id": "A2K-L3-TIPS",
    "status": "draft",
    "nivelId": "m0-l3",
    "kind": "concept",
    "stage": "Consejos",
    "concept": "consejos Listening · Part 3",
    "feedback": "Listo. Ahora, la tarea.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Listening · Part 3",
        "regla": "Escuchás una conversación entre dos personas y contestás cinco preguntas.",
        "notas": [
          "Leé las cinco preguntas antes de escuchar.",
          "Las respuestas vienen en orden y pueden salir de cualquiera de los dos.",
          "Atención a lo que se dice después de «but», «actually» y «well»: suele cambiar la respuesta."
        ],
        "idea": "Escuchás una conversación entre dos personas y contestás cinco preguntas. Leé las cinco preguntas antes de escuchar. Las respuestas vienen en orden y pueden salir de cualquiera de los dos. Atención a lo que se dice después de «but», «actually» y «well»: suele cambiar la respuesta. Tiempo recomendado: 6 minutos."
      }
    ]
  },
  {
    "id": "A2K-T1-L3-1",
    "status": "draft",
    "nivelId": "m0-l3",
    "stage": "Test 1 · Listening · Part 3",
    "concept": "Listening · Part 3 (escucha-conversacion-3op)",
    "kind": "listen",
    "skill": "COMP_01",
    "difficulty": 1,
    "question": "You will hear Ruby talking to her friend Oscar about a climbing club. Who did Ruby go to the climbing club with?",
    "options": [
      "her brother",
      "her cousin",
      "her friend Oscar"
    ],
    "correct": 1,
    "vozEntrada": "Hi Ruby. Did you go to the new climbing club yesterday? Yes, I did. It was brilliant! I went with my cousin. My brother wanted to come too, but he had a football match. Where is it? Near the swimming pool? No, it’s in the old factory behind the station. It takes me about twenty minutes by bus. Is it expensive? Well, it’s usually eight pounds for an hour, but students pay five. And the first visit is free! That’s not bad. Do you need special clothes? Not really. I wore a T-shirt and shorts. I had to wear special shoes, but I borrowed some there, so I didn’t need to buy any. Was it difficult? The climbing wasn’t too hard, actually. My arms were tired afterwards, but that was OK. The thing I really didn’t like was looking down! I’d like to try it. Are you going again? Yes, next Saturday morning. Why don’t you come with me? OK, I will!",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Hi Ruby. Did you go to the new climbing club yesterday?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, I did. It was brilliant! I went with my cousin. My brother wanted to come too, but he had a football match.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Where is it? Near the swimming pool?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No, it’s in the old factory behind the station. It takes me about twenty minutes by bus.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Is it expensive?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Well, it’s usually eight pounds for an hour, but students pay five. And the first visit is free!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "That’s not bad. Do you need special clothes?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Not really. I wore a T-shirt and shorts. I had to wear special shoes, but I borrowed some there, so I didn’t need to buy any.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Was it difficult?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "The climbing wasn’t too hard, actually. My arms were tired afterwards, but that was OK. The thing I really didn’t like was looking down!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "I’d like to try it. Are you going again?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, next Saturday morning. Why don’t you come with me?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "OK, I will!",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_3,
    "audioGrupo": "T1-L3",
    "feedback": "Sí: fue con su prima (o primo).",
    "feedbackWrong": "Ruby nombra a dos personas de su familia. Escuchá cuál no pudo ir.",
    "hint": "Uno «wanted to come, but…».",
    "feedbackExtra": "Ruby dice «I went with my cousin». El hermano quería ir, pero tenía un partido de fútbol. Oscar todavía no fue: por eso pregunta.",
    "scaffold": {
      "altExplanation": "La pregunta es con quién FUE, no quién quería ir. «Wanted to come» cuenta un deseo; «went with» cuenta lo que pasó. Y la persona con la que Ruby habla ahora todavía no conoce el club."
    },
    "consignaEs": "Vas a escuchar a Ruby hablando con su amigo Oscar sobre un club de escalada. ¿Con quién fue Ruby al club de escalada?"
  },
  {
    "id": "A2K-T1-L3-2",
    "status": "draft",
    "nivelId": "m0-l3",
    "stage": "Test 1 · Listening · Part 3",
    "concept": "Listening · Part 3 (escucha-conversacion-3op)",
    "kind": "listen",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "You will hear Ruby talking to her friend Oscar about a climbing club. Where is the climbing club?",
    "options": [
      "next to the swimming pool",
      "inside the station",
      "in an old factory"
    ],
    "correct": 2,
    "vozEntrada": "Hi Ruby. Did you go to the new climbing club yesterday? Yes, I did. It was brilliant! I went with my cousin. My brother wanted to come too, but he had a football match. Where is it? Near the swimming pool? No, it’s in the old factory behind the station. It takes me about twenty minutes by bus. Is it expensive? Well, it’s usually eight pounds for an hour, but students pay five. And the first visit is free! That’s not bad. Do you need special clothes? Not really. I wore a T-shirt and shorts. I had to wear special shoes, but I borrowed some there, so I didn’t need to buy any. Was it difficult? The climbing wasn’t too hard, actually. My arms were tired afterwards, but that was OK. The thing I really didn’t like was looking down! I’d like to try it. Are you going again? Yes, next Saturday morning. Why don’t you come with me? OK, I will!",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Hi Ruby. Did you go to the new climbing club yesterday?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, I did. It was brilliant! I went with my cousin. My brother wanted to come too, but he had a football match.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Where is it? Near the swimming pool?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No, it’s in the old factory behind the station. It takes me about twenty minutes by bus.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Is it expensive?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Well, it’s usually eight pounds for an hour, but students pay five. And the first visit is free!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "That’s not bad. Do you need special clothes?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Not really. I wore a T-shirt and shorts. I had to wear special shoes, but I borrowed some there, so I didn’t need to buy any.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Was it difficult?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "The climbing wasn’t too hard, actually. My arms were tired afterwards, but that was OK. The thing I really didn’t like was looking down!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "I’d like to try it. Are you going again?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, next Saturday morning. Why don’t you come with me?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "OK, I will!",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_3,
    "audioGrupo": "T1-L3",
    "feedback": "Sí: en la fábrica vieja, detrás de la estación.",
    "feedbackWrong": "Oscar propone un lugar y Ruby contesta «No». Escuchá lo que dice después.",
    "hint": "Atención a «behind».",
    "feedbackExtra": "No está cerca de la pileta: Ruby dice «No». Está «in the old factory behind the station»: detrás de la estación, no adentro.",
    "scaffold": {
      "altExplanation": "Algunas opciones nombran lugares que el audio usa solo como referencia. Para cada uno preguntate: ¿el club está ahí, o ese lugar sirve para explicar dónde queda? La preposición hace la diferencia."
    },
    "consignaEs": "Vas a escuchar a Ruby hablando con su amigo Oscar sobre un club de escalada. ¿Dónde queda el club de escalada?"
  },
  {
    "id": "A2K-T1-L3-3",
    "status": "draft",
    "nivelId": "m0-l3",
    "stage": "Test 1 · Listening · Part 3",
    "concept": "Listening · Part 3 (escucha-conversacion-3op)",
    "kind": "listen",
    "skill": "COMP_01",
    "difficulty": 3,
    "question": "You will hear Ruby talking to her friend Oscar about a climbing club. How much do students usually pay for an hour?",
    "options": [
      "five pounds",
      "eight pounds",
      "nothing"
    ],
    "correct": 0,
    "vozEntrada": "Hi Ruby. Did you go to the new climbing club yesterday? Yes, I did. It was brilliant! I went with my cousin. My brother wanted to come too, but he had a football match. Where is it? Near the swimming pool? No, it’s in the old factory behind the station. It takes me about twenty minutes by bus. Is it expensive? Well, it’s usually eight pounds for an hour, but students pay five. And the first visit is free! That’s not bad. Do you need special clothes? Not really. I wore a T-shirt and shorts. I had to wear special shoes, but I borrowed some there, so I didn’t need to buy any. Was it difficult? The climbing wasn’t too hard, actually. My arms were tired afterwards, but that was OK. The thing I really didn’t like was looking down! I’d like to try it. Are you going again? Yes, next Saturday morning. Why don’t you come with me? OK, I will!",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Hi Ruby. Did you go to the new climbing club yesterday?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, I did. It was brilliant! I went with my cousin. My brother wanted to come too, but he had a football match.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Where is it? Near the swimming pool?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No, it’s in the old factory behind the station. It takes me about twenty minutes by bus.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Is it expensive?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Well, it’s usually eight pounds for an hour, but students pay five. And the first visit is free!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "That’s not bad. Do you need special clothes?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Not really. I wore a T-shirt and shorts. I had to wear special shoes, but I borrowed some there, so I didn’t need to buy any.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Was it difficult?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "The climbing wasn’t too hard, actually. My arms were tired afterwards, but that was OK. The thing I really didn’t like was looking down!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "I’d like to try it. Are you going again?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, next Saturday morning. Why don’t you come with me?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "OK, I will!",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_3,
    "audioGrupo": "T1-L3",
    "feedback": "Sí: los estudiantes pagan cinco libras.",
    "feedbackWrong": "Se dicen tres precios. La pregunta es por los estudiantes y por lo de siempre («usually»).",
    "hint": "Un precio es para todos y otro no.",
    "feedbackExtra": "Ocho libras es el precio normal; «students pay five». Gratis es solo la primera visita, no lo de siempre.",
    "scaffold": {
      "altExplanation": "La pregunta tiene dos filtros: quién paga (un estudiante) y cuándo (lo de siempre). Poné cada precio en su casillero: público general, estudiantes, primera vez. Uno solo pasa los dos filtros."
    },
    "consignaEs": "Vas a escuchar a Ruby hablando con su amigo Oscar sobre un club de escalada. ¿Cuánto pagan normalmente los alumnos por una hora?"
  },
  {
    "id": "A2K-T1-L3-4",
    "status": "draft",
    "nivelId": "m0-l3",
    "stage": "Test 1 · Listening · Part 3",
    "concept": "Listening · Part 3 (escucha-conversacion-3op)",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "You will hear Ruby talking to her friend Oscar about a climbing club. What did Ruby borrow at the club?",
    "options": [
      "a T-shirt",
      "shorts",
      "shoes"
    ],
    "correct": 2,
    "vozEntrada": "Hi Ruby. Did you go to the new climbing club yesterday? Yes, I did. It was brilliant! I went with my cousin. My brother wanted to come too, but he had a football match. Where is it? Near the swimming pool? No, it’s in the old factory behind the station. It takes me about twenty minutes by bus. Is it expensive? Well, it’s usually eight pounds for an hour, but students pay five. And the first visit is free! That’s not bad. Do you need special clothes? Not really. I wore a T-shirt and shorts. I had to wear special shoes, but I borrowed some there, so I didn’t need to buy any. Was it difficult? The climbing wasn’t too hard, actually. My arms were tired afterwards, but that was OK. The thing I really didn’t like was looking down! I’d like to try it. Are you going again? Yes, next Saturday morning. Why don’t you come with me? OK, I will!",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Hi Ruby. Did you go to the new climbing club yesterday?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, I did. It was brilliant! I went with my cousin. My brother wanted to come too, but he had a football match.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Where is it? Near the swimming pool?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No, it’s in the old factory behind the station. It takes me about twenty minutes by bus.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Is it expensive?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Well, it’s usually eight pounds for an hour, but students pay five. And the first visit is free!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "That’s not bad. Do you need special clothes?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Not really. I wore a T-shirt and shorts. I had to wear special shoes, but I borrowed some there, so I didn’t need to buy any.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Was it difficult?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "The climbing wasn’t too hard, actually. My arms were tired afterwards, but that was OK. The thing I really didn’t like was looking down!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "I’d like to try it. Are you going again?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, next Saturday morning. Why don’t you come with me?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "OK, I will!",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_3,
    "audioGrupo": "T1-L3",
    "feedback": "Sí: el calzado especial se pide prestado ahí.",
    "feedbackWrong": "Separá la ropa que Ruby llevó de su casa de lo que consiguió en el club.",
    "hint": "Una prenda no la trajo de su casa.",
    "feedbackExtra": "La remera y el short eran de ella («I wore a T-shirt and shorts»). El calzado especial lo pidió prestado ahí: «I borrowed some there».",
    "scaffold": {
      "altExplanation": "«Wear» es llevar puesto, «borrow» es pedir prestado y «buy» es comprar. Ruby usa los tres verbos. Anotá qué va con cada uno y contestá solo por el verbo de la pregunta."
    },
    "consignaEs": "Vas a escuchar a Ruby hablando con su amigo Oscar sobre un club de escalada. ¿Qué pidió prestado Ruby en el club?"
  },
  {
    "id": "A2K-T1-L3-5",
    "status": "draft",
    "nivelId": "m0-l3",
    "stage": "Test 1 · Listening · Part 3",
    "concept": "Listening · Part 3 (escucha-conversacion-3op)",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "You will hear Ruby talking to her friend Oscar about a climbing club. What did Ruby like least?",
    "options": [
      "the difficult climbing",
      "looking down",
      "her tired arms"
    ],
    "correct": 1,
    "vozEntrada": "Hi Ruby. Did you go to the new climbing club yesterday? Yes, I did. It was brilliant! I went with my cousin. My brother wanted to come too, but he had a football match. Where is it? Near the swimming pool? No, it’s in the old factory behind the station. It takes me about twenty minutes by bus. Is it expensive? Well, it’s usually eight pounds for an hour, but students pay five. And the first visit is free! That’s not bad. Do you need special clothes? Not really. I wore a T-shirt and shorts. I had to wear special shoes, but I borrowed some there, so I didn’t need to buy any. Was it difficult? The climbing wasn’t too hard, actually. My arms were tired afterwards, but that was OK. The thing I really didn’t like was looking down! I’d like to try it. Are you going again? Yes, next Saturday morning. Why don’t you come with me? OK, I will!",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Hi Ruby. Did you go to the new climbing club yesterday?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, I did. It was brilliant! I went with my cousin. My brother wanted to come too, but he had a football match.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Where is it? Near the swimming pool?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No, it’s in the old factory behind the station. It takes me about twenty minutes by bus.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Is it expensive?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Well, it’s usually eight pounds for an hour, but students pay five. And the first visit is free!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "That’s not bad. Do you need special clothes?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Not really. I wore a T-shirt and shorts. I had to wear special shoes, but I borrowed some there, so I didn’t need to buy any.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Was it difficult?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "The climbing wasn’t too hard, actually. My arms were tired afterwards, but that was OK. The thing I really didn’t like was looking down!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "I’d like to try it. Are you going again?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, next Saturday morning. Why don’t you come with me?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "OK, I will!",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_3,
    "audioGrupo": "T1-L3",
    "feedback": "Sí: lo que no le gustó fue mirar para abajo.",
    "feedbackWrong": "Ruby habla de tres cosas. De dos dice que no fueron un problema.",
    "hint": "A una sola cosa le pone fuerza.",
    "feedbackExtra": "Trepar «wasn’t too hard» y lo de los brazos cansados «was OK». «The thing I really didn’t like was looking down».",
    "scaffold": {
      "altExplanation": "«Least» pide lo que menos le gustó, no lo más difícil. Ruby les baja el tono a dos cosas («wasn’t too…», «that was OK») y a una sola la marca con fuerza."
    },
    "consignaEs": "Vas a escuchar a Ruby hablando con su amigo Oscar sobre un club de escalada. ¿Qué fue lo que menos le gustó a Ruby?"
  },
  {
    "id": "A2K-L4-TIPS",
    "status": "draft",
    "nivelId": "m0-l4",
    "kind": "concept",
    "stage": "Consejos",
    "concept": "consejos Listening · Part 4",
    "feedback": "Listo. Ahora, la tarea.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Listening · Part 4",
        "regla": "Escuchás cinco audios cortos, cada uno con una pregunta sobre **la idea principal**.",
        "notas": [
          "Leé la frase que cuenta quién habla y la pregunta.",
          "No busques una palabra suelta: pensá de qué se trata todo el audio.",
          "Las opciones equivocadas nombran cosas que se dicen, pero no responden la pregunta."
        ],
        "idea": "Escuchás cinco audios cortos, cada uno con una pregunta sobre la idea principal. Leé la frase que cuenta quién habla y la pregunta. No busques una palabra suelta: pensá de qué se trata todo el audio. Las opciones equivocadas nombran cosas que se dicen, pero no responden la pregunta. Tiempo recomendado: 6 minutos."
      }
    ]
  },
  {
    "id": "A2K-T1-L4-1",
    "status": "draft",
    "nivelId": "m0-l4",
    "stage": "Test 1 · Listening · Part 4",
    "concept": "Listening · Part 4 (escucha-cortos-3op)",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "You will hear a girl talking to her friend. Why is she happy?",
    "options": [
      "She did well in a test.",
      "Her teacher gave her a prize.",
      "Her mum bought her a present."
    ],
    "correct": 0,
    "vozEntrada": "You won’t believe it! You know I had my maths test yesterday? I thought it was terrible, and I was so worried last night. Well, Mr Evans gave the tests back this morning, and I got the best mark in the class! My mum is going to be so pleased.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "You won’t believe it! You know I had my maths test yesterday? I thought it was terrible, and I was so worried last night. Well, Mr Evans gave the tests back this morning, and I got the best mark in the class! My mum is going to be so pleased.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/69575d89f42b492613f1c50ba6eb707e.mp3",
    "audioGrupo": "T1-L4-1",
    "feedback": "Sí: sacó la mejor nota de la clase.",
    "feedbackWrong": "Pensá de qué habla todo el audio, no en una palabra suelta.",
    "hint": "¿Qué pasó esta mañana?",
    "feedbackExtra": "Sacó la mejor nota en la prueba de matemática («the best mark in the class»). El profesor devolvió las pruebas, no dio un premio; la mamá va a estar contenta, pero no compró nada.",
    "scaffold": {
      "altExplanation": "Preguntate qué cambió entre anoche y hoy: anoche estaba preocupada y ahora está feliz. La causa es la noticia de esta mañana. Revisá si cada opción cuenta algo que de verdad se dice en el audio."
    },
    "consignaEs": "Vas a escuchar a una chica hablando con su amiga. ¿Por qué está contenta?"
  },
  {
    "id": "A2K-T1-L4-2",
    "status": "draft",
    "nivelId": "m0-l4",
    "stage": "Test 1 · Listening · Part 4",
    "concept": "Listening · Part 4 (escucha-cortos-3op)",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "You will hear a boy leaving a phone message for his grandmother. Why is he calling?",
    "options": [
      "to thank her for a present",
      "to ask her to find something",
      "to invite her to his house"
    ],
    "correct": 1,
    "vozEntrada": "Hi Grandma, it’s Jack. Thank you for the birthday money. I bought a new game with it. Mum says we’re coming to see you on Sunday. But I’m calling because I think I left my blue jumper at your house last week. Could you look for it, please? Bye!",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Hi Grandma, it’s Jack. Thank you for the birthday money. I bought a new game with it. Mum says we’re coming to see you on Sunday. But I’m calling because I think I left my blue jumper at your house last week. Could you look for it, please? Bye!",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/66b5eb9a59ea0779105c3579412339d4.mp3",
    "audioGrupo": "T1-L4-2",
    "feedback": "Sí: llama para que la abuela busque su buzo.",
    "feedbackWrong": "Jack dice varias cosas. Escuchá cuál es el motivo de la llamada.",
    "hint": "El motivo llega después de las noticias.",
    "feedbackExtra": "Jack agradece la plata, pero el motivo lo dice él mismo: «I’m calling because I think I left my blue jumper at your house. Could you look for it?». El domingo va él a la casa de la abuela, no al revés.",
    "scaffold": {
      "altExplanation": "Un mensaje puede traer un agradecimiento, una noticia y un pedido. El motivo de la llamada es lo que la otra persona tiene que HACER después de escucharlo."
    },
    "consignaEs": "Vas a escuchar a un chico que le deja un mensaje telefónico a su abuela. ¿Por qué llama?"
  },
  {
    "id": "A2K-T1-L4-3",
    "status": "draft",
    "nivelId": "m0-l4",
    "stage": "Test 1 · Listening · Part 4",
    "concept": "Listening · Part 4 (escucha-cortos-3op)",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "You will hear a teacher talking to her class. What does she want the students to do?",
    "options": [
      "read their projects",
      "open their books",
      "change where they sit"
    ],
    "correct": 2,
    "vozEntrada": "OK, everyone, listen please. Your projects about rivers were very good, and I enjoyed reading them. Now, don’t open your books yet. Before we start today’s lesson, I’d like you to move your desks into groups of four, because we’re going to work in teams today.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "OK, everyone, listen please. Your projects about rivers were very good, and I enjoyed reading them. Now, don’t open your books yet. Before we start today’s lesson, I’d like you to move your desks into groups of four, because we’re going to work in teams today.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/c88e27c6d613e4e334bc9f1acf35d32b.mp3",
    "audioGrupo": "T1-L4-3",
    "feedback": "Sí: quiere que muevan los bancos y se sienten en grupos.",
    "feedbackWrong": "Escuchá qué pide con «I’d like you to…». Lo demás ya pasó o todavía no.",
    "hint": "¿Qué tienen que hacer ahora?",
    "feedbackExtra": "Los proyectos ya los leyó ella. Los libros, «don’t open your books yet». Lo que pide es «move your desks into groups of four»: cambiar de lugar.",
    "scaffold": {
      "altExplanation": "Ordená las tres acciones en el tiempo: una ya pasó (y la hizo la profesora), una está frenada por ahora («not… yet») y una es la que pide ya. La opción correcta lo dice con otras palabras."
    },
    "consignaEs": "Vas a escuchar a una profesora hablando con su clase. ¿Qué quiere que hagan los alumnos?"
  },
  {
    "id": "A2K-T1-L4-4",
    "status": "draft",
    "nivelId": "m0-l4",
    "stage": "Test 1 · Listening · Part 4",
    "concept": "Listening · Part 4 (escucha-cortos-3op)",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "You will hear two friends talking about a film. What did the boy think of the film?",
    "options": [
      "It was too long.",
      "It wasn’t funny.",
      "The actors were bad."
    ],
    "correct": 0,
    "vozEntrada": "Did you like the film last night? Well, the actors were great, and it was really funny at the start. But it was nearly three hours! I looked at my watch about ten times. Oh. I thought it was exciting.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Did you like the film last night?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Well, the actors were great, and it was really funny at the start. But it was nearly three hours! I looked at my watch about ten times.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Oh. I thought it was exciting.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/54d83e280695803c342664ac748b8d51.mp3",
    "audioGrupo": "T1-L4-4",
    "feedback": "Sí: le pareció demasiado larga.",
    "feedbackWrong": "El chico dice cosas buenas y después un «But…». Ahí está su opinión.",
    "hint": "¿Por qué miraba el reloj?",
    "feedbackExtra": "Los actores le parecieron geniales y el principio, divertido. «But it was nearly three hours! I looked at my watch about ten times»: para él fue demasiado larga.",
    "scaffold": {
      "altExplanation": "Una opinión con «but» tiene dos mitades: lo bueno va antes y lo que de verdad piensa va después. A veces no dice el adjetivo: da un dato (un número, un gesto) y la conclusión la sacás vos."
    },
    "consignaEs": "Vas a escuchar a dos amigos hablando de una película. ¿Qué le pareció la película al chico?"
  },
  {
    "id": "A2K-T1-L4-5",
    "status": "draft",
    "nivelId": "m0-l4",
    "stage": "Test 1 · Listening · Part 4",
    "concept": "Listening · Part 4 (escucha-cortos-3op)",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "You will hear a woman talking in a shop. What does she want to do?",
    "options": [
      "buy some trainers for her son",
      "change something she bought",
      "pay for a pair of shoes"
    ],
    "correct": 1,
    "vozEntrada": "Excuse me. I bought these trainers here on Saturday for my son, but they’re too small for him. I’ve got the receipt here. Have you got them in a bigger size? If not, I’d like my money back, please.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Excuse me. I bought these trainers here on Saturday for my son, but they’re too small for him. I’ve got the receipt here. Have you got them in a bigger size? If not, I’d like my money back, please.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/9fd2ab7a0165f3a1defae97af1bd2f0d.mp3",
    "audioGrupo": "T1-L4-5",
    "feedback": "Sí: quiere cambiar las zapatillas que ya compró.",
    "feedbackWrong": "Fijate en el tiempo: ¿las zapatillas las compra ahora o las compró antes?",
    "hint": "Mirá si el verbo está en pasado.",
    "feedbackExtra": "Las zapatillas ya las compró y las pagó el sábado («I bought these trainers here on Saturday»). Le quedan chicas al hijo: quiere un talle más grande o que le devuelvan la plata.",
    "scaffold": {
      "altExplanation": "Mirá los tiempos verbales: lo que está en pasado ya ocurrió (comprar, pagar). Lo que quiere ahora viene con «Have you got…?» y «I’d like…». Pensá qué palabra resume ese pedido."
    },
    "consignaEs": "Vas a escuchar a una mujer hablando en un negocio. ¿Qué quiere hacer?"
  },
  {
    "id": "A2K-L5-TIPS",
    "status": "draft",
    "nivelId": "m0-l5",
    "kind": "concept",
    "stage": "Consejos",
    "concept": "consejos Listening · Part 5",
    "feedback": "Listo. Ahora, la tarea.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Listening · Part 5",
        "regla": "Escuchás una conversación más larga y **unís** cinco personas con una opción de una lista de ocho.",
        "notas": [
          "Leé las dos listas antes de escuchar. Sobran tres opciones.",
          "Las personas se nombran en el orden de la lista.",
          "De cada persona suelen nombrar dos cosas: una se descarta."
        ],
        "idea": "Escuchás una conversación más larga y unís cinco personas con una opción de una lista de ocho. Leé las dos listas antes de escuchar. Sobran tres opciones. Las personas se nombran en el orden de la lista. De cada persona suelen nombrar dos cosas: una se descarta. Tiempo recomendado: 6 minutos."
      }
    ]
  },
  {
    "id": "A2K-T1-L5-1",
    "status": "draft",
    "nivelId": "m0-l5",
    "stage": "Test 1 · Listening · Part 5",
    "concept": "Listening · Part 5 (escucha-emparejar)",
    "kind": "listen",
    "skill": "ASOC_01",
    "difficulty": 2,
    "question": "You will hear Emma talking to her dad about presents for a family party. Mum: which present?",
    "options": [
      "a book",
      "a bag",
      "a plant",
      "chocolates",
      "a game",
      "a scarf",
      "a picture",
      "tickets"
    ],
    "correct": 5,
    "vozEntrada": "Have you finished your shopping for the family party, Emma? Nearly, Dad. I’ve got Mum’s present. She said she wanted a new bag, but they were all too expensive, so I got her a scarf. It’s green, like her coat. She’ll love it. What about your brother? Tom’s easy. He only wants computer games, but he’s got hundreds! So I bought him a book about space. He likes anything about the moon and the stars. Good idea. And Grandma? More chocolates? No. The doctor told her not to eat sweet things, remember? I’m going to give her a plant for her kitchen window. Lovely. Have you got anything for Uncle Pete? Not yet. I wanted to paint a picture of his dog, but I haven’t got time. I think I’ll get him some chocolates. He’s the one who loves sweet things! That’s true. And your cousin Lily? Well, I was looking for a game for her. But then I saw there’s a concert in the park next month. So I bought two tickets, and we can go together. She’s a lucky girl!",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Have you finished your shopping for the family party, Emma?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Nearly, Dad. I’ve got Mum’s present. She said she wanted a new bag, but they were all too expensive, so I got her a scarf. It’s green, like her coat.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "She’ll love it. What about your brother?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Tom’s easy. He only wants computer games, but he’s got hundreds! So I bought him a book about space. He likes anything about the moon and the stars.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Good idea. And Grandma? More chocolates?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No. The doctor told her not to eat sweet things, remember? I’m going to give her a plant for her kitchen window.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Lovely. Have you got anything for Uncle Pete?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Not yet. I wanted to paint a picture of his dog, but I haven’t got time. I think I’ll get him some chocolates. He’s the one who loves sweet things!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "That’s true. And your cousin Lily?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Well, I was looking for a game for her. But then I saw there’s a concert in the park next month. So I bought two tickets, and we can go together.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "She’s a lucky girl!",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_4,
    "audioGrupo": "T1-L5",
    "feedback": "Sí: a mamá, una bufanda.",
    "feedbackWrong": "De mamá se nombran dos cosas. Una era muy cara.",
    "hint": "La primera idea era de mamá, no de Emma.",
    "feedbackExtra": "Mamá quería una cartera, «but they were all too expensive, so I got her a scarf».",
    "scaffold": {
      "altExplanation": "Lo que una persona quería no siempre es lo que recibe. Para cada persona armá dos columnas: idea descartada y regalo final. Acá el motivo del descarte es el precio."
    },
    "consignaEs": "Vas a escuchar a Emma hablando con su papá sobre regalos para una fiesta familiar. Mamá: ¿qué regalo?"
  },
  {
    "id": "A2K-T1-L5-2",
    "status": "draft",
    "nivelId": "m0-l5",
    "stage": "Test 1 · Listening · Part 5",
    "concept": "Listening · Part 5 (escucha-emparejar)",
    "kind": "listen",
    "skill": "ASOC_01",
    "difficulty": 2,
    "question": "You will hear Emma talking to her dad about presents for a family party. Tom: which present?",
    "options": [
      "a book",
      "a bag",
      "a plant",
      "chocolates",
      "a game",
      "a scarf",
      "a picture",
      "tickets"
    ],
    "correct": 0,
    "vozEntrada": "Have you finished your shopping for the family party, Emma? Nearly, Dad. I’ve got Mum’s present. She said she wanted a new bag, but they were all too expensive, so I got her a scarf. It’s green, like her coat. She’ll love it. What about your brother? Tom’s easy. He only wants computer games, but he’s got hundreds! So I bought him a book about space. He likes anything about the moon and the stars. Good idea. And Grandma? More chocolates? No. The doctor told her not to eat sweet things, remember? I’m going to give her a plant for her kitchen window. Lovely. Have you got anything for Uncle Pete? Not yet. I wanted to paint a picture of his dog, but I haven’t got time. I think I’ll get him some chocolates. He’s the one who loves sweet things! That’s true. And your cousin Lily? Well, I was looking for a game for her. But then I saw there’s a concert in the park next month. So I bought two tickets, and we can go together. She’s a lucky girl!",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Have you finished your shopping for the family party, Emma?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Nearly, Dad. I’ve got Mum’s present. She said she wanted a new bag, but they were all too expensive, so I got her a scarf. It’s green, like her coat.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "She’ll love it. What about your brother?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Tom’s easy. He only wants computer games, but he’s got hundreds! So I bought him a book about space. He likes anything about the moon and the stars.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Good idea. And Grandma? More chocolates?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No. The doctor told her not to eat sweet things, remember? I’m going to give her a plant for her kitchen window.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Lovely. Have you got anything for Uncle Pete?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Not yet. I wanted to paint a picture of his dog, but I haven’t got time. I think I’ll get him some chocolates. He’s the one who loves sweet things!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "That’s true. And your cousin Lily?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Well, I was looking for a game for her. But then I saw there’s a concert in the park next month. So I bought two tickets, and we can go together.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "She’s a lucky girl!",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_4,
    "audioGrupo": "T1-L5",
    "feedback": "Sí: a Tom, un libro sobre el espacio.",
    "feedbackWrong": "Tom quiere una cosa, pero ya tiene muchas. ¿Qué le compró Emma?",
    "hint": "Lo que Tom pide no es lo que recibe.",
    "feedbackExtra": "Tom solo quiere juegos, «but he’s got hundreds». «So I bought him a book about space».",
    "scaffold": {
      "altExplanation": "Que a alguien le guste mucho una cosa puede ser el motivo para NO regalársela: ya tiene muchas. El regalo final viene después y tiene que ver con otro gusto de Tom."
    },
    "consignaEs": "Vas a escuchar a Emma hablando con su papá sobre regalos para una fiesta familiar. Tom: ¿qué regalo?"
  },
  {
    "id": "A2K-T1-L5-3",
    "status": "draft",
    "nivelId": "m0-l5",
    "stage": "Test 1 · Listening · Part 5",
    "concept": "Listening · Part 5 (escucha-emparejar)",
    "kind": "listen",
    "skill": "ASOC_01",
    "difficulty": 2,
    "question": "You will hear Emma talking to her dad about presents for a family party. Grandma: which present?",
    "options": [
      "a book",
      "a bag",
      "a plant",
      "chocolates",
      "a game",
      "a scarf",
      "a picture",
      "tickets"
    ],
    "correct": 2,
    "vozEntrada": "Have you finished your shopping for the family party, Emma? Nearly, Dad. I’ve got Mum’s present. She said she wanted a new bag, but they were all too expensive, so I got her a scarf. It’s green, like her coat. She’ll love it. What about your brother? Tom’s easy. He only wants computer games, but he’s got hundreds! So I bought him a book about space. He likes anything about the moon and the stars. Good idea. And Grandma? More chocolates? No. The doctor told her not to eat sweet things, remember? I’m going to give her a plant for her kitchen window. Lovely. Have you got anything for Uncle Pete? Not yet. I wanted to paint a picture of his dog, but I haven’t got time. I think I’ll get him some chocolates. He’s the one who loves sweet things! That’s true. And your cousin Lily? Well, I was looking for a game for her. But then I saw there’s a concert in the park next month. So I bought two tickets, and we can go together. She’s a lucky girl!",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Have you finished your shopping for the family party, Emma?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Nearly, Dad. I’ve got Mum’s present. She said she wanted a new bag, but they were all too expensive, so I got her a scarf. It’s green, like her coat.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "She’ll love it. What about your brother?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Tom’s easy. He only wants computer games, but he’s got hundreds! So I bought him a book about space. He likes anything about the moon and the stars.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Good idea. And Grandma? More chocolates?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No. The doctor told her not to eat sweet things, remember? I’m going to give her a plant for her kitchen window.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Lovely. Have you got anything for Uncle Pete?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Not yet. I wanted to paint a picture of his dog, but I haven’t got time. I think I’ll get him some chocolates. He’s the one who loves sweet things!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "That’s true. And your cousin Lily?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Well, I was looking for a game for her. But then I saw there’s a concert in the park next month. So I bought two tickets, and we can go together.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "She’s a lucky girl!",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_4,
    "audioGrupo": "T1-L5",
    "feedback": "Sí: a la abuela, una planta.",
    "feedbackWrong": "El papá propone algo y Emma dice «No». Escuchá qué va a darle.",
    "hint": "¿Qué le dijo el médico a la abuela?",
    "feedbackExtra": "Chocolates no: el médico le dijo que no coma cosas dulces. «I’m going to give her a plant for her kitchen window».",
    "scaffold": {
      "altExplanation": "Acá la idea descartada la propone el papá, no Emma. Un «No» y un motivo de salud la sacan de la lista. El regalo final lo dice Emma después."
    },
    "consignaEs": "Vas a escuchar a Emma hablando con su papá sobre regalos para una fiesta familiar. Abuela: ¿qué regalo?"
  },
  {
    "id": "A2K-T1-L5-4",
    "status": "draft",
    "nivelId": "m0-l5",
    "stage": "Test 1 · Listening · Part 5",
    "concept": "Listening · Part 5 (escucha-emparejar)",
    "kind": "listen",
    "skill": "ASOC_01",
    "difficulty": 3,
    "question": "You will hear Emma talking to her dad about presents for a family party. Uncle Pete: which present?",
    "options": [
      "a book",
      "a bag",
      "a plant",
      "chocolates",
      "a game",
      "a scarf",
      "a picture",
      "tickets"
    ],
    "correct": 3,
    "vozEntrada": "Have you finished your shopping for the family party, Emma? Nearly, Dad. I’ve got Mum’s present. She said she wanted a new bag, but they were all too expensive, so I got her a scarf. It’s green, like her coat. She’ll love it. What about your brother? Tom’s easy. He only wants computer games, but he’s got hundreds! So I bought him a book about space. He likes anything about the moon and the stars. Good idea. And Grandma? More chocolates? No. The doctor told her not to eat sweet things, remember? I’m going to give her a plant for her kitchen window. Lovely. Have you got anything for Uncle Pete? Not yet. I wanted to paint a picture of his dog, but I haven’t got time. I think I’ll get him some chocolates. He’s the one who loves sweet things! That’s true. And your cousin Lily? Well, I was looking for a game for her. But then I saw there’s a concert in the park next month. So I bought two tickets, and we can go together. She’s a lucky girl!",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Have you finished your shopping for the family party, Emma?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Nearly, Dad. I’ve got Mum’s present. She said she wanted a new bag, but they were all too expensive, so I got her a scarf. It’s green, like her coat.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "She’ll love it. What about your brother?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Tom’s easy. He only wants computer games, but he’s got hundreds! So I bought him a book about space. He likes anything about the moon and the stars.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Good idea. And Grandma? More chocolates?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No. The doctor told her not to eat sweet things, remember? I’m going to give her a plant for her kitchen window.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Lovely. Have you got anything for Uncle Pete?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Not yet. I wanted to paint a picture of his dog, but I haven’t got time. I think I’ll get him some chocolates. He’s the one who loves sweet things!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "That’s true. And your cousin Lily?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Well, I was looking for a game for her. But then I saw there’s a concert in the park next month. So I bought two tickets, and we can go together.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "She’s a lucky girl!",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_4,
    "audioGrupo": "T1-L5",
    "feedback": "Sí: al tío Pete, chocolates.",
    "feedbackWrong": "Emma tenía una idea para el tío, pero no tiene tiempo. ¿Qué decide?",
    "hint": "Emma cambia de idea al final.",
    "feedbackExtra": "Quería pintarle un cuadro de su perro, «but I haven’t got time». «I think I’ll get him some chocolates»: a él sí le gustan las cosas dulces.",
    "scaffold": {
      "altExplanation": "Ojo: una opción que se descartó para una persona puede ser la correcta para otra. No taches una opción de la lista solo porque ya la escuchaste antes."
    },
    "consignaEs": "Vas a escuchar a Emma hablando con su papá sobre regalos para una fiesta familiar. Tío Pete: ¿qué regalo?"
  },
  {
    "id": "A2K-T1-L5-5",
    "status": "draft",
    "nivelId": "m0-l5",
    "stage": "Test 1 · Listening · Part 5",
    "concept": "Listening · Part 5 (escucha-emparejar)",
    "kind": "listen",
    "skill": "ASOC_01",
    "difficulty": 3,
    "question": "You will hear Emma talking to her dad about presents for a family party. Lily: which present?",
    "options": [
      "a book",
      "a bag",
      "a plant",
      "chocolates",
      "a game",
      "a scarf",
      "a picture",
      "tickets"
    ],
    "correct": 7,
    "vozEntrada": "Have you finished your shopping for the family party, Emma? Nearly, Dad. I’ve got Mum’s present. She said she wanted a new bag, but they were all too expensive, so I got her a scarf. It’s green, like her coat. She’ll love it. What about your brother? Tom’s easy. He only wants computer games, but he’s got hundreds! So I bought him a book about space. He likes anything about the moon and the stars. Good idea. And Grandma? More chocolates? No. The doctor told her not to eat sweet things, remember? I’m going to give her a plant for her kitchen window. Lovely. Have you got anything for Uncle Pete? Not yet. I wanted to paint a picture of his dog, but I haven’t got time. I think I’ll get him some chocolates. He’s the one who loves sweet things! That’s true. And your cousin Lily? Well, I was looking for a game for her. But then I saw there’s a concert in the park next month. So I bought two tickets, and we can go together. She’s a lucky girl!",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Have you finished your shopping for the family party, Emma?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Nearly, Dad. I’ve got Mum’s present. She said she wanted a new bag, but they were all too expensive, so I got her a scarf. It’s green, like her coat.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "She’ll love it. What about your brother?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Tom’s easy. He only wants computer games, but he’s got hundreds! So I bought him a book about space. He likes anything about the moon and the stars.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Good idea. And Grandma? More chocolates?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No. The doctor told her not to eat sweet things, remember? I’m going to give her a plant for her kitchen window.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Lovely. Have you got anything for Uncle Pete?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Not yet. I wanted to paint a picture of his dog, but I haven’t got time. I think I’ll get him some chocolates. He’s the one who loves sweet things!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "That’s true. And your cousin Lily?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Well, I was looking for a game for her. But then I saw there’s a concert in the park next month. So I bought two tickets, and we can go together.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "She’s a lucky girl!",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_4,
    "audioGrupo": "T1-L5",
    "feedback": "Sí: a Lily, entradas para el recital.",
    "feedbackWrong": "Emma buscaba una cosa para Lily y después vio otra. ¿Qué compró?",
    "hint": "Lo que buscaba no es lo que compró.",
    "feedbackExtra": "Estaba buscando un juego, «but then» vio que hay un recital en el parque. «So I bought two tickets».",
    "scaffold": {
      "altExplanation": "«I was looking for» cuenta lo que buscaba, no lo que compró. «But then I saw» anuncia el cambio. Lo que compró lo dice recién al final."
    },
    "consignaEs": "Vas a escuchar a Emma hablando con su papá sobre regalos para una fiesta familiar. Lily: ¿qué regalo?"
  },
  {
    "id": "A2K-S1-TIPS",
    "status": "draft",
    "nivelId": "m0-s1",
    "kind": "concept",
    "stage": "Consejos",
    "concept": "consejos Speaking · Part 1",
    "feedback": "Listo. Ahora, la tarea.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Speaking · Part 1",
        "regla": "Un adulto te hace preguntas sobre vos y contestás **en inglés**. Dura 3 o 4 minutos.",
        "notas": [
          "No contestes con una sola palabra: agregá un motivo o un ejemplo.",
          "Si no entendés, pedí que repitan: «Can you say that again, please?».",
          "Dos veces te van a pedir que hables más largo sobre un tema."
        ],
        "idea": "Un adulto te hace preguntas sobre vos y contestás en inglés. Dura 3 o 4 minutos. No contestes con una sola palabra: agregá un motivo o un ejemplo. Si no entendés, pedí que repitan: «Can you say that again, please?». Dos veces te van a pedir que hables más largo sobre un tema. Tiempo recomendado: 4 minutos."
      }
    ]
  },
  {
    "id": "A2K-T1-S1-1",
    "status": "draft",
    "nivelId": "m0-s1",
    "stage": "Test 1 · Speaking · Part 1 · con un adulto",
    "concept": "Speaking · Part 1 (oral-entrevista)",
    "kind": "profe",
    "forma": "pasale",
    "question": "Speaking · Part 1. Un adulto te hace preguntas en inglés sobre vos. Contestá con oraciones enteras, no con una sola palabra.",
    "feedback": "Parte terminada.",
    "tarjeta": {
      "titulo": "Tu papel",
      "dato": "Hacés de examinador. Leé las preguntas en inglés, de a una, y esperá la respuesta.",
      "nota": "Dura unos 4 minutos."
    },
    "paraProfe": {
      "criterios": [
        "Que conteste con oraciones y agregue algo: un motivo, un ejemplo.",
        "Que se entienda lo que dice, aunque tenga errores.",
        "En las dos preguntas que empiezan con «Now, please tell me something about…» tiene que hablar más largo: dejalo seguir.",
        "Todavía no pongas puntaje: las cuatro escalas se puntúan al final de la Parte 2."
      ],
      "frasesSugeridas": [
        "What’s your name?",
        "How old are you?",
        "Where do you live?",
        "Now, let’s talk about your home. Who do you live with?",
        "Which room in your home do you like best? Why?",
        "What do you usually do at home in the evening?",
        "Now, please tell me something about your bedroom.",
        "Now, let’s talk about food. What do you usually have for breakfast?",
        "Who cooks in your family?",
        "Where do you have lunch on school days?",
        "Now, please tell me something about a meal you really like."
      ],
      "objetivo": "Hacés de examinador. Leé las preguntas en inglés, de a una, y esperá la respuesta. Si se traba: Repetí la pregunta una sola vez, más despacio. Si sigue sin contestar, hacé una pregunta más fácil sobre lo mismo (por ejemplo: «Do you have breakfast at home or at school?») y pasá a la siguiente. No traduzcas la pregunta al castellano ni le soples la respuesta.",
      "registra": "La app guarda solo la marca de tres niveles. El puntaje de 0 a 5 va en papel."
    }
  },
  {
    "id": "A2K-S2-TIPS",
    "status": "draft",
    "nivelId": "m0-s2",
    "kind": "concept",
    "stage": "Consejos",
    "concept": "consejos Speaking · Part 2",
    "feedback": "Listo. Ahora, la tarea.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Speaking · Part 2",
        "regla": "Hablás con otra persona sobre cinco dibujos de un mismo tema: qué te gusta, qué no y **por qué**.",
        "notas": [
          "Da tu opinión y un motivo con «because».",
          "Preguntale a la otra persona: «What about you?».",
          "Después te hacen más preguntas sobre el mismo tema."
        ],
        "idea": "Hablás con otra persona sobre cinco dibujos de un mismo tema: qué te gusta, qué no y por qué. Da tu opinión y un motivo con «because». Preguntale a la otra persona: «What about you?». Después te hacen más preguntas sobre el mismo tema. Tiempo recomendado: 6 minutos."
      }
    ]
  },
  {
    "id": "A2K-T1-S2-1",
    "status": "draft",
    "nivelId": "m0-s2",
    "stage": "Test 1 · Speaking · Part 2 · con un adulto",
    "concept": "Speaking · Part 2 (oral-colaborativa)",
    "kind": "profe",
    "forma": "pasale",
    "question": "Speaking · Part 2. En el examen hablás con otro chico o chica; en casa esa parte la hace el adulto. Miren juntos la lámina: muestra cinco lugares para ir el fin de semana. Decí cuáles te gustan, cuáles no y por qué, y hacele una pregunta.",
    "image": "../pdp-assets/91250dd619ea5c99adc3200eacde9cad.jpg",
    "imageAlt": "Lámina con cinco fotos de lugares para ir el fin de semana, sin texto.",
    "feedback": "Parte terminada.",
    "tarjeta": {
      "titulo": "Tu papel",
      "dato": "Tenés dos papeles. Primero sos el COMPAÑERO: opinás corto y le devolvés la palabra. Después sos el EXAMINADOR: solo preguntás.",
      "nota": "Dura unos 6 minutos."
    },
    "paraProfe": {
      "criterios": [
        "Que dé su opinión y un motivo («because…»), no solo «yes» o «no».",
        "Que reaccione a lo que decís vos y que te haga al menos una pregunta.",
        "Se evalúa cómo usa el inglés, no si sus ideas son buenas.",
        "Al terminar, poné de 0 a 5 en Grammar and Vocabulary, Pronunciation, Interactive Communication, Global Achievement, mirando las dos partes juntas. Las bandas están en «Hoja del adulto»."
      ],
      "frasesSugeridas": [
        "EXAMINADOR: Now we are going to talk together. Here are some pictures of places to go at the weekend.",
        "EXAMINADOR: Which of these places do you like? Which ones don’t you like? Tell me why.",
        "COMPAÑERO: I like the cinema because I love films. What about you?",
        "COMPAÑERO: I don’t like shopping centres very much. Do you?",
        "EXAMINADOR: Do you think going to the cinema is expensive? Why? / Why not?",
        "EXAMINADOR: Is a museum a good place to go with friends? Why? / Why not?",
        "EXAMINADOR: Which of these places is best on a rainy day?",
        "EXAMINADOR: Now, do you prefer going out with your friends or with your family? Why?",
        "EXAMINADOR: What did you do last weekend?"
      ],
      "objetivo": "Tenés dos papeles. Primero sos el COMPAÑERO: opinás corto y le devolvés la palabra. Después sos el EXAMINADOR: solo preguntás. Si se traba: Señalale uno de los cinco lugares y preguntá: «Do you like this place?». Repetí la pregunta una vez. Si no contesta, pasá a la siguiente. No completes vos sus frases.",
      "registra": "La app guarda solo la marca de tres niveles. El puntaje de 0 a 5 va en papel."
    }
  }
];

const EXERCISES_M1 = [
  {
    "id": "A2K-A2KEY-TEST-2-RW-AVISO",
    "status": "draft",
    "nivelId": "m1-rw",
    "kind": "concept",
    "stage": "Antes de empezar",
    "concept": "aviso del simulacro (Reading and Writing)",
    "feedback": "Empezá cuando quieras.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Antes de empezar",
        "regla": "Estas preguntas son **nuevas**: no están en la práctica por partes. Podés cambiar una respuesta hasta que entregues.",
        "notas": [
          "Para volver a una pregunta, deslizá la pantalla hacia la derecha. Al final hay dos textos para escribir: se entregan junto con las respuestas.",
          "No hay pistas ni explicaciones mientras contestás. El resultado y las explicaciones aparecen al terminar la prueba.",
          "Tiempo de la prueba: 60 minutos. Cuando el tiempo se termina, la prueba se entrega sola."
        ],
        "idea": "Estas preguntas son nuevas: no están en la práctica por partes. Podés cambiar una respuesta hasta que entregues. Para volver a una pregunta, deslizá la pantalla hacia la derecha. Al final hay dos textos para escribir: se entregan junto con las respuestas. No hay pistas ni explicaciones mientras contestás. El resultado y las explicaciones aparecen al terminar la prueba. Tiempo de la prueba: 60 minutos. Cuando el tiempo se termina, la prueba se entrega sola."
      }
    ]
  },
  {
    "id": "A2K-T2-R1-1-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 1",
    "concept": "Reading · Part 1 (lectura-mensaje-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "Choose the sentence (A, B or C) that says the same as the text.",
    "estimulo": {
      "rotulo": "NOTICE IN A SCHOOL LIBRARY",
      "parrafos": [
        "SCHOOL LIBRARY\nBooks must come back within two weeks.\nLate books: 20p a day."
      ],
      "centrado": true
    },
    "options": [
      "You pay 20p each time you borrow a book.",
      "Students can only borrow two books a week.",
      "You can keep a book for fourteen days without paying."
    ],
    "correct": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Los libros vuelven «within two weeks»: catorce días sin pagar. Los 20 peniques se pagan por cada día de atraso, no cada vez que sacás un libro (A). De cuántos libros se pueden sacar no dice nada (B).",
    "consignaEs": "Elegí la oración (A, B o C) que dice lo mismo que el texto."
  },
  {
    "id": "A2K-T2-R1-2-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 1",
    "concept": "Reading · Part 1 (lectura-mensaje-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "Choose the sentence (A, B or C) that says the same as the text.",
    "estimulo": {
      "rotulo": "TEXT MESSAGE",
      "parrafos": [
        "Mum, band practice finished early. It’s raining and I haven’t got my coat. Can you pick me up from the music room instead of the bus stop? Zoe"
      ]
    },
    "options": [
      "Zoe wants her mum to collect her from a different place.",
      "Zoe is asking her mum to bring her coat to the bus stop.",
      "Zoe will be late because band practice hasn’t finished."
    ],
    "correct": 0,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Zoe pide que la busquen en la sala de música «instead of the bus stop»: en otro lugar. No pide que le lleven el abrigo (B), y el ensayo terminó antes, no tarde (C).",
    "consignaEs": "Elegí la oración (A, B o C) que dice lo mismo que el texto."
  },
  {
    "id": "A2K-T2-R1-3-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 1",
    "concept": "Reading · Part 1 (lectura-mensaje-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "Choose the sentence (A, B or C) that says the same as the text.",
    "estimulo": {
      "rotulo": "SIGN IN A PARK",
      "parrafos": [
        "CITY PARK\nBikes: please use the path by the lake only.\nNo cycling on the grass."
      ],
      "centrado": true
    },
    "options": [
      "Cyclists can’t come into the park.",
      "You can ride your bike in one part of the park.",
      "The path by the lake is closed to bikes."
    ],
    "correct": 1,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Se puede andar en bici, pero solo por el camino del lago («the path by the lake only»): una parte del parque. Las bicis sí entran (A), y ese camino es justo el que está permitido (C).",
    "consignaEs": "Elegí la oración (A, B o C) que dice lo mismo que el texto."
  },
  {
    "id": "A2K-T2-R1-4-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 1",
    "concept": "Reading · Part 1 (lectura-mensaje-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "Choose the sentence (A, B or C) that says the same as the text.",
    "estimulo": {
      "rotulo": "EMAIL",
      "parrafos": [
        "To: All students\nFrom: Mrs Patel\nThe school photo is on Wednesday morning. Please wear your full school uniform. Students with PE that day should bring their sports kit in a bag."
      ]
    },
    "options": [
      "Students with PE don’t need to be in the photo.",
      "Students should wear their sports kit for the photo.",
      "All students need their school uniform on Wednesday."
    ],
    "correct": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Todos tienen que ir con el uniforme completo el miércoles. Los que tienen educación física llevan la ropa de deporte en un bolso: no la usan en la foto (B), y también salen en ella (A).",
    "consignaEs": "Elegí la oración (A, B o C) que dice lo mismo que el texto."
  },
  {
    "id": "A2K-T2-R1-5-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 1",
    "concept": "Reading · Part 1 (lectura-mensaje-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "Choose the sentence (A, B or C) that says the same as the text.",
    "estimulo": {
      "rotulo": "NOTICE IN A CAFÉ",
      "parrafos": [
        "MILLIE’S CAFÉ\nFree hot chocolate with every breakfast\nMonday to Friday, before 9 a.m."
      ],
      "centrado": true
    },
    "options": [
      "You get a free drink if you buy breakfast early on a weekday.",
      "Breakfast is free on weekdays before nine o’clock.",
      "The café only sells hot chocolate in the morning."
    ],
    "correct": 0,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "El chocolate caliente es gratis si pedís el desayuno, de lunes a viernes y antes de las 9. El desayuno se paga (B). El cartel no dice que el café venda chocolate solo a la mañana (C).",
    "consignaEs": "Elegí la oración (A, B o C) que dice lo mismo que el texto."
  },
  {
    "id": "A2K-T2-R1-6-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 1",
    "concept": "Reading · Part 1 (lectura-mensaje-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "Choose the sentence (A, B or C) that says the same as the text.",
    "estimulo": {
      "rotulo": "NOTE ON THE KITCHEN TABLE",
      "parrafos": [
        "Jake – your football coach rang. Training on Saturday is at the park, not at school, because the school field is too wet. Bring a drink. Dad"
      ]
    },
    "options": [
      "Jake’s coach wants him to call back on Saturday.",
      "Saturday’s training is in a different place.",
      "There is no football training this Saturday."
    ],
    "correct": 1,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "El entrenamiento del sábado se hace en el parque y no en la escuela: cambia el lugar. No se suspende (C). El entrenador ya llamó; nadie le pide a Jake que llame él (A).",
    "consignaEs": "Elegí la oración (A, B o C) que dice lo mismo que el texto."
  },
  {
    "id": "A2K-T2-R2-1-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 2",
    "concept": "Reading · Part 2 (lectura-emparejar-textos)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "Who went on the day out to celebrate something?",
    "estimulo": {
      "rotulo": "READ THE THREE TEXTS",
      "titulo": "My best day out",
      "parrafos": [
        "[[Nina]]\nLast month I went to a water park with my cousins. We got up at six because it’s two hours away by car. The big slides were amazing, but we had to wait a long time for each one. At lunchtime we ate the sandwiches my aunt made, because the food there costs a lot. I forgot my sun cream, so my shoulders were red the next day! I’d love to go back, but next time on a school day, when it’s quieter.",
        "[[Carlos]]\nMy best day out was a trip to a football stadium with my dad. It was a present for my thirteenth birthday. We went by train, and it only took forty minutes. First, a guide showed us the changing rooms and told us about the history of the club. Then we watched a match. Our team lost, but I didn’t mind. I bought a scarf in the shop with my own money. My dad took lots of photos and put them on the wall in my bedroom.",
        "[[Priya]]\nIn the spring, my class went to the mountains for the day. I wasn’t excited about it, because I don’t usually enjoy walking. We travelled by coach, and I felt a bit sick on the way. But when we got to the top, the view was beautiful, and I was really pleased with myself. Our teacher brought hot soup for everyone. Now I go walking with my mum every Sunday, and we’re planning to climb a bigger mountain in August."
      ]
    },
    "options": [
      "Nina",
      "Carlos",
      "Priya"
    ],
    "correct": 1,
    "avisoParte": {
      "titulo": "Reading · Part 2",
      "texto": "Tres textos sobre personas y 7 preguntas. Para cada pregunta, elegí de qué texto es la respuesta."
    },
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Para Carlos el paseo fue un regalo por cumplir trece años («a present for my thirteenth birthday»). Nina fue con sus primos y Priya con su clase: ninguna de las dos festejaba algo.",
    "consignaEs": "¿Quién hizo la salida para celebrar algo?"
  },
  {
    "id": "A2K-T2-R2-2-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 2",
    "concept": "Reading · Part 2 (lectura-emparejar-textos)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "Who had a problem because they didn’t take something with them?",
    "estimulo": {
      "rotulo": "READ THE THREE TEXTS",
      "titulo": "My best day out",
      "parrafos": [
        "[[Nina]]\nLast month I went to a water park with my cousins. We got up at six because it’s two hours away by car. The big slides were amazing, but we had to wait a long time for each one. At lunchtime we ate the sandwiches my aunt made, because the food there costs a lot. I forgot my sun cream, so my shoulders were red the next day! I’d love to go back, but next time on a school day, when it’s quieter.",
        "[[Carlos]]\nMy best day out was a trip to a football stadium with my dad. It was a present for my thirteenth birthday. We went by train, and it only took forty minutes. First, a guide showed us the changing rooms and told us about the history of the club. Then we watched a match. Our team lost, but I didn’t mind. I bought a scarf in the shop with my own money. My dad took lots of photos and put them on the wall in my bedroom.",
        "[[Priya]]\nIn the spring, my class went to the mountains for the day. I wasn’t excited about it, because I don’t usually enjoy walking. We travelled by coach, and I felt a bit sick on the way. But when we got to the top, the view was beautiful, and I was really pleased with myself. Our teacher brought hot soup for everyone. Now I go walking with my mum every Sunday, and we’re planning to climb a bigger mountain in August."
      ]
    },
    "options": [
      "Nina",
      "Carlos",
      "Priya"
    ],
    "correct": 0,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Nina se olvidó el protector solar («I forgot my sun cream») y al día siguiente tenía los hombros rojos. Priya se sintió mal en el viaje, pero no por olvidarse algo.",
    "consignaEs": "¿Quién tuvo un problema porque no llevó algo?"
  },
  {
    "id": "A2K-T2-R2-3-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 2",
    "concept": "Reading · Part 2 (lectura-emparejar-textos)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "Who feels differently about an activity now?",
    "estimulo": {
      "rotulo": "READ THE THREE TEXTS",
      "titulo": "My best day out",
      "parrafos": [
        "[[Nina]]\nLast month I went to a water park with my cousins. We got up at six because it’s two hours away by car. The big slides were amazing, but we had to wait a long time for each one. At lunchtime we ate the sandwiches my aunt made, because the food there costs a lot. I forgot my sun cream, so my shoulders were red the next day! I’d love to go back, but next time on a school day, when it’s quieter.",
        "[[Carlos]]\nMy best day out was a trip to a football stadium with my dad. It was a present for my thirteenth birthday. We went by train, and it only took forty minutes. First, a guide showed us the changing rooms and told us about the history of the club. Then we watched a match. Our team lost, but I didn’t mind. I bought a scarf in the shop with my own money. My dad took lots of photos and put them on the wall in my bedroom.",
        "[[Priya]]\nIn the spring, my class went to the mountains for the day. I wasn’t excited about it, because I don’t usually enjoy walking. We travelled by coach, and I felt a bit sick on the way. But when we got to the top, the view was beautiful, and I was really pleased with myself. Our teacher brought hot soup for everyone. Now I go walking with my mum every Sunday, and we’re planning to climb a bigger mountain in August."
      ]
    },
    "options": [
      "Nina",
      "Carlos",
      "Priya"
    ],
    "correct": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Priya no tenía ganas porque no le gustaba caminar, y ahora sale a caminar con su mamá todos los domingos. A Carlos no le importó que su equipo perdiera, pero eso no es cambiar de opinión.",
    "consignaEs": "¿Quién cambió de opinión sobre una actividad?"
  },
  {
    "id": "A2K-T2-R2-4-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 2",
    "concept": "Reading · Part 2 (lectura-emparejar-textos)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "Who took their own food because it was cheaper?",
    "estimulo": {
      "rotulo": "READ THE THREE TEXTS",
      "titulo": "My best day out",
      "parrafos": [
        "[[Nina]]\nLast month I went to a water park with my cousins. We got up at six because it’s two hours away by car. The big slides were amazing, but we had to wait a long time for each one. At lunchtime we ate the sandwiches my aunt made, because the food there costs a lot. I forgot my sun cream, so my shoulders were red the next day! I’d love to go back, but next time on a school day, when it’s quieter.",
        "[[Carlos]]\nMy best day out was a trip to a football stadium with my dad. It was a present for my thirteenth birthday. We went by train, and it only took forty minutes. First, a guide showed us the changing rooms and told us about the history of the club. Then we watched a match. Our team lost, but I didn’t mind. I bought a scarf in the shop with my own money. My dad took lots of photos and put them on the wall in my bedroom.",
        "[[Priya]]\nIn the spring, my class went to the mountains for the day. I wasn’t excited about it, because I don’t usually enjoy walking. We travelled by coach, and I felt a bit sick on the way. But when we got to the top, the view was beautiful, and I was really pleased with myself. Our teacher brought hot soup for everyone. Now I go walking with my mum every Sunday, and we’re planning to climb a bigger mountain in August."
      ]
    },
    "options": [
      "Nina",
      "Carlos",
      "Priya"
    ],
    "correct": 0,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Nina y sus primos comieron los sándwiches de su tía «because the food there costs a lot». A Priya la sopa se la llevó la profesora. Carlos gastó plata propia, pero en una bufanda.",
    "consignaEs": "¿Quién llevó su propia comida porque le salía más barato?"
  },
  {
    "id": "A2K-T2-R2-5-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 2",
    "concept": "Reading · Part 2 (lectura-emparejar-textos)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "Who learned about the past during their day out?",
    "estimulo": {
      "rotulo": "READ THE THREE TEXTS",
      "titulo": "My best day out",
      "parrafos": [
        "[[Nina]]\nLast month I went to a water park with my cousins. We got up at six because it’s two hours away by car. The big slides were amazing, but we had to wait a long time for each one. At lunchtime we ate the sandwiches my aunt made, because the food there costs a lot. I forgot my sun cream, so my shoulders were red the next day! I’d love to go back, but next time on a school day, when it’s quieter.",
        "[[Carlos]]\nMy best day out was a trip to a football stadium with my dad. It was a present for my thirteenth birthday. We went by train, and it only took forty minutes. First, a guide showed us the changing rooms and told us about the history of the club. Then we watched a match. Our team lost, but I didn’t mind. I bought a scarf in the shop with my own money. My dad took lots of photos and put them on the wall in my bedroom.",
        "[[Priya]]\nIn the spring, my class went to the mountains for the day. I wasn’t excited about it, because I don’t usually enjoy walking. We travelled by coach, and I felt a bit sick on the way. But when we got to the top, the view was beautiful, and I was really pleased with myself. Our teacher brought hot soup for everyone. Now I go walking with my mum every Sunday, and we’re planning to climb a bigger mountain in August."
      ]
    },
    "options": [
      "Nina",
      "Carlos",
      "Priya"
    ],
    "correct": 1,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Un guía les contó la historia del club («told us about the history of the club»). En los textos de Nina y de Priya nadie habla del pasado de un lugar.",
    "consignaEs": "¿Quién aprendió sobre el pasado durante su salida?"
  },
  {
    "id": "A2K-T2-R2-6-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 2",
    "concept": "Reading · Part 2 (lectura-emparejar-textos)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "Who didn’t feel well during the journey?",
    "estimulo": {
      "rotulo": "READ THE THREE TEXTS",
      "titulo": "My best day out",
      "parrafos": [
        "[[Nina]]\nLast month I went to a water park with my cousins. We got up at six because it’s two hours away by car. The big slides were amazing, but we had to wait a long time for each one. At lunchtime we ate the sandwiches my aunt made, because the food there costs a lot. I forgot my sun cream, so my shoulders were red the next day! I’d love to go back, but next time on a school day, when it’s quieter.",
        "[[Carlos]]\nMy best day out was a trip to a football stadium with my dad. It was a present for my thirteenth birthday. We went by train, and it only took forty minutes. First, a guide showed us the changing rooms and told us about the history of the club. Then we watched a match. Our team lost, but I didn’t mind. I bought a scarf in the shop with my own money. My dad took lots of photos and put them on the wall in my bedroom.",
        "[[Priya]]\nIn the spring, my class went to the mountains for the day. I wasn’t excited about it, because I don’t usually enjoy walking. We travelled by coach, and I felt a bit sick on the way. But when we got to the top, the view was beautiful, and I was really pleased with myself. Our teacher brought hot soup for everyone. Now I go walking with my mum every Sunday, and we’re planning to climb a bigger mountain in August."
      ]
    },
    "options": [
      "Nina",
      "Carlos",
      "Priya"
    ],
    "correct": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Priya dice «I felt a bit sick on the way»: se sintió mal en el micro. Nina viajó dos horas en auto y Carlos cuarenta minutos en tren, pero ninguno dice que se sintió mal.",
    "consignaEs": "¿Quién no se sintió bien durante el viaje?"
  },
  {
    "id": "A2K-T2-R2-7-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 2",
    "concept": "Reading · Part 2 (lectura-emparejar-textos)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "Who wants to go back when there are not so many people?",
    "estimulo": {
      "rotulo": "READ THE THREE TEXTS",
      "titulo": "My best day out",
      "parrafos": [
        "[[Nina]]\nLast month I went to a water park with my cousins. We got up at six because it’s two hours away by car. The big slides were amazing, but we had to wait a long time for each one. At lunchtime we ate the sandwiches my aunt made, because the food there costs a lot. I forgot my sun cream, so my shoulders were red the next day! I’d love to go back, but next time on a school day, when it’s quieter.",
        "[[Carlos]]\nMy best day out was a trip to a football stadium with my dad. It was a present for my thirteenth birthday. We went by train, and it only took forty minutes. First, a guide showed us the changing rooms and told us about the history of the club. Then we watched a match. Our team lost, but I didn’t mind. I bought a scarf in the shop with my own money. My dad took lots of photos and put them on the wall in my bedroom.",
        "[[Priya]]\nIn the spring, my class went to the mountains for the day. I wasn’t excited about it, because I don’t usually enjoy walking. We travelled by coach, and I felt a bit sick on the way. But when we got to the top, the view was beautiful, and I was really pleased with myself. Our teacher brought hot soup for everyone. Now I go walking with my mum every Sunday, and we’re planning to climb a bigger mountain in August."
      ]
    },
    "options": [
      "Nina",
      "Carlos",
      "Priya"
    ],
    "correct": 0,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Nina quiere volver «on a school day, when it’s quieter»: con menos gente. Priya también tiene un plan (una montaña más grande en agosto), pero no habla de cuánta gente hay.",
    "consignaEs": "¿Quién quiere volver cuando haya menos gente?"
  },
  {
    "id": "A2K-T2-R3-1-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 3",
    "concept": "Reading · Part 3 (lectura-larga-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "Why did Sam repair a bike for the first time?",
    "estimulo": {
      "rotulo": "ARTICLE",
      "titulo": "The boy who repairs bikes",
      "parrafos": [
        "Fourteen-year-old Sam Ortiz spends his Saturdays in an unusual way: he repairs old bikes. It started last year, when his own bike broke and the shop wanted sixty pounds to repair it. Sam didn’t have the money, so he watched videos on the internet and did the work himself. It took him three weekends.",
        "Soon, his neighbours began to bring him their broken bikes. Sam didn’t ask them for money. Instead, he asked them to give him old bikes that nobody used. He repaired those too, in his family’s garage. His mother wasn’t happy at first, because there was no room for the car!",
        "In January, Sam had fifteen bikes that were ready to ride. He didn’t want to sell them. He took them to a centre in his town that helps families who have just arrived from other countries. ‘Some of the children there walked for an hour to get to school every day,’ Sam says. ‘Now they can cycle.’",
        "Sam’s idea has grown. Four of his friends now help him, and a local shop gives them tools for free. The work is sometimes dirty and difficult, but Sam says the hardest part is saying goodbye to the bikes. In the future, he would like to study engineering, but first he wants to teach younger children to repair their own bikes."
      ]
    },
    "options": [
      "He couldn’t pay a shop to do it.",
      "He wanted to earn some money.",
      "He was learning about it at school."
    ],
    "correct": 0,
    "avisoParte": {
      "titulo": "Reading · Part 3",
      "texto": "Un texto largo y 5 preguntas. Para cada una, elegí A, B o C."
    },
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "El negocio pedía sesenta libras y Sam no tenía esa plata, así que la arregló él. No lo hizo para ganar plata (B), y aprendió con videos de internet, no en la escuela (C).",
    "consignaEs": "¿Por qué Sam arregló una bicicleta por primera vez?"
  },
  {
    "id": "A2K-T2-R3-2-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 3",
    "concept": "Reading · Part 3 (lectura-larga-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "What did Sam ask his neighbours for?",
    "estimulo": {
      "rotulo": "ARTICLE",
      "titulo": "The boy who repairs bikes",
      "parrafos": [
        "Fourteen-year-old Sam Ortiz spends his Saturdays in an unusual way: he repairs old bikes. It started last year, when his own bike broke and the shop wanted sixty pounds to repair it. Sam didn’t have the money, so he watched videos on the internet and did the work himself. It took him three weekends.",
        "Soon, his neighbours began to bring him their broken bikes. Sam didn’t ask them for money. Instead, he asked them to give him old bikes that nobody used. He repaired those too, in his family’s garage. His mother wasn’t happy at first, because there was no room for the car!",
        "In January, Sam had fifteen bikes that were ready to ride. He didn’t want to sell them. He took them to a centre in his town that helps families who have just arrived from other countries. ‘Some of the children there walked for an hour to get to school every day,’ Sam says. ‘Now they can cycle.’",
        "Sam’s idea has grown. Four of his friends now help him, and a local shop gives them tools for free. The work is sometimes dirty and difficult, but Sam says the hardest part is saying goodbye to the bikes. In the future, he would like to study engineering, but first he wants to teach younger children to repair their own bikes."
      ]
    },
    "options": [
      "a place to work",
      "money for tools",
      "bikes they didn’t need"
    ],
    "correct": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Sam no les pidió plata (B): les pidió bicis viejas que nadie usaba. Lugar para trabajar ya tenía: el garaje de su familia (A).",
    "consignaEs": "¿Qué les pidió Sam a sus vecinos?"
  },
  {
    "id": "A2K-T2-R3-3-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 3",
    "concept": "Reading · Part 3 (lectura-larga-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "What did Sam do with the fifteen bikes?",
    "estimulo": {
      "rotulo": "ARTICLE",
      "titulo": "The boy who repairs bikes",
      "parrafos": [
        "Fourteen-year-old Sam Ortiz spends his Saturdays in an unusual way: he repairs old bikes. It started last year, when his own bike broke and the shop wanted sixty pounds to repair it. Sam didn’t have the money, so he watched videos on the internet and did the work himself. It took him three weekends.",
        "Soon, his neighbours began to bring him their broken bikes. Sam didn’t ask them for money. Instead, he asked them to give him old bikes that nobody used. He repaired those too, in his family’s garage. His mother wasn’t happy at first, because there was no room for the car!",
        "In January, Sam had fifteen bikes that were ready to ride. He didn’t want to sell them. He took them to a centre in his town that helps families who have just arrived from other countries. ‘Some of the children there walked for an hour to get to school every day,’ Sam says. ‘Now they can cycle.’",
        "Sam’s idea has grown. Four of his friends now help him, and a local shop gives them tools for free. The work is sometimes dirty and difficult, but Sam says the hardest part is saying goodbye to the bikes. In the future, he would like to study engineering, but first he wants to teach younger children to repair their own bikes."
      ]
    },
    "options": [
      "He sold them in his town.",
      "He gave them to people who needed them.",
      "He rode them to school with his friends."
    ],
    "correct": 1,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "No quiso venderlas (A): las llevó a un centro que ayuda a familias recién llegadas de otros países. Los que ahora van en bici a la escuela son esos chicos, no Sam y sus amigos (C).",
    "consignaEs": "¿Qué hizo Sam con las quince bicicletas?"
  },
  {
    "id": "A2K-T2-R3-4-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 3",
    "concept": "Reading · Part 3 (lectura-larga-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "What help does Sam have now?",
    "estimulo": {
      "rotulo": "ARTICLE",
      "titulo": "The boy who repairs bikes",
      "parrafos": [
        "Fourteen-year-old Sam Ortiz spends his Saturdays in an unusual way: he repairs old bikes. It started last year, when his own bike broke and the shop wanted sixty pounds to repair it. Sam didn’t have the money, so he watched videos on the internet and did the work himself. It took him three weekends.",
        "Soon, his neighbours began to bring him their broken bikes. Sam didn’t ask them for money. Instead, he asked them to give him old bikes that nobody used. He repaired those too, in his family’s garage. His mother wasn’t happy at first, because there was no room for the car!",
        "In January, Sam had fifteen bikes that were ready to ride. He didn’t want to sell them. He took them to a centre in his town that helps families who have just arrived from other countries. ‘Some of the children there walked for an hour to get to school every day,’ Sam says. ‘Now they can cycle.’",
        "Sam’s idea has grown. Four of his friends now help him, and a local shop gives them tools for free. The work is sometimes dirty and difficult, but Sam says the hardest part is saying goodbye to the bikes. In the future, he would like to study engineering, but first he wants to teach younger children to repair their own bikes."
      ]
    },
    "options": [
      "Some of his friends work with him.",
      "His mother repairs bikes too.",
      "A shop pays him for his work."
    ],
    "correct": 0,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Cuatro amigos lo ayudan. El negocio les da herramientas gratis, pero no le paga (C). La mamá solo aparece porque el garaje estaba lleno: no arregla bicis (B).",
    "consignaEs": "¿Qué ayuda tiene Sam ahora?"
  },
  {
    "id": "A2K-T2-R3-5-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 3",
    "concept": "Reading · Part 3 (lectura-larga-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "What does Sam find the most difficult?",
    "estimulo": {
      "rotulo": "ARTICLE",
      "titulo": "The boy who repairs bikes",
      "parrafos": [
        "Fourteen-year-old Sam Ortiz spends his Saturdays in an unusual way: he repairs old bikes. It started last year, when his own bike broke and the shop wanted sixty pounds to repair it. Sam didn’t have the money, so he watched videos on the internet and did the work himself. It took him three weekends.",
        "Soon, his neighbours began to bring him their broken bikes. Sam didn’t ask them for money. Instead, he asked them to give him old bikes that nobody used. He repaired those too, in his family’s garage. His mother wasn’t happy at first, because there was no room for the car!",
        "In January, Sam had fifteen bikes that were ready to ride. He didn’t want to sell them. He took them to a centre in his town that helps families who have just arrived from other countries. ‘Some of the children there walked for an hour to get to school every day,’ Sam says. ‘Now they can cycle.’",
        "Sam’s idea has grown. Four of his friends now help him, and a local shop gives them tools for free. The work is sometimes dirty and difficult, but Sam says the hardest part is saying goodbye to the bikes. In the future, he would like to study engineering, but first he wants to teach younger children to repair their own bikes."
      ]
    },
    "options": [
      "getting dirty",
      "teaching young children",
      "giving the bikes away"
    ],
    "correct": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "El trabajo a veces es sucio y difícil, «but the hardest part is saying goodbye to the bikes»: entregarlas. Enseñar a los más chicos es un plan para más adelante, no algo que le cueste (B).",
    "consignaEs": "¿Qué es lo que a Sam le resulta más difícil?"
  },
  {
    "id": "A2K-T2-R4-1-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 4",
    "concept": "Reading · Part 4 (cloze-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_03",
    "difficulty": 2,
    "question": "Choose the best word for gap (1).",
    "estimulo": {
      "titulo": "Chocolate",
      "parrafos": [
        "Most people love chocolate, but not many know where it comes from. It is made from the seeds of the cacao tree, which [[(1) ____]] in hot, wet countries.",
        "People in Central America first (2) …… using these seeds more than three thousand years ago. They didn’t eat chocolate. They made a drink with it, and it wasn’t sweet at (3) ……. They also used the seeds as money to pay for food and clothes.",
        "Chocolate arrived in Europe about five hundred years ago. At first, it (4) …… a lot of money, so only rich people drank it. Later, somebody had the idea of adding sugar and milk, and it became popular with everyone.",
        "Today, factories (5) …… millions of chocolate bars every day. Some doctors say that a little dark chocolate can be good for you, but don’t eat too (6) ……!"
      ]
    },
    "options": [
      "raises",
      "builds",
      "grows"
    ],
    "correct": 2,
    "avisoParte": {
      "titulo": "Reading · Part 4",
      "texto": "Un texto con 6 huecos. Para cada hueco, elegí la palabra que va: A, B o C."
    },
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "«Grow» es crecer: el árbol crece en países de mucho calor. «Raise» y «build» necesitan una cosa después (levantar algo, construir algo), y acá después viene «in hot, wet countries».",
    "consignaEs": "Elegí la mejor palabra para el espacio (1)."
  },
  {
    "id": "A2K-T2-R4-2-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 4",
    "concept": "Reading · Part 4 (cloze-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_03",
    "difficulty": 2,
    "question": "Choose the best word for gap (2).",
    "estimulo": {
      "titulo": "Chocolate",
      "parrafos": [
        "Most people love chocolate, but not many know where it comes from. It is made from the seeds of the cacao tree, which (1) …… in hot, wet countries.",
        "People in Central America first [[(2) ____]] using these seeds more than three thousand years ago. They didn’t eat chocolate. They made a drink with it, and it wasn’t sweet at (3) ……. They also used the seeds as money to pay for food and clothes.",
        "Chocolate arrived in Europe about five hundred years ago. At first, it (4) …… a lot of money, so only rich people drank it. Later, somebody had the idea of adding sugar and milk, and it became popular with everyone.",
        "Today, factories (5) …… millions of chocolate bars every day. Some doctors say that a little dark chocolate can be good for you, but don’t eat too (6) ……!"
      ]
    },
    "options": [
      "started",
      "opened",
      "became"
    ],
    "correct": 0,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "«Started using» = empezaron a usar. «Opened» es abrir una cosa y «became» es convertirse en algo: ninguno de los dos puede ir seguido de «using».",
    "consignaEs": "Elegí la mejor palabra para el espacio (2)."
  },
  {
    "id": "A2K-T2-R4-3-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 4",
    "concept": "Reading · Part 4 (cloze-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_03",
    "difficulty": 3,
    "question": "Choose the best word for gap (3).",
    "estimulo": {
      "titulo": "Chocolate",
      "parrafos": [
        "Most people love chocolate, but not many know where it comes from. It is made from the seeds of the cacao tree, which (1) …… in hot, wet countries.",
        "People in Central America first (2) …… using these seeds more than three thousand years ago. They didn’t eat chocolate. They made a drink with it, and it wasn’t sweet at [[(3) ____]]. They also used the seeds as money to pay for food and clothes.",
        "Chocolate arrived in Europe about five hundred years ago. At first, it (4) …… a lot of money, so only rich people drank it. Later, somebody had the idea of adding sugar and milk, and it became popular with everyone.",
        "Today, factories (5) …… millions of chocolate bars every day. Some doctors say that a little dark chocolate can be good for you, but don’t eat too (6) ……!"
      ]
    },
    "options": [
      "every",
      "all",
      "none"
    ],
    "correct": 1,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "«Not… at all» quiere decir «para nada»: la bebida no era nada dulce. «At every» y «at none» no existen como frase.",
    "consignaEs": "Elegí la mejor palabra para el espacio (3)."
  },
  {
    "id": "A2K-T2-R4-4-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 4",
    "concept": "Reading · Part 4 (cloze-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_03",
    "difficulty": 3,
    "question": "Choose the best word for gap (4).",
    "estimulo": {
      "titulo": "Chocolate",
      "parrafos": [
        "Most people love chocolate, but not many know where it comes from. It is made from the seeds of the cacao tree, which (1) …… in hot, wet countries.",
        "People in Central America first (2) …… using these seeds more than three thousand years ago. They didn’t eat chocolate. They made a drink with it, and it wasn’t sweet at (3) ……. They also used the seeds as money to pay for food and clothes.",
        "Chocolate arrived in Europe about five hundred years ago. At first, it [[(4) ____]] a lot of money, so only rich people drank it. Later, somebody had the idea of adding sugar and milk, and it became popular with everyone.",
        "Today, factories (5) …… millions of chocolate bars every day. Some doctors say that a little dark chocolate can be good for you, but don’t eat too (6) ……!"
      ]
    },
    "options": [
      "cost",
      "paid",
      "spent"
    ],
    "correct": 0,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Una cosa «costs» plata: «it cost a lot of money». «Paid» y «spent» se usan con la persona que pone la plata, no con la cosa que se compra.",
    "consignaEs": "Elegí la mejor palabra para el espacio (4)."
  },
  {
    "id": "A2K-T2-R4-5-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 4",
    "concept": "Reading · Part 4 (cloze-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_03",
    "difficulty": 2,
    "question": "Choose the best word for gap (5).",
    "estimulo": {
      "titulo": "Chocolate",
      "parrafos": [
        "Most people love chocolate, but not many know where it comes from. It is made from the seeds of the cacao tree, which (1) …… in hot, wet countries.",
        "People in Central America first (2) …… using these seeds more than three thousand years ago. They didn’t eat chocolate. They made a drink with it, and it wasn’t sweet at (3) ……. They also used the seeds as money to pay for food and clothes.",
        "Chocolate arrived in Europe about five hundred years ago. At first, it (4) …… a lot of money, so only rich people drank it. Later, somebody had the idea of adding sugar and milk, and it became popular with everyone.",
        "Today, factories [[(5) ____]] millions of chocolate bars every day. Some doctors say that a little dark chocolate can be good for you, but don’t eat too (6) ……!"
      ]
    },
    "options": [
      "do",
      "work",
      "make"
    ],
    "correct": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Las fábricas hacen, fabrican: «make». «Do» no se usa para fabricar cosas, y «work» no lleva una cosa después («work chocolate bars» no se dice).",
    "consignaEs": "Elegí la mejor palabra para el espacio (5)."
  },
  {
    "id": "A2K-T2-R4-6-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 4",
    "concept": "Reading · Part 4 (cloze-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_03",
    "difficulty": 2,
    "question": "Choose the best word for gap (6).",
    "estimulo": {
      "titulo": "Chocolate",
      "parrafos": [
        "Most people love chocolate, but not many know where it comes from. It is made from the seeds of the cacao tree, which (1) …… in hot, wet countries.",
        "People in Central America first (2) …… using these seeds more than three thousand years ago. They didn’t eat chocolate. They made a drink with it, and it wasn’t sweet at (3) ……. They also used the seeds as money to pay for food and clothes.",
        "Chocolate arrived in Europe about five hundred years ago. At first, it (4) …… a lot of money, so only rich people drank it. Later, somebody had the idea of adding sugar and milk, and it became popular with everyone.",
        "Today, factories (5) …… millions of chocolate bars every day. Some doctors say that a little dark chocolate can be good for you, but don’t eat too [[(6) ____]]!"
      ]
    },
    "options": [
      "many",
      "much",
      "more"
    ],
    "correct": 1,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "«Chocolate» no se cuenta, así que va «too much». «Too many» es para cosas que se cuentan (too many sweets) y «too more» no existe.",
    "consignaEs": "Elegí la mejor palabra para el espacio (6)."
  },
  {
    "id": "A2K-T2-R5-1-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 5",
    "concept": "Reading · Part 5 (cloze-abierto)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "PROD_01",
    "difficulty": 2,
    "question": "Write ONE word for gap (1).",
    "estimulo": {
      "rotulo": "EMAIL",
      "parrafos": [
        "From: Leo\nTo: Max",
        "Hi Max,\nHow are you? I’m writing to tell you about my new school. I started there two weeks [[(1) ____]], and I really like it.\nIt’s much bigger (2) …… my old school, and there (3) …… more than a thousand students! My classroom is on the top floor, so I have to go up a lot (4) …… stairs every morning.\nI’ve already made two friends. Their names are Ravi and Ben, and I sit next to (5) …… in most lessons. We all love basketball, and we play together (6) …… Tuesdays and Fridays.\nWrite soon and tell me your news!\nLeo"
      ]
    },
    "answer": "ago",
    "acceptVariants": [],
    "avisoParte": {
      "titulo": "Reading · Part 5",
      "texto": "Un texto con 6 huecos. Escribí una sola palabra en cada uno."
    },
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Para decir cuánto hace que pasó algo, «ago» va después del tiempo: «two weeks ago». «Before» y «last» no se usan así.",
    "consignaEs": "Escribí UNA palabra para el espacio (1)."
  },
  {
    "id": "A2K-T2-R5-2-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 5",
    "concept": "Reading · Part 5 (cloze-abierto)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "PROD_01",
    "difficulty": 1,
    "question": "Write ONE word for gap (2).",
    "estimulo": {
      "rotulo": "EMAIL",
      "parrafos": [
        "From: Leo\nTo: Max",
        "Hi Max,\nHow are you? I’m writing to tell you about my new school. I started there two weeks (1) ……, and I really like it.\nIt’s much bigger [[(2) ____]] my old school, and there (3) …… more than a thousand students! My classroom is on the top floor, so I have to go up a lot (4) …… stairs every morning.\nI’ve already made two friends. Their names are Ravi and Ben, and I sit next to (5) …… in most lessons. We all love basketball, and we play together (6) …… Tuesdays and Fridays.\nWrite soon and tell me your news!\nLeo"
      ]
    },
    "answer": "than",
    "acceptVariants": [],
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Después de un comparativo («bigger») va «than»: «bigger than my old school». «That» y «of» no sirven para comparar.",
    "consignaEs": "Escribí UNA palabra para el espacio (2)."
  },
  {
    "id": "A2K-T2-R5-3-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 5",
    "concept": "Reading · Part 5 (cloze-abierto)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "PROD_01",
    "difficulty": 2,
    "question": "Write ONE word for gap (3).",
    "estimulo": {
      "rotulo": "EMAIL",
      "parrafos": [
        "From: Leo\nTo: Max",
        "Hi Max,\nHow are you? I’m writing to tell you about my new school. I started there two weeks (1) ……, and I really like it.\nIt’s much bigger (2) …… my old school, and there [[(3) ____]] more than a thousand students! My classroom is on the top floor, so I have to go up a lot (4) …… stairs every morning.\nI’ve already made two friends. Their names are Ravi and Ben, and I sit next to (5) …… in most lessons. We all love basketball, and we play together (6) …… Tuesdays and Fridays.\nWrite soon and tell me your news!\nLeo"
      ]
    },
    "answer": "are",
    "acceptVariants": [],
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "«There are» va con plural: «more than a thousand students». «There is» sería para una sola cosa.",
    "consignaEs": "Escribí UNA palabra para el espacio (3)."
  },
  {
    "id": "A2K-T2-R5-4-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 5",
    "concept": "Reading · Part 5 (cloze-abierto)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "PROD_01",
    "difficulty": 2,
    "question": "Write ONE word for gap (4).",
    "estimulo": {
      "rotulo": "EMAIL",
      "parrafos": [
        "From: Leo\nTo: Max",
        "Hi Max,\nHow are you? I’m writing to tell you about my new school. I started there two weeks (1) ……, and I really like it.\nIt’s much bigger (2) …… my old school, and there (3) …… more than a thousand students! My classroom is on the top floor, so I have to go up a lot [[(4) ____]] stairs every morning.\nI’ve already made two friends. Their names are Ravi and Ben, and I sit next to (5) …… in most lessons. We all love basketball, and we play together (6) …… Tuesdays and Fridays.\nWrite soon and tell me your news!\nLeo"
      ]
    },
    "answer": "of",
    "acceptVariants": [],
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "«A lot of» + una cosa: «a lot of stairs». Sin «of» la frase queda cortada.",
    "consignaEs": "Escribí UNA palabra para el espacio (4)."
  },
  {
    "id": "A2K-T2-R5-5-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 5",
    "concept": "Reading · Part 5 (cloze-abierto)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "PROD_01",
    "difficulty": 3,
    "question": "Write ONE word for gap (5).",
    "estimulo": {
      "rotulo": "EMAIL",
      "parrafos": [
        "From: Leo\nTo: Max",
        "Hi Max,\nHow are you? I’m writing to tell you about my new school. I started there two weeks (1) ……, and I really like it.\nIt’s much bigger (2) …… my old school, and there (3) …… more than a thousand students! My classroom is on the top floor, so I have to go up a lot (4) …… stairs every morning.\nI’ve already made two friends. Their names are Ravi and Ben, and I sit next to [[(5) ____]] in most lessons. We all love basketball, and we play together (6) …… Tuesdays and Fridays.\nWrite soon and tell me your news!\nLeo"
      ]
    },
    "answer": "them",
    "acceptVariants": [],
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Ravi y Ben son dos: «next to them». Después de «next to» no va «they», va «them».",
    "consignaEs": "Escribí UNA palabra para el espacio (5)."
  },
  {
    "id": "A2K-T2-R5-6-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Reading · Part 5",
    "concept": "Reading · Part 5 (cloze-abierto)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "PROD_01",
    "difficulty": 2,
    "question": "Write ONE word for gap (6).",
    "estimulo": {
      "rotulo": "EMAIL",
      "parrafos": [
        "From: Leo\nTo: Max",
        "Hi Max,\nHow are you? I’m writing to tell you about my new school. I started there two weeks (1) ……, and I really like it.\nIt’s much bigger (2) …… my old school, and there (3) …… more than a thousand students! My classroom is on the top floor, so I have to go up a lot (4) …… stairs every morning.\nI’ve already made two friends. Their names are Ravi and Ben, and I sit next to (5) …… in most lessons. We all love basketball, and we play together [[(6) ____]] Tuesdays and Fridays.\nWrite soon and tell me your news!\nLeo"
      ]
    },
    "answer": "on",
    "acceptVariants": [],
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Antes de un día de la semana va «on»: «on Tuesdays and Fridays». «In» es para meses o años y «at» para horas.",
    "consignaEs": "Escribí UNA palabra para el espacio (6)."
  },
  {
    "id": "A2K-T2-W6-1-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Writing · Part 6",
    "concept": "Writing · Part 6 (escritura-mensaje-guiado)",
    "kind": "free",
    "skill": "PROD_02",
    "difficulty": 4,
    "question": "Your school is having a sports day next Friday. Write an email to your English friend Jo. In your email: invite Jo to come and watch; say which sport you are going to do; tell Jo what time it starts. Write 25 words or more.",
    "placeholder": "Hi Jo, …",
    "feedback": "Texto guardado. Podés cambiarlo hasta entregar.",
    "avisoParte": {
      "titulo": "Writing · Part 6",
      "texto": "Escribí un mensaje corto, de 25 palabras o más. Respondé las tres cosas que pide la consigna."
    },
    "consignaEs": "Tu escuela tiene una jornada deportiva el viernes que viene. Escribile un correo a tu amigo inglés Jo. En tu correo: invitá a Jo a venir a mirar; decí qué deporte vas a hacer; contale a Jo a qué hora empieza. Escribí 25 palabras o más."
  },
  {
    "id": "A2K-T2-W7-1-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Writing · Part 7",
    "concept": "Writing · Part 7 (escritura-historia-imagenes)",
    "kind": "free",
    "skill": "PROD_02",
    "difficulty": 4,
    "question": "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
    "placeholder": "One day, …",
    "feedback": "Texto guardado. Podés cambiarlo hasta entregar.",
    "image": "../pdp-assets/9497497215e151f337ebb05f07beceab.jpg",
    "imageAlt": "Tres dibujos sin texto, en fila. Cuentan una historia de izquierda a derecha.",
    "avisoParte": {
      "titulo": "Writing · Part 7",
      "texto": "Mirá los tres dibujos y escribí la historia, de 35 palabras o más."
    },
    "consignaEs": "Mirá los tres dibujos. Escribí la historia que muestran los dibujos. Escribí 35 palabras o más."
  },
  {
    "id": "A2K-T2-W6-1-ADULTO-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Writing · Part 6",
    "concept": "Writing · Part 6 (escritura-mensaje-guiado)",
    "kind": "profe",
    "forma": "pausa",
    "question": "Corrección del adulto. Mostrale tu texto: lo corrige con su hoja.",
    "feedback": "Listo. El puntaje lo anota el adulto.",
    "paraProfe": {
      "criterios": [
        "Los tres puntos de esta consigna: (1) una invitación a ir a mirar, (2) qué deporte va a hacer, (3) a qué hora empieza. Si falta uno, baja Content.",
        "Que sea un mail a un amigo: saludo, mensaje y despedida.",
        "Que tenga 25 palabras o más. Si es más corto, casi siempre falta contenido.",
        "Puntaje: de 0 a 5 en Content, Organisation, Language. Máximo 15. Las bandas están en «Hoja del adulto»."
      ],
      "modelo": "Respuesta de muestra (hay muchas otras posibles): Hi Jo, My school is having a sports day next Friday. Would you like to come and watch? I’m going to run in the 100 metres race. It starts at ten o’clock. I hope you can come! Vale",
      "objetivo": "Leé el texto en la pantalla del chico o de la chica y poné los tres puntajes en papel. En la app marcá cómo lo escribió: solo, con ayuda, o todavía no.",
      "registra": "La app guarda solo esa marca de tres niveles. No guarda el texto ni el puntaje de 0 a 5."
    }
  },
  {
    "id": "A2K-T2-W7-1-ADULTO-S",
    "status": "draft",
    "nivelId": "m1-rw",
    "stage": "Test 2 · Writing · Part 7",
    "concept": "Writing · Part 7 (escritura-historia-imagenes)",
    "kind": "profe",
    "forma": "pausa",
    "question": "Corrección del adulto. Mostrale tu texto: lo corrige con su hoja.",
    "feedback": "Listo. El puntaje lo anota el adulto.",
    "paraProfe": {
      "criterios": [
        "Que la historia cuente los tres dibujos, en orden. Si falta un dibujo, baja Content.",
        "Que las partes estén unidas (and, then, but, because, in the end) y no sean tres frases sueltas.",
        "Que tenga 35 palabras o más. Lo esperable es que la cuente en pasado (went, started, ran). Si se le escapa algún verbo en presente pero la historia se entiende, no baja Content: eso se mira en Language.",
        "Puntaje: de 0 a 5 en Content, Organisation, Language. Máximo 15. Las bandas están en «Hoja del adulto»."
      ],
      "modelo": "Respuesta de muestra (hay muchas otras posibles): Last Sunday, Lucy and her mum went to the park for a picnic. It was sunny when they left home. But when they sat down, it started to rain, so they ran home. In the end, they had their picnic on the living room floor. It was fun!",
      "objetivo": "Leé el texto en la pantalla del chico o de la chica y poné los tres puntajes en papel. En la app marcá cómo lo escribió: solo, con ayuda, o todavía no.",
      "registra": "La app guarda solo esa marca de tres niveles. No guarda el texto ni el puntaje de 0 a 5."
    }
  },
  {
    "id": "A2K-A2KEY-TEST-2-L-AVISO",
    "status": "draft",
    "nivelId": "m1-l",
    "kind": "concept",
    "stage": "Antes de empezar",
    "concept": "aviso del simulacro (Listening)",
    "feedback": "Empezá cuando quieras.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Antes de empezar",
        "regla": "Estas preguntas son **nuevas**: no están en la práctica por partes. Podés cambiar una respuesta hasta que entregues.",
        "notas": [
          "Para volver a una pregunta, deslizá la pantalla hacia la derecha.",
          "No hay pistas ni explicaciones mientras contestás. El resultado y las explicaciones aparecen al terminar la prueba.",
          "Tiempo de la prueba: 30 minutos. Cuando el tiempo se termina, la prueba se entrega sola."
        ],
        "idea": "Estas preguntas son nuevas: no están en la práctica por partes. Podés cambiar una respuesta hasta que entregues. Para volver a una pregunta, deslizá la pantalla hacia la derecha. No hay pistas ni explicaciones mientras contestás. El resultado y las explicaciones aparecen al terminar la prueba. Tiempo de la prueba: 30 minutos. Cuando el tiempo se termina, la prueba se entrega sola."
      }
    ]
  },
  {
    "id": "A2K-T2-L1-1-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 1",
    "concept": "Listening · Part 1 (escucha-imagen-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "What is the weather like now?",
    "image": "../pdp-assets/290f4a24eb35de53d442d9db4125f505.jpg",
    "imageAlt": "Tres dibujos con las letras A, B y C: A, rainy; B, windy; C, sunny.",
    "options": [
      "A",
      "B",
      "C"
    ],
    "correct": 1,
    "vozEntrada": "Mum, is it still raining? I want to go to the skate park. No, the rain stopped an hour ago. It’s quite windy, though, so take a jacket. They say it’ll be sunny this afternoon.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Mum, is it still raining? I want to go to the skate park.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No, the rain stopped an hour ago. It’s quite windy, though, so take a jacket. They say it’ll be sunny this afternoon.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/cc5e22fb70241ca81bea9cbe49d0bcda.mp3",
    "audioGrupo": "T2-L1-1",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "La lluvia paró hace una hora y el sol es para la tarde («it’ll be sunny this afternoon»). Ahora «it’s quite windy»: hay viento.",
    "consignaEs": "¿Cómo está el tiempo ahora?"
  },
  {
    "id": "A2K-T2-L1-2-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 1",
    "concept": "Listening · Part 1 (escucha-imagen-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "Which sport will the girl do this term?",
    "image": "../pdp-assets/529d67eb8612a92449dfce112d96d73c.jpg",
    "imageAlt": "Tres dibujos con las letras A, B y C: A, tennis; B, swimming; C, volleyball.",
    "options": [
      "A",
      "B",
      "C"
    ],
    "correct": 2,
    "vozEntrada": "Are you doing tennis again this term, Lucy? No, the tennis teacher has left. I wanted to try swimming, but the pool is closed until March. So I’m going to play volleyball. Hannah’s in the team too.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Are you doing tennis again this term, Lucy?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No, the tennis teacher has left. I wanted to try swimming, but the pool is closed until March. So I’m going to play volleyball. Hannah’s in the team too.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/64a9664352a8b5e451d8e73b55fc368c.mp3",
    "audioGrupo": "T2-L1-2",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Tenis no, porque el profesor se fue. Natación quería, pero la pileta está cerrada hasta marzo. «So I’m going to play volleyball».",
    "consignaEs": "¿Qué deporte va a hacer la chica este trimestre?"
  },
  {
    "id": "A2K-T2-L1-3-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 1",
    "concept": "Listening · Part 1 (escucha-imagen-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "How much does the boy pay?",
    "image": "../pdp-assets/15ae4c13c9b8b40983b689e0699986a1.jpg",
    "imageAlt": "Tres dibujos con las letras A, B y C: A, £6; B, £9; C, £3.",
    "options": [
      "A",
      "B",
      "C"
    ],
    "correct": 0,
    "vozEntrada": "Hello. How much is a ticket for the castle, please? It’s nine pounds for adults and six pounds for children under sixteen. How old are you? I’m thirteen. That’s six pounds, then. The guide book is three pounds, if you’d like one. No, thank you. Just the ticket, please.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Hello. How much is a ticket for the castle, please?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "It’s nine pounds for adults and six pounds for children under sixteen. How old are you?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "I’m thirteen.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "That’s six pounds, then. The guide book is three pounds, if you’d like one.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "No, thank you. Just the ticket, please.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/7ef4cd14929e756e6784020ab4ab34e4.mp3",
    "audioGrupo": "T2-L1-3",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Los adultos pagan nueve libras y los menores de dieciséis, seis. El chico tiene trece: «That’s six pounds, then». Las tres libras son de la guía, que no compra.",
    "consignaEs": "¿Cuánto paga el chico?"
  },
  {
    "id": "A2K-T2-L1-4-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 1",
    "concept": "Listening · Part 1 (escucha-imagen-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "What will the boy do first when he gets home?",
    "image": "../pdp-assets/5951b5f4cbd6c0e25b499ece2e7d5024.jpg",
    "imageAlt": "Tres dibujos con las letras A, B y C: A, walk the dog; B, have something to eat; C, do his homework.",
    "options": [
      "A",
      "B",
      "C"
    ],
    "correct": 1,
    "vozEntrada": "When you get home, Danny, can you take the dog for a walk? OK, but can I have something to eat first? I’m really hungry. All right. There’s some pasta in the fridge. And don’t forget your homework. I’ll do that after the walk.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "When you get home, Danny, can you take the dog for a walk?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "OK, but can I have something to eat first? I’m really hungry.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "All right. There’s some pasta in the fridge. And don’t forget your homework.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "I’ll do that after the walk.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/71461dd0be156380006338aa7ec4ffc2.mp3",
    "audioGrupo": "T2-L1-4",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "La mamá le pide que saque al perro, pero él quiere comer antes («can I have something to eat first?») y ella acepta. La tarea la hace después del paseo.",
    "consignaEs": "¿Qué va a hacer primero el chico cuando llegue a su casa?"
  },
  {
    "id": "A2K-T2-L1-5-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 1",
    "concept": "Listening · Part 1 (escucha-imagen-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "Where did the girl go on Saturday?",
    "image": "../pdp-assets/bf3eaa5e1f6d0715c406c5f50c445f71.jpg",
    "imageAlt": "Tres dibujos con las letras A, B y C: A, the shopping centre; B, the beach; C, the cinema.",
    "options": [
      "A",
      "B",
      "C"
    ],
    "correct": 0,
    "vozEntrada": "Did you go to the beach on Saturday, Ellie? No, it was too cold for that. My cousins wanted to go to the cinema, but there weren’t any good films. In the end, we went to the new shopping centre, and I bought some jeans.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Did you go to the beach on Saturday, Ellie?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No, it was too cold for that. My cousins wanted to go to the cinema, but there weren’t any good films. In the end, we went to the new shopping centre, and I bought some jeans.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/d4fb741d9f59ca51f7dae55274c041b8.mp3",
    "audioGrupo": "T2-L1-5",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Para la playa hacía frío y en el cine no había películas buenas. «In the end, we went to the new shopping centre».",
    "consignaEs": "¿Adónde fue la chica el sábado?"
  },
  {
    "id": "A2K-T2-L2-1-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 2",
    "concept": "Listening · Part 2 (escucha-notas)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "You will hear a man telling some students about a summer sports camp. Write one word or a number or a date or a time for gap (1).",
    "estimulo": {
      "rotulo": "NOTES",
      "titulo": "CITY SPORTS CAMP",
      "parrafos": [
        "Camp starts on: [[(1) ____]] July\nNew sport this year: (2) ……\nBring every day: a (3) ……\nPrice for one week: £ (4) ……\nSpeak to: Mrs (5) ……"
      ]
    },
    "answer": "8",
    "acceptVariants": [
      "8th",
      "eighth",
      "eight"
    ],
    "vozEntrada": "Hello, everyone. I’m here to tell you about this year’s City Sports Camp. Last year the camp began on the first of July, but this year schools finish later, so we start on the eighth of July. As always, you can play football and tennis. And this summer, for the first time, you can go sailing on the lake. We think it’s going to be very popular. You don’t need any special clothes, but you must bring a towel every day, because you’ll get wet! You don’t need to bring lunch. We have a café. A week at the camp costs forty-five pounds. That’s five pounds more than last year, I’m afraid. If you’d like to come, please speak to Mrs Fenwick in the school office. I’ll spell that for you: F, E, N, W, I, C, K. Thank you for listening.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Hello, everyone. I’m here to tell you about this year’s City Sports Camp. Last year the camp began on the first of July, but this year schools finish later, so we start on the eighth of July. As always, you can play football and tennis. And this summer, for the first time, you can go sailing on the lake. We think it’s going to be very popular. You don’t need any special clothes, but you must bring a towel every day, because you’ll get wet! You don’t need to bring lunch. We have a café. A week at the camp costs forty-five pounds. That’s five pounds more than last year, I’m afraid. If you’d like to come, please speak to Mrs Fenwick in the school office. I’ll spell that for you: F, E, N, W, I, C, K. Thank you for listening.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_5,
    "audioGrupo": "T2-L2",
    "avisoParte": {
      "titulo": "Listening · Part 2",
      "texto": "Una persona habla. Completá las 5 notas con una palabra o un número. El audio se escucha dos veces."
    },
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "El año pasado empezó el primero de julio, pero este año arranca «on the eighth of July»: el 8.",
    "consignaEs": "Vas a escuchar a un hombre que les cuenta a unos alumnos sobre un campamento deportivo de verano. Escribí una palabra, un número, una fecha o una hora para el espacio (1)."
  },
  {
    "id": "A2K-T2-L2-2-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 2",
    "concept": "Listening · Part 2 (escucha-notas)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "COMP_01",
    "difficulty": 3,
    "question": "You will hear a man telling some students about a summer sports camp. Write one word or a number or a date or a time for gap (2).",
    "estimulo": {
      "rotulo": "NOTES",
      "titulo": "CITY SPORTS CAMP",
      "parrafos": [
        "Camp starts on: (1) …… July\nNew sport this year: [[(2) ____]]\nBring every day: a (3) ……\nPrice for one week: £ (4) ……\nSpeak to: Mrs (5) ……"
      ]
    },
    "answer": "sailing",
    "acceptVariants": [],
    "vozEntrada": "Hello, everyone. I’m here to tell you about this year’s City Sports Camp. Last year the camp began on the first of July, but this year schools finish later, so we start on the eighth of July. As always, you can play football and tennis. And this summer, for the first time, you can go sailing on the lake. We think it’s going to be very popular. You don’t need any special clothes, but you must bring a towel every day, because you’ll get wet! You don’t need to bring lunch. We have a café. A week at the camp costs forty-five pounds. That’s five pounds more than last year, I’m afraid. If you’d like to come, please speak to Mrs Fenwick in the school office. I’ll spell that for you: F, E, N, W, I, C, K. Thank you for listening.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Hello, everyone. I’m here to tell you about this year’s City Sports Camp. Last year the camp began on the first of July, but this year schools finish later, so we start on the eighth of July. As always, you can play football and tennis. And this summer, for the first time, you can go sailing on the lake. We think it’s going to be very popular. You don’t need any special clothes, but you must bring a towel every day, because you’ll get wet! You don’t need to bring lunch. We have a café. A week at the camp costs forty-five pounds. That’s five pounds more than last year, I’m afraid. If you’d like to come, please speak to Mrs Fenwick in the school office. I’ll spell that for you: F, E, N, W, I, C, K. Thank you for listening.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_5,
    "audioGrupo": "T2-L2",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Fútbol y tenis hay siempre. Lo nuevo de este verano, «for the first time», es «sailing»: navegar a vela en el lago.",
    "consignaEs": "Vas a escuchar a un hombre que les cuenta a unos alumnos sobre un campamento deportivo de verano. Escribí una palabra, un número, una fecha o una hora para el espacio (2)."
  },
  {
    "id": "A2K-T2-L2-3-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 2",
    "concept": "Listening · Part 2 (escucha-notas)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "You will hear a man telling some students about a summer sports camp. Write one word or a number or a date or a time for gap (3).",
    "estimulo": {
      "rotulo": "NOTES",
      "titulo": "CITY SPORTS CAMP",
      "parrafos": [
        "Camp starts on: (1) …… July\nNew sport this year: (2) ……\nBring every day: a [[(3) ____]]\nPrice for one week: £ (4) ……\nSpeak to: Mrs (5) ……"
      ]
    },
    "answer": "towel",
    "acceptVariants": [],
    "vozEntrada": "Hello, everyone. I’m here to tell you about this year’s City Sports Camp. Last year the camp began on the first of July, but this year schools finish later, so we start on the eighth of July. As always, you can play football and tennis. And this summer, for the first time, you can go sailing on the lake. We think it’s going to be very popular. You don’t need any special clothes, but you must bring a towel every day, because you’ll get wet! You don’t need to bring lunch. We have a café. A week at the camp costs forty-five pounds. That’s five pounds more than last year, I’m afraid. If you’d like to come, please speak to Mrs Fenwick in the school office. I’ll spell that for you: F, E, N, W, I, C, K. Thank you for listening.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Hello, everyone. I’m here to tell you about this year’s City Sports Camp. Last year the camp began on the first of July, but this year schools finish later, so we start on the eighth of July. As always, you can play football and tennis. And this summer, for the first time, you can go sailing on the lake. We think it’s going to be very popular. You don’t need any special clothes, but you must bring a towel every day, because you’ll get wet! You don’t need to bring lunch. We have a café. A week at the camp costs forty-five pounds. That’s five pounds more than last year, I’m afraid. If you’d like to come, please speak to Mrs Fenwick in the school office. I’ll spell that for you: F, E, N, W, I, C, K. Thank you for listening.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_5,
    "audioGrupo": "T2-L2",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Ropa especial no hace falta, y almuerzo tampoco. Lo que hay que llevar todos los días es «a towel»: una toalla.",
    "consignaEs": "Vas a escuchar a un hombre que les cuenta a unos alumnos sobre un campamento deportivo de verano. Escribí una palabra, un número, una fecha o una hora para el espacio (3)."
  },
  {
    "id": "A2K-T2-L2-4-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 2",
    "concept": "Listening · Part 2 (escucha-notas)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "You will hear a man telling some students about a summer sports camp. Write one word or a number or a date or a time for gap (4).",
    "estimulo": {
      "rotulo": "NOTES",
      "titulo": "CITY SPORTS CAMP",
      "parrafos": [
        "Camp starts on: (1) …… July\nNew sport this year: (2) ……\nBring every day: a (3) ……\nPrice for one week: £ [[(4) ____]]\nSpeak to: Mrs (5) ……"
      ]
    },
    "answer": "45",
    "acceptVariants": [
      "forty-five",
      "forty five",
      "45.00",
      "45,00"
    ],
    "vozEntrada": "Hello, everyone. I’m here to tell you about this year’s City Sports Camp. Last year the camp began on the first of July, but this year schools finish later, so we start on the eighth of July. As always, you can play football and tennis. And this summer, for the first time, you can go sailing on the lake. We think it’s going to be very popular. You don’t need any special clothes, but you must bring a towel every day, because you’ll get wet! You don’t need to bring lunch. We have a café. A week at the camp costs forty-five pounds. That’s five pounds more than last year, I’m afraid. If you’d like to come, please speak to Mrs Fenwick in the school office. I’ll spell that for you: F, E, N, W, I, C, K. Thank you for listening.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Hello, everyone. I’m here to tell you about this year’s City Sports Camp. Last year the camp began on the first of July, but this year schools finish later, so we start on the eighth of July. As always, you can play football and tennis. And this summer, for the first time, you can go sailing on the lake. We think it’s going to be very popular. You don’t need any special clothes, but you must bring a towel every day, because you’ll get wet! You don’t need to bring lunch. We have a café. A week at the camp costs forty-five pounds. That’s five pounds more than last year, I’m afraid. If you’d like to come, please speak to Mrs Fenwick in the school office. I’ll spell that for you: F, E, N, W, I, C, K. Thank you for listening.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_5,
    "audioGrupo": "T2-L2",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Una semana cuesta «forty-five pounds»: 45. Los cinco son lo que aumentó desde el año pasado, no el precio.",
    "consignaEs": "Vas a escuchar a un hombre que les cuenta a unos alumnos sobre un campamento deportivo de verano. Escribí una palabra, un número, una fecha o una hora para el espacio (4)."
  },
  {
    "id": "A2K-T2-L2-5-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 2",
    "concept": "Listening · Part 2 (escucha-notas)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "COMP_01",
    "difficulty": 3,
    "question": "You will hear a man telling some students about a summer sports camp. Write one word or a number or a date or a time for gap (5).",
    "estimulo": {
      "rotulo": "NOTES",
      "titulo": "CITY SPORTS CAMP",
      "parrafos": [
        "Camp starts on: (1) …… July\nNew sport this year: (2) ……\nBring every day: a (3) ……\nPrice for one week: £ (4) ……\nSpeak to: Mrs [[(5) ____]]"
      ]
    },
    "answer": "Fenwick",
    "acceptVariants": [],
    "vozEntrada": "Hello, everyone. I’m here to tell you about this year’s City Sports Camp. Last year the camp began on the first of July, but this year schools finish later, so we start on the eighth of July. As always, you can play football and tennis. And this summer, for the first time, you can go sailing on the lake. We think it’s going to be very popular. You don’t need any special clothes, but you must bring a towel every day, because you’ll get wet! You don’t need to bring lunch. We have a café. A week at the camp costs forty-five pounds. That’s five pounds more than last year, I’m afraid. If you’d like to come, please speak to Mrs Fenwick in the school office. I’ll spell that for you: F, E, N, W, I, C, K. Thank you for listening.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Hello, everyone. I’m here to tell you about this year’s City Sports Camp. Last year the camp began on the first of July, but this year schools finish later, so we start on the eighth of July. As always, you can play football and tennis. And this summer, for the first time, you can go sailing on the lake. We think it’s going to be very popular. You don’t need any special clothes, but you must bring a towel every day, because you’ll get wet! You don’t need to bring lunch. We have a café. A week at the camp costs forty-five pounds. That’s five pounds more than last year, I’m afraid. If you’d like to come, please speak to Mrs Fenwick in the school office. I’ll spell that for you: F, E, N, W, I, C, K. Thank you for listening.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_5,
    "audioGrupo": "T2-L2",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "El apellido se deletrea: F, E, N, W, I, C, K. Un nombre deletreado tiene que quedar con todas sus letras.",
    "consignaEs": "Vas a escuchar a un hombre que les cuenta a unos alumnos sobre un campamento deportivo de verano. Escribí una palabra, un número, una fecha o una hora para el espacio (5)."
  },
  {
    "id": "A2K-T2-L3-1-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 3",
    "concept": "Listening · Part 3 (escucha-conversacion-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "You will hear Mia talking to her friend Jack about the school play. Which part does Mia have in the play?",
    "options": [
      "the doctor",
      "the queen",
      "a teacher"
    ],
    "correct": 0,
    "vozEntrada": "Hi Mia. Are you in the school play this year? Yes! I wanted to be the queen, but Mr Hall gave that part to Sarah. I’m the doctor. It’s a small part, but it’s funny. Great. When is it? Well, we wanted to do it on the twelfth of May, but the hall wasn’t free. So now it’s on the nineteenth. Is it hard to learn your words? Not really. My sister helps me at home. And the dancing is easy for me. The difficult thing is the singing. I have to sing a song alone, and I’m really afraid! You’ll be fine. How much are the tickets? Three pounds for students and five for adults. But if your family buys four tickets, you only pay twelve pounds. I’ll tell my parents. Can I help with anything? Yes, please! We’ve got enough people to make the clothes, but we need someone to paint the trees for the forest. Could you do that? Sure. I love painting.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Hi Mia. Are you in the school play this year?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes! I wanted to be the queen, but Mr Hall gave that part to Sarah. I’m the doctor. It’s a small part, but it’s funny.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Great. When is it?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Well, we wanted to do it on the twelfth of May, but the hall wasn’t free. So now it’s on the nineteenth.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Is it hard to learn your words?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Not really. My sister helps me at home. And the dancing is easy for me. The difficult thing is the singing. I have to sing a song alone, and I’m really afraid!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "You’ll be fine. How much are the tickets?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Three pounds for students and five for adults. But if your family buys four tickets, you only pay twelve pounds.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "I’ll tell my parents. Can I help with anything?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, please! We’ve got enough people to make the clothes, but we need someone to paint the trees for the forest. Could you do that?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Sure. I love painting.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_6,
    "audioGrupo": "T2-L3",
    "avisoParte": {
      "titulo": "Listening · Part 3",
      "texto": "Una conversación y 5 preguntas. Para cada una, elegí A, B o C. El audio se escucha dos veces."
    },
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Mia quería ser la reina, pero ese papel se lo dieron a Sarah. «I’m the doctor». Mr Hall es el profesor que reparte los papeles, no un personaje.",
    "consignaEs": "Vas a escuchar a Mia hablando con su amigo Jack sobre la obra de teatro de la escuela. ¿Qué papel tiene Mia en la obra?"
  },
  {
    "id": "A2K-T2-L3-2-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 3",
    "concept": "Listening · Part 3 (escucha-conversacion-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "You will hear Mia talking to her friend Jack about the school play. When is the play?",
    "options": [
      "on 9 May",
      "on 12 May",
      "on 19 May"
    ],
    "correct": 2,
    "vozEntrada": "Hi Mia. Are you in the school play this year? Yes! I wanted to be the queen, but Mr Hall gave that part to Sarah. I’m the doctor. It’s a small part, but it’s funny. Great. When is it? Well, we wanted to do it on the twelfth of May, but the hall wasn’t free. So now it’s on the nineteenth. Is it hard to learn your words? Not really. My sister helps me at home. And the dancing is easy for me. The difficult thing is the singing. I have to sing a song alone, and I’m really afraid! You’ll be fine. How much are the tickets? Three pounds for students and five for adults. But if your family buys four tickets, you only pay twelve pounds. I’ll tell my parents. Can I help with anything? Yes, please! We’ve got enough people to make the clothes, but we need someone to paint the trees for the forest. Could you do that? Sure. I love painting.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Hi Mia. Are you in the school play this year?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes! I wanted to be the queen, but Mr Hall gave that part to Sarah. I’m the doctor. It’s a small part, but it’s funny.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Great. When is it?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Well, we wanted to do it on the twelfth of May, but the hall wasn’t free. So now it’s on the nineteenth.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Is it hard to learn your words?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Not really. My sister helps me at home. And the dancing is easy for me. The difficult thing is the singing. I have to sing a song alone, and I’m really afraid!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "You’ll be fine. How much are the tickets?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Three pounds for students and five for adults. But if your family buys four tickets, you only pay twelve pounds.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "I’ll tell my parents. Can I help with anything?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, please! We’ve got enough people to make the clothes, but we need someone to paint the trees for the forest. Could you do that?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Sure. I love painting.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_6,
    "audioGrupo": "T2-L3",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Querían hacerla el doce de mayo, pero el salón no estaba libre: «now it’s on the nineteenth». El nueve no se nombra.",
    "consignaEs": "Vas a escuchar a Mia hablando con su amigo Jack sobre la obra de teatro de la escuela. ¿Cuándo es la obra?"
  },
  {
    "id": "A2K-T2-L3-3-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 3",
    "concept": "Listening · Part 3 (escucha-conversacion-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "You will hear Mia talking to her friend Jack about the school play. What does Mia find difficult?",
    "options": [
      "learning her words",
      "singing",
      "dancing"
    ],
    "correct": 1,
    "vozEntrada": "Hi Mia. Are you in the school play this year? Yes! I wanted to be the queen, but Mr Hall gave that part to Sarah. I’m the doctor. It’s a small part, but it’s funny. Great. When is it? Well, we wanted to do it on the twelfth of May, but the hall wasn’t free. So now it’s on the nineteenth. Is it hard to learn your words? Not really. My sister helps me at home. And the dancing is easy for me. The difficult thing is the singing. I have to sing a song alone, and I’m really afraid! You’ll be fine. How much are the tickets? Three pounds for students and five for adults. But if your family buys four tickets, you only pay twelve pounds. I’ll tell my parents. Can I help with anything? Yes, please! We’ve got enough people to make the clothes, but we need someone to paint the trees for the forest. Could you do that? Sure. I love painting.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Hi Mia. Are you in the school play this year?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes! I wanted to be the queen, but Mr Hall gave that part to Sarah. I’m the doctor. It’s a small part, but it’s funny.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Great. When is it?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Well, we wanted to do it on the twelfth of May, but the hall wasn’t free. So now it’s on the nineteenth.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Is it hard to learn your words?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Not really. My sister helps me at home. And the dancing is easy for me. The difficult thing is the singing. I have to sing a song alone, and I’m really afraid!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "You’ll be fine. How much are the tickets?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Three pounds for students and five for adults. But if your family buys four tickets, you only pay twelve pounds.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "I’ll tell my parents. Can I help with anything?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, please! We’ve got enough people to make the clothes, but we need someone to paint the trees for the forest. Could you do that?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Sure. I love painting.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_6,
    "audioGrupo": "T2-L3",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Aprender la letra no le cuesta (la ayuda su hermana) y bailar le resulta fácil. «The difficult thing is the singing»: tiene que cantar sola.",
    "consignaEs": "Vas a escuchar a Mia hablando con su amigo Jack sobre la obra de teatro de la escuela. ¿Qué le resulta difícil a Mia?"
  },
  {
    "id": "A2K-T2-L3-4-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 3",
    "concept": "Listening · Part 3 (escucha-conversacion-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "You will hear Mia talking to her friend Jack about the school play. How much is one ticket for a student?",
    "options": [
      "£3",
      "£5",
      "£12"
    ],
    "correct": 0,
    "vozEntrada": "Hi Mia. Are you in the school play this year? Yes! I wanted to be the queen, but Mr Hall gave that part to Sarah. I’m the doctor. It’s a small part, but it’s funny. Great. When is it? Well, we wanted to do it on the twelfth of May, but the hall wasn’t free. So now it’s on the nineteenth. Is it hard to learn your words? Not really. My sister helps me at home. And the dancing is easy for me. The difficult thing is the singing. I have to sing a song alone, and I’m really afraid! You’ll be fine. How much are the tickets? Three pounds for students and five for adults. But if your family buys four tickets, you only pay twelve pounds. I’ll tell my parents. Can I help with anything? Yes, please! We’ve got enough people to make the clothes, but we need someone to paint the trees for the forest. Could you do that? Sure. I love painting.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Hi Mia. Are you in the school play this year?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes! I wanted to be the queen, but Mr Hall gave that part to Sarah. I’m the doctor. It’s a small part, but it’s funny.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Great. When is it?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Well, we wanted to do it on the twelfth of May, but the hall wasn’t free. So now it’s on the nineteenth.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Is it hard to learn your words?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Not really. My sister helps me at home. And the dancing is easy for me. The difficult thing is the singing. I have to sing a song alone, and I’m really afraid!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "You’ll be fine. How much are the tickets?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Three pounds for students and five for adults. But if your family buys four tickets, you only pay twelve pounds.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "I’ll tell my parents. Can I help with anything?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, please! We’ve got enough people to make the clothes, but we need someone to paint the trees for the forest. Could you do that?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Sure. I love painting.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_6,
    "audioGrupo": "T2-L3",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Los estudiantes pagan tres libras y los adultos, cinco. Las doce libras son por cuatro entradas para una familia.",
    "consignaEs": "Vas a escuchar a Mia hablando con su amigo Jack sobre la obra de teatro de la escuela. ¿Cuánto cuesta una entrada para un alumno?"
  },
  {
    "id": "A2K-T2-L3-5-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 3",
    "concept": "Listening · Part 3 (escucha-conversacion-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "You will hear Mia talking to her friend Jack about the school play. What does Mia ask Jack to do?",
    "options": [
      "make some clothes",
      "paint something",
      "sell tickets"
    ],
    "correct": 1,
    "vozEntrada": "Hi Mia. Are you in the school play this year? Yes! I wanted to be the queen, but Mr Hall gave that part to Sarah. I’m the doctor. It’s a small part, but it’s funny. Great. When is it? Well, we wanted to do it on the twelfth of May, but the hall wasn’t free. So now it’s on the nineteenth. Is it hard to learn your words? Not really. My sister helps me at home. And the dancing is easy for me. The difficult thing is the singing. I have to sing a song alone, and I’m really afraid! You’ll be fine. How much are the tickets? Three pounds for students and five for adults. But if your family buys four tickets, you only pay twelve pounds. I’ll tell my parents. Can I help with anything? Yes, please! We’ve got enough people to make the clothes, but we need someone to paint the trees for the forest. Could you do that? Sure. I love painting.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Hi Mia. Are you in the school play this year?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes! I wanted to be the queen, but Mr Hall gave that part to Sarah. I’m the doctor. It’s a small part, but it’s funny.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Great. When is it?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Well, we wanted to do it on the twelfth of May, but the hall wasn’t free. So now it’s on the nineteenth.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Is it hard to learn your words?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Not really. My sister helps me at home. And the dancing is easy for me. The difficult thing is the singing. I have to sing a song alone, and I’m really afraid!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "You’ll be fine. How much are the tickets?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Three pounds for students and five for adults. But if your family buys four tickets, you only pay twelve pounds.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "I’ll tell my parents. Can I help with anything?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, please! We’ve got enough people to make the clothes, but we need someone to paint the trees for the forest. Could you do that?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Sure. I love painting.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_6,
    "audioGrupo": "T2-L3",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Para la ropa ya hay gente. Lo que falta es alguien que pinte los árboles del bosque: «Could you do that?». De vender entradas no le pide nada.",
    "consignaEs": "Vas a escuchar a Mia hablando con su amigo Jack sobre la obra de teatro de la escuela. ¿Qué le pide Mia a Jack?"
  },
  {
    "id": "A2K-T2-L4-1-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 4",
    "concept": "Listening · Part 4 (escucha-cortos-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "You will hear a boy talking to his mum. Why is he late?",
    "options": [
      "His bus didn’t come on time.",
      "He had to go back for something.",
      "His teacher wanted to talk to him."
    ],
    "correct": 1,
    "vozEntrada": "You’re late, Harry. Was the bus late again? No, it was on time today. And Mr Clark didn’t keep us after class this time. I was walking to the bus stop when I saw I didn’t have my keys, so I went back to school to look for them. They were under my desk!",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "You’re late, Harry. Was the bus late again?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "No, it was on time today. And Mr Clark didn’t keep us after class this time. I was walking to the bus stop when I saw I didn’t have my keys, so I went back to school to look for them. They were under my desk!",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/12c8e2e9ce775d60b4ed7621bbcbf6c7.mp3",
    "audioGrupo": "T2-L4-1",
    "avisoParte": {
      "titulo": "Listening · Part 4",
      "texto": "5 audios cortos. Para cada uno, elegí A, B o C. Cada audio se escucha dos veces."
    },
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "El colectivo llegó a horario y el profesor no los retuvo. Harry volvió a la escuela a buscar las llaves: por eso llegó tarde.",
    "consignaEs": "Vas a escuchar a un chico hablando con su mamá. ¿Por qué llega tarde?"
  },
  {
    "id": "A2K-T2-L4-2-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 4",
    "concept": "Listening · Part 4 (escucha-cortos-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "You will hear a girl leaving a message for her friend. What does she want her friend to do?",
    "options": [
      "pay her for a ticket today",
      "find someone to drive them",
      "send her some information"
    ],
    "correct": 2,
    "vozEntrada": "Hi Beth, it’s Anna. I’ve got the tickets for the concert on Friday. Don’t worry, you can pay me next week. My dad’s going to drive us there, but he doesn’t know where your new flat is. Can you send me your address tonight? Thanks. Bye!",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Hi Beth, it’s Anna. I’ve got the tickets for the concert on Friday. Don’t worry, you can pay me next week. My dad’s going to drive us there, but he doesn’t know where your new flat is. Can you send me your address tonight? Thanks. Bye!",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/bea02c26941cf9a4db78b1363dca150f.mp3",
    "audioGrupo": "T2-L4-2",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Las entradas ya están y Beth puede pagar la semana que viene. El papá de Anna las lleva. Lo que pide es la dirección: «Can you send me your address tonight?».",
    "consignaEs": "Vas a escuchar a una chica que le deja un mensaje a su amiga. ¿Qué quiere que haga su amiga?"
  },
  {
    "id": "A2K-T2-L4-3-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 4",
    "concept": "Listening · Part 4 (escucha-cortos-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "You will hear a man talking on the radio. What is he talking about?",
    "options": [
      "changes for people travelling",
      "a new bus station",
      "the winner of a race"
    ],
    "correct": 0,
    "vozEntrada": "Now, if you’re coming into town this Saturday, remember that Bridge Street will be closed all day because of the bike race. Buses will not stop at the station. They will leave from Park Road. So give yourself more time for your journey.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Now, if you’re coming into town this Saturday, remember that Bridge Street will be closed all day because of the bike race. Buses will not stop at the station. They will leave from Park Road. So give yourself more time for your journey.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/4a93073b4c96f898476a82ffa5d3ec32.mp3",
    "audioGrupo": "T2-L4-3",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Habla de una calle cerrada y de colectivos que salen de otro lugar: cambios para quien viaja el sábado. La carrera es el motivo, no el tema, y de una estación nueva no dice nada.",
    "consignaEs": "Vas a escuchar a un hombre hablando en la radio. ¿De qué está hablando?"
  },
  {
    "id": "A2K-T2-L4-4-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 4",
    "concept": "Listening · Part 4 (escucha-cortos-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "You will hear two friends talking about a new café. What does the girl like best about it?",
    "options": [
      "the prices",
      "the people who work there",
      "the place where you can sit"
    ],
    "correct": 2,
    "vozEntrada": "Have you been to the new café by the river? Yes, on Sunday. The cakes are OK, but they’re not cheap. The waiters are friendly, I suppose. But the best thing is, you can sit outside and watch the boats. I stayed for two hours!",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Have you been to the new café by the river?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, on Sunday. The cakes are OK, but they’re not cheap. The waiters are friendly, I suppose. But the best thing is, you can sit outside and watch the boats. I stayed for two hours!",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/f769eab5daec858d5449d3d433f59a62.mp3",
    "audioGrupo": "T2-L4-4",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Las tortas están bien pero no son baratas, y los mozos son simpáticos. «But the best thing is, you can sit outside and watch the boats».",
    "consignaEs": "Vas a escuchar a dos amigos hablando de un café nuevo. ¿Qué es lo que más le gusta a la chica de ese lugar?"
  },
  {
    "id": "A2K-T2-L4-5-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 4",
    "concept": "Listening · Part 4 (escucha-cortos-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "You will hear a teacher talking to a student. Why is the teacher pleased?",
    "options": [
      "He has worked harder than before.",
      "He got the best mark in the class.",
      "He helped another student."
    ],
    "correct": 0,
    "vozEntrada": "Come in, Oliver. I’ve just read your history project. You know, your last one was very short, and you gave it to me three days late. This time you’ve written five pages, and you’ve added some lovely drawings. And it was on my desk on Monday morning. Well done!",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Come in, Oliver. I’ve just read your history project. You know, your last one was very short, and you gave it to me three days late. This time you’ve written five pages, and you’ve added some lovely drawings. And it was on my desk on Monday morning. Well done!",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/dee289f64ff62e47d84106e28511b737.mp3",
    "audioGrupo": "T2-L4-5",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "El trabajo anterior era corto y llegó tarde. Este tiene cinco páginas, dibujos y llegó a tiempo: Oliver trabajó mejor que antes. No habla de notas ni de otros alumnos.",
    "consignaEs": "Vas a escuchar a una profesora hablando con un alumno. ¿Por qué está contenta la profesora?"
  },
  {
    "id": "A2K-T2-L5-1-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 5",
    "concept": "Listening · Part 5 (escucha-emparejar)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "ASOC_01",
    "difficulty": 2,
    "question": "You will hear Nick talking to his teacher about the jobs people in his family do. His mum: which job?",
    "options": [
      "cook",
      "doctor",
      "driver",
      "farmer",
      "nurse",
      "photographer",
      "pilot",
      "teacher"
    ],
    "correct": 0,
    "vozEntrada": "So, Nick, your project is about jobs in your family. Tell me about your mum first. Well, lots of people think she’s a doctor, because she works at the hospital. But she works in the kitchen there. She makes the meals for all the sick people. That’s an important job. And your dad? He drove a bus for ten years, but he stopped last year. Now he flies planes for a small company. He’s often away from home. How exciting! What about your grandfather? Grandpa’s sixty-eight, but he still works. He’s got cows and sheep, and he gets up at five every morning. He says he loves his animals. And you’ve got an older sister, haven’t you? Yes, Carla. She finished university last year. She wanted to be a photographer, but it’s hard to find work. So now she teaches art at a primary school. Lovely. Is there anyone else? My uncle Rob. He takes pictures for a newspaper. Last week he took some of the new hospital, and my mum was in one of them! That’s a great family, Nick.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "So, Nick, your project is about jobs in your family. Tell me about your mum first.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Well, lots of people think she’s a doctor, because she works at the hospital. But she works in the kitchen there. She makes the meals for all the sick people.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "That’s an important job. And your dad?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "He drove a bus for ten years, but he stopped last year. Now he flies planes for a small company. He’s often away from home.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "How exciting! What about your grandfather?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Grandpa’s sixty-eight, but he still works. He’s got cows and sheep, and he gets up at five every morning. He says he loves his animals.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "And you’ve got an older sister, haven’t you?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Yes, Carla. She finished university last year. She wanted to be a photographer, but it’s hard to find work. So now she teaches art at a primary school.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Lovely. Is there anyone else?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "My uncle Rob. He takes pictures for a newspaper. Last week he took some of the new hospital, and my mum was in one of them!",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "That’s a great family, Nick.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_7,
    "audioGrupo": "T2-L5",
    "avisoParte": {
      "titulo": "Listening · Part 5",
      "texto": "Una conversación. Uní cada una de las 5 personas o cosas con la opción que corresponde. El audio se escucha dos veces."
    },
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Muchos creen que es médica porque trabaja en el hospital, pero trabaja en la cocina: «She makes the meals». Es cocinera.",
    "consignaEs": "Vas a escuchar a Nick hablando con su profesora sobre los trabajos de las personas de su familia. Su mamá: ¿qué trabajo?"
  },
  {
    "id": "A2K-T2-L5-2-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 5",
    "concept": "Listening · Part 5 (escucha-emparejar)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "ASOC_01",
    "difficulty": 2,
    "question": "You will hear Nick talking to his teacher about the jobs people in his family do. His dad: which job?",
    "options": [
      "cook",
      "doctor",
      "driver",
      "farmer",
      "nurse",
      "photographer",
      "pilot",
      "teacher"
    ],
    "correct": 6,
    "vozEntrada": "So, Nick, your project is about jobs in your family. Tell me about your mum first. Well, lots of people think she’s a doctor, because she works at the hospital. But she works in the kitchen there. She makes the meals for all the sick people. That’s an important job. And your dad? He drove a bus for ten years, but he stopped last year. Now he flies planes for a small company. He’s often away from home. How exciting! What about your grandfather? Grandpa’s sixty-eight, but he still works. He’s got cows and sheep, and he gets up at five every morning. He says he loves his animals. And you’ve got an older sister, haven’t you? Yes, Carla. She finished university last year. She wanted to be a photographer, but it’s hard to find work. So now she teaches art at a primary school. Lovely. Is there anyone else? My uncle Rob. He takes pictures for a newspaper. Last week he took some of the new hospital, and my mum was in one of them! That’s a great family, Nick.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "So, Nick, your project is about jobs in your family. Tell me about your mum first.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Well, lots of people think she’s a doctor, because she works at the hospital. But she works in the kitchen there. She makes the meals for all the sick people.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "That’s an important job. And your dad?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "He drove a bus for ten years, but he stopped last year. Now he flies planes for a small company. He’s often away from home.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "How exciting! What about your grandfather?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Grandpa’s sixty-eight, but he still works. He’s got cows and sheep, and he gets up at five every morning. He says he loves his animals.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "And you’ve got an older sister, haven’t you?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Yes, Carla. She finished university last year. She wanted to be a photographer, but it’s hard to find work. So now she teaches art at a primary school.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Lovely. Is there anyone else?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "My uncle Rob. He takes pictures for a newspaper. Last week he took some of the new hospital, and my mum was in one of them!",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "That’s a great family, Nick.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_7,
    "audioGrupo": "T2-L5",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Manejó un colectivo diez años, pero lo dejó. «Now he flies planes»: es piloto.",
    "consignaEs": "Vas a escuchar a Nick hablando con su profesora sobre los trabajos de las personas de su familia. Su papá: ¿qué trabajo?"
  },
  {
    "id": "A2K-T2-L5-3-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 5",
    "concept": "Listening · Part 5 (escucha-emparejar)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "ASOC_01",
    "difficulty": 3,
    "question": "You will hear Nick talking to his teacher about the jobs people in his family do. His grandfather: which job?",
    "options": [
      "cook",
      "doctor",
      "driver",
      "farmer",
      "nurse",
      "photographer",
      "pilot",
      "teacher"
    ],
    "correct": 3,
    "vozEntrada": "So, Nick, your project is about jobs in your family. Tell me about your mum first. Well, lots of people think she’s a doctor, because she works at the hospital. But she works in the kitchen there. She makes the meals for all the sick people. That’s an important job. And your dad? He drove a bus for ten years, but he stopped last year. Now he flies planes for a small company. He’s often away from home. How exciting! What about your grandfather? Grandpa’s sixty-eight, but he still works. He’s got cows and sheep, and he gets up at five every morning. He says he loves his animals. And you’ve got an older sister, haven’t you? Yes, Carla. She finished university last year. She wanted to be a photographer, but it’s hard to find work. So now she teaches art at a primary school. Lovely. Is there anyone else? My uncle Rob. He takes pictures for a newspaper. Last week he took some of the new hospital, and my mum was in one of them! That’s a great family, Nick.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "So, Nick, your project is about jobs in your family. Tell me about your mum first.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Well, lots of people think she’s a doctor, because she works at the hospital. But she works in the kitchen there. She makes the meals for all the sick people.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "That’s an important job. And your dad?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "He drove a bus for ten years, but he stopped last year. Now he flies planes for a small company. He’s often away from home.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "How exciting! What about your grandfather?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Grandpa’s sixty-eight, but he still works. He’s got cows and sheep, and he gets up at five every morning. He says he loves his animals.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "And you’ve got an older sister, haven’t you?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Yes, Carla. She finished university last year. She wanted to be a photographer, but it’s hard to find work. So now she teaches art at a primary school.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Lovely. Is there anyone else?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "My uncle Rob. He takes pictures for a newspaper. Last week he took some of the new hospital, and my mum was in one of them!",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "That’s a great family, Nick.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_7,
    "audioGrupo": "T2-L5",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Tiene vacas y ovejas y se levanta a las cinco: trabaja en el campo. Nick no dice la palabra «farmer»; hay que deducirla.",
    "consignaEs": "Vas a escuchar a Nick hablando con su profesora sobre los trabajos de las personas de su familia. Su abuelo: ¿qué trabajo?"
  },
  {
    "id": "A2K-T2-L5-4-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 5",
    "concept": "Listening · Part 5 (escucha-emparejar)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "ASOC_01",
    "difficulty": 3,
    "question": "You will hear Nick talking to his teacher about the jobs people in his family do. His sister Carla: which job?",
    "options": [
      "cook",
      "doctor",
      "driver",
      "farmer",
      "nurse",
      "photographer",
      "pilot",
      "teacher"
    ],
    "correct": 7,
    "vozEntrada": "So, Nick, your project is about jobs in your family. Tell me about your mum first. Well, lots of people think she’s a doctor, because she works at the hospital. But she works in the kitchen there. She makes the meals for all the sick people. That’s an important job. And your dad? He drove a bus for ten years, but he stopped last year. Now he flies planes for a small company. He’s often away from home. How exciting! What about your grandfather? Grandpa’s sixty-eight, but he still works. He’s got cows and sheep, and he gets up at five every morning. He says he loves his animals. And you’ve got an older sister, haven’t you? Yes, Carla. She finished university last year. She wanted to be a photographer, but it’s hard to find work. So now she teaches art at a primary school. Lovely. Is there anyone else? My uncle Rob. He takes pictures for a newspaper. Last week he took some of the new hospital, and my mum was in one of them! That’s a great family, Nick.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "So, Nick, your project is about jobs in your family. Tell me about your mum first.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Well, lots of people think she’s a doctor, because she works at the hospital. But she works in the kitchen there. She makes the meals for all the sick people.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "That’s an important job. And your dad?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "He drove a bus for ten years, but he stopped last year. Now he flies planes for a small company. He’s often away from home.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "How exciting! What about your grandfather?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Grandpa’s sixty-eight, but he still works. He’s got cows and sheep, and he gets up at five every morning. He says he loves his animals.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "And you’ve got an older sister, haven’t you?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Yes, Carla. She finished university last year. She wanted to be a photographer, but it’s hard to find work. So now she teaches art at a primary school.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Lovely. Is there anyone else?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "My uncle Rob. He takes pictures for a newspaper. Last week he took some of the new hospital, and my mum was in one of them!",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "That’s a great family, Nick.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_7,
    "audioGrupo": "T2-L5",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Quería ser fotógrafa, pero es difícil conseguir trabajo. «So now she teaches art at a primary school»: es profesora.",
    "consignaEs": "Vas a escuchar a Nick hablando con su profesora sobre los trabajos de las personas de su familia. Su hermana Carla: ¿qué trabajo?"
  },
  {
    "id": "A2K-T2-L5-5-S",
    "status": "draft",
    "nivelId": "m1-l",
    "stage": "Test 2 · Listening · Part 5",
    "concept": "Listening · Part 5 (escucha-emparejar)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "ASOC_01",
    "difficulty": 3,
    "question": "You will hear Nick talking to his teacher about the jobs people in his family do. His uncle Rob: which job?",
    "options": [
      "cook",
      "doctor",
      "driver",
      "farmer",
      "nurse",
      "photographer",
      "pilot",
      "teacher"
    ],
    "correct": 5,
    "vozEntrada": "So, Nick, your project is about jobs in your family. Tell me about your mum first. Well, lots of people think she’s a doctor, because she works at the hospital. But she works in the kitchen there. She makes the meals for all the sick people. That’s an important job. And your dad? He drove a bus for ten years, but he stopped last year. Now he flies planes for a small company. He’s often away from home. How exciting! What about your grandfather? Grandpa’s sixty-eight, but he still works. He’s got cows and sheep, and he gets up at five every morning. He says he loves his animals. And you’ve got an older sister, haven’t you? Yes, Carla. She finished university last year. She wanted to be a photographer, but it’s hard to find work. So now she teaches art at a primary school. Lovely. Is there anyone else? My uncle Rob. He takes pictures for a newspaper. Last week he took some of the new hospital, and my mum was in one of them! That’s a great family, Nick.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "So, Nick, your project is about jobs in your family. Tell me about your mum first.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Well, lots of people think she’s a doctor, because she works at the hospital. But she works in the kitchen there. She makes the meals for all the sick people.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "That’s an important job. And your dad?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "He drove a bus for ten years, but he stopped last year. Now he flies planes for a small company. He’s often away from home.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "How exciting! What about your grandfather?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Grandpa’s sixty-eight, but he still works. He’s got cows and sheep, and he gets up at five every morning. He says he loves his animals.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "And you’ve got an older sister, haven’t you?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Yes, Carla. She finished university last year. She wanted to be a photographer, but it’s hard to find work. So now she teaches art at a primary school.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Lovely. Is there anyone else?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "My uncle Rob. He takes pictures for a newspaper. Last week he took some of the new hospital, and my mum was in one of them!",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "That’s a great family, Nick.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_7,
    "audioGrupo": "T2-L5",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Saca fotos para un diario: es fotógrafo. Esa opción se había descartado para Carla, pero es la correcta para el tío.",
    "consignaEs": "Vas a escuchar a Nick hablando con su profesora sobre los trabajos de las personas de su familia. Su tío Rob: ¿qué trabajo?"
  },
  {
    "id": "A2K-A2KEY-TEST-2-S-AVISO",
    "status": "draft",
    "nivelId": "m1-s",
    "kind": "concept",
    "stage": "Antes de empezar",
    "concept": "aviso del simulacro (Speaking)",
    "feedback": "Empezá cuando quieras.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Antes de empezar",
        "regla": "Estas preguntas son **nuevas**: no están en la práctica por partes. Tenés un intento por pregunta.",
        "notas": [
          "No hay pistas ni explicaciones mientras contestás. El resultado y las explicaciones aparecen al terminar la prueba.",
          "Tiempo de la prueba: 10 minutos. El reloj avisa cuando se termina, pero no te corta."
        ],
        "idea": "Estas preguntas son nuevas: no están en la práctica por partes. Tenés un intento por pregunta. No hay pistas ni explicaciones mientras contestás. El resultado y las explicaciones aparecen al terminar la prueba. Tiempo de la prueba: 10 minutos. El reloj avisa cuando se termina, pero no te corta."
      }
    ]
  },
  {
    "id": "A2K-T2-S1-1-S",
    "status": "draft",
    "nivelId": "m1-s",
    "stage": "Test 2 · Speaking · Part 1",
    "concept": "Speaking · Part 1 (oral-entrevista)",
    "kind": "profe",
    "forma": "pasale",
    "question": "Speaking · Part 1. Un adulto te hace preguntas en inglés sobre vos. Contestá con oraciones enteras, no con una sola palabra.",
    "feedback": "Parte terminada.",
    "tarjeta": {
      "titulo": "Tu papel",
      "dato": "Hacés de examinador. Leé las preguntas en inglés, de a una, y esperá la respuesta.",
      "nota": "Dura unos 4 minutos."
    },
    "paraProfe": {
      "criterios": [
        "Que conteste con oraciones y agregue algo: un motivo, un ejemplo.",
        "Que se entienda lo que dice, aunque tenga errores.",
        "En las dos preguntas que empiezan con «Now, please tell me something about…» tiene que hablar más largo: dejalo seguir.",
        "Todavía no pongas puntaje: las cuatro escalas se puntúan al final de la Parte 2."
      ],
      "frasesSugeridas": [
        "What’s your name?",
        "How old are you?",
        "Where do you come from?",
        "Now, let’s talk about school. What time do you start school in the morning?",
        "Which subject do you like best? Why?",
        "How do you get to school?",
        "Now, please tell me something about the homework you do.",
        "Now, let’s talk about friends. How often do you see your friends?",
        "What do you like doing with your friends?",
        "Do you talk to your friends online? When?",
        "Now, please tell me something about your best friend."
      ],
      "objetivo": "Hacés de examinador. Leé las preguntas en inglés, de a una, y esperá la respuesta. Si se traba: Repetí la pregunta una sola vez, más despacio. Si sigue sin contestar, hacé una pregunta más fácil sobre lo mismo (por ejemplo: «Do you walk to school or go by bus?») y pasá a la siguiente. No traduzcas la pregunta al castellano ni le soples la respuesta.",
      "registra": "La app guarda solo la marca de tres niveles. El puntaje de 0 a 5 va en papel."
    }
  },
  {
    "id": "A2K-T2-S2-1-S",
    "status": "draft",
    "nivelId": "m1-s",
    "stage": "Test 2 · Speaking · Part 2",
    "concept": "Speaking · Part 2 (oral-colaborativa)",
    "kind": "profe",
    "forma": "pasale",
    "question": "Speaking · Part 2. En el examen hablás con otro chico o chica; en casa esa parte la hace el adulto. Miren juntos la lámina: muestra cinco cosas para hacer en casa en el tiempo libre. Decí cuáles te gustan, cuáles no y por qué, y hacele una pregunta.",
    "image": "../pdp-assets/ab1748ab0acb94470bda9e4efe5e053b.jpg",
    "imageAlt": "Lámina con cinco dibujos de cosas para hacer en casa en el tiempo libre, sin texto.",
    "feedback": "Parte terminada.",
    "tarjeta": {
      "titulo": "Tu papel",
      "dato": "Tenés dos papeles. Primero sos el COMPAÑERO: opinás corto y le devolvés la palabra. Después sos el EXAMINADOR: solo preguntás.",
      "nota": "Dura unos 6 minutos."
    },
    "paraProfe": {
      "criterios": [
        "Que dé su opinión y un motivo («because…»), no solo «yes» o «no».",
        "Que reaccione a lo que decís vos y que te haga al menos una pregunta.",
        "Se evalúa cómo usa el inglés, no si sus ideas son buenas.",
        "Al terminar, poné de 0 a 5 en Grammar and Vocabulary, Pronunciation, Interactive Communication, Global Achievement, mirando las dos partes juntas. Las bandas están en «Hoja del adulto»."
      ],
      "frasesSugeridas": [
        "EXAMINADOR: Now we are going to talk together. Here are some pictures of things to do at home in your free time.",
        "EXAMINADOR: Do you like these activities? Say why or why not.",
        "COMPAÑERO: I like cooking because I enjoy eating! What about you?",
        "COMPAÑERO: I think painting is difficult. Do you agree?",
        "EXAMINADOR: Do you think playing video games is boring? Why? / Why not?",
        "EXAMINADOR: Is reading a good thing to do in the evening? Why? / Why not?",
        "EXAMINADOR: Which of these activities is the most fun to do with other people?",
        "EXAMINADOR: Now, do you prefer spending your free time at home or outside? Why?",
        "EXAMINADOR: What did you do at home last night?"
      ],
      "objetivo": "Tenés dos papeles. Primero sos el COMPAÑERO: opinás corto y le devolvés la palabra. Después sos el EXAMINADOR: solo preguntás. Si se traba: Señalale uno de los cinco dibujos y preguntá: «Do you like doing this?». Repetí la pregunta una vez. Si no contesta, pasá a la siguiente. No completes vos sus frases.",
      "registra": "La app guarda solo la marca de tres niveles. El puntaje de 0 a 5 va en papel."
    }
  }
];

const EXERCISES_M2 = [
  {
    "id": "A2K-A2KEY-TEST-3-RW-AVISO",
    "status": "draft",
    "nivelId": "m2-rw",
    "kind": "concept",
    "stage": "Antes de empezar",
    "concept": "aviso del simulacro (Reading and Writing)",
    "feedback": "Empezá cuando quieras.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Antes de empezar",
        "regla": "Estas preguntas son **nuevas**: no están en la práctica por partes. Podés cambiar una respuesta hasta que entregues.",
        "notas": [
          "Para volver a una pregunta, deslizá la pantalla hacia la derecha. Al final hay dos textos para escribir: se entregan junto con las respuestas.",
          "No hay pistas ni explicaciones mientras contestás. El resultado y las explicaciones aparecen al terminar la prueba.",
          "Tiempo de la prueba: 60 minutos. Cuando el tiempo se termina, la prueba se entrega sola."
        ],
        "idea": "Estas preguntas son nuevas: no están en la práctica por partes. Podés cambiar una respuesta hasta que entregues. Para volver a una pregunta, deslizá la pantalla hacia la derecha. Al final hay dos textos para escribir: se entregan junto con las respuestas. No hay pistas ni explicaciones mientras contestás. El resultado y las explicaciones aparecen al terminar la prueba. Tiempo de la prueba: 60 minutos. Cuando el tiempo se termina, la prueba se entrega sola."
      }
    ]
  },
  {
    "id": "A2K-T3-R1-1-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 1",
    "concept": "Reading · Part 1 (lectura-mensaje-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "Choose the sentence (A, B or C) that says the same as the text.",
    "estimulo": {
      "rotulo": "NOTICE ON A SCHOOL DOOR",
      "parrafos": [
        "COMPUTER ROOM\nClosed on Monday – new computers arriving.\nOpen again from Tuesday at 8 a.m."
      ],
      "centrado": true
    },
    "options": [
      "Students can use the new computers on Monday.",
      "Nobody can use the computer room on Monday.",
      "The computer room opens late on Monday."
    ],
    "correct": 1,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "El lunes la sala está cerrada todo el día porque llegan las computadoras nuevas. Se pueden usar recién desde el martes (A). No abre más tarde el lunes: no abre (C).",
    "consignaEs": "Elegí la oración (A, B o C) que dice lo mismo que el texto."
  },
  {
    "id": "A2K-T3-R1-2-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 1",
    "concept": "Reading · Part 1 (lectura-mensaje-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "Choose the sentence (A, B or C) that says the same as the text.",
    "estimulo": {
      "rotulo": "TEXT MESSAGE",
      "parrafos": [
        "Hi Rosa, I can’t find my maths book. I think I put it in your bag by mistake after class. Can you check? I need it for tonight’s homework. Eva"
      ]
    },
    "options": [
      "Eva wants to borrow Rosa’s maths book.",
      "Eva is asking Rosa to help her with her homework.",
      "Eva thinks Rosa has something of hers."
    ],
    "correct": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Eva cree que su libro («my maths book») quedó en la mochila de Rosa y le pide que se fije. El libro es de Eva, no de Rosa (A), y no le pide ayuda con la tarea (B).",
    "consignaEs": "Elegí la oración (A, B o C) que dice lo mismo que el texto."
  },
  {
    "id": "A2K-T3-R1-3-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 1",
    "concept": "Reading · Part 1 (lectura-mensaje-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "Choose the sentence (A, B or C) that says the same as the text.",
    "estimulo": {
      "rotulo": "SIGN IN A MUSEUM",
      "parrafos": [
        "CITY MUSEUM\nPhotos are welcome – but please don’t use a flash."
      ],
      "centrado": true
    },
    "options": [
      "You can take pictures, but not with a flash.",
      "You must ask before you take photos.",
      "Cameras are not allowed in the museum."
    ],
    "correct": 0,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "«Photos are welcome» quiere decir que se pueden sacar fotos; lo único que piden es no usar el flash. No hay que pedir permiso (B) ni están prohibidas las cámaras (C).",
    "consignaEs": "Elegí la oración (A, B o C) que dice lo mismo que el texto."
  },
  {
    "id": "A2K-T3-R1-4-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 1",
    "concept": "Reading · Part 1 (lectura-mensaje-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "Choose the sentence (A, B or C) that says the same as the text.",
    "estimulo": {
      "rotulo": "EMAIL",
      "parrafos": [
        "To: Year 8 parents\nFrom: Mr Lopez\nThe school concert starts at 6.30 on Thursday. Students in the choir must arrive an hour earlier to practise. Doors open for parents at 6.15."
      ]
    },
    "options": [
      "Parents can go in an hour before the concert.",
      "Choir students have to be at school by 5.30.",
      "The concert finishes at 6.30."
    ],
    "correct": 1,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "El concierto empieza a las 6.30 y el coro llega una hora antes: a las 5.30. Los padres entran a las 6.15, quince minutos antes (A). Las 6.30 es la hora en que empieza, no en que termina (C).",
    "consignaEs": "Elegí la oración (A, B o C) que dice lo mismo que el texto."
  },
  {
    "id": "A2K-T3-R1-5-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 1",
    "concept": "Reading · Part 1 (lectura-mensaje-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "Choose the sentence (A, B or C) that says the same as the text.",
    "estimulo": {
      "rotulo": "NOTICE IN A BOOKSHOP",
      "parrafos": [
        "COMICS\nBuy two and get a third one free!\nThis week only."
      ],
      "centrado": true
    },
    "options": [
      "You get three comics for the price of two this week.",
      "All comics are free this week.",
      "You can only buy two comics this week."
    ],
    "correct": 0,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Si comprás dos, el tercero es gratis: te llevás tres y pagás dos. Gratis es solo el tercero (B). El cartel no pone un máximo de compra (C): «only» va con «this week».",
    "consignaEs": "Elegí la oración (A, B o C) que dice lo mismo que el texto."
  },
  {
    "id": "A2K-T3-R1-6-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 1",
    "concept": "Reading · Part 1 (lectura-mensaje-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "Choose the sentence (A, B or C) that says the same as the text.",
    "estimulo": {
      "rotulo": "NOTE ON THE FRIDGE",
      "parrafos": [
        "Tom – Grandma is arriving at four, not five. I’m still at work then, so please open the door for her and make her some tea. Mum"
      ]
    },
    "options": [
      "Mum will be home before Grandma arrives.",
      "Grandma is coming later than planned.",
      "Tom has to be at home at four o’clock."
    ],
    "correct": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "La abuela llega a las cuatro y mamá todavía está en el trabajo: Tom tiene que estar en casa para abrirle. La abuela llega antes de lo pensado, no después (B), y mamá no llega a tiempo (A).",
    "consignaEs": "Elegí la oración (A, B o C) que dice lo mismo que el texto."
  },
  {
    "id": "A2K-T3-R2-1-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 2",
    "concept": "Reading · Part 2 (lectura-emparejar-textos)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "Who looks after their pet with another person in the family?",
    "estimulo": {
      "rotulo": "READ THE THREE TEXTS",
      "titulo": "My pet",
      "parrafos": [
        "[[Holly]]\nMy dog Max is about two years old. We got him from a centre for dogs without homes, so we don’t know when his birthday is. I walk him before school every morning, even when it rains, and my brother takes him out in the evening. Max is afraid of loud noises, so he hides under my bed when there’s a storm. Last summer he learned to swim in the river near our house. Now we can’t keep him out of the water!",
        "[[Amir]]\nI have two fish, and they live in a tank in my bedroom. I asked my parents for a cat, but they said no because our flat is small. So I chose fish. They were cheap, but the tank cost a lot, and I paid for half of it myself. I feed them once a day and clean the tank every Saturday. It takes an hour. People think fish are boring, but I love watching them before I go to sleep.",
        "[[Kim]]\nMy rabbit, Coco, was a present from my grandparents when I was ten. She lives in the garden in summer and in the kitchen in winter. She eats vegetables, and sometimes she eats my mum’s flowers too! My mum gets quite angry about that. Coco doesn’t like it when visitors pick her up, but she always comes when I call her name. Next month I’m taking her to a pet show at my school."
      ]
    },
    "options": [
      "Holly",
      "Amir",
      "Kim"
    ],
    "correct": 0,
    "avisoParte": {
      "titulo": "Reading · Part 2",
      "texto": "Tres textos sobre personas y 7 preguntas. Para cada pregunta, elegí de qué texto es la respuesta."
    },
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Holly pasea a Max a la mañana y su hermano lo saca a la tarde: se reparten el trabajo. Amir alimenta y limpia él solo, y Kim no dice que alguien la ayude.",
    "consignaEs": "¿Quién cuida a su mascota junto con otra persona de su familia?"
  },
  {
    "id": "A2K-T3-R2-2-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 2",
    "concept": "Reading · Part 2 (lectura-emparejar-textos)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "Who wanted a different kind of animal at first?",
    "estimulo": {
      "rotulo": "READ THE THREE TEXTS",
      "titulo": "My pet",
      "parrafos": [
        "[[Holly]]\nMy dog Max is about two years old. We got him from a centre for dogs without homes, so we don’t know when his birthday is. I walk him before school every morning, even when it rains, and my brother takes him out in the evening. Max is afraid of loud noises, so he hides under my bed when there’s a storm. Last summer he learned to swim in the river near our house. Now we can’t keep him out of the water!",
        "[[Amir]]\nI have two fish, and they live in a tank in my bedroom. I asked my parents for a cat, but they said no because our flat is small. So I chose fish. They were cheap, but the tank cost a lot, and I paid for half of it myself. I feed them once a day and clean the tank every Saturday. It takes an hour. People think fish are boring, but I love watching them before I go to sleep.",
        "[[Kim]]\nMy rabbit, Coco, was a present from my grandparents when I was ten. She lives in the garden in summer and in the kitchen in winter. She eats vegetables, and sometimes she eats my mum’s flowers too! My mum gets quite angry about that. Coco doesn’t like it when visitors pick her up, but she always comes when I call her name. Next month I’m taking her to a pet show at my school."
      ]
    },
    "options": [
      "Holly",
      "Amir",
      "Kim"
    ],
    "correct": 1,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Amir pidió un gato, pero sus padres dijeron que no porque el departamento es chico: «So I chose fish». A Kim la coneja se la regalaron, y Holly no habla de otro animal.",
    "consignaEs": "¿Quién quería otro tipo de animal al principio?"
  },
  {
    "id": "A2K-T3-R2-3-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 2",
    "concept": "Reading · Part 2 (lectura-emparejar-textos)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "Whose pet sometimes makes a person in the family angry?",
    "estimulo": {
      "rotulo": "READ THE THREE TEXTS",
      "titulo": "My pet",
      "parrafos": [
        "[[Holly]]\nMy dog Max is about two years old. We got him from a centre for dogs without homes, so we don’t know when his birthday is. I walk him before school every morning, even when it rains, and my brother takes him out in the evening. Max is afraid of loud noises, so he hides under my bed when there’s a storm. Last summer he learned to swim in the river near our house. Now we can’t keep him out of the water!",
        "[[Amir]]\nI have two fish, and they live in a tank in my bedroom. I asked my parents for a cat, but they said no because our flat is small. So I chose fish. They were cheap, but the tank cost a lot, and I paid for half of it myself. I feed them once a day and clean the tank every Saturday. It takes an hour. People think fish are boring, but I love watching them before I go to sleep.",
        "[[Kim]]\nMy rabbit, Coco, was a present from my grandparents when I was ten. She lives in the garden in summer and in the kitchen in winter. She eats vegetables, and sometimes she eats my mum’s flowers too! My mum gets quite angry about that. Coco doesn’t like it when visitors pick her up, but she always comes when I call her name. Next month I’m taking her to a pet show at my school."
      ]
    },
    "options": [
      "Holly",
      "Amir",
      "Kim"
    ],
    "correct": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Coco a veces se come las flores de la mamá de Kim: «My mum gets quite angry about that». En los otros dos textos nadie se enoja con la mascota.",
    "consignaEs": "¿De quién es la mascota que a veces hace enojar a alguien de su familia?"
  },
  {
    "id": "A2K-T3-R2-4-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 2",
    "concept": "Reading · Part 2 (lectura-emparejar-textos)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "Who used some of their own money for their pet?",
    "estimulo": {
      "rotulo": "READ THE THREE TEXTS",
      "titulo": "My pet",
      "parrafos": [
        "[[Holly]]\nMy dog Max is about two years old. We got him from a centre for dogs without homes, so we don’t know when his birthday is. I walk him before school every morning, even when it rains, and my brother takes him out in the evening. Max is afraid of loud noises, so he hides under my bed when there’s a storm. Last summer he learned to swim in the river near our house. Now we can’t keep him out of the water!",
        "[[Amir]]\nI have two fish, and they live in a tank in my bedroom. I asked my parents for a cat, but they said no because our flat is small. So I chose fish. They were cheap, but the tank cost a lot, and I paid for half of it myself. I feed them once a day and clean the tank every Saturday. It takes an hour. People think fish are boring, but I love watching them before I go to sleep.",
        "[[Kim]]\nMy rabbit, Coco, was a present from my grandparents when I was ten. She lives in the garden in summer and in the kitchen in winter. She eats vegetables, and sometimes she eats my mum’s flowers too! My mum gets quite angry about that. Coco doesn’t like it when visitors pick her up, but she always comes when I call her name. Next month I’m taking her to a pet show at my school."
      ]
    },
    "options": [
      "Holly",
      "Amir",
      "Kim"
    ],
    "correct": 1,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "La pecera salió cara y Amir pagó la mitad: «I paid for half of it myself». La coneja de Kim fue un regalo, y Holly no habla de plata.",
    "consignaEs": "¿Quién usó parte de su propio dinero para su mascota?"
  },
  {
    "id": "A2K-T3-R2-5-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 2",
    "concept": "Reading · Part 2 (lectura-emparejar-textos)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "Whose pet goes to a special place when it is afraid?",
    "estimulo": {
      "rotulo": "READ THE THREE TEXTS",
      "titulo": "My pet",
      "parrafos": [
        "[[Holly]]\nMy dog Max is about two years old. We got him from a centre for dogs without homes, so we don’t know when his birthday is. I walk him before school every morning, even when it rains, and my brother takes him out in the evening. Max is afraid of loud noises, so he hides under my bed when there’s a storm. Last summer he learned to swim in the river near our house. Now we can’t keep him out of the water!",
        "[[Amir]]\nI have two fish, and they live in a tank in my bedroom. I asked my parents for a cat, but they said no because our flat is small. So I chose fish. They were cheap, but the tank cost a lot, and I paid for half of it myself. I feed them once a day and clean the tank every Saturday. It takes an hour. People think fish are boring, but I love watching them before I go to sleep.",
        "[[Kim]]\nMy rabbit, Coco, was a present from my grandparents when I was ten. She lives in the garden in summer and in the kitchen in winter. She eats vegetables, and sometimes she eats my mum’s flowers too! My mum gets quite angry about that. Coco doesn’t like it when visitors pick her up, but she always comes when I call her name. Next month I’m taking her to a pet show at my school."
      ]
    },
    "options": [
      "Holly",
      "Amir",
      "Kim"
    ],
    "correct": 0,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Max les tiene miedo a los ruidos fuertes y se esconde abajo de la cama de Holly cuando hay tormenta. A Coco no le gusta que la levanten, pero el texto no dice adónde va.",
    "consignaEs": "¿De quién es la mascota que va a un lugar especial cuando tiene miedo?"
  },
  {
    "id": "A2K-T3-R2-6-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 2",
    "concept": "Reading · Part 2 (lectura-emparejar-textos)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "Who is going to show their pet to other people soon?",
    "estimulo": {
      "rotulo": "READ THE THREE TEXTS",
      "titulo": "My pet",
      "parrafos": [
        "[[Holly]]\nMy dog Max is about two years old. We got him from a centre for dogs without homes, so we don’t know when his birthday is. I walk him before school every morning, even when it rains, and my brother takes him out in the evening. Max is afraid of loud noises, so he hides under my bed when there’s a storm. Last summer he learned to swim in the river near our house. Now we can’t keep him out of the water!",
        "[[Amir]]\nI have two fish, and they live in a tank in my bedroom. I asked my parents for a cat, but they said no because our flat is small. So I chose fish. They were cheap, but the tank cost a lot, and I paid for half of it myself. I feed them once a day and clean the tank every Saturday. It takes an hour. People think fish are boring, but I love watching them before I go to sleep.",
        "[[Kim]]\nMy rabbit, Coco, was a present from my grandparents when I was ten. She lives in the garden in summer and in the kitchen in winter. She eats vegetables, and sometimes she eats my mum’s flowers too! My mum gets quite angry about that. Coco doesn’t like it when visitors pick her up, but she always comes when I call her name. Next month I’m taking her to a pet show at my school."
      ]
    },
    "options": [
      "Holly",
      "Amir",
      "Kim"
    ],
    "correct": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "El mes que viene Kim lleva a Coco a una muestra de mascotas en la escuela («a pet show»). Holly y Amir no cuentan ningún plan así.",
    "consignaEs": "¿Quién va a mostrar su mascota a otras personas pronto?"
  },
  {
    "id": "A2K-T3-R2-7-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 2",
    "concept": "Reading · Part 2 (lectura-emparejar-textos)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "Who doesn’t know an important date in their pet’s life?",
    "estimulo": {
      "rotulo": "READ THE THREE TEXTS",
      "titulo": "My pet",
      "parrafos": [
        "[[Holly]]\nMy dog Max is about two years old. We got him from a centre for dogs without homes, so we don’t know when his birthday is. I walk him before school every morning, even when it rains, and my brother takes him out in the evening. Max is afraid of loud noises, so he hides under my bed when there’s a storm. Last summer he learned to swim in the river near our house. Now we can’t keep him out of the water!",
        "[[Amir]]\nI have two fish, and they live in a tank in my bedroom. I asked my parents for a cat, but they said no because our flat is small. So I chose fish. They were cheap, but the tank cost a lot, and I paid for half of it myself. I feed them once a day and clean the tank every Saturday. It takes an hour. People think fish are boring, but I love watching them before I go to sleep.",
        "[[Kim]]\nMy rabbit, Coco, was a present from my grandparents when I was ten. She lives in the garden in summer and in the kitchen in winter. She eats vegetables, and sometimes she eats my mum’s flowers too! My mum gets quite angry about that. Coco doesn’t like it when visitors pick her up, but she always comes when I call her name. Next month I’m taking her to a pet show at my school."
      ]
    },
    "options": [
      "Holly",
      "Amir",
      "Kim"
    ],
    "correct": 0,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "A Max lo trajeron de un centro para perros sin casa, «so we don’t know when his birthday is». Kim sabe cuándo recibió a Coco, y Amir no habla de fechas.",
    "consignaEs": "¿Quién no sabe una fecha importante en la vida de su mascota?"
  },
  {
    "id": "A2K-T3-R3-1-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 3",
    "concept": "Reading · Part 3 (lectura-larga-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "Where did Grace get the idea for the radio station?",
    "estimulo": {
      "rotulo": "ARTICLE",
      "titulo": "Radio Hillside",
      "parrafos": [
        "Every Friday at lunchtime, the students at Hillside School hear a friendly voice: ‘Hello, this is Radio Hillside!’ The voice belongs to thirteen-year-old Grace Kim, who started the school radio station last October. Grace got the idea when she visited her cousin’s school in Canada, where the students had their own radio programme.",
        "At first, the head teacher wasn’t sure about it. He thought the students would only want to play loud music. So Grace wrote a plan for the first four programmes, with school news, interviews with teachers and a quiz. When he read it, he said yes, and he gave her a small room next to the library.",
        "The first programme didn’t go well. The sound was so bad that nobody could hear the quiz questions. A parent who works for a TV company heard about the problem and gave the school a better microphone. Now twelve students work on the programme. Some write the news, some choose the music, and two of them speak on the radio.",
        "Grace’s favourite part is the interviews. ‘I was really afraid of talking to adults,’ she says, ‘but now it’s easy.’ Her best interview was with the school cook, who once worked on a ship. Next term, the team wants to make a programme in Spanish and French, with help from the language teachers."
      ]
    },
    "options": [
      "from a TV programme",
      "from her head teacher",
      "from a school in another country"
    ],
    "correct": 2,
    "avisoParte": {
      "titulo": "Reading · Part 3",
      "texto": "Un texto largo y 5 preguntas. Para cada una, elegí A, B o C."
    },
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "La idea le vino cuando visitó la escuela de su prima en Canadá, donde los alumnos tenían su programa de radio. El director al principio dudaba (B), y la tele aparece después, por otro motivo (A).",
    "consignaEs": "¿De dónde sacó Grace la idea para la radio?"
  },
  {
    "id": "A2K-T3-R3-2-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 3",
    "concept": "Reading · Part 3 (lectura-larga-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "Why did the head teacher say yes?",
    "estimulo": {
      "rotulo": "ARTICLE",
      "titulo": "Radio Hillside",
      "parrafos": [
        "Every Friday at lunchtime, the students at Hillside School hear a friendly voice: ‘Hello, this is Radio Hillside!’ The voice belongs to thirteen-year-old Grace Kim, who started the school radio station last October. Grace got the idea when she visited her cousin’s school in Canada, where the students had their own radio programme.",
        "At first, the head teacher wasn’t sure about it. He thought the students would only want to play loud music. So Grace wrote a plan for the first four programmes, with school news, interviews with teachers and a quiz. When he read it, he said yes, and he gave her a small room next to the library.",
        "The first programme didn’t go well. The sound was so bad that nobody could hear the quiz questions. A parent who works for a TV company heard about the problem and gave the school a better microphone. Now twelve students work on the programme. Some write the news, some choose the music, and two of them speak on the radio.",
        "Grace’s favourite part is the interviews. ‘I was really afraid of talking to adults,’ she says, ‘but now it’s easy.’ Her best interview was with the school cook, who once worked on a ship. Next term, the team wants to make a programme in Spanish and French, with help from the language teachers."
      ]
    },
    "options": [
      "Grace showed him what she wanted to do.",
      "The students promised not to play music.",
      "A parent asked him to agree."
    ],
    "correct": 0,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Grace escribió un plan de los primeros cuatro programas y, cuando el director lo leyó, dijo que sí. Nadie prometió no pasar música (B), y el padre aparece después, para ayudar con el sonido (C).",
    "consignaEs": "¿Por qué dijo que sí el director de la escuela?"
  },
  {
    "id": "A2K-T3-R3-3-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 3",
    "concept": "Reading · Part 3 (lectura-larga-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "What was the problem with the first programme?",
    "estimulo": {
      "rotulo": "ARTICLE",
      "titulo": "Radio Hillside",
      "parrafos": [
        "Every Friday at lunchtime, the students at Hillside School hear a friendly voice: ‘Hello, this is Radio Hillside!’ The voice belongs to thirteen-year-old Grace Kim, who started the school radio station last October. Grace got the idea when she visited her cousin’s school in Canada, where the students had their own radio programme.",
        "At first, the head teacher wasn’t sure about it. He thought the students would only want to play loud music. So Grace wrote a plan for the first four programmes, with school news, interviews with teachers and a quiz. When he read it, he said yes, and he gave her a small room next to the library.",
        "The first programme didn’t go well. The sound was so bad that nobody could hear the quiz questions. A parent who works for a TV company heard about the problem and gave the school a better microphone. Now twelve students work on the programme. Some write the news, some choose the music, and two of them speak on the radio.",
        "Grace’s favourite part is the interviews. ‘I was really afraid of talking to adults,’ she says, ‘but now it’s easy.’ Her best interview was with the school cook, who once worked on a ship. Next term, the team wants to make a programme in Spanish and French, with help from the language teachers."
      ]
    },
    "options": [
      "The quiz was too difficult.",
      "People couldn’t hear it well.",
      "There weren’t enough students to help."
    ],
    "correct": 1,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "«The sound was so bad that nobody could hear the quiz questions»: se escuchaba mal. Las preguntas no eran difíciles: no se oían (A). De cuántos alumnos ayudaban ese día no dice nada (C).",
    "consignaEs": "¿Cuál fue el problema con el primer programa?"
  },
  {
    "id": "A2K-T3-R3-4-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 3",
    "concept": "Reading · Part 3 (lectura-larga-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "What does Grace say about doing interviews?",
    "estimulo": {
      "rotulo": "ARTICLE",
      "titulo": "Radio Hillside",
      "parrafos": [
        "Every Friday at lunchtime, the students at Hillside School hear a friendly voice: ‘Hello, this is Radio Hillside!’ The voice belongs to thirteen-year-old Grace Kim, who started the school radio station last October. Grace got the idea when she visited her cousin’s school in Canada, where the students had their own radio programme.",
        "At first, the head teacher wasn’t sure about it. He thought the students would only want to play loud music. So Grace wrote a plan for the first four programmes, with school news, interviews with teachers and a quiz. When he read it, he said yes, and he gave her a small room next to the library.",
        "The first programme didn’t go well. The sound was so bad that nobody could hear the quiz questions. A parent who works for a TV company heard about the problem and gave the school a better microphone. Now twelve students work on the programme. Some write the news, some choose the music, and two of them speak on the radio.",
        "Grace’s favourite part is the interviews. ‘I was really afraid of talking to adults,’ she says, ‘but now it’s easy.’ Her best interview was with the school cook, who once worked on a ship. Next term, the team wants to make a programme in Spanish and French, with help from the language teachers."
      ]
    },
    "options": [
      "She prefers talking to students.",
      "She still finds them difficult.",
      "She feels different about them now."
    ],
    "correct": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Antes le daba miedo hablar con adultos, «but now it’s easy»: cambió lo que siente. Ya no le cuestan (B), y no dice que prefiera entrevistar a alumnos (A).",
    "consignaEs": "¿Qué dice Grace sobre hacer entrevistas?"
  },
  {
    "id": "A2K-T3-R3-5-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 3",
    "concept": "Reading · Part 3 (lectura-larga-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "What does the team want to do next term?",
    "estimulo": {
      "rotulo": "ARTICLE",
      "titulo": "Radio Hillside",
      "parrafos": [
        "Every Friday at lunchtime, the students at Hillside School hear a friendly voice: ‘Hello, this is Radio Hillside!’ The voice belongs to thirteen-year-old Grace Kim, who started the school radio station last October. Grace got the idea when she visited her cousin’s school in Canada, where the students had their own radio programme.",
        "At first, the head teacher wasn’t sure about it. He thought the students would only want to play loud music. So Grace wrote a plan for the first four programmes, with school news, interviews with teachers and a quiz. When he read it, he said yes, and he gave her a small room next to the library.",
        "The first programme didn’t go well. The sound was so bad that nobody could hear the quiz questions. A parent who works for a TV company heard about the problem and gave the school a better microphone. Now twelve students work on the programme. Some write the news, some choose the music, and two of them speak on the radio.",
        "Grace’s favourite part is the interviews. ‘I was really afraid of talking to adults,’ she says, ‘but now it’s easy.’ Her best interview was with the school cook, who once worked on a ship. Next term, the team wants to make a programme in Spanish and French, with help from the language teachers."
      ]
    },
    "options": [
      "make a programme in other languages",
      "interview the language teachers",
      "visit a school in Canada"
    ],
    "correct": 0,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Quieren hacer un programa en español y en francés. Los profesores de idiomas van a ayudar, no a ser entrevistados (B). El viaje a Canadá ya pasó y fue de Grace sola (C).",
    "consignaEs": "¿Qué quiere hacer el equipo el trimestre que viene?"
  },
  {
    "id": "A2K-T3-R4-1-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 4",
    "concept": "Reading · Part 4 (cloze-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_03",
    "difficulty": 2,
    "question": "Choose the best word for gap (1).",
    "estimulo": {
      "titulo": "Kites",
      "parrafos": [
        "People have flown kites for more than two thousand years. The first ones were [[(1) ____]] in China from light wood and silk. Later, people (2) …… to use paper, which was much cheaper.",
        "Kites were not only toys. Soldiers used them to (3) …… messages to people far away, and scientists used them to learn about the weather.",
        "Today, flying a kite is a popular hobby all over the world. You don’t (4) …… much: just a kite, some string and a windy day. A beach or a hill is a good (5) …… to fly one, because there are no trees or buildings in the way.",
        "In many countries there are kite festivals every year. Thousands of people come to (6) …… the sky fill with colour."
      ]
    },
    "options": [
      "done",
      "made",
      "put"
    ],
    "correct": 1,
    "avisoParte": {
      "titulo": "Reading · Part 4",
      "texto": "Un texto con 6 huecos. Para cada hueco, elegí la palabra que va: A, B o C."
    },
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Para decir de qué material es una cosa se usa «made from»: «made in China from light wood and silk». «Done» es para una tarea o una acción, y «put» es poner algo en un lugar.",
    "consignaEs": "Elegí la mejor palabra para el espacio (1)."
  },
  {
    "id": "A2K-T3-R4-2-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 4",
    "concept": "Reading · Part 4 (cloze-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_03",
    "difficulty": 3,
    "question": "Choose the best word for gap (2).",
    "estimulo": {
      "titulo": "Kites",
      "parrafos": [
        "People have flown kites for more than two thousand years. The first ones were (1) …… in China from light wood and silk. Later, people [[(2) ____]] to use paper, which was much cheaper.",
        "Kites were not only toys. Soldiers used them to (3) …… messages to people far away, and scientists used them to learn about the weather.",
        "Today, flying a kite is a popular hobby all over the world. You don’t (4) …… much: just a kite, some string and a windy day. A beach or a hill is a good (5) …… to fly one, because there are no trees or buildings in the way.",
        "In many countries there are kite festivals every year. Thousands of people come to (6) …… the sky fill with colour."
      ]
    },
    "options": [
      "began",
      "became",
      "turned"
    ],
    "correct": 0,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "«Began to use» = empezaron a usar. «Became» y «turned» hablan de convertirse en algo, y ninguno de los dos puede ir seguido de «to use».",
    "consignaEs": "Elegí la mejor palabra para el espacio (2)."
  },
  {
    "id": "A2K-T3-R4-3-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 4",
    "concept": "Reading · Part 4 (cloze-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_03",
    "difficulty": 2,
    "question": "Choose the best word for gap (3).",
    "estimulo": {
      "titulo": "Kites",
      "parrafos": [
        "People have flown kites for more than two thousand years. The first ones were (1) …… in China from light wood and silk. Later, people (2) …… to use paper, which was much cheaper.",
        "Kites were not only toys. Soldiers used them to [[(3) ____]] messages to people far away, and scientists used them to learn about the weather.",
        "Today, flying a kite is a popular hobby all over the world. You don’t (4) …… much: just a kite, some string and a windy day. A beach or a hill is a good (5) …… to fly one, because there are no trees or buildings in the way.",
        "In many countries there are kite festivals every year. Thousands of people come to (6) …… the sky fill with colour."
      ]
    },
    "options": [
      "say",
      "speak",
      "send"
    ],
    "correct": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Un mensaje se manda: «send messages to people far away». «Say» y «speak» son de hablar, y con un barrilete no se habla: se hace llegar algo lejos.",
    "consignaEs": "Elegí la mejor palabra para el espacio (3)."
  },
  {
    "id": "A2K-T3-R4-4-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 4",
    "concept": "Reading · Part 4 (cloze-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_03",
    "difficulty": 2,
    "question": "Choose the best word for gap (4).",
    "estimulo": {
      "titulo": "Kites",
      "parrafos": [
        "People have flown kites for more than two thousand years. The first ones were (1) …… in China from light wood and silk. Later, people (2) …… to use paper, which was much cheaper.",
        "Kites were not only toys. Soldiers used them to (3) …… messages to people far away, and scientists used them to learn about the weather.",
        "Today, flying a kite is a popular hobby all over the world. You don’t [[(4) ____]] much: just a kite, some string and a windy day. A beach or a hill is a good (5) …… to fly one, because there are no trees or buildings in the way.",
        "In many countries there are kite festivals every year. Thousands of people come to (6) …… the sky fill with colour."
      ]
    },
    "options": [
      "need",
      "must",
      "should"
    ],
    "correct": 0,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "«You don’t need much» = no hace falta mucho. «Must» y «should» no van después de «don’t», y además les tiene que seguir otro verbo.",
    "consignaEs": "Elegí la mejor palabra para el espacio (4)."
  },
  {
    "id": "A2K-T3-R4-5-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 4",
    "concept": "Reading · Part 4 (cloze-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_03",
    "difficulty": 2,
    "question": "Choose the best word for gap (5).",
    "estimulo": {
      "titulo": "Kites",
      "parrafos": [
        "People have flown kites for more than two thousand years. The first ones were (1) …… in China from light wood and silk. Later, people (2) …… to use paper, which was much cheaper.",
        "Kites were not only toys. Soldiers used them to (3) …… messages to people far away, and scientists used them to learn about the weather.",
        "Today, flying a kite is a popular hobby all over the world. You don’t (4) …… much: just a kite, some string and a windy day. A beach or a hill is a good [[(5) ____]] to fly one, because there are no trees or buildings in the way.",
        "In many countries there are kite festivals every year. Thousands of people come to (6) …… the sky fill with colour."
      ]
    },
    "options": [
      "room",
      "place",
      "part"
    ],
    "correct": 1,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Una playa o una colina es un buen lugar: «a good place to fly one». «Room» es una habitación o espacio libre adentro de algo, y «part» es un pedazo de otra cosa.",
    "consignaEs": "Elegí la mejor palabra para el espacio (5)."
  },
  {
    "id": "A2K-T3-R4-6-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 4",
    "concept": "Reading · Part 4 (cloze-3op)",
    "role": "skill_check",
    "kind": "mc",
    "skill": "COMP_03",
    "difficulty": 3,
    "question": "Choose the best word for gap (6).",
    "estimulo": {
      "titulo": "Kites",
      "parrafos": [
        "People have flown kites for more than two thousand years. The first ones were (1) …… in China from light wood and silk. Later, people (2) …… to use paper, which was much cheaper.",
        "Kites were not only toys. Soldiers used them to (3) …… messages to people far away, and scientists used them to learn about the weather.",
        "Today, flying a kite is a popular hobby all over the world. You don’t (4) …… much: just a kite, some string and a windy day. A beach or a hill is a good (5) …… to fly one, because there are no trees or buildings in the way.",
        "In many countries there are kite festivals every year. Thousands of people come to [[(6) ____]] the sky fill with colour."
      ]
    },
    "options": [
      "look",
      "listen",
      "watch"
    ],
    "correct": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "«Watch» lleva la cosa directamente: «watch the sky». «Look» necesita «at» («look at the sky») y «listen» es escuchar.",
    "consignaEs": "Elegí la mejor palabra para el espacio (6)."
  },
  {
    "id": "A2K-T3-R5-1-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 5",
    "concept": "Reading · Part 5 (cloze-abierto)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "PROD_01",
    "difficulty": 2,
    "question": "Write ONE word for gap (1).",
    "estimulo": {
      "rotulo": "EMAIL",
      "parrafos": [
        "From: Sara\nTo: Emily",
        "Hi Emily,\nGuess what! We moved to our new house [[(1) ____]] Saturday. It’s in a small village, about ten kilometres (2) …… the city.\nI’ve got my own bedroom now, (3) …… I don’t have to share with my sister any more. The garden is very big, and there (4) …… an old apple tree in the middle. My dad wants to build a tree house in (5) ……!\nWould you like (6) …… come and stay next weekend? I can show you everything.\nLove,\nSara"
      ]
    },
    "answer": "last",
    "acceptVariants": [
      "on"
    ],
    "avisoParte": {
      "titulo": "Reading · Part 5",
      "texto": "Un texto con 6 huecos. Escribí una sola palabra en cada uno."
    },
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "La mudanza ya pasó («moved»): «last Saturday» o «on Saturday». «In» y «at» no van antes de un día de la semana.",
    "consignaEs": "Escribí UNA palabra para el espacio (1)."
  },
  {
    "id": "A2K-T3-R5-2-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 5",
    "concept": "Reading · Part 5 (cloze-abierto)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "PROD_01",
    "difficulty": 2,
    "question": "Write ONE word for gap (2).",
    "estimulo": {
      "rotulo": "EMAIL",
      "parrafos": [
        "From: Sara\nTo: Emily",
        "Hi Emily,\nGuess what! We moved to our new house (1) …… Saturday. It’s in a small village, about ten kilometres [[(2) ____]] the city.\nI’ve got my own bedroom now, (3) …… I don’t have to share with my sister any more. The garden is very big, and there (4) …… an old apple tree in the middle. My dad wants to build a tree house in (5) ……!\nWould you like (6) …… come and stay next weekend? I can show you everything.\nLove,\nSara"
      ]
    },
    "answer": "from",
    "acceptVariants": [],
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Para decir a qué distancia está un lugar de otro se usa «from»: «ten kilometres from the city». «Of» y «to» no se usan así.",
    "consignaEs": "Escribí UNA palabra para el espacio (2)."
  },
  {
    "id": "A2K-T3-R5-3-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 5",
    "concept": "Reading · Part 5 (cloze-abierto)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "PROD_01",
    "difficulty": 3,
    "question": "Write ONE word for gap (3).",
    "estimulo": {
      "rotulo": "EMAIL",
      "parrafos": [
        "From: Sara\nTo: Emily",
        "Hi Emily,\nGuess what! We moved to our new house (1) …… Saturday. It’s in a small village, about ten kilometres (2) …… the city.\nI’ve got my own bedroom now, [[(3) ____]] I don’t have to share with my sister any more. The garden is very big, and there (4) …… an old apple tree in the middle. My dad wants to build a tree house in (5) ……!\nWould you like (6) …… come and stay next weekend? I can show you everything.\nLove,\nSara"
      ]
    },
    "answer": "so",
    "acceptVariants": [
      "and"
    ],
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Tener cuarto propio es la causa, y no compartir es el resultado: «so». También vale «and». «Because» no va: daría vuelta el sentido.",
    "consignaEs": "Escribí UNA palabra para el espacio (3)."
  },
  {
    "id": "A2K-T3-R5-4-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 5",
    "concept": "Reading · Part 5 (cloze-abierto)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "PROD_01",
    "difficulty": 1,
    "question": "Write ONE word for gap (4).",
    "estimulo": {
      "rotulo": "EMAIL",
      "parrafos": [
        "From: Sara\nTo: Emily",
        "Hi Emily,\nGuess what! We moved to our new house (1) …… Saturday. It’s in a small village, about ten kilometres (2) …… the city.\nI’ve got my own bedroom now, (3) …… I don’t have to share with my sister any more. The garden is very big, and there [[(4) ____]] an old apple tree in the middle. My dad wants to build a tree house in (5) ……!\nWould you like (6) …… come and stay next weekend? I can show you everything.\nLove,\nSara"
      ]
    },
    "answer": "is",
    "acceptVariants": [],
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "«There is» va con una sola cosa: «an old apple tree». «There are» sería para varias.",
    "consignaEs": "Escribí UNA palabra para el espacio (4)."
  },
  {
    "id": "A2K-T3-R5-5-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 5",
    "concept": "Reading · Part 5 (cloze-abierto)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "PROD_01",
    "difficulty": 2,
    "question": "Write ONE word for gap (5).",
    "estimulo": {
      "rotulo": "EMAIL",
      "parrafos": [
        "From: Sara\nTo: Emily",
        "Hi Emily,\nGuess what! We moved to our new house (1) …… Saturday. It’s in a small village, about ten kilometres (2) …… the city.\nI’ve got my own bedroom now, (3) …… I don’t have to share with my sister any more. The garden is very big, and there (4) …… an old apple tree in the middle. My dad wants to build a tree house in [[(5) ____]]!\nWould you like (6) …… come and stay next weekend? I can show you everything.\nLove,\nSara"
      ]
    },
    "answer": "it",
    "acceptVariants": [],
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "La casita va en el árbol, que se acaba de nombrar: «it» lo reemplaza, «in it». «Them» sería para varias cosas, y acá el árbol es uno solo.",
    "consignaEs": "Escribí UNA palabra para el espacio (5)."
  },
  {
    "id": "A2K-T3-R5-6-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Reading · Part 5",
    "concept": "Reading · Part 5 (cloze-abierto)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "PROD_01",
    "difficulty": 2,
    "question": "Write ONE word for gap (6).",
    "estimulo": {
      "rotulo": "EMAIL",
      "parrafos": [
        "From: Sara\nTo: Emily",
        "Hi Emily,\nGuess what! We moved to our new house (1) …… Saturday. It’s in a small village, about ten kilometres (2) …… the city.\nI’ve got my own bedroom now, (3) …… I don’t have to share with my sister any more. The garden is very big, and there (4) …… an old apple tree in the middle. My dad wants to build a tree house in (5) ……!\nWould you like [[(6) ____]] come and stay next weekend? I can show you everything.\nLove,\nSara"
      ]
    },
    "answer": "to",
    "acceptVariants": [],
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Después de «would like» el verbo va con «to»: «Would you like to come…?».",
    "consignaEs": "Escribí UNA palabra para el espacio (6)."
  },
  {
    "id": "A2K-T3-W6-1-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Writing · Part 6",
    "concept": "Writing · Part 6 (escritura-mensaje-guiado)",
    "kind": "free",
    "skill": "PROD_02",
    "difficulty": 4,
    "question": "Your English friend Kim wants to visit your town in the summer holidays. Write an email to Kim. In your email: say what the weather is like in your town in summer; tell Kim about one place to visit; ask how long Kim wants to stay. Write 25 words or more.",
    "placeholder": "Hi Kim, …",
    "feedback": "Texto guardado. Podés cambiarlo hasta entregar.",
    "avisoParte": {
      "titulo": "Writing · Part 6",
      "texto": "Escribí un mensaje corto, de 25 palabras o más. Respondé las tres cosas que pide la consigna."
    },
    "consignaEs": "Tu amigo inglés Kim quiere visitar tu ciudad en las vacaciones de verano. Escribile un correo a Kim. En tu correo: decí cómo es el tiempo en tu ciudad en verano; contale a Kim sobre un lugar para visitar; preguntale cuánto tiempo quiere quedarse. Escribí 25 palabras o más."
  },
  {
    "id": "A2K-T3-W7-1-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Writing · Part 7",
    "concept": "Writing · Part 7 (escritura-historia-imagenes)",
    "kind": "free",
    "skill": "PROD_02",
    "difficulty": 4,
    "question": "Look at the three pictures. Write the story shown in the pictures. Write 35 words or more.",
    "placeholder": "One day, …",
    "feedback": "Texto guardado. Podés cambiarlo hasta entregar.",
    "image": "../pdp-assets/b418620c55f5b5ed680e2291eaebb882.jpg",
    "imageAlt": "Tres dibujos sin texto, en fila. Cuentan una historia de izquierda a derecha.",
    "avisoParte": {
      "titulo": "Writing · Part 7",
      "texto": "Mirá los tres dibujos y escribí la historia, de 35 palabras o más."
    },
    "consignaEs": "Mirá los tres dibujos. Escribí la historia que muestran los dibujos. Escribí 35 palabras o más."
  },
  {
    "id": "A2K-T3-W6-1-ADULTO-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Writing · Part 6",
    "concept": "Writing · Part 6 (escritura-mensaje-guiado)",
    "kind": "profe",
    "forma": "pausa",
    "question": "Corrección del adulto. Mostrale tu texto: lo corrige con su hoja.",
    "feedback": "Listo. El puntaje lo anota el adulto.",
    "paraProfe": {
      "criterios": [
        "Los tres puntos de esta consigna: (1) cómo es el tiempo en verano, (2) un lugar para visitar, (3) una pregunta sobre cuánto se queda. Si falta uno, baja Content.",
        "Que sea un mail a un amigo: saludo, mensaje y despedida.",
        "Que tenga 25 palabras o más. Si es más corto, casi siempre falta contenido.",
        "Puntaje: de 0 a 5 en Content, Organisation, Language. Máximo 15. Las bandas están en «Hoja del adulto»."
      ],
      "modelo": "Respuesta de muestra (hay muchas otras posibles): Hi Kim, I’m so happy you want to visit! In summer it’s very hot and sunny here. You must see the river. We can swim there. How long do you want to stay? Write soon, Juli",
      "objetivo": "Leé el texto en la pantalla del chico o de la chica y poné los tres puntajes en papel. En la app marcá cómo lo escribió: solo, con ayuda, o todavía no.",
      "registra": "La app guarda solo esa marca de tres niveles. No guarda el texto ni el puntaje de 0 a 5."
    }
  },
  {
    "id": "A2K-T3-W7-1-ADULTO-S",
    "status": "draft",
    "nivelId": "m2-rw",
    "stage": "Test 3 · Writing · Part 7",
    "concept": "Writing · Part 7 (escritura-historia-imagenes)",
    "kind": "profe",
    "forma": "pausa",
    "question": "Corrección del adulto. Mostrale tu texto: lo corrige con su hoja.",
    "feedback": "Listo. El puntaje lo anota el adulto.",
    "paraProfe": {
      "criterios": [
        "Que la historia cuente los tres dibujos, en orden. Si falta un dibujo, baja Content.",
        "Que las partes estén unidas (and, then, but, because, in the end) y no sean tres frases sueltas.",
        "Que tenga 35 palabras o más. Lo esperable es que la cuente en pasado (played, went, gave). Si se le escapa algún verbo en presente pero la historia se entiende, no baja Content: eso se mira en Language.",
        "Puntaje: de 0 a 5 en Content, Organisation, Language. Máximo 15. Las bandas están en «Hoja del adulto»."
      ],
      "modelo": "Respuesta de muestra (hay muchas otras posibles): Yesterday, Tom and his sister played football in their garden. Tom kicked the ball too hard, and it went into the garden next door. They were worried. But their neighbour wasn’t angry. He gave the ball back and played with them!",
      "objetivo": "Leé el texto en la pantalla del chico o de la chica y poné los tres puntajes en papel. En la app marcá cómo lo escribió: solo, con ayuda, o todavía no.",
      "registra": "La app guarda solo esa marca de tres niveles. No guarda el texto ni el puntaje de 0 a 5."
    }
  },
  {
    "id": "A2K-A2KEY-TEST-3-L-AVISO",
    "status": "draft",
    "nivelId": "m2-l",
    "kind": "concept",
    "stage": "Antes de empezar",
    "concept": "aviso del simulacro (Listening)",
    "feedback": "Empezá cuando quieras.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Antes de empezar",
        "regla": "Estas preguntas son **nuevas**: no están en la práctica por partes. Podés cambiar una respuesta hasta que entregues.",
        "notas": [
          "Para volver a una pregunta, deslizá la pantalla hacia la derecha.",
          "No hay pistas ni explicaciones mientras contestás. El resultado y las explicaciones aparecen al terminar la prueba.",
          "Tiempo de la prueba: 30 minutos. Cuando el tiempo se termina, la prueba se entrega sola."
        ],
        "idea": "Estas preguntas son nuevas: no están en la práctica por partes. Podés cambiar una respuesta hasta que entregues. Para volver a una pregunta, deslizá la pantalla hacia la derecha. No hay pistas ni explicaciones mientras contestás. El resultado y las explicaciones aparecen al terminar la prueba. Tiempo de la prueba: 30 minutos. Cuando el tiempo se termina, la prueba se entrega sola."
      }
    ]
  },
  {
    "id": "A2K-T3-L1-1-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 1",
    "concept": "Listening · Part 1 (escucha-imagen-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "What will the boy wear to the party?",
    "image": "../pdp-assets/3967962cedd8aa543ff6afd387ee9888.jpg",
    "imageAlt": "Tres dibujos con las letras A, B y C: A, a shirt; B, a jumper; C, a T-shirt.",
    "options": [
      "A",
      "B",
      "C"
    ],
    "correct": 2,
    "vozEntrada": "Are you wearing your blue shirt to Dan’s party? It’s too small for me now. I wanted to wear my new jumper, but it’s still wet. I’ll just wear my football T-shirt. Dan won’t mind.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Are you wearing your blue shirt to Dan’s party?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "It’s too small for me now. I wanted to wear my new jumper, but it’s still wet. I’ll just wear my football T-shirt. Dan won’t mind.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/b2cbde0e9159fd6510f0d748022004a0.mp3",
    "audioGrupo": "T3-L1-1",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "La camisa azul le queda chica y el buzo nuevo todavía está mojado. «I’ll just wear my football T-shirt»: va con la remera.",
    "consignaEs": "¿Qué se va a poner el chico para la fiesta?"
  },
  {
    "id": "A2K-T3-L1-2-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 1",
    "concept": "Listening · Part 1 (escucha-imagen-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "Which animals did the girl like best?",
    "image": "../pdp-assets/c79a1da59945fdb66126cb5191453076.jpg",
    "imageAlt": "Tres dibujos con las letras A, B y C: A, the monkeys; B, the lions; C, the elephants.",
    "options": [
      "A",
      "B",
      "C"
    ],
    "correct": 0,
    "vozEntrada": "Did you like the lions, Katie? They were asleep, Dad! The elephants were OK, but they were very far away. I loved the monkeys. One of them took a man’s hat!",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Did you like the lions, Katie?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "They were asleep, Dad! The elephants were OK, but they were very far away. I loved the monkeys. One of them took a man’s hat!",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/a9e91a1a7451c50aea399c099e34c5d5.mp3",
    "audioGrupo": "T3-L1-2",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Los leones estaban dormidos y los elefantes, muy lejos. «I loved the monkeys»: lo que más le gustó fueron los monos.",
    "consignaEs": "¿Qué animales le gustaron más a la chica?"
  },
  {
    "id": "A2K-T3-L1-3-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 1",
    "concept": "Listening · Part 1 (escucha-imagen-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_01",
    "difficulty": 3,
    "question": "What time does the boy’s train leave?",
    "image": "../pdp-assets/35eb96bcaf4f12a1192a064b0d9e4713.jpg",
    "imageAlt": "Tres dibujos con las letras A, B y C: A, 3.10; B, 3.40; C, 4.30.",
    "options": [
      "A",
      "B",
      "C"
    ],
    "correct": 1,
    "vozEntrada": "Excuse me, is the next train to Oxford at ten past three? No, that one doesn’t run on Sundays. The next one is at twenty to four. Oh. Then I’ll get there at half past four. Thanks.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Excuse me, is the next train to Oxford at ten past three?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No, that one doesn’t run on Sundays. The next one is at twenty to four.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Oh. Then I’ll get there at half past four. Thanks.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/c7fa8d649552efb3b0bd31766339abdb.mp3",
    "audioGrupo": "T3-L1-3",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "El de las tres y diez no sale los domingos. El próximo es «at twenty to four»: 3.40. Las cuatro y media es la hora a la que llega, no la de salida.",
    "consignaEs": "¿A qué hora sale el tren del chico?"
  },
  {
    "id": "A2K-T3-L1-4-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 1",
    "concept": "Listening · Part 1 (escucha-imagen-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "What does the girl need to buy?",
    "image": "../pdp-assets/90344972ab8d7e2dd344399348e05a25.jpg",
    "imageAlt": "Tres dibujos con las letras A, B y C: A, a notebook; B, a ruler; C, a school bag.",
    "options": [
      "A",
      "B",
      "C"
    ],
    "correct": 0,
    "vozEntrada": "Hello. Can I help you? Yes, please. I’ve got pens and a ruler at home, but I need a notebook for my science class. The notebooks are over there, next to the school bags. Thank you.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Hello. Can I help you?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, please. I’ve got pens and a ruler at home, but I need a notebook for my science class.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "The notebooks are over there, next to the school bags.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Thank you.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/d02c70dbbfb2b9c86afdf67a1b714637.mp3",
    "audioGrupo": "T3-L1-4",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Lapiceras y regla ya tiene en su casa. Lo que necesita es un cuaderno («I need a notebook»). Las mochilas solo se nombran para decir dónde están los cuadernos.",
    "consignaEs": "¿Qué tiene que comprar la chica?"
  },
  {
    "id": "A2K-T3-L1-5-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 1",
    "concept": "Listening · Part 1 (escucha-imagen-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "Where will they meet tomorrow?",
    "image": "../pdp-assets/d9c12bd16f849b56e00c5adacb9d7579.jpg",
    "imageAlt": "Tres dibujos con las letras A, B y C: A, at the bus station; B, at the library; C, at the café.",
    "options": [
      "A",
      "B",
      "C"
    ],
    "correct": 2,
    "vozEntrada": "Shall we meet at the bus station tomorrow? It’s always so busy there. What about outside the library? The library’s closed on Sundays, and there’s nowhere to sit. Let’s meet at the café in the park. OK. See you there at ten.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Shall we meet at the bus station tomorrow?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "It’s always so busy there. What about outside the library?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "The library’s closed on Sundays, and there’s nowhere to sit. Let’s meet at the café in the park.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "OK. See you there at ten.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/fe257072b2146ffdbe544a1bb8cb35b3.mp3",
    "audioGrupo": "T3-L1-5",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "En la terminal hay mucha gente y la biblioteca está cerrada los domingos. La chica propone el café del parque y el chico acepta: «OK. See you there».",
    "consignaEs": "¿Dónde se van a encontrar mañana?"
  },
  {
    "id": "A2K-T3-L2-1-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 2",
    "concept": "Listening · Part 2 (escucha-notas)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "You will hear a woman giving information to visitors at a castle. Write one word or a number or a date or a time for gap (1).",
    "estimulo": {
      "rotulo": "NOTES",
      "titulo": "GREYSTONE CASTLE",
      "parrafos": [
        "Age of the castle: [[(1) ____]] years\nToday’s tour takes: (2) …… minutes\nOn the top floor, see: the (3) ……\nThe shop sells: books and (4) ……\nToday’s guide: Mr (5) ……"
      ]
    },
    "answer": "600",
    "acceptVariants": [
      "six hundred"
    ],
    "vozEntrada": "Good morning, and welcome to Greystone Castle. Before we start, here is some information. The castle is six hundred years old. A king built it, and then one family lived here until 1950. Our tour today takes forty minutes. It usually takes an hour, but the gardens are closed this week. We will see the kitchen and the bedrooms on the first floor. Then, on the top floor, don’t miss the library. It has more than two thousand old books. After the tour, you can visit our shop. It sells books about the castle and postcards. I’m afraid we don’t sell food or drinks, but there is a café across the road. Your guide today is Mr Barlow. That’s B, A, R, L, O, W. He knows everything about the castle, so please ask him lots of questions!",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Good morning, and welcome to Greystone Castle. Before we start, here is some information. The castle is six hundred years old. A king built it, and then one family lived here until 1950. Our tour today takes forty minutes. It usually takes an hour, but the gardens are closed this week. We will see the kitchen and the bedrooms on the first floor. Then, on the top floor, don’t miss the library. It has more than two thousand old books. After the tour, you can visit our shop. It sells books about the castle and postcards. I’m afraid we don’t sell food or drinks, but there is a café across the road. Your guide today is Mr Barlow. That’s B, A, R, L, O, W. He knows everything about the castle, so please ask him lots of questions!",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_8,
    "audioGrupo": "T3-L2",
    "avisoParte": {
      "titulo": "Listening · Part 2",
      "texto": "Una persona habla. Completá las 5 notas con una palabra o un número. El audio se escucha dos veces."
    },
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "«The castle is six hundred years old»: 600. El 1950 es el año hasta el que vivió ahí una familia, no la edad.",
    "consignaEs": "Vas a escuchar a una mujer que les da información a los visitantes de un castillo. Escribí una palabra, un número, una fecha o una hora para el espacio (1)."
  },
  {
    "id": "A2K-T3-L2-2-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 2",
    "concept": "Listening · Part 2 (escucha-notas)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "You will hear a woman giving information to visitors at a castle. Write one word or a number or a date or a time for gap (2).",
    "estimulo": {
      "rotulo": "NOTES",
      "titulo": "GREYSTONE CASTLE",
      "parrafos": [
        "Age of the castle: (1) …… years\nToday’s tour takes: [[(2) ____]] minutes\nOn the top floor, see: the (3) ……\nThe shop sells: books and (4) ……\nToday’s guide: Mr (5) ……"
      ]
    },
    "answer": "40",
    "acceptVariants": [
      "forty"
    ],
    "vozEntrada": "Good morning, and welcome to Greystone Castle. Before we start, here is some information. The castle is six hundred years old. A king built it, and then one family lived here until 1950. Our tour today takes forty minutes. It usually takes an hour, but the gardens are closed this week. We will see the kitchen and the bedrooms on the first floor. Then, on the top floor, don’t miss the library. It has more than two thousand old books. After the tour, you can visit our shop. It sells books about the castle and postcards. I’m afraid we don’t sell food or drinks, but there is a café across the road. Your guide today is Mr Barlow. That’s B, A, R, L, O, W. He knows everything about the castle, so please ask him lots of questions!",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Good morning, and welcome to Greystone Castle. Before we start, here is some information. The castle is six hundred years old. A king built it, and then one family lived here until 1950. Our tour today takes forty minutes. It usually takes an hour, but the gardens are closed this week. We will see the kitchen and the bedrooms on the first floor. Then, on the top floor, don’t miss the library. It has more than two thousand old books. After the tour, you can visit our shop. It sells books about the castle and postcards. I’m afraid we don’t sell food or drinks, but there is a café across the road. Your guide today is Mr Barlow. That’s B, A, R, L, O, W. He knows everything about the castle, so please ask him lots of questions!",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_8,
    "audioGrupo": "T3-L2",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Hoy la visita dura «forty minutes»: 40. Una hora es lo que dura normalmente, cuando los jardines están abiertos.",
    "consignaEs": "Vas a escuchar a una mujer que les da información a los visitantes de un castillo. Escribí una palabra, un número, una fecha o una hora para el espacio (2)."
  },
  {
    "id": "A2K-T3-L2-3-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 2",
    "concept": "Listening · Part 2 (escucha-notas)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "You will hear a woman giving information to visitors at a castle. Write one word or a number or a date or a time for gap (3).",
    "estimulo": {
      "rotulo": "NOTES",
      "titulo": "GREYSTONE CASTLE",
      "parrafos": [
        "Age of the castle: (1) …… years\nToday’s tour takes: (2) …… minutes\nOn the top floor, see: the [[(3) ____]]\nThe shop sells: books and (4) ……\nToday’s guide: Mr (5) ……"
      ]
    },
    "answer": "library",
    "acceptVariants": [],
    "vozEntrada": "Good morning, and welcome to Greystone Castle. Before we start, here is some information. The castle is six hundred years old. A king built it, and then one family lived here until 1950. Our tour today takes forty minutes. It usually takes an hour, but the gardens are closed this week. We will see the kitchen and the bedrooms on the first floor. Then, on the top floor, don’t miss the library. It has more than two thousand old books. After the tour, you can visit our shop. It sells books about the castle and postcards. I’m afraid we don’t sell food or drinks, but there is a café across the road. Your guide today is Mr Barlow. That’s B, A, R, L, O, W. He knows everything about the castle, so please ask him lots of questions!",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Good morning, and welcome to Greystone Castle. Before we start, here is some information. The castle is six hundred years old. A king built it, and then one family lived here until 1950. Our tour today takes forty minutes. It usually takes an hour, but the gardens are closed this week. We will see the kitchen and the bedrooms on the first floor. Then, on the top floor, don’t miss the library. It has more than two thousand old books. After the tour, you can visit our shop. It sells books about the castle and postcards. I’m afraid we don’t sell food or drinks, but there is a café across the road. Your guide today is Mr Barlow. That’s B, A, R, L, O, W. He knows everything about the castle, so please ask him lots of questions!",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_8,
    "audioGrupo": "T3-L2",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "La cocina y los dormitorios están en el primer piso. En el último piso, «don’t miss the library»: la biblioteca.",
    "consignaEs": "Vas a escuchar a una mujer que les da información a los visitantes de un castillo. Escribí una palabra, un número, una fecha o una hora para el espacio (3)."
  },
  {
    "id": "A2K-T3-L2-4-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 2",
    "concept": "Listening · Part 2 (escucha-notas)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "COMP_01",
    "difficulty": 3,
    "question": "You will hear a woman giving information to visitors at a castle. Write one word or a number or a date or a time for gap (4).",
    "estimulo": {
      "rotulo": "NOTES",
      "titulo": "GREYSTONE CASTLE",
      "parrafos": [
        "Age of the castle: (1) …… years\nToday’s tour takes: (2) …… minutes\nOn the top floor, see: the (3) ……\nThe shop sells: books and [[(4) ____]]\nToday’s guide: Mr (5) ……"
      ]
    },
    "answer": "postcards",
    "acceptVariants": [
      "post cards",
      "post-cards"
    ],
    "vozEntrada": "Good morning, and welcome to Greystone Castle. Before we start, here is some information. The castle is six hundred years old. A king built it, and then one family lived here until 1950. Our tour today takes forty minutes. It usually takes an hour, but the gardens are closed this week. We will see the kitchen and the bedrooms on the first floor. Then, on the top floor, don’t miss the library. It has more than two thousand old books. After the tour, you can visit our shop. It sells books about the castle and postcards. I’m afraid we don’t sell food or drinks, but there is a café across the road. Your guide today is Mr Barlow. That’s B, A, R, L, O, W. He knows everything about the castle, so please ask him lots of questions!",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Good morning, and welcome to Greystone Castle. Before we start, here is some information. The castle is six hundred years old. A king built it, and then one family lived here until 1950. Our tour today takes forty minutes. It usually takes an hour, but the gardens are closed this week. We will see the kitchen and the bedrooms on the first floor. Then, on the top floor, don’t miss the library. It has more than two thousand old books. After the tour, you can visit our shop. It sells books about the castle and postcards. I’m afraid we don’t sell food or drinks, but there is a café across the road. Your guide today is Mr Barlow. That’s B, A, R, L, O, W. He knows everything about the castle, so please ask him lots of questions!",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_8,
    "audioGrupo": "T3-L2",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "El negocio vende libros sobre el castillo «and postcards»: postales. Comida y bebida no vende.",
    "consignaEs": "Vas a escuchar a una mujer que les da información a los visitantes de un castillo. Escribí una palabra, un número, una fecha o una hora para el espacio (4)."
  },
  {
    "id": "A2K-T3-L2-5-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 2",
    "concept": "Listening · Part 2 (escucha-notas)",
    "role": "skill_check",
    "kind": "fill",
    "skill": "COMP_01",
    "difficulty": 3,
    "question": "You will hear a woman giving information to visitors at a castle. Write one word or a number or a date or a time for gap (5).",
    "estimulo": {
      "rotulo": "NOTES",
      "titulo": "GREYSTONE CASTLE",
      "parrafos": [
        "Age of the castle: (1) …… years\nToday’s tour takes: (2) …… minutes\nOn the top floor, see: the (3) ……\nThe shop sells: books and (4) ……\nToday’s guide: Mr [[(5) ____]]"
      ]
    },
    "answer": "Barlow",
    "acceptVariants": [],
    "vozEntrada": "Good morning, and welcome to Greystone Castle. Before we start, here is some information. The castle is six hundred years old. A king built it, and then one family lived here until 1950. Our tour today takes forty minutes. It usually takes an hour, but the gardens are closed this week. We will see the kitchen and the bedrooms on the first floor. Then, on the top floor, don’t miss the library. It has more than two thousand old books. After the tour, you can visit our shop. It sells books about the castle and postcards. I’m afraid we don’t sell food or drinks, but there is a café across the road. Your guide today is Mr Barlow. That’s B, A, R, L, O, W. He knows everything about the castle, so please ask him lots of questions!",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Good morning, and welcome to Greystone Castle. Before we start, here is some information. The castle is six hundred years old. A king built it, and then one family lived here until 1950. Our tour today takes forty minutes. It usually takes an hour, but the gardens are closed this week. We will see the kitchen and the bedrooms on the first floor. Then, on the top floor, don’t miss the library. It has more than two thousand old books. After the tour, you can visit our shop. It sells books about the castle and postcards. I’m afraid we don’t sell food or drinks, but there is a café across the road. Your guide today is Mr Barlow. That’s B, A, R, L, O, W. He knows everything about the castle, so please ask him lots of questions!",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_8,
    "audioGrupo": "T3-L2",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "El apellido se deletrea: B, A, R, L, O, W. Un nombre deletreado tiene que quedar con todas sus letras.",
    "consignaEs": "Vas a escuchar a una mujer que les da información a los visitantes de un castillo. Escribí una palabra, un número, una fecha o una hora para el espacio (5)."
  },
  {
    "id": "A2K-T3-L3-1-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 3",
    "concept": "Listening · Part 3 (escucha-conversacion-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "You will hear Leo telling his friend Anna about a camping trip. Where did Leo’s family camp?",
    "options": [
      "near the sea",
      "by a lake",
      "in a forest"
    ],
    "correct": 1,
    "vozEntrada": "Hi Leo. How was your camping trip? Great, thanks! We wanted to camp near the sea, but everywhere was full. So we stayed by a lake in the mountains. Did your whole family go? My mum had to work, so it was just Dad, my sister and me. My uncle came on Saturday for the day. What was the weather like? It rained on Friday night, and I thought, oh no! But Saturday and Sunday were warm and sunny. What did you do? Dad and my sister went fishing. I don’t like that, so I took a boat out on the lake. In the evening we all cooked together. Did you sleep well in the tent? Not really. It wasn’t cold, and my bed was fine. But some birds started singing at four o’clock in the morning! Would you go again? Yes! Dad says we can go back in August, and I can bring a friend. Do you want to come? I’d love to!",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Hi Leo. How was your camping trip?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Great, thanks! We wanted to camp near the sea, but everywhere was full. So we stayed by a lake in the mountains.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Did your whole family go?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "My mum had to work, so it was just Dad, my sister and me. My uncle came on Saturday for the day.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "What was the weather like?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "It rained on Friday night, and I thought, oh no! But Saturday and Sunday were warm and sunny.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "What did you do?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Dad and my sister went fishing. I don’t like that, so I took a boat out on the lake. In the evening we all cooked together.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Did you sleep well in the tent?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Not really. It wasn’t cold, and my bed was fine. But some birds started singing at four o’clock in the morning!",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Would you go again?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Yes! Dad says we can go back in August, and I can bring a friend. Do you want to come?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "I’d love to!",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_9,
    "audioGrupo": "T3-L3",
    "avisoParte": {
      "titulo": "Listening · Part 3",
      "texto": "Una conversación y 5 preguntas. Para cada una, elegí A, B o C. El audio se escucha dos veces."
    },
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Querían acampar cerca del mar, pero estaba todo lleno. «So we stayed by a lake in the mountains». De un bosque no habla.",
    "consignaEs": "Vas a escuchar a Leo contándole a su amiga Anna sobre un viaje de campamento. ¿Dónde acampó la familia de Leo?"
  },
  {
    "id": "A2K-T3-L3-2-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 3",
    "concept": "Listening · Part 3 (escucha-conversacion-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "You will hear Leo telling his friend Anna about a camping trip. Who didn’t go on the trip?",
    "options": [
      "Leo’s mum",
      "Leo’s sister",
      "Leo’s dad"
    ],
    "correct": 0,
    "vozEntrada": "Hi Leo. How was your camping trip? Great, thanks! We wanted to camp near the sea, but everywhere was full. So we stayed by a lake in the mountains. Did your whole family go? My mum had to work, so it was just Dad, my sister and me. My uncle came on Saturday for the day. What was the weather like? It rained on Friday night, and I thought, oh no! But Saturday and Sunday were warm and sunny. What did you do? Dad and my sister went fishing. I don’t like that, so I took a boat out on the lake. In the evening we all cooked together. Did you sleep well in the tent? Not really. It wasn’t cold, and my bed was fine. But some birds started singing at four o’clock in the morning! Would you go again? Yes! Dad says we can go back in August, and I can bring a friend. Do you want to come? I’d love to!",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Hi Leo. How was your camping trip?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Great, thanks! We wanted to camp near the sea, but everywhere was full. So we stayed by a lake in the mountains.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Did your whole family go?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "My mum had to work, so it was just Dad, my sister and me. My uncle came on Saturday for the day.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "What was the weather like?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "It rained on Friday night, and I thought, oh no! But Saturday and Sunday were warm and sunny.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "What did you do?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Dad and my sister went fishing. I don’t like that, so I took a boat out on the lake. In the evening we all cooked together.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Did you sleep well in the tent?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Not really. It wasn’t cold, and my bed was fine. But some birds started singing at four o’clock in the morning!",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Would you go again?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Yes! Dad says we can go back in August, and I can bring a friend. Do you want to come?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "I’d love to!",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_9,
    "audioGrupo": "T3-L3",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "La mamá tenía que trabajar y no fue: «it was just Dad, my sister and me». El papá y la hermana estuvieron todo el fin de semana.",
    "consignaEs": "Vas a escuchar a Leo contándole a su amiga Anna sobre un viaje de campamento. ¿Quién no fue al viaje?"
  },
  {
    "id": "A2K-T3-L3-3-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 3",
    "concept": "Listening · Part 3 (escucha-conversacion-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_01",
    "difficulty": 2,
    "question": "You will hear Leo telling his friend Anna about a camping trip. What was the weather like on Saturday?",
    "options": [
      "warm",
      "wet",
      "windy"
    ],
    "correct": 0,
    "vozEntrada": "Hi Leo. How was your camping trip? Great, thanks! We wanted to camp near the sea, but everywhere was full. So we stayed by a lake in the mountains. Did your whole family go? My mum had to work, so it was just Dad, my sister and me. My uncle came on Saturday for the day. What was the weather like? It rained on Friday night, and I thought, oh no! But Saturday and Sunday were warm and sunny. What did you do? Dad and my sister went fishing. I don’t like that, so I took a boat out on the lake. In the evening we all cooked together. Did you sleep well in the tent? Not really. It wasn’t cold, and my bed was fine. But some birds started singing at four o’clock in the morning! Would you go again? Yes! Dad says we can go back in August, and I can bring a friend. Do you want to come? I’d love to!",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Hi Leo. How was your camping trip?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Great, thanks! We wanted to camp near the sea, but everywhere was full. So we stayed by a lake in the mountains.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Did your whole family go?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "My mum had to work, so it was just Dad, my sister and me. My uncle came on Saturday for the day.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "What was the weather like?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "It rained on Friday night, and I thought, oh no! But Saturday and Sunday were warm and sunny.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "What did you do?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Dad and my sister went fishing. I don’t like that, so I took a boat out on the lake. In the evening we all cooked together.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Did you sleep well in the tent?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Not really. It wasn’t cold, and my bed was fine. But some birds started singing at four o’clock in the morning!",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Would you go again?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Yes! Dad says we can go back in August, and I can bring a friend. Do you want to come?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "I’d love to!",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_9,
    "audioGrupo": "T3-L3",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Llovió el viernes a la noche, pero «Saturday and Sunday were warm and sunny». De viento no dice nada.",
    "consignaEs": "Vas a escuchar a Leo contándole a su amiga Anna sobre un viaje de campamento. ¿Cómo estuvo el tiempo el sábado?"
  },
  {
    "id": "A2K-T3-L3-4-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 3",
    "concept": "Listening · Part 3 (escucha-conversacion-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "You will hear Leo telling his friend Anna about a camping trip. What did Leo do during the day?",
    "options": [
      "He went fishing.",
      "He went shopping for food.",
      "He went out in a boat."
    ],
    "correct": 2,
    "vozEntrada": "Hi Leo. How was your camping trip? Great, thanks! We wanted to camp near the sea, but everywhere was full. So we stayed by a lake in the mountains. Did your whole family go? My mum had to work, so it was just Dad, my sister and me. My uncle came on Saturday for the day. What was the weather like? It rained on Friday night, and I thought, oh no! But Saturday and Sunday were warm and sunny. What did you do? Dad and my sister went fishing. I don’t like that, so I took a boat out on the lake. In the evening we all cooked together. Did you sleep well in the tent? Not really. It wasn’t cold, and my bed was fine. But some birds started singing at four o’clock in the morning! Would you go again? Yes! Dad says we can go back in August, and I can bring a friend. Do you want to come? I’d love to!",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Hi Leo. How was your camping trip?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Great, thanks! We wanted to camp near the sea, but everywhere was full. So we stayed by a lake in the mountains.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Did your whole family go?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "My mum had to work, so it was just Dad, my sister and me. My uncle came on Saturday for the day.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "What was the weather like?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "It rained on Friday night, and I thought, oh no! But Saturday and Sunday were warm and sunny.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "What did you do?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Dad and my sister went fishing. I don’t like that, so I took a boat out on the lake. In the evening we all cooked together.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Did you sleep well in the tent?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Not really. It wasn’t cold, and my bed was fine. But some birds started singing at four o’clock in the morning!",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Would you go again?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Yes! Dad says we can go back in August, and I can bring a friend. Do you want to come?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "I’d love to!",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_9,
    "audioGrupo": "T3-L3",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "A pescar fueron el papá y la hermana; a Leo no le gusta. «I took a boat out on the lake». Cocinaron a la noche, pero no habla de ir a comprar.",
    "consignaEs": "Vas a escuchar a Leo contándole a su amiga Anna sobre un viaje de campamento. ¿Qué hizo Leo durante el día?"
  },
  {
    "id": "A2K-T3-L3-5-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 3",
    "concept": "Listening · Part 3 (escucha-conversacion-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "You will hear Leo telling his friend Anna about a camping trip. Why didn’t Leo sleep well?",
    "options": [
      "He was cold.",
      "His bed was too hard.",
      "There was a noise outside."
    ],
    "correct": 2,
    "vozEntrada": "Hi Leo. How was your camping trip? Great, thanks! We wanted to camp near the sea, but everywhere was full. So we stayed by a lake in the mountains. Did your whole family go? My mum had to work, so it was just Dad, my sister and me. My uncle came on Saturday for the day. What was the weather like? It rained on Friday night, and I thought, oh no! But Saturday and Sunday were warm and sunny. What did you do? Dad and my sister went fishing. I don’t like that, so I took a boat out on the lake. In the evening we all cooked together. Did you sleep well in the tent? Not really. It wasn’t cold, and my bed was fine. But some birds started singing at four o’clock in the morning! Would you go again? Yes! Dad says we can go back in August, and I can bring a friend. Do you want to come? I’d love to!",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Hi Leo. How was your camping trip?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Great, thanks! We wanted to camp near the sea, but everywhere was full. So we stayed by a lake in the mountains.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Did your whole family go?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "My mum had to work, so it was just Dad, my sister and me. My uncle came on Saturday for the day.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "What was the weather like?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "It rained on Friday night, and I thought, oh no! But Saturday and Sunday were warm and sunny.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "What did you do?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Dad and my sister went fishing. I don’t like that, so I took a boat out on the lake. In the evening we all cooked together.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Did you sleep well in the tent?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Not really. It wasn’t cold, and my bed was fine. But some birds started singing at four o’clock in the morning!",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Would you go again?",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Yes! Dad says we can go back in August, and I can bring a friend. Do you want to come?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "I’d love to!",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_9,
    "audioGrupo": "T3-L3",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "No hacía frío y la cama estaba bien. Lo despertaron unos pájaros que empezaron a cantar a las cuatro de la mañana: un ruido de afuera.",
    "consignaEs": "Vas a escuchar a Leo contándole a su amiga Anna sobre un viaje de campamento. ¿Por qué Leo no durmió bien?"
  },
  {
    "id": "A2K-T3-L4-1-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 4",
    "concept": "Listening · Part 4 (escucha-cortos-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "You will hear a girl talking to her dad. What is the girl’s problem?",
    "options": [
      "The homework is too hard.",
      "She has lost a book.",
      "She can’t get online."
    ],
    "correct": 2,
    "vozEntrada": "Dad, I can’t finish my homework. Is it too difficult? Shall I help you? No, it’s easy, and I’ve got all my books. But the internet isn’t working, and I have to send it to my teacher tonight.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Dad, I can’t finish my homework.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Is it too difficult? Shall I help you?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No, it’s easy, and I’ve got all my books. But the internet isn’t working, and I have to send it to my teacher tonight.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/f11898b17b81e661287a19384f212742.mp3",
    "audioGrupo": "T3-L4-1",
    "avisoParte": {
      "titulo": "Listening · Part 4",
      "texto": "5 audios cortos. Para cada uno, elegí A, B o C. Cada audio se escucha dos veces."
    },
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "La tarea es fácil y tiene todos los libros. El problema es que no anda internet y tiene que mandarla esta noche.",
    "consignaEs": "Vas a escuchar a una chica hablando con su papá. ¿Cuál es el problema de la chica?"
  },
  {
    "id": "A2K-T3-L4-2-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 4",
    "concept": "Listening · Part 4 (escucha-cortos-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "You will hear a man talking to a group of children in a museum. What does he ask them to do?",
    "options": [
      "not to touch anything",
      "to keep together",
      "to put their cameras away"
    ],
    "correct": 1,
    "vozEntrada": "Welcome to the Science Museum, everyone. You can touch everything in this room. That’s what it’s for! You can take photos too. But please stay with your group. The museum is very big, and it’s easy to get lost.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "Welcome to the Science Museum, everyone. You can touch everything in this room. That’s what it’s for! You can take photos too. But please stay with your group. The museum is very big, and it’s easy to get lost.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/c43d657037e075281b7ca007476ff00a.mp3",
    "audioGrupo": "T3-L4-2",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Tocar se puede y sacar fotos también. Lo único que pide es «please stay with your group»: que no se separen.",
    "consignaEs": "Vas a escuchar a un hombre hablando con un grupo de chicos en un museo. ¿Qué les pide que hagan?"
  },
  {
    "id": "A2K-T3-L4-3-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 4",
    "concept": "Listening · Part 4 (escucha-cortos-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "You will hear a girl leaving a message for her mum. Where is the girl now?",
    "options": [
      "at a friend’s home",
      "at the cinema",
      "at a bus stop"
    ],
    "correct": 0,
    "vozEntrada": "Hi Mum. Don’t worry, I’m fine. The film finished at six, and I missed the bus outside the cinema. So I walked to Sophie’s flat, and her dad’s making us pizza. Can you come and get me from here at eight?",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Hi Mum. Don’t worry, I’m fine. The film finished at six, and I missed the bus outside the cinema. So I walked to Sophie’s flat, and her dad’s making us pizza. Can you come and get me from here at eight?",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/eb82139bd5ac8b87e464a60f734341fd.mp3",
    "audioGrupo": "T3-L4-3",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "La película ya terminó y el colectivo lo perdió. Caminó hasta el departamento de Sophie y llama desde ahí: «come and get me from here».",
    "consignaEs": "Vas a escuchar a una chica que le deja un mensaje a su mamá. ¿Dónde está la chica ahora?"
  },
  {
    "id": "A2K-T3-L4-4-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 4",
    "concept": "Listening · Part 4 (escucha-cortos-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 3,
    "question": "You will hear two friends talking about a football match. Why did their team lose?",
    "options": [
      "They didn’t practise enough.",
      "Some good players were missing.",
      "The weather was bad."
    ],
    "correct": 0,
    "vozEntrada": "I can’t believe we lost four–one. I know. And we had our best players this time. The weather was perfect too. But we only practised once this month. The other team practises every week. You’re right. We need to do more.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "I can’t believe we lost four–one.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "I know. And we had our best players this time.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "The weather was perfect too. But we only practised once this month. The other team practises every week.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "You’re right. We need to do more.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/f31126e539626d34432288bb37d3f1a7.mp3",
    "audioGrupo": "T3-L4-4",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Estaban los mejores jugadores y el tiempo era perfecto. Pero practicaron una sola vez en el mes, y el otro equipo practica todas las semanas.",
    "consignaEs": "Vas a escuchar a dos amigos hablando de un partido de fútbol. ¿Por qué perdió su equipo?"
  },
  {
    "id": "A2K-T3-L4-5-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 4",
    "concept": "Listening · Part 4 (escucha-cortos-3op)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "COMP_02",
    "difficulty": 2,
    "question": "You will hear a woman talking to her son. What does she want him to do?",
    "options": [
      "wash the dishes",
      "go shopping",
      "tidy his bedroom"
    ],
    "correct": 2,
    "vozEntrada": "Luke, I’ve already washed the dishes, and Dad’s doing the shopping. But look at your room! There are clothes all over the floor. Please put them away before Grandma arrives.",
    "vozTurnos": [
      {
        "voz": "Emma",
        "texto": "Luke, I’ve already washed the dishes, and Dad’s doing the shopping. But look at your room! There are clothes all over the floor. Please put them away before Grandma arrives.",
        "pausaMs": 450
      }
    ],
    "audio": "../pdp-assets/d9089f7b0d7a6e4ca09f55c964cc2d9b.mp3",
    "audioGrupo": "T3-L4-5",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Los platos ya los lavó ella y las compras las hace el papá. Lo que pide es que guarde la ropa que está en el piso de su cuarto: que lo ordene.",
    "consignaEs": "Vas a escuchar a una mujer hablando con su hijo. ¿Qué quiere que haga él?"
  },
  {
    "id": "A2K-T3-L5-1-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 5",
    "concept": "Listening · Part 5 (escucha-emparejar)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "ASOC_01",
    "difficulty": 2,
    "question": "You will hear Julia talking to her dad about how her new classmates travel to school. Emma: how?",
    "options": [
      "by bike",
      "by boat",
      "by bus",
      "by car",
      "by taxi",
      "by train",
      "by underground",
      "on foot"
    ],
    "correct": 0,
    "vozEntrada": "So, Julia, how do your new friends get to school? Do they all walk, like you? No! Emma lives next to the school, but she doesn’t walk. She loves cycling, so she rides round the park first. And Oliver? His dad’s a taxi driver, isn’t he? Yes, but he starts work too early to take Oliver. Oliver’s mum drives him on her way to the office. What about Sam? He lives a long way out. Yes, in a village. There’s no bus from there, so he comes into town on the train. It takes half an hour. That’s a long journey. And your friend Nina? This is the best one. She lives on the island, so she crosses the river every morning. She says the boat is never late! Lucky her! And who’s the boy with the red hair? That’s Carl. He cycled last year, but someone took his bike. Now he gets the number twelve bus with his sister. It stops outside the school.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "So, Julia, how do your new friends get to school? Do they all walk, like you?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No! Emma lives next to the school, but she doesn’t walk. She loves cycling, so she rides round the park first.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "And Oliver? His dad’s a taxi driver, isn’t he?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, but he starts work too early to take Oliver. Oliver’s mum drives him on her way to the office.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "What about Sam? He lives a long way out.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, in a village. There’s no bus from there, so he comes into town on the train. It takes half an hour.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "That’s a long journey. And your friend Nina?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "This is the best one. She lives on the island, so she crosses the river every morning. She says the boat is never late!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Lucky her! And who’s the boy with the red hair?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "That’s Carl. He cycled last year, but someone took his bike. Now he gets the number twelve bus with his sister. It stops outside the school.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_10,
    "audioGrupo": "T3-L5",
    "avisoParte": {
      "titulo": "Listening · Part 5",
      "texto": "Una conversación. Uní cada una de las 5 personas o cosas con la opción que corresponde. El audio se escucha dos veces."
    },
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Emma vive al lado de la escuela, pero no va caminando: le encanta andar en bici y da una vuelta por el parque antes.",
    "consignaEs": "Vas a escuchar a Julia hablando con su papá sobre cómo van a la escuela sus compañeros nuevos. Emma: ¿cómo?"
  },
  {
    "id": "A2K-T3-L5-2-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 5",
    "concept": "Listening · Part 5 (escucha-emparejar)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "ASOC_01",
    "difficulty": 3,
    "question": "You will hear Julia talking to her dad about how her new classmates travel to school. Oliver: how?",
    "options": [
      "by bike",
      "by boat",
      "by bus",
      "by car",
      "by taxi",
      "by train",
      "by underground",
      "on foot"
    ],
    "correct": 3,
    "vozEntrada": "So, Julia, how do your new friends get to school? Do they all walk, like you? No! Emma lives next to the school, but she doesn’t walk. She loves cycling, so she rides round the park first. And Oliver? His dad’s a taxi driver, isn’t he? Yes, but he starts work too early to take Oliver. Oliver’s mum drives him on her way to the office. What about Sam? He lives a long way out. Yes, in a village. There’s no bus from there, so he comes into town on the train. It takes half an hour. That’s a long journey. And your friend Nina? This is the best one. She lives on the island, so she crosses the river every morning. She says the boat is never late! Lucky her! And who’s the boy with the red hair? That’s Carl. He cycled last year, but someone took his bike. Now he gets the number twelve bus with his sister. It stops outside the school.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "So, Julia, how do your new friends get to school? Do they all walk, like you?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No! Emma lives next to the school, but she doesn’t walk. She loves cycling, so she rides round the park first.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "And Oliver? His dad’s a taxi driver, isn’t he?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, but he starts work too early to take Oliver. Oliver’s mum drives him on her way to the office.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "What about Sam? He lives a long way out.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, in a village. There’s no bus from there, so he comes into town on the train. It takes half an hour.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "That’s a long journey. And your friend Nina?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "This is the best one. She lives on the island, so she crosses the river every morning. She says the boat is never late!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Lucky her! And who’s the boy with the red hair?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "That’s Carl. He cycled last year, but someone took his bike. Now he gets the number twelve bus with his sister. It stops outside the school.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_10,
    "audioGrupo": "T3-L5",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "El papá es taxista, pero empieza a trabajar muy temprano y no lo lleva. Lo lleva la mamá manejando, camino a la oficina: en auto.",
    "consignaEs": "Vas a escuchar a Julia hablando con su papá sobre cómo van a la escuela sus compañeros nuevos. Oliver: ¿cómo?"
  },
  {
    "id": "A2K-T3-L5-3-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 5",
    "concept": "Listening · Part 5 (escucha-emparejar)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "ASOC_01",
    "difficulty": 2,
    "question": "You will hear Julia talking to her dad about how her new classmates travel to school. Sam: how?",
    "options": [
      "by bike",
      "by boat",
      "by bus",
      "by car",
      "by taxi",
      "by train",
      "by underground",
      "on foot"
    ],
    "correct": 5,
    "vozEntrada": "So, Julia, how do your new friends get to school? Do they all walk, like you? No! Emma lives next to the school, but she doesn’t walk. She loves cycling, so she rides round the park first. And Oliver? His dad’s a taxi driver, isn’t he? Yes, but he starts work too early to take Oliver. Oliver’s mum drives him on her way to the office. What about Sam? He lives a long way out. Yes, in a village. There’s no bus from there, so he comes into town on the train. It takes half an hour. That’s a long journey. And your friend Nina? This is the best one. She lives on the island, so she crosses the river every morning. She says the boat is never late! Lucky her! And who’s the boy with the red hair? That’s Carl. He cycled last year, but someone took his bike. Now he gets the number twelve bus with his sister. It stops outside the school.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "So, Julia, how do your new friends get to school? Do they all walk, like you?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No! Emma lives next to the school, but she doesn’t walk. She loves cycling, so she rides round the park first.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "And Oliver? His dad’s a taxi driver, isn’t he?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, but he starts work too early to take Oliver. Oliver’s mum drives him on her way to the office.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "What about Sam? He lives a long way out.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, in a village. There’s no bus from there, so he comes into town on the train. It takes half an hour.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "That’s a long journey. And your friend Nina?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "This is the best one. She lives on the island, so she crosses the river every morning. She says the boat is never late!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Lucky her! And who’s the boy with the red hair?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "That’s Carl. He cycled last year, but someone took his bike. Now he gets the number twelve bus with his sister. It stops outside the school.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_10,
    "audioGrupo": "T3-L5",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Desde su pueblo no hay colectivo, «so he comes into town on the train»: en tren.",
    "consignaEs": "Vas a escuchar a Julia hablando con su papá sobre cómo van a la escuela sus compañeros nuevos. Sam: ¿cómo?"
  },
  {
    "id": "A2K-T3-L5-4-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 5",
    "concept": "Listening · Part 5 (escucha-emparejar)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "ASOC_01",
    "difficulty": 2,
    "question": "You will hear Julia talking to her dad about how her new classmates travel to school. Nina: how?",
    "options": [
      "by bike",
      "by boat",
      "by bus",
      "by car",
      "by taxi",
      "by train",
      "by underground",
      "on foot"
    ],
    "correct": 1,
    "vozEntrada": "So, Julia, how do your new friends get to school? Do they all walk, like you? No! Emma lives next to the school, but she doesn’t walk. She loves cycling, so she rides round the park first. And Oliver? His dad’s a taxi driver, isn’t he? Yes, but he starts work too early to take Oliver. Oliver’s mum drives him on her way to the office. What about Sam? He lives a long way out. Yes, in a village. There’s no bus from there, so he comes into town on the train. It takes half an hour. That’s a long journey. And your friend Nina? This is the best one. She lives on the island, so she crosses the river every morning. She says the boat is never late! Lucky her! And who’s the boy with the red hair? That’s Carl. He cycled last year, but someone took his bike. Now he gets the number twelve bus with his sister. It stops outside the school.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "So, Julia, how do your new friends get to school? Do they all walk, like you?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No! Emma lives next to the school, but she doesn’t walk. She loves cycling, so she rides round the park first.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "And Oliver? His dad’s a taxi driver, isn’t he?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, but he starts work too early to take Oliver. Oliver’s mum drives him on her way to the office.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "What about Sam? He lives a long way out.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, in a village. There’s no bus from there, so he comes into town on the train. It takes half an hour.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "That’s a long journey. And your friend Nina?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "This is the best one. She lives on the island, so she crosses the river every morning. She says the boat is never late!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Lucky her! And who’s the boy with the red hair?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "That’s Carl. He cycled last year, but someone took his bike. Now he gets the number twelve bus with his sister. It stops outside the school.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_10,
    "audioGrupo": "T3-L5",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "Nina vive en la isla y cruza el río todas las mañanas: «the boat is never late». Va en lancha.",
    "consignaEs": "Vas a escuchar a Julia hablando con su papá sobre cómo van a la escuela sus compañeros nuevos. Nina: ¿cómo?"
  },
  {
    "id": "A2K-T3-L5-5-S",
    "status": "draft",
    "nivelId": "m2-l",
    "stage": "Test 3 · Listening · Part 5",
    "concept": "Listening · Part 5 (escucha-emparejar)",
    "role": "skill_check",
    "kind": "listen",
    "skill": "ASOC_01",
    "difficulty": 3,
    "question": "You will hear Julia talking to her dad about how her new classmates travel to school. Carl: how?",
    "options": [
      "by bike",
      "by boat",
      "by bus",
      "by car",
      "by taxi",
      "by train",
      "by underground",
      "on foot"
    ],
    "correct": 2,
    "vozEntrada": "So, Julia, how do your new friends get to school? Do they all walk, like you? No! Emma lives next to the school, but she doesn’t walk. She loves cycling, so she rides round the park first. And Oliver? His dad’s a taxi driver, isn’t he? Yes, but he starts work too early to take Oliver. Oliver’s mum drives him on her way to the office. What about Sam? He lives a long way out. Yes, in a village. There’s no bus from there, so he comes into town on the train. It takes half an hour. That’s a long journey. And your friend Nina? This is the best one. She lives on the island, so she crosses the river every morning. She says the boat is never late! Lucky her! And who’s the boy with the red hair? That’s Carl. He cycled last year, but someone took his bike. Now he gets the number twelve bus with his sister. It stops outside the school.",
    "vozTurnos": [
      {
        "voz": "Arthur",
        "texto": "So, Julia, how do your new friends get to school? Do they all walk, like you?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "No! Emma lives next to the school, but she doesn’t walk. She loves cycling, so she rides round the park first.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "And Oliver? His dad’s a taxi driver, isn’t he?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, but he starts work too early to take Oliver. Oliver’s mum drives him on her way to the office.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "What about Sam? He lives a long way out.",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "Yes, in a village. There’s no bus from there, so he comes into town on the train. It takes half an hour.",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "That’s a long journey. And your friend Nina?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "This is the best one. She lives on the island, so she crosses the river every morning. She says the boat is never late!",
        "pausaMs": 450
      },
      {
        "voz": "Arthur",
        "texto": "Lucky her! And who’s the boy with the red hair?",
        "pausaMs": 450
      },
      {
        "voz": "Emma",
        "texto": "That’s Carl. He cycled last year, but someone took his bike. Now he gets the number twelve bus with his sister. It stops outside the school.",
        "pausaMs": 450
      }
    ],
    "audio": _ASSET_DEDUP_10,
    "audioGrupo": "T3-L5",
    "reproducciones": 2,
    "feedback": "Respuesta registrada.",
    "feedbackWrong": "Respuesta registrada.",
    "feedbackExtra": "El año pasado iba en bici, pero se la robaron. Ahora toma el colectivo 12 con su hermana. Esa opción se había descartado para Sam, pero es la de Carl.",
    "consignaEs": "Vas a escuchar a Julia hablando con su papá sobre cómo van a la escuela sus compañeros nuevos. Carl: ¿cómo?"
  },
  {
    "id": "A2K-A2KEY-TEST-3-S-AVISO",
    "status": "draft",
    "nivelId": "m2-s",
    "kind": "concept",
    "stage": "Antes de empezar",
    "concept": "aviso del simulacro (Speaking)",
    "feedback": "Empezá cuando quieras.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Antes de empezar",
        "regla": "Estas preguntas son **nuevas**: no están en la práctica por partes. Tenés un intento por pregunta.",
        "notas": [
          "No hay pistas ni explicaciones mientras contestás. El resultado y las explicaciones aparecen al terminar la prueba.",
          "Tiempo de la prueba: 10 minutos. El reloj avisa cuando se termina, pero no te corta."
        ],
        "idea": "Estas preguntas son nuevas: no están en la práctica por partes. Tenés un intento por pregunta. No hay pistas ni explicaciones mientras contestás. El resultado y las explicaciones aparecen al terminar la prueba. Tiempo de la prueba: 10 minutos. El reloj avisa cuando se termina, pero no te corta."
      }
    ]
  },
  {
    "id": "A2K-T3-S1-1-S",
    "status": "draft",
    "nivelId": "m2-s",
    "stage": "Test 3 · Speaking · Part 1",
    "concept": "Speaking · Part 1 (oral-entrevista)",
    "kind": "profe",
    "forma": "pasale",
    "question": "Speaking · Part 1. Un adulto te hace preguntas en inglés sobre vos. Contestá con oraciones enteras, no con una sola palabra.",
    "feedback": "Parte terminada.",
    "tarjeta": {
      "titulo": "Tu papel",
      "dato": "Hacés de examinador. Leé las preguntas en inglés, de a una, y esperá la respuesta.",
      "nota": "Dura unos 4 minutos."
    },
    "paraProfe": {
      "criterios": [
        "Que conteste con oraciones y agregue algo: un motivo, un ejemplo.",
        "Que se entienda lo que dice, aunque tenga errores.",
        "En las dos preguntas que empiezan con «Now, please tell me something about…» tiene que hablar más largo: dejalo seguir.",
        "Todavía no pongas puntaje: las cuatro escalas se puntúan al final de la Parte 2."
      ],
      "frasesSugeridas": [
        "What’s your name?",
        "How old are you?",
        "Where do you live?",
        "Now, let’s talk about your town. Is your town big or small?",
        "What can young people do in your town?",
        "Where do you go shopping?",
        "Now, please tell me something about a place you like in your town.",
        "Now, let’s talk about holidays. Where do you usually go on holiday?",
        "Who do you go on holiday with?",
        "What do you like doing on holiday?",
        "Now, please tell me something about your last holiday."
      ],
      "objetivo": "Hacés de examinador. Leé las preguntas en inglés, de a una, y esperá la respuesta. Si se traba: Repetí la pregunta una sola vez, más despacio. Si sigue sin contestar, hacé una pregunta más fácil sobre lo mismo (por ejemplo: «Do you go to the beach or to the mountains?») y pasá a la siguiente. No traduzcas la pregunta al castellano ni le soples la respuesta.",
      "registra": "La app guarda solo la marca de tres niveles. El puntaje de 0 a 5 va en papel."
    }
  },
  {
    "id": "A2K-T3-S2-1-S",
    "status": "draft",
    "nivelId": "m2-s",
    "stage": "Test 3 · Speaking · Part 2",
    "concept": "Speaking · Part 2 (oral-colaborativa)",
    "kind": "profe",
    "forma": "pasale",
    "question": "Speaking · Part 2. En el examen hablás con otro chico o chica; en casa esa parte la hace el adulto. Miren juntos la lámina: muestra cinco formas de viajar en vacaciones. Decí cuáles te gustan, cuáles no y por qué, y hacele una pregunta.",
    "image": "../pdp-assets/cf9105f53d9e5c8024e016f812d64fb5.jpg",
    "imageAlt": "Lámina con cinco dibujos de formas de viajar en vacaciones, sin texto.",
    "feedback": "Parte terminada.",
    "tarjeta": {
      "titulo": "Tu papel",
      "dato": "Tenés dos papeles. Primero sos el COMPAÑERO: opinás corto y le devolvés la palabra. Después sos el EXAMINADOR: solo preguntás.",
      "nota": "Dura unos 6 minutos."
    },
    "paraProfe": {
      "criterios": [
        "Que dé su opinión y un motivo («because…»), no solo «yes» o «no».",
        "Que reaccione a lo que decís vos y que te haga al menos una pregunta.",
        "Se evalúa cómo usa el inglés, no si sus ideas son buenas.",
        "Al terminar, poné de 0 a 5 en Grammar and Vocabulary, Pronunciation, Interactive Communication, Global Achievement, mirando las dos partes juntas. Las bandas están en «Hoja del adulto»."
      ],
      "frasesSugeridas": [
        "EXAMINADOR: Now we are going to talk together. Here are some pictures of different ways to travel on holiday.",
        "EXAMINADOR: Do you like these ways of travelling? Say why or why not.",
        "COMPAÑERO: I like travelling by train because I can look out of the window. What about you?",
        "COMPAÑERO: I think long car journeys are boring. Do you agree?",
        "EXAMINADOR: Do you think travelling by plane is exciting? Why? / Why not?",
        "EXAMINADOR: Is a bike a good way to travel on holiday? Why? / Why not?",
        "EXAMINADOR: Which of these ways of travelling is the best for a big family?",
        "EXAMINADOR: Now, do you prefer holidays in your country or in other countries? Why?",
        "EXAMINADOR: How did you travel on your last holiday?"
      ],
      "objetivo": "Tenés dos papeles. Primero sos el COMPAÑERO: opinás corto y le devolvés la palabra. Después sos el EXAMINADOR: solo preguntás. Si se traba: Señalale uno de los cinco dibujos y preguntá: «Do you like travelling like this?». Repetí la pregunta una vez. Si no contesta, pasá a la siguiente. No completes vos sus frases.",
      "registra": "La app guarda solo la marca de tres niveles. El puntaje de 0 a 5 va en papel."
    }
  }
];

const EXERCISES_M3 = [
  {
    "id": "A2K-ADULTO-W",
    "status": "draft",
    "nivelId": "m3-w",
    "kind": "concept",
    "stage": "Hoja del adulto",
    "concept": "rúbrica Writing · cómo corregir",
    "feedback": "Listo.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Writing · cómo corregir",
        "regla": "Poné **de 0 a 5** en cada uno de los tres criterios. El máximo es 15 por parte.",
        "notas": [
          "4 = entre 3 y 5. 2 = entre 1 y 3. 0 = no llega a 1.",
          "Leé el texto en la pantalla del chico antes de que toque Continuar: la app no lo guarda.",
          "Anotá los puntajes en papel: la app todavía no guarda números."
        ],
        "idea": "Poné de 0 a 5 en cada uno de los tres criterios. El máximo es 15 por parte. 4 = entre 3 y 5. 2 = entre 1 y 3. 0 = no llega a 1. Leé el texto en la pantalla del chico antes de que toque Continuar: la app no lo guarda. Anotá los puntajes en papel: la app todavía no guarda números."
      },
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Content (contenido)",
        "regla": "Si contestó **todo lo que pide la consigna** y si quien lee queda informado.",
        "notas": [
          "5: Todo viene al caso. Quien lee queda bien informado.",
          "3: Falta o sobra algo menor. Quien lee queda informado en general.",
          "1: Hay partes que no vienen al caso o entendió mal la consigna. Quien lee queda apenas informado."
        ],
        "idea": "Si contestó todo lo que pide la consigna y si quien lee queda informado. 5: Todo viene al caso. Quien lee queda bien informado. 3: Falta o sobra algo menor. Quien lee queda informado en general. 1: Hay partes que no vienen al caso o entendió mal la consigna. Quien lee queda apenas informado."
      },
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Organisation (organización)",
        "regla": "Si el texto está **unido** y se sigue, o son frases sueltas.",
        "notas": [
          "5: Texto unido y coherente, con conectores básicos (and, but, because) y algún otro recurso para unir.",
          "3: Texto unido con conectores básicos y muy comunes.",
          "1: Frases sueltas. Puede haber puntos y algún «and»."
        ],
        "idea": "Si el texto está unido y se sigue, o son frases sueltas. 5: Texto unido y coherente, con conectores básicos (and, but, because) y algún otro recurso para unir. 3: Texto unido con conectores básicos y muy comunes. 1: Frases sueltas. Puede haber puntos y algún «and»."
      },
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Language (lenguaje)",
        "regla": "El **vocabulario y la gramática**: qué usa y cuánto lo controla.",
        "notas": [
          "5: Vocabulario de todos los días bien usado en general. Formas simples con buen control. Hay errores, pero se entiende.",
          "3: Vocabulario básico usado razonablemente bien. Formas simples con cierto control. A veces los errores no dejan entender.",
          "1: Palabras y frases aisladas. Pocas formas simples y con poco control."
        ],
        "idea": "El vocabulario y la gramática: qué usa y cuánto lo controla. 5: Vocabulario de todos los días bien usado en general. Formas simples con buen control. Hay errores, pero se entiende. 3: Vocabulario básico usado razonablemente bien. Formas simples con cierto control. A veces los errores no dejan entender. 1: Palabras y frases aisladas. Pocas formas simples y con poco control."
      }
    ]
  },
  {
    "id": "A2K-ADULTO-S",
    "status": "draft",
    "nivelId": "m3-s",
    "kind": "concept",
    "stage": "Hoja del adulto",
    "concept": "rúbrica Speaking · cómo puntuar",
    "feedback": "Listo.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Speaking · cómo puntuar",
        "regla": "Poné **de 0 a 5** en cada una de las cuatro escalas, mirando las dos partes juntas.",
        "notas": [
          "4 = entre 3 y 5. 2 = entre 1 y 3. 0 = no llega a 1.",
          "En el examen puntúan dos personas: una aplica tres escalas y la otra da la nota global. En casa lo hacés vos.",
          "Se evalúa cómo usa el inglés, no si sus ideas son buenas."
        ],
        "idea": "Poné de 0 a 5 en cada una de las cuatro escalas, mirando las dos partes juntas. 4 = entre 3 y 5. 2 = entre 1 y 3. 0 = no llega a 1. En el examen puntúan dos personas: una aplica tres escalas y la otra da la nota global. En casa lo hacés vos. Se evalúa cómo usa el inglés, no si sus ideas son buenas."
      },
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Grammar and Vocabulary (gramática y vocabulario)",
        "regla": "Las **formas simples** que usa y las palabras que tiene para hablar de lo cotidiano.",
        "notas": [
          "5: Buen control de formas simples. Varias palabras adecuadas para hablar de lo cotidiano.",
          "3: Control suficiente de formas simples. Vocabulario adecuado para lo cotidiano.",
          "1: Control limitado de pocas formas. Palabras y frases aisladas."
        ],
        "idea": "Las formas simples que usa y las palabras que tiene para hablar de lo cotidiano. 5: Buen control de formas simples. Varias palabras adecuadas para hablar de lo cotidiano. 3: Control suficiente de formas simples. Vocabulario adecuado para lo cotidiano. 1: Control limitado de pocas formas. Palabras y frases aisladas."
      },
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Pronunciation (pronunciación)",
        "regla": "Si **se le entiende**. No se pide acento de nativo.",
        "notas": [
          "5: Se entiende casi todo. Cierto control de sonidos, acento de las palabras y entonación.",
          "3: Se entiende casi todo, aunque controla poco esos rasgos.",
          "1: Controla muy poco esos rasgos y muchas veces no se entiende."
        ],
        "idea": "Si se le entiende. No se pide acento de nativo. 5: Se entiende casi todo. Cierto control de sonidos, acento de las palabras y entonación. 3: Se entiende casi todo, aunque controla poco esos rasgos. 1: Controla muy poco esos rasgos y muchas veces no se entiende."
      },
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Interactive Communication (comunicación interactiva)",
        "regla": "Si **sostiene el intercambio**: contesta, pregunta, reacciona, y cuánta ayuda necesita.",
        "notas": [
          "5: Sostiene intercambios simples. Necesita muy poca ayuda.",
          "3: Sostiene intercambios simples con alguna dificultad. Necesita ayuda.",
          "1: Le cuesta mucho sostener un intercambio simple. Necesita ayuda extra."
        ],
        "idea": "Si sostiene el intercambio: contesta, pregunta, reacciona, y cuánta ayuda necesita. 5: Sostiene intercambios simples. Necesita muy poca ayuda. 3: Sostiene intercambios simples con alguna dificultad. Necesita ayuda. 1: Le cuesta mucho sostener un intercambio simple. Necesita ayuda extra."
      },
      {
        "proposito": "ensenanza",
        "block": "idea",
        "title": "Global Achievement (logro global)",
        "regla": "La **impresión general** de toda la prueba.",
        "notas": [
          "5: Se maneja en situaciones cotidianas aunque dude. Arma frases más largas, sin lenguaje complejo salvo frases muy practicadas.",
          "3: Transmite lo básico en situaciones muy conocidas. Frases muy cortas, con dudas y pausas frecuentes.",
          "1: Le cuesta transmitir lo básico aun en situaciones muy conocidas. Frases cortas o palabras sueltas, con muchas pausas."
        ],
        "idea": "La impresión general de toda la prueba. 5: Se maneja en situaciones cotidianas aunque dude. Arma frases más largas, sin lenguaje complejo salvo frases muy practicadas. 3: Transmite lo básico en situaciones muy conocidas. Frases muy cortas, con dudas y pausas frecuentes. 1: Le cuesta transmitir lo básico aun en situaciones muy conocidas. Frases cortas o palabras sueltas, con muchas pausas."
      }
    ]
  }
];

const MODULE_EXERCISES = {
  "m0": EXERCISES_M0,
  "m1": EXERCISES_M1,
  "m2": EXERCISES_M2,
  "m3": EXERCISES_M3
};

