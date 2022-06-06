import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 70%;
        height: auto;
        margin: 0 auto 70px auto;
    }

    form{
        width: 70%;
    }
`;

const Input = styled.input`
    background: "#F2F2F2";
    width: 100%;
    height: 40px;

    color: #FF4791;
    font-size:20px;
    margin-bottom: 15px;
    border: 1px solid #D5D5D5;
    border-radius: 10px; 
    }
`;

const Button = styled.button`
    background-color: #FF4791; 
    width: 100%;
    height: 52px;
    margin: 15px auto 10px auto;
    border-radius: 10px;
    border: none;

    color: #FFFFFF;
    font-size: 25px;
    line-height: 25px;
    text-align: center;

    cursor: pointer;
`;

const LinkStyled = styled(Link)`
    font-size: 18px;
    color:  #fff;

    text-align: center;
    text-decoration-line: underline;
`;

export { Container, Input, Button, LinkStyled};



