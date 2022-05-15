import styled from "styled-components";

export const Flex = styled.div`
    width: ${(props => props.width || '100%')};
    display: flex;
    justify-content: ${(props => props.jsustify || 'space-between')};
    align-items: ${(props => props.align || 'center')};
    flex-direction: ${(props => props.direction || 'row')}
`