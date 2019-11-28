import React from "react";
import Button from "./Button/Button";
import Button2 from "./Button2/Button2";
import Button3 from "./Button3/Button3";
import Mailbox from "./Mailbox/Mailbox";

/* <> </>  - <Fragments> </Fragments> */
const App = () => {
  return (
    <>
      <Button propDisabled={false} />
      <hr />
      <Button2 propDisabled={true} />
      <hr />
      <Button3 propDisabled={false} />
      <hr />
      <Mailbox name="Max" unreadMessages={[1, 2]} changeColor={true} />
    </>
  );
};

export default App;
