import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from '../../images/logo.png';
import { Flex } from "../../styles/flex";

const Logo = ({ color }) => {
    return (
        <Link to='/'>
            <Flex jsustify='center'>
                <LogoImg src={logo} alt='noPhoto'/>
                <LogoTitel color={color}>FullStats</LogoTitel>
            </Flex>
        </Link>
    )
}

export default Logo;

const LogoImg = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`
const LogoTitel = styled.p`
    cursor: pointer;
    font-family: 'Roboto';
    font-style: normal;
    margin-left: 8px;
    font-weight: 800;
    font-size: 26px;
    line-height: 30px;
    color: ${(props => props.color)};
`
