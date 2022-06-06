import axios from 'axios'; 
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import UserContext from "../../Contexts/UserContext";
import { Container, Title, Plans, Price } from './styles';


export default function SubscriptionsPage() {
    const { token } = useContext(UserContext);
    const [plansInfos, setPlansInfos] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const promise = axios.get('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships',token)
         promise.then(response => setPlansInfos(response.data))
     },[token])

    if (plansInfos  === null) {
        return <h1>Carregando...</h1>
    }

    function choose (id){
        navigate(`/subscriptions/${id}`)
    }

    return (
        <Container>
            <Title>Escolha seu plano</Title>

            {plansInfos.map((info)=><Plans key={info.id} onClick={()=> choose(info.id)}>
                    <img src={info.image} alt="Logo Plano" />
                    <Price> R$ {info.price} </Price>
                </Plans> )}

        </Container>
    );
}