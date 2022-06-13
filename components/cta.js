import { Code, Flex, Icon } from "@chakra-ui/react";
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { MdContentCopy } from 'react-icons/md'
import useCTA from "./ctaHook";

const CTA = () => {
    let { token, colorMode, generateToken, copyToken } = useCTA()

    return (
        <Flex w='100%' h='20vh' direction='column' alignItems='center' justify='center' >
            {
                token ?
                    <Flex h='fit-content' w='fit-content' fontSize={['1.2rem', '1.2rem', '1.7rem']} alignItems='center' role='textbox'>
                        My token: &nbsp;
                        <Code colorScheme='green' fontSize={['1.2rem', '1.2rem', '1.7rem']}>{token}</Code>
                        &nbsp;
                        <Icon as={MdContentCopy} cursor='pointer' onClick={() => copyToken(token)} />
                    </Flex>
                    :
                    <>
                        <Flex w='90%' h='50%' justify='center' alignItems='center' fontSize={['1.1rem', '1.1rem', '2rem']} textAlign='center'>
                            No login needed, just create your token.
                        </Flex>
                        <Flex onClick={generateToken} justify='center' alignItems='center' h='fit-content' w='fit-content' bg={colorMode == 'dark' ? 'whiteAlpha.200' : 'gray.500'} transitionDuration='.3s' cursor='pointer' _hover={{ bgColor: colorMode == 'dark' ? 'whiteAlpha.300' : 'gray.600' }} px='10px' py='3px' fontSize={['1.2rem', '1.2rem', '1.5rem']} borderRadius='lg' color='white' role='button'>
                            Create my token &nbsp;<Icon as={BsFillPlusCircleFill} />
                        </Flex>
                    </>
            }
        </Flex>
    );
}

export default CTA;