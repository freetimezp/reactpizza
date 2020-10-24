import React from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';

import {Header, Home, Cart} from "./components/components.js";

import {setPizzas as setPizzasAction} from './redux/actions/pizzasAC.js';

// function App() {
//
//     useEffect(() => {
//         axios.get('http://localhost:3000/db.json').then(({data}) => {
//             setPizzas(data.pizzas);
//         });
//         // fetch('http://localhost:3000/db.json')
//         //     .then((response) => response.json())
//         //     .then((json) => {
//         //         setPizzas(json.pizzas);
//         //     });
//     }, []);
//
//     return;
// }

class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            this.props.setPizzasToState(data.pizzas);
         });
    }

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route exact path='/' render={() => <Home items={this.props.items}/>}/>
                    <Route exact path='/cart' render={() => <Cart/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items,
        filters: state.filters
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPizzasToState: (items) => dispatch(setPizzasAction(items))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
