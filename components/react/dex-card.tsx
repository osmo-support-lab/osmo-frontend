import {
  Box,
  Button,
  Collapse,
  Divider,
  Flex,
  Grid,
  Icon,
  Image,
  Card,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Skeleton,
  Stack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  SystemStyleObject,
  Text,
  useColorModeValue,
  useDisclosure,
  useOutsideClick,
  useRadio,
  useRadioGroup
} from '@chakra-ui/react';
import JSON from '../../osmosis-1.assetlist.json';
import {
  AsyncSelect,
  chakraComponents,
  ControlProps,
  GroupBase,
  OptionBase,
  OptionProps
} from 'chakra-react-select';
import React, { useEffect, useRef, useState } from 'react';
import {
  BsExclamationCircleFill,
  BsHexagon,
  BsHexagonFill
} from 'react-icons/bs';
import { CgArrowsExchangeV } from 'react-icons/cg';
import { FiChevronsDown, FiChevronsUp } from 'react-icons/fi';
import { RiSearch2Fill, RiSearch2Line, RiSettings4Fill } from 'react-icons/ri';

interface dataType extends OptionBase {
  label: string;
  value: string;
  exponent: number;
  chain?: string;
  imgSrc?: string;
  traces?: string;
}

const RadioTag = (props: any) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        bg={useColorModeValue('blackAlpha.300', 'whiteAlpha.300')}
        borderRadius="full"
        _checked={{
          bg: 'primary.500',
          color: 'white'
        }}
        _focus={{
          boxShadow: 'outline'
        }}
        _disabled={{
          cursor: 'not-allowed',
          opacity: 0.5
        }}
        px={5}
        py={1}
      >
        <Text textAlign="center">{props.children}</Text>
      </Box>
    </Box>
  );
};

const Setting = () => {
  const { onToggle, onClose, isOpen } = useDisclosure();
  const initialFocusRef = useRef(null);
  const options = ['1%', '3%', '5%', '0.5%'];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'setting',
    defaultValue: '1%',
    onChange: console.log
  });
  const group = getRootProps();

  return (
    <Popover
      isOpen={isOpen}
      onClose={onClose}
      initialFocusRef={initialFocusRef}
    >
      <PopoverTrigger>
        <Button
          position="relative"
          variant="unstyled"
          w="min"
          h="min"
          color={
            isOpen
              ? 'orange.300'
              : useColorModeValue('blackAlpha.400', 'whiteAlpha.500')
          }
          transition="all .5s"
          _hover={{
            color: isOpen
              ? 'orange.200'
              : useColorModeValue('blackAlpha.500', 'whiteAlpha.600')
          }}
          _focus={{ boxShadow: 'none' }}
          onClick={onToggle}
        >
          <Icon
            zIndex={-10}
            as={BsHexagonFill}
            w={8}
            h={8}
            color={useColorModeValue('gray.100', 'whiteAlpha.300')}
          />
          <Icon
            position="absolute"
            top={0}
            left={1}
            right={0}
            zIndex={10}
            as={BsHexagon}
            w={8}
            h={8}
          />
          <Icon
            position="absolute"
            top={2}
            left={3}
            right={2}
            w={4}
            h={4}
            as={RiSettings4Fill}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        bg={useColorModeValue('white', 'black')}
        borderColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.400')}
        boxShadow="md"
        w="fit-content"
        right={4}
      >
        <PopoverBody p={8}>
          <Text fontWeight="semibold" mb={1.5}>
            Transaction Settings
          </Text>
          <Text
            color={useColorModeValue('blackAlpha.500', 'whiteAlpha.600')}
            verticalAlign="middle"
            mb={4}
          >
            Slippage tolerance
            <Icon ml={1}as={BsExclamationCircleFill} color="orange.200" />
          </Text>
          <Grid
            templateColumns={{ base: '1fr 1fr', sm: 'repeat(4, 1fr)' }}
            gap={4}
            {...group}
          >
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioTag
                  key={value}
                  value={value}
                  isDisabled={value === '2.5%' ? true : false}
                  {...radio}
                >
                  {value}
                </RadioTag>
              );
            })}
          </Grid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const SkeletonOptions = () => {
  return (
    <>
      <Flex justify="space-between" align="center" mb={{ base: 2, sm: 4 }}>
        <Flex align="center">
          <Skeleton
            w={{ base: 10, sm: 16 }}
            h={{ base: 10, sm: 16 }}
            mr={{ base: 2, sm: 4 }}
          />
          <Skeleton w={{ base: 24, sm: 48 }} h={{ base: 6, sm: 8 }} />
        </Flex>
        <Skeleton w={{ base: 24, sm: 48 }} h={{ base: 6, sm: 8 }} />
      </Flex>
      <Flex justify="space-between" align="center" mb={{ base: 2, sm: 4 }}>
        <Flex align="center">
          <Skeleton
            w={{ base: 10, sm: 16 }}
            h={{ base: 10, sm: 16 }}
            mr={{ base: 2, sm: 4 }}
          />
          <Skeleton w={{ base: 24, sm: 48 }} h={{ base: 6, sm: 8 }} />
        </Flex>
        <Skeleton w={{ base: 24, sm: 48 }} h={{ base: 6, sm: 8 }} />
      </Flex>
      <Flex justify="space-between" align="center">
        <Flex align="center">
          <Skeleton
            w={{ base: 10, sm: 16 }}
            h={{ base: 10, sm: 16 }}
            mr={{ base: 2, sm: 4 }}
          />
          <Skeleton w={{ base: 24, sm: 48 }} h={{ base: 6, sm: 8 }} />
        </Flex>
        <Skeleton w={{ base: 24, sm: 48 }} h={{ base: 6, sm: 8 }} />
      </Flex>
    </>
  );
};

