import {FormattedDate} from 'react-intl';  
import {FormattedNumber} from 'react-intl';
import React from "react";

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{props.offer.salary}</td>
      <td>{props.offer.city}</td>
      <td>
      <FormattedDate
        value={new Date(props.offer.date)}
        year='numeric'
        month='long'
        day='numeric'
        weekday='long'
      />
      </td>
      <td>
      <FormattedNumber value={new Number(props.offer.visits)}
      minimum-significant-digits="3"
      />
      </td>
    </tr>
  );
};

export default Job;
