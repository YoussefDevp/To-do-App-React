import React from 'react'
import styled from 'styled-components'
import Tasks from './Tasks'

function Done() {
    return (
        <Container>
            <Title> Done </Title>
            <Line/>
            <Tasks />
            <Tasks />
        </Container>
    )
}

export default Done

const Container = styled.div`
    margin: 0 auto;
    background: #227093;
    color: #ffffff;
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

