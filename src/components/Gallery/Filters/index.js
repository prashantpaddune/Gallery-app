import React from "react";

const Filters = ({ items, sortKey, setSortKey, filterCategory, setFilterCategory }) => {
    return (
        <div>
            <select value={sortKey} onChange={e => setSortKey(e.target.value)}>
                <option value="">Sort By</option>
                <option value="title">Title</option>
                <option value="date">Date</option>
            </select>

            <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
                <option value="">Filter By Category</option>
                {[...new Set(items.map(item => item.category))].map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </select>
        </div>
    )
}

export default Filters;