import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import styled from 'styled-components';
import { contactConfig } from '../../config';

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

interface FooterProps {
  description: string;
  title: string;
}

export default function Footer(props: FooterProps) {
  const { description, title } = props;

  return (
    // <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
    //   <Container maxWidth="lg">
    //     <Typography variant="h6" align="center" gutterBottom>
    //       {title}
    //     </Typography>
    //     <Typography
    //       variant="subtitle1"
    //       align="center"
    //       color="text.secondary"
    //       component="p"
    //     >
    //       {description}
    //     </Typography>
    //     <Copyright />
    //   </Container>
    // </Box>
    <StyledFooter {...props}>
      <ContainerFlex>
        <ColLeft>
          <img src="/images/logo-lchsv-tra-vinh.png?version=1.1" alt="" />
        </ColLeft>
        <ColRight>
          <Typography color="white" variant="h6" align="left" gutterBottom>
            {title}
          </Typography>

          {contactConfig?.map((dt) => {
            const Icon = dt?.icon
            return (
              <CsFlex style={{ width: "100%" }}>
                <CsFlex style={{ width: "50px" }}>
                  <Icon />
                </CsFlex>
                <CsFlex style={{ width: "100%" }}>
                  <Typography color="white" variant="subtitle1" align="left" gutterBottom>{dt?.name}</Typography>
                </CsFlex>
              </CsFlex>
            )
          })
          }
        </ColRight>
      </ContainerFlex>

      
    </StyledFooter>
  );
}
const StyledFooter = styled.div`
    display:flex;
    background-color: #830000;
    width:100%;
    align-items:center;
    flex-direction:column;
    justify-content: center;
    margin:0;
    @media screen and (max-width: 600px) {
        height: auto;
    }
`;
const ContainerFlex = styled.div`
    display: flex;
    width:100%;
    flex-direction: row;
    justify-content: center;
    min-height: 100px;
    align-items: center;
    padding: 2rem 0rem;
    gap:5rem;
    @media screen and (max-width:600px){
      padding: 1.5rem 0rem;
      gap:0rem;
      width:90%;
      margin: 0 auto;
      flex-direction: column;
    }
`
const ColLeft = styled.div`
    display: flex;
    width: 30%;
    align-items: flex-end;
    justify-content: flex-end;
    > img{
        width: 130px;
    }
    @media screen and (max-width:600px) {
        width: 100%;
        > img{
            display: none;
        }
    }
`
const ColRight = styled.div`
    display: flex;
    flex-direction: column;
    gap:12px;
    width: 70%;
    @media screen and (max-width:600px) {
        width: 100%;
    }
`
const CsFlex = styled.div`
    display: flex;
`