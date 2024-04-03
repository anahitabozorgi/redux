import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createStore} from 'redux'
import allReducers from './reducers/index.js'

const store = createStore(
  allReducers,
  // @ts-ignore 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


  //Action
  // const increament = () => {
  //   return{
  //     type : 'increment'
  //   }
  // }

  // const decremnent = () => {
  //   return{
  //     type: 'decrement'
  //   }
  // }

  // //reducer
  // const counter = (state = 0, action:any) => {
  //   switch (action.type){
  //     case 'increment':
  //       return state + 1;
  //     case 'decrement':
  //       return state - 1;
  //   }
  // };

  // let store = createStore(counter);

  // //display in console

  // store.subscribe(()=>console.log(store.getState( )));

  // //dispatch
  // store.dispatch(decremnent());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
