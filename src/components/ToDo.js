import React from 'react'
import styled from 'styled-components'
import Tasks from './Tasks'

function ToDo( {todos} ) {
    console.log(todos)
    return (
        <Container>
            <Title> TO-DO </Title>
            <Line/>
            {todos.map((todo) => (
                <Tasks text={todo.text} />
            ))}
        </Container>
    )
}

export default ToDo

const Container = styled.div `
    margin: 0 auto;
    background: #227093;
    color: #ffffff;
    marign: 1rem;
    width:400px;
    
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
