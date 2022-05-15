import styled from "styled-components";
import { TextField } from "@mui/material";

const Inputs = ({ register, errors, label, name, margin }) => {
    return (
        <InputsWrraper margin={margin}>
            <TextField  autoComplete="off" type='text' 
            label={label} variant='outlined'
            {...register(`${name}`, {
                    required: 'Обязательный поля'
            })}/>
            {errors[name] && <TextError>{errors[name].message}</TextError>}
        </InputsWrraper>
    )
}

export default Inputs;

const InputsWrraper = styled.div`
    width: 100%;
    margin-top: 20px;
    margin-left: ${(props => props.margin && '20px')};
    div {
        width: 100%;
    }
`
export const TextError = styled.p`
    color: red;
    margin-top: 5px;
`