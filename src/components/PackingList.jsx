import { useState } from "react";
import List from './List';
export default 
function PackingList({items,onDeleteItem,onPackedItem,onClearItem}){
  const [sortBy, setSortBy]=useState("value")
  let sortedItem;
  function sortItem(sortBy){
     if (sortBy=="value") sortedItem=items;
     if(sortBy=="description") sortedItem=items.slice().sort((a,b )=>a.description.localeCompare(b.description));
     if(sortBy=="packed") sortedItem=items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed));
  }
  sortItem(sortBy);
  return(
        <div className="list">
          <ul >
             {sortedItem.map(item=> <List key={item.id} item={item} onDeleteItem={onDeleteItem} onPackedItem={onPackedItem}/>)}
            
          </ul>
          <div className="actions">
            <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
              <option value="value">sort by value</option>
              <option value="description">sort by description</option>
              <option value="packed">sort by packed</option>
            </select>
          </div>
          <button onClick={()=>onClearItem()}>Clear All Items</button>
        </div>
    
  )
}