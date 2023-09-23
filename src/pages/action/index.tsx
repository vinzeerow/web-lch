import React from 'react';
import Container from '@mui/material/Container';
import Cover from './components/Cover';
import Filter from './components/Filter';
import { ColorTabs } from './components/Tab';




const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
        "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: '/images/cover-3.jpg',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};
const ListCardActivity = [
    {
        title: 'Hành trình tình nguyện',
        image: '/images/hoat-dong-hanh-trinh-tinh-nguyen.jpg',
        linkText: 'Continue reading…',
        linkFanpage: "https://www.facebook.com/chsvcanglongdhct",
        time: "Tháng 10 hằng năm",
        address: "Các huyện trên địa bàn tỉnh Trà Vinh",
        description:"Một trong các hoạt động truyền thống của Liên Chi hội sinh viên Trà Vinh tại Trường Đại học Cần Thơ nhằm hướng đến hỗ trợ các em học sinh cấp tiểu học, nhất là các em có hoàn cảnh khó khăn. Với mục tiêu mỗi năm Hành trình tình nguyện sẽ đặt chân đến một huyện trên địa bàn tỉnh Trà Vinh để thực hiện các hoạt động nhằm tạo ra một môi trường học tập và vui chơi tích cực để các bạn học sinh có thể học hỏi được một số kiến thức và kỹ năng cần thiết trong dịp nghỉ hè"
    },
    {
        title: 'Văn nghệ và trao học bổng Trà Vinh - Tình đất tình người',
        image: '/images/hoat-dong-tra-vinh-tinh-dat-tinh-nguoi.jpg',
        linkText: 'Continue reading…',
        linkFanpage: "https://www.facebook.com/chsvcaukedhct",
        time: "Tháng 10 hằng năm",
        address: "Hội trường Rùa hoặc sân khấu Văn phòng Đoàn",
        description:"Đây là hoạt động văn nghệ và trao học bổng cho các bạn sinh viên có hoàn cảnh khó khăn vươn lên trong học tập. Đồng thời tạo một sân chơi lành mạnh cho các bạn hội viên, sinh viên thỏa sức thể hiện đam mê với âm nhạc. Đặc biệt các tiết mục có nội dung về tuổi trẻ, quê hương đất nước mang đậm bản chất người Trà Vinh."
    },
    {
        title: 'Chào đón Tân sinh viên',
        image: '/images/hoat-dong-chao-don-tsv.jpg',
        linkText: 'Continue reading…',
        linkFanpage: "https://www.facebook.com/profile.php?id=100083345082184",
        time: "Tháng 10 hằng năm",
        address: "Nhà học C1, trường Đại học Cần Thơ",
        description:"Nhằm chào đón tất cả các bạn Tân sinh viên quê tại Trà Vinh vừa nhập học tại Trường Đại học Cần Thơ. Cung cấp các thông tin cần thiết về những nội quy, quy định của trường Đại học Cần Thơ.Giới thiệu về Hội Sinh viên trường Đại học Cần Thơ, Liên chi hội sinh viên Trà Vinh và các Chi hội sinh viên trực thuộc."
    },
    {
        title: 'Hội thao truyền thống',
        image: '/images/hoat-dong-hoi-thao-truyen-thong.jpg',
        linkText: 'Continue reading…',
        linkFanpage: "https://www.facebook.com/chsvchauthanhtravinh",
        time: "Tháng 03 hằng năm",
        address: "Các nhà thi đấu, sân thể thao trường Đại học Cần Thơ",
        description:"Hội thao truyền thống là một hoạt động diễn ra hằng năm và là một sân chơi sôi nổi, lành mạnh và bổ ích dành cho tất cả các bạn Hội viên - Sinh viên của Liên Chi hội Sinh viên Trà Vinh đang học tập và sinh hoạt tại Trường Đại học Cần Thơ. Với các môn thi đấu: Bóng đá, bóng chuyền, cầu lông, kéo co và chạy việt dã."
    },
    {
        title: 'Mùa hè xanh',
        image: '/images/hoat-dong-hoi-thao-truyen-thong.jpg',
        linkText: 'Continue reading…',
        linkFanpage: "https://www.facebook.com/chsvchauthanhtravinh",
        time: "Tháng 07 hằng năm",
        address: "Các huyện trên địa bản tỉnh Trà Vinh",
        description:"Tạo ra môi trường sinh hoạt tập thể lành mạnh, mối giao lưu giữa sinh viên với thanh niên huyện nhà. Qua đó, sinh viên có điều kiện tiếp cận thực tế, ý thức vì cộng đồng và rút ra kinh nghiệm quý báu cho bản thân."
    },
]

const HomePage = () => {
    return (
        <div>
            <Container sx={{p:0, pt: 1, pb: 12 }} maxWidth="lg">
                <Cover post={mainFeaturedPost} />
                {/* <Filter/> */}
                <ColorTabs listActivityOutstanding={ListCardActivity}/>
            </Container>
        </div>
    );
}

export default HomePage;
