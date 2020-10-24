import React from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux';

import {Header, Home, Cart} from "./components/components.js";
import {setPizzas as setPizzasAC} from './redux/actions/pizzasAC.js';

const App = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            dispatch(setPizzasAC(data.pizzas));
        });
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path='/' component={Home}/>
                <Route exact path='/cart' component={Cart}/>
            </div>
        </div>
    );
}

export default App;


// class App extends React.Component {
//     componentDidMount() {
//         axios.get('http://localhost:3000/db.json').then(({data}) => {
//             this.props.setPizzasToState(data.pizzas);
//          });
//     }
//
//     render() {
//         return (
//             <div className="wrapper">
//                 <Header/>
//                 <div className="content">
//                     <Route exact path='/' render={() => <Home items={this.props.items}/>}/>
//                     <Route exact path='/cart' render={() => <Cart/>}/>
//                 </div>
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         items: state.pizzas.items,
//         filters: state.filters
//     }
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setPizzasToState: (items) => dispatch(setPizzasAction(items))
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
