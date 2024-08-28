import { BiMoon } from "react-icons/bi"; 
import { BsSunFill } from "react-icons/bs"; 
import { AiOutlineSearch } from "react-icons/ai"; 
import React, { useEffect, useState } from 'react';
import { Container } from '../../utils/index';
import axios from "../../api/axios";
import { useDispatch } from "react-redux";

const Header = () => {
    const dispatch = useDispatch();
    const [theme, setTheme] = useState('light');
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        document.body.style.backgroundColor = theme === 'dark' ? '#4c51bf' : '#FFFFFF'; 
        document.body.style.color = theme === 'dark' ? '#FFFFFF' : '#000000';
    }, [theme]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios(`forecast.json?key=644f6ce0ca9e401ebb891832211707&q=${searchValue}&days=7&aqi=yes&alerts=yes`);
            const data = response.data;
            dispatch({ type: "SEARCH_DATA", data });
            setSearchValue('');
        } catch (error) {
            console.log(searchValue);
        }
    };

    return (
        <>
            <header>
                <Container>
                    <div className="flex items-center justify-between">
                        <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-indigo-600'}`}>
                            Weather App
                        </h1>
                        <form onSubmit={handleSearch} className="border bg-white border-gray-300 p-2 rounded-[30px] flex max-w-[600px] flex-1">
                            <input
                                value={searchValue} placeholder="Search for a city..."c
                                onChange={(e) => setSearchValue(e.target.value)}
                                type="text"
                                className="flex-1 outline-none border-none text-lg text-black"
                            />
                            <button>
                                <AiOutlineSearch className="text-[26px] text-black p-1 rounded-full" />
                            </button>
                        </form>
                        <div className="border border-gray-300 rounded-[30px] flex relative items-center">
                            <input
                                onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                                id="theme-toggle"
                                type="checkbox"
                                className="appearance-none w-[60px] h-[30px]"
                            />
                            <label
                                htmlFor="theme-toggle"
                                className={`w-[30px] h-[30px] ${theme === 'light' ? 'bg-yellow-400' : 'bg-indigo-700'} text-white rounded-full cursor-pointer flex justify-center items-center absolute transition-all duration-300 ${theme === 'light' ? 'left-0' : 'left-[30px]'}`}
                            >
                                {theme === 'light' ? <BsSunFill /> : <BiMoon />}
                            </label>
                        </div>
                    </div>
                </Container>
            </header>
        </>
    );
};

export default Header;
