import { useState } from 'react'
import './App.css'
import Header from "./Components/Header/index.jsx";
import Head from "./Components/Head/index.jsx";
import Video from "./Components/Video/index.jsx";
import Values from "./Components/Values/index.jsx";
import Services from "./Components/Services/index.jsx";
import Portfolio from "./Components/Portfolio/index.jsx";
import Partners from "./Components/Partners/index.jsx";
import Clients from "./Components/Cliets/index.jsx";
import Statistic from "./Components/Statistic/index.jsx";
import Ways from "./Components/Ways/index.jsx";
import Footer from "./Components/Footer/index.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Head/>
      <Video/>
        <Values/>
        <Services/>
        <Portfolio/>
        <Partners/>
        <Clients/>
        <Statistic/>
        <Ways/>
        <Footer/>
    </>
  )
}

export default App
