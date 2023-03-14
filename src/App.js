import './App.css';
import Header from './Components/Header';
import Elements from './Components/Elements';
import { useState, useEffect } from 'react';

function App() {

  const [data ,setData] = useState([]);
  useEffect(()=>{
    const fetchData = () =>{
      fetch('https://restcountries.com/v2/all?fields=name,region,area') //Fetching data from given Api
      .then(response =>response.json())
      .then(json => setData(json))
      .catch(e=>{
        console.log("Error", e)
      })
    }
    fetchData();
  },[])

  return (
    <div className="App">
      <Header/>
      <button>Sort by Area</button>
      <button>Sort by Region</button>
      <button id='srch'>Sort</button>
      <div className='main'>
        {
          data
          .sort((a,b) => a.name > b.name?1:-1)
          .map((element, index) =>{
            return(
              <Elements 
                key={index}
                name = {element.name}
                region = {element.region}
                area = {element.area}
                /> 
            )
          })
        }
        
      </div>
    </div>
  );
}
export default App;















// import './App.css';
// import Header from './Components/Header';
// import countruy_data from './Components/Country_Data.json';
// import Elements from './Components/Elements';

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <button>Sort by Area</button>
//       <button>Sort by Region</button>
//       <button id='srch'>Sort</button>
      
//       <div className='main'>
//         {
          
//           countruy_data
//           .sort((a,b) => a.name > b.name?1:-1)
//           .map((element, index) =>{
//             return(
//               <Elements 
//                 key={index}
//                 name = {element.name}
//                 region = {element.region}
//                 area = {element.area}
//                 /> 
//             )
//           })
//         }
        
//       </div>
//     </div>
//   );
// }

// export default App;
