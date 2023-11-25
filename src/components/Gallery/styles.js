import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;
`;

export const GalleryItem = styled.div`
  position: relative;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:hover > div {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const CategoryLabel = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #000;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    opacity: 0;
`;

export const StyledHeading = styled.h1`
    margin: 20px 0;
`;

export const FilterContainer = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
`