import styled from 'styled-components';
import Logo from '../logo/Logo';
import { Link } from 'react-router-dom';
import { Flex } from '../../styles/flex';

const Header = () => {
    return (
        <Flex>
            <Logo color='#fff'/>
            <Link to='/login'>
                <Button>Войти</Button>
            </Link>            
        </Flex>
    )
}

export default Header;

const Button = styled.button`
    color: #fff;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    background-color: transparent;
    border: none;
`