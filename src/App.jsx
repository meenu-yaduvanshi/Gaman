import { useState } from 'react'
import './App.css'
import Nav from "./Components/Nav"
import Card from "./Components/Card"
import Footer from "./Components/Footer"
import Slideshow from './Components/Slideshow'

const App =()=> {
 
  const slides = [
    {
      image: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600',
      heading: 'Heading 1',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elitMaxime, iste nostrum atque laudantium voluptatem, eligendi quia voluptatibus corporis excepturi et laborum numquam'
    },
    {
      image: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600',
      heading: 'Heading 2',
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime, iste nostrum atque laudantium voluptatem, eligendi  quia voluptatibus corporis excepturi et laborum numquam'
    },
    {
      image: 'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600',
      heading: 'Heading 3',
      text: 'This is the third slide'
    }
  ];
  return (
    <>
      <Nav/>
      <Slideshow slides ={slides}/>
      <Footer/>
    </>
  )
}

export default App
