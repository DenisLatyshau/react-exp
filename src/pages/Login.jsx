import React from "react";
import MyInput from "../components/UI/inout/MyInput";
import MyButton from "../components/UI/button/MyButton";

const Login = () => {
    return (
        <div>
            <h1>Страница для логина</h1>
            <form>
                <MyInput type='text' autoComplete="off" placeholder="Введите логин"/>
                <MyInput type='password' autoComplete="current-password" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    )
}

export default Login