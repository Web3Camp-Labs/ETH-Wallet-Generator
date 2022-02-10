import React from "react";
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';


const TopBox = styled.div`
 box-shadow: 0 0 5px #ccc;
 padding:45px 0;
`

const LftLogo = styled(Col)`
  font-family: "din_bold";
  font-size: 32px;
  text-transform: uppercase;
`

export default function HeaderTop() {
    return <TopBox>
        <Container>
            <Row>
                <LftLogo xs={8}>Wallet Address Generator</LftLogo>
                <Col xs={4}>---</Col>
            </Row>
        </Container>
    </TopBox>
}
