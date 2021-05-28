import React from 'react'
import styled from 'styled-components'

function Tasks() {
    return (
        <Container>
            <Title> CREATE </Title>
            <Line/>
            <Task>
            <Tags>urgent</Tags>
            <Tags>urgent</Tags>
            <Description>Creacion de la barra de navegacion y gestion de los diferentes enlances dentro de la pagina</Description>
            <Date>23 junio 2021 09:34 AM</Date>
            </Task>
            <BtnTask>TO DO</BtnTask>
        </Container>
    )
}

export default Tasks

const Container = styled.div `
    background: #ffffff;
    color: black;
    margin: 1rem;
    border-radius: 15px; 
`
const Title = styled.p `
    padding: 6px 12px;
    margin: 0;
`
const Line = styled.div `
    margin: 0;
    padding: 1px;
    border: none;
    background: #555555;
`
const Tags = styled.p `
    background: red;
    display: inline-block;
    border-radius: 20px;
    padding: 0 15px;
    margin-right: 5px;
`

const Description = styled.p `
    width: 380px;
`

const Task = styled.div `
    padding: 6px 12px;
    margin: 0;
`
const Date = styled.p `
    background: #4444;
    display: inline-block;
    padding: 3px 20px;
    border-radius: 7px;
`
const BtnTask = styled.button `
    padding: 14px;
    width: 100%;
    border: none;
    background: #33D9B2;
    color: #ffffff;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    transition: all 250ms ease-out;

    &:hover {
        background: #3eefc3;
        cursor: pointer;
    }
`