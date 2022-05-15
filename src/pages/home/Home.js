import Header from "../../components/header/Header";
import styled from "styled-components";
import imgHome from "../../images/home.png";
import HomeAds from "../../components/homeAds/HomeAds";
import { Background } from "../../styles/background";

const Home = () => {
    return (
        <HomeWrapper>
            <Background />
            <Header />
            <HomeAdsConainer>
                <HomeAds />
                <HomeAdsImg src={imgHome} alt='noPhoto'/>
            </HomeAdsConainer>
        </HomeWrapper>
    )
}

export default Home;

const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;
`
const HomeAdsConainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`
const HomeAdsImg = styled.img`
    position: absolute;
    right: 0;
    width: 35%;
    z-index: -2;
`