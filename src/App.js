
import './App.css'
// import React, { Component } from 'react';
// import Items from './components/Items/Items';
// import AddItem from './components/AddItems/AddItem';
// import {useSelector, useDispatch} from 'react-redux'
// import { deposite, widhdraw } from './components/RTK/slices/bank_Slice';
import {Routes, Route} from 'react-router-dom'
import React from 'react'
import AppNavbar from './components/Navbar';
import Products from './components/Products'
import Cart from './components/Cart';

function App()  {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
      
    </>
  )
}

export default App;

// ------------------RTK-----------------------------

// function App() {

//   const state = useSelector(state => state.bank);
//   const dispatch = useDispatch()

//   return (
//        <div className='App'>

//         console.log(state);
//         <p>bank acount balance: {state}</p>
//         <button onClick={() => dispatch(widhdraw(100))}>widhdraw</button>
//         <button onClick={() => dispatch(deposite(100))}>deposite</button>
//       </div>

//   )
// }

//export default App


// class App extends Component {



  // state = {
  //   items : [
  //         {id:1, name: "redouane", age:33},
  //         {id:2, name: "aissa", age:44},
  //         {id:3, name: "anis", age:11},
  //         {id:4, name: "abdou", age:22},
  //   ]
  // }

  // deleteItem = (id) => {
  //   let items = this.state.items.filter(item =>{
  //     return item.id !== id
  //   })
  //   this.setState({items})
  // }

  // addItem = (item) => {
  //   item.id = Math.random()
  //   let items = this.state.items
  //   items.push(item)
  //   this.setState({items})
  // }

  //  render() {
  //    return (

     

  //     <div className='App container'>
        
  //       <h1 className='text-center'>Todo List</h1>
  //       <Items items={this.state.items} deleteItem = {this.deleteItem}/>
  //       <AddItem addItem={this.addItem}/>
  //     </div>
//     );
//   }
// }

// export default App;
