import axios from 'axios'; 
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import UserContext from "../../Contexts/UserContext";

import logo from "../../assets/img/logo.svg"
import { Container, Input, Button, LinkStyled} from './styles';

export default function LoginPage() {

    const { setToken, setData} = useContext(UserContext);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [inputLoading, setInputLoading] = useState("");


    function handleLogin(e) {
        e.preventDefault();

        setIsLoading(true);
        setInputLoading("disabled")

        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/login', {
            email: email,
            password: password,
        });
        
        promise.then((response)=>{
            setData(response.data);
            setToken({headers:{
                Authorization: `Bearer ${response.data.token}`
           }})
            if(response.data.membership === null){
                navigate("/subscriptions")
              
            }else{
                navigate("/home")} 
        })
        promise.catch((error) => {
            console.log(error.response);
            alert("Tenta de novo. Dados incorretos");
            setIsLoading(false)
            setInputLoading("")
        })
    }
    return (
        <Container>
            <img src={logo} alt="Logo DrivenPlus" />
            <form onSubmit={handleLogin}>
                <Input type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                    disabled={inputLoading}
                    required
                />

                <Input type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="senha"
                    disabled={inputLoading}
                    required
                />

                <Button>{isLoading ?
                    ("loading...") : ("entrar")}
                </Button>
            </form>

            <LinkStyled to="/sign-up">Não tem uma conta? Cadastre-se!</LinkStyled>
        </Container>
    );
}