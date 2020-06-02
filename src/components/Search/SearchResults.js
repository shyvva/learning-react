import React from 'react';
import styles from './SearchResults.scss';
import Card from '../Card/Card';
import Container from '../Container/Container';
import PropTypes from 'prop-types';


class SearchResults extends React.Component {
    static propTypes = {
      cards: PropTypes.array,
    }

    render() {
      const { cards } = this.props;
      return (
        <Container>
          <section className={styles.component}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </section>
        </Container>
      );
    }
}

export default SearchResults; 