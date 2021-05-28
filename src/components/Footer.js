import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
            <Text>Todoa Los Derechos Reservados &copy; 2021</Text>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    width: 100%;
    background: #444444;
    color: #ffffff;
`
const Text = styled.p`
    text-align: center;
    padding: 2rem 1.2rem; 
`
