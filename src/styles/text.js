import styled from "styled-components";

export const Text = styled.span`
    margin-top:  ${(props => props.margin || '0px')};
    margin-bottom: ${(props => props.bottom || '0px')};
    text-align: ${(props => props.align && 'center')};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: ${(props => props.weight || '400')};
    font-size: ${(props => props.size || '14px')};
    line-height: ${(props => props.height || '22px')};
    color: ${(props => props.color || '#333333')};
    cursor: pointer;
`