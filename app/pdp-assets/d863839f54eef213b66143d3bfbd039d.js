

const _ASSET_DEDUP_0 = "../pdp-assets/f35e060166e741c88bd3d4146c957587.png";

/* DATA ZONE generado por Pipeline v0 — 2026-11-05T15:35:24.880Z
   Proyecto: ../../projects/hoja-prueba
   Motor fuente: template-standard-v3.html
   NO EDITAR — artefacto generado. Toda modificación vuelve a la Unidad
   (Principio de generación, DOCTRINA_CONGELADA.md §4). */

const PDP_BUILD = {
  "fecha": "2026-11-05 12:35",
  "id": "548248"
};

const APP_CONFIG = {
  "titulo": "Prueba de la hoja",
  "materia": "Matemática",
  "saludo": "¡Hola!",
  "version": "1.0",
  "colorScheme": "math",
  "pantallaHoja": true
};

const TUTOR = {
  "nombre": "Lío",
  "inicial": "L",
  "especialidad": "Matemática — patrones y números",
  "colorPrimary": "#2563EB",
  "colorLight": "#DBEAFE",
  "colorAccent": "#60A5FA",
  "fraseCierre": "\"Dos fracciones pueden verse distintas y ser la misma cantidad. Aprender a verlo es el truco.\"",
  "mensajesHome": [
    [
      0,
      "\"¡Hola! Soy Lío. Vamos a comparar y encontrar fracciones equivalentes.\""
    ],
    [
      20,
      "\"Buen comienzo. Ya comparás fracciones sin adivinar.\""
    ],
    [
      60,
      "\"Vas muy bien. Las fracciones equivalentes ya no te engañan.\""
    ],
    [
      120,
      "\"Excelente. Comparar cualquier par de fracciones es tu superpoder.\""
    ]
  ],
  "mensajesCorrecto": [
    "¡Exacto! Las viste enseguida.",
    "¡Eso es! Comparaste bien.",
    "¡Perfecto! Así se piensa.",
    "¡Muy bien! Clarísimo.",
    "¡Genial! Ni lo dudaste."
  ],
  "mensajesCorrectoConReintento": [
    "¡Bien! A la segunda salió.",
    "Eso. A veces hay que mirar dos veces.",
    "¡Listo! La pista te encaminó."
  ],
  "mensajesIncorrecto": [
    "Casi. Volvé a mirar las partes de cada fracción.",
    "No es esa, pero estás cerca. ¿Son del mismo tamaño los pedazos?",
    "Probá otra vez: ¿cuál pedazo es más grande?",
    "Todavía no. Compará paso a paso."
  ],
  "mensajesRacha": [
    "🔥 ¡{n} seguidas! Imparable.",
    "⚡ ¡{n} en fila! Ya comparás fracciones de memoria.",
    "🚀 ¡{n} correctas! Lío estaría orgulloso."
  ],
  "mensajesDificultad": [
    "Este tiene truco. Fijate si los denominadores son iguales.",
    "Tranqui: equivocarse es parte de aprender a comparar.",
    "Respirá y compará las partes, una fracción a la vez."
  ],
  "imgLight": "../pdp-assets/0700446ad5a22079b9ee3869b5a4312c.jpg",
  "imgDark": "../pdp-assets/99840af91048b8efe862d430babd9aa3.jpg",
  "imgHero": "../pdp-assets/d50daecf76ae3dafba12852ecb001ccf.png",
  "imgCelebrateLight": _ASSET_DEDUP_0,
  "imgCelebrateDark": _ASSET_DEDUP_0,
  "imgTip": "../pdp-assets/569afc2105f8e442d574ea7043ed5ec2.png",
  "imgHint": "../pdp-assets/cbb53dfa6c757e6140d9eec7acb3563e.png"
};

const MODULES = [
  {
    "id": "m0",
    "nombre": "Comparar con el mismo denominador o numerador",
    "icono": "🍕",
    "subtitulo": "¿Cuál pedazo es más grande?",
    "alexClose": "\"Cuando algo se repite entre dos fracciones, comparar es directo: mirás lo que cambia.\""
  },
  {
    "id": "m1",
    "nombre": "Fracciones equivalentes",
    "icono": "🟰",
    "subtitulo": "Distintos números, misma cantidad",
    "alexClose": "\"Una fracción tiene muchos nombres. Vos ya sabés reconocerlos.\""
  },
  {
    "id": "m2",
    "nombre": "Comparar con distinto denominador",
    "icono": "🔍",
    "subtitulo": "Buscar un denominador compartido",
    "alexClose": "\"Cuando los denominadores no coinciden, buscás un múltiplo que sí — y ahí ya podés comparar.\""
  },
  {
    "id": "m3",
    "nombre": "Probá la hoja",
    "icono": "📓",
    "subtitulo": "Opción múltiple con la hoja que se dibuja",
    "alexClose": "\"Esta unidad es solo de prueba: elegí, confirmá y mirá cómo se arruga la hoja.\""
  }
];

