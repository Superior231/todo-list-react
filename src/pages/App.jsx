/* eslint-disable no-undef */
import Header from '../components/Header'
import Form from '../components/Form'
import List from '../components/List'
import { useState } from 'react'

function App() {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState('oldest');

  // Sorting Items
  let sortedItems;
  if (sortBy === 'oldest') {
    sortedItems = items;
  } else if (sortBy === 'newest') {
    sortedItems = items.slice().sort((a, b) => b.id - a.id);
  } else if (sortBy === 'name') {
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'checked') {
    sortedItems = items.slice().sort((a, b) => b.checked - a.checked);
  }  

  // Add Item
  function handleAddItem(item) {
    setItems([...items, item]);
  }

  // Delete Item
  function handleDeleteItem(itemId) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#d33',
      cancelButtonText: 'Cencel',
      customClass: {
        icon: 'border-danger text-danger',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        setItems(items.filter((i) => i.id !== itemId));
        Swal.fire('Deleted!', 'Your item has been deleted!', 'success');
      }
    });
  }

  // Toggle Checked
  function handleToggleChecked(itemId) {
    setItems(
      items.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  }

  // Progress
  const progress = items.length
    ? (items.filter((item) => item.checked).length / items.length) * 100
    : 0;


  // Clear All Items
  function handleClearItems() {
    Swal.fire({
      title: 'Clear All?',
      text: 'Are you sure you want to clear all items?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Clear All',
      confirmButtonColor: '#d33',
      cancelButtonText: 'Cancel',
      customClass: {
        icon: 'border-danger text-danger',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        setItems([]);
        Swal.fire('Deleted!', 'Your items have been deleted!', 'success');
      }
    });
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-body p-lg-4">
          <Header />
          <Form
            onAddItem={handleAddItem}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />
          <List
            sortedItems={sortedItems}
            onDeleteItem={handleDeleteItem}
            onToggleChecked={handleToggleChecked}
            onClearItems={handleClearItems}
            progress={progress}
          />
        </div>
      </div>
    </div>
  )
}

export default App
