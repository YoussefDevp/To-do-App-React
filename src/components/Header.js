import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <Logo src="/images/Logo.png" />    
            <Title>
                Aplicacíon para la gestíon de proyectos
            </Title>
        </Container>
    )
}

export default Header

const Container = styled.div `
    background: #CDCDFA;
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 0px 15px -8px black;
    margin-bottom: 3rem;
`
const Logo = styled.img `
    width: 250px;
`
const Title = styled.h1 `
    color: #ffffff;
    font-weight: 500;
`
