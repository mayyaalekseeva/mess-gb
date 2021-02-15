import React from 'react';
import ReactDom from 'react-dom';

const container = document.querySelector('#app');
const content = <h2>Button challenge</h2>;

let messArray = [
    { name: 'Someone', text: "Some text" }
];

const App = props => {
    const arrObj = messArray.map ((el, i) => 
    <div className="message" key={ i }>
        <p> { el.name } </p>
        <p> { el.text }</p>
    </div>
    );

 return
    <div>
    <button onclick={addMess}>Add smth</button>
    { arrObj }
    </div>;
    }


function addMess() {
    messArray.push ( { name: 'User', text: 'Some text'} );
    ReactDom.render(content, <App  messages={ messArray } />, container);
}

ReactDom.render(content, <App messages={ messArray } />, container);

