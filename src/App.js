
import './App.css';

import Profile from './components/Profile/Profile';
import user from './db/user.json'

// import Friends from '../friends.json';
// import StatisticalData from '../statistical-data.json';
// import Transactions from '../transactions.json'



function App() {
  return (
      <div className="App">
          <p> Задание 1 - Профиль социальной сети </p>
       <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} 
      />
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


