import React from 'react';
import styles from './Column.scss';
import { settings } from '../../data/dataStore';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {

    static propTypes = {
        title: PropTypes.node.isRequired,
    }

    static defaultProps = {
        icon: settings.defaultColumnIcon,
    }

    state = {
        card: this.props.cards || [],
    }
    addCard(title) {
        this.setState(state => (
            {
                card: [
                    ...state.card,
                    {
                        key: state.card.length ? state.card[state.card.length - 1].key + 1 : 0,
                        title,
                    }
                ]
            }
        ));
    }

    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{this.props.title}
                    <span className={styles.icon}>
                        <Icon name={this.props.icon} />
                    </span>
                </h3>

                <div className={styles.card}>
                    {this.state.card.map(({ key, ...cardProps }) => (
                        <Card key={key} {...cardProps} />
                    ))}
                </div>

                <div className={styles.creator}>
                    <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
                </div>

            </section>
        );
    }
}

export default Column;