const EXERCISES_M0 = [
  {
    "id": "MAT21-000001",
    "status": "validated",
    "kind": "slides",
    "stage": "Introducción",
    "type": "micro",
    "difficulty": 1,
    "feedback": "¡Listo! Ahora a comparar fracciones.",
    "slides": [
      {
        "titulo": "Comparar fracciones no es adivinar",
        "texto": "Cuando dos fracciones comparten el denominador o el numerador, comparar es directo: solo mirás lo que cambia.",
        "ejemplo": "3/5 y 4/5 tienen el mismo denominador — comparás 3 y 4."
      },
      {
        "titulo": "Ojo con la trampa del numerador chico",
        "texto": "Si el denominador es igual, más numerador es más cantidad. Pero si el NUMERADOR es igual, más denominador es MENOS cantidad — porque el pedazo es más chico.",
        "ejemplo": "1/3 es más grande que 1/5, aunque 5 sea mayor que 3."
      },
      {
        "titulo": "Lo que vamos a descubrir",
        "texto": "Vas a comparar fracciones con el mismo denominador, con el mismo numerador, encontrar equivalentes, y comparar cualquier par buscando un denominador compartido.",
        "nota": "Error común: pensar que más denominador siempre significa más cantidad."
      }
    ]
  },
  {
    "id": "MAT21-000002",
    "status": "validated",
    "kind": "concept",
    "stage": "Concepto",
    "difficulty": 1,
    "concept": "mismo denominador",
    "feedback": "¡Perfecto! Ahora a comparar vos.",
    "pages": [
      {
        "why": {
          "title": "Mismo denominador: compará los numeradores",
          "body": "Si dos fracciones parten el entero en la misma cantidad de pedazos (mismo denominador), la que tiene más pedazos sombreados es la mayor.",
          "analogy": "Es como dos pizzas cortadas en 5 partes iguales: la persona con 4 porciones tiene más que la que tiene 3, aunque las porciones sean del mismo tamaño."
        },
        "demo": {
          "type": "fraction-split",
          "params": {
            "numerator": 4,
            "denominator": 5
          },
          "caption": "4/5 tiene más partes sombreadas que 3/5 — mismo tamaño de parte, más cantidad."
        },
        "example": {
          "label": "Comparar 3/5 y 4/5",
          "steps": [
            {
              "math": "3/5 ___ 4/5"
            },
            {
              "op": "Reviso el denominador",
              "reason": "Las dos fracciones parten el entero en 5.",
              "math": "Mismo denominador: 5",
              "highlight": true
            },
            {
              "op": "Comparo los numeradores",
              "reason": "Con el mismo denominador, más numerador es más cantidad.",
              "math": "3 < 4"
            },
            {
              "op": "Concluyo",
              "reason": "Si 3 < 4, entonces 3/5 < 4/5.",
              "math": "3/5 < 4/5",
              "result": true
            }
          ]
        },
        "summary": {
          "label": "Lo que tenés que recordar",
          "items": [
            "Mismo denominador → comparás los numeradores directamente.",
            "Más numerador (con el mismo denominador) es más cantidad.",
            "No hace falta dibujar cada vez: el número te alcanza."
          ]
        }
      }
    ]
  },
  {
    "id": "MAT21-000003",
    "status": "validated",
    "kind": "concept",
    "stage": "Concepto",
    "difficulty": 2,
    "concept": "mismo numerador",
    "feedback": "¡Genial! Ahora a comparar vos.",
    "screens": [
      {
        "proposito": "ensenanza",
        "block": "idea",
        "titulo": "Mismo numerador: ¿quién gana?",
        "idea": "Ya sabés que, con el mismo denominador, más numerador es más cantidad. Ahora aparece un caso distinto: mismo numerador, denominador distinto. Ojo — acá la intuición de \"número más grande\" te puede jugar en contra."
      },
      {
        "proposito": "ensenanza",
        "block": "predict",
        "label": "Antes de seguir, pensá",
        "prompt": "1/3 y 1/5 tienen el mismo numerador (1). ¿Cuál fracción es mayor?",
        "opciones": [
          "1/3",
          "1/5"
        ]
      },
      {
        "proposito": "ensenanza",
        "block": "reveal",
        "titulo": "La respuesta",
        "texto": "1/3 es mayor. Con el mismo numerador, MENOS denominador es MÁS cantidad: la misma torta repartida entre 3 amigos da porciones más grandes que repartida entre 5."
      },
      {
        "proposito": "micropractica",
        "block": "predict",
        "prompt": "Con el mismo numerador (2), ¿cuál fracción es mayor: 2/3 o 2/9?",
        "opciones": [
          "2/3",
          "2/9"
        ],
        "correcta": "2/3",
        "feedback": "¡Correcto! Menos denominador (3 en vez de 9) da porciones más grandes.",
        "feedbackWrong": "Mismo numerador (2): comparás los denominadores, pero al revés — MENOS denominador es MÁS cantidad, no más."
      },
      {
        "proposito": "recapitulacion",
        "block": "compare",
        "correcto": {
          "titulo": "✓ Recordá",
          "items": [
            "Mismo numerador → el denominador MENOR gana.",
            "Menos partes repartidas = pedazos más grandes."
          ]
        },
        "incorrecto": {
          "titulo": "✗ La trampa común",
          "items": [
            "Pensar que denominador mayor siempre gana.",
            "3/4 NO es menor que 3/10 — es al revés."
          ]
        }
      }
    ]
  },
  {
    "id": "MAT21-000004",
    "status": "validated",
    "kind": "frac-visual",
    "stage": "Práctica",
    "skill": "COMP_01",
    "difficulty": 1,
    "concept": "mismo denominador",
    "mode": "compare",
    "numerator": 3,
    "denominator": 5,
    "shape": "bar",
    "numerator2": 4,
    "denominator2": 5,
    "shape2": "bar",
    "answer": "<",
    "question": "Compará 3/5 y 4/5.",
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Las dos parten el entero en 5. Mirá cuántas partes están sombreadas en cada una."
      },
      {
        "when": "correct",
        "text": "¡Eso! 3/5 es menor que 4/5."
      },
      {
        "when": "wrong",
        "text": "Contá las partes sombreadas de cada barra."
      },
      {
        "when": "complete",
        "text": "¡Bien! Con el mismo denominador, comparás numeradores."
      }
    ],
    "feedback": "¡Muy bien! 3/5 < 4/5.",
    "feedbackWrong": "Contá las partes sombreadas de cada fracción antes de elegir.",
    "hint": "¿Cuál barra tiene menos partes pintadas?",
    "feedbackExtra": "Mismo denominador (5): comparás directamente 3 contra 4. Como 3 es menor, 3/5 es menor que 4/5."
  },
  {
    "id": "MAT21-000005",
    "status": "validated",
    "kind": "frac-visual",
    "stage": "Práctica",
    "skill": "COMP_01",
    "difficulty": 2,
    "concept": "mismo denominador",
    "mode": "compare",
    "numerator": 2,
    "denominator": 6,
    "shape": "circle",
    "numerator2": 5,
    "denominator2": 6,
    "shape2": "circle",
    "answer": "<",
    "question": "Compará 2/6 y 5/6.",
    "feedback": "¡Exacto! 2/6 < 5/6.",
    "feedbackWrong": "Contá las partes sombreadas de cada torta.",
    "hint": "¿Cuál torta tiene más porciones pintadas?",
    "feedbackExtra": "Mismo denominador (6): comparás 2 contra 5. 2 es menor, así que 2/6 es menor."
  },
  {
    "id": "MAT21-000059",
    "status": "validated",
    "kind": "concept",
    "stage": "Profundización",
    "difficulty": 3,
    "concept": "re-anclar antes de la trampa del mismo numerador",
    "tier": "profundizacion",
    "recap": "Ya viste que con el mismo denominador, más numerador es más cantidad. Ahora vas a aplicar la regla contraria: con el mismo numerador, MENOS denominador es más cantidad — la trampa más común de esta unidad.",
    "feedback": "¡Bien! Ahora seguís con los ejercicios que vienen.",
    "pages": [
      {
        "why": {
          "title": "Repasar antes de la trampa",
          "body": "Es fácil confundirse acá: parece que \"más número\" siempre gana, pero con el mismo numerador es al revés.",
          "analogy": "Como repartir la misma pizza entre 3 o entre 8 amigos: menos amigos, porciones más grandes."
        },
        "demo": {
          "type": "fraction-split",
          "params": {
            "numerator": 1,
            "denominator": 4
          },
          "caption": "1/4 es más grande que 1/8, aunque 8 sea mayor que 4."
        },
        "example": {
          "label": "Repasar con 1/4 y 1/8",
          "steps": [
            {
              "math": "1/4 ___ 1/8"
            },
            {
              "op": "Mismo numerador: 1",
              "reason": "Reviso qué comparten.",
              "math": "Numerador igual",
              "highlight": true
            },
            {
              "op": "Comparo denominadores",
              "reason": "Menos denominador es más cantidad.",
              "math": "4 < 8"
            },
            {
              "op": "Concluyo",
              "reason": "El pedazo de 1/4 es más grande.",
              "math": "1/4 > 1/8",
              "result": true
            }
          ]
        },
        "summary": {
          "label": "Lo que tenés que recordar",
          "items": [
            "Mismo numerador: el denominador MENOR gana.",
            "No asumas que más número es más cantidad.",
            "Pensá en pedazos de torta, no solo en números."
          ]
        }
      }
    ]
  },
  {
    "id": "MAT21-000006",
    "status": "validated",
    "kind": "frac-visual",
    "stage": "Práctica",
    "skill": "COMP_01",
    "difficulty": 3,
    "concept": "mismo numerador",
    "mode": "compare",
    "numerator": 1,
    "denominator": 3,
    "shape": "bar",
    "numerator2": 1,
    "denominator2": 5,
    "shape2": "bar",
    "answer": ">",
    "question": "Compará 1/3 y 1/5.",
    "feedback": "¡Muy bien! 1/3 > 1/5 — menos denominador es pedazo más grande.",
    "feedbackWrong": "Mirá cuál barra tiene el pedazo sombreado más grande, no cuál número es mayor.",
    "hint": "Con el mismo numerador, ¿cuál denominador es menor?",
    "feedbackExtra": "Mismo numerador (1): el denominador menor (3) da el pedazo más grande. 1/3 > 1/5, aunque 3 < 5."
  },
  {
    "id": "MAT21-000007",
    "status": "validated",
    "kind": "number-line",
    "stage": "Práctica",
    "skill": "COMP_01",
    "difficulty": 2,
    "concept": "ubicar fracciones",
    "mode": "place",
    "min": 0,
    "max": 1,
    "step": 0.2,
    "labelStep": 0.2,
    "answer": 0.8,
    "question": "Ubicá 4/5 en la recta numérica (entre 0 y 1).",
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "La recta va de 0 a 1, partida en 5 saltos iguales."
      },
      {
        "when": "correct",
        "text": "¡Eso! 4/5 está a 4 saltos del 0."
      },
      {
        "when": "wrong",
        "text": "Contá 4 saltos desde el 0."
      },
      {
        "when": "complete",
        "text": "¡Bien! La recta también sirve para comparar fracciones."
      }
    ],
    "feedback": "¡Exacto! 4/5 está muy cerca del 1."
  },
  {
    "id": "MAT21-000008",
    "status": "validated",
    "kind": "classify",
    "stage": "Práctica",
    "skill": "CLAS_01",
    "difficulty": 1,
    "concept": "mismo denominador o numerador",
    "question": "Clasificá cada par de fracciones según qué comparten.",
    "items": [
      "3/7 y 5/7",
      "1/4 y 1/6",
      "2/9 y 8/9"
    ],
    "categories": [
      "Mismo denominador",
      "Mismo numerador"
    ],
    "correct": [
      0,
      1,
      0
    ],
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Mirá el número de arriba y el de abajo de cada fracción."
      },
      {
        "when": "correct",
        "text": "¡Eso! Identificaste bien qué comparten."
      },
      {
        "when": "wrong",
        "text": "Fijate si coincide el de arriba o el de abajo."
      },
      {
        "when": "complete",
        "text": "¡Bien! Reconocer qué comparten es el primer paso para comparar."
      }
    ],
    "feedback": "¡Muy bien! Reconociste el patrón de cada par.",
    "feedbackWrong": "Revisá si el número de arriba o el de abajo es igual en cada par."
  },
  {
    "id": "MAT21-000009",
    "status": "validated",
    "kind": "classify",
    "stage": "Práctica",
    "skill": "CLAS_02",
    "difficulty": 2,
    "concept": "mismo denominador, cuál es mayor",
    "question": "Clasificá cuál fracción es mayor en cada par (mismo denominador).",
    "items": [
      "2/7 vs 5/7",
      "6/9 vs 3/9",
      "4/10 vs 7/10"
    ],
    "categories": [
      "Gana la primera",
      "Gana la segunda"
    ],
    "correct": [
      1,
      0,
      1
    ],
    "feedback": "¡Exacto! Con el mismo denominador, gana el numerador más grande.",
    "feedbackWrong": "Compará los numeradores de cada par."
  },
  {
    "id": "MAT21-000010",
    "status": "validated",
    "kind": "classify",
    "stage": "Práctica",
    "skill": "CLAS_02",
    "difficulty": 3,
    "concept": "mismo numerador, cuál es mayor",
    "question": "Clasificá cuál fracción es mayor en cada par (mismo numerador).",
    "items": [
      "2/3 vs 2/8",
      "3/4 vs 3/10",
      "1/6 vs 1/2"
    ],
    "categories": [
      "Gana la primera",
      "Gana la segunda"
    ],
    "correct": [
      0,
      0,
      1
    ],
    "feedback": "¡Muy bien! Con el mismo numerador, gana el denominador más chico.",
    "feedbackWrong": "Con el mismo numerador, ¿cuál denominador es menor?"
  },
  {
    "id": "MAT21-000011",
    "status": "validated",
    "kind": "match",
    "stage": "Práctica",
    "skill": "ASOC_01",
    "difficulty": 1,
    "concept": "mismo denominador",
    "question": "Relacioná cada par con la fracción mayor.",
    "left": [
      "3/8 y 6/8",
      "5/9 y 2/9",
      "1/4 y 3/4"
    ],
    "right": [
      "3/4",
      "6/8",
      "5/9"
    ],
    "pairs": {
      "0": 1,
      "1": 2,
      "2": 0
    },
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Mismo denominador: gana el numerador más grande."
      },
      {
        "when": "correct",
        "text": "¡Eso! Encontraste la mayor de cada par."
      },
      {
        "when": "wrong",
        "text": "Compará los numeradores de ese par."
      },
      {
        "when": "complete",
        "text": "¡Bien! Ya reconocés la mayor sin dudar."
      }
    ],
    "feedback": "¡Muy bien! Todas comparadas por su numerador.",
    "feedbackWrong": "Revisá el numerador de cada par antes de unir."
  },
  {
    "id": "MAT21-000012",
    "status": "validated",
    "kind": "match",
    "stage": "Práctica",
    "skill": "ASOC_01",
    "difficulty": 3,
    "concept": "mismo numerador",
    "question": "Relacioná cada par con la fracción mayor.",
    "left": [
      "2/5 y 2/9",
      "1/3 y 1/7",
      "4/5 y 4/6"
    ],
    "right": [
      "4/5",
      "2/5",
      "1/3"
    ],
    "pairs": {
      "0": 1,
      "1": 2,
      "2": 0
    },
    "feedback": "¡Exacto! Con el mismo numerador, el denominador más chico gana.",
    "feedbackWrong": "Revisá cuál denominador es menor en cada par."
  },
  {
    "id": "MAT21-000013",
    "status": "validated",
    "kind": "order",
    "stage": "Práctica",
    "skill": "NUM_02",
    "difficulty": 2,
    "concept": "ordenar mismo denominador",
    "question": "Ordená de menor a mayor: 4/6, 1/6, 3/6.",
    "words": [
      "4/6",
      "1/6",
      "3/6"
    ],
    "correctOrder": [
      1,
      2,
      0
    ],
    "correct": [
      1,
      2,
      0
    ],
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Mismo denominador: ordená solo mirando los numeradores."
      },
      {
        "when": "correct",
        "text": "¡Eso! De menor a mayor numerador."
      },
      {
        "when": "wrong",
        "text": "¿Cuál numerador es el más chico?"
      },
      {
        "when": "complete",
        "text": "¡Bien! Ordenar es comparar varias veces seguidas."
      }
    ],
    "feedback": "¡Muy bien! 1/6, 3/6, 4/6.",
    "feedbackWrong": "Ordená los numeradores de menor a mayor."
  },
  {
    "id": "MAT21-000014",
    "status": "validated",
    "kind": "order",
    "stage": "Práctica",
    "skill": "NUM_02",
    "difficulty": 3,
    "concept": "ordenar mismo numerador",
    "question": "Ordená de mayor a menor: 2/7, 2/3, 2/5.",
    "words": [
      "2/7",
      "2/3",
      "2/5"
    ],
    "correctOrder": [
      1,
      2,
      0
    ],
    "correct": [
      1,
      2,
      0
    ],
    "feedback": "¡Exacto! 2/3, 2/5, 2/7 — a más denominador, menos cantidad.",
    "feedbackWrong": "Mismo numerador: el denominador más chico va primero (es el mayor)."
  },
  {
    "id": "MAT21-000015",
    "status": "validated",
    "kind": "memory",
    "stage": "Práctica",
    "skill": "ASOC_01",
    "difficulty": 2,
    "concept": "comparaciones mismo denominador",
    "pairs": [
      {
        "a": "2/9 y 7/9",
        "b": "7/9 es mayor"
      },
      {
        "a": "5/8 y 3/8",
        "b": "5/8 es mayor"
      },
      {
        "a": "1/10 y 6/10",
        "b": "6/10 es mayor"
      }
    ],
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Buscá las parejas: un par de fracciones y cuál es mayor."
      },
      {
        "when": "correct",
        "text": "¡Esa es una pareja!"
      },
      {
        "when": "complete",
        "text": "¡Listo! Ya reconocés estas comparaciones de un vistazo."
      }
    ],
    "feedback": "¡Muy bien! Encontraste todas las parejas.",
    "feedbackWrong": "No hay una respuesta incorrecta en este juego: solo seguí buscando la pareja correcta."
  },
  {
    "id": "MAT21-000016",
    "status": "validated",
    "kind": "table-fill",
    "stage": "Práctica",
    "skill": "CLAS_02",
    "difficulty": 2,
    "concept": "comparar mismo denominador",
    "question": "Completá cuál fracción es mayor en cada fila (mismo denominador).",
    "headers": [
      "Par",
      "Mayor"
    ],
    "rows": [
      [
        "2/5 y 4/5",
        "4/5"
      ],
      [
        "6/7 y 3/7",
        null
      ],
      [
        "1/8 y 5/8",
        null
      ]
    ],
    "answers": [
      "6/7",
      "5/8"
    ],
    "feedback": "¡Muy bien! Mismo denominador, gana el numerador más grande.",
    "feedbackWrong": "Compará los numeradores de esa fila."
  },
  {
    "id": "MAT21-000017",
    "status": "validated",
    "kind": "word-bank",
    "stage": "Práctica",
    "skill": "COMP_03",
    "difficulty": 1,
    "concept": "regla mismo denominador",
    "question": "Completá la regla.",
    "sentence": "Si el denominador es igual, es mayor la fracción con más ___.",
    "bank": [
      "numerador",
      "denominador",
      "mitad"
    ],
    "correct": 0,
    "answers": [
      "numerador"
    ],
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Pensá qué número compara cuando el de abajo es igual."
      },
      {
        "when": "correct",
        "text": "¡Eso! El numerador."
      },
      {
        "when": "wrong",
        "text": "El denominador ya es igual — ¿qué número queda para comparar?"
      },
      {
        "when": "complete",
        "text": "¡Bien! Cada regla tiene su propia lógica."
      }
    ],
    "feedback": "¡Exacto! Con el mismo denominador, comparás numeradores.",
    "feedbackWrong": "Pensá qué número queda libre para comparar.",
    "hint": "El de arriba o el de abajo de la fracción.",
    "scaffold": {
      "altExplanation": "Pensá en pizzas cortadas en 5 partes iguales: la persona con 4 porciones tiene más que la que tiene 3."
    }
  },
  {
    "id": "MAT21-000018",
    "status": "validated",
    "kind": "word-bank",
    "stage": "Práctica",
    "skill": "COMP_03",
    "difficulty": 3,
    "concept": "regla mismo numerador",
    "question": "Completá la regla.",
    "sentence": "Si el numerador es igual, es mayor la fracción con ___ denominador.",
    "bank": [
      "menor",
      "mayor",
      "igual"
    ],
    "correct": 0,
    "answers": [
      "menor"
    ],
    "feedback": "¡Exacto! Menos denominador es pedazo más grande.",
    "feedbackWrong": "Pensá: ¿un pedazo de una torta cortada en menos partes es más grande o más chico?",
    "hint": "Mirá las 3 opciones del banco: ¿cuál dice que MENOS partes significa pedazo MÁS grande?",
    "scaffold": {
      "altExplanation": "Repartir la misma torta entre 3 o entre 5 amigos: con menos amigos, cada uno se lleva más torta."
    }
  },
  {
    "id": "MAT21-000019",
    "status": "validated",
    "kind": "fill",
    "stage": "Práctica",
    "skill": "CALC_01",
    "difficulty": 1,
    "concept": "comparar mismo denominador",
    "question": "Entre 2/7 y 5/7, ¿cuál es mayor? Escribila.",
    "answer": "5/7",
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Mismo denominador: compará los numeradores."
      },
      {
        "when": "correct",
        "text": "¡Eso! 5/7."
      },
      {
        "when": "wrong",
        "text": "¿Cuál numerador es mayor, 2 o 5?"
      },
      {
        "when": "complete",
        "text": "¡Bien! Ya resolvés esto sin dudar."
      }
    ],
    "feedback": "¡Muy bien! 5/7 es mayor.",
    "feedbackWrong": "Compará los numeradores: 2 y 5.",
    "hint": "El numerador más grande gana cuando el denominador es igual.",
    "feedbackExtra": "Mismo denominador (7): 5 > 2, entonces 5/7 > 2/7.",
    "scaffold": {
      "example": {
        "label": "Un caso parecido: 2/9 y 6/9",
        "steps": [
          {
            "math": "2/9 ___ 6/9"
          },
          {
            "op": "Mismo denominador, comparo numeradores",
            "math": "2 < 6"
          },
          {
            "math": "2/9 < 6/9",
            "result": true
          }
        ]
      }
    }
  },
  {
    "id": "MAT21-000020",
    "status": "validated",
    "kind": "mc",
    "stage": "Práctica",
    "skill": "CALC_01",
    "difficulty": 3,
    "concept": "comparar mismo numerador",
    "question": "¿Cuál fracción es mayor: 3/4 o 3/10?",
    "options": [
      "3/4",
      "3/10",
      "Son iguales",
      "No se puede saber"
    ],
    "correct": 0,
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Mismo numerador: el denominador menor da el pedazo más grande."
      },
      {
        "when": "correct",
        "text": "¡Eso! 3/4."
      },
      {
        "when": "wrong",
        "text": "¿Cuál denominador es menor, 4 o 10?"
      },
      {
        "when": "complete",
        "text": "¡Bien! La trampa del numerador chico ya no te agarra."
      }
    ],
    "feedback": "¡Exacto! 3/4 es mayor — 4 es menor denominador que 10.",
    "feedbackWrong": "Con el mismo numerador, el denominador MENOR es la fracción MAYOR.",
    "hint": "Pensá en pedazos de torta: ¿4 amigos o 10 amigos se llevan pedazos más grandes?",
    "feedbackByOption": {
      "1": "Ese denominador es mayor, así que el pedazo es más chico.",
      "2": "Los denominadores son distintos, no son iguales.",
      "3": "Sí se puede saber: comparás los denominadores."
    },
    "scaffold": {
      "example": {
        "label": "Un caso parecido: 1/2 y 1/6",
        "steps": [
          {
            "math": "1/2 ___ 1/6"
          },
          {
            "op": "Mismo numerador, menos denominador gana",
            "math": "2 < 6"
          },
          {
            "math": "1/2 > 1/6",
            "result": true
          }
        ]
      }
    }
  },
  {
    "id": "MAT21-000021",
    "status": "validated",
    "kind": "tf",
    "stage": "Práctica",
    "skill": "CORR_02",
    "difficulty": 3,
    "concept": "verificar comparación",
    "question": "6/11 es mayor que 4/11 porque tienen el mismo denominador y 6 es mayor que 4.",
    "correct": true,
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Revisá si el razonamiento es correcto, no solo el resultado."
      },
      {
        "when": "correct",
        "text": "¡Eso! El razonamiento y el resultado son correctos."
      },
      {
        "when": "wrong",
        "text": "¿El denominador es realmente el mismo? ¿La conclusión es correcta?"
      },
      {
        "when": "complete",
        "text": "¡Bien! Verificar el razonamiento es tan importante como el resultado."
      }
    ],
    "feedback": "¡Verdadero! Mismo denominador, gana el numerador mayor.",
    "feedbackWrong": "Revisá: ¿el denominador es igual? ¿La conclusión sigue esa regla?",
    "hint": "11 y 11 — ¿son iguales?",
    "scaffold": {
      "altExplanation": "Fijate: ¿el denominador de las dos fracciones es realmente el mismo número? Si sí, comparás los numeradores."
    }
  }
];

