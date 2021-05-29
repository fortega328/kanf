import React from 'react';


import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
  render() {
    return (
      <form>
        <h1>Personal Questions</h1>
        <p>Who are the most important people in your life?</p>
        <input
          type="text"
        />
        <p>Where is ‘home’?</p>
        <input
          type="text"
        />
        <p>What’s your big passion?</p>
        <input
          type="text"
        />
        <p>Do you read reviews, or just go with your gut?</p>
        <input
          type="text"
        />
        <p>What’s the best meal you’ve ever had?</p>
        <input
          type="text"
        />
        <p>What are your hobbies, and how did you get into them?</p>
        <input
          type="text"
        />
        <p>Would you say you’re more of an extrovert or an introvert?</p>
        <input
          type="text"
        />
        <p>If you had a free plane ticket, where would you like to go?</p>
        <input
          type="text"
        />
        <p>What type of music are you into?</p>
        <input
          type="text"
        />
        <p>What toppings are needed to create the perfect burger?</p>
        <input
          type="text"
        />
      </form>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));
