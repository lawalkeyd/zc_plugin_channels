import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function TabsRows({ colors }) {
  return (
    <>
      <TabList borderBottom="0" justifyContent="space-between" mt={4} pt={4}>
        <Tab p={0} color="#fff">
          About
        </Tab>
        <Tab p={0} color="#fff">
          Members
        </Tab>
        <Tab p={0} color="#fff">
          Integration
        </Tab>
        <Tab p={0} color="#fff">
          Settings
        </Tab>
      </TabList>
    </>
  );
}
