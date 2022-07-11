import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import ApplicationForm from "./application.tab";

const StudentTab = () => {

  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab>Apply</Tab>
        <Tab>Applied</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
        <ApplicationForm/>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default StudentTab;
