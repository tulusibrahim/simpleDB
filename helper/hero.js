import { Flex } from "@chakra-ui/react";

const Hero = () => {
    return (
        <>
            <Flex fontSize={['2rem', '2rem', '4rem']} >
                Simple<span style={{ color: '#68D391' }}>DB</span>
            </Flex>
            <Flex fontSize={['1.2rem', '1.2rem', '1.5rem']} w='90%' justify='center' textAlign='center'>
                Create database as simple as generate a link.
            </Flex>
        </>
    );
}

export default Hero;