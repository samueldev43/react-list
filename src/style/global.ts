import { createGlobalStyle } from "styled-components";


export const Global =  createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, sans-serif;
}
 #root {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
 }

 body {
    background: #f0f0f5;
 }

button {
    cursor: pointer;
    padding: 0 1rem 0 1rem;
}

.modal-overlay {
 background: rgba(0, 0, 0, 0.6);
 position: fixed;
 top: 0;
 bottom: 0;  
 right: 0;
 left: 0;
 display: flex;
 align-items: center;
 justify-content: space-between;
}

.modal-content {
    max-width: 100%;
    max-width: 400px;
    padding: 3rem;
    background: #ffffff;
    position: relative;
    margin: 0 auto;
    border-radius: 4px;
}
`