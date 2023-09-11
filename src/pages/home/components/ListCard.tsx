import * as React from 'react';
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
import { CardUnit } from '../../../type';


interface ListCardItem {
    card: CardUnit[];
}
export default function ListCard(props: ListCardItem) {

    return (
        <>
            <Grid container spacing={4}>
                {props?.card.map((card, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardMedia
                                component="div"
                                sx={{
                                    // 16:9
                                    pt: '56.25%',
                                }}
                                image={card.image}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {card.title}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Button href={card.linkText} size="small">Chi tiết</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}