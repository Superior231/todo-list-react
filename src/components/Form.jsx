/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { useState } from 'react';

function Form({ onAddItem, onSortChange, sortBy }) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue) {
            const newItem = { name: inputValue, checked: false, id: Date.now() };
            onAddItem(newItem);

            Swal.fire({
                title: 'Success!',
                text: `Added ${inputValue} to your todo list!`,
                icon: 'success',
                confirmButtonText: 'OK',
            });
            setInputValue('');
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Please enter a task!',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <div className="actions">
            <form className="card-search d-flex" onSubmit={handleSubmit}>
                <div className="filter" style={{ display: inputValue ? 'none' : 'flex' }}>
                    <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
                        <option value="oldest">Oldest</option>
                        <option value="newest">Newest</option>
                        <option value="name">A-Z</option>
                        <option value="checked">Done</option>
                    </select>
                </div>
                <input type="search" className="form-control" id="input-task" placeholder="What do you want to do?" autoComplete="off" value={inputValue} onChange={handleInputChange} />
                <button className="text-light" id="btn-add" type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form
