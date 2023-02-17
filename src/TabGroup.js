import React from "react";
import styled from "styled-components";

const Tab = styled.button`
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: none;

 ${({ active }) =>
   active &&
   `
     border-bottom:2px solid black;
     opacity :1; 
 `}
`;

function TabGroup(props) {
  
    return (
      <>
        <div>
          {props.tabs.map((tab) => (
            <Tab
              key={tab.id}
              active={props.active === tab.id}
              onClick={() => props.onSelect(tab.id)}
            >
              {tab.heading} {/* display tab heading */}
            </Tab>
          ))}
        </div>
        <p />
        {/* display fetched data or loading or error message */}
        {props.loading ? (
          <p>Loading...</p>
        ) : props.error ? (
          <p>Error: {props.error.message}</p>
        ) : (
          <p>{props.data.map((q, idx) => 
            <p key={idx}>{idx}. {q.qtype} - {q.question? q.question: q._id}</p>
            )}</p>
        )}
      </>
    );
   }
   
   export default TabGroup;