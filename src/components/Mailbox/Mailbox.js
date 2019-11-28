import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 300px;
  margin: 0 auto;
  background: #ccc;
  text-align: center;
  color: ${props => (props.changeColor ? "red" : "blue")};
`;

const Mailbox = ({ name, unreadMessages }) => (
  <StyledDiv>
    <div>
      <h1>Hello {name}.</h1>
      {unreadMessages.length > 0 ? (
        <p>You have {unreadMessages.length} unread messages.</p>
      ) : (
        <p>No unread messages.</p>
      )}

      <h2>
        {unreadMessages.length > 0 && (
          <p>You have {unreadMessages.length} unread messages.</p>
        )}
      </h2>
    </div>
  </StyledDiv>
);

export default Mailbox;
