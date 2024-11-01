import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Question } from '../components/Question';
import { questions, imgs } from '../data';

// Función para barajar las preguntas de cada categoría y también reducirla al número de 7
const shuffleArray = array => {
    const newArray = array.sort(() => Math.random() - 0.5);
    return newArray.slice(0, 8);
};

// Función para normalizar la dificultad
const normalizeDifficulty = (difficulty) => {
    return difficulty.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

export const CategoryPage = () => {
    // Leer El parametro de la URL
    const { category } = useParams();

    const [imgCategory] = imgs.filter(
        img => img === `/src/assets/${category.toLowerCase()}.png`
    );

    const [questionsFiltered, setQuestionsFiltered] = useState([]);
    const [indexQuestion, setIndexQuestion] = useState(0);
    const [activeQuiz, setActiveQuiz] = useState(false);
    const [selectedDifficulty, setSelectedDifficulty] = useState(null); // Nuevo estado

    useEffect(() => {
        const filteredQuestions = questions.filter(question => question.category === category);
        const newQuestions = shuffleArray(filteredQuestions);
        setQuestionsFiltered(newQuestions);
    }, [category]);

    const handleStartQuiz = (difficulty) => { // Nueva función
        setSelectedDifficulty(difficulty);
        setActiveQuiz(true);
    };

    const filteredQuestionsByDifficulty = selectedDifficulty // Nuevo filtro
        ? questionsFiltered.filter(question => normalizeDifficulty(question.difficulty) === normalizeDifficulty(selectedDifficulty))
        : questionsFiltered;

    // Asegurarse de que siempre haya exactamente 7 preguntas
    const finalQuestions = shuffleArray(filteredQuestionsByDifficulty);

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
                                className='w-60' // tamaño de la imagen de la categoría
                            />
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <h2 className='text-2xl font-bold text-center'>Selecciona la dificultad:</h2>
                        <button
                            className='text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900'
                            onClick={() => handleStartQuiz('Fácil')}
                        >
                            Fácil
                        </button>
                        <button
                            className='text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900'
                            onClick={() => handleStartQuiz('Medio')}
                        >
                            Medio
                        </button>
                        <button
                            className='text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900'
                            onClick={() => handleStartQuiz('Difícil')}
                        >
                            Difícil
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