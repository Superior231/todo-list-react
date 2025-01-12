/* eslint-disable react/prop-types */
function Item({ item, onDeleteItem, onToggleChecked }) {
    return (
        <li>
            <input
                type="checkbox"
                checked={item.checked}
                onChange={() => onToggleChecked(item.id)}
            />
            <span>{item.name}</span>
            <button onClick={() => onDeleteItem(item.id)}>&times;</button>
        </li>
    )
}

export default Item
