import React from 'react';
import styled from 'styled-components';
import header from './header.png'
import app from './app.png'

const Head = styled.div`
    display:block;
    background-color: red;
    background-image: url(${header});
`;
const App = styled.div `
    display:block;
    background-color: red;
    background-image: url(${app});
`

const Header = () => {
    return (
        <div>
            <Head/>
            <App/>
        </div>
    )
}

export default Header;