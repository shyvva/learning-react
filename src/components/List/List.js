import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';
import { settings } from '../../data/dataStore.js';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';

class List extends React.Component {
    state = {
        columns: this.props.columns || [],
    }

    static propTypes = {
        title: PropTypes.node.isRequired,
        description: PropTypes.node,
        columns: PropTypes.array,
    }
    static defaultProps = {
        description: settings.defaultListDescription,
    }

    addColumn(title) {
        this.setState(state => (
            {
                columns: [
                    ...state.columns,
                    {
                        key: state.columns.length ? state.columns[state.columns.length - 1].key + 1 : 0,
                        title,
                        icon: 'list-alt',
                        cards: []
                    }
                ]
            }
        ));
    }

    render() {
        return (
            <section className={styles.component}>
                <Hero titleText={this.props.title}
                    image={this.props.image} />

                <div className={styles.description}>
                    {ReactHtmlParser(this.props.description)}
                </div>

                <div className={styles.columns}>
                    {this.state.columns.map(({ key, ...columnProps }) => (
                        <Column key={key} {...columnProps} />
                    ))}
                </div>

                <div className={styles.creator}>
                    <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)} />
                </div>

            </section>
        )
    }
}

export default List;

// 1. This is arrow function which I use in columns component. That comment is only for better understanding 
// what exactly happened

// function(singleColumn) {
//     const key = singleColumn.key;

//     const columnProps = {};

//     for (let propName in singleColumn) {
//         if (propName != 'key') {
//             columnProps[propName] = singleColumn[propName];
//         }
//     }

//     return <Column key={key} {...columnProps} />
// }

//2. Same function but with spear operator

// function(singleColumn){
//     {key, ...columnProps} = singleColumn;

//     return <Column key={key} {...columnProps} />
//   }

// 3. If I only once used argument singleColumn I don't have to call that argument, but I can
// immediately in declarate argument use {key, ...columnProps}

// function({key, ...columnProps}){
//     return <Column key={key} {...columnProps} />
//   }

// If I changed this code on arrow function i get exactly the same code like I use in .map method.


// 
// addColumn function. NEVER USE THIS SYNTAX!! this is only for better understanding what exactly happened 

// addColumn(title){
//     this.setState(function (currentState) {

//         // create new column object with properties
//         let newColumn = {
//             key: state.columns.length ? state.columns[state.columns.length - 1].key + 1 : 0,
//             title,
//             icon: 'list-alt',
//             cards: []
//         };

//         // create copy of current state
//         let newState = Array.from(currentState);

//         // add new column to new state
//         newState.columns.push(newColumn);

//         // return new state
//         return newState;
//     });
// }