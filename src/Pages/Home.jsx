import React from 'react';
import { useLoaderData } from 'react-router';
import Hero from '../Components/Hero';
import LawyersContainer from '../Components/LawyersContainer';

const Home = () => {
    const lawyers = useLoaderData();
    //const [lawyers, setLawyers] = useState(data);
    return (
        
        <div>
            <Hero></Hero>
            <LawyersContainer lawyers={lawyers}></LawyersContainer>
        </div>
    );
};

export default Home;