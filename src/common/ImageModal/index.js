import React, { useEffect } from 'react';
import { ModalBackdrop, ModalContent, StyledImage, CloseButton, NavigationButton } from "./styles";

const ImageModal = ({ image, onClose, onPrev, onNext })  => {

    const handleKeyDown = (event) => {
        if (event.key === 'ArrowRight') {
            onNext();
        } else if (event.key === 'ArrowLeft') {
            onPrev();
        } else if (event.key === 'Escape') {
            onClose();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onPrev, onNext, onClose]);

    return (
        <ModalBackdrop onClick={onClose}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose}>X</CloseButton>
                <NavigationButton style={{ left: '10px' }} onClick={onPrev}>&lt;</NavigationButton>
                <StyledImage key={image.imageUrl} src={image.imageUrl} alt={image.title} />
                <NavigationButton style={{ right: '10px' }} onClick={onNext}>&gt;</NavigationButton>
            </ModalContent>
        </ModalBackdrop>
    );
}

export default ImageModal;