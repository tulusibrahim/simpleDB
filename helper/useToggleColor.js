import { useColorModeValue, useColorMode } from "@chakra-ui/react"

const useToggleColor = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    // const value = useColorModeValue(lightModeValue, darkModeValue)
    const textColor = useColorModeValue('black', 'white')
    const bgColor = useColorModeValue('#E5E5E5', '#141414')

    return { colorMode, toggleColorMode, textColor, bgColor }
}
export default useToggleColor