import React, {useEffect, useState} from 'react'
// import './style.css'
import Weahtercard from './Weahtercard';


const Temp = () => {
    const [searchValue, setSearchValue] = useState("pune");
    const [tempInfo, setTempinfo]=useState(" ");

    const getweatherInfo=async()=>{
        try{
            let url=` https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=fe5f127025970861de08afcd7ac1e7e1`;

            let res=await fetch(url);
            let data=await res.json();

            const {temp, humidity, pressure}=data.main;
            const {main:weathermood }=data.weather[0];
            const {name }=data;
            const {speed}=data.wind;
            const {country, sunset}=data.sys;

            const myNewweatherInfo={
                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset
            };

            setTempinfo(myNewweatherInfo);


            console.log(temp)



        } catch(error){
            console.log(error)
        }
    };

    useEffect(()=>{
        getweatherInfo();
    }, )




  return (
   
    <>
    <div className='wrap'>
        <div className='search'>
            <input type="search"
            placeholder='search...'
            autoFocus
            id='search'
            className='searchTerm'
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
            />
            <button className='searchButton' type='button' onClick={getweatherInfo}>Search</button>
        </div>
    </div>
    <Weahtercard tempInfo={tempInfo}/>
    



    </>
  )
}

export default Temp