import axios from 'axios'; 
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import logo from "../../assets/img/logo.svg"
import { Button, Container, Input, LinkStyled } from './styles';


export default function SingUpPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');
    const navigate = useNavigate();


    function handleSignUp(e) {
        e.preventDefault();

        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up', {
            email: email,
            name: name,
            cpf: cpf,
            password: password,
        });
        promise.then(response => handleSuccess(response.data))
        promise.catch(error => alert("Erro. Tente de novo!"))
    }
    function handleSuccess(answer) {
        alert("Usuário cadastrado.")
        navigate('/');
    }
    return (
        <Container>
            <img src={logo} alt="Logo DrivenPlus" />
            <form onSubmit={handleSignUp}>

                <Input type="name"
                    placeholder="Nome"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <Input type="text"
                    name="cpf"
                    placeholder="CPF"
                    pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
                    onChange={(e) => setCPF(e.target.value
                        .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
                        .substring(0, 14)
                        )}
                    value={cpf}
                />
                <Input type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}

                />
                <Input type="password"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                <Button >Entrar</Button>
            </form>
            <LinkStyled to="/">Já possui conta? Faça login.</LinkStyled>
        </Container>
 
    );
}