import React from 'react';
import {displayStatus} from '../helpers/helpers';

export default function Result(props) {

  return(
    <footer data-testid="result_footer">
      <h2>{displayStatus(props.status)}</h2>
    </footer>
  );
}
