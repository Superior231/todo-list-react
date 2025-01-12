/* eslint-disable react/prop-types */
import Item from './Item'

function List({ sortedItems, onDeleteItem, onToggleChecked, progress, onClearItems }) {
    
    return (
        <>
            <div className="progress mt-3" style={{ borderRadius: '50px' }}>
                <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: `${progress}%`, borderRadius: '50px' }}
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                    {Math.round(progress)}%
                </div>
            </div>
            <hr className="text-light" />

            <div className="d-flex justify-content-end">
                <button
                    type="button"
                    className="d-flex align-items-center bg-transparent border-0 text-light text-decoration-underline fst-italic"
                    onClick={onClearItems}
                >
                    Clear All
                </button>
            </div>

            <ul className="mt-4 mx-0 px-0" id="list-container">
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        item={item}
                        onDeleteItem={onDeleteItem}
                        onToggleChecked={onToggleChecked}
                    />
                ))}
            </ul>
        </>
    )
}

export default List
