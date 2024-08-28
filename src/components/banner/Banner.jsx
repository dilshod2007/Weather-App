import { BsSun, BsSunriseFill, BsSunsetFill } from "react-icons/bs"; 
import { WiHumidity } from "react-icons/wi"; 
import React from 'react';
import { Container } from '../../utils/index';
import { useSelector } from 'react-redux';

const Banner = () => {
    const data = useSelector((state) => state.searchData);

    if (!data) {
        return null;
    }

    const latitude = data.location.lat;
    const longitude = data.location.lon;

    const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29103.343074109045!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1724786437993!5m2!1sru!2s`;

    return (
        <>
            <Container>
                <div className='bg-banner bg-cover bg-center rounded-lg h-[450px] mt-[50px]' style={{ boxShadow: "0 4px 15px blueviolet" }}>
                    <div className='bg-linear-color w-full h-full'>
                        {data && ( 
                            <>
                                <div className='flex justify-between items-center p-4 '>
                                    <div className='mt-[100px]'>
                                        <h2>
                                            <img
                                                className='w-[100px]'
                                                src={data.current.condition.icon}
                                                alt="Weather Icon"
                                            />
                                        </h2>
                                        <h2 className='text-white text-9xl font-semibold'>
                                            {data.current.temp_c}°C
                                        </h2>
                                        <br />
                                        <div className='flex gap-4 items-center ml-4'>
                                            <h1 className='text-white text-4xl font-bold'>
                                                {data.location.country},
                                            </h1>
                                            <h1 className='text-white text-4xl font-bold'>
                                                {data.location.name}
                                            </h1>
                                        </div>
                                    </div>
                                    <div className='mt-[300px] ml-4'>
                                        <h1 className='text-white text-2xl font-bold'>
                                            {new Date(data.current.last_updated).toLocaleTimeString()}
                                        </h1>
                                        <h2 className='text-white text-lg'>
                                            {new Date(data.current.last_updated).toLocaleDateString()}
                                        </h2>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <div>
                    <iframe
                        src={googleMapsUrl}
                        className='w-full h-[450px] mt-[50px] rounded-lg'
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>

                <div>
                    {data && (
                        <div
                            className="w-[460px] h-[196px] rounded-[30px] p-8 flex items-center justify-between mt-[50px] bg-white"
                            style={{ boxShadow: "0 4px 15px blueviolet" }}
                        >
                            <div className="text-left">
                                <div className="flex gap-4 w-[150px] h-[76px] text-[blueviolet] text-[18px]">
                                    <WiHumidity className="text-[54px]" />
                                    <p className="text-black text-[18px]">
                                        Humidity {data.current.humidity}%
                                    </p>
                                </div>
                                <div className="flex gap-4 w-[150px] h-[66px] text-[blueviolet] text-[18px]">
                                    <BsSun className="text-[54px]" />
                                    <p className="text-black text-[18px]">
                                        UV Index: {data.current.uv} out of 10
                                    </p>
                                </div>
                            </div>

                            <div className="h-full w-[1px] bg-black mx-4"></div>

                            <div className="text-right">
                                <div className="flex gap-4 w-[150px] h-[76px] text-[blueviolet] text-[18px]">
                                    <BsSunsetFill className="text-[44px]" />
                                    <p className="text-black text-[18px]">
                                        Sunrise {data.forecast.forecastday[0].astro.sunrise}
                                    </p>
                                </div>
                                <div className="flex gap-4 w-[150px] h-[66px] text-[blueviolet] text-[18px]">
                                    <BsSunriseFill className="text-[54px]" />
                                    <p className="text-black text-[18px]">
                                        Sunset {data.forecast.forecastday[0].astro.sunset}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </>
    );
};

export default Banner;
