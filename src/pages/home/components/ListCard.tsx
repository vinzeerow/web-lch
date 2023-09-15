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
                                <Grid container spacing={8}>
                                    <Grid item xs={3}>
                                        <img style={{ borderRadius: "8px", margin: 0 }} width="80px" height="80px" src={card.avatar} alt="" />
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Typography align='left' gutterBottom variant="h6" component="h2">
                                            {card.title}
                                        </Typography>
                                        <CardActions sx={{ p: 0, m: 0 }}>
                                            <Link href={card?.linkFanpage} >
                                                <Button  sx={{ border: "1px solid #830000", fontSize: "12px", textTransform: "inherit", px: "0.5em", m: 0, color: "#830000" }}  size="small">Xem fanpage</Button>
                                            </Link>

                                        </CardActions>
                                    </Grid>
                                </Grid>


                            </CardContent>

                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}