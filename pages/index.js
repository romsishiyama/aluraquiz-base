import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Input from '../src/components/input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary};
`;

// const BackgroundImage = styled.div`
// background-image: url(${db.bg});
// flex:1;
// background-size: cover;
// background-position: center;
// `;



export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>
              {' '}
              {db.title}
            </h1>
          </Widget.Header>
          <Widget.Content>

            <p>{db.description}</p>
            <form onSubmit={function (e) {
              e.preventDefault();

              router.push(`/quiz?name=${name}`);
              console.log('Fazendo um submit no react');
            }}
            >
              <Input
                name ="nomeDoUsuario"
                onChange={(e) => {
                  setName(e.target.value);
                  console.log(name);
                }}
                placeholder="Qual Seu Nome ?"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/osmar570" />
    </QuizBackground>
  );
}
