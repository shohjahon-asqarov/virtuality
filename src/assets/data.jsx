import logo from './images/logo.png'
import headerImg from './images/header.png'
import about1 from "./images/about1.png"
import about2 from "./images/about2.png"


import icon1 from './icons/icon1.svg'
import icon2 from './icons/icon2.svg'
import icon3 from './icons/icon3.svg'
import icon4 from './icons/icon4.svg'
import icon5 from './icons/icon5.svg'
import icon6 from './icons/icon6.svg'

import userImg1 from './images/user1.png'
import userImg2 from './images/user2.png'
import userImg3 from './images/user3.png'
import userImg4 from './images/user4.png'


const ServiseData = [
    {
        img: icon1,
        bg: 'linear-gradient(180deg, #8A7FD9 0%, #402F8F 100%)',
        title: 'Order Management',
        info: 'Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
    },
    {
        img: icon2,
        bg: 'linear-gradient(180deg, #D97F95 0%, #923250 100%)',
        title: 'Social Assistant',
        info: 'Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
    }, {
        img: icon3,
        bg: ' linear-gradient(180deg, #84D8ED 0%, #4292BB 100%)',
        title: 'Crypto Platform',
        info: 'Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
    }, {
        img: icon4,
        bg: ' linear-gradient(180deg, #92EFC3 0%, #2F8F5B 100%)',
        title: 'Smart Trading Modules',
        info: 'Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
    }, {
        img: icon5,
        bg: ' linear-gradient(180deg, #BC7FD9 0%, #923283 100%)',
        title: 'Analyzer of the News',
        info: 'Lorem ipsum dolor sit amet, con  sectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
    }, {
        img: icon6,
        bg: 'linear-gradient(180deg, #8684ED 0%, #4247BB 100%)',
        title: 'Module of Price ',
        info: 'Lorem ipsum dolor sit amet, consectetur the adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.'
    },
]

const Users = [
    {
        img: userImg1,
        name: 'Sunny Khan',
        job: 'Executive officer'
    },
    {
        img: userImg2,
        name: 'Alina Jesia',
        job: 'UX/UI DESIGNER'
    },
    {
        img: userImg3,
        name: 'Alex Sohag',
        job: 'BUSINESS DEVELOPMENT'
    },
    {
        img: userImg4,
        name: 'Afroza Mou',
        job: 'Head of marketing'
    }
]

const menus = [
    {
        title: 'Home',
        link: 'home'
    },
    {
        title: 'About Us',
        link: 'about'
    },
    {
        title: 'Service',
        link: 'servise'
    },
    {
        title: 'Our Team',
        link: 'team'
    }
]

export { logo, headerImg, menus, ServiseData, about1, about2, Users }