const FromToken = ({
  data,
  fromItem,
  setFromItem,
  toItem,
  setToItem,
  tokenInputValue,
  setTokenInputValue
}: {
  data: dataType[];
  fromItem: dataType | undefined;
  setFromItem: (value: dataType) => void;
  toItem: dataType | undefined;
  setToItem: (value: dataType) => void;
  tokenInputValue: string;
  setTokenInputValue: (value: string) => void;
}) => {
  const [checked, setChecked] = useState([false, false]);
  const [checkedItems, setCheckedItems] = useState([
    {
      label: 'MAX',
      id: 'max',
      lightBg: 'blackAlpha.300',
      darkBg: 'whiteAlpha.300'
    },
    {
      label: 'HALF',
      id: 'half',
      lightBg: 'blackAlpha.300',
      darkBg: 'whiteAlpha.300'
    }
  ]);
  const fromMenuRef = useRef<HTMLDivElement | null>(null);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const customStyles = {
    control: (provided: SystemStyleObject) => ({
      ...provided,
      bgColor: 'osl.purple.500',
      bgGradient: "linear(to-br, rgba(0,0,102,.9), #330099)",
      borderColor: 'whiteAlpha.500',
    }),
    menu: (provided: SystemStyleObject) => ({
      ...provided,
      position: 'relative',
      m: 0,
      bgColor: 'osl.purple.10',
      bgGradient: "linear(to-tl, rgba(0,0,102,.5), #330099)",
      borderRadius: 'md',
      borderColor: 'osl.dark-blue.10',
      borderWidth: '4px',
      borderStyle: 'inset'
    }),
    menuList: (provided: SystemStyleObject) => ({
      ...provided,
      bgColor: 'transparent',
      borderColor: 'none',
      borderWidth: 'none',
      py: 0,
      pr: 1,
      // For Firefox
      scrollbarWidth: 'auto',
      scrollbarColor: 'rgba(255,255,255,0.2) rgba(255,255,255,0.1)',
      // For Chrome and other browsers except Firefox
      '&::-webkit-scrollbar': {
        width: '18px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '4px'
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '4px'
      }
    }),
    option: (provided: SystemStyleObject, state: { isSelected: boolean }) => ({
      ...provided,
      borderRadius: 'xl',
      bg: state.isSelected
        ? 'whiteAlpha.500'
        : 'transparent',
      color: 'inherit',
      _hover: {
        bg: state.isSelected
          ? 'whiteAlpha.500'
          : 'whiteAlpha.100'
      },
      _disabled: {
        _hover: { bg: 'transparent' }
      }
    })
  };
  const IndicatorSeparator = () => {
    return null;
  };
  const DropdownIndicator = () => {
    return null;
  };
  const CustomOption = ({
    children,
    ...props
  }: OptionProps<dataType, true, GroupBase<dataType>>) => {
    return (
      <chakraComponents.Option {...props}>
        <Flex id={props.data.value} align="center" w="full">
          <Flex align="center" flex={1} mr={0}>
            <Box
              w={'42px'}
              h={'42px'}
              mr={5}
            >
              <Image
                  alt={props.data.chain}
                  maxH={'42px'}
                  minW={'42px'}
                  borderRadius={'25%'}
                  src={props.data.imgSrc} />
            </Box>
            <Box>
              <Text
                fontSize={'1rem'}
                fontWeight="bold"
                textAlign="start"
              >
                {children}
              </Text>
              <Text
                fontSize={'sm'}
                textAlign="start"
                color={'whiteAlpha.500'}
              >
                {props.data.chain}
              </Text>
            </Box>
          </Flex>
          <Text
            fontSize={'1rem'}
            fontWeight="semibold"
            textAlign="end"
            wordBreak="break-word"
          >
           0
          </Text>
        </Flex>
      </chakraComponents.Option>
    );
  };
  const CustomControl = ({
    children,
    ...props
  }: ControlProps<dataType, true>) => {
    return (
      <chakraComponents.Control {...props}>
        <Flex align="center" p={2}>
          <Icon as={RiSearch2Line} />
        </Flex>
        {children}
      </chakraComponents.Control>
    );
  };
  const AvailableCheckbox = ({
    label,
    id,
    lightBg,
    darkBg,
    index
  }: {
    label: string;
    id: string;
    lightBg: string;
    darkBg: string;
    index: number;
  }) => {
    return (
      <Button
        id={id}
        variant="unstyled"
        fontSize="xs"
        borderRadius="md"
        fontWeight="semibold"
        _focus={{
        }}
        onClick={(e) => {
          if (e.currentTarget.id === id) {
            setChecked((pre) => {
              const newArr = pre.map((v, i) => {
                if (i === index) return !v;
                return false;
              });
              return newArr;
            });
          }
        }}
        h={7}
        w={12}
      >
        {label}
      </Button>
    );
  };

  useEffect(() => {
    setCheckedItems((pre) => {
      const newItems = pre.map(({ lightBg, darkBg, ...rest }, i) => ({
        ...rest,
        lightBg: checked[i] ? 'primary.100' : 'blackAlpha.300',
        darkBg: checked[i] ? 'primary.800' : 'whiteAlpha.300'
      }));
      return newItems;
    });
  }, [checked]);
  useOutsideClick({
    ref: fromMenuRef,
    handler: () => onClose()
  });

  return (
    <Box
      ref={fromMenuRef}
      position="relative"
      px={2}
    >
      <Flex
        position="relative"
        justify="space-between"
        transition="all .5s"
        animation={'ease-in-out'}
        flexDirection={{ base: 'column', sm: 'row' }}
        align={{ base: 'start', sm: 'center' }}
        mb={1}
      >
        <Text fontSize={{ base: 'md', sm: 'lg' }} fontWeight="bold">
          From
        </Text>
        <Flex
          maxW={'65%'}
          w="full"
          justify="space-between"
          align="center"
        >
          <Text fontSize={'1rem'}>
            Available
          </Text>
          <Text
            fontSize={'1rem'}
            fontWeight="bold"
            color="primary.300"
          >
            0
          </Text>
          {checkedItems.map(({ label, id, lightBg, darkBg }, index) => (
            <AvailableCheckbox
              label={label}
              id={id}
              lightBg={lightBg}
              darkBg={darkBg}
              index={index}
            />
          ))}
        </Flex>
      </Flex>
      <Flex maxW="full" h="fit-content">
        <Button
          flex={1}
          variant="unstyled"
          w="fit-content"
          h="fit-content"
          whiteSpace="normal"
          _focus={{ boxShadow: 'none' }}
          onClick={onToggle}
          mr={2}
          transition="all .5s"
          animation={'ease-in-out'}
          zIndex={1}
        >
          {fromItem ? (
            <Flex>
              <Box
                borderRadius="full"
                border="2px groove"
                borderColor={'osl.orange.10'}
                bgColor={'osl.dark-blue.10'}
                mr={4}
              >
                <Image
                  alt={fromItem.chain}
                  maxH={'60px'}
                  minH={'60px'}
                  minW={'60px'}
                  maxW={'60px'}
                  borderRadius={'full'}
                  src={fromItem.imgSrc} />
              </Box>
              <Text
                fontSize={{ base: 'xl', sm: '3xl' }}
                textAlign="start"
              >
                {fromItem.label}
              </Text>
              <Icon
                as={isOpen ? FiChevronsUp : FiChevronsDown}
                mt={1}
                fontSize={'2rem'}
                color={useColorModeValue('blackAlpha.700', 'whiteAlpha.700')}
              />
            </Flex>
          ) : (
            <Flex align="center">
              <Skeleton
                w={{ base: 12, sm: 20 }}
                h={{ base: 12, sm: 20 }}
                mr={{ base: 2, sm: 4 }}
              />
              <Skeleton
                w={{ base: 24, sm: 48 }}
                h={{ base: 6, sm: 10 }}
                mr={{ base: 2, sm: 4 }}
              />
            </Flex>
          )}
        </Button>
        {fromItem ? (
          <Box mt={10}>
            <NumberInput
              defaultValue={1}
              min={0.000000000000000001}
              precision={fromItem.exponent}>
              <NumberInputField textAlign={'end'} borderRadius={'transparent'} />
              <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
            </NumberInput>
          <Box>
            <Divider variant={'dashed'} borderColor={'osl.lite-blue.500'} zIndex={0}/>
              <Box pt={1}>
                <Text
                fontSize={'0.75rem'}
                textAlign={'start'}
                color={'whiteAlpha.500'}
            >
              <i>Origin Chain:</i> {fromItem.chain}
              </Text>
            <Text
                fontSize={'0.75rem'}
                textAlign="end"
                color={'whiteAlpha.500'}
            >
              <i>Denom Trace:</i> {fromItem.traces}
              </Text>
                <Text
                  fontSize={'0.2em'}
                  textAlign="end"
                  textOverflow={'ellipsis'}
                  color={'whiteAlpha.500'}
              >
                {fromItem.value}
              </Text>
              </Box>
          </Box>
            </Box>
        ) : (
          <Flex flexDirection="column" align="end">
            <Skeleton w={{ base: 20, sm: 36 }} h={{ base: 8, sm: 10 }} mb={2} />
            <Skeleton w={{ base: 12, sm: 16 }} h={{ base: 6, sm: 8 }} />
          </Flex>
        )}
      </Flex>
      <Box
        position="absolute"
        zIndex={2000}
        boxShadow={isOpen ? '0 12px 20px -8px rgba(105, 88, 164, 0.5)' : 'none'}
        borderRadius="xl"
        left={0}
        right={0}
        top={'6.5rem'}
        px={0}
      >
        <Collapse in={isOpen} animateOpacity>
          <Box py={0}>
            {fromItem ? (
              <AsyncSelect
                placeholder="Search"
                chakraStyles={customStyles}
                isClearable={false}
                // isOptionDisabled={(option) => option.label === 'Ion'} // test option disabled
                blurInputOnSelect={true}
                controlShouldRenderValue={false}
                menuIsOpen={true}
                loadingMessage={() => <SkeletonOptions />}
                defaultOptions={data}
                value={fromItem}
                loadOptions={(inputValue, callback) => {
                  setTimeout(() => {
                    const values = data.filter((option) =>
                      option.label
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                    );
                    callback(values);
                  }, 1000);
                }}
                onChange={(selectedOption) => {
                  let value = {};
                  value = { ...selectedOption };
                  setFromItem(value as dataType);
                  onClose();
                }}
                components={{
                  DropdownIndicator,
                  IndicatorSeparator,
                  Control: CustomControl,
                  Option: CustomOption
                }}
              />
            ) : (
              <SkeletonOptions />
            )}
          </Box>
        </Collapse>
      </Box>
      {!isOpen && (
        <Flex justify="center" align="center">
          <Box
            as="button"
            mt={1}
            mb={-8}
            zIndex={2}
            color={'whiteAlpha.600'}
            transition="all .5s"
            animation={'ease-in-out'}
            onClick={() => {
              setFromItem(toItem as dataType);
              setToItem(fromItem as dataType);
            }}
          >
            <Icon
              pos={'absolute'}
              zIndex={10}
              as={BsHexagon}
              w={'2.25rem'}
              h={'2.25rem'}
            />
            <Icon
              w={'2.25rem'}
              h={'2.25rem'}
              as={CgArrowsExchangeV}
            />
          </Box>
        </Flex>
      )}
    </Box>
  );
};

