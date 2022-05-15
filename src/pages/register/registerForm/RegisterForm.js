import { Form } from "../../../styles/positionCenter";
import { useForm } from "react-hook-form";
import { Text } from '../../../styles/text';
import { Flex } from '../../../styles/flex';
import Inputs from '../../../components/inputs/Inputs';
import InputPassword from "../../../components/inputPassword/InputPassword";
import { ButtonSubmit } from "../../../styles/button";
import styled from "styled-components";
import { useDispatch } from 'react-redux'; 
import { addUsers } from "../../../store/actions/usersAction";
import { authUser } from "../../../store/actionsThunk/authUser";

const RegisterForm = () => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm({mode: 'onChange'})
    const dispatch = useDispatch()

    return (
        <Form onSubmit={handleSubmit((data) => {
            dispatch(addUsers(data))
            dispatch(authUser(data))
            reset()
        })}>
            <Text weight='700' size='24px' height='36px'>Зарегистрироваться</Text>
            <Text size='16px' height='20.8px' margin='5px'>Зарегистрируйтесь, чтобы начать работу с сервисом:</Text>
            <Flex align='flex-start'>
                <Inputs register={register} errors={errors} label='Имя' name='name'/>
                <Inputs register={register} errors={errors} label='Фамилия' name='lastName' margin='true'/>
            </Flex>
            <Inputs register={register} errors={errors} label='Email' name='email'/>
            <InputPassword register={register} errors={errors}/>
            <ButtonSubmit margin='20px' width='true'>Зарегестрироваться</ButtonSubmit>
            <CenterText>
                <Text>Регистрируясь, я соглашаюсь с минимальными условиями обслуживания и</Text>
                <Text color="blue">    Политикой конфиденциальности.</Text>
            </CenterText>
        </Form>
    )
}

export default RegisterForm;

export const CenterText = styled.div`
    margin-top: 20px;
    text-align: center;
`