import React from "react";
import Product1 from "./Product1";
import Product2 from "./Product2";
import Mailbox from "./Mailbox";
import Techlist from "./Techlist";

const url =
  "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
const price = 10.99;

const technologies = [
  { id: "id-1", name: "JavaScript" },
  { id: "id-2", name: "React" },
  { id: "id-3", name: "React Router" },
  { id: "id-4", name: "Redux" }
];

/* <> </>  - <Fragments> </Fragments> */
const App = () => {
  return (
    <>
      <Techlist items={technologies} />

      <Mailbox name="Max" unreadMessages={[1, 2, 3, 4]} />

      <Product1 productUrl={url} productPrice={price}>
        Hello world!
      </Product1>

      <Product2
        // product2Url="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        product2Alt="Fries and Burger"
        product2Name="Fries and Burger"
        product2Price={14.29}
      />
    </>
  );
};

export default App;
