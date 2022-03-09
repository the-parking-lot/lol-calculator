import NextLink from 'next/link'
import {
  Box,
  Flex,
  Link,
  IconButton,
  HStack,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion'

const MotionBox = motion(Box);

const Links = ['Home', 'Calculator', 'Rotation'];

const NavLink = ({ children }: { children: String }) => (
    <MotionBox
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        <NextLink href={`${children.toLowerCase()}`} passHref>
            <Link
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            >
            {children}
            </Link>
        </NextLink>
    </MotionBox>
);

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
    <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <IconButton
                    size={'md'}
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label={'Open Menu'}
                    display={{ md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={'center'}>
                    <Box>TPL</Box>
                    <HStack
                    as={'nav'}
                    spacing={4}
                    display={{ base: 'none', md: 'flex' }}>
                    {Links.map((link) => (
                        <NavLink key={link}>{link}</NavLink>
                    ))}
                    </HStack>
                </HStack>

                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={7}>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Stack>
                </Flex>
            </Flex>
            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                    {Links.map((link) => (
                        <NavLink key={link}>{link}</NavLink>
                    ))}
                    </Stack>
                </Box>
            ) : null}
        </Box>
    </>
    );
};

export default Navbar