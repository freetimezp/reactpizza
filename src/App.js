import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom';

import {Header, Home, Cart} from "./components/components.js";


function App() {
    const[pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/db.json')
            .then((response) => response.json())
            .then((json) => {
                setPizzas(json.pizzas);
            });
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route exact path='/' render={() => <Home items={pizzas} />} />
                <Route exact path='/cart' render={() => <Cart />} />
            </div>
        </div>
    );
}

export default App;
