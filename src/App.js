import React, { useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
// import Header from './components/header'

function App() {

  // const [photo, setPhoto] = useState()
  // const [date, setDate] = useState()
  // const [description, setDescription] = useState ();
  // const [title, setTitle] = useState ();
  //       useEffect (() =>{
  //           axios.get("https://api.nasa.gov/planetary/apod?api_key=HNLQulJo3avR2EshFeCHGKZyeXLr46GGjQbG9sLr&date=2020-08-13")
  //           .then(response => {
  //               console.log('hey look it works',response)
  //                 setTitle(response.data.title)
  //                 setPhoto(response.data.url)
  //                 setDescription(response.data.explanation)
  //                 setDate(response.data.date)
  //           })
  //           .catch(error => console.log('OOF',error))
  //       },[])
  
  const [nasaData, getNasaData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=HNLQulJo3avR2EshFeCHGKZyeXLr46GGjQbG9sLr&date=2020-08-13`)
      .then((response) => {
        getNasaData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(nasaData);


    return (
      <div className ="nasa-info">
        {/* <Header title = {nasaData.title}/> */}
            <h1>NASA Photo of the Day</h1>
            <h2> Title: {nasaData.title} </h2>
            <h3> Date Captured: {nasaData.date}</h3>
            <img src= {nasaData.url} alt = "photo" />
            <h4>Photo Information Below</h4>
            <p> {nasaData.explanation} </p>
          </div>
      )
    }

export default App;


