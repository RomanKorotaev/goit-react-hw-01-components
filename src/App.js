
import './App.css';

import Profile from './components/Profile/Profile';
import user from './db/user.json'

import Statistics from './components/Statistics/Statistics'
import statisticalData from './db/statistical-data.json';

import FriendList from './components/FriendList/FriendList'
import friends from './db/friends.json';

import transactions from './db/transactions.json'



function App() {
  return (
      <div className="App">
          <section>
            <p className="titleOfApp"> Задание 1 - Профиль социальной сети </p>
                <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats} 
                />
          </section>
          
            <section>             
              <p  className="titleOfApp"> Задание 2 - Секция статистики </p>
            
              <Statistics title="Upload stats" stats={statisticalData} />
              <Statistics stats={statisticalData} /> 
      </section>
      
      <section>             
              <p  className="titleOfApp"> Задание 3 - Список друзей </p>
              <FriendList friends={friends} />
      </section>
      
    </div>
  );
}

export default App;




// import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//               </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//////////////////================================


