import React,{ ReactNode,FC } from 'react'
import HeaderTop from "./headTop";
import styled from "styled-components";
import {Container, Row, Col, Card} from 'react-bootstrap';
import LeftBox from "./Lftbox";
import  GlobalStyle from '../../public/utils/GloablStyle'

const MainBox = styled.div`
    display: flex;
`

const BgBox = styled(Container)`
  margin-top: 30px;
`

const CardBox = styled(Card)`
  border:0;
  box-shadow: 0 0 5px #ccc;
  border-radius: 6px;
`

interface LayoutProps {
    children: ReactNode;
}

export default function  Layout<FC>({ children}: LayoutProps ) {
    return <div>
            <HeaderTop />
            <MainBox>
                <BgBox>
                    <Row>
                        <Col md={3} xs={12}><LeftBox /></Col>
                        <Col md={9} xs={12}> <CardBox body>{ children }</CardBox></Col>
                    </Row>
                </BgBox>
               </MainBox>
                <GlobalStyle />
        </div>
}
