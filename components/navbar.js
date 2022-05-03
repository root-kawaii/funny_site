
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { FiAlignJustify } from 'react-icons/fi'
import { RiAncientGateFill } from "react-icons/ri";
import ThemeToggleButton from './theme-toggle-button';



const LinkItem = ({ href, path,children}) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#f0e7db', '#202023')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display = "flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
          <Flex align="center" mr={5}>
              <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                <Link href="/" passHref><RiAncientGateFill></RiAncientGateFill>
                </Link>
              </Heading>
          </Flex>
          <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
            <LinkItem href="/" path={path}>
            Home
            </LinkItem>
            <LinkItem href="/works" path={path}>
            Works
            </LinkItem>
            <LinkItem href="/posts" path={path}>
            Posts
            </LinkItem>
        </Stack>
        <Box  flex={1} align="right">
        <ThemeToggleButton />
        <Box ml={2} display={{ base: 'inline-block'}}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<FiAlignJustify/>}
                variant="outline"
                aria-label="Options"
                color={"black"}
              />
               <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Home</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <NextLink href="/cv" passHref>
                  <MenuItem as={Link}>CV</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/root-kawaii">
                  GitHub
                </MenuItem>
                <NextLink href="/credits" passHref>
                  <MenuItem as={Link}>Credits</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
