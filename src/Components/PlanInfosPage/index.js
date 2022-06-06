import { Rings } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from 'react-icons/io'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { FaMoneyBillWave, FaWindowClose } from 'react-icons/fa'
import axios from "axios";

import { Content, Header, Logo, Description, Modal, Card } from './styles';

export default function PlansInfosPage() {
    const navigate = useNavigate();

    const {token, data, setData} = useContext(UserContext);
    const planId = useParams();
    const [plansInfos, setPlansInfos] = useState(null);

    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cardCVV, setCardCVV] = useState("");
    const [cardExpiration, setCardExpiration] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${planId.planId}`, token)
        promise.then(response => setPlansInfos(response.data))
    })


    function printPopUp (){
        if(isModalVisible === true){
            return(
                <Modal>
                    <FaWindowClose />
                    <Card>
                        <p>Tem certeza que deseja assinar o plano <br/>Driven Plus (R$ {plansInfos.price}) ?</p>
                        <div className="buttons">
                            <button onClick={()=>{setIsModalVisible(false)}}>Não</button>
                            {isDisabled ? <button className="confirm"><Rings color="#FFFFFF" height={14} width={95} /></button> : <button onClick={()=>{purchase()}} className="confirm">SIM</button>}
                        </div>
                    </Card>
            </Modal>
            )
        }
        return(
            <>
            </>
        )
    }

    function validate(event){
        event.preventDefault();
        setIsModalVisible(true);  
    }

    function purchase(event){
        setIsDisabled(true);
        const promise = axios.post('https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions', {
            membershipId: parseInt(planId.planId),
            cardName: cardName,
            cardNumber: cardNumber,
            securityNumber: parseInt(cardCVV),
            expirationDate: cardExpiration
        }, token)
        promise.then((response)=>{
                setIsDisabled(false);
                const newArray = {...data, membership: response.data.membership};
                setData(newArray);
                navigate("/home");
            })
        promise.catch((res) =>{
                setIsDisabled(false);
                setIsModalVisible(false);
                alert("Ocorreu um erro. Tente novamente.")
            })
        
    }

    const Load = loadPage();
    const PopUp = printPopUp();

    return(
        <>
            {Load}
            {PopUp}
        </>
    )
    
    
    function loadPage (){
        if(plansInfos !== null){
            return(
            <Content>
                <Header><IoMdArrowRoundBack onClick={()=>{navigate("/subscriptions")}}/></Header>
                <Logo>
                        <img src={plansInfos.image} alt="Logo" />
                        <h1>Driven Plus</h1>
                </Logo>
                <Description>
                    <div className="topic">
                        <HiOutlineClipboardList /> <h1>Benefícios:</h1>
                    </div>
                    {plansInfos.perks.map((item, index)=><p key={item.id}>{index + 1}. {item.title}</p>)}
                    <div className="topic">
                    <FaMoneyBillWave /> <h1>Preço:</h1>
                    </div>
                    <p>R$ {plansInfos.price} cobrados mensalmente</p>
                </Description>
                <form onSubmit={(event)=>{validate(event)}}>
                    <input
                    type="text"
                    value={cardName}
                    onChange={(e)=> setCardName(e.target.value)}
                    placeholder= "Nome impressso no cartão"
                    required
                    >
                    </input>
                    <input
                    type="text"
                    value={cardNumber}
                    onChange={(e)=> setCardNumber(e.target.value
                        .replace(/\D/g, "")
                        .replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, "$1 $2 $3 $4")
                        .substring(0, 19))}
                    placeholder= "Dígitos do cartão"
                    required
                    >
                    </input>
                    <input className="cvv"
                    type="text"
                    value={cardCVV}
                    onChange={e => setCardCVV(e.target.value
                        .replace(/(\d{3})/, "$1")
                        .substring(0, 3))}
                    placeholder= "Código de segurança"
                    required
                    >
                    </input>
                    <input className="validate"
                    type="text"
                    value={cardExpiration}
                    onChange={e => setCardExpiration(e.target.value
                        .replace(/(\d{2})(\d{4})/, "$1/$2")
                        .substring(0, 7))}
                    placeholder= "Validade"
                    required
                    >
                    </input>
                    <button type="submit">ASSINAR</button>
                    </form>
            </Content>
            )
        }
        else{
            return(
                <Rings color="#FF4791" height={250} width={250} />
            )
        }
    }

}