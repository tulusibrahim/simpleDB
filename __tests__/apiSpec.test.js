import { fireEvent, render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import APISpec from '../components/apiSpec'

let mockData = {
    definition: 'Add new property to database.',
    parameter: [{
        name: 'propertyName',
        type: 'Required',
        parameterDesc: 'Name of the property you want to add.',
    }],
    header: [{
        name: 'userid',
        type: 'Required'
    }],
    headerDesc: 'The token you get after create a new one.',
    note: ''
}

test('should render description value', () => {
    render(<APISpec currentExample={0} description={[mockData]} />)

    let text = screen.getByText(/Add new property to database/i)
    expect(text).toBeVisible()
})

test('should render parameter value', () => {
    render(<APISpec currentExample={0} description={[mockData]} />)

    let text = screen.getByText(/propertyName/i)
    expect(text).toBeVisible()
})

test('should render header value', () => {
    render(<APISpec currentExample={0} description={[mockData]} />)

    let text = screen.getByText(/userid/i)
    expect(text).toBeVisible()
})