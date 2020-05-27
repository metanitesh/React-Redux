import React from 'react'
import PropTypes from 'prop-types'

export default function DeleteItem(props) {
  return (

    <button onClick={props.deleteLastItem} disabled={props.disabled()}>
          Delete Last Item
        </button>
    

  );
}

DeleteItem.propTypes = {
  deleteLastItem: PropTypes.func.isRequired,
  disabled: PropTypes.func.isRequired
}
