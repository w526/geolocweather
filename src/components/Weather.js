import { useEffect, useState } from "react"
import axios from "axios"


const icon = 'http://openweathermap.org/img/wn'
const key = 
const URL = 'https://api.openweathermap.org/data/2.5/weather?'

export default function Weather({latitude,longitude}) {
    const [temp, setTemp] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [direction, setDirection] = useState(0);
    const [description, setDescription] = useState('');
    const [icon, setIcon] = useState('');

    useEffect(() => {
        const address = URL + 'lat=' +latitude + '&lon='+longitude+'&units=metric'+'&appid='+key
        console.log(address)

    axios.get(address)
        .then((response) => {
            console.log(response.data);
            setTemp(response.data.main.temp);
            setSpeed(response.data.wind.speed);
            setDirection(response.data.wind.deg);
            setDescription(response.data.weather[0].description);
            setIcon(icon + response.data.weather[0].icon);
        }).catch(error => {
            alert(error);
        });
        }, [])

        return(
            <div>
            <h4>{temp} astetta lämmintä</h4>
            <h4> Tuulennopeus {speed} m/s, suunnasta {direction} </h4>
            <h4>{description}</h4>
            <img src={icon} alt=''/>
            </div>
        )
    
}