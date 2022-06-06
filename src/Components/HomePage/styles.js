import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    height: 100vh;
`
const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 100px auto;
`
const UserTitle = styled.div`
    font-weight: bold;
    font-size: 24px;
    color: #FFF;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`

const LogoPlan = styled.img`
    width: 20%;
    height: auto;
    margin: 20px;
`
const LogoUser = styled.div`
    width: 20%;
    height: auto;
    margin: 20px;
    svg{
        width: 70%;
        height: auto;
        color: #fff;
    }

`
const PlanBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const PlanBenefitsCard = styled.div`
    width: 350px;
    height: fit-content;

    background-color: #FF4791;
    border-radius: 10px;
    margin-bottom: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
    color: #FFF;
`
const Footer = styled.div`  
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
`
const ChangePlan = styled.button`
    width: 40%;
    height: 52px;
    background-color: #FF4791;
    color: #FFFFFF;
    text-align: center;
    padding: 14px;
    border-radius: 10px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 0;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
`
const CancelPlan = styled.button`
    width: 40%;
    height: 52px;
    background-color:#FF4747;
    color: #FFFFFF;
    text-align: center;
    padding: 14px;
    border-radius: 10px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;

`


export {
    Container, NavBar, LogoPlan, LogoUser, PlanBenefitsCard, Footer, PlanBox,
    CancelPlan, ChangePlan, UserTitle
}