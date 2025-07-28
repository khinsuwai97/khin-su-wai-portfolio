import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoRedux,
  BiLogoGit,
} from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTestinglibrary } from 'react-icons/si';
import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs';
import { MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { IoShareSocialOutline } from 'react-icons/io5';
import moviesHub from '../public/images/MoviesHub.jpg';
import eCommerceImg from '../public/images/Trendy-e-commerce.jpg';
import coX from '../public/images/CorporationX.jpg';
import Food from '../public/images/Delicito.jpg';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'skills',
    title: 'Skills',
  },

  {
    id: 'work',
    title: 'Work',
  },

  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

export const aboutData = [
  {
    id: 'qualification',
    title: 'Qualification',
    text: 'Siam University’s International College, Bangkok — Bachelor of Business Administration (International Program in Service Industry)',
  },
  {
    id: 'languages',
    title: 'Languages',
    text: 'English (Good Proficiency), Myanmar (Native)',
  },
  {
    id: 'hobbies',
    title: 'Hobbies',
    text: 'Reading Books, Watching Movies and Walking',
  },
];

export const techStacks = [
  { id: 'html', icon: <FaHtml5 />, title: 'HTML5' },
  { id: 'css', icon: <FaCss3Alt />, title: 'CSS3' },
  { id: 'javaScript', icon: <BiLogoJavascript />, title: 'JavaScript' },
  { id: 'typeScript', icon: <BiLogoTypescript />, title: 'TypeScript' },
  { id: 'reactJs', icon: <FaReact />, title: 'React JS' },
  { id: 'nextJs', icon: <TbBrandNextjs />, title: 'Next JS' },
  { id: 'tailwind', icon: <BiLogoTailwindCss />, title: 'Tailwind CSS' },
  { id: 'redux', icon: <BiLogoRedux />, title: 'Redux Toolkit' },
  { id: 'git', icon: <BiLogoGit />, title: 'Git' },
  {
    id: 'testingLibrary',
    icon: <SiTestinglibrary />,
    title: 'React Testing Library',
  },
];

export const moive = {
  title: 'Movies Hub',
  image: moviesHub,
  content:
    'Movies Hub website is to search and filter your favorite movies and series,keep upadated with trending, add your favorite to watchlist but you need to sign in or create an account to use watchlist. You can watch the trailer of each movies and series on Youtube, check detail of casts on each movie and series and read the overview of each movie and series.',
  code: 'https://github.com/khinsuwai97/movies-hub',
  liveDemo: 'https://movies-hub-coral.vercel.app',
};
export const eCommerce = {
  title: 'Trendy-e-commerce-shoes',
  image: eCommerceImg,
  content:
    'Trendy-e-commerce-shoes website is to search and buy shoes that you like, filter products according to price and other sort categories, check details of shoes and different sizes, add your shoes that you like to cart.',
  code: 'https://github.com/khinsuwai97/Trendy-e-commerce-shoes-website',
  liveDemo: 'https://trendy-e-commerce-shoes-website.pages.dev',
};
export const corporationX = {
  title: 'CorporationX Consulting',
  image: coX,
  content:
    'This is a simple static website with some animations for consulting service.I made this website to practise Tailwind CSS with react js.',
  code: 'https://github.com/khinsuwai97/consulting-service-website',
  liveDemo: 'https://consulting-service-website.pages.dev',
};
export const delicito = {
  title: 'Delicito',
  image: Food,
  content:
    'Delicito is a receipe meal website  to search the meal you like, can check hightlighted meal and view details of instructions and ingredients for the meal you like.',

  code: 'https://github.com/khinsuwai97/recipe-meal-app',
  liveDemo: 'https://recipe-meal-app.vercel.app',
};

export const contacts = [
  {
    id: 'email',
    icon: <MdOutlineEmail />,
    title: 'Email',
    text: 'khinsuwai009@gmail.com',
    href: 'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRQMTKpHlPGKggGfGlXclJNpWJBRVnfMhVPJnDMZZHvQTTjBZRFHnVhhnFxlZnhhTVdLzk',
  },
  {
    id: 'phone',
    icon: <FiPhone />,
    title: 'Phone',
    text: '(+66) 0629853725',
    href: 'tel:+66629853725',
  },
  {
    id: 'address',
    icon: <MdOutlineLocationOn />,
    title: 'Address',
    text: 'Chiang Mai,Thailand',
    href: '/',
  },
];

export const otherContacts = {
  icon: <IoShareSocialOutline />,
  title: 'Follow Me',
  icons: [
    {
      id: 'gitHub',
      icon: <BsGithub />,
      link: 'https://github.com/khinsuwai97',
    },
    {
      id: 'linkedIn',
      icon: <BsLinkedin />,
      link: 'https://bit.ly/44wbFvL',
    },
    {
      id: 'whatsApp',
      icon: <BsWhatsapp />,
      link: 'https://wa.me/+66629853725',
    },
  ],
};
