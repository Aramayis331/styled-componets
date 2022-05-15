import styled from "styled-components";
import { Background } from '../../styles/background';
import Logo from '../../components/logo/Logo';
import { Form } from '../../styles/positionCenter';
import { useForm } from "react-hook-form";
import { Text } from "../../styles/text";
import Inputs from '../../components/inputs/Inputs';
import { ButtonSubmit } from "../../styles/button";
import { Link } from "react-router-dom";
import { Flex } from "../../styles/flex";

const ResetPassword = () => {

    const { register, reset, handleSubmit, formState:{errors} } = useForm({mode: 'onChange'})

    return (
        <ResetWrapper>
            <Background background="#fff"/>
            <Logo />
            <Form onSubmit={handleSubmit((data) => {
                reset()
            })}>
                <Text weight='700' size='32px' height='48px' margin='15px'>Забыли свой пароль?</Text>
                <Text weight='700' size='16px' height='24px' margin='5px' bottom='10px'>
                    Пожалуйста, введите адрес электронной почты, связанный с вашей 
                    учетной записью, и мы отправим вам ссылку для сброса пароля.
                </Text>
                <Inputs register={register} errors={errors} label='Email' name='email'/>
                <ButtonSubmit margin='20px' width='true' bottom='20px'>Восстановить пароль</ButtonSubmit>
                <Flex jsustify='center'>
                    <Link to='/login'>
                        <Text weight='700' size='15px' height='26px' margin='15px' color='blue'>Назад</Text>
                    </Link>
                </Flex>
            </Form>
        </ResetWrapper>
    )
}

export default ResetPassword;

const ResetWrapper = styled.div`
    display: flex;
`