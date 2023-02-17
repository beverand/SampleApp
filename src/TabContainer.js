import React, { useState } from "react";
import TabGroup from "./TabGroup"; // import presentational component
import useFetch from "./useFetch"; // import custom hook

function TabContainer(props) {
  const [active, setActive] = useState(props.tabs[0].id); // start with the first tab
  //const [parameter, setParameter] = useState(props.tabs[0].data)
 
  const handleSelect = (tabId) => {
    setActive(tabId); // update active state
    if (props.onSelect) props.onSelect(tabId); // call onSelect prop if defined
  };

   // find the tab object that matches the active tab id
   const activeTab = props.tabs.find((tab) => tab.id === active);

   // use custom hook to fetch data based on active tab data property
   const { data, loading, error } = useFetch(
     `https://joyous-moth-long-johns.cyclic.app${activeTab.data}` // access data property using dot notation
     // or `https://example.com/api${activeTab["data"]}` // access data property using bracket notation
   );

  return (
    <TabGroup
      tabs={props.tabs} // pass tabs prop to presentational component
      active={active} // pass active state as prop
      onSelect={handleSelect} // pass handleSelect function as prop
      data={data} // pass fetched data as prop
      loading={loading} // pass loading state as prop
      error={error} // pass error state as prop
    />
  );
}

export default TabContainer;