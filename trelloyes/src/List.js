import React from 'react';
import './List.css';

export default function List(props) {

    function cardTitle(card) {
        return props.allCards.filter(card === Object.keys(props.allCards)).title;
    }
   
    function cardContent(card) {
        return props.allCards.filter(card === Object.keys(props.allCards)).content;
    }
    
    const cards = props.cards.map(card => {
        console.log(cardTitle(card));
        console.log(cardContent(card));
        <Card key={card} title={cardTitle(card)} content={cardContent(card)} />
    });

    return (
        <React.Fragment>
            <h2>{props.header}</h2>
            <div className="List-cards">
                {cards}
            </div>
        </React.Fragment>
    );
}

