import s from './Transaction.module.css'
import PropTypes from 'prop-types';

function Transaction(props) {
    const {
        type,
        amount,
        currency
    } = props;

    return (
        <tr>
            <td>{ type }</td>
            <td>{ amount }</td>
            <td>{currency}</td>
         </tr>
            )
 }


Transaction.propTypes = {
   type: PropTypes.string.isRequired,
   amount: PropTypes.number.isRequired,
   currency: PropTypes.string.isRequired
  }


export default Transaction;