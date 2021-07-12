import styled from "styled-components";

import {shade} from 'polished'

export const Form = styled.form`
input {
    width: 300px;
    padding: 1rem;
    border: 0;
    background: #f0f0f5;
    border-radius: 4px;
    font-weight: 700;

    & + input {
        margin-top: 20px;
    }
}

.close-btn {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
}

button[type="submit"] {
    width: 300px;
    padding: 1rem;
    background: #ff9000;
    margin-top: 20px;
    border: 0;
    font-weight: 700;
    font-size: 15px;
    border-radius: 4px;
    transition: 0.4s;

    &:hover {
        background: ${shade(0.2, "#ff9000")};
    }
}
`