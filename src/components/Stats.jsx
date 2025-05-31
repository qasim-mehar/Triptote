export default function Stats({noOfItems,packedItems}){
  // console.log(items);
  
  // setPackedItems((items)=>items.length);
  return(
    <footer className='stats'>
      
      {`you have ${noOfItems}  items and You already packed ${packedItems} `}
    </footer>
  )
}