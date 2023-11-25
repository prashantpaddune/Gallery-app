import {useState} from "react";
import data from "../constants/gallery";

const useGetGalleryItem = () => {
    const [items, setItems] = useState(data);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

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

    return {
        items,
        selectedImage,
        openModal,
        closeModal,
        navigate,
    }
}

export default useGetGalleryItem;