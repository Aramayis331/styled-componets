import styled from "styled-components";
import { ButtonSubmit } from "../../styles/button";

const HomeAds = () => {
    return (
       <HomeAdsWrapper>
            <HomeAdsText>Start a</HomeAdsText>
            <HomeAdsText>new project</HomeAdsText>
            <HomeAdsText>with
                <HomeAdsText marginLeft='15px' color="#3258FB">FullStats</HomeAdsText>
            </HomeAdsText>
            <HomeAdsText marginTop='40px' weight='400' size='16px' height='24px' family='Public Sans'>
                Платформа для аналитики поможет вам в выборе товара или ниши, 
                анализи конкурентов,  увеличении продаж и в ускорении 
                оборачиваемости вашего товара
            </HomeAdsText>
            <ButtonSubmit>Попробовать сейчас</ButtonSubmit>
       </HomeAdsWrapper>
    )
}

export default HomeAds;

const HomeAdsWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    max-width: 446px;
    max-height: 440px;
    height: 100%;
`
const HomeAdsText = styled.span`
    color: ${(props => props.color || 'white')};
    margin-top: ${(props => props.marginTop || '0px')};
    margin-left: ${(props => props.marginLeft || '0px')};
    font-family: ${(props => props.family || 'Roboto')};
    font-style: normal;
    font-weight: ${(props => props.weight || '700')};
    font-size: ${(props => props.size || '64px')};
    line-height: ${(props => props.height || '80px')};
    cursor: pointer;
`
// const HomeAdsButton = styled.button`
//     background: #3258FB;
//     box-shadow: 0px 8px 16px rgba(50, 88, 251, 0.24);
//     border-radius: 8px;
//     padding: 11px 22px;
//     border: none;
//     font-family: 'Roboto';
//     font-style: normal;
//     font-weight: 700;
//     font-size: 15px;
//     line-height: 26px;
//     color: #fff;
//     cursor: pointer;
//     margin-top: 40px;
// `
