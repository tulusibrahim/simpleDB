import { Flex, Code, } from '@chakra-ui/react';

const APISpec = ({ currentExample, description }) => {
    return (
        <Flex w={['90%', '90%', '45%']} h='100%' direction='column'>
            <Flex w='100%' h='15%' alignItems='center' justify='flex-start' fontSize={['1.2rem', '1.2rem', '1.5rem']}>
                Description
            </Flex>
            <Flex>
                {description[currentExample].definition}
            </Flex>
            <Flex w='100%' h='15%' alignItems='center' justify='flex-start' mt='1rem' fontSize={['1.1rem', '1.1rem', '1.3rem']}>
                Parameters
            </Flex>
            {
                description[currentExample].parameter.length > 0 ?
                    description[currentExample].parameter.map(i => (
                        <Flex my='5px' direction='column' key={i.name}>
                            <Flex>
                                <Code colorScheme='green'>{i.name}</Code> &nbsp; {i.type}.
                            </Flex>
                            <Flex>
                                {i.parameterDesc}
                            </Flex>
                        </Flex>
                    ))
                    :
                    <Code colorScheme='gray' w='fit-content'>none</Code>
            }
            <Flex w='100%' h='15%' alignItems='center' mt='1rem' justify='flex-start' fontSize={['1.1rem', '1.1rem', '1.3rem']}>
                Header
            </Flex>
            {
                description[currentExample].header.map(i => (
                    <Flex key={i.name}>
                        <Code colorScheme='green'>{i.name}</Code> &nbsp; {i.type}.
                    </Flex>
                ))
            }
            <Flex my='5px'>
                {description[currentExample].headerDesc}
            </Flex>
            {
                description[currentExample].note &&
                <Flex h='15%' alignItems='center' mt='1rem'>
                    <Code colorScheme='red' w='fit-content' >
                        Note
                    </Code> &nbsp;
                    {description[currentExample].note}
                </Flex>
            }
        </Flex>
    );
}

export default APISpec;