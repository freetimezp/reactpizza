import React from 'react';

import {Categories, SortPopup, PizzaBlock} from "../components/components";
import {useSelector} from "react-redux";

const Home = () => {
    const {items} = useSelector(({pizzas, filters}) => {
        return {
            items: pizzas.items,
            sortBy: filters.sortBy
        };
    });

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={[
                        'Мясные',
                        'Вегетарианская',
                        'Гриль',
                        'Острые',
                        'Закрытые'
                    ]}/>
                <SortPopup
                    items={[
                        {name: 'популярности', type: 'popular'},
                        {name: 'цене', type: 'price'},
                        {name: 'алфавиту', type: 'alphabet'}
                    ]}
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