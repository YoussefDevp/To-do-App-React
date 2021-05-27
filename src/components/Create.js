import React from 'react'
import styled from 'styled-components'

function Create() {
    return (
        <Container>
                <Title> CREATE </Title>
                <Line/>
            <Todos>
                <Form> 
                    <InputLabel> Titulo </InputLabel>
                        <InputField></InputField>
                        <InputLabel> Tags </InputLabel>
                    <InputField></InputField>
                </Form>
                    <Description>
                    <InputLabel> Descripción </InputLabel>
                        <TextArea />
                    <Button>Enviar</Button>
                    </Description>
                </Todos>

                
            </Container>
    )
}

export default Create

const Container = styled.div `
    width: 60%; 
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
const InputLabel = styled.label `
    font-size: 26px;
    margin-bottom: 16px;
  
`
const Form = styled.form `
    height: 20px;
    width: 100%;
   
`

const InputField = styled.input `
    width: 300px;
    padding: 14px 4px;
    display: block;
    outline: none;
    border: none;
    border-radius: 7px;
    margin-bottom: 1rem;
`
const Description = styled.div `
    height: 100%;
`
const TextArea = styled.textarea `
    display: block;
    height: 120px;
    width: 450px;
    border: none;
    border-radius: 7px;
    outline: none;
`
const Todos = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 14px 32px;
`
const Button = styled.button `
    float: right;
    background: #33D9B2;
    padding: 12px 150px;
    border: none;
    border-radius: 7px;
    margin: 30px 0;
    font-size: 26px;
    color: #ffffff;
    transition: all 250ms ease-out;

    &:hover {
        background: #3eefc3;
        cursor: pointer;
    }

`