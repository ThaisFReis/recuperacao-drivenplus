import axios from 'axios'; 
import React from 'react';
import { useContext} from 'react';
import UserContext from "../../Contexts/UserContext";
import { useNavigate } from 'react-router';
import { FaUserCircle } from 'react-icons/fa'
import { CancelPlan, ChangePlan, Container, Footer, LogoPlan, LogoUser, NavBar, PlanBox, PlanBenefitsCard, UserTitle } from './styles';

export default function HomePage() {
    const navigate = useNavigate();
    const {data, token,} = useContext(UserContext);

    function changePlan() {
        navigate('/subscriptions');
    }
    
    function cancelPlan() {
        console.log("cancelar")
        const promise = axios.delete('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', token)
        promise.then((response) => {
            navigate('/');
        });

        promise.catch((error) => {
            alert("Algo deu errado, tente novamente mais tarde");
            console.log(error.response);
        });
    }

    return (
        <Container>
            <NavBar>
                <LogoPlan src={data.membership.image} alt="logo-plan" />
                <LogoUser><FaUserCircle /></LogoUser>
            </NavBar>
            <UserTitle>
                <p>Olá, {data.name}</p>
            </UserTitle>
            <PlanBox>
                {data.membership.perks.map((info) => (
                    <PlanBenefitsCard>
                        <p key={info.id}> {info.title}</p>
                    </PlanBenefitsCard>
                ))}
            </PlanBox>
            <Footer>
                <ChangePlan onClick={() => changePlan()}>Mudar Plano</ChangePlan>
                <CancelPlan onClick={() => cancelPlan()}>Cancelar Plano</CancelPlan>
            </Footer>
        </Container>
    )
}