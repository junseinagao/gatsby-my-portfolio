import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Junsei Nagao', // e.g: 'Name | Developer'
  lang: 'jp', // e.g: en, es, fr, jp
  description: "Junsei Nagao,Web Developer,'s portfolio. ", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'The Greatest Web Developer Student',
  name: 'Junsei Nagao',
  subtitle: 'You should talk me.',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/junseinagao/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'codewith.png',
    title: 'CodeWith',
    info:
      'CodeWith is the Web RTC Application for everyone training to coding competion. Everyone do pair coding and solve coding problem with someone enterd chat room. CodeWith has abilitiy to collboration coding, compiling code,voice and text chatting.',
    info2: 'Vue.js, firebase, vuetify, skyway, convergence, atcoder problems',
    url: 'https://codewith-8dd7f.web.app/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/JunpaiCode',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/junseinagao/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/junseinagao/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
