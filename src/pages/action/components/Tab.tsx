import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CardActivity } from '../../../type';
import { OutstandingTab } from './OutstandingTab';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
interface ListCardItem {
    listActivityOutstanding: CardActivity[];
}

export const ColorTabs = (props: ListCardItem) => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="secondary"
                    indicatorColor="secondary"
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    aria-label="secondary tabs example"
                >
                    <Tab label="Nổi bật" {...a11yProps(0)} />
                    <Tab label="Học tập tốt" {...a11yProps(1)} />
                    <Tab label="Đạo đức tốt" {...a11yProps(2)} />
                    <Tab label="Thể lực tốt" {...a11yProps(3)} />
                    <Tab label="Tình nguyện tốt" {...a11yProps(4)} />
                    <Tab label="Hội nhập tốt" {...a11yProps(5)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <OutstandingTab card={props?.listActivityOutstanding} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Chưa có dữ liệu
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Chưa có dữ liệu
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                Chưa có dữ liệu
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                Chưa có dữ liệu
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
                Chưa có dữ liệu
            </CustomTabPanel>
        </Box>
    );
}