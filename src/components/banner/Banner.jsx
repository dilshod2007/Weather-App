import React, { useEffect } from 'react';
import { Container } from '../../utils/index';
import { useSelector, useDispatch } from 'react-redux';

const Banner = () => {
    const data = useSelector((state) => state.searchData);
    console.log(data);

   
    return (
        <>
            <Container>
                <div className='bg-banner bg-cover bg-center rounded-lg h-[450px] mt-[50px]'>
                    <div className='bg-linear-color w-full h-full '>
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
                                        <div className='flex gap-4 items-center ml-4 '>
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
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29103.343074109045!2d69.24756967719266!3d41.327213085564374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1724786437993!5m2!1sru!2s" className='w-full h-[450px] mt-[50px] rounded lg h-[300px] mt-[50px]' frameBorder="0" allowFullScreen ></iframe>
                </div>
                <div>
                    {
                        data && (
                            <div>
                              <h1>{data.current.condition.text}</h1>

                            </div>
                        )
                    }
                </div>
            </Container>
        </>
    );
};

export default Banner;
