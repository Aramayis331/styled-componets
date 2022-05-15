import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { TextError } from "../inputs/Inputs";

const InputPassword = ({ register, errors }) => {

    const [toggle, setToggle] = useState(false)

    return (
        <>
            <FormControl sx={{width: "100%", marginTop: '20px' }} variant="outlined"> 
                <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
                <OutlinedInput
                autoComplete="off"
                id="outlined-adornment-password"
                type={toggle ? "text" : "password"}
                {...register('password', {
                    required: 'Обязательный поля'
                })}
                endAdornment={
                    <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setToggle(!toggle)}
                        edge="end"
                    >
                        {toggle ? <VisibilityOff  /> : <Visibility />}
                    </IconButton>
                    </InputAdornment>
                }
                label="Password"
                />
            </FormControl>
            {errors.password && <TextError>{errors.password.message}</TextError>}
        </>
    )
}

export default InputPassword;