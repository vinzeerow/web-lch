import * as React from 'react';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

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