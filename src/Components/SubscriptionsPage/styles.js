import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 5vh;
    color: #FFFFFF;
`
const Plans = styled.div`
    width: 100%;
    height: fit-content;
    border: 4px solid #7E7E7E;
    border-radius: 10px;
    padding: 20px 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: #FFFFFF;
    margin-bottom: 20px;

    cursor: pointer;
`

const Price = styled.div`
    font-size: 30px;
    font-weight: 600;
    color: #FFFFFF;
`
export { Container, Title, Plans, Price };
