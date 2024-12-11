import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import contacts from './contact';

const createCard = (contact) => {
  return <Card
      key={contact.id}
      title={contact.title}
      description={contact.description}
      imageUrl={contact.imageUrl} />
}

const App = () => {
  return (
    <>
      <Header />
        <main>
          {contacts.map(createCard)}
        </main>
      <Footer/>
    </>
  );
};

export default App;
