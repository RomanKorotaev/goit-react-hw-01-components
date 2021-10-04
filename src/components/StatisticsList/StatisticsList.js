import s  from './StatisticsList.css'
import PropTypes from 'prop-types';
import Statistics from '../Statistics/Statistics'


function StatisticsList({title,  stats}) {
     
        return (
            <section className="s.statisticsList">
                { title && <h2 className={s.title}>{title}</h2> }

                <ul className="s.stat-list">
                    {stats.map( (item) => (
                                <Statistics 
                                    key={item.id}
                                    labe={item.labe}
                                    percentage={item.percentage}
                                 />
                                ))}
                </ul>
            </section>
        )
}

StatisticsList.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    stats: PropTypes.string.isRequired
}

export default StatisticsList;
