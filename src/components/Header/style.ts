import styled from 'styled-components'

import  {shade} from 'polished'


export const Header = styled.header``


export const Container = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;

  button {
    width: 100px;
    background: #fff;
    font-size: 16px;
    font-weight: 900;
    margin-left: 50px;
    border: 0;
    border-radius: 4px;
    outline: 0;
    transition: 0.4s;

    &:hover {
        background: ${shade(0.1, '#fff')};
    }
  }
`