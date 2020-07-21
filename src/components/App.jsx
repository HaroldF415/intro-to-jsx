import React from "react";

// importing custom components
import Header from "./Header";
import Footer from "./Footer";
import ListHeading from "./ListHeading";
import AnimeList from "./AnimeList";

function App() {
  return (
    <div>
      <Header />

      <ListHeading />

      <AnimeList />

      <Footer />
    </div>
  );
}

export default App;
