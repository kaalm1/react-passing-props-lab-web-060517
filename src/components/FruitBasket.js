import React, { Component }  from 'react';
import PropTypes from 'prop-types';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList';

const FruitBasket = (props) => {
    return (
      <div className="fruit-basket">
        <Filter handleChange={props.handleFilterChange} filters={props.filters}/>
        <FilteredFruitList filter={props.currentFilter} fruit={props.fruit} />
      </div>
    );
}

FruitBasket.defaultProps = {
  filters: PropTypes.array,
  fruit: PropTypes.array,
  currentFilter: PropTypes.string,
  updateFilterCallback: PropTypes.func
}

export default FruitBasket;
