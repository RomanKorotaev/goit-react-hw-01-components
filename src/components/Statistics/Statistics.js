
import s  from './Statistics.css'
import PropTypes from 'prop-types';


function Statistics (props) {
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

Statistics.propTypes = {
    label: PropTypes.string.isRequired,
    percentages: PropTypes.string.isRequired
}

export default Statistics;
