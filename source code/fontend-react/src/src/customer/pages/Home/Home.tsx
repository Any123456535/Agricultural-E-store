import React, { useState } from 'react'
import Banner from './Banner/Banner'
import HomeCategory from './HomeCategory/HomeCategory'
import TopBrand from './TopBrands/Grid'
import ElectronicCategory from './Care Category/CareCategory'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Backdrop, Button, CircularProgress } from '@mui/material'

import { useNavigate } from 'react-router-dom'
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useAppSelector } from '../../../Redux Toolkit/Store'
import DealSlider from './Deals/Deals'



const Home = () => {
    const [showChatBot, setShowChatBot] = useState(false)
    const { homePage } = useAppSelector(store => store)
    const navigate = useNavigate();

    const handleShowChatBot = () => {
        setShowChatBot(!showChatBot)
    }
    const handleCloseChatBot = () => {
        setShowChatBot(false)
    }
    const becomeSellerClick = () => {
        navigate("/become-seller")
    }
    return (
        <>
        {(!homePage.loading)?<div className='space-y-5 lg:space-y-10 relative'>
         
            {/* <Banner /> */}


          
        {homePage.homePageData?.deals &&    <section className='pt-10'>
           
                <DealSlider/>
            </section>}
           
          

            
    


        </div>: <Backdrop
                open={true}

            >
                <CircularProgress color="inherit" />
            </Backdrop>}
       
        </>
        
    )
}

export default Home