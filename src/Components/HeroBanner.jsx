import React from 'react';
import { Box, Stack , Typography , Button  } from '@mui/material';
import BannerHeroImage from "../assets/images/banner.png"

const HeroBanner = () => {
    return (
        <Box sx={{
            mt:{lg:'220px', xs: '200px'},
            mr:{sm:'50px'},

        }} position="relative" p="20px">

            <Typography color="#FF2625" fontWeight="600" fontSize="26px">
                باشگاه ورزشی
            </Typography>

            <Typography fontWeight={700}
                        sx={{fontSize:{lg:'44px', xs:'40px'}}}
                        mb="23px" mt="30px">
                عرق کنید، بخندید <br /> و تکرارش کنید
            </Typography>
            <Typography fontSize="22px"
                        lineHeight="35px"
                        mb={4}>
                موثرترین تکنیک ها را بررسی کنید
            </Typography>

            <Button  variant="contained"  color="error" href="#exercises"
             sx={{backgroundColor:'#ff2625',padding:'15px'}} fontSize="22px">جستجوی تمرین ها</Button >

            

            <img src={BannerHeroImage} alt="banner" className='hero-banner-img' />
        </Box>
    );
};

export default HeroBanner;