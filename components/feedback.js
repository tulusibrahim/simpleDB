import { Flex, AlertDialog, AlertDialogBody, AlertDialogFooter, Image, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Button, Input } from "@chakra-ui/react";
import useToggleColor from "../helper/useToggleColor";
import useFeedback from "./useFeedback";

const Feedback = () => {
    let { isOpen, onOpen, onClose, cancelRef, title, setTitle, feedback, setFeedback, submitFeedback } = useFeedback()
    let { colorMode } = useToggleColor()

    return (
        <>
            <Flex w='95%' h='8vh' justify='space-between' alignItems='center' alignSelf='center' py='40px'>
                <a href="https://www.producthunt.com/posts/simpledb?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-simpledb" target="_blank">
                    <Image src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=350115&theme=light" alt="SimpleDB - Let&#0032;you&#0032;store&#0032;data&#0032;without&#0032;touching&#0032;the&#0032;database | Product Hunt" h="54px" w={['130px', '130px', '200px']} />
                </a>
                <Flex cursor='pointer' onClick={onOpen} alignItems='center' px='10px' borderRadius='md' h='70%' _hover={{ bgColor: colorMode === 'dark' ? 'gray.900' : 'whiteAlpha.700' }}>
                    Feedback?
                </Flex>
            </Flex>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Submit Feedback
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            <Input variant='filled' my='5px' placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                            <Input variant='filled' my='5px' placeholder="Feedback" value={feedback} onChange={e => setFeedback(e.target.value)} />
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='blue' onClick={submitFeedback} ml={3}>
                                Submit
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}

export default Feedback;