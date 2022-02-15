import { useRouter } from "next/router";
import { useEffect, useState, useMemo } from "react";
import {
  Button,
  Box,
  Center,
  Stack,
  StackProps,
  Link,
  Text,
  Image,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  VStack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FiSend, FiToggleLeft } from "react-icons/fi";
import SubmitApprovalsForm from '../../components/DustSweeperTables/SubmitApprovalsForm'
import ApprovalTable from '../../components/DustSweeperTables/ApprovalTable'
import { WalletChecker } from "../../components/WalletChecker";
import { ethers } from "ethers";
import PageContainer from "../../components/PageContainer/PageContainer";
import { Card } from "../../components/Card/Card";
import { HeadingGroup } from "../../components/Forms/HeadingGroup";
import HoldingsList from "../../components/Holdings/HoldingsList";
const { default: Resolution } = require("@unstoppabledomains/resolution");
import { ZapperNetworkForChain } from "../../components/Holdings/networkForChain";
// import { useSubgraph } from "../../hooks/useSubgraph";
import { useCovalent } from "../../hooks/useCovalent";
import { useWeb3React } from "@web3-react/core";
import { ZAPPER_NETWORK, CovalentNetworkForID } from "../../utils/constants";

export default function Page() {

  return (
    <PageContainer>
      <Box w={['97%', '90%', '60%']} mx="auto" >
        <VStack>
          <Center>
            <HeadingGroup title="Dust Sweeper  🧹" size="lg" />
          </Center>
          <VStack>
            <Text>🧹  Clean out small token balances in your wallet without paying gas!</Text>
            <Text>👆  Connect your wallet and approve tokens (costing $8-15 each) to get rid off.</Text>
            <Text>🤝  ETH will appear in your wallet once a bot pays gas to fill the trade.</Text>
          </VStack>
        </VStack>
        <Tabs variant='soft-rounded' colorScheme='purple' mt="8">
          <Center>
            <TabList>
              <Tab>Clean Wallet</Tab>
              <Tab>View Opportunities</Tab>
            </TabList>
            </Center>
          <TabPanels>
            <TabPanel>
              <SubmitApprovalsForm />
            </TabPanel>
            <TabPanel>
              <ApprovalTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </PageContainer>
  );
}
