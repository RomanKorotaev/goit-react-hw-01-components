
import './App.css';

import Profile from './components/Profile/Profile';
import user from './db/user.json'

import StatisticsList from './components/StatisticsList'
import statisticalData from './db/statistical-data.json';

import friends from './db/friends.json';

import transactions from './db/transactions.json'



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
          
          <p> Задание 2 - Секция статистики </p>
          
          {/* <StatisticsList
              tiile={ title}
              id={statisticalData.id}
              label={statisticalData.label}
              percentage={statisticalData.percentage}
          /> */}

          <StatisticsList title="Upload stats" stats={statisticalData} />
          {/* <StatisticsList stats={statisticalData} /> */}
          
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


