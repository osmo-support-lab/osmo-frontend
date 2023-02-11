import Layout from './layout';
import Head from 'next/head';
import {
  Container,
} from '@chakra-ui/react';
import { PoolsTable } from '../components';

export default function Pools() {
  return (
    <Container maxW="5xl" py={10}>
      <Head>
        <title>Osmosis Frontier || Pools</title>
        <meta name="description" content="Osmosis Support Lab hosted front-end for the Osmosis blockchain." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout />
      <PoolsTable />
    </Container>
  );
}
