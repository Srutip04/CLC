import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import ApplicationForm from "./application.tab";
import Formtab from "./forms.tab";
import { AuthState } from "../../context/AuthContext";




const StudentTab = () => {
  const { user } = AuthState();
  console.log(user)

  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab>Apply</Tab>
        <Tab>Applied</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
        <ApplicationForm user={user}/>
        </TabPanel>
        <TabPanel>
        <Formtab user={user}/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default StudentTab;
