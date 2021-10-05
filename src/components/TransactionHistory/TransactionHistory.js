import s from './TransactionHistory.module.css'

import PropTypes from 'prop-types';
import Transaction from '../Transaction/Transaction'

function TransactionHistory({ items }) {
    return (
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
                {items.map((item) => (
                    < Transaction
                        key={item.id}
                        type={item.type }
                        amount={item.amount }
                        currency={item.currency}
                    />
                    
                ))}
  </tbody>
</table>
    )
}
 
Transaction.propTypes = {
    key: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   amount: PropTypes.number.isRequired,
   currency: PropTypes.string.isRequired
  }

export default  TransactionHistory;