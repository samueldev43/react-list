import styled from "styled-components";


export const Container = styled.div`
width: inherit;
height: 100vh;
margin-top: 4rem;

strong {
    margin-bottom: 20px;
}

table {
    width: 100%;
    border-spacing: 0 0.5rem;
    
    th {
        width: inherit;
        font-weight: 100;
        font-size: 20px;
        text-align: left;
        color: #969cb3;
        padding: 1rem 0.4rem;
        border-radius: 4px;
    }

    td {
        width: inherit;
        font-size: 16px;
        font-weight: 700;
        background: #fff;
        color: #363f5f;
        padding: 1rem 0.4rem;
        border-radius: 4px;
    }

    svg {
       margin-left: 40px;
    }
}
`