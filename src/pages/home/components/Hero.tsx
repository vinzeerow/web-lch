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
import { CoverActivity } from '../../../type';
import styled from 'styled-components';

interface MainFeaturedPostProps {
  post: CoverActivity
}

export default function Hero() {
  

  return (
    <CsContainer>
      <Typography gutterBottom color="#830000" variant="h4" component="h5">
        CÁC CHI HỘI SINH VIÊN TRỰC THUỘC
      </Typography>
      <Typography color="#000" variant="subtitle1" align="center" gutterBottom>
        Mỗi Chi hội sinh viên đại diện cho tập thể sinh viên của mỗi huyện đang theo học tại Trường Đại học Cần Thơ.<br/> Tất cả được gắn kết với nhau bởi tình đồng hương. Chính tình cảm này đã soi sáng và làm ấm lòng những người con xa xứ,<br/> làm tiền đề cho sự thành lập các Chi hội sinh viên trực thuộc Liên chi hội sinh viên Trà Vinh.
      </Typography>
    </CsContainer>

  );
}
const CsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    gap:0;
    padding-bottom:1rem;
    margin:0 auto;
    align-items: center;
    justify-content: space-between;
`