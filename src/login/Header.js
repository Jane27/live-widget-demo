/**
 * Created by wangjing on 20/12/2017.
 */

import styled from "styled-components";
import React, {Component} from "react";
import Logo from './spinner-loader.gif'

const Signup_header = styled.div`
    // background-color:red;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Signup_logo = styled.div`
    position: relative;
    flex: 1;
    
    & img {
        display: inline-block;
        position: relative;
        margin-bottom: 1rem;
        text-indent: -119988px;
        overflow: hidden;
        text-align: left;
        text-transform: capitalize;
        height: 3em;
        text-decoration: none !important;
    }
    
`
const Signup_login = styled.div`
    flex: 1;
    text-align: right;
    position: absolute;
    top: 30%;
    right: 0;
    transform: translate(0, -50%);
    font-size: 16px;
`
const Signup_login_text = styled.a `
    color: #3ad4a7;
    text-decoration: none;
    strong {
        font-weight: bold;
    }
`


const Signup_title = styled.h1 `
  font-size: 30px;
  text-align: center;
  color: #273036;
  margin: 0.5em 0;
`


export default class LoginHeader extends Component {
    render() {
        return (
            <div>
                <Signup_header>
                    <Signup_logo>
                            <img src={Logo}/>
                    </Signup_logo>

                    <Signup_login>
                        New?
                        <Signup_login-text>
                            <strong>Sign up</strong>
                        </Signup_login-text>
                    </Signup_login>
                </Signup_header>
                <Signup_title>Welcome Back </Signup_title>
                </div>
    )
    }
}
