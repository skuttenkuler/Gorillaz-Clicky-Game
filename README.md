# Picka' Gorilla!

Ever wanted a game to pass the time with your favorite super band Gorillaz? Sigh no more!



![Gif](public/images/Gorillaz.gif)

## Play the Game

[Picka' Gorilla!](https://skuttenkuler.github.io/Gorillaz-Clicky-Game/)

## Technologies Used
* [ReactJS](https://reactjs.org/)
    * Installation: [Create React App](https://create-react-app.dev/)
* [NodeJS](https://nodejs.org)
* [Bootstrap](https://getbootstrap.com)
* [NPM Packages](https://npmjs.com):

## Code Snippets

This snippet displays the game logic, keeping tally of which character was clicked, updating score, shuffling the characters, and if a character is clicked twice; end the game set the highscore state. 

```JSX
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
    //set state
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
    // ensure first number is greater than the second(not zero), or vice versa, which makes the shuffle work
        return 0.5 - Math.random();
      });
      this.setState({Gorillaz});
      this.setState({correctClick});
      this.setState({message});
    }
  }
```

This snippet displays my Card component:

```JSX
const Card = props => (
	<div 
		className="card"
		onClick={() => props.setClicked(props.id)}>
	    <div className="imgContainer">
	      <img
	      	className="img"
	        alt={props.name}
	        src={props.image}
	      />
	    </div>
	    
  </div>
);
```


# Authors
- Sam Kuttenkuler
    - [Github](https://www.github.com/skuttenkuler)
    - [LinkedIn](https://www.linkedin.com/in/skdev91)
# Acknowledgments:

     Thank you 2D, Murdock, Russel, Noodle, and Damon Albarn of Gorillaz.

