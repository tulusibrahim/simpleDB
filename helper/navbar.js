import { Button, Flex, Icon } from "@chakra-ui/react";
import { BsMoonFill, BsGithub } from 'react-icons/bs';
import { supabase } from './helper'
const Navbar = ({ toggleColorMode }) => {
    const login = async (second) => {


    }
    return (
        <Flex w='90%' h='10vh' alignItems='center' justify='flex-end' >
            {/* <Button onClick={login} >
                Login with &nbsp; <Icon as={BsGithub} />
            </Button> */}
            <Icon as={BsMoonFill} boxSize={6} ml='50px' cursor='pointer' onClick={toggleColorMode} />
        </Flex>
    );
}

export default Navbar;