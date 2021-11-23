import * as React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { WalletChecker } from "../WalletChecker";

import { TableContent } from './TableContent'
import { TablePagination } from './TablePagination'
import { cols } from './_data'

import { useWeb3React } from "@web3-react/core";
import { useZapper } from "../../hooks/useZapper";

export default function TransactionTable() {
	const { library, account, chainId } = useWeb3React();
  const walletData = useZapper(account);

  console.log(walletData)

  return (
    <Box as="section" py={{ base: '2', md: '4' }}>
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '2', md: '4' }}>
        <Box overflowX="auto">
          <WalletChecker loading={walletData.loading} account={account}>
            <TableContent
              walletData={walletData}
            />
          </WalletChecker>
        </Box>
      </Box>
    </Box>
  )
}
