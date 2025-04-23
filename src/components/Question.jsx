import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

import QUESTIONS from '../questions.js';

export default function Question({
    index,
    onSelectAnswer,
    onSkipAnswer
}) {
    const [answer, setAnswer] = useState({
        selectedAnswers: '',
        isCorrect: null
    });

    const handleSelectAnswer = (answer) => {
        setAnswer({
            selectedAnswers: answer,
            isCorrect: null
        });

        setTimeout(() => {
            setAnswer({
                selectedAnswers: answer,
                isCorrect: QUESTIONS[index].answers[0] === answer
            });

            setTimeout(() => {
                onSelectAnswer(answer)
            }, 2000);
        }, 1000);
    }

    let answerState = '';

    if (answer.selectedAnswers && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswers) {
        answerState = 'answered';
    }

    return (
        <div id="question">
            <QuestionTimer
                timeout={10000}
                onTimeout={onSkipAnswer}
            />
            <h2>{QUESTIONS[index].text}</h2>
            <Answers
                answers={QUESTIONS[index].answers}
                selectedAnswers={answer.selectedAnswers}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    );
};
