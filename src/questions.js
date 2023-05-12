const questions = [
    {
        question: "¿De que año a que año fue la segunda guerra mundial?",
        rightAnswer: "1939-1945",
        answerOne: "1937-1942",
        answerTwo: "1932-1940",
        answerThree: "1941-1948",
        id: 1,
    },
    {
        question: "¿En que año se firma el trato de Versalles?",
        rightAnswer: "1919",
        answerOne: "1925",
        answerTwo: "1918",
        answerThree: "1922",
        id: 2,
    },
    {
        question: "¿En que año fue la batalla de las Termopilas?",
        rightAnswer: "191 a.C.",
        answerOne: "188 a.C.",
        answerTwo: "193 a.C.",
        answerThree: "195 a.C.",
        id: 3,
    },
    {
        question: "¿Donde nació Freddie Mercury?",
        rightAnswer: "Tanzania",
        answerOne: "Madagascar",
        answerTwo: "Reino Unido",
        answerThree: "Sudafrica",
        id: 4,
    },
    {
        question: "¿De donde es La vela Puerca?",
        rightAnswer: "Uruguay",
        answerOne: "Argentina",
        answerTwo: "Chile",
        answerThree: "México",
        id: 5,
    },
    {
        question: "¿Cuando se creo la ONU?",
        rightAnswer: "1945",
        answerOne: "1948",
        answerTwo: "1952",
        answerThree: "1947",
        id: 6,
    },
    {
        question: "¿Cuando se creo UNICEF?",
        rightAnswer: "1946",
        answerOne: "1944",
        answerTwo: "1945",
        answerThree: "1947",
        id: 7,
    },
    {
        question: "¿En que año se jugó el primer mundial de futbol profesional?",
        rightAnswer: "1930",
        answerOne: "1934",
        answerTwo: "1926",
        answerThree: "1938",
        id: 8,
    },
    {
        question: "¿Cuando se firmo la constitución Argentina?",
        rightAnswer: "1853",
        answerOne: "1851",
        answerTwo: "1844",
        answerThree: "1850",
        id: 9,
    },
    {
        question: "¿Cuando fue la caida de la Bastilla?",
        rightAnswer: "1789",
        answerOne: "1792",
        answerTwo: "1782",
        answerThree: "1785",
        id: 10,
    }
]

const answerToPoints = [
    {
        answer: "No has respondido bien ninguna pregunta, siguelo intentando.",
        id: 0,
    },
    {
        answer: "Solo has respondido una pregunta bien, siguelo intentando.",
        id: 1,
    },
    {
        answer: "Solo has respondido dos preguntas bien, siguelo intentando.",
        id: 2,
    },
    {
        answer: "Solo has respondido tres preguntas bien, siguelo intentando.",
        id: 3,
    },
    {
        answer: "Has respondido cuatro preguntas bien, siguelo intentando.",
        id: 4,
    },
    {
        answer: "Has respondido cinco preguntas bien, nada mal.",
        id: 5,
    },
    {
        answer: "Has respondido seis preguntas bien, nada mal.",
        id: 6,
    },
    {
        answer: "Has respondido siete preguntas bien, muy bien.",
        id: 7,
    },
    {
        answer: "Has respondido ocho preguntas bien, excelente!",
        id: 8,
    },
    {
        answer: "Has respondido nueve preguntas bien, excelente!",
        id: 9,
    },
    {
        answer: "Felicitaciones! Has respondido correctamente todas las preguntas!",
        id: 10,
    },
]

export const getQuestion = (id) => {
    return new Promise((res) => {
        const question = questions.find(question => question.id === id)
        return res(question)
    })
}

export const getAnswerToPoints = () => {
    return new Promise ((res) => {
        return res(answerToPoints)
    })
}