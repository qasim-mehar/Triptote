// import { useState } from 'react'

// import { useState } from 'react'
import { useState } from 'react';
import Logo from './Logo';
import Stats from './Stats';
import Form from './From';
import PackingList from './PackingList';
import List from './List';
import '../index.css'


const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 2, packed: false }
];


function App(){
  const [items, setItems]=useState(initialItems);

  const noOfItems=items.length;
  const packedItems=items.filter((item)=>item.packed==true).length;

  function handleItems(newItem) {
    setItems((items)=>[...items,newItem])
  }
  function handleDeleteItem(id){
    setItems((items)=>items.filter(item=>item.id!==id));
  }
  function handlePackedItem(id){
   setItems((items)=>items.map((item)=>item.id==id?{...item,packed: !item.packed}:item));
  }
  function handleClearItems(){
    const confirmation= window.confirm("Are you sure you want to delete all items");
    if(confirmation)  setItems([]);
  }
  // console.log(items.length);
 
 return (
 <div className='app'>
           <Logo/>
          <Form onAddItem={handleItems}/>
          <PackingList items={items} onDeleteItem={handleDeleteItem} onPackedItem={handlePackedItem} onClearItem={handleClearItems}/>
          <Stats noOfItems={noOfItems} packedItems={packedItems} />
 </div>
        
 )
}



export default App
