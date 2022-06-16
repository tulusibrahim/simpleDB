import { fireEvent, render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import CTA from '../components/cta'

test('should render CTA component', () => {
    render(<CTA />)

    let text = screen.getByText(/No login needed, just create your token./i)
    expect(text).toBeVisible()
})

test('should render create token button', () => {
    render(<CTA />)

    let btn = screen.getByRole('button')

    expect(btn).toBeVisible()
})