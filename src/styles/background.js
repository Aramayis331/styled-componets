import styled from "styled-components";

export const Background = styled.div`
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${(props => props.background || 'radial-gradient(106.64% 115.35% at 4.1% 5.52%, rgba(22, 28, 36, 0.48) 0%, rgba(22, 28, 36, 0.8) 45.53%, #161C24 100%, #161C24 100%, #161C24 100%)')};
    z-index: -1;
    transform: matrix(-1, 0, 0, 1, 0, 0);
`