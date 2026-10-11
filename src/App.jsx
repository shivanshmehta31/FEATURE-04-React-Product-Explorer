import { useMemo, useState } from 'react';
import './style.css';

const initialData = [{"id": 1, "name": "Wireless Mouse", "category": "Accessories", "price": 799}, {"id": 2, "name": "Mechanical Keyboard", "category": "Accessories", "price": 2499}, {"id": 3, "name": "USB-C Hub", "category": "Adapters", "price": 1599}, {"id": 4, "name": "Laptop Stand", "category": "Office", "price": 1199}];
const money = (value) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 2 }).format(value);

export default function App() {
  const [items, setItems] = useState(initialData);
  const [message, setMessage] = useState('');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sort, setSort] = useState('default');
  const [coupon, setCoupon] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('2026-10');

  const total = useMemo(() => items.reduce((sum, item) => sum + (item.amount ?? item.price ?? 0) * (item.quantity ?? 1), 0), [items]);

  function toggleTask(id) {
    setItems(items.map(item => item.id === id ? { ...item, status: item.status === 'done' ? 'todo' : 'done' } : item));
  }
  function removeItem(id) {
    setItems(items.filter(item => item.id !== id));
  }
  function changeQuantity(id, delta) {
    setItems(items.map(item => item.id === id ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) } : item));
  }

  const shownItems = useMemo(() => {
    let result = [...items];
    // TODO: implement the requirements listed in README for feature-development projects.
    if (query) result = result.filter(item => JSON.stringify(item).toLowerCase().includes(query.toLowerCase()));
    if (category !== 'All') result = result.filter(item => item.category === category);
    if (sort === 'price-asc') result.sort((a,b) => (a.price || 0) - (b.price || 0));
    if (sort === 'marks-desc') result.sort((a,b) => (b.marks || 0) - (a.marks || 0));
    return result;
  }, [items, query, category, sort]);

  return (
    <main className="shell">
      <header className="hero">
        <p className="eyebrow">FEATURE PRACTICE</p>
        <h1>Product Explorer</h1>
        <p>Category filters, sorting, and product details</p>
      </header>
      <section className="panel">
        <div className="toolbar">
          <input aria-label="Search" placeholder="Search items..." value={query} onChange={e => setQuery(e.target.value)} />
          <select aria-label="Category filter" value={category} onChange={e => setCategory(e.target.value)}>
            <option>All</option>
            <option>Food</option><option>Travel</option><option>Utilities</option>
            <option>Accessories</option><option>Adapters</option><option>Office</option>
            <option>CSE-DS</option><option>CSE-AIML</option><option>CSE</option>
          </select>
          <select aria-label="Sort" value={sort} onChange={e => setSort(e.target.value)}>
            <option value="default">Default order</option>
            <option value="price-asc">Price: low to high</option>
            <option value="marks-desc">Marks: high to low</option>
          </select>
        </div>
        <div className="list">
          {shownItems.map(item => (
            <article className="item" key={item.id}>
              <div>
                <h2>{item.title || item.name}</h2>
                <p>{item.category || item.department || item.status || 'Sample item'}</p>
                {item.priority && <small>Priority: {item.priority}</small>}
                {item.marks !== undefined && <small>Marks: {item.marks}</small>}
              </div>
              <div className="item-actions">
                <strong>{money(item.amount ?? item.price ?? item.marks ?? 0)}</strong>
                {item.quantity !== undefined && <div className="qty">
                  <button onClick={() => changeQuantity(item.id, -1)} aria-label="Decrease quantity">−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => changeQuantity(item.id, 1)} aria-label="Increase quantity">+</button>
                </div>}
                {item.status && <button onClick={() => toggleTask(item.id)}>Toggle status</button>}
                <button className="danger" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </article>
          ))}
          {shownItems.length === 0 && <p className="empty">No results. Try changing your search or filter.</p>}
        </div>
        <footer className="summary">
          <span>{items.length} items in data</span>
          <strong>Displayed total: {money(total)}</strong>
        </footer>
        <div className="notice" role="status">{message || 'Use the README to guide your work.'}</div>
      </section>
      <section className="panel brief">
        <h2>Practice objective</h2>
        <p>Implement category filters, price sorting, and a product details panel.</p>
        <p><strong>AI-assisted workflow:</strong> reproduce the issue, ask AI for a hypothesis, inspect the relevant code, apply one change at a time, and verify against acceptance criteria.</p>
      </section>
    </main>
  );
}
