const projects = [
  {
    description:
      'As a freelance web developer, I successfully undertook a project to rebuild an inactive website for a small-scale enterprise.',
    id: 0,
    image: '/images/krvga.png',
    source: '',
    tags: ['React', 'Psql', 'Node.js', 'Affordability'],
    title: 'KRVGA',
    visit: 'https://krvga.com',
  },
  {
    description:
      'A responsive website to bet with friends over the results of every match of the soccer 2022 World Cup.',
    id: 1,
    image: '/images/worldCup.png',
    source: 'https://github.com/banchito/world_cup',
    tags: ['React', 'Firebase'],
    title: 'World Cup Bet',
    visit: 'https://world-cup-alpha.vercel.app/',
  },
  {
    description:
      'A responsive website integrating visual and React.js component testing estrategies.',
    id: 2,
    image: '/images/portfolio.png',
    source: 'https://github.com/banchito/Portfolio',
    tags: ['NextJS', 'Node.js', 'Cypress', 'Happo.io'],
    title: 'Esteban Portfolio Website',
    visit: '',
  },
];

const TimeLineData = [
  {
    year: 2022,
    text: 'Full time freelance contractor. ',
  },
  {
    year: 2020,
    text: 'Succesfully completed Web Development Coding Bootcamp.',
  },
  {
    year: 2019,
    text: 'Started my software developing journey as intern at Streamily.com.',
  },
];

const socialUrls = {
  github: 'https://github.com/banchito',
  linkedIn: 'https://www.linkedin.com/in/banchito/',
  resume: 'https://banchito.github.io/Resume/',
};

const accomplishments = [
  {title: '3 Foreign Languages', text: ' English, French & Spanish'},
  {title: '1 BA Degree', text: ' Law - Colombia '},
  {title: '1 AS Degree', text: 'Computer Information Systems'},
];

module.exports = {socialUrls, TimeLineData, projects, accomplishments};
