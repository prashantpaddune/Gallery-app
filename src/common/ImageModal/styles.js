import styled from "styled-components";

const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
`;

const ModalContent = styled.div`
    position: fixed;
    background: #fff;
    width: 80%;
    height: 80%;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    text-align: center;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  animation: fadeIn 0.5s ease;

    @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
    }
`;


const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
`;

const NavigationButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #fff;
    border: none;
    font-size: 24px;
    cursor: pointer;
`;

export {
    NavigationButton,
    StyledImage,
    CloseButton,
    ModalBackdrop,
    ModalContent
}