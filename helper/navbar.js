import { Button, Flex, Icon } from "@chakra-ui/react";
import { BsMoonFill, BsGithub } from 'react-icons/bs';

const Navbar = ({ toggleColorMode }) => {
    return (
        <Flex w='90%' h='10vh' alignItems='center' justify='flex-end' >
            <Icon as={BsMoonFill} boxSize={6} ml='50px' cursor='pointer' onClick={toggleColorMode} />
        </Flex>
    );
}

export default Navbar;