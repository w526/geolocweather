
import './App.css';
import { useEffect, useState } from 'react';
import Weather from './components/Weather';

function App() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position)
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        setIsLoading(false)
      }, (error) => {
        console.log(error)
        alert("Paikannus epäonnistui")
      })
    }
  })

  if(isLoading){
    return <p>Ladataan sijaintia...</p>
  }
  else{
  return (
    <div>
      <h4>Sijaintisi on: {latitude}, {longitude}</h4>
      <Weather latitude={latitude} longitude={longitude} />
    </div>
    
  )}
}

export default App;
