import s from './FriendListItem.module.css'
import PropTypes from 'prop-types';

function FriendListItem(props) {
    const {
        avatar,
        name,
        isOnline
    } = props;

    return (
            <li className={s.item}>
            <span className={s.status}> {isOnline  ? 'OnLine ' : 'OffLine!!! ' }</span>
                
            <img className={s.avatar} src={avatar} alt={name} width="48" />
                <p class="name"> {name}</p>
            </li>
            )
 }


FriendListItem.propTypes = {
   avatar: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
//    isOnline: PropTypes.bool.isRequired
  }


export default FriendListItem;