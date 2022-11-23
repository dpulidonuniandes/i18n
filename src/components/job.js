import {FormattedDate} from 'react-intl'; 
import {FormattedMessage} from 'react-intl';
import React from "react";

const Job = (props) => {
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td><FormattedMessage id={props.offer.name}/></td>
      <td><FormattedMessage id={props.offer.company}/></td>
      <td><FormattedMessage id={props.offer.salary}/> <FormattedMessage id="millions"/></td>
      <td><FormattedMessage id={props.offer.city}/></td>
      <td>
      <FormattedDate
        value={new Date(props.offer.date)}
        year='numeric'
        month='long'
        day='numeric'
        weekday='long'
      />
      </td>
      <td>{props.offer.visits}</td>
    </tr>
  );
};

export default Job;
