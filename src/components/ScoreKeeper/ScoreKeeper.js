import React from 'react';
import './ScoreKeeper.css';

const ScoreKeeper = props => (
	<div className="container scoreBody">
            <div className="row">
                <div className="col-5">
                    <div className="murdockScore">
                        <p>Current Champion.. Murdock: 1,000,000pts!! </p>
                    </div>
                    </div>
                <div className="col-5 text-right">
                    <div className="highscore">
                        <strong class="cScore"> Your score: {props.currentScore} </strong>
                        <br></br>
                        <strong class="hScore"> Actual Highscore: {props.highScore}</strong>
                    </div>
                </div>
            </div>
        </div>
);

export default ScoreKeeper;