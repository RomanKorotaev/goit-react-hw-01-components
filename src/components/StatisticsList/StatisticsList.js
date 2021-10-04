import s  from './StatisticsList.css'
import PropTypes from 'prop-types';
import Statistics from '../Statistics/Statistics'


function StatisticsList({title,  stats}) {
     
        return (
            <section className="s.statisticsList">
                { title && <h2 className={s.title}>{title}</h2> }

                <ul className="s.stat__list">
                    {stats.map( (item) => (
                                <Statistics 
                                    key={item.id}
                                    label={item.label}
                                    percentage={item.percentage}
                                 />
                                ))}  
                </ul>
            </section>
        )
}


StatisticsList.propTypes = {
  title: PropTypes.string,
  // Массив объектов конкретного типа использую там, где MAP
  stats: PropTypes.arrayOf(
    // Объект с определённой структурой
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};


export default StatisticsList;
