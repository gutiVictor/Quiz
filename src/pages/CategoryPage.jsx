import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Question } from '../components/Question';
import { questions, imgs } from '../dataold';

// Nueva función para seleccionar preguntas únicas sin repetir
const selectUniqueQuestions = (array, num) => {
    const selectedQuestions = new Set();
    while (selectedQuestions.size < num && selectedQuestions.size < array.length) {
        const randomIndex = Math.floor(Math.random() * array.length);
        selectedQuestions.add(array[randomIndex]);
    }
    return Array.from(selectedQuestions);
};

// Función para normalizar la dificultad
const normalizeDifficulty = (difficulty) => {
    return difficulty.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export const CategoryPage = () => {
    const { category } = useParams();

    const [imgCategory] = imgs.filter(
        img => img === `/src/assets/${category.toLowerCase()}.png`
    );

    const [questionsFiltered, setQuestionsFiltered] = useState([]);
    const [indexQuestion, setIndexQuestion] = useState(0);
    const [activeQuiz, setActiveQuiz] = useState(false);
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);

    // Cantidades de preguntas por dificultad
    const questionCounts = {
        facil: 8,
        medio: 7,
        dificil: 6,
        aleatorio: 8
    };

    useEffect(() => {
        const filteredQuestions = questions.filter(question => question.category === category);
        setQuestionsFiltered(filteredQuestions);
    }, [category]);

    const handleStartQuiz = (difficulty) => {
        setSelectedDifficulty(difficulty);
        setActiveQuiz(true);
    };

    const filteredQuestionsByDifficulty = selectedDifficulty
        ? questionsFiltered.filter(question => normalizeDifficulty(question.difficulty) === normalizeDifficulty(selectedDifficulty))
        : questionsFiltered;

    // Determinar la cantidad de preguntas según la dificultad seleccionada
    const numQuestions = selectedDifficulty
        ? questionCounts[normalizeDifficulty(selectedDifficulty)]
        : questionCounts.aleatorio;

    // Usa `selectUniqueQuestions` para seleccionar preguntas sin repeticiones
    const finalQuestions = selectUniqueQuestions(filteredQuestionsByDifficulty, numQuestions);

    return (
        <div
            className='container flex flex-col items-center justify-center gap-10'
            style={{ height: 'calc(100vh - 5rem)' }}
        >
            {activeQuiz ? (
                <Question
                    filteredQuestion={finalQuestions[indexQuestion]}
                    setIndexQuestion={setIndexQuestion}
                    indexQuestion={indexQuestion}
                    questionsFiltered={finalQuestions}
                    setActiveQuiz={setActiveQuiz}
                />
            ) : (
                <>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-3xl text-teal-900 text-center font-bold'>
                            {category}
                        </h1>

                        <div className='flex justify-center items-center'>
                            <img
                                src={imgCategory}
                                alt={category}
                                className='w-60'
                            />
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h2 className='text-2xl font-bold text-center'>Selecciona la dificultad:</h2>
                        <button
                            className='text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900'
                            onClick={() => handleStartQuiz('Facil')}
                        >
                            Facil
                        </button>
                        <button
                            className='text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900'
                            onClick={() => handleStartQuiz('Medio')}
                        >
                            Medio
                        </button>
                        <button
                            className='text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900'
                            onClick={() => handleStartQuiz('Dificil')}
                        >
                            Dificil
                        </button>
                        <button
                            className='text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900'
                            onClick={() => handleStartQuiz(null)}
                        >
                            Aleatorio
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};
