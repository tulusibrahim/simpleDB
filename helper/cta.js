import { Code, Flex, Icon, useToast } from "@chakra-ui/react";
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { MdContentCopy } from 'react-icons/md'
import React, { useState, useEffect } from 'react';

const CTA = () => {
    const [token, setToken] = useState('')
    const toast = useToast()

    const generateToken = async (second) => {
        let data = await fetch('http://localhost:3000/api/newtoken')
        let json = await data.json()
        setToken(json.token)
        localStorage.setItem('user-token', json.token)
    }

    const getToken = (second) => {
        let token = localStorage.getItem('user-token')
        setToken(token)
    }

    const copyToken = (second) => {
        navigator.clipboard.writeText(token);
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

    return (
        <Flex w='100%' h={['15vh', '15vh', '20vh']} direction='column' alignItems='center' justify='center' >
            {
                token ?
                    <Flex h='fit-content' w='fit-content' fontSize={['1.2rem', '1.2rem', '1.7rem']} alignItems='center' >
                        My token: &nbsp;
                        <Code colorScheme='green' fontSize={['1.2rem', '1.2rem', '1.7rem']}>{token}</Code>
                        &nbsp;
                        <Icon as={MdContentCopy} cursor='pointer' onClick={copyToken} />
                    </Flex>
                    :
                    <>
                        <Flex w='90%' h='50%' justify='center' alignItems='center' fontSize={['1.5rem', '1.5rem', '2rem']} textAlign='center'>
                            No login needed, just create your token.
                        </Flex>
                        <Flex onClick={generateToken} justify='center' alignItems='center' h='fit-content' w='fit-content' bg='whiteAlpha.200' transitionDuration='.3s' cursor='pointer' _hover={{ bgColor: 'whiteAlpha.300' }} px='10px' py='3px' fontSize='1.5rem' borderRadius='lg'>
                            Create my token &nbsp;<Icon as={BsFillPlusCircleFill} />
                        </Flex>
                    </>
            }
        </Flex>
    );
}

export default CTA;