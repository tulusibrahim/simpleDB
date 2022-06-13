import { fireEvent, render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import CTA from '../components/cta'
// import 'node-fetch'
test('should render CTA component', () => {
    render(<CTA />)

    let text = screen.getByText(/No login needed, just create your token./i)
    expect(text).toBeVisible()
})

// test('should render token after click button', async () => {
//     render(<CTA />)

//     let button = screen.getByRole('button')
//     global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({ token: 'sdfsd' }) }))
//     fireEvent.click(button)

//     let text = screen.getByText(/sdfsd/i)
//     expect(text).toBeInTheDocument()
// })