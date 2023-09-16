import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Cover from './components/Cover';
import ListCard from './components/ListCard';
import Hero from './components/Hero';



const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: '/images/cover-3.jpg',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};
const ListCardUnit = [
    {
        title: 'CHSV Càng Long',
        image: '/images/cover-card-canglong.jpg',
        avatar: '/images/logo-canglong.png',
        linkText: 'Continue reading…',
        linkFanpage: "https://www.facebook.com/chsvcanglongdhct"
    },
    {
        title: 'CHSV Cầu Kè',
        image: '/images/cover-card-cauke.jpg',
        avatar: '/images/logo-cauke.png',
        linkText: 'Continue reading…',
        linkFanpage: "https://www.facebook.com/chsvcaukedhct"
    },
    {
        title: 'CHSV Cầu Ngang',
        image: 'https://source.unsplash.com/random?wallpapers',
        avatar: '/images/logo-caungang.jpg',
        linkText: 'Continue reading…',
        linkFanpage: "https://www.facebook.com/profile.php?id=100083345082184"
    },
    {
        title: 'CHSV Châu Thành',
        image: 'https://source.unsplash.com/random?wallpapers',
        avatar: '/images/logo-chauthanh.jpg',
        linkText: 'Continue reading…',
        linkFanpage: "https://www.facebook.com/chsvchauthanhtravinh"
    },
    {
        title: 'CHSV Duyên Hải',
        image: 'https://source.unsplash.com/random?wallpapers',
        avatar: '/images/logo-duyenhai.png',
        linkText: 'Continue reading…',
        linkFanpage: "https://www.facebook.com/CHSVDuyenHaiCTU"
    },
    {
        title: 'CHSV TP. Trà Vinh',
        image: 'https://source.unsplash.com/random?wallpapers',
        avatar: '/images/logo-tptv.jpg',
        linkText: 'Continue reading…',
        linkFanpage: "https://www.facebook.com/chsvtptravinh.ctu"
    },
    {
        title: 'CHSV Tiểu Cần',
        image: 'https://source.unsplash.com/random?wallpapers',
        avatar: '/images/logo-tieucan.png   ',
        linkText: 'Continue reading…',
        linkFanpage: "https://www.facebook.com/profile.php?id=100083577125972"
    },
    {
        title: 'CHSV Trà Cú',
        image: 'https://source.unsplash.com/random?wallpapers',
        avatar: '/images/logo-tracu.jpg',
        linkText: 'Continue reading…',
        linkFanpage: "https://www.facebook.com/profile.php?id=100087659095360"
    },
    {
        title: 'CHSV Trà Vinh - Hòa An',
        image: 'https://source.unsplash.com/random?wallpapers',
        avatar: 'https://source.unsplash.com/random?wallpapers',
        linkText: 'Continue reading…',
        linkFanpage: "https://www.facebook.com/profile.php?id=100087010830546"
    }
]

const HomePage = () => {
    return (
        <div>
            <Container sx={{ pt:1, pb:12}} maxWidth="lg">
                <Cover post={mainFeaturedPost}/>
                <Hero/>
                <ListCard card={ListCardUnit} />
            </Container>  
        </div>
    );
}

export default HomePage;
