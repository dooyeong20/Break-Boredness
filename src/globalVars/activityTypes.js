import { BsBookHalf } from 'react-icons/bs';
import {
  FaHandsHelping,
  FaMusic,
  FaQuestionCircle,
  FaUserFriends,
} from 'react-icons/fa';
import {
  GiCook,
  GiDeskLamp,
  GiMeditation,
  GiStoneCrafting,
} from 'react-icons/gi';
import { RiGameFill } from 'react-icons/ri';

export const activityTypes = [
  {
    title: 'random',
    detail: 'Complete Random',
    SVG: FaQuestionCircle,
  },
  {
    title: 'education',
    detail: 'Learn Something',
    SVG: BsBookHalf,
  },
  { title: 'recreational', detail: 'Something Fun!', SVG: RiGameFill },
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
    detail: 'Maybe For Koreans ...',
    SVG: GiDeskLamp,
  },
];
