/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import Widget from '../Widget';
import Button from '../Button';

export default function QuestionWidget({
  question, totalQuestions, questionIndex, onSubmit,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState();
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative == question.answer;

  return (
    <Widget>
      <Widget.Header>
        <h3>
          {` Pergunta ${questionIndex + 1} de ${totalQuestions} `}
        </h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <form onSubmit={(e) => {
          e.preventDefault();
          setIsQuestionSubmited(true);
          setTimeout(() => {
            setIsQuestionSubmited(false);
            onSubmit();
          }, 1000);
        }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit">Confirmar</Button>
          {isQuestionSubmited && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmited && !isCorrect && <p>Você errou!</p>}
        </form>
      </Widget.Content>
    </Widget>
  );
}
