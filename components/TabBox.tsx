import { Box, Flex, Heading, Spacer, Tab, TabList, TabPanel, TabPanels, Tabs, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import Runes from './runes/Runes'

const TabBox = () => {
    return (
        <Tabs isFitted variant='enclosed' w='97%'>
            <TabList>
                <Tab><Heading size="lg" mb={3}>Runes</Heading></Tab>
                <Tab><Heading size="lg" mb={3}>Items</Heading></Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Runes />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}

export default TabBox