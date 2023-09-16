import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';
import styled from 'styled-components';


interface HeaderProps {
  title: string;
  subTitle: string;
  urlJoin: string;
}

export default function Header(props: HeaderProps) {


  return (
    <React.Fragment>
      <Toolbar>
        <ContainerFlex>
          <CsFlex>
            <img src="/images/logo-lchsv-tra-vinh.png?version=1.1" alt="" />
            <CsFlexCol>
              <Typography variant="h6" py="0px" my="0px" lineHeight="22px" color="#830000">
                {props?.title}
              </Typography>
              <Typography variant="subtitle1" py="0px" my="0px" lineHeight="22px" color="inherit">
                {props?.subTitle}
              </Typography>
            </CsFlexCol>

          </CsFlex>
          <ListLinkMenu>
            <CsLink
              variant="button"
              color="text.primary"
              href="/"
              sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
            >
              Trang chủ
            </CsLink>
            <CsLink
              variant="button"
              color="text.primary"
              href="/activity"
              sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
            >
              Hoạt động Hội
            </CsLink>
            <CsLink
              variant="button"
              color="text.primary"
              href="/contact"
              sx={{ my: 1, mx: 1.5, textDecoration: "none" }}
            >
              Liên hệ
            </CsLink>
            <Button href={props?.urlJoin} sx={{ backgroundColor: "#fff", color: "#830000", border: "1px solid #830000", py: "6px", px: "18px", my: 1, mx: 1.5 }}>
              Kết nạp Hội
            </Button>
          </ListLinkMenu>
        </ContainerFlex>


      </Toolbar>

    </React.Fragment>
  );
}
const ListLinkMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media screen and (max-width:600px) {
        width: 100%;
        margin: 0 auto;
        justify-content: space-between;
    }

`
const CsLink = styled(Link)`
  display: flex;
  justify-content:center;
  list-style: none;
  align-items: center;
  text-decoration:none;
  :hover{
    color:#830000;
  }
`

const CsFlex = styled.div`
    display: flex;
    gap:1rem;
    height: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    > img{
        width: 30px;
    }
    @media screen and (max-width:600px) {
        width: 100%;
        margin: 0 auto;
        > img{
            width: 40px;
        }
    }
`
const CsFlexCol = styled.div`
    display: flex;
    flex-direction: column;
    gap:0;
    padding:0;
    margin:0;
    height: 100%;
    align-items: flex-start;
    justify-content: flex-start;
`
const ContainerFlex = styled.div`
    width:100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    @media screen and (max-width:600px) {
      flex-direction: column;
      padding-top:0.5rem;
      padding-bottom: 0.5rem;
    }
`