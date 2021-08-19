import { createGlobalStyle } from 'styled-components';
import { theme } from './styles/theme';
import {
  GiCook,
  GiDeskLamp,
  GiMeditation,
  GiStoneCrafting,
} from 'react-icons/gi';
import { BsBookHalf } from 'react-icons/bs';
import { FaHandsHelping, FaMusic, FaUserFriends } from 'react-icons/fa';
import { RiGameFill } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';

export const ACTIVITY_TYPES = [
  {
    title: 'education',
    detail: 'Learn Someting',
    SVG: BsBookHalf,
  },
  { title: 'recreational', detail: 'Someting Fun!', SVG: RiGameFill },
  { title: 'social', detail: 'Social Activities', SVG: FaUserFriends },
  { title: 'diy', detail: 'Make Something', SVG: GiStoneCrafting },
  {
    title: 'charity',
    detail: 'Help Other People',
    SVG: FaHandsHelping,
  },
  { title: 'cooking', detail: 'If You are Hungry ...', SVG: GiCook },
  {
    title: 'relaxation',
    detail: 'Relax for Yourself',
    SVG: GiMeditation,
  },
  {
    title: 'music',
    detail: 'Listen to Music',
    SVG: FaMusic,
  },
  {
    title: 'busywork',
    detail: 'For Koreans ...',
    SVG: GiDeskLamp,
  },
];

export const FOOTER_ITEMS = [
  {
    id: 1,
    title: 'Github',
    link: 'https://github.com/dooyeong20/Break-Boredness',
    SVG: AiFillGithub,
  },
  {
    id: 2,
    title: 'Mail',
    link: 'noviced22@gmail.com',
    SVG: SiGmail,
  },
];

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  html * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${theme.main.gray};
  }

  button {
    outline: none;
    border: none;
    background: none;
  }

  h1,h2,h3,h4,h5 {
    margin: 0;
  }

  span.block {
    display: block;
  }
`;
