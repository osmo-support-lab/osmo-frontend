//CHAKRA-UI
import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Grid,
  IconButton,
  Image,
  Link as ChakraLink,
  Stack,
  Text,
  useColorMode,
  useDisclosure
} from '@chakra-ui/react';

//NEXT
import NextLink from 'next/link';

//REACT
import React from 'react';

// ICONS
import { IconType } from 'react-icons';
import { IoMdSwap } from 'react-icons/io';
import { SiDiscord, SiTelegram } from 'react-icons/si';
import {
  FiChevronLeft,
  FiMenu,
  FiMoon,
  FiSun
} from 'react-icons/fi';
import { HiWrenchScrewdriver } from 'react-icons/hi2';
import {
  GiSwapBag,
  GiGavel,
  GiScales
} from 'react-icons/gi'

import {ConnectWalletButton, CopyAddressBtn} from '../components';

type IconTypeProps = string | IconType | JSX.Element | React.ReactNode | any;
type DefaultLinkItemType = {
  text: string;
  icon?: IconTypeProps;
};
type CategoryComponentType = {
  label: string;
  href: string;
};
interface LinkListType extends CategoryComponentType {
  icon?: React.ReactNode;
}
type SimpleLayoutType = {
  logo?: React.ReactNode;
  connectButton?: React.ReactNode;
  links?: LinkListType[];
  customLink?: Function;
  chainDropdown?: React.ReactNode;
  CopyAddressBtn?: React.ReactNode;
  isFullWidth?: boolean;
  children: React.ReactNode;
};
interface SimpleLayoutMenuType extends SimpleLayoutType {
  toggleColorMode: () => void;
}

function handleChangeColorModeValue(
  colorMode: string,
  light: string | any,
  dark: string | any
) {
  if (colorMode === 'light') return light;
  if (colorMode === 'dark') return dark;
}

const MenuLinkButton = ({ icon, text }: DefaultLinkItemType) => {
  const { colorMode } = useColorMode();

  return (
    <Button
      title={text}
      display="flex"
      variant={'solid'}
      justifyContent="start"
      alignItems="center"
      fontSize="2xl"
      fontWeight="medium"
      textAlign="start"
      px={2}
      w="full"
      h="full"
      minH={10}
      maxH="fit-content"
      whiteSpace="break-spaces"
      lineHeight={1.1}
      _hover={{
        bg: 'blackAlpha.700'
      }}
      _focus={{ boxShadow: '0 0 0 2px #C47CCF' }}
    >
      <Stack isInline={true} spacing={3} alignItems="center">
        {icon}
        <Text fontWeight={'normal'}>{text}</Text>
      </Stack>
    </Button>
  );
};

