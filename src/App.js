import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Card from './components/Card/Card';
import Gorillaz from './gorillaz.json'
import ScoreKeeper from './components/ScoreKeeper/ScoreKeeper';
import './App.css'
//set globals
let highScore = 0;
let correctClick = 0;
let message = "";

class App extends Component {
  //state
  state = {
    Gorillaz,
    highScore,
    correctClick,
    message,
  };

  //clicked character
  setClicked = id => {
    const Gorillaz = this.state.Gorillaz;
    //hold clicked values
    const charClicked = Gorillaz.filter(Gorillaz => Gorillaz.id === id);

    if(charClicked[0].clicked){
      correctClick = 0;
      message ="Wow.. You're really good at this aren't you!"

      for( var i = 0; i < Gorillaz.length; i++){
        Gorillaz[i].clicked = false;
      }

      this.setState({message});
      this.setState({correctClick});
      this.setState({Gorillaz});
    } else {
      charClicked[0].clicked = true;

      correctClick = correctClick + 100;
      message = "Not bad..."

      if(correctClick > highScore){
        highScore = correctClick;
        this.setState({highScore});
        
        
      }

      Gorillaz.sort((a,b) => {
        return 0.5 - Math.random();
      });
      this.setState({Gorillaz});
      this.setState({correctClick});
      this.setState({message});
    }
  }

render() {
  return (
    <div>
    <Wrapper>
      <div className="header">
        <h1>Gorillaz Touchy Game</h1>
            
          <p> Touch a character, careful not to touch the same one twice though....</p>
   
        
      </div>
      <ScoreKeeper
          currentScore={this.state.correctClick}
          highScore={this.state.highScore}
      />
      <div className="message"><h3 >{this.state.message}</h3></div>
      
      <div className="row">
      {this.state.Gorillaz.map(Gorilla => (
        <Card
          id={Gorilla.id}
          key={Gorilla.id}
          name={Gorilla.name}
          image={Gorilla.image}
          setClicked={this.setClicked}
          className="col-sm-2"
        />
      ))}
     
      </div>
    </Wrapper>
  </div>
    )
  }
}

export default App;


