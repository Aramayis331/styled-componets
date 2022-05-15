import styled from "styled-components";
import Aside from "../../components/aside/Aside";
import { Background } from "../../styles/background";
import loginImg from '../../images/login.png';
import { Text } from "../../styles/text";
import { Link } from 'react-router-dom';
import { Flex } from "../../styles/flex";
import LoginForm from "./loginForm/LoginForm";

const Login = () => {

    return (
        <LoginWrapper>
            <Background background='#fff'/>
            <Aside src={loginImg}/>
            <FormWrapper>
                <Flex align='flex-start' jsustify='flex-end'>
                    <Text>Нет учетной записи?
                        <Link to='/register'>
                            <Text weight='600' color='#3258FB'>     Зарегистрироваться</Text>
                        </Link>
                    </Text>
                </Flex>
                <LoginForm />
            </FormWrapper>
        </LoginWrapper>
    )
}

export default Login;

export const LoginWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
`
export const FormWrapper = styled.div`
    width: 100%;
    position: relative;
`


