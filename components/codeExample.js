import { Button, Flex, Menu, MenuButton, MenuList, MenuItem, Code, Badge } from '@chakra-ui/react';
import { FiChevronDown } from 'react-icons/fi'
import useToggleColor from '../helper/useToggleColor';

const CodeExample = ({ exampleTitle, currentExample, data, setCurrentExample }) => {
    let { colorMode } = useToggleColor()

    return (
        <Flex w={['90%', '90%', '45%']} h='100%' justify='flex-start' alignItems='center' direction='column' my={['2rem', '2rem', '0px']} role='main'>
            <Flex w='100%' h='15%' alignItems='center' justify='flex-end' mb='10px'>
                <Menu>
                    <MenuButton as={Button} rightIcon={<FiChevronDown />}>
                        {exampleTitle[currentExample]}
                    </MenuButton>
                    <MenuList>
                        {
                            exampleTitle.map((i, id) => (
                                <MenuItem key={id} onClick={() => setCurrentExample(id)}>
                                    {i}
                                    {i == 'Delete property' &&
                                        <>
                                            &nbsp;<Badge variant='solid' colorScheme='green'>New!</Badge>
                                        </>
                                    }
                                </MenuItem>
                            ))
                        }
                    </MenuList>
                </Menu>
            </Flex>

            <Flex w='100%' bg={colorMode == 'dark' ? 'gray.600' : 'gray.800'} overflowX={'auto'} h='fit-content' direction='column' borderRadius='md' p='10px' pos='relative' role='application'>
                {
                    data[currentExample].map((i, id) => (
                        <Code key={id} whiteSpace='pre' bg='none' w='100%' px='20px' h='fit-content' color='whiteAlpha.800'>{i}</Code>
                    ))
                }
            </Flex>
        </Flex>
    );
}

export default CodeExample;