import React, {useState} from "react";
import styled from 'styled-components'
import Create from './Create';
import ToDo from './ToDo';
import Done from './Done';
import Footer from './Footer';

function Home() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    return (
        <Container>
            <Create 
            todos={todos} 
            setTodos={setTodos}
            setInputText={setInputText}
            inputText={inputText}
             />
                <Todos >
                     <ToDo todos={todos} />
                    <Done />
                </Todos>
            <Footer />
        </Container>
    )
}

export default Home

const Container = styled.div `
    height: 100%;
    display: grid;
    grid-gap: 4rem;
`

const Todos = styled.div `
    display: grid;
    grid-auto-flow:column;
    width: 900px;
    margin: 0 auto;
    grid-gap: 4rem
`
