import React from 'react';
import { CategoryLabel, GalleryContainer, GalleryItem, ClearButton, Image,StyledHeading, FilterContainer } from './styles';
import ImageModal from '../../common/ImageModal';
import useGetGalleryItem from "../../hooks/useGetGalleryItem";
import Filters from "./Filters";

const Gallery = () => {
    const {
        items = [],
        closeModal = () => {},
        navigate = () => {},
        openModal = () => {},
        selectedImage = null,
        sortKey = '',
        setSortKey = () => {},
        filterCategory = '',
        setFilterCategory = () => {},
        originalItems,
        isFilterOrSortApplied,
        clearFilters
    } = useGetGalleryItem();


    return (
        <React.Fragment>
            <FilterContainer>
                <StyledHeading>Gallery</StyledHeading>
                <Filters
                    items={originalItems}
                    filterCategory={filterCategory}
                    setFilterCategory={setFilterCategory}
                    setSortKey={setSortKey}
                    sortKey={sortKey}
                    isFilterOrSortApplied={isFilterOrSortApplied}
                    clearFilters={clearFilters}
                />
            </FilterContainer>

            <GalleryContainer>
                {items.map((item, index) => (
                    <GalleryItem key={item.id} onClick={() => openModal(item, index)}>
                        <Image src={item.imageUrl} alt={item.title} />
                        <CategoryLabel>{item.category}</CategoryLabel>
                    </GalleryItem>
                ))}
            </GalleryContainer>
            {selectedImage && (
                <ImageModal
                    image={selectedImage}
                    onClose={closeModal}
                    onPrev={() => navigate(-1)}
                    onNext={() => navigate(1)}
                />
            )}
        </React.Fragment>
    );
};

export default Gallery;
