module.exports = {
  siteTitle: 'Fang Cabrera | Software Engineer',
  siteDescription:
    'Fang Cabrera is a software engineer based in New York, NY who has a penchant for functional programming and NLP.',
  siteKeywords: 'Fang Cabrera, TakaiKinoko, Fang Han, software engineer, NYU, Courant',
  siteUrl: 'https://fangcabrera.com',
  siteLanguage: 'en_US',
  //googleAnalyticsID: 'UA-45666519-2',
  //googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Fang Cabrera',
  location: 'New York, NY',
  email: 'fang.cabrera@gmail.com',
  github: 'https://github.com/TakaiKinoko',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/TakaiKinoko',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/fang-cabrera-69177587/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Courseworks',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',
  pback: '#2C363F',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
