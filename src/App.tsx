import * as React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomePage from './pages/home';
import Container from './components/Layout/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ActionPage from './pages/action';
import FormContact from './pages/contact';
const defaultTheme = createTheme();

const dataHeader = {
  title: "LCHSV TRÀ VINH",
  subTitle: "Trường Đại học Cần Thơ",
  urlJoin: "https://forms.gle/M3NrzZHtPxpiMVch7"
}

function App() {
  return (
    <div className="App">
      <Header title={dataHeader?.title} subTitle={dataHeader?.subTitle} urlJoin={dataHeader?.urlJoin} />
      <Container>
        <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/activity" element={<ActionPage />} />
              <Route path="/contact" element={<FormContact />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Container>
      <Footer
        title="LIÊN CHI HỘI SINH VIÊN TRÀ VINH TRƯỜNG ĐẠI HỌC CẦN THƠ"
        description="Something here to give the footer a purpose!"
      />


    </div>
  );
}

export default App;
