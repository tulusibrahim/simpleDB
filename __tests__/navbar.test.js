import { fireEvent, render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import Navbar from '../components/navbar'

test('should render navbar', () => {
    render(<Navbar />)

    let navbar = screen.getByRole('navigation')

    expect(navbar).toBeVisible()
})