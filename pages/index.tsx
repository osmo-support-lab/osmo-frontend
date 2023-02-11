import { useState } from 'react';
import Head from 'next/head';
import { useChain } from '@cosmos-kit/react';
import { StdFee } from '@cosmjs/amino';
import { SigningStargateClient } from '@cosmjs/stargate';
import BigNumber from 'bignumber.js';
import React from 'react';
import {
  Box,
  Drawer,
  Divider,
  Grid,
  Heading,
  Text,
  Stack,
  Container,
  Input,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  Button,
  Flex,
  IconButton,
  Icon,
  useColorMode,
  Center,
  useDisclosure,
} from '@chakra-ui/react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { FiChevronLeft } from 'react-icons/fi';
import { AssetList } from '../hooks';
import {
  chainassets,
  chainName,
  coin,
  dependencies,
  products,
} from '../config';

import { WalletStatus } from '@cosmos-kit/core';
import {
  Product,
  Dependency,
  WalletSection,
  handleChangeColorModeValue,
  Swap,
} from '../components';
import { SwapCard } from '../components';

import { cosmos } from 'osmojs';

import Layout from './layout';

const library = {
  title: 'OsmoJS',
  text: 'OsmoJS',
  href: 'https://github.com/osmosis-labs/osmojs',
};

const sendTokens = (
  getSigningStargateClient: () => Promise<SigningStargateClient>,
  setResp: (resp: string) => any,
  address: string
) => {
  return async () => {
    const stargateClient = await getSigningStargateClient();
    if (!stargateClient || !address) {
      console.error('stargateClient undefined or address undefined.');
      return;
    }

    const { send } = cosmos.bank.v1beta1.MessageComposer.withTypeUrl;

    const msg = send({
      amount: [
        {
          denom: coin.base,
          amount: '1000',
        },
      ],
      toAddress: address,
      fromAddress: address,
    });

    const fee: StdFee = {
      amount: [
        {
          denom: coin.base,
          amount: '2000',
        },
      ],
      gas: '86364',
    };
    const response = await stargateClient.signAndBroadcast(address, [msg], fee);
    setResp(JSON.stringify(response, null, 2));
  };
};

export default function Home() {
  const { getSigningStargateClient, address, status, getRpcEndpoint } =
    useChain(chainName);

  const [balance, setBalance] = useState(new BigNumber(0));
  const [isFetchingBalance, setFetchingBalance] = useState(false);
  const [resp, setResp] = useState('');
  const getBalance = async () => {
    if (!address) {
      setBalance(new BigNumber(0));
      setFetchingBalance(false);
      return;
    }

    let rpcEndpoint = await getRpcEndpoint();

    if (!rpcEndpoint) {
      console.log('no rpc endpoint — using a fallback');
      rpcEndpoint = `https://rpc.cosmos.directory/${chainName}`;
    }

    // get RPC client
    const client = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint,
    });

    // fetch balance
    const balance = await client.cosmos.bank.v1beta1.balance({
      address,
      denom: chainassets?.assets[0].base as string,
    });

    // Get the display exponent
    // we can get the exponent from chain registry asset denom_units
    const exp = coin.denom_units.find((unit) => unit.denom === coin.display)
      ?.exponent as number;

    // show balance in display values by exponentiating it
    const a = new BigNumber(balance.balance.amount);
    const amount = a.multipliedBy(10 ** -exp);
    setBalance(amount);
    setFetchingBalance(false);
  };
  return (
    <Container maxW="5xl" py={10}>
      <Head>
        <title>Osmosis Frontier || Swap</title>
        <meta name="description" content="Osmosis Support Lab hosted front-end for the Osmosis blockchain." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
      <SwapCard />
    </Container>
  );
}
