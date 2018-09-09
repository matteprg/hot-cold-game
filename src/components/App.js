import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: 0,
      guesses: [],
      feedback: "Make a Guess!",
      output: "",
      correctAnswer: Math.floor(Math.random() * 100) + 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    let guess = parseInt(this.state.guess, 10);
    if (isNaN(guess)) {
      this.setState({
        feedback: "Please enter a valid number"
      });
      return;
    }
    const difference = Math.abs(guess - this.state.correctAnswer);

    let feedback;
    if (difference >= 50) {
      feedback = "You're Ice Cold ...";
    } else if (difference >= 30) {
      feedback = "You're Cold";
    } else if (difference >= 10) {
      feedback = "You're Warm.";
    } else if (difference >= 1) {
      feedback = "You're Hot!";
    } else {
      feedback = "You got it right!";
    }

    this.setState({
      feedback,
      guess: e.target.value,
      guesses: [...this.state.guesses, guess]
    });
  }
  render() {
    const { feedback, guesses } = this.state;
    const guessCount = guesses.length;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hot or Cold Game</h1>
        </header>
        <main role="main">
          <form>
            <h2>{feedback}</h2>
            <input value={this.state.input} />
            <button onMakeGuess={guess => this.makeGuess(guess)}>Guess!</button>
            <p>{guessCount}</p>
            <p>{this.state.output}</p>
          </form>
        </main>
      </div>
    );
  }
}

export default App;