const MobileMenu = ({
  isFullWidth,
  logo,
  connectButton,
  links,
  customLink,
  chainDropdown,
  CopyAddressBtn,
  toggleColorMode,
  children
}: SimpleLayoutMenuType) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  return (
    <Box>
      {/* navbar */}
      <Flex
        justify="space-between"
        position="fixed"
        align="center"
        top={0}
        left={0}
        right={0}
        minH={12}
        py={2.5}
        px={4}
        zIndex="sticky"
        bgColor={'blackAlpha.100'}
        boxShadow={handleChangeColorModeValue(
          colorMode,
          '0 2px 2px -1px #d8d8d8',
          '0 2px 2px -1px #181818, 0 3px 5px -4px #0b0b0b'
        )}
      >
        <IconButton
          aria-label="menu"
          variant="outline"
          icon={<FiMenu opacity={0.8} />}
          _focus={{ outline: 'none' }}
          onClick={onOpen}
        />
        {logo}
      </Flex>
      {/* drawer */}
      <Drawer
        placement="left"
        isFullHeight={true}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent maxW={isFullWidth ? 'full' : 'xs'}>
          <Grid
            templateRows="auto 1fr auto"
            position="absolute"
            top={0}
            right={0}
            left={0}
            bottom={0}
          >
            <Flex justify="end" p={4}>
              <IconButton
                aria-label="close"
                icon={<FiChevronLeft opacity={0.7} />}
                variant="outline"
                fontSize="xl"
                borderRadius="lg"
                _focus={{ outline: 'none' }}
                onClick={onClose}
              />
            </Flex>
            <Box position="relative">
              <Stack
                position="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
                pl={4}
                pr={2}
                overflowY="scroll"
                css={{
                  // For Firefox
                  scrollbarWidth: 'thin',
                  // For Chrome and other browsers except Firefox
                  '&::-webkit-scrollbar': {
                    width: '10px',
                    background: 'transparent'
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: handleChangeColorModeValue(
                      colorMode,
                      'rgba(0,0,0,0.1)',
                      'rgba(255,255,255,0.1)'
                    ),
                    borderRadius: '6px',
                    border: '3px solid',
                    borderColor: handleChangeColorModeValue(
                      colorMode,
                      '#fff',
                      '#2D3748'
                    )
                  }
                }}
              >
                {links.map(({ label, href, icon }) => (
                  <>
                    {customLink ? (
                      customLink(label, href)
                    ) : (
                      <NextLink href={href} passHref={true}>
                        <ChakraLink _focus={{ textDecoration: 'none' }}>
                          <MenuLinkButton text={label} icon={icon} />
                        </ChakraLink>
                      </NextLink>
                    )}
                  </>
                ))}
              </Stack>
            </Box>
            <Box position="relative" bottom={0} left={0} right={0} p={4}>
              {connectButton}
            </Box>
          </Grid>
        </DrawerContent>
      </Drawer>
      {/* content */}
      <Box
        position="fixed"
        top="3.75rem"
        bottom={16}
        left={0}
        right={0}
        overflowY="scroll"
        css={{
          // For Firefox
          scrollbarWidth: 'thin',
          // For Chrome and other browsers except Firefox
          '&::-webkit-scrollbar': {
            width: '10px',
            background: 'transparent'
          },
          '&::-webkit-scrollbar-thumb': {
            background: handleChangeColorModeValue(
              colorMode,
              'rgba(0,0,0,0.1)',
              'rgba(255,255,255,0.1)'
            ),
            borderRadius: '6px',
            border: '3px solid',
            borderColor: handleChangeColorModeValue(
              colorMode,
              '#fff',
              '#1A202C'
            )
          }
        }}
      >
        {children}
      </Box>
      <Box
        position="fixed"
        bottom={0}
        left={2}
        right={2}
        p={4}
        display="flex"
        justifyContent="center"
        zIndex="dropdown"
        w="auto"
        h="auto"
        lineHeight="shorter"
        bg={handleChangeColorModeValue(colorMode, 'white', 'gray.800')}
        borderRadius="6px 6px 0 0"
        boxShadow={handleChangeColorModeValue(
          colorMode,
          '0 0px 2px #e3e3e3, 0 0 16px -6px #c4c4c4',
          '0 -4px 5px #555'
        )}
        color={handleChangeColorModeValue(colorMode, 'gray.700', 'white')}
      >
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          justifyContent="center"
          alignItems="center"
          w="full"
          gap={4}
        >
          <Box w="full" maxW={72} mx="auto">
            {chainDropdown}
          </Box>
          {CopyAddressBtn && (
            <Box w="full" maxW={72} mx="auto">
              {CopyAddressBtn}
            </Box>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

const DesktopMenu = ({
  logo,
  connectButton,
  links,
  customLink,
  chainDropdown,
  CopyAddressBtn,
  toggleColorMode,
  children
}: SimpleLayoutMenuType) => {
  const { colorMode } = useColorMode();
  const colorModeIcon = handleChangeColorModeValue(
    colorMode,
    <FiMoon opacity={0.6} />,
    <FiSun opacity={0.7} />
  );

  return (
    <Flex>
      {/* sidebar */}
      <Stack
        spacing={4}
        position="fixed"
        top={0}
        bottom={0}
        left={0}
        minW={52}
        w="full"
        maxW={60}
        bgGradient="linear(to-t, rgba(204, 0, 255, .5), rgba(51, 0, 102, 0.95))"
        bgColor={'transparent'}
        boxShadow={handleChangeColorModeValue(
          colorMode,
          '1px 0 1px #E2E8F0',
          '1px 0 1px rgba(255, 255, 255, 0.16)'
        )}
      >
        {logo && (
          <Flex justify="center" align="center" p={4} pb={0}>
            {logo}
          </Flex>
        )}
        <Stack
          flex={1}
          pl={4}
          pr={1.5}
          py={2}
          overflowY="scroll"
          css={{
            // For Firefox
            scrollbarWidth: 'thin',
            // For Chrome and other browsers except Firefox
            '&::-webkit-scrollbar': {
              width: '10px',
              background: 'transparent'
            },
            '&::-webkit-scrollbar-thumb': {
              background: handleChangeColorModeValue(
                colorMode,
                'rgba(0,0,0,0.1)',
                'rgba(255,255,255,0.1)'
              ),
              borderRadius: '6px',
              border: '3px solid',
              borderColor: handleChangeColorModeValue(
                colorMode,
                '#fff',
                '#1A202C'
              )
            }
          }}
        >
          {links.map(({ label, href, icon }) => {
            return (
              <>
                {customLink ? (
                  customLink(label, href)
                ) : (
                  <NextLink href={href} passHref={true}>
                    <ChakraLink
                      _hover={{ textDecoration: 'none' }}
                      _focus={{ outline: 'none' }}
                    >
                      <MenuLinkButton text={label} icon={icon} />
                    </ChakraLink>
                  </NextLink>
                )}
              </>
            );
          })}
        </Stack>
        {connectButton && (
          <Center position="relative" w="full" h={20} p={4} pt={2}>
            {connectButton}
          </Center>
        )}
      </Stack>
      {/* content */}
      <Box
        position="fixed"
        top={20}
        left={60}
        bottom={0}
        right={0}
        overflowY="scroll"
        css={{
          // For Firefox
          scrollbarWidth: 'thin',
          // For Chrome and other browsers except Firefox
          '&::-webkit-scrollbar': {
            width: '10px',
            background: 'transparent'
          },
          '&::-webkit-scrollbar-thumb': {
            background: handleChangeColorModeValue(
              colorMode,
              'rgba(0,0,0,0.1)',
              'rgba(255,255,255,0.1)'
            ),
            borderRadius: '6px',
            border: '3px solid',
            borderColor: handleChangeColorModeValue(
              colorMode,
              '#fff',
              '#1A202C'
            )
          }
        }}
      >
        <Box p={4}>{children}</Box>
      </Box>
    </Flex>
  );
};

const SimpleLayout = ({
  logo,
  connectButton,
  links,
  customLink,
  chainDropdown,
  CopyAddressBtn,
  isFullWidth,
  children
}: SimpleLayoutType) => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box w="full" h="full">
      <Box display={{ base: 'none', lg: 'block' }} w="full" h="full">
        <DesktopMenu
          logo={logo}
          connectButton={connectButton}
          links={links}
          customLink={customLink}
          chainDropdown={chainDropdown}
          CopyAddressBtn={CopyAddressBtn}
          toggleColorMode={toggleColorMode}
        />
        {children}
      </Box>
      <Box display={{ base: 'block', lg: 'none' }} w="full" h="full">
        <MobileMenu
          isFullWidth={isFullWidth}
          logo={logo}
          connectButton={connectButton}
          links={links}
          customLink={customLink}
          chainDropdown={chainDropdown}
          CopyAddressBtn={CopyAddressBtn}
          toggleColorMode={toggleColorMode}
        />
        {children}
      </Box>
    </Box>
  );
};

export default function Layout () {
  const logo = (
    <Box w={{ base: 10, lg: 20 }} h={{ base: 10, lg: 20 }}>
      <Image src="https://uploads-ssl.webflow.com/623a0c9828949e55356286f9/63901363f1ad117475ea565e_osmosis%20logo.svg" />
    </Box>
  );
  const linkItems = [
    {
      label: 'Swap',
      href: './',
      icon: <IoMdSwap/>
    },
    {
      label: 'Assets',
      href: './assets',
      icon: <GiSwapBag/>
    },
    {
      label: 'Pools',
      href: './pools',
      icon: <GiScales />
    },
    {
      label: 'Governance',
      href: 'https://commonwealth.im/osmosis',
      icon: <GiGavel/>
    },
    {
      label: 'Discord',
      href: 'https://discord.gg/osmosis',
      icon: <SiDiscord/>
    },
    {
      label: 'Telegram',
      href: 'https://t.me/osmosis_chat',
      icon: <SiTelegram/>
    },
    {
      label: 'Support',
      href: 'https://support.osmosis.zone',
      icon: <HiWrenchScrewdriver/>
    }
  ];

  return (
      <SimpleLayout
        logo={logo}
        connectButton={<ConnectWalletButton />}
        links={linkItems}
        isFullWidth={false}
    >
      <Image
        alt={'Background Image'}
        zIndex={'-1000'}
        src='./bg.svg'
        position={'fixed'}
        top={'-85px'}
        left={0}
        minH={'1080px'} minW={'1920px'} />
      </SimpleLayout>
  );
}
