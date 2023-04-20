import {Card} from "./card";
import axios from "axios";
import {useState} from "react";
import {useEffect} from "react";
import { useTheme } from './use-theme'

export const Main = () => {
    const {setTheme } = useTheme()

    const handleLightThemeClick = () => {
        setTheme('light')
    }
    const handleDarkThemeClick = () => {
        setTheme('dark')
    }

    const [url,setUrl]=useState("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=0a1b51b57d4bfa469db8bbb6587af3b8&hash=3a0abd8364766c83d116ab49a7052bb3")
    const [item,setItem]=useState()
    const [search,setSearch]=useState("");
    useEffect(()=>{
        const fetch=async()=>{
            const res=await axios.get(url)
            setItem(res.data.data.results)
        }
        fetch();
    },[url])

    const searchMarvel=(e)=>{
        if (e.key === "Enter") {
            setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=0a1b51b57d4bfa469db8bbb6587af3b8&hash=3a0abd8364766c83d116ab49a7052bb3`)
        }
    }

    return (
        <>
            <div className="header">
                <div className="header__cont">
                    <img src="./Images/logo.svg" alt="logo" className="logo" />
                    <div className="search-bar">
                        <input type="text" placeholder='Search Here'
                               className='search'
                               onChange={e=>setSearch(e.target.value)}
                               onKeyPress={searchMarvel}/>
                    </div>
                </div>
                <div className="btn-cont">
                    <button className="light" onClick={handleLightThemeClick}>Light</button>
                    <button className="dark" onClick={handleDarkThemeClick}>Dark</button>
                </div>
            </div>
            <div className="bg">
                <picture >
                    <source media="(min-width: 1600px)" srcSet="./Images/bg-1600.jpg"/>
                    <source media="(min-width: 1360px)" srcSet="./Images/bg-1360.jpg"/>
                    <source media="(min-width: 1024px)" srcSet="./Images/bg-1024.jpg"/>
                    <img src="./Images/bg-1920.jpg" alt="background" className="bg__img" />
                </picture>
            </div>
            <div className="content">

                {
                    (!item)?<p>Not Found</p>:<Card data={item}/>
                }
            </div>
        </>
    )
};