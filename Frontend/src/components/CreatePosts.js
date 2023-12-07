import { AddIcon } from '@chakra-ui/icons'
import { Button, FormControl, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Textarea, useDisclosure } from '@chakra-ui/react'


const CreatePosts = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <Button position={"fixed"} bottom={10} right={10} leftIcon={<AddIcon />} bg={"gray"} onClick={onOpen}>
        Post
    </Button>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={6}>
            <FormControl>
                <Textarea></Textarea>
            </FormControl>
          </ModalBody>
 
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreatePosts