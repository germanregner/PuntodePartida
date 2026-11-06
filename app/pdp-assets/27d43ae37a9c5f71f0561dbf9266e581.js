

const _ASSET_DEDUP_0 = "../pdp-assets/eb598d810a858eb8e8c62b31e76b7e26.png";

/* DATA ZONE generado por Pipeline v0 — 2026-11-06T11:24:10.839Z
   Proyecto: projects/mat-27-perimetro-area
   Motor fuente: template-standard-v3.html
   NO EDITAR — artefacto generado. Toda modificación vuelve a la Unidad
   (Principio de generación, DOCTRINA_CONGELADA.md §4). */

const PDP_BUILD = {
  "fecha": "2026-11-06 08:24",
  "id": "1c6a60"
};

const APP_CONFIG = {
  "titulo": "Perímetro y Área",
  "materia": "Matemática — Perímetro y Área (MAT-27)",
  "saludo": "¡Hola!",
  "version": "2.0",
  "colorScheme": "math",
  "skin": "atelier",
  "skillCheckAviso": false,
  "atelier": {
    "area": "PdP · Matemática",
    "unidad": "MAT-27 · Perímetro y Área",
    "entrada": "mezcla"
  }
};

const TUTOR = {
  "nombre": "Ronnie",
  "inicial": "R",
  "especialidad": "Matemática — superficies y medidas",
  "colorPrimary": "#5B285F",
  "colorLight": "#FCE3BE",
  "colorAccent": "#B02D76",
  "fraseCierre": "\"Hoy descubriste que podemos comparar superficies cubriéndolas con piezas iguales.\"",
  "mensajesHome": [
    [
      0,
      "\"¡Hola! Soy Ronnie. Vamos a descubrir cuánto espacio ocupa una figura.\""
    ]
  ],
  "mensajesCorrecto": [
    "¡Correcto!",
    "¡Muy bien!",
    "¡Eso es!"
  ],
  "mensajesCorrectoConReintento": [
    "¡Bien! A la segunda salió.",
    "¡Eso!"
  ],
  "mensajesIncorrecto": [
    "Casi.",
    "Probá de nuevo."
  ],
  "mensajesRacha": [
    "🔥 ¡{n} seguidas! Ronnie está contento."
  ],
  "mensajesDificultad": [
    "Tranqui: equivocarse es parte de descubrir."
  ],
  "imgLight": "../pdp-assets/0700446ad5a22079b9ee3869b5a4312c.jpg",
  "imgDark": "../pdp-assets/99840af91048b8efe862d430babd9aa3.jpg",
  "imgHero": "../pdp-assets/c2d0b751b11068e9f35c3d4f5d0c215d.png",
  "imgTip": "../pdp-assets/08eb8c1fdda3e51561f96a72aab6d608.png",
  "imgCelebrateLight": _ASSET_DEDUP_0,
  "imgCelebrateDark": _ASSET_DEDUP_0,
  "imgHint": "../pdp-assets/d62f471ad2583a763f3a67f4c7d38478.png"
};

const MODULES = [
  {
    "id": "m0",
    "nombre": "Cubrir superficies",
    "rotulo": "Lección 1",
    "icono": "🟪",
    "subtitulo": "¿Cuál ocupa más espacio?",
    "alexClose": "\"Hoy descubriste que podemos comparar superficies cubriéndolas con piezas iguales.\""
  }
];

