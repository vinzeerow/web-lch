import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { CardActivity } from '../../../type';
import { Container } from '@mui/material';
import styled from 'styled-components';
interface ListCardItem {
    card: CardActivity[];
}
export const OutstandingTab = (props: ListCardItem) => {
    return (

        <>
            {props?.card.map((card, index) => (

                <CsFlex>

                    <CsLeft>
                        <CsImg src={card?.image} alt="" />
                    </CsLeft>

                    <CsRight>
                        <CsFlexColumn>
                            <Typography align='left' gutterBottom variant="h5" component="h6">
                                {card.title}
                            </Typography>
                            <Typography align='left' gutterBottom variant="subtitle1" component="h2">
                                <span style={{ fontWeight: "bold" }}>Thời gian: </span>{card.time}
                            </Typography>
                            <Typography align='left' gutterBottom variant="subtitle1" component="h2">
                                <span style={{ fontWeight: "bold" }}>Địa điểm: </span>{card.address}
                            </Typography>
                            <Typography align='justify' gutterBottom variant="subtitle1" component="h2">
                                {card.description}
                            </Typography>

                        </CsFlexColumn>
                    </CsRight>




                </CsFlex>

            ))
            }

        </>





    )
}

const CsFlex = styled.div`
    display: flex;
    flex-direction: row;
    gap:2rem;

    padding:0;
    margin:0;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    margin-top:1.5rem;
    @media screen and (max-width: 768px){
        flex-direction: column;
        
    }

`
const CsFlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap:0rem;
    padding:0;
    margin:0;
    justify-content: space-between;

`
const CsRight = styled.div`
    width:70%;

    @media screen and (max-width: 768px){
        width:100%;
    }
`
const CsLeft = styled.div`
    width:30%;
    @media screen and (max-width: 768px){
        width:100%;
    }

`
const CsImg = styled.img<{src:string}>`
width:100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-color: grey.800;
    color: #fff;
    background-image: ${({ src }) => `url(${src})`};
`