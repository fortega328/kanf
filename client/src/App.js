import React, {useState, useEffect} from 'react';
import { Button, Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import {Questionaire} from './components/'
const API_URL = 'https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple'

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex]= useState(0);

  useEffect(()=> {
    fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      const questions = data.results.map((question) => ({
        ...question, answers: [ question.correct_answer,...question.incorrect_answers,].sort(() =>Math.random() - 0.5),
      }));
      setQuestions(questions);
    });
  },[])
  const handleAnswer = (answer) => {
    // check for answer
    // show another question
    // change score if correct
  };
  return (
    questions.length > 0 ? (
      <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
        </Switch>
        <div >
          <Questionaire data = {questions[0]} handleAnswer={handleAnswer}/>

        </div>
      </Container>
    </BrowserRouter>): (<h1>We are loading your quiz... </h1>)
  );
};

export default App;
