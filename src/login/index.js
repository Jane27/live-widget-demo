import React, { Component } from 'react'
import LoginForm from './LoginForm'
import styled from 'styled-components';
import Background from './login-bg.jpg'


const Container = styled.div`
  margin: 0 auto;
  padding: 40px;
  // background-Color: gray;
  background-image: url(${Background});
  background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    height:100vh;
    z-index: -1;
`;
const text_white = styled.div`
    color:#e88b0b
`;

export default class Login extends Component {
    render() {
        return (
            <Container>
                <LoginForm/>
            </Container>
        )
    }
}
