import React from 'react'
import styled from 'styled-components'
import Tasks from './Tasks'

function ToDo() {
    return (
        <Container>
            <Title> TO-DO </Title>
            <Line/>
            <Tasks />
            <Tasks />
        </Container>
    )
}

export default ToDo

const Container = styled.div `
    margin: 0 auto;
    background: #227093;
    color: #ffffff;
    marign: 1rem;
    
`
const Title = styled.p `
    padding: 14px 32px;
    font-size: 36px;
    margin: 0;
`
const Line = styled.hr `
    margin: 0;
    padding: 2px;
    border: none;
    background: #ffffff;
`