const ToToken = ({
  data,
  toItem,
  setToItem
}: {
  data: dataType[];
  toItem: dataType | undefined;
  setToItem: (value: dataType) => void;
}) => {
  const toMenuRef = useRef<HTMLDivElement | null>(null);
  const { isOpen, onToggle, onClose } = useDisclosure();
  const customStyles = {
    control: (provided: SystemStyleObject) => ({
      ...provided,
      bgColor: 'osl.purple.500',
      bgGradient: "linear(to-br, rgba(0,0,102,.9), #330099)",
      borderColor: 'whiteAlpha.500',
    }),
    menu: (provided: SystemStyleObject) => ({
      ...provided,
      position: 'relative',
      m: 0,
      bgColor: 'osl.purple.10',
      bgGradient: "linear(to-tl, rgba(0,0,102,.5), #330099)",
      borderRadius: 'md',
      borderColor: 'osl.dark-blue.10',
      borderWidth: '4px',
      borderStyle: 'inset'
    }),
    menuList: (provided: SystemStyleObject) => ({
      ...provided,
       bgColor: 'transparent',
      borderColor: 'none',
      borderWidth: 'none',
      py: 0,
      pr: 1,
      // For Firefox
      scrollbarWidth: 'auto',
      scrollbarColor: 'rgba(255,255,255,0.2) rgba(255,255,255,0.1)',
      // For Chrome and other browsers except Firefox
      '&::-webkit-scrollbar': {
        width: '18px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '4px'
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '4px'
      }
    }),
    option: (provided: SystemStyleObject, state: { isSelected: boolean }) => ({
      ...provided,
      borderRadius: 'xl',
      bg: state.isSelected
        ? 'whiteAlpha.500'
        : 'transparent',
      color: 'inherit',
      _hover: {
        bg: state.isSelected
          ? 'whiteAlpha.500'
          : 'whiteAlpha.100'
      },
      _disabled: {
        _hover: { bg: 'transparent' }
      }
    })
  };
  const IndicatorSeparator = () => {
    return null;
  };
  const DropdownIndicator = () => {
    return null;
  };
  const CustomOption = ({
    children,
    ...props
  }: OptionProps<dataType, true, GroupBase<dataType>>) => {
    return (
      <chakraComponents.Option {...props}>
        <Flex id={props.data.value} align="center" w="full">
          <Flex align="center" flex={1} mr={0}>
            <Box
              w={'42px'}
              h={'42px'}
              mr={5}
            >
              <Image
                  alt={props.data.chain}
                  maxH={'42px'}
                  minW={'42px'}
                  borderRadius={'25%'}
                  src={props.data.imgSrc} />
            </Box>
            <Box>
              <Text
                fontSize={'1rem'}
                fontWeight="bold"
                textAlign="start"
              >
                {children}
              </Text>
              <Text
                fontSize={'sm'}
                textAlign="start"
                color={'whiteAlpha.500'}
              >
                {props.data.chain}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </chakraComponents.Option>
    );
  };
  const CustomControl = ({
    children,
    ...props
  }: ControlProps<dataType, true>) => {
    return (
      <chakraComponents.Control {...props}>
        <Flex align="center" pl={4}>
          <Icon as={RiSearch2Line} />
        </Flex>
        {children}
      </chakraComponents.Control>
    );
  };

  useOutsideClick({
    ref: toMenuRef,
    handler: () => onClose()
  });

  return (
    <Box
      ref={toMenuRef}
      position="relative"
      boxShadow={isOpen ? '0 0 20px -8px rgba(105, 88, 164, 0.5)' : 'none'}
      borderRadius="xl"
      px={2}
    >
      <Text fontSize={{ base: 'md', sm: 'lg' }} fontWeight="bold" mb={2}>
        To
      </Text>
      <Flex>
        <Button
          flex={1}
          variant="unstyled"
          w="fit-content"
          h="fit-content"
          whiteSpace="normal"
          _focus={{ boxShadow: 'none' }}
          onClick={onToggle}
          mr={2}
          zIndex={1} 
        >
          {toItem ? (
            <Flex mt={-2}>
                <Box
                borderRadius="full"
                border="2px solid"
                borderColor={'osl.orange.10'}
                bgColor={'blackAlpha.500'}
                mr={4}
              >
                <Image
                  alt={toItem.chain}
                  minH={'60px'}
                  maxW={'60px'}
                  borderRadius={'full'}
                  src={toItem.imgSrc} />
              </Box>
              <Text
                fontSize={'1.75rem'}
                fontWeight="bold"
                textAlign="start"
              >
                {toItem.label}
              </Text>
              <Icon
                as={isOpen ? FiChevronsUp : FiChevronsDown}
                mt={1}
                fontSize={'2rem'}
                color={'whiteAlpha.700'}
              />
            </Flex>
          ) : (
            <Flex align="center">
              <Skeleton
                w={{ base: 12, sm: 20 }}
                h={{ base: 12, sm: 20 }}
                mr={{ base: 2, sm: 4 }}
              />
              <Skeleton
                w={{ base: 24, sm: 48 }}
                h={{ base: 6, sm: 10 }}
                mr={{ base: 2, sm: 4 }}
              />
            </Flex>
          )}
        </Button>
        {toItem ? (
          <Flex
            maxW={{ base: 28, sm: 48, md: 'initial' }}
            wrap="wrap"
            justify="end"
          ><Box maxW={'60%'}>
              <NumberInput
                isReadOnly
                defaultValue={0}
                precision={toItem.exponent}>
                <NumberInputField textAlign={'end'} pr={1} fontSize={'0.9rem'}/>
            </NumberInput></Box>
            <Divider variant={'dashed'} borderColor={'osl.lite-blue.500'} zIndex={0} />
            <Box pt={3}>
               <Text
                fontSize={'0.75rem'}
                textAlign={'start'}
                color={'whiteAlpha.500'}
            >
              <i>Origin Chain:</i> {toItem.chain}
              </Text>
              <Text
                fontSize={'0.75rem'}
                textAlign="end"
                color={'whiteAlpha.500'}
            >
            <i>Denom Trace:</i> {toItem.traces}
              </Text>
              <Text
                color={'whiteAlpha.500'}
                fontSize={'0.2rem'}
                textAlign="end"
              >
                {toItem.value}
              </Text>
              </Box>
          </Flex>
        ) : (
          <Skeleton w={{ base: 20, sm: 36 }} h={{ base: 8, sm: 10 }} />
        )}
      </Flex>
      <Box
        position="absolute"
        zIndex={2000}
        boxShadow={isOpen ? '0 12px 20px -8px rgba(105, 88, 164, 0.5)' : 'none'}
        borderRadius="xl"
        left={0}
        right={0}
        top={'6.5rem'}
        px={0}
      >
        <Collapse in={isOpen} animateOpacity>
          <Box py={0}>
            {toItem ? (
              <AsyncSelect
                placeholder="Search"
                chakraStyles={customStyles}
                isClearable={false}
                blurInputOnSelect={true}
                controlShouldRenderValue={false}
                menuIsOpen={true}
                loadingMessage={() => <SkeletonOptions />}
                defaultOptions={data}
                value={toItem}
                onChange={(selectedOption) => {
                  let value = {};
                  value = { ...selectedOption };
                  setToItem(value as dataType);
                  onClose();
                }}
                loadOptions={(inputValue, callback) => {
                  setTimeout(() => {
                    const values = data.filter((option) =>
                      option.label
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                    );
                    callback(values);
                  }, 1000);
                }}
                components={{
                  DropdownIndicator,
                  IndicatorSeparator,
                  Control: CustomControl,
                  Option: CustomOption
                }}
              />
            ) : (
              <SkeletonOptions />
            )}
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};

const Rate = ({
  fromItem,
  toItem,
  tokenInputValue
}: {
  fromItem: dataType | undefined;
  toItem: dataType | undefined;
  tokenInputValue: string;
}) => {
  return (
    <Box
      bg={'osl.lite-blue.300'}
      borderRadius="xl"
      boxShadow={'0 0 2px white'}
      p={3}
    >
      <Flex
        justify="space-between"
        align="start"
        fontSize={{ md: 'lg' }}
        mb={1}
      >
        <Text flex={1} mr={2}>
          Rate
        </Text>
        {fromItem && toItem ? (
          <Stack
            as="span"
            isInline
            wrap="wrap"
            maxW={{ base: 56, sm: 'initial' }}
            justify="end"
          >
            <Text>
              {tokenInputValue} {fromItem.label}
            </Text>
            <Text>=</Text>
            <Text>0 {toItem.label}</Text>
          </Stack>
        ) : (
          <Skeleton w={{ base: 32, sm: 48 }} h={{ base: 6, sm: 8 }} />
        )}
      </Flex>
      <Flex
        justify="space-between"
        fontSize={{ md: 'lg' }}
      >
        <Text>Swap Fee</Text>
        <Text>0.3%</Text>
      </Flex>
      <Divider
        borderColor={'whiteAlpha.600'}
        my={{ base: 4, md: 6 }}
      />
      <Flex
        justify="space-between"
        fontSize={{ md: 'lg' }}
      >
        <Text>Estimated Slippage</Text>
        <Text>&lt; 0.001%</Text>
      </Flex>
    </Box>
  );
};

export const SwapCard = () => {
  const assets = JSON
  const [data, setData] = useState<dataType[]>([]);
  const [fromItem, setFromItem] = useState<dataType>();
  const [toItem, setToItem] = useState<dataType>();
  const [loading, setLoading] = useState(true);
  const [tokenInputValue, setTokenInputValue] = useState('');

  setTimeout(() => {
    setLoading(false);
  }, 500);

  useEffect(() => {
    const assetList = assets
      .map((value) => {
        return ({
          label: value.symbol,
          value: value.base,
          exponent: value.denom_units.at(-1).exponent,
          imgSrc: value.logo_URIs?.svg || value.logo_URIs?.png,
          traces: value.traces?.at(-1)?.chain?.path || 'Native',
          chain: value.traces?.at(-1)?.counterparty?.chain_name || 'Osmosis'
        });
      })

    if (!loading) {
      setData(assetList);
      setFromItem(assetList[0]);
      setToItem(assetList[3]);
      setTokenInputValue('0');
    }
  }, [loading]);

  return (
    <Card
      w={{ base: '100%', lg: '75%', xl: '50%' }}
      left={{ base: '0%', lg: '25%', xl: '65%' }}
      top={{ base: '50px', lg: '100px', xl: '100px' }}
      bgGradient="linear(to-t, rgba(0,0,102,.8), #330099)"
      bgColor={'transparent'}
      borderColor={'blackAlpha.500'}
      borderWidth={'2px'}>
    <Stack spacing={4} p={3}>
      <Box zIndex={3000} alignSelf="end">
        <Setting />
      </Box>
      <FromToken
        data={data}
        fromItem={fromItem}
        toItem={toItem}
        tokenInputValue={tokenInputValue}
        setFromItem={setFromItem}
        setToItem={setToItem}
        setTokenInputValue={setTokenInputValue}
      />
        <ToToken
          data={data}
          toItem={toItem}
          setToItem={setToItem} />
      <Rate
        fromItem={fromItem}
        toItem={toItem}
        tokenInputValue={tokenInputValue}
      />
        <Button
          fontWeight={'normal'}
          w="full"
          bgGradient="linear(to-bl, rgba(204, 0, 255, 0.5), #330099)"
          textShadow={'0px 0px 8px #000000'}
          _hover={{
            bgColor: "none",
            bgGradient: "linear(to-tr, osl.lite-blue.500, #330099)",
            textShadow: '0px 0px 20px #000'
          }}>
        Swap
      </Button>
      </Stack>
      </Card>
  );
};