const EXERCISES_M1 = [
  {
    "id": "MAT21-000022",
    "status": "validated",
    "kind": "slides",
    "stage": "Introducción",
    "type": "micro",
    "difficulty": 1,
    "feedback": "¡Vamos a encontrar fracciones equivalentes!",
    "slides": [
      {
        "titulo": "Una fracción tiene muchos nombres",
        "texto": "1/2, 2/4 y 3/6 se ven distintas, pero representan exactamente la misma cantidad.",
        "ejemplo": "1/2 = 2/4 = 3/6"
      },
      {
        "titulo": "El truco: multiplicar arriba y abajo por lo mismo",
        "texto": "Si multiplicás el numerador Y el denominador por el mismo número, la fracción cambia de nombre pero no de tamaño.",
        "ejemplo": "1/2 × (2/2) = 2/4 — mismo tamaño, otro nombre."
      },
      {
        "titulo": "Lo que vamos a descubrir",
        "texto": "Vas a reconocer fracciones equivalentes y a encontrar el equivalente que te pidan.",
        "nota": "Error común: multiplicar solo el numerador o solo el denominador, y no los dos."
      }
    ]
  },
  {
    "id": "MAT21-000023",
    "status": "validated",
    "kind": "concept",
    "stage": "Concepto",
    "difficulty": 1,
    "concept": "equivalencia por multiplicación",
    "feedback": "¡Perfecto! Ahora a reconocer equivalentes vos.",
    "pages": [
      {
        "why": {
          "title": "Multiplicar arriba y abajo por lo mismo",
          "body": "Si partís cada pedazo de 1/2 por la mitad, tenés el doble de pedazos, cada uno la mitad de chico. La cantidad total no cambió.",
          "analogy": "Es como cortar una pizza que ya estaba cortada en 2: si cortás cada mitad por la mitad, tenés 4 porciones, pero la pizza sigue siendo la misma pizza."
        },
        "demo": {
          "type": "fraction-split",
          "params": {
            "numerator": 2,
            "denominator": 4
          },
          "caption": "2/4 ocupa el mismo espacio que 1/2 — mismo tamaño, más partes chicas."
        },
        "example": {
          "label": "Encontrar un equivalente de 1/2 con denominador 6",
          "steps": [
            {
              "math": "1/2 = ?/6"
            },
            {
              "op": "Busco por qué número se multiplicó el denominador",
              "reason": "2 se convirtió en 6.",
              "math": "2 × 3 = 6",
              "highlight": true
            },
            {
              "op": "Multiplico el numerador por lo mismo",
              "reason": "Tengo que hacer lo mismo arriba y abajo.",
              "math": "1 × 3 = 3"
            },
            {
              "op": "Concluyo",
              "reason": "El nuevo numerador es 3.",
              "math": "1/2 = 3/6",
              "result": true
            }
          ]
        },
        "summary": {
          "label": "Lo que tenés que recordar",
          "items": [
            "Multiplicar numerador y denominador por el mismo número da una fracción equivalente.",
            "Si solo multiplicás uno de los dos, la fracción cambia de verdad — ya no es equivalente.",
            "Para verificar si dos fracciones son equivalentes, buscá qué número las conecta."
          ]
        }
      }
    ]
  },
  {
    "id": "MAT21-000024",
    "status": "validated",
    "kind": "frac-visual",
    "stage": "Práctica",
    "skill": "COMP_04",
    "difficulty": 1,
    "concept": "equivalencia",
    "mode": "equivalent",
    "numerator": 1,
    "denominator": 2,
    "shape": "bar",
    "numerator2": 2,
    "denominator2": 4,
    "shape2": "bar",
    "answer": true,
    "question": "¿1/2 y 2/4 son equivalentes?",
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Mirá si las dos barras están sombreadas hasta el mismo punto."
      },
      {
        "when": "correct",
        "text": "¡Eso! Ocupan el mismo espacio."
      },
      {
        "when": "wrong",
        "text": "Compará hasta dónde llega el sombreado en cada barra."
      },
      {
        "when": "complete",
        "text": "¡Bien! Mismo espacio sombreado, misma cantidad."
      }
    ],
    "feedback": "¡Muy bien! 1/2 y 2/4 son equivalentes.",
    "feedbackWrong": "Fijate si el sombreado de las dos barras llega al mismo lugar.",
    "hint": "2 = 1×2 y 4 = 2×2 — mismo número.",
    "feedbackExtra": "1×2=2 y 2×2=4: multiplicaste numerador y denominador por 2. Son equivalentes."
  },
  {
    "id": "MAT21-000025",
    "status": "validated",
    "kind": "frac-visual",
    "stage": "Práctica",
    "skill": "COMP_04",
    "difficulty": 2,
    "concept": "equivalencia",
    "mode": "equivalent",
    "numerator": 1,
    "denominator": 3,
    "shape": "circle",
    "numerator2": 2,
    "denominator2": 6,
    "shape2": "circle",
    "answer": true,
    "question": "¿1/3 y 2/6 son equivalentes?",
    "feedback": "¡Exacto! 1/3 y 2/6 son equivalentes.",
    "feedbackWrong": "Compará cuánto ocupa sombreado cada torta.",
    "hint": "3 × 2 = 6, ¿y 1 × 2?",
    "feedbackExtra": "1×2=2 y 3×2=6. Mismo número multiplicando arriba y abajo: son equivalentes."
  },
  {
    "id": "MAT21-000026",
    "status": "validated",
    "kind": "frac-visual",
    "stage": "Práctica",
    "skill": "COMP_04",
    "difficulty": 3,
    "concept": "no equivalencia",
    "mode": "equivalent",
    "numerator": 1,
    "denominator": 2,
    "shape": "bar",
    "numerator2": 2,
    "denominator2": 5,
    "shape2": "bar",
    "answer": false,
    "question": "¿1/2 y 2/5 son equivalentes?",
    "feedback": "¡Exacto! 1/2 y 2/5 NO son equivalentes.",
    "feedbackWrong": "Compará con cuidado hasta dónde llega el sombreado de cada una — no alcanza el mismo punto.",
    "hint": "2 × 2 = 4, no 5. No hay un número que convierta 2 en 5 Y 1 en 2 a la vez.",
    "feedbackExtra": "Para que fueran equivalentes, el mismo número tendría que multiplicar 1→2 y 2→5. Pero 1×2=2 y 2×2=4≠5. No son equivalentes, aunque se parezcan."
  },
  {
    "id": "MAT21-000027",
    "status": "validated",
    "kind": "frac-visual",
    "stage": "Práctica",
    "skill": "COMP_04",
    "difficulty": 2,
    "concept": "equivalencia",
    "mode": "equivalent",
    "numerator": 3,
    "denominator": 4,
    "shape": "circle",
    "numerator2": 6,
    "denominator2": 8,
    "shape2": "circle",
    "answer": true,
    "question": "¿3/4 y 6/8 son equivalentes?",
    "feedback": "¡Muy bien! 3/4 y 6/8 son equivalentes.",
    "feedbackWrong": "Compará cuánto ocupa sombreado cada torta.",
    "hint": "4 × 2 = 8, ¿y 3 × 2?",
    "feedbackExtra": "3×2=6 y 4×2=8. Mismo número arriba y abajo: son equivalentes."
  },
  {
    "id": "MAT21-000028",
    "status": "validated",
    "kind": "number-line",
    "stage": "Práctica",
    "skill": "COMP_01",
    "difficulty": 2,
    "concept": "equivalencia en la recta",
    "mode": "place",
    "min": 0,
    "max": 1,
    "step": 0.25,
    "labelStep": 0.25,
    "answer": 0.5,
    "question": "1/2 y 2/4 caen en el mismo punto de la recta. Ubicalo.",
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "No importa cuál de las dos fracciones uses: caen en el mismo lugar."
      },
      {
        "when": "correct",
        "text": "¡Eso! Las fracciones equivalentes son el mismo punto."
      },
      {
        "when": "wrong",
        "text": "Contá 2 saltos de 1/4 desde el 0."
      },
      {
        "when": "complete",
        "text": "¡Bien! La recta muestra la equivalencia sin necesidad de calcular nada."
      }
    ],
    "feedback": "¡Exacto! Ese es el punto medio."
  },
  {
    "id": "MAT21-000029",
    "status": "validated",
    "kind": "concept",
    "stage": "Profundización",
    "difficulty": 3,
    "concept": "re-anclar equivalencia antes de la práctica simbólica",
    "tier": "profundizacion",
    "recap": "Ya viste que 1/2 = 2/4 = 3/6 multiplicando arriba y abajo por lo mismo, y que algunas fracciones parecidas NO son equivalentes de verdad. Ahora vas a reconocer y construir equivalencias sin la ayuda del dibujo.",
    "feedback": "¡Bien! Ahora seguís con los ejercicios que vienen.",
    "pages": [
      {
        "why": {
          "title": "La misma idea, sin dibujar",
          "body": "Ya no vas a necesitar sombrear para saber si dos fracciones son equivalentes: alcanza con revisar si un mismo número multiplica numerador y denominador.",
          "analogy": "Como cuando ya sabés multiplicar de memoria y no necesitás dibujar los grupos cada vez."
        },
        "demo": {
          "type": "fraction-split",
          "params": {
            "numerator": 2,
            "denominator": 8
          },
          "caption": "2/8 — repasá si es equivalente a 1/4."
        },
        "example": {
          "label": "Repasar con 1/4 y 2/8",
          "steps": [
            {
              "math": "1/4 ___ 2/8"
            },
            {
              "op": "Busco el número que conecta los denominadores",
              "reason": "4 se convirtió en 8.",
              "math": "4 × 2 = 8",
              "highlight": true
            },
            {
              "op": "Reviso si el numerador sigue la misma regla",
              "reason": "1 tendría que convertirse en 2.",
              "math": "1 × 2 = 2"
            },
            {
              "op": "Concluyo",
              "reason": "Los dos siguieron la misma multiplicación.",
              "math": "1/4 = 2/8",
              "result": true
            }
          ]
        },
        "summary": {
          "label": "Lo que tenés que recordar",
          "items": [
            "Buscá el número que conecta los denominadores.",
            "Verificá que el numerador siga la misma regla.",
            "Si ambos coinciden, son equivalentes."
          ]
        }
      }
    ]
  },
  {
    "id": "MAT21-000030",
    "status": "validated",
    "kind": "classify",
    "stage": "Práctica",
    "skill": "CLAS_01",
    "difficulty": 2,
    "concept": "reconocer equivalencia",
    "question": "Clasificá cada par según si son equivalentes.",
    "items": [
      "2/3 y 4/6",
      "1/2 y 3/8",
      "3/5 y 6/10"
    ],
    "categories": [
      "Equivalentes",
      "No equivalentes"
    ],
    "correct": [
      0,
      1,
      0
    ],
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Buscá el número que conecta los denominadores de cada par."
      },
      {
        "when": "correct",
        "text": "¡Eso! Verificaste bien la equivalencia."
      },
      {
        "when": "wrong",
        "text": "Revisá si el numerador sigue la misma multiplicación que el denominador."
      },
      {
        "when": "complete",
        "text": "¡Bien! Ya distinguís equivalentes de parecidos."
      }
    ],
    "feedback": "¡Muy bien! Verificaste cada par con la regla de multiplicar igual arriba y abajo.",
    "feedbackWrong": "Buscá el número que conecta los denominadores de ese par, y revisá si el numerador sigue la misma regla."
  },
  {
    "id": "MAT21-000031",
    "status": "validated",
    "kind": "classify",
    "stage": "Práctica",
    "skill": "CLAS_01",
    "difficulty": 3,
    "concept": "reconocer equivalencia",
    "question": "Clasificá cada par según si son equivalentes.",
    "items": [
      "2/5 y 4/10",
      "3/4 y 5/6",
      "1/3 y 4/12"
    ],
    "categories": [
      "Equivalentes",
      "No equivalentes"
    ],
    "correct": [
      0,
      1,
      0
    ],
    "feedback": "¡Exacto! Revisaste bien cada par.",
    "feedbackWrong": "Buscá el número que conecta los denominadores, y revisá si el numerador sigue esa misma regla."
  },
  {
    "id": "MAT21-000032",
    "status": "validated",
    "kind": "match",
    "stage": "Práctica",
    "skill": "ASOC_01",
    "difficulty": 1,
    "concept": "encontrar el equivalente",
    "question": "Relacioná cada fracción con su equivalente.",
    "left": [
      "1/2",
      "1/3",
      "2/3"
    ],
    "right": [
      "4/6",
      "3/6",
      "2/6"
    ],
    "pairs": {
      "0": 1,
      "1": 2,
      "2": 0
    },
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Buscá cuál fracción de la derecha tiene el mismo tamaño."
      },
      {
        "when": "correct",
        "text": "¡Eso! Encontraste el equivalente."
      },
      {
        "when": "wrong",
        "text": "Verificá multiplicando numerador y denominador por el mismo número."
      },
      {
        "when": "complete",
        "text": "¡Bien! Ya reconocés equivalentes de un vistazo."
      }
    ],
    "feedback": "¡Muy bien! Todas conectadas con su equivalente real.",
    "feedbackWrong": "Verificá cada par multiplicando arriba y abajo por el mismo número."
  },
  {
    "id": "MAT21-000033",
    "status": "validated",
    "kind": "match",
    "stage": "Práctica",
    "skill": "ASOC_01",
    "difficulty": 2,
    "concept": "encontrar el equivalente",
    "question": "Relacioná cada fracción con su equivalente.",
    "left": [
      "1/4",
      "3/4",
      "1/2"
    ],
    "right": [
      "4/8",
      "2/8",
      "6/8"
    ],
    "pairs": {
      "0": 1,
      "1": 2,
      "2": 0
    },
    "feedback": "¡Exacto! Todas conectadas correctamente.",
    "feedbackWrong": "Verificá multiplicando numerador y denominador por el mismo número."
  },
  {
    "id": "MAT21-000034",
    "status": "validated",
    "kind": "order",
    "stage": "Práctica",
    "skill": "TEMP_02",
    "difficulty": 2,
    "concept": "pasos para verificar equivalencia",
    "question": "Ordená los pasos para verificar si 2/3 y 6/9 son equivalentes.",
    "words": [
      "Ver si 2 sigue la misma multiplicación: 2 × 3 = 6",
      "Buscar el número que conecta los denominadores: 3 × 3 = 9",
      "Concluir que son equivalentes"
    ],
    "correctOrder": [
      1,
      0,
      2
    ],
    "correct": [
      1,
      0,
      2
    ],
    "feedback": "¡Muy bien! Primero el denominador, después el numerador, después la conclusión.",
    "feedbackWrong": "¿Qué revisás primero: el denominador o la conclusión final?"
  },
  {
    "id": "MAT21-000035",
    "status": "validated",
    "kind": "memory",
    "stage": "Práctica",
    "skill": "ASOC_01",
    "difficulty": 1,
    "concept": "pares equivalentes",
    "pairs": [
      {
        "a": "1/2",
        "b": "4/8"
      },
      {
        "a": "1/3",
        "b": "3/9"
      },
      {
        "a": "2/3",
        "b": "8/12"
      }
    ],
    "feedback": "¡Muy bien! Encontraste todos los pares equivalentes.",
    "feedbackWrong": "No hay una respuesta incorrecta en este juego: solo seguí buscando la pareja correcta."
  },
  {
    "id": "MAT21-000036",
    "status": "validated",
    "kind": "table-fill",
    "stage": "Práctica",
    "skill": "CALC_01",
    "difficulty": 1,
    "concept": "cadena de equivalentes",
    "question": "Completá la cadena de fracciones equivalentes a 1/2.",
    "headers": [
      "Multiplicar por",
      "Fracción equivalente"
    ],
    "rows": [
      [
        "× 2",
        "2/4"
      ],
      [
        "× 3",
        null
      ],
      [
        "× 4",
        null
      ]
    ],
    "answers": [
      "3/6",
      "4/8"
    ],
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Multiplicá el 1 y el 2 de 1/2 por el número de esa fila."
      },
      {
        "when": "correct",
        "text": "¡Eso! Vas armando la cadena de equivalentes."
      },
      {
        "when": "wrong",
        "text": "Multiplicá numerador Y denominador por el número de la fila."
      },
      {
        "when": "complete",
        "text": "¡Bien! 1/2 tiene infinitos equivalentes."
      }
    ],
    "feedback": "¡Muy bien! 2/4, 3/6 y 4/8 son todas equivalentes a 1/2.",
    "feedbackWrong": "Multiplicá el 1 y el 2 de 1/2 por el número de esa fila."
  },
  {
    "id": "MAT21-000037",
    "status": "validated",
    "kind": "table-fill",
    "stage": "Práctica",
    "skill": "CALC_01",
    "difficulty": 3,
    "concept": "cadena de equivalentes",
    "question": "Completá la cadena de fracciones equivalentes a 1/3.",
    "headers": [
      "Multiplicar por",
      "Fracción equivalente"
    ],
    "rows": [
      [
        "× 2",
        "2/6"
      ],
      [
        "× 3",
        null
      ],
      [
        "× 4",
        null
      ]
    ],
    "answers": [
      "3/9",
      "4/12"
    ],
    "feedback": "¡Exacto! 2/6, 3/9 y 4/12 son todas equivalentes a 1/3.",
    "feedbackWrong": "Multiplicá el 1 y el 3 de 1/3 por el número de esa fila."
  },
  {
    "id": "MAT21-000038",
    "status": "validated",
    "kind": "word-bank",
    "stage": "Práctica",
    "skill": "COMP_03",
    "difficulty": 1,
    "concept": "regla de equivalencia",
    "question": "Completá la regla.",
    "sentence": "Dos fracciones son equivalentes si multiplicás numerador y denominador por el ___ número.",
    "bank": [
      "mismo",
      "doble",
      "triple"
    ],
    "correct": 0,
    "answers": [
      "mismo"
    ],
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Pensá qué tienen en común el número que multiplica arriba y el que multiplica abajo."
      },
      {
        "when": "correct",
        "text": "¡Eso! El mismo número."
      },
      {
        "when": "wrong",
        "text": "¿Tiene que ser un número distinto arriba y abajo, o el mismo?"
      },
      {
        "when": "complete",
        "text": "¡Bien! Esa es toda la regla de equivalencia."
      }
    ],
    "feedback": "¡Exacto! El mismo número arriba y abajo.",
    "feedbackWrong": "Pensá: ¿el número que multiplica arriba tiene que ser igual al de abajo?",
    "hint": "Si arriba multiplicás por 3, abajo también.",
    "scaffold": {
      "altExplanation": "1/2 × (3/3) = 3/6 — multiplicaste arriba Y abajo por 3, el mismo número."
    }
  },
  {
    "id": "MAT21-000039",
    "status": "validated",
    "kind": "word-bank",
    "stage": "Práctica",
    "skill": "COMP_03",
    "difficulty": 2,
    "concept": "identificar no equivalencia",
    "question": "Completá la frase.",
    "sentence": "Si el número que conecta los denominadores no funciona igual para los numeradores, las fracciones ___ son equivalentes.",
    "bank": [
      "no",
      "sí",
      "casi"
    ],
    "correct": 0,
    "answers": [
      "no"
    ],
    "feedback": "¡Exacto! Los dos números tienen que coincidir, no solo uno.",
    "feedbackWrong": "Pensá: ¿alcanza con que UNO de los dos números coincida?",
    "hint": "Tienen que coincidir los dos, numerador Y denominador.",
    "scaffold": {
      "altExplanation": "1/2 y 2/5: 2×2=4, no 5. El numerador no siguió la misma multiplicación que el denominador, por eso no son equivalentes."
    }
  },
  {
    "id": "MAT21-000040",
    "status": "validated",
    "kind": "fill",
    "stage": "Práctica",
    "skill": "CALC_01",
    "difficulty": 3,
    "concept": "construir un equivalente",
    "question": "Escribí una fracción equivalente a 1/2 con denominador 6.",
    "answer": "3/6",
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "¿Por qué número se multiplicó el 2 para llegar a 6?"
      },
      {
        "when": "correct",
        "text": "¡Eso! 3/6."
      },
      {
        "when": "wrong",
        "text": "2 × 3 = 6. Multiplicá el 1 por ese mismo 3."
      },
      {
        "when": "complete",
        "text": "¡Bien! Ya construís equivalentes vos mismo."
      }
    ],
    "feedback": "¡Muy bien! 3/6 es equivalente a 1/2.",
    "feedbackWrong": "¿Por qué número multiplicaste el 2 para llegar a 6? Multiplicá el 1 por lo mismo.",
    "hint": "2 × 3 = 6.",
    "feedbackExtra": "2 × 3 = 6, así que 1 × 3 = 3. La fracción equivalente es 3/6.",
    "scaffold": {
      "example": {
        "label": "Un caso más simple: duplicar (multiplicar por 2)",
        "steps": [
          {
            "math": "1/4 = ?/8"
          },
          {
            "op": "Duplico numerador y denominador",
            "reason": "Duplicar (×2) es la forma más simple de armar un equivalente — no hace falta buscar por qué número multiplicar, siempre es 2.",
            "math": "1 × 2 = 2, 4 × 2 = 8"
          },
          {
            "math": "1/4 = 2/8",
            "result": true
          }
        ]
      }
    }
  },
  {
    "id": "MAT21-000041",
    "status": "validated",
    "kind": "error-find",
    "stage": "Práctica",
    "skill": "CORR_01",
    "difficulty": 3,
    "concept": "verificar equivalencia",
    "question": "Encontrá la palabra incorrecta en esta verificación.",
    "sentence": [
      "Para",
      "verificar",
      "si",
      "dos",
      "tercios",
      "y",
      "seis",
      "novenos",
      "son",
      "equivalentes",
      "multiplico",
      "dos",
      "por",
      "tres",
      "y",
      "me",
      "da",
      "ocho"
    ],
    "errorIndex": 17,
    "correction": "seis",
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Calculá 2 × 3 vos mismo antes de revisar la frase."
      },
      {
        "when": "correct",
        "text": "¡Eso! 2 × 3 es seis, no ocho."
      },
      {
        "when": "wrong",
        "text": "Volvé a multiplicar 2 por 3."
      },
      {
        "when": "complete",
        "text": "¡Bien! Un error de cálculo cambia toda la conclusión."
      }
    ],
    "feedback": "¡Exacto! 2 × 3 = 6 (seis), no ocho — por eso 2/3 = 6/9.",
    "feedbackWrong": "Fijate si el resultado de la multiplicación es correcto.",
    "hint": "Dos por tres, ¿cuánto es?",
    "scaffold": {
      "altExplanation": "Multiplicá 2 por 3 vos mismo, despacio: 2+2+2."
    }
  },
  {
    "id": "MAT21-000042",
    "status": "validated",
    "kind": "mc",
    "stage": "Práctica",
    "skill": "CALC_01",
    "difficulty": 3,
    "concept": "reconocer el NO equivalente",
    "question": "¿Cuál de estas fracciones NO es equivalente a 1/2?",
    "options": [
      "2/4",
      "3/6",
      "3/8",
      "4/8"
    ],
    "correct": 2,
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Revisá cada opción: ¿el mismo número multiplica arriba y abajo?"
      },
      {
        "when": "correct",
        "text": "¡Eso! 3/8 no sigue la regla."
      },
      {
        "when": "wrong",
        "text": "Probá con 2 × 4 = 8. ¿Y 1 × 4?"
      },
      {
        "when": "complete",
        "text": "¡Bien! Encontraste la que rompe el patrón."
      }
    ],
    "feedback": "¡Exacto! 3/8 no es equivalente — 1×4=4, no 3.",
    "feedbackWrong": "Para cada opción, verificá si el mismo número multiplica el 1 y el 2 de 1/2.",
    "hint": "Si el denominador se multiplicó por 4, el numerador también debería.",
    "feedbackByOption": {
      "0": "Esa sí es equivalente: 1×2=2, 2×2=4.",
      "1": "Esa sí es equivalente: 1×3=3, 2×3=6.",
      "3": "Esa sí es equivalente: 1×4=4, 2×4=8."
    },
    "scaffold": {
      "example": {
        "label": "Un caso parecido: revisar si 2/6 es equivalente a 1/3",
        "steps": [
          {
            "math": "1/3 ___ 2/6"
          },
          {
            "op": "3×2=6, ¿y 1×2?",
            "math": "1×2=2"
          },
          {
            "math": "2/6 sí es equivalente",
            "result": true
          }
        ]
      }
    }
  },
  {
    "id": "MAT21-000061",
    "status": "validated",
    "kind": "tf",
    "stage": "Práctica",
    "skill": "CORR_02",
    "difficulty": 3,
    "question": "Para encontrar una fracción equivalente a 1/2, alguien sumó 2 al numerador y al denominador y obtuvo 3/4. Esa fracción es equivalente a 1/2.",
    "correct": false,
    "feedback": "¡Correcto! 3/4 NO es equivalente a 1/2 — sumar el mismo número arriba y abajo no funciona. Hay que MULTIPLICAR los dos por el mismo número, no sumarles lo mismo.",
    "feedbackWrong": "Comprobá: ¿1/2 y 3/4 representan la misma cantidad? Fijate qué operación se usó para pasar de una a otra.",
    "hint": "Fijate en los dos números del enunciado: pasar de 1→3 y de 2→4 sumando 2, ¿es la MISMA operación que multiplicar?",
    "feedbackExtra": "Si multiplicás 1/2 por 2/2 obtenés 2/4 (sí equivalente). Sumar 2 arriba y abajo da 3/4, que es una fracción distinta.",
    "scaffold": {
      "altExplanation": "Para pasar de 1/2 a una fracción equivalente hay que MULTIPLICAR el numerador y el denominador por el mismo número (ej. ×2 da 2/4). Sumar el mismo número a los dos (1+2=3, 2+2=4) da una fracción distinta, no equivalente."
    }
  }
];

