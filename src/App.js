import Gallery from "./components/Gallery";
import React from "react";
import { StyledHeading, Container } from "./styles";

function App() {
  return (
    <Container>
        <StyledHeading>Gallery</StyledHeading>
        <Gallery />
    </Container>
  );
}

export default App;
