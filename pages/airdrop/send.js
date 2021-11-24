import {
  Box,
  Stack,
  useColorModeValue
} from "@chakra-ui/react";
import PageContainer from '../../components/PageContainer/PageContainer'
import { Card } from '../../components/Card/Card'
import { HeadingGroup } from '../../components/Forms/HeadingGroup'
import SendAirdropForm from '../../components/Forms/AirdropForms/SendAirdropForm'

export default function Page() {
  let props

  return (
    <PageContainer>
      <Box bg={useColorModeValue('purple.50', 'purple.800')} py="10">
        <Box maxW="xl" mx="auto">
          <Stack spacing="12">
            <Stack as="section" spacing="6" {...props}>
              <HeadingGroup
                title="Send Airdrop"
                description="Send Tokens or FTs to many recipients, who can claim them at any time."
              />
              <Card>
                <SendAirdropForm />
              </Card>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </PageContainer>
  );
}