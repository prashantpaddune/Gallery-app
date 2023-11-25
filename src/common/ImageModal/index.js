import React from 'react';
import { ModalBackdrop, ModalContent, StyledImage, CloseButton, NavigationButton } from "./styles";

const ImageModal = ({ image, onClose, onPrev, onNext })  => {
    return (
        <ModalBackdrop onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose}>X</CloseButton>
                <NavigationButton style={{ left: '10px' }} onClick={onPrev}>&lt;</NavigationButton>
                <StyledImage src={image.imageUrl} alt={image.title} />
                <NavigationButton style={{ right: '10px' }} onClick={onNext}>&gt;</NavigationButton>
            </ModalContent>
        </ModalBackdrop>
    );
}

export default ImageModal;