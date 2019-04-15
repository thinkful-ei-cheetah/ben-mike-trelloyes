import React from 'react';
import './src/App.css';
import List from './src/List.js';

export default function App(props) {
    
    const listItems = props.lists.map(component =>
        <List key={component.id} header={component.header} cards={component.CardIds} allCards={props.allCards}/>
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
