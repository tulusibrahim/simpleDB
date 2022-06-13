import { useState, useEffect } from "react"
import { useToast, useColorMode } from "@chakra-ui/react/"

const useCTA = () => {
    const [token, setToken] = useState('')
    const toast = useToast()
    const { colorMode } = useColorMode()

    const generateToken = async () => {
        let data = await fetch('https://simpledb.vercel.app/api/newtoken')
        let json = await data.json()
        setToken(json.token)
        localStorage.setItem('user-token', json.token)
    }

    const getToken = () => {
        let token = localStorage.getItem('user-token')
        setToken(token)
    }

    const copyToken = (text) => {
        navigator.clipboard.writeText(text);
        toast({
            description: "Token copied.",
            status: 'success',
            isClosable: true,
            position: 'bottom-left'
        })
    }

    useEffect(() => {
        getToken()
    }, [])

    return { token, toast, colorMode, generateToken, copyToken, setToken, getToken }
}

export default useCTA;