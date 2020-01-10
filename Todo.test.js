import React from 'react'
import { render, waitForElement, fireEvent } from '@testing-library/react'
import Todo from './Todo'

//renderizar o componente
//buscar o input
//digitar no input
//buscar o botao
//clicar no botao
//buscar a tabela
//verificar se a tarefa foi adicionada na tabela

describe('Tests for Todo component', () => {
  
  //renderizar o componente
  it('Should render form', async () => {
    const { getByTestId } = render(<Todo/>) 
      // getByTestId busca pelo data-atributo data-testid, tornando-se 
      // independente da classe, id ou tag
    const fieldNode = await waitForElement(
      () => getByTestId('form-field')
    )
    //console.log(fieldNode)
      // o fieldNode é como um nó html (HTMLInputElement), com isso tudo que é 
      // possível fazer de forma nativa com as apis do DOM é possível fazer no 
      // test 
  })

  //buscar o input
  //digitar no input
  it('Should add new task when form has been submitted', async () => {
    const { getByTestId } = render(<Todo/>)
    const fieldNode = await waitForElement(
      () => getByTestId('form-field')
    )
    const newTask = 'testing'
    fireEvent.change(
      fieldNode,
      { target: { value: newTask}}
    )
    expect(fieldNode.value).toEqual(newTask)
  })

  //buscar o input
  //digitar no input
  //buscar o botao
  //clicar no botao
  it('Should get the button and simulate the click', async () => {
    const { getByTestId } = render(<Todo/>)
    const fieldNode = await waitForElement(
      () => getByTestId('form-field')
    )
    const newTask = 'tarefa'
    fireEvent.change(
      fieldNode,
      { target: { value: newTask}}
    )
    expect(fieldNode.value).toEqual(newTask)

    const btnNode = await waitForElement(
      () => getByTestId('form-btn')
    )
    fireEvent.click(btnNode)
  })

  //buscar a tabela
  it('Should find the table', async () => {
    const { getByTestId } = render(<Todo/>)
    const fieldNode = await waitForElement(
      () => getByTestId('form-field')
    )
    const newTask = 'tarefa'
    fireEvent.change(
      fieldNode,
      { target: { value: newTask}}
    )
    expect(fieldNode.value).toEqual(newTask)

    const btnNode = await waitForElement(
      () => getByTestId('form-btn')
    )
    fireEvent.click(btnNode)

    const tableNode = await waitForElement(
      () => getByTestId('table')
    )
    //console.log(tableNode.innerHTML)
  })

  //verificar se a tarefa foi adicionada na tabela
  it('Should check if the task has been added to the table', async () => {
    const { getByTestId, getByText } = render(<Todo/>)
    const fieldNode = await waitForElement(
      () => getByTestId('form-field')
    )
    const newTask = 'tarefa'
    fireEvent.change(
      fieldNode,
      { target: { value: newTask}}
    )
    expect(fieldNode.value).toEqual(newTask)

    const btnNode = await waitForElement(
      () => getByTestId('form-btn')
    )
    fireEvent.click(btnNode)

    const tdNode = await waitForElement(
      () => getByText(newTask)
    )
    expect(tdNode).toBeDefined()
  })
})