
export default function List({ item, onDeleteItem, onPackedItem }) {
  const { id, description, quantity, packed } = item; //we further destructured it so we can simply use values cleanly.
  function handlePackedItem(id) {
    onPackedItem(id);
  }
  return (
    <li key={id}>
      <input checked={packed} onChange={() => handlePackedItem(id)} type="checkbox" />
      <span style={packed ? { textDecoration: "line-through" } : {}}>{quantity} <strong>{description}</strong></span>
      <button onClick={() => onDeleteItem(id)}>❌</button>

    </li>
  );
}
