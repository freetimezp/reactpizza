import React from 'react';

class Categories extends React.Component {
    state = {
        activeItem: null
    };

    onSelectItem = (index) => {
        this.setState({
            activeItem: index
        });
    };

    render() {
        const {items, onClickItem} = this.props;
        return (
            <div className="categories">
                <ul>
                    <li
                        onClick={() => this.onSelectItem(null)}
                        className={this.state.activeItem === null ? 'active' : ''}
                    >
                        Все
                    </li>
                    {
                        items.map((item, index) =>
                            <li
                                className={this.state.activeItem === index ? 'active' : ''}
                                onClick={() => this.onSelectItem(index)}
                                key={`${item}_${index}`}
                            >
                                {item}
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

// const Categories = ({items, onClickItem}) => {
//     return (
//         <div className="categories">
//             <ul>
//                 <li className="active">Все</li>
//                 {
//                     items.map((item, index) =>
//                         <li
//                             onClick={onClickItem}
//                             key={`${item}_${index}`}
//                         >
//                             {item}
//                         </li>
//                     )
//                 }
//             </ul>
//         </div>
//     );
// }

export default Categories;
