import s from './FriendListItem.module.css'
import PropTypes from 'prop-types';

function FriendListItem(props) {
    const {
        avatar,
        name,
       status
    } = props;

    return (
            <li className={s.item}>
            {/* <span className={status ? s.onLine : s.offLine}> {status ? ('OnLine') : ( 'OffLine!') }</span>              */}
            <span className={status ? s.onLine : s.offLine}></span> 
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}> {name}</p>
            </li>
            )
 }


FriendListItem.propTypes = {
   avatar: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   isOnline: PropTypes.bool.isRequired
  }


export default FriendListItem;