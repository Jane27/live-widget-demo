/**
 * Created by wangjing on 20/12/2017.
 */
import React, { Component } from 'react'
import LoginContent from './Content'
import LoginHeader from './Header'
import styled from 'styled-components';

const Login_form = styled.form `
  padding: 40px;
  box-sizing: border-box;
  margin: 0 auto;
  width: 380px;
  padding: 40px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  text-align: left;
`

export default class LoginForm extends Component {
    render() {
        return (
            <Login_form>
                <LoginHeader/>
                <LoginContent/>
            </Login_form>
        )
    }
}