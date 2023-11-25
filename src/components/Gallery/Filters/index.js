import React from "react";
import { Dropdown, ClearButton } from './styles'

const Filters = ({ items, sortKey, setSortKey, filterCategory, setFilterCategory, isFilterOrSortApplied, clearFilters  }) => {
    return (
        <div>
            <Dropdown value={sortKey} onChange={e => setSortKey(e.target.value)}>
                <option value="">Sort By</option>
                <option value="title">Title</option>
                <option value="date">Date</option>
            </Dropdown>

            <Dropdown value={filterCategory} onChange={e => setFilterCategory(e.target.value)}>
                <option value="">Filter By Category</option>
                {[...new Set(items.map(item => item.category))].map(category => (
                    <option key={category} value={category}>{category}</option>
                ))}
            </Dropdown>

            {isFilterOrSortApplied && (
                <ClearButton onClick={clearFilters}>Clear All</ClearButton>
            )}
        </div>
    )
}

export default Filters;