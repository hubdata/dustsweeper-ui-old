import Head from "next/head";
import Link from "next/link";
import {
  Box,
  Flex,
  Stack,
  Circle,
} from "@chakra-ui/react";
import { BiBuoy, BiCog } from "react-icons/bi";

import { BsClockHistory } from "react-icons/bs";

import { IoWalletSharp } from "react-icons/io5";

import { IoMdContacts } from "react-icons/io";

import { RiHandCoinLine, RiSendPlaneFill } from "react-icons/ri";
import { GiParachute } from "react-icons/gi";

import { MdAccountBalance } from "react-icons/md";
import { NavItem } from "./NavItem";
import { useRouter } from "next/router";

export default function Sidebar(props) {
  const router = useRouter();
  return (
    <>

      <Box w="64" bg="gray.900" color="white" fontSize="sm">
        <Flex h="full" direction="column" px="4" py="4">
          <Stack spacing="2" flex="1" overflow="auto" pt="8">
            <Link href="/payments/disperse">
              <a>
                <NavItem icon={<RiSendPlaneFill />} label="Send Batch Payment" />
              </a>
            </Link>
            <Link href="/airdrop/send">
              <a>
                <NavItem icon={<GiParachute />} label="Send Airdrop" />
              </a>
            </Link>
            <Link href="/airdrop/claim">
              <a>
                <NavItem icon={<RiHandCoinLine />} label="Claim Airdrop" />
              </a>
            </Link>
            <NavItem icon={<BsClockHistory />} label="Past Transactions" />
          </Stack>
        </Flex>
      </Box>
    </>
  );
}
