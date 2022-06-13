import { fireEvent, render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import Hero from '../components/hero'

test('should render heading section', () => {
    render(<Hero />)

    let hero = screen.getByRole('heading')
    expect(hero).toBeVisible()
})