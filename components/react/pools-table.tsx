import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stat,
  StatNumber,
  Text,
  Avatar,
  AvatarGroup,
   Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Button,
  PopoverArrow,
  Divider,
  Flex,
  Spacer,
} from '@chakra-ui/react'

export const PoolsTable = () => {
  return (
    <TableContainer w={'1080px'} pt={5}>
  <Table size={'sm'}>
   <Thead>
          <Tr>
            <Th></Th>
        <Th p={1}>Pool Name/Number</Th>
        <Th isNumeric>Liquidity</Th>
        <Th isNumeric>Volume (24hr)</Th>
        <Th isNumeric>Fees (7d)</Th>
            <Th isNumeric>Bonding APR</Th>
            <Th></Th>
      </Tr>
    </Thead>
    <Tbody>
          <Tr>
            <Td p={1}>
              <AvatarGroup spacing={'-.95rem'} size='md' max={5}>
                <Avatar borderColor={'transparent'} name='ATOM' src='https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg' />
                <Avatar borderColor={'transparent'} name='OSMO' src='https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg' />
              </AvatarGroup>
              </Td>
            <Td p={1}>
              <Text>ATOM/OSMO</Text>
              <Text>Pool #1</Text>
            </Td>
            <Td isNumeric>
              <Stat>
                <StatNumber>
                  $69.6m
                </StatNumber>
              </Stat>
            </Td>
            <Td isNumeric>
              <Stat>
                <StatNumber>
                  $6.03m
                </StatNumber>
              </Stat>
            </Td>
            <Td isNumeric>
              <Stat>
                <StatNumber>
                  $74.7k
                </StatNumber>
              </Stat>
            </Td>
            <Td>
              <Popover>
                <PopoverTrigger>
                  <Button>
                    <Stat>
                <StatNumber>
                  25%
                </StatNumber>
                    </Stat>
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>
                    APR Breakdown:
                  </PopoverHeader>
                  <PopoverBody textAlign={'start'}>
                    <Flex flex={'1'} alignItems='center' gap='1'>
                    <Stat>
                <StatNumber fontSize={'1rem'} fontWeight={'normal'}>
                  + 5% <Avatar size={'xs'} src='https://frontier.osmosis.zone/icons/superfluid-osmo.svg'/> Superfluid Staking
                          <Divider my={'0.8rem'} />
                  + 14% <Avatar size={'xs'} src='https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'/> 26.8k OSMO / day
                    <Divider my={'0.8rem'} />
                  + 5% ~$10.7K / day (Swap Fees)
                </StatNumber>
                    </Stat></Flex></PopoverBody>
  </PopoverContent>
</Popover>
            </Td>
            <Td>
              <Button size={'xs'}>
                Add/Remove Liquidity
              </Button>
              <Spacer/>
              <Button size={'xs'}>
                Bond
              </Button>
            </Td>
          </Tr>
                    <Tr>
            <Td p={1}>
              <AvatarGroup spacing={'-.95rem'} size='md' max={5}>
                <Avatar borderColor={'transparent'} name='USDC' src='https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg' />
                <Avatar borderColor={'transparent'} name='OSMO' src='https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg' />
              </AvatarGroup>
              </Td>
            <Td p={1}>
              <Text>USDC.axl/OSMO</Text>
              <Text>Pool #678</Text>
            </Td>
            <Td isNumeric>
              <Stat>
                <StatNumber>
                  $24.7m
                </StatNumber>
              </Stat>
            </Td>
            <Td isNumeric>
              <Stat>
                <StatNumber>
                  $6.88m
                </StatNumber>
              </Stat>
            </Td>
            <Td isNumeric>
              <Stat>
                <StatNumber>
                  $88.2k
                </StatNumber>
              </Stat>
            </Td>
            <Td>
              <Popover>
                <PopoverTrigger>
                  <Button>
                    <Stat>
                <StatNumber>
                  39%
                </StatNumber>
                    </Stat>
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>
                    APR Breakdown:
                  </PopoverHeader>
                  <PopoverBody textAlign={'start'}>
                    <Flex flex={'1'} alignItems='center' gap='1'>
                    <Stat>
                <StatNumber fontSize={'1rem'} fontWeight={'normal'}>
                  + 5% <Avatar size={'xs'} src='https://frontier.osmosis.zone/icons/superfluid-osmo.svg'/> Superfluid Staking
                          <Divider my={'0.8rem'} />
                  + 14% <Avatar size={'xs'} src='https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'/> 9.96k OSMO / day
                    <Divider my={'0.8rem'} />
                  + 18% ~$12.6K / day (Swap Fees)
                </StatNumber>
                    </Stat></Flex></PopoverBody>
  </PopoverContent>
</Popover>
            </Td>
            <Td>
              <Button size={'xs'}>
                Add/Remove Liquidity
              </Button>
              <Spacer/>
              <Button size={'xs'}>
                Bond
              </Button>
            </Td>
          </Tr>
          <Tr>
            <Td p={1}>
              <AvatarGroup spacing={'-.95rem'} size='md' max={3}>
                <Avatar borderColor={'whiteAlpha.500'} src='./stableswap-pool.svg' />
                <Avatar borderColor={'transparent'} name='ATOM' src='https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg' />
                <Avatar borderColor={'transparent'} name='stkATOM' src='https://raw.githubusercontent.com/cosmos/chain-registry/master/persistence/images/stkatom.svg' />
              </AvatarGroup>
              
              </Td>
            <Td p={1}>
              <Text>ATOM/stkATOM</Text>
              <Text>Pool #886</Text>
            </Td>
            <Td isNumeric>
              <Stat>
                <StatNumber>
                  $24.7m
                </StatNumber>
              </Stat>
            </Td>
            <Td isNumeric>
              <Stat>
                <StatNumber>
                  $6.88m
                </StatNumber>
              </Stat>
            </Td>
            <Td isNumeric>
              <Stat>
                <StatNumber>
                  $88.2k
                </StatNumber>
              </Stat>
            </Td>
            <Td>
              <Popover>
                <PopoverTrigger>
                  <Button>
                    <Stat>
                <StatNumber>
                  39%
                </StatNumber>
                    </Stat>
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>
                    APR Breakdown:
                  </PopoverHeader>
                  <PopoverBody textAlign={'start'}>
                    <Flex flex={'1'} alignItems='center' gap='1'>
                    <Stat>
                <StatNumber fontSize={'1rem'} fontWeight={'normal'}>
                  + 5% <Avatar size={'xs'} src='https://frontier.osmosis.zone/icons/superfluid-osmo.svg'/> Superfluid Staking
                          <Divider my={'0.8rem'} />
                  + 14% <Avatar size={'xs'} src='https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'/> 9.96k OSMO / day
                    <Divider my={'0.8rem'} />
                  + 18% ~$12.6K / day (Swap Fees)
                </StatNumber>
                    </Stat></Flex></PopoverBody>
  </PopoverContent>
</Popover>
            </Td>
            <Td>
              <Button size={'xs'}>
                Add/Remove Liquidity
              </Button>
              <Spacer/>
              <Button size={'xs'}>
                Bond
              </Button>
            </Td>
          </Tr>
          <Tr>
            <Td p={1}>
              <AvatarGroup spacing={'-1.55rem'} size='md' max={5}>
                <Avatar borderColor={'whiteAlpha.500'} src='./stableswap-pool.svg' />
                <Avatar borderColor={'transparent'} name='ATOM' src='https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/dai.svg' />
                <Avatar borderColor={'transparent'} name='stkATOM' src='https://raw.githubusercontent.com/cosmos/chain-registry/master/acrechain/images/arusd.png' />
                <Avatar borderColor={'transparent'} name='stkATOM' src='https://raw.githubusercontent.com/cosmos/chain-registry/master/axelar/images/usdc.svg' />
              </AvatarGroup>
              </Td>
            <Td p={1}>
              <Text fontSize={'0.8rem'}>DAI.axl/arUSDC/USDC.axl</Text>
              <Text>Pool #985</Text>
            </Td>
            <Td isNumeric>
              <Stat>
                <StatNumber>
                  $69.6m
                </StatNumber>
              </Stat>
            </Td>
            <Td isNumeric>
              <Stat>
                <StatNumber>
                  $6.03m
                </StatNumber>
              </Stat>
            </Td>
            <Td isNumeric>
              <Stat>
                <StatNumber>
                  $74.7k
                </StatNumber>
              </Stat>
            </Td>
            <Td>
              <Popover>
                <PopoverTrigger>
                  <Button>
                    <Stat>
                <StatNumber>
                  25%
                </StatNumber>
                    </Stat>
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverHeader>
                    APR Breakdown:
                  </PopoverHeader>
                  <PopoverBody textAlign={'start'}>
                    <Flex flex={'1'} alignItems='center' gap='1'>
                    <Stat>
                <StatNumber fontSize={'1rem'} fontWeight={'normal'}>
                  + 5% <Avatar size={'xs'} src='https://frontier.osmosis.zone/icons/superfluid-osmo.svg'/> Superfluid Staking
                          <Divider my={'0.8rem'} />
                  + 14% <Avatar size={'xs'} src='https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg'/> 26.8k OSMO / day
                    <Divider my={'0.8rem'} />
                  + 5% ~$10.7K / day (Swap Fees)
                </StatNumber>
                    </Stat></Flex></PopoverBody>
  </PopoverContent>
</Popover>
            </Td>
            <Td>
              <Button size={'xs'}>
                Add/Remove Liquidity
              </Button>
              <Spacer/>
              <Button size={'xs'}>
                Bond
              </Button>
            </Td>
          </Tr>
    </Tbody>
  </Table>
</TableContainer>
  );
}
