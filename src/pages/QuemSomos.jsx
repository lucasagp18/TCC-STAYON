import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import lucas from "../assets/lucas.jpeg";
import pedro from "../assets/pedro.jpg";
import victor from "../assets/victor.jpg";
import guilherme from "../assets/guilherme.jpg";
import stayOnLogo from "../assets/stayon.png"; 
import { Link } from "react-router";


export function QuemSomos() {
    const { theme } = useContext(ThemeContext);

    const teamMembers = [
        {
            id: 1,
            handle: '@souza_gui07',
            image: guilherme,
            position: 'top-left'
        },
        {
            id: 2,
            handle: '@lucas.agp18',
            image: lucas,
            position: 'top-right'
        },
        {
            id: 3,
            handle: '@pedrokshss',
            image: pedro,
            position: 'bottom-left'
        },
        {
            id: 4,
            handle: '@victorferraz.gs_',
            image: victor,
            position: 'bottom-right'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#DAE3E5] to-[#E5E6E6] dark:from-[#001228] dark:to-[#35363D] transition-colors duration-300 font-poppins font-bold text-[48px]">


            <div className="md:hidden px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-xl bg-gradient-to-r from-[#2A42B2] to-[#4A6FFF] bg-clip-text text-transparent mb-0 font-poppins">Conheça nossa equipe</h1>
                </div>

                <div className="space-y-10 flex flex-col items-center">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-gray-200 dark:border-gray-600 shadow-md">
                                <img
                                    src={member.image}
                                    alt={member.handle}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="text-blue-700 font-medium text-lg font-inter">{member.handle}</span>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">

                    <Link to="/referencias"
                        className="hover:text-blue-800 underline underline-offset-2 dark:text-gray-300 font-poppins font-bold text-[20px]">
                        Referências
                    </Link>

                </div>
            </div>


            <div className="hidden md:block px-8 py-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-2">
                        <h1 className="text-4xl font-semibold bg-gradient-to-r from-[#2A42B2] to-[#4A6FFF] bg-clip-text text-transparent mb-6 font-poppins font-bold text-[48px]">Conheça nossa equipe</h1>
                    </div>

                    <div className="relative flex items-center justify-center min-h-[600px]">

                        <div className="absolute inset-0 flex items-center justify-center">
                            <img
                                src={stayOnLogo}
                                alt="StayOn Logo"
                                className="w-auto h-150 object-contain"
                            />
                        </div>


                        <div className="absolute top-16 left-24">
                            <div className="flex flex-col items-center">
                                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-gray-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <img
                                        src={teamMembers[0].image}
                                        alt={teamMembers[0].handle}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <span className="text-blue-500 font-medium text-lg font-inter">{teamMembers[0].handle}</span>
                            </div>
                        </div>


                        <div className="absolute top-16 right-24">
                            <div className="flex flex-col items-center">
                                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-gray-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <img
                                        src={teamMembers[1].image}
                                        alt={teamMembers[1].handle}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <span className="text-green-900 font-medium text-lg font-inter">{teamMembers[1].handle}</span>
                            </div>
                        </div>


                        <div className="absolute bottom-16 left-24">
                            <div className="flex flex-col items-center">
                                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-gray-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <img
                                        src={teamMembers[2].image}
                                        alt={teamMembers[2].handle}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <span className="text-pink-900 font-medium text-lg font-inter">{teamMembers[2].handle}</span>
                            </div>
                        </div>


                        <div className="absolute bottom-16 right-24">
                            <div className="flex flex-col items-center">
                                <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-2 border-gray-200 dark:border-gray-600 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <img
                                        src={teamMembers[3].image}
                                        alt={teamMembers[3].handle}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <span className="text-gray-500 font-medium text-lg font-inter">{teamMembers[3].handle}</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-0">



                        <Link to="/referencias"
                            className="hover:text-blue-800 underline underline-offset-2 dark:text-gray-300 font-poppins font-bold text-[30px]">
                            Referências
                        </Link>




                    </div>
                </div>
            </div>
        </div>
    );
};
