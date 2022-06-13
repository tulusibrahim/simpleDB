import { fireEvent, render, screen } from '@testing-library/react'
import "@testing-library/jest-dom"
import CodeExample from '../components/codeExample'

let mockData = [['a', 'fg', 'gh'], ['s', 'dfg', 'dfg'], ['d', 'dfg', 'dfg', 'dfg']]
test('should render code example wrapper', () => {
    let mockCurrentExample = jest.fn()
    render(<CodeExample exampleTitle={['exampleTitle', 'd', 'f', 'f']} currentExample={0} data={mockData} setCurrentExample={mockCurrentExample} />)

    let wrapper = screen.getByRole('main')
    expect(wrapper).toBeVisible()
})

test('should render code example', () => {
    let mockCurrentExample = jest.fn()
    render(<CodeExample exampleTitle={['exampleTitle', 'd', 'f', 'f']} currentExample={0} data={mockData} setCurrentExample={mockCurrentExample} />)

    let codeContainer = screen.getByRole('application')
    expect(codeContainer).toBeVisible()
})