const EXERCISES_M2 = [
  {
    "id": "MAT21-000043",
    "status": "validated",
    "kind": "slides",
    "stage": "Introducción",
    "type": "micro",
    "difficulty": 1,
    "feedback": "¡A comparar cualquier par de fracciones!",
    "slides": [
      {
        "titulo": "¿Y si los denominadores son distintos?",
        "texto": "Cuando ninguna de las reglas anteriores aplica, buscás un denominador que ambas fracciones puedan compartir.",
        "ejemplo": "1/2 y 1/3 no tienen nada en común... todavía."
      },
      {
        "titulo": "Listar múltiplos hasta encontrar uno compartido",
        "texto": "Escribís los múltiplos de cada denominador hasta que aparezca el mismo número en las dos listas.",
        "ejemplo": "Múltiplos de 2: 2, 4, 6. Múltiplos de 3: 3, 6. El 6 aparece en las dos."
      },
      {
        "titulo": "Lo que vamos a descubrir",
        "texto": "Vas a convertir cualquier par de fracciones a un denominador compartido y compararlas sin dudar.",
        "nota": "Error común: quedarse en la primera fracción y olvidarse de convertir también la segunda."
      }
    ]
  },
  {
    "id": "MAT21-000044",
    "status": "validated",
    "kind": "concept",
    "stage": "Concepto",
    "difficulty": 2,
    "concept": "listar múltiplos hasta encontrar uno compartido",
    "feedback": "¡Perfecto! Ahora a comparar vos.",
    "pages": [
      {
        "why": {
          "title": "Buscar un denominador compartido",
          "body": "Para comparar 1/2 y 1/3, primero los convertís a fracciones con el mismo denominador. Ese número compartido lo encontrás listando múltiplos.",
          "analogy": "Es como convertir pesos y dólares a una misma moneda antes de comparar cuánto vale cada uno."
        },
        "demo": {
          "type": "fraction-split",
          "params": {
            "numerator": 3,
            "denominator": 6
          },
          "caption": "1/2 convertido a sextos: 3/6."
        },
        "example": {
          "label": "Comparar 1/2 y 1/3",
          "steps": [
            {
              "math": "1/2 ___ 1/3"
            },
            {
              "op": "Listo múltiplos de 2",
              "reason": "Para encontrar un denominador compartido.",
              "math": "2, 4, 6",
              "highlight": true
            },
            {
              "op": "Listo múltiplos de 3",
              "reason": "Hasta que aparezca uno repetido.",
              "math": "3, 6"
            },
            {
              "op": "Encuentro el compartido",
              "reason": "El 6 está en las dos listas.",
              "math": "Denominador compartido: 6"
            },
            {
              "op": "Multiplico el denominador",
              "reason": "2 se convirtió en 6.",
              "math": "2 × 3 = 6",
              "highlight": true
            },
            {
              "op": "Multiplico el numerador igual",
              "reason": "Tengo que hacer lo mismo arriba y abajo.",
              "math": "1 × 3 = 3"
            },
            {
              "op": "Anoto el equivalente",
              "reason": "Ya tengo la fracción convertida.",
              "math": "1/2 = 3/6"
            },
            {
              "op": "Multiplico el denominador",
              "reason": "3 se convirtió en 6.",
              "math": "3 × 2 = 6",
              "highlight": true
            },
            {
              "op": "Multiplico el numerador igual",
              "reason": "Tengo que hacer lo mismo arriba y abajo.",
              "math": "1 × 2 = 2"
            },
            {
              "op": "Anoto el equivalente",
              "reason": "Ya tengo la fracción convertida.",
              "math": "1/3 = 2/6"
            },
            {
              "op": "Comparo",
              "reason": "Ya tienen el mismo denominador.",
              "math": "3/6 > 2/6, entonces 1/2 > 1/3",
              "result": true
            }
          ]
        },
        "summary": {
          "label": "Lo que tenés que recordar",
          "items": [
            "Listá los múltiplos de cada denominador hasta encontrar uno repetido.",
            "Convertí LAS DOS fracciones a ese denominador compartido.",
            "Recién ahí comparás los numeradores, como cuando el denominador ya era igual."
          ]
        }
      }
    ]
  },
  {
    "id": "MAT21-000045",
    "status": "validated",
    "kind": "table-fill",
    "stage": "Práctica",
    "skill": "CALC_01",
    "difficulty": 1,
    "concept": "listar múltiplos",
    "question": "Completá los múltiplos de 2 y de 3 hasta encontrar uno compartido.",
    "headers": [
      "Múltiplos de 2",
      "Múltiplos de 3"
    ],
    "rows": [
      [
        "2",
        "3"
      ],
      [
        null,
        null
      ],
      [
        "6",
        "6"
      ]
    ],
    "answers": [
      "4",
      "5"
    ],
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Seguí contando de a 2 en la primera columna y de a 3 en la segunda."
      },
      {
        "when": "correct",
        "text": "¡Eso! Vas armando las dos listas."
      },
      {
        "when": "wrong",
        "text": "Contá de a 2 (o de a 3) desde el número anterior de esa columna."
      },
      {
        "when": "complete",
        "text": "¡Bien! El 6 aparece en las dos listas — ese es el compartido."
      }
    ],
    "feedback": "¡Muy bien! Múltiplos de 2: 2,4,6. Múltiplos de 3: 3,5... espera, 3,6. El 6 es compartido.",
    "feedbackWrong": "Contá de a 2 en la primera columna, de a 3 en la segunda."
  },
  {
    "id": "MAT21-000046",
    "status": "validated",
    "kind": "table-fill",
    "stage": "Práctica",
    "skill": "CALC_01",
    "difficulty": 2,
    "concept": "listar múltiplos",
    "question": "Completá los múltiplos de 3 y de 4 hasta encontrar uno compartido.",
    "headers": [
      "Múltiplos de 3",
      "Múltiplos de 4"
    ],
    "rows": [
      [
        "3",
        "4"
      ],
      [
        "6",
        "8"
      ],
      [
        null,
        null
      ]
    ],
    "answers": [
      "9",
      "12"
    ],
    "feedback": "¡Exacto! El 12 aparece en las dos listas.",
    "feedbackWrong": "Contá de a 3 en la primera columna, de a 4 en la segunda."
  },
  {
    "id": "MAT21-000047",
    "status": "validated",
    "kind": "fill",
    "stage": "Práctica",
    "skill": "CALC_01",
    "difficulty": 1,
    "concept": "encontrar el denominador compartido",
    "question": "Múltiplos de 4: 4, 8, 12. Múltiplos de 6: 6, 12. ¿Cuál es el denominador compartido?",
    "answer": "12",
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Buscá el número que aparece en las dos listas."
      },
      {
        "when": "correct",
        "text": "¡Eso! 12."
      },
      {
        "when": "wrong",
        "text": "¿Qué número está en las dos listas al mismo tiempo?"
      },
      {
        "when": "complete",
        "text": "¡Bien! Ese es el número que vas a usar para convertir las dos fracciones."
      }
    ],
    "feedback": "¡Muy bien! 12 está en las dos listas.",
    "feedbackWrong": "Buscá el número que se repite en ambas listas.",
    "hint": "Mirá el último número de cada lista.",
    "feedbackExtra": "4, 8, 12 y 6, 12 — el 12 aparece en las dos, así que es el denominador compartido.",
    "scaffold": {
      "altExplanation": "Múltiplos de 4: 4,8,12. Múltiplos de 6: 6,12. Buscá el número que está en las dos listas."
    }
  },
  {
    "id": "MAT21-000048",
    "status": "validated",
    "kind": "frac-visual",
    "stage": "Práctica",
    "skill": "COMP_01",
    "difficulty": 2,
    "concept": "comparar distinto denominador",
    "mode": "compare",
    "numerator": 1,
    "denominator": 2,
    "shape": "bar",
    "numerator2": 1,
    "denominator2": 3,
    "shape2": "bar",
    "answer": ">",
    "question": "Compará 1/2 y 1/3 (denominadores distintos).",
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Mirá hasta dónde llega el sombreado de cada barra."
      },
      {
        "when": "correct",
        "text": "¡Eso! 1/2 es mayor."
      },
      {
        "when": "wrong",
        "text": "Compará visualmente cuál barra tiene más sombreado, sin necesidad de convertir."
      },
      {
        "when": "complete",
        "text": "¡Bien! El dibujo confirma lo que calculaste: 1/2 = 3/6 y 1/3 = 2/6."
      }
    ],
    "feedback": "¡Muy bien! 1/2 > 1/3.",
    "feedbackWrong": "Compará visualmente cuánto ocupa sombreado cada barra.",
    "hint": "Convertidas a sextos: 1/2=3/6 y 1/3=2/6. ¿Cuál numerador es mayor?",
    "feedbackExtra": "1/2 = 3/6 y 1/3 = 2/6 (denominador compartido: 6). 3 > 2, entonces 1/2 > 1/3."
  },
  {
    "id": "MAT21-000060",
    "status": "validated",
    "kind": "concept",
    "stage": "Profundización",
    "difficulty": 3,
    "concept": "re-anclar el método completo antes de aplicarlo solo",
    "tier": "profundizacion",
    "recap": "Ya viste cómo listar múltiplos, convertir las dos fracciones y comparar. Ahora vas a aplicar el método completo vos solo, sin que te den los pasos armados.",
    "feedback": "¡Bien! Ahora seguís con los ejercicios que vienen.",
    "pages": [
      {
        "why": {
          "title": "El método completo, de nuevo",
          "body": "Antes de aplicarlo solo, repasemos las 3 partes: buscar el denominador compartido, convertir las DOS fracciones, y recién ahí comparar.",
          "analogy": "Como armar un mueble: si te salteás un paso, el resultado no cierra."
        },
        "demo": {
          "type": "fraction-split",
          "params": {
            "numerator": 3,
            "denominator": 12
          },
          "caption": "2/3 convertido a doceavos: 8/12."
        },
        "example": {
          "label": "Repasar con 3/5 y 1/2",
          "steps": [
            {
              "math": "3/5 ___ 1/2"
            },
            {
              "op": "Listo múltiplos de 5 y de 2",
              "reason": "Busco el compartido.",
              "math": "Compartido: 10",
              "highlight": true
            },
            {
              "op": "Convierto 3/5",
              "reason": "5 × 2 = 10, entonces 3 × 2 = 6.",
              "math": "3/5 = 6/10"
            },
            {
              "op": "Convierto 1/2",
              "reason": "2 × 5 = 10, entonces 1 × 5 = 5.",
              "math": "1/2 = 5/10"
            },
            {
              "op": "Comparo",
              "reason": "Ya tienen el mismo denominador.",
              "math": "6/10 > 5/10, entonces 3/5 > 1/2",
              "result": true
            }
          ]
        },
        "summary": {
          "label": "Lo que tenés que recordar",
          "items": [
            "Buscar el denominador compartido.",
            "Convertir LAS DOS fracciones, no solo una.",
            "Comparar recién al final."
          ]
        }
      }
    ]
  },
  {
    "id": "MAT21-000049",
    "status": "validated",
    "kind": "order",
    "stage": "Práctica",
    "skill": "TEMP_02",
    "difficulty": 3,
    "concept": "pasos del método",
    "question": "Ordená los pasos para comparar 2/3 y 3/4.",
    "words": [
      "Comparar los numeradores ya convertidos: 8/12 y 9/12",
      "Listar múltiplos de 3 y de 4 hasta encontrar el 12 compartido",
      "Convertir 2/3 en 8/12 y 3/4 en 9/12"
    ],
    "correctOrder": [
      1,
      2,
      0
    ],
    "correct": [
      1,
      2,
      0
    ],
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "¿Qué buscás primero: el denominador compartido o la comparación final?"
      },
      {
        "when": "correct",
        "text": "¡Eso! Buscar, convertir, comparar."
      },
      {
        "when": "wrong",
        "text": "El denominador compartido va primero."
      },
      {
        "when": "complete",
        "text": "¡Bien! Ese orden sirve para cualquier par de fracciones."
      }
    ],
    "feedback": "¡Muy bien! Buscar el compartido, convertir las dos, después comparar.",
    "feedbackWrong": "¿Qué paso tiene que pasar antes de poder comparar los numeradores?"
  },
  {
    "id": "MAT21-000050",
    "status": "validated",
    "kind": "order",
    "stage": "Práctica",
    "skill": "TEMP_02",
    "difficulty": 3,
    "concept": "pasos del método",
    "question": "Ordená los pasos para comparar 1/4 y 1/6.",
    "words": [
      "Convertir 1/4 en 3/12 y 1/6 en 2/12",
      "Concluir que 1/4 es mayor",
      "Listar múltiplos de 4 y de 6 hasta encontrar el 12 compartido"
    ],
    "correctOrder": [
      2,
      0,
      1
    ],
    "correct": [
      2,
      0,
      1
    ],
    "feedback": "¡Exacto! Buscar, convertir, concluir.",
    "feedbackWrong": "¿Qué paso va primero: buscar el denominador o convertir las fracciones?"
  },
  {
    "id": "MAT21-000062",
    "status": "validated",
    "kind": "concept",
    "stage": "Enseñanza",
    "concept": "fracción de referencia (1/2)",
    "feedback": "¡Bien! Esta herramienta te ahorra tiempo cuando no hace falta el valor exacto.",
    "pages": [
      {
        "why": {
          "title": "Un atajo: usar 1/2 como referencia",
          "body": "Antes de listar múltiplos, a veces alcanza con comparar cada fracción contra 1/2. Si una es más chica que 1/2 y la otra más grande, ya sabés cuál gana — sin buscar denominador compartido.",
          "analogy": "Es como comparar dos personas por si son más altas o más bajas que la puerta, en vez de medirlas con precisión cuando no hace falta."
        },
        "example": {
          "label": "Comparar 2/9 y 5/8 usando 1/2 como referencia",
          "steps": [
            {
              "math": "2/9 ___ 5/8"
            },
            {
              "op": "Comparo 2/9 con 1/2",
              "reason": "La mitad de 9 es 4,5 — 2 es menos que eso.",
              "math": "2/9 < 1/2",
              "highlight": true
            },
            {
              "op": "Comparo 5/8 con 1/2",
              "reason": "La mitad de 8 es 4 — 5 es más que eso.",
              "math": "5/8 > 1/2"
            },
            {
              "op": "Concluyo",
              "reason": "Si una es menor que 1/2 y la otra mayor, ya sé cuál gana.",
              "math": "2/9 < 5/8",
              "result": true
            }
          ]
        },
        "summary": {
          "label": "Cuándo conviene",
          "items": [
            "Funciona rápido cuando las dos fracciones quedan en lados distintos de 1/2.",
            "Si las dos son mayores (o las dos menores) que 1/2, este atajo no alcanza — ahí sí hace falta listar múltiplos.",
            "Es una herramienta más, no reemplaza el método de denominador compartido."
          ]
        }
      }
    ]
  },
  {
    "id": "MAT21-000063",
    "status": "validated",
    "kind": "classify",
    "stage": "Práctica",
    "skill": "CLAS_01",
    "difficulty": 2,
    "question": "Clasificá cada fracción: ¿es más o menos que 1/2?",
    "items": [
      "2/9",
      "5/8",
      "3/7",
      "4/6"
    ],
    "categories": [
      "Menos que 1/2",
      "Más que 1/2"
    ],
    "correct": [
      0,
      1,
      0,
      1
    ],
    "feedback": "¡Bien! Comparaste el numerador contra la mitad del denominador en cada caso.",
    "feedbackWrong": "Fijate si el numerador es más o menos que la mitad del denominador.",
    "hint": "La mitad de 9 es 4,5. Si el numerador es menor, la fracción es menor que 1/2."
  },
  {
    "id": "MAT21-000064",
    "status": "validated",
    "kind": "mc",
    "stage": "Práctica",
    "skill": "CALC_03",
    "difficulty": 3,
    "question": "Sin buscar denominador compartido: ¿cuál es mayor, 2/7 o 5/9?",
    "options": [
      "2/7",
      "5/9",
      "Son iguales",
      "No se puede saber sin denominador compartido"
    ],
    "correct": 1,
    "feedback": "¡Exacto! 2/7 es menos que 1/2 (la mitad de 7 es 3,5) y 5/9 es más que 1/2 (la mitad de 9 es 4,5) — con eso alcanza para saber que 5/9 gana.",
    "feedbackWrong": "Compar.á cada fracción contra 1/2 — no hace falta el denominador compartido esta vez.",
    "hint": "La mitad de 7 es 3,5. La mitad de 9 es 4,5. ¿Cada numerador queda arriba o abajo de esa mitad?",
    "scaffold": {
      "altExplanation": "La mitad de 7 es 3,5: como 2 es menor, 2/7 < 1/2. La mitad de 9 es 4,5: como 5 es mayor, 5/9 > 1/2. Si una fracción queda por debajo de 1/2 y la otra por arriba, ya sabés cuál es mayor sin buscar denominador compartido."
    }
  },
  {
    "id": "MAT21-000051",
    "status": "validated",
    "kind": "classify",
    "stage": "Práctica",
    "skill": "CLAS_02",
    "difficulty": 2,
    "concept": "cuál es mayor, distinto denominador",
    "question": "Clasificá cuál fracción es mayor en cada par (ya convertidas).",
    "items": [
      "2/3 (=8/12) vs 3/4 (=9/12)",
      "1/2 (=5/10) vs 2/5 (=4/10)",
      "1/4 (=3/12) vs 1/6 (=2/12)"
    ],
    "categories": [
      "Gana la primera",
      "Gana la segunda"
    ],
    "correct": [
      1,
      0,
      0
    ],
    "feedback": "¡Muy bien! Una vez convertidas, comparás igual que con mismo denominador.",
    "feedbackWrong": "Compará los numeradores ya convertidos de cada par."
  },
  {
    "id": "MAT21-000052",
    "status": "validated",
    "kind": "match",
    "stage": "Práctica",
    "skill": "ASOC_01",
    "difficulty": 2,
    "concept": "denominador compartido",
    "question": "Relacioná cada par de fracciones con su denominador compartido.",
    "left": [
      "1/2 y 1/3",
      "1/4 y 1/6",
      "3/5 y 1/2"
    ],
    "right": [
      "10",
      "6",
      "12"
    ],
    "pairs": {
      "0": 1,
      "1": 2,
      "2": 0
    },
    "feedback": "¡Exacto! Cada par tiene su propio denominador compartido.",
    "feedbackWrong": "Listá los múltiplos de cada denominador de ese par."
  },
  {
    "id": "MAT21-000053",
    "status": "validated",
    "kind": "memory",
    "stage": "Práctica",
    "skill": "ASOC_01",
    "difficulty": 1,
    "concept": "denominador compartido",
    "pairs": [
      {
        "a": "2 y 3",
        "b": "compartido: 6"
      },
      {
        "a": "4 y 6",
        "b": "compartido: 12"
      },
      {
        "a": "2 y 5",
        "b": "compartido: 10"
      }
    ],
    "feedback": "¡Muy bien! Ya reconocés estos denominadores compartidos de memoria.",
    "feedbackWrong": "No hay una respuesta incorrecta en este juego: solo seguí buscando la pareja correcta."
  },
  {
    "id": "MAT21-000054",
    "status": "validated",
    "kind": "word-bank",
    "stage": "Práctica",
    "skill": "COMP_03",
    "difficulty": 1,
    "concept": "regla del método",
    "question": "Completá la frase.",
    "sentence": "Para comparar fracciones con distinto denominador, primero hay que convertirlas a un denominador ___.",
    "bank": [
      "compartido",
      "distinto",
      "menor"
    ],
    "correct": 0,
    "answers": [
      "compartido"
    ],
    "guided": true,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Pensá qué tienen que tener en común las dos fracciones antes de comparar."
      },
      {
        "when": "correct",
        "text": "¡Eso! Un denominador compartido."
      },
      {
        "when": "wrong",
        "text": "¿Podés comparar numeradores si los denominadores no coinciden?"
      },
      {
        "when": "complete",
        "text": "¡Bien! Sin denominador compartido, no se puede comparar directo."
      }
    ],
    "feedback": "¡Exacto! Necesitás un denominador compartido antes de comparar.",
    "feedbackWrong": "Pensá: ¿podés comparar numeradores si los denominadores no coinciden?",
    "hint": "Tienen que quedar iguales para poder compararlos.",
    "scaffold": {
      "altExplanation": "Para comparar 1/2 y 1/3 primero los convertís a sextos: 3/6 y 2/6. Recién ahí comparás."
    }
  },
  {
    "id": "MAT21-000055",
    "status": "validated",
    "kind": "fill",
    "stage": "Práctica",
    "skill": "CALC_01",
    "difficulty": 3,
    "concept": "aplicar el método completo",
    "question": "Entre 3/5 y 1/2, ¿cuál es mayor? (denominador compartido: 10)",
    "answer": "3/5",
    "guided": false,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Convertí las dos a décimos antes de comparar."
      },
      {
        "when": "correct",
        "text": "¡Eso! 3/5."
      },
      {
        "when": "wrong",
        "text": "3/5 = 6/10 y 1/2 = 5/10. ¿Cuál numerador es mayor?"
      },
      {
        "when": "complete",
        "text": "¡Bien! Ya aplicás el método completo vos solo."
      }
    ],
    "feedback": "¡Muy bien! 3/5 = 6/10, que es mayor que 1/2 = 5/10.",
    "feedbackWrong": "Convertí las dos fracciones a décimos y compará los numeradores.",
    "hint": "3/5 = ?/10 y 1/2 = ?/10.",
    "feedbackExtra": "3/5 = 6/10 (3×2/5×2) y 1/2 = 5/10 (1×5/2×5). 6 > 5, entonces 3/5 > 1/2.",
    "scaffold": {
      "example": {
        "label": "Un caso más simple: el denominador ya está compartido",
        "steps": [
          {
            "math": "3/10 ___ 4/10"
          },
          {
            "op": "Comparo los numeradores",
            "reason": "Si el denominador ya es el mismo en las dos, alcanza con mirar el numerador.",
            "math": "3 < 4, entonces 3/10 < 4/10",
            "result": true
          }
        ]
      }
    }
  },
  {
    "id": "MAT21-000056",
    "status": "validated",
    "kind": "error-find",
    "stage": "Práctica",
    "skill": "CORR_01",
    "difficulty": 3,
    "concept": "verificar el método",
    "question": "Encontrá la palabra incorrecta en esta resolución.",
    "sentence": [
      "Para",
      "comparar",
      "un",
      "medio",
      "y",
      "dos",
      "quintos",
      "convierto",
      "a",
      "décimos",
      "un",
      "medio",
      "es",
      "cinco",
      "décimos",
      "y",
      "dos",
      "quintos",
      "es",
      "cinco",
      "décimos"
    ],
    "errorIndex": 19,
    "correction": "cuatro",
    "guided": false,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Calculá 2/5 convertido a décimos vos mismo."
      },
      {
        "when": "correct",
        "text": "¡Eso! 2/5 = 4/10, no 5/10."
      },
      {
        "when": "wrong",
        "text": "2 × 2 = 4. ¿Es eso lo que dice la frase?"
      },
      {
        "when": "complete",
        "text": "¡Bien! Un solo número mal cambia toda la comparación."
      }
    ],
    "feedback": "¡Exacto! 2/5 = 4/10 (cuatro décimos), no cinco.",
    "feedbackWrong": "Convertí 2/5 a décimos vos mismo y compará con lo que dice la frase.",
    "hint": "5 × 2 = 10, así que 2 × 2 = ?",
    "scaffold": {
      "altExplanation": "Convertí 2/5 a décimos vos mismo: 5×2=10, entonces 2×2=?"
    }
  },
  {
    "id": "MAT21-000057",
    "status": "validated",
    "kind": "mc",
    "stage": "Práctica",
    "skill": "CALC_01",
    "difficulty": 3,
    "concept": "aplicar el método completo",
    "question": "¿Cuál es mayor: 2/3 o 3/4?",
    "options": [
      "2/3",
      "3/4",
      "Son iguales",
      "No se puede saber"
    ],
    "correct": 1,
    "guided": false,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Denominador compartido de 3 y 4: buscalo listando múltiplos."
      },
      {
        "when": "correct",
        "text": "¡Eso! 3/4."
      },
      {
        "when": "wrong",
        "text": "Convertí las dos a doceavos: 2/3=8/12 y 3/4=9/12."
      },
      {
        "when": "complete",
        "text": "¡Bien! Ya comparás cualquier par de fracciones."
      }
    ],
    "feedback": "¡Exacto! 3/4 = 9/12, que es mayor que 2/3 = 8/12.",
    "feedbackWrong": "Convertí las dos fracciones a doceavos antes de comparar.",
    "hint": "Múltiplos de 3: 3,6,9,12. Múltiplos de 4: 4,8,12. Compartido: 12.",
    "feedbackByOption": {
      "0": "Convertida a doceavos, 2/3 es 8/12 — revisá contra 3/4.",
      "2": "8/12 y 9/12 no son iguales.",
      "3": "Sí se puede saber: convertís a un denominador compartido."
    },
    "scaffold": {
      "example": {
        "label": "Un caso parecido: 1/2 y 1/3",
        "steps": [
          {
            "math": "1/2 ___ 1/3"
          },
          {
            "op": "Denominador compartido: 6",
            "math": "1/2=3/6, 1/3=2/6"
          },
          {
            "op": "Comparo",
            "math": "3/6 > 2/6, entonces 1/2 > 1/3",
            "result": true
          }
        ]
      }
    }
  },
  {
    "id": "MAT21-000058",
    "status": "validated",
    "kind": "tf",
    "stage": "Práctica",
    "skill": "CORR_02",
    "difficulty": 2,
    "concept": "verificar el método",
    "question": "Para comparar 1/2 y 2/5, el denominador compartido es 10.",
    "correct": true,
    "guided": false,
    "guidedMessages": [
      {
        "when": "start",
        "text": "Listá los múltiplos de 2 y de 5 y revisá si el 10 aparece en las dos."
      },
      {
        "when": "correct",
        "text": "¡Eso! Múltiplos de 2: ...,10. Múltiplos de 5: 5,10."
      },
      {
        "when": "wrong",
        "text": "Listá los múltiplos de 2 y de 5 hasta encontrar el compartido."
      },
      {
        "when": "complete",
        "text": "¡Bien! Verificaste el primer paso del método."
      }
    ],
    "feedback": "¡Verdadero! 10 es múltiplo de 2 y de 5.",
    "feedbackWrong": "Listá los múltiplos de 2 y de 5 y fijate si 10 aparece en las dos listas.",
    "hint": "2,4,6,8,10... y 5,10...",
    "scaffold": {
      "altExplanation": "Múltiplos de 2: 2,4,6,8,10. Múltiplos de 5: 5,10. ¿10 está en las dos listas?"
    }
  }
];

const EXERCISES_M3 = [
  {
    "id": "HOJA-000000",
    "status": "validated",
    "kind": "slides",
    "stage": "Introducción",
    "type": "micro",
    "difficulty": 1,
    "feedback": "¡Listo! Ahora a probar la hoja.",
    "slides": [
      {
        "titulo": "Esta unidad es solo de prueba",
        "texto": "Son ocho problemas de opción múltiple para ver cómo se siente la pantalla nueva: la hoja que se dibuja.",
        "ejemplo": "Elegí una opción, confirmá y, al seguir, la hoja se arruga."
      },
      {
        "titulo": "Probá equivocarte una vez",
        "texto": "Si te equivocás, aparece un aro ámbar y el Motor te da una pista. Después podés intentar de nuevo.",
        "ejemplo": "Así comprobás que la corrección es la de siempre."
      }
    ]
  },
  {
    "id": "HOJA-000001",
    "status": "validated",
    "kind": "mc",
    "stage": "Práctica",
    "skill": "COMP_01",
    "difficulty": 1,
    "concept": "valor posicional",
    "question": "¿Qué número tiene 3 decenas y 4 unidades?",
    "options": [
      "34",
      "43",
      "304",
      "7"
    ],
    "correct": 0,
    "guided": false,
    "feedback": "¡Exacto! Tres decenas son 30 y 4 unidades son 4: 30 + 4 = 34.",
    "feedbackWrong": "Fijate cuántas decenas y cuántas unidades tiene el número que elegiste.",
    "hint": "Una decena vale 10 y una unidad vale 1.",
    "feedbackExtra": "Tres decenas son 30 y 4 unidades son 4: 30 + 4 = 34.",
    "scaffold": {
      "example": {
        "label": "Un caso parecido: 2 decenas y 5 unidades",
        "steps": [
          {
            "math": "2 decenas = 20"
          },
          {
            "math": "5 unidades = 5"
          },
          {
            "math": "20 + 5 = 25",
            "result": true
          }
        ]
      }
    }
  },
  {
    "id": "HOJA-000002",
    "status": "validated",
    "kind": "mc",
    "stage": "Práctica",
    "skill": "CALC_01",
    "difficulty": 1,
    "concept": "sumar para agregar",
    "question": "Ana tiene 12 figuritas y le regalan 5 más. ¿Cuántas tiene ahora?",
    "options": [
      "7",
      "15",
      "17",
      "18"
    ],
    "correct": 2,
    "guided": false,
    "feedback": "¡Exacto! 12 + 5 = 17. Le regalan figuritas, entonces se suma.",
    "feedbackWrong": "Pensá si Ana termina con más o con menos figuritas que al empezar.",
    "hint": "Si le regalan, tiene más que antes: se agrega.",
    "feedbackExtra": "12 + 5 = 17. Le regalan figuritas, entonces se suma.",
    "scaffold": {
      "example": {
        "label": "Un caso parecido: 4 y 3 más",
        "steps": [
          {
            "math": "Tenía 4 y le dan 3"
          },
          {
            "math": "4 + 3"
          },
          {
            "math": "= 7",
            "result": true
          }
        ]
      }
    }
  },
  {
    "id": "HOJA-000003",
    "status": "validated",
    "kind": "mc",
    "stage": "Práctica",
    "skill": "CALC_01",
    "difficulty": 2,
    "concept": "multiplicar grupos iguales",
    "question": "Lucas compró 3 cuadernos de 8 pesos cada uno. ¿Cuántos pesos pagó?",
    "options": [
      "11",
      "16",
      "24",
      "32"
    ],
    "correct": 2,
    "guided": false,
    "feedback": "¡Exacto! 3 × 8 = 24. Cada cuaderno cuesta lo mismo, así que se multiplica.",
    "feedbackWrong": "Hay 3 cuadernos y cada uno cuesta lo mismo. ¿Qué operación junta grupos iguales?",
    "hint": "Son 3 grupos iguales de 8 pesos.",
    "feedbackExtra": "3 × 8 = 24. Cada cuaderno cuesta lo mismo, así que se multiplica.",
    "scaffold": {
      "example": {
        "label": "Un caso parecido: 2 lápices de 5 pesos",
        "steps": [
          {
            "math": "2 grupos de 5"
          },
          {
            "math": "2 × 5"
          },
          {
            "math": "= 10",
            "result": true
          }
        ]
      }
    }
  },
  {
    "id": "HOJA-000004",
    "status": "validated",
    "kind": "mc",
    "stage": "Práctica",
    "skill": "CALC_01",
    "difficulty": 2,
    "concept": "repartir en partes iguales",
    "question": "24 chicos se reparten en 4 equipos iguales. ¿Cuántos hay en cada equipo?",
    "options": [
      "4",
      "6",
      "8",
      "20"
    ],
    "correct": 1,
    "guided": false,
    "feedback": "¡Exacto! 24 ÷ 4 = 6, porque 6 × 4 = 24.",
    "feedbackWrong": "Probá con la multiplicación: ¿qué número por 4 da 24?",
    "hint": "Repartir en partes iguales es dividir.",
    "feedbackExtra": "24 ÷ 4 = 6, porque 6 × 4 = 24.",
    "scaffold": {
      "example": {
        "label": "Un caso parecido: 8 galletitas en 2 platos",
        "steps": [
          {
            "math": "8 ÷ 2"
          },
          {
            "math": "4 × 2 = 8"
          },
          {
            "math": "= 4 en cada plato",
            "result": true
          }
        ]
      }
    }
  },
  {
    "id": "HOJA-000005",
    "status": "validated",
    "kind": "mc",
    "stage": "Práctica",
    "skill": "COMP_01",
    "difficulty": 2,
    "concept": "leer la hora",
    "question": "¿Qué hora marca un reloj con la aguja corta en el 3 y la larga en el 6?",
    "options": [
      "3:30",
      "6:15",
      "3:06",
      "6:30"
    ],
    "correct": 0,
    "guided": false,
    "feedback": "¡Exacto! La corta en el 3 son las 3; la larga en el 6 son 30 minutos: 3:30.",
    "feedbackWrong": "Primero mirá qué aguja marca la hora y cuál los minutos.",
    "hint": "La aguja larga en el 6 marca los minutos: pasó media hora.",
    "feedbackExtra": "La corta en el 3 son las 3; la larga en el 6 son 30 minutos: 3:30.",
    "scaffold": {
      "example": {
        "label": "Un caso parecido: corta en el 5, larga en el 12",
        "steps": [
          {
            "math": "La larga en el 12 = en punto"
          },
          {
            "math": "La corta en el 5"
          },
          {
            "math": "= 5:00",
            "result": true
          }
        ]
      }
    }
  },
  {
    "id": "HOJA-000006",
    "status": "validated",
    "kind": "mc",
    "stage": "Práctica",
    "skill": "COMP_01",
    "difficulty": 2,
    "concept": "fracción como parte",
    "question": "Comiste 3 de las 8 porciones de una pizza. ¿Qué fracción queda?",
    "options": [
      "3/8",
      "5/8",
      "8/3",
      "5/3"
    ],
    "correct": 1,
    "guided": false,
    "feedback": "¡Exacto! Quedan 8 − 3 = 5 porciones de 8: 5/8.",
    "feedbackWrong": "Pedían lo que queda, no lo que comiste.",
    "hint": "Primero pensá cuántas porciones quedan.",
    "feedbackExtra": "Quedan 8 − 3 = 5 porciones de 8: 5/8.",
    "scaffold": {
      "example": {
        "label": "Un caso parecido: 1 de 4 porciones",
        "steps": [
          {
            "math": "Comió 1 de 4"
          },
          {
            "math": "Quedan 3 de 4"
          },
          {
            "math": "= 3/4",
            "result": true
          }
        ]
      }
    }
  },
  {
    "id": "HOJA-000007",
    "status": "validated",
    "kind": "mc",
    "stage": "Práctica",
    "skill": "CALC_01",
    "difficulty": 3,
    "concept": "perímetro",
    "question": "Un rectángulo mide 5 de largo y 3 de ancho. ¿Cuánto mide su contorno?",
    "options": [
      "8",
      "15",
      "16",
      "30"
    ],
    "correct": 2,
    "guided": false,
    "feedback": "¡Exacto! 5 + 3 + 5 + 3 = 16. Un rectángulo tiene dos lados largos y dos anchos.",
    "feedbackWrong": "Acordate de que el rectángulo tiene cuatro lados, no dos.",
    "hint": "El contorno es la suma de los cuatro lados.",
    "feedbackExtra": "5 + 3 + 5 + 3 = 16. Un rectángulo tiene dos lados largos y dos anchos.",
    "scaffold": {
      "example": {
        "label": "Un caso parecido: un cuadrado de lado 2",
        "steps": [
          {
            "math": "Cuatro lados de 2"
          },
          {
            "math": "2 + 2 + 2 + 2"
          },
          {
            "math": "= 8",
            "result": true
          }
        ]
      }
    }
  },
  {
    "id": "HOJA-000008",
    "status": "validated",
    "kind": "mc",
    "stage": "Práctica",
    "skill": "COMP_01",
    "difficulty": 1,
    "concept": "comparar números",
    "question": "¿Cuál es el número mayor?",
    "options": [
      "47",
      "74",
      "39",
      "7"
    ],
    "correct": 1,
    "guided": false,
    "feedback": "¡Exacto! 74 tiene 7 decenas y 47 tiene 4: 74 es el mayor.",
    "feedbackWrong": "Compará primero la cifra de las decenas.",
    "hint": "Mirá primero las decenas.",
    "feedbackExtra": "74 tiene 7 decenas y 47 tiene 4: 74 es el mayor.",
    "scaffold": {
      "example": {
        "label": "Un caso parecido: 25 y 52",
        "steps": [
          {
            "math": "25 tiene 2 decenas"
          },
          {
            "math": "52 tiene 5 decenas"
          },
          {
            "math": "52 > 25",
            "result": true
          }
        ]
      }
    }
  }
];

const MODULE_EXERCISES = {
  "m0": EXERCISES_M0,
  "m1": EXERCISES_M1,
  "m2": EXERCISES_M2,
  "m3": EXERCISES_M3
};

