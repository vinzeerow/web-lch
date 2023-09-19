/* eslint-disable no-sparse-arrays */
import React, { Fragment, useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { Container, Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

const Filter = () => {
    const [startDate, setStartDate] = useState<Dayjs | null>(dayjs('2022-04-17'));
    const [endDate, setEndDate] = React.useState<Dayjs | null>(dayjs(new Date()));
    const handleStartDate = (event: any) => {
        setStartDate(event);
    };
    const handleEndDate = (event: any) => {
        setEndDate(event);
    };
    return (
        <div style={{width:"100%", padding: "1rem 0"}}>
            <Grid container spacing={3} py="1.5rem" maxWidth="lg" margin="0 auto" display="flex" justifyContent="flex-start" alignItems="center" p="0" m="0" >
                <Grid xs={12} sm={3} display="flex" justifyContent="flex-start" alignItems="center" p="0" m="0">
                    <Typography gutterBottom textAlign="left" color="#830000" variant="h5" component="h6">
                        CÁC HOẠT ĐỘNG HỘI
                    </Typography>
                </Grid>
                {/* <Grid container xs={12} sm={9}>
                    <Grid item xs={12} sm={9} sx={{ gap: "1rem" }} display="flex" justifyContent={["space-between", , "flex-start"]}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <CsDatePicker
                                label="Từ ngày"
                                value={startDate}
                                onChange={handleStartDate}
                                format="DD-MM-YYYY"
                            />
                            <CsDatePicker
                                label="Đến ngày"
                                value={endDate}
                                onChange={handleEndDate}
                                format="DD-MM-YYYY"

                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={3} display="flex" justifyContent="flex-end" paddingRight="24px">
                        <StyledTextField

                            type="search"
                            label="Tìm kiếm"
                        />
                    </Grid>

                </Grid> */}
            </Grid>
        </div>


    );
}

export default Filter;

const StyledTextField = styled(TextField)`
    @media screen and (max-width:600px) {
        width:100%;
    }
    padding-right:24px;
  label.Mui-focused {
    color: #2f3842;
  }
  .MuiOutlinedInput-input {
    cursor: pointer;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #c0c0c0;
    }
    &:hover fieldset {
      border-color: #999999;
      cursor: pointer;
    }
    &.Mui-focused fieldset {
      border:1px solid #2f3842;
    }
  }
`
const CsDatePicker = styled(DatePicker)`
   label.Mui-focused {
    color: #2f3842;
  }
  .MuiOutlinedInput-input {
    cursor: pointer;
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #c0c0c0;
    }
    &:hover fieldset {
      border-color: #999999;
      cursor: pointer;
    }
    &.Mui-focused fieldset {
      border:1px solid #2f3842;
    }
  }
` 