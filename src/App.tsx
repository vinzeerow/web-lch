import * as React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomePage from './pages/home';
import Container from './components/Layout/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import ActionPage from './pages/action';
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

function App() {
  return (
    <div className="App">
      <Header title="Blog" sections={sections} />
      <Container>
        <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/activity" element={<ActionPage />} />

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
