import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of India?',
			answerOptions: [
				{ answerText: 'Mumbai', isCorrect: false },
				{ answerText: 'Bangalore', isCorrect: false },
				{ answerText: 'Delhi', isCorrect: true },
				{ answerText: 'Chennai', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Batman', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
		{
			questionText: 'What is 2*2',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: true },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: false },
			],
		},
		
		{
			questionText: 'which is the largest state in india',
			answerOptions: [
				{ answerText: 'Karnataka', isCorrect: false },
				{ answerText: 'Rajasthan', isCorrect: true },
				{ answerText: 'Madhya Pradesh', isCorrect: false },
				{ answerText: 'Maharashtra', isCorrect: false },
			],
		},
		
		{
			questionText: 'Where is the leaning Tower of Pisa',
			answerOptions: [
				{ answerText: 'India', isCorrect: false },
				{ answerText: 'Italy', isCorrect: true },
				{ answerText: 'China', isCorrect: false },
				{ answerText: 'Brazil', isCorrect: false },
			],
		},
		
		{
			questionText: '"One People,One State,One leader " was the policy of',
			answerOptions: [
				{ answerText: 'Stalin', isCorrect: false },
				{ answerText: 'Hitler', isCorrect: true },
				{ answerText: 'Lenin', isCorrect: false },
				{ answerText: 'Mussolin', isCorrect: false },
			],
		},
		
		{
			questionText: 'Who is know as the father of Indian missile technology',
			answerOptions: [
				{ answerText: 'Dr.A.P.J.Abdul Kalam', isCorrect: true },
				{ answerText: 'Dr.U.R.Rao', isCorrect: false },
				{ answerText: 'Dr.Homi Bhabha', isCorrect: false },
				{ answerText: 'Dr.Chidambaran', isCorrect: false },
			],
		},
		
		{
			questionText: 'The most important small scale industry in India is the ',
			answerOptions: [
				{ answerText: 'Textile Industry', isCorrect:false  },
				{ answerText: 'Paper Industry', isCorrect: false},
				{ answerText: 'Handloom Industry', isCorrect: true },
				{ answerText: 'Jute Industry', isCorrect: false },
			],
		},
		
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
