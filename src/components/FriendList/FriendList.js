import s from './FriendList.module.css'

import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem'

function FriendList({ friends }) {
    
    return (
         <ul className={s.frieds_list}>
                    {friends.map( (item) => (
                                <FriendListItem 
                                    key={item.id}
                                    avatar={item.avatar}
                                    name={item.name}
                                    status={item.isOnline}
                                 />
                                ))}  
                </ul>
     )   
}

FriendList.propTypes = {
    key: PropTypes.number.isRequired,
   avatar: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   isOnline: PropTypes.bool.isRequired
    
  }


export default  FriendList;