const EXERCISES_M0 = [
  {
    "id": "MAT27-000001",
    "status": "draft",
    "kind": "concept",
    "stage": "Enseñanza",
    "concept": "qué ocupa espacio",
    "pages": [
      {
        "title": "¿Qué ocupa más espacio?",
        "text": "Una figura tiene un interior: ese espacio es su superficie. Hoy vamos a descubrir cómo comparar cuánto espacio ocupan dos figuras.",
        "example": {
          "steps": [
            {
              "op": "Miramos dos figuras",
              "reason": "Cada figura tiene un interior que ocupa lugar.",
              "math": "figura A  /  figura B"
            },
            {
              "op": "Preguntamos cuál ocupa más",
              "reason": "A simple vista no siempre se puede saber.",
              "math": "¿A > B?",
              "result": true
            }
          ]
        }
      }
    ],
    "feedback": "¡Ahora te toca a vos!"
  },
  {
    "id": "MAT27-000002",
    "status": "draft",
    "kind": "mc",
    "stage": "Práctica",
    "skill": "COMP_01",
    "difficulty": 1,
    "concept": "comparar superficies",
    "guided": false,
    "question": "¿Qué figura ocupa más espacio?",
    "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDQ3MCI+PHJlY3QgeD0iODAiIHk9IjgwIiB3aWR0aD0iODYiIGhlaWdodD0iODYiIHJ4PSI5IiBmaWxsPSIjQzc3REYyIiBzdHJva2U9IiMyYTEwNDgiIHN0cm9rZS13aWR0aD0iNyIvPjxyZWN0IHg9IjgwIiB5PSIxNjgiIHdpZHRoPSI4NiIgaGVpZ2h0PSI4NiIgcng9IjkiIGZpbGw9IiNDNzdERjIiIHN0cm9rZT0iIzJhMTA0OCIgc3Ryb2tlLXdpZHRoPSI3Ii8+PHJlY3QgeD0iODAiIHk9IjI1NiIgd2lkdGg9Ijg2IiBoZWlnaHQ9Ijg2IiByeD0iOSIgZmlsbD0iI0M3N0RGMiIgc3Ryb2tlPSIjMmExMDQ4IiBzdHJva2Utd2lkdGg9IjciLz48cmVjdCB4PSIxNjgiIHk9IjI1NiIgd2lkdGg9Ijg2IiBoZWlnaHQ9Ijg2IiByeD0iOSIgZmlsbD0iI0M3N0RGMiIgc3Ryb2tlPSIjMmExMDQ4IiBzdHJva2Utd2lkdGg9IjciLz48cmVjdCB4PSIyNTYiIHk9IjI1NiIgd2lkdGg9Ijg2IiBoZWlnaHQ9Ijg2IiByeD0iOSIgZmlsbD0iI0M3N0RGMiIgc3Ryb2tlPSIjMmExMDQ4IiBzdHJva2Utd2lkdGg9IjciLz48cmVjdCB4PSI1MjAiIHk9IjE2OCIgd2lkdGg9Ijg2IiBoZWlnaHQ9Ijg2IiByeD0iOSIgZmlsbD0iI0I2RTI1QSIgc3Ryb2tlPSIjMWY0YTBhIiBzdHJva2Utd2lkdGg9IjciLz48cmVjdCB4PSI2MDgiIHk9IjE2OCIgd2lkdGg9Ijg2IiBoZWlnaHQ9Ijg2IiByeD0iOSIgZmlsbD0iI0I2RTI1QSIgc3Ryb2tlPSIjMWY0YTBhIiBzdHJva2Utd2lkdGg9IjciLz48cmVjdCB4PSI2OTYiIHk9IjE2OCIgd2lkdGg9Ijg2IiBoZWlnaHQ9Ijg2IiByeD0iOSIgZmlsbD0iI0I2RTI1QSIgc3Ryb2tlPSIjMWY0YTBhIiBzdHJva2Utd2lkdGg9IjciLz48cmVjdCB4PSI1MjAiIHk9IjI1NiIgd2lkdGg9Ijg2IiBoZWlnaHQ9Ijg2IiByeD0iOSIgZmlsbD0iI0I2RTI1QSIgc3Ryb2tlPSIjMWY0YTBhIiBzdHJva2Utd2lkdGg9IjciLz48cmVjdCB4PSI2MDgiIHk9IjI1NiIgd2lkdGg9Ijg2IiBoZWlnaHQ9Ijg2IiByeD0iOSIgZmlsbD0iI0I2RTI1QSIgc3Ryb2tlPSIjMWY0YTBhIiBzdHJva2Utd2lkdGg9IjciLz48cmVjdCB4PSI2OTYiIHk9IjI1NiIgd2lkdGg9Ijg2IiBoZWlnaHQ9Ijg2IiByeD0iOSIgZmlsbD0iI0I2RTI1QSIgc3Ryb2tlPSIjMWY0YTBhIiBzdHJva2Utd2lkdGg9IjciLz48L3N2Zz4=",
    "imageAlt": "Una figura morada con forma de L y una figura verde rectangular, dibujadas sobre una cuadrícula",
    "tutor": "Observá bien las figuras.",
    "options": [
      "La morada",
      "La verde"
    ],
    "correct": 1,
    "feedback": "La verde tapa 6 cuadraditos; la morada, 5.",
    "feedbackWrong": "Fijate cuántos cuadraditos tapa cada figura.",
    "hint": "Contá los cuadraditos de cada figura.",
    "cuadricula": {
      "celda": 88,
      "ox": 80,
      "oy": 80,
      "ancho": 1000
    },
    "feedbackExtra": "La morada tapa 5 cuadraditos y la verde 6: la verde ocupa más espacio.",
    "scaffold": {
      "example": {
        "label": "Un caso parecido: dos figuras chicas",
        "steps": [
          {
            "math": "Figura A: 3 cuadraditos"
          },
          {
            "math": "Figura B: 2 cuadraditos"
          },
          {
            "math": "A ocupa más espacio",
            "result": true
          }
        ]
      },
      "altExplanation": "Cuanto más cuadraditos tapa una figura, más espacio ocupa."
    }
  },
  {
    "id": "MAT27-000004",
    "status": "draft",
    "kind": "mc",
    "stage": "Práctica",
    "skill": "COMP_01",
    "difficulty": 1,
    "concept": "interior de una figura",
    "guided": false,
    "layout": "ronnie-arriba",
    "cuadricula": {
      "celda": 46,
      "ox": 330,
      "oy": 60,
      "ancho": 1000
    },
    "question": "¿Qué parte representa la superficie?",
    "image": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDM4MCIgZm9udC1mYW1pbHk9IkludGVyLEFyaWFsLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiPjxyZWN0IHg9IjMzMCIgeT0iNjAiIHdpZHRoPSIzMjIiIGhlaWdodD0iMjMwIiBmaWxsPSIjRTRDMkZBIiBmaWxsLW9wYWNpdHk9Ii44NSIgc3Ryb2tlPSIjNkIxRkIwIiBzdHJva2Utd2lkdGg9IjEyIi8+PGcgc3Ryb2tlPSIjNkIxRkIwIiBzdHJva2Utb3BhY2l0eT0iLjM1IiBzdHJva2Utd2lkdGg9IjMiPjxwYXRoIGQ9Ik0zNzYgNjAgVjI5MCIgLz48cGF0aCBkPSJNNDIyIDYwIFYyOTAiIC8+PHBhdGggZD0iTTQ2OCA2MCBWMjkwIiAvPjxwYXRoIGQ9Ik01MTQgNjAgVjI5MCIgLz48cGF0aCBkPSJNNTYwIDYwIFYyOTAiIC8+PHBhdGggZD0iTTYwNiA2MCBWMjkwIiAvPjxwYXRoIGQ9Ik0zMzAgMTA2IEg2NTIiIC8+PHBhdGggZD0iTTMzMCAxNTIgSDY1MiIgLz48cGF0aCBkPSJNMzMwIDE5OCBINjUyIiAvPjxwYXRoIGQ9Ik0zMzAgMjQ0IEg2NTIiIC8+PC9nPjxyZWN0IHg9IjE0IiB5PSIxMTYiIHdpZHRoPSIyNDAiIGhlaWdodD0iOTYiIHJ4PSI0OCIgZmlsbD0iI0U0QzJGQSIgc3Ryb2tlPSIjNkIxRkIwIiBzdHJva2Utd2lkdGg9IjQiLz48dGV4dCB4PSIxMzQiIHk9IjE1OCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSI0MCIgZmlsbD0iIzFCMUY0QiI+Qm9yZGU8L3RleHQ+PHRleHQgeD0iMTM0IiB5PSIxOTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMjgiIGZvbnQtd2VpZ2h0PSI2MDAiIGZpbGw9IiMxQjFGNEIiPihjb250b3Jubyk8L3RleHQ+PHBhdGggZD0iTTI1NiAxNjQgQyAyOTAgMTUwLCAzMDUgMTYwLCAzMjIgMTcyIiBmaWxsPSJub25lIiBzdHJva2U9IiM2QjFGQjAiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTMyMiAxNzIgbC0yMCAtNCBtMjAgNCBsLTggLTE4IiBmaWxsPSJub25lIiBzdHJva2U9IiM2QjFGQjAiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHJlY3QgeD0iNzE2IiB5PSIyMDYiIHdpZHRoPSIyNzAiIGhlaWdodD0iMTA0IiByeD0iNTIiIGZpbGw9IiNFNEMyRkEiIHN0cm9rZT0iIzZCMUZCMCIgc3Ryb2tlLXdpZHRoPSI0Ii8+PHRleHQgeD0iODUxIiB5PSIyNTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iNDAiIGZpbGw9IiMxQjFGNEIiPkludGVyaW9yPC90ZXh0Pjx0ZXh0IHg9Ijg1MSIgeT0iMjg4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjI4IiBmb250LXdlaWdodD0iNjAwIiBmaWxsPSIjMUIxRjRCIj4oc3VwZXJmaWNpZSk8L3RleHQ+PHBhdGggZD0iTTcxMiAyNTAgQyA2ODAgMjYyLCA2NDAgMjU4LCA1NjAgMjMyIiBmaWxsPSJub25lIiBzdHJva2U9IiM2QjFGQjAiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTU2MCAyMzIgbDIyIDAgbS0yMiAwIGwxMiAxOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkIxRkIwIiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==",
    "imageAlt": "Un rectángulo morado sobre una cuadrícula, con su borde señalado como contorno y su interior señalado como superficie",
    "tutor": "Cuando miramos una figura, podemos observar su borde y también todo el espacio que queda adentro.\nHoy vamos a descubrir cuánto espacio ocupa ese interior.",
    "options": [
      "El interior de la figura.",
      "El borde de la figura.",
      "El espacio que está afuera."
    ],
    "correct": 0,
    "feedback": "El interior es todo el espacio que queda adentro de la figura.",
    "feedbackWrong": "El borde rodea la figura. Pensá en todo el espacio de adentro.",
    "hint": "La superficie es lo que queda adentro, no lo que rodea.",
    "feedbackExtra": "El borde rodea la figura; la superficie es todo el espacio que queda adentro.",
    "scaffold": {
      "example": {
        "label": "Un caso parecido: una hoja",
        "steps": [
          {
            "math": "El borde de la hoja: sus cuatro lados"
          },
          {
            "math": "La superficie: todo el papel de adentro",
            "result": true
          }
        ]
      },
      "altExplanation": "Si pintaras la figura, la superficie es todo lo que pintás; el borde es solo la línea que la rodea."
    }
  },
  {
    "id": "MAT27-000003",
    "status": "draft",
    "kind": "mc",
    "stage": "Práctica",
    "role": "skill_check",
    "skill": "COMP_01",
    "difficulty": 2,
    "concept": "comparar por cobertura",
    "guided": false,
    "question": "Dos figuras se cubrieron con piezas iguales. Una necesitó 9 piezas y la otra 7. ¿Cuál ocupa más espacio?",
    "options": [
      "La de 9 piezas",
      "La de 7 piezas",
      "Ocupan lo mismo"
    ],
    "correct": 0,
    "feedback": "¡Exacto! Con piezas iguales, más piezas es más espacio.",
    "feedbackWrong": "Pensá: ¿qué figura necesitó más piezas del mismo tamaño?",
    "hint": "Las piezas son todas iguales.",
    "feedbackExtra": "Si las piezas son iguales, la que necesita más piezas ocupa más espacio."
  }
];

const MODULE_EXERCISES = {
  "m0": EXERCISES_M0
};

