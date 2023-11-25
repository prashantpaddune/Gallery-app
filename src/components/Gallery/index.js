import React from 'react';
import { CategoryLabel, GalleryContainer, GalleryItem, Image} from './styles';
import ImageModal from '../../common/ImageModal';
import useGetGalleryItem from "../../hooks/useGetGalleryItem";

const Gallery = () => {
    const {
        items = [],
        closeModal = () => {},
        navigate = () => {},
        openModal = () => {},
        selectedImage = null
    } = useGetGalleryItem();

    return (
        <React.Fragment>
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
