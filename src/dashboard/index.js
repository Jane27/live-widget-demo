import React, { Component } from 'react'
import styled from "styled-components";
import Header from './Header'

const Mainwrapper = styled.div `
    min-height: 100%;
    margin-bottom: -9.28571rem;

`
const Container = styled.div `
  width: 960px;
  margin-left: auto;
  margin-right: auto;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  max-width: 100%;

`
const Header_01 = styled.div `
    width:100%

`
const NS_header_content = styled.div `
color:#f5f5f5
letter-space:normal;
`
const Pure_g = styled.nav `
letter-spacing:-.31em;
 text-rendering:optimizespeed;
 font-family:FreeSans,Arimo,Droid Sans,Helvetica,Arial,sans-serif;
`
const Pure_loginlink = styled.a`
width=25%
`



export default class Dashboard extends Component {
    render() {
        return (
            <Mainwrapper>
                {/*<Container>*/}
                    {/*<Header_01>*/}
                        {/*<NS_header_content>*/}
                            {/*<Pure_g>*/}
                                {/*<Pure_loginlink/>*/}
                                {/*H*/}
                            {/*</Pure_g>*/}
                        {/*</NS_header_content>*/}
                    {/*</Header_01>*/}
                {/*</Container>*/}
                <Header/>
            </Mainwrapper>
        )
    }
}
