import { Link } from 'react-router-dom';
import Aside from '../../components/aside/Aside';
import registerImg from '../../images/register.png';
import { Background } from '../../styles/background';
import { Flex } from '../../styles/flex';
import { Text } from '../../styles/text';
import { FormWrapper, LoginWrapper } from '../login/Login';
import RegisterForm from './registerForm/RegisterForm';

const Register = () => {

    return (
        <LoginWrapper>
            <Background background='#fff'/>
            <Aside src={registerImg}/>
            <FormWrapper>
                <Flex align='flex-start' jsustify='flex-end'>
                    <Text>Уже есть аккаунт? 
                        <Link to='/login'>
                            <Text weight='600' color='#3258FB'>      Войти</Text>
                        </Link>
                    </Text>
                </Flex>
                <RegisterForm />
            </FormWrapper>
        </LoginWrapper>
    )
}

export default Register;