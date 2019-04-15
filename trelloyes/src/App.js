import React from 'react';
import './App.css';
import List from './List.js';

export default function App(props) {
    
    const listItems = props.lists.map(component =>
        <List key={component.id} header={component.header} cards={component.cardIds} allCards={props.allCards}/>
    );
        
    return (
        <React.Fragment>
            <main>

            </main>
            <h1>Trelloyes!</h1>
            <div className="App-list">
                {listItems}
            </div>
        </React.Fragment>
    );
}
