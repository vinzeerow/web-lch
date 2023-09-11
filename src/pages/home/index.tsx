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



const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};
const ListCardUnit = [
    {
        title: 'CHSV Càng Long',
        image: 'https://source.unsplash.com/random?wallpapers',
        linkText: 'Continue reading…',
    },
    {
        title: 'CHSV Cầu Kè',
        image: 'https://source.unsplash.com/random?wallpapers',
        linkText: 'Continue reading…',
    },
    {
        title: 'CHSV Cầu Ngang',
        image: 'https://source.unsplash.com/random?wallpapers',
        linkText: 'Continue reading…',
    },
    {
        title: 'CHSV Châu Thành',
        image: 'https://source.unsplash.com/random?wallpapers',
        linkText: 'Continue reading…',
    },
    {
        title: 'CHSV Duyên Hải',
        image: 'https://source.unsplash.com/random?wallpapers',
        linkText: 'Continue reading…',
    },
    {
        title: 'CHSV TP. Trà Vinh',
        image: 'https://source.unsplash.com/random?wallpapers',
        linkText: 'Continue reading…',
    },
    {
        title: 'CHSV Tiểu Cần',
        image: 'https://source.unsplash.com/random?wallpapers',
        linkText: 'Continue reading…',
    },
    {
        title: 'CHSV Trà Cú',
        image: 'https://source.unsplash.com/random?wallpapers',
        linkText: 'Continue reading…',
    },
    {
        title: 'CHSV Trà Vinh - Hòa An',
        image: 'https://source.unsplash.com/random?wallpapers',
        linkText: 'Continue reading…',
    }
]

const HomePage = () => {
    return (
        <div>
            <Container sx={{ py: 4 }} maxWidth="lg">
                <Cover post={mainFeaturedPost}/>
                <ListCard card={ListCardUnit} />
            </Container>  
        </div>
    );
}

export default HomePage;
