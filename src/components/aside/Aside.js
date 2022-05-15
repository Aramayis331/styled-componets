import styled from 'styled-components';
import { Img } from '../../styles/positionCenter';
import Logo from '../logo/Logo';

const Aside = ({ src }) => {
    return (
        <AsideWrapper>
            <Logo color='#333333'/>
            <Img src={src} alt='noPhoto'/>
        </AsideWrapper>
    )
}

export default Aside;

const AsideWrapper = styled.div`
    position: relative;
    max-width: 364px;
    width: 100%;
    height: 100%;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background: #fff;
    box-shadow: 5px 16px 32px -4px rgba(145, 158, 171, 0.12);
    border-radius: 16px;
`