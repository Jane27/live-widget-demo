/**
 * Created by wangjing on 20/12/2017.
 */
import React, { Component } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
   // background-image: url(/portal/resources/images/9spokes/login-bg.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
`;


const Field = styled.div`
padding:10px 10px;
  overflow: visible;
  position: relative;
  & label {
  font-size: 1.14286rem
  }
  
`;
// const Field_label = styled.label`
//     display:block;
//     padding-top: 10px;
//     margin-left:10px;
//     width: 100%;
//     // padding-bottom: 10px;
// `
const Input = styled.input`
  display:block;
  background: #ffffff;
  color: #273036;
  border: solid 1px #d7dadc;
  box-shadow: none;
  line-height:26px;
  padding-bottom: 10px;
  width:100%;
  border-radius:4px;
`
const Button = styled.button `
margin-top: 10px;
display:block;
    color: #fff;
    background-color: #3ad47a;
    width:100%;
    height:46px;
    border-radius:4px;
`

const Title = styled.a`
      display: block;
      position: relative;
      margin-bottom: 1rem;
      text-indent: -119988px;
      overflow: hidden;
      text-align: left;
      text-transform: capitalize;
      height: 3em;
      text-decoration: none !important;   
`;

const Signup = styled.div`
  flex: 1;
  text-align: right;
  position: absolute;
  top: 30%;
  right: 0;
  transform: translate(0, -50%);
  font-size: 16px;
`;

const Forgot_password_link = styled.div`
    text-align:right;
    font-size: 16px;
    text-transform: none;
    line-height: 1.13;
    color: #3ad47a;
`

export default class LoginContent extends Component {
    render() {
        return(
            <Wrapper>
                <Field>
                    <label> Email </label>
            <Input/>
            </Field>
            <Field>
            <label> Password </label>
            <Input/>
            </Field>
            <Field>
                <Button>LOGIN</Button>
            </Field>
            <Forgot_password_link>Forgot your password?</Forgot_password_link>
            </Wrapper>

    )
    }
}