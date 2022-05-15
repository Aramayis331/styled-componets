import styled from "styled-components";

export const ButtonSubmit = styled.button`
width: ${(props => props.width && '100%')};
background: #3258FB;
box-shadow: 0px 8px 16px rgba(50, 88, 251, 0.24);
border-radius: 8px;
padding: 11px 22px;
border: none;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 26px;
color: #fff;
cursor: pointer;
margin-top: ${(props => props.margin || '40px')};
margin-bottom: ${(props => props.bottom || '0px')};
`