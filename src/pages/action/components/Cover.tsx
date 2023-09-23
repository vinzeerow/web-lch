import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CoverActivity } from '../../../type';
import styled from 'styled-components';

interface MainFeaturedPostProps {
  post: CoverActivity
}

export default function Cover(props: MainFeaturedPostProps) {
  const { post } = props;

  return (
    <CsContainer>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${post.image})`,
        }}
      >
        {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
                height: "300px"
              }}
            >
            </Box>
          </Grid>
        </Grid>

      </Paper>
    </CsContainer>

  );
}
const CsContainer = styled.div`
    @media screen and (max-width:600px) {
        display:none;
    }

`