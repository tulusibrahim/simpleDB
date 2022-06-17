import { useDisclosure, useToast } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { supabase } from "../helper/helper";

const useFeedback = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [title, setTitle] = useState('')
    const [feedback, setFeedback] = useState('')
    const cancelRef = useRef()
    const toast = useToast()

    const submitFeedback = async () => {
        if (title === '' || feedback === '') {
            toast({
                // title: 'Error.',
                description: "Please fill the title and feedback.",
                status: 'warning',
                isClosable: true,
            })
            return
        }

        let input = await supabase.from('simpleDB-feedback').insert({ title: title, message: feedback })
        if (input.error) {
            toast({
                title: 'Error.',
                description: "Something went wrong, please try again.",
                status: 'error',
                isClosable: true,
            })
        }
        else {
            cancelRef.current.click()
            setTitle('')
            setFeedback('')
            toast({
                title: 'Success.',
                description: "We've received your feedback.",
                status: 'success',
                isClosable: true,
            })
        }
    }

    return { isOpen, onOpen, onClose, cancelRef, title, setTitle, feedback, setFeedback, submitFeedback }
}

export default useFeedback;