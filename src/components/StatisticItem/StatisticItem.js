import s from './StatisticItem.module.css'
import PropTypes from 'prop-types';


function StatisticItem (props) {
      const {
        label,
        percentage} = props;

        return (
            <li className={s.item}>
                <span classNam={s.label}>{label}</span>
                <span classNam={s.percentage}>{percentage}</span>
            </li>
        )
}

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}

export default StatisticItem;
