import { useEffect, useState } from "react";
import data from "../constants/gallery";

const useGetGalleryItem = () => {
    const [items, setItems] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const [sortKey, setSortKey] = useState(localStorage.getItem('sortKey') || '');
    const [filterCategory, setFilterCategory] = useState(localStorage.getItem('filterCategory') || '');

    useEffect(() => {
        localStorage.setItem('sortKey', sortKey);
        localStorage.setItem('filterCategory', filterCategory);

        let sortedFilteredItems = [...data];

        if (filterCategory) {
            sortedFilteredItems = sortedFilteredItems.filter(item => item.category === filterCategory);
        }

        if (sortKey) {
            sortedFilteredItems.sort((a, b) => {
                if (a[sortKey] < b[sortKey]) return -1;
                if (a[sortKey] > b[sortKey]) return 1;
                return 0;
            });
        }

        setItems(sortedFilteredItems);
    }, [sortKey, filterCategory]);


    const openModal = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setCurrentIndex(-1);
    };

    const navigate = (direction) => {
        const newIndex = currentIndex + direction;
        if (newIndex >= 0 && newIndex < items.length) {
            setSelectedImage(items[newIndex]);
            setCurrentIndex(newIndex);
        }
    };

    const isFilterOrSortApplied = sortKey !== '' || filterCategory !== '';

    const clearFilters = () => {
        setSortKey('');
        setFilterCategory('');
        localStorage.removeItem('sortKey');
        localStorage.removeItem('filterCategory');
    };

    return {
        items,
        originalItems: data,
        selectedImage,
        openModal,
        closeModal,
        navigate,
        sortKey,
        setSortKey,
        setFilterCategory,
        filterCategory,
        isFilterOrSortApplied,
        clearFilters
    }
}

export default useGetGalleryItem;