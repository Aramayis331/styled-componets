import styled from "styled-components";
import { Form } from "../../../styles/positionCenter";
import { Text } from "../../../styles/text";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { useForm } from "react-hook-form";
import InputPassword from "../../../components/inputPassword/InputPassword";
import Inputs from "../../../components/inputs/Inputs";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from '@mui/material/Checkbox';
import { Flex } from '../../../styles/flex';
import { ButtonSubmit } from "../../../styles/button";
import { Link } from "react-router-dom";

const LoginForm = () => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm({mode: 'onChange'})

    return (
            <Form onSubmit={handleSubmit((data) => {
                console.log(data)
                reset()
            })}>
                <Text height='36px' size='24px' weight='700'>Войти</Text>
                <Text size='16px' height='24px'>Введите свои данные ниже</Text>
                <DivAdvice>
                    <DivIcon>
                        <ReportGmailerrorredIcon />
                    </DivIcon>
                    <Text weight='100' size='13px'>
                        Используй <Text weight='900' color='#000'>email</Text>
                         : demo@minimals.ru / <Text weight='900' color='#000'>пароль</Text> 
                         : demo1234
                    </Text> 
                </DivAdvice>
                <Inputs register={register} errors={errors} label='Email' name='email'/>
                <InputPassword register={register} errors={errors}/>
                <Flex>
                    <FormControlLabel control={<Checkbox {...register('save')} />} label="Запомнить меня" />
                    <Link to='/reset'>
                        <Text color='blue' weight='700' size='1rem'>Забыли пароль?</Text>
                    </Link>
                </Flex>
                <ButtonSubmit width='true'>Войти</ButtonSubmit>
            </Form>
    )
}

export default LoginForm;

const DivAdvice = styled.div`
    margin-top: 25px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: rgba(50, 88, 251, 0.2);
    border-radius: 8px;
    padding: 13px 12px 13px 16px;
`
const DivIcon = styled.div`
    cursor: pointer;
    margin-right: 5px;
`