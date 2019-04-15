import React from 'react';
import './List.css';
import Card from './Card.js';

export default function List(props) {
    function cardTitle(card) {
        return props.allCards[card].title
    }
   
    function cardContent(card) {
        return props.allCards[card].content;
    }
    
    const cards = props.cards.map(function(card) {
        return <Card key={card} title={cardTitle(card)} content={cardContent(card)}/>
    });

    return (
        <React.Fragment>
            <div className="List-cards">
                <h2>{props.header}</h2>
                {cards}
            </div>
        </React.Fragment>
    );
}

