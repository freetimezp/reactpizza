import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Categories, SortPopup, PizzaBlock} from "../components/components";
import {setCategory} from '../redux/actions/filtersAC';

const categoryNames = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
];

const sortItems = [
    {name: 'популярности', type: 'popular'},
    {name: 'цене', type: 'price'},
    {name: 'алфавиту', type: 'alphabet'}
];

const Home = () => {
    const dispatch = useDispatch();

    const {items} = useSelector(({pizzas}) => {
        return {
            items: pizzas.items
        };
    }); //const items = useSelector(({pizzas}) =>  pizzas.items); // or use this

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, []); // useCallback calls only once

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    items={categoryNames}/>
                <SortPopup
                    items={sortItems}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {   items &&
                    items.map(item =>
                        <PizzaBlock
                            key={item.id}
                            {...item} // copy all obj as props
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Home;