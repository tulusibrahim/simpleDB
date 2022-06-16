import { act, renderHook } from '@testing-library/react-hooks'
import "@testing-library/jest-dom"
import useCTA from '../components/ctaHook'
// import { screen } from '@testing-library/react'


test('should generate token', () => {
    const { result } = renderHook(() => useCTA())

    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({ token: '34t34t' }) }))

    act(() => {
        result.current.setToken('token')
    })

    expect(result.current.token).toEqual('token')
})

test('should render toastafter copy token', () => {
    const { result } = renderHook(() => useCTA())

    Object.defineProperty(navigator, "clipboard", {
        value: {
            // Provide mock implementation
            writeText: jest.fn().mockReturnValueOnce('text'),
        },
    });

    act(() => {
        result.current.copyToken()
    })

    expect(navigator.clipboard.writeText).toHaveBeenCalledTimes(1)
})

test('should get token', () => {
    const { result } = renderHook(() => useCTA())

    act(() => {
        result.current.getToken()
    })

    expect(result.current.token).not.toEqual('')
})