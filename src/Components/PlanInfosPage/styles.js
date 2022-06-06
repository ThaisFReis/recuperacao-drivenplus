
import styled from 'styled-components';

const Content = styled.div`
    width: 100%;
    height: 100vh;
    margin: 100px auto auto auto;
    display: flex;
    flex-direction: column;

    form{
        width: 60%;
        margin: 30px auto;
        font-weight: 400;
        font-size: 14px;
        color: #7E7E7E;
    }
    
    input{
        width: 100%;
        height: 45px;
        box-sizing: border-box;
        border: 1px solid #D5D5D5;
        border-radius: 10px;
        margin-bottom: 10px;
        padding: 0 10px;
    }

    button{
        background: #FF4791;
        width: 100%;
        height: 45px;

        border: none;
        border-radius: 10px;
        margin-top: 10px;
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;

    }
    .cvv{
        width: 56%;
        margin: auto 10px auto auto;
        
    }
    
    .validate {
        width: 40%;
    }
`;

const Header = styled.div`
    width: 100%;
    height: auto;
`;

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    img{
        width: 100%;
    }

    h1{
        font-weight: 700;
        font-size: 40px;
        color: #FFFFFF;
        margin: 12px 0;
    }
`;

const Description = styled.div`
    width: 60%;
    margin: 30px auto;
    font-weight: 400;
    color: #FFFFFF;
    .topic{
        display: flex;
        gap: 10px;
        margin: auto 0;
    }

    h1{
        font-size: 22px;
    }
    p{
        font-size: 17px;
    }
`;

const Modal = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    width:100%;
    height: 100vh;
    top: 0px;
    left: 0px;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 999;
`;

const Card = styled.div`
    background: #FFFFFF;
    width: 50%;
    height: 210px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0 20px;
    border-radius: 10px;

    p{
    font-size: 20px;
    text-align: center;
    color: #000000;
    margin: 33px auto;
    }

    button{
    background: #CECECE;
    width: 100%;
    height: 52px;

    border-radius: 8px;
    padding: 0 50px;
    font-size: 20px;
    color: #FFFFFF;
    border: none;
    }
    
    .buttons{
        display: flex;
        gap: 14px;
    }

    .confirm{
        background-color: #FF4791;
    }
`;

export {
    Content, Header, Logo, Description, Modal, Card
}