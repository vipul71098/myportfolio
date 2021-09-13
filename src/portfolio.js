import emoji from 'react-easy-emoji';

import googlelogo from './assets/img/icons/common/google.svg'
import github from './assets/img/icons/common/github.svg'
import airbnb from './assets/img/icons/common/airbnbLogo.png'

export const greetings = {
    "name": "Vipul Shukla",
    "title": "Hi all, I'm Vipul",
    "description": "A passionate Full Stack Web Developer  having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Laravel / Python / Flask and some other cool libraries and frameworks.",
    "resumeLink": "https://docs.google.com/document/d/136zoYUwI86vcgeCWgLNG72LqjTjsJeme0QEwe8Pb5zo/edit?usp=sharing"
}

export const openSource = {
  githubUserName: 'vipul71098',
};

export const contact = {

}

export const socialLinks = {
    "facebook": "https://www.facebook.com/shukla.vipul.07",
    "instagram": "https://www.instagram.com/vipul.shinigami/",
    "twitter": "https://twitter.com/vipulsh68975763",
    "github": "https://github.com/vipul71098",
    "linkedin": "https://www.linkedin.com/in/vipul-shukla-730b3312a/"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
    skills: [
      emoji(
        '⚡ Develop highly interactive Front end / User Interfaces for your web'
      ),
      emoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
      emoji(
        '⚡ Integration of third party services such as AWS / Digital Ocean'
      ),
      emoji(
        '⚡ Exposure in handling Apache or nginx servers is desirable'
      ),
      emoji('⚡ Knowledge of web services or API'),
    ],

    softwareSkills: [
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'sass',
        fontAwesomeClassname: 'logos:sass',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillName: 'TypeScript',
        fontAwesomeClassname: 'logos:typescript-icon',
      },
      {
        skillName: 'reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      // {
      //   skillName: 'flutter',
      //   fontAwesomeClassname: 'logos:flutter',
      // },
      // {
      //   skillName: 'swift',
      //   fontAwesomeClassname: 'vscode-icons:file-type-swift',
      // },
      {
        skillName: 'npm',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
      },
      {
        skillName: 'sql-database',
        fontAwesomeClassname: 'vscode-icons:file-type-sql',
      },
      {
        skillName: 'mongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
      {
        skillName: 'aws',
        fontAwesomeClassname: 'logos:aws',
      },
      // {
      //   skillName: 'firebase',
      //   fontAwesomeClassname: 'logos:firebase',
      // },
      {
        skillName: 'python',
        fontAwesomeClassname: 'logos:python',
      },
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      },
      {
        skillName: 'docker',
        fontAwesomeClassname: 'logos:docker-icon',
      },
    ],
}


export const SkillBars = [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '70', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '90',
    },
    {
      Stack: 'Programming',
      progressPercentage: '60',
    },
    {
      Stack: 'Database Management',
      progressPercentage: '70',
    },
    {
      Stack: 'Deployment',
      progressPercentage: '75',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'Bachelor of Computer Science',
      subHeader: 'PTU University (punjab)',
      duration: '2016 - 2020',
      desc: 'Participated in the research of XXX and published 3 papers.',
      descBullets: [
        'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      ],
    },
    {
      schoolName: ' Senior Secondary School Examination',
      subHeader: 'Kendriya Vidyalaya (lucknow)',
      duration: '2014 - 2016',
      desc: 'Participated in the research of XXX and published 3 papers.',
      descBullets: [
        'Lorem ipsum dolor sit amet, consectetfgur adipiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      ],
    },
    {
      schoolName: ' Higher Secondary School Examination',
      subHeader: 'St Francis Mission School (lucknow)',
      duration: '2012 - 2014',
      desc:
        'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
      descBullets: ['Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit'],
    },
]

export const experience = [
 {
    role: 'Full Stack Developer',
    company: 'Stimulus Consultancy',
    compurl: 'https://www.stimulusco.com/',
    // companylogo: airbnb,
    date: 'Jan 2021 – present',
    desc:
      'Landed my first full time job at Stimulus consultancy in starting of 2021 for a full stack developer role. Worked on many live projects and gained knowledge about various tools such as HubSpot Integration, VoIP Telephony Management Tool, NetToken, NetVisor, etc.',
  },
  {
    role: 'Full Stack Intern',
    company: 'Enterux Solutions',
    compurl: 'https://enterux.com/',
    // companylogo: github,
    date: 'May 2020 – aug 2020',
    desc:
      'As a part of internship program, I was selected for the position of Full Stack Developer I worked on both on front end and backend of the enterux app & website, which are build on react-native and nodejs respectively.',
  },
   {
    role: 'Full Stack Intern',
    company: 'Survaider',
    compurl: 'http://www.survaider.com/',
    // companylogo: googlelogo,
    date: 'May 2018 – july 2018',
    desc:
      'As a part of internship program, I was selected for the position of Full Stack Developer I worked on both on front end and backend of the survaider app assisting senior developers, which are build on Angularjs and Flask respectively.',
    // descBullets: [
    //   ' Creating a JS app to find online review links for business and creating a downloadable file.',
    //   'Creating a python backend app to Scrape online ratings and compute score for a business',
    //   'Assisting development teams with day to day task',
    // ],
  }

]

export const projects = [
  {
    name: "Glance",
    url: "http://www.dev-glance.com.s3-website.ap-south-1.amazonaws.com/reseller/login",
    desc: "Its a USA based call center data management app built in laravel. It manage number of call center in a area and number of phone in each call center along with its activity. I help in generating various reports  for current time, daily, weekly, monthy and Early basis. and also create the apis for its advance functionality",
  },
  {
    name: "Resort App",
    url: "https://frozen-forest-26394.herokuapp.com/",
    desc: "It is a beach resort app which built in reactjs. I used context Api for sharing data between the componenets. Its has various filter option to filter the rooms. I deployed it on heroku.",
  },
  {
    name: "Uncubate",
    url: "https://uncubate.co/",
    desc: "Uncubate is co-working space website. Its build in laravel. I integrate hubspot (CRM platform) with uncubate. When any customer fill the quey form, then hubspot automatically generate contacts, deals and tasks for that query.",
  },
  {
    name: "Json Api",
    git: "source code",
    giturl: "https://github.com/vipul71098/crud-node-api-jwt",
    url: "https://super-workable-kitty.glitch.me/",
    desc: "Its is a simple CRUD REST Api built in nodeJs,expressJs and mongoose database. I also used JsonWebToken (JWT) to secure the routes of api. I deployed it on glitch",
  },
  {
    name: "Blog App",
    git: "source code",
    giturl: "https://github.com/vipul71098/blog-task",
    url: "https://react-blog-app-task.herokuapp.com/",
    desc: "Its is a blog app built in nodeJs,expressJs, mongoose database and  reactjs as frontend. It have add , delete, view blog and also update comment of each blog.. I deployed it on heroku",
  },
  {
    name: "Nettoken",
    url: "https://nettoken.io/",
    desc: "Nettoken is a password management web app, chrome extension and mobile app. Its used cryptography to encrypt and decrypt the accounts. I design its UI and fixes and manage the web app and chrome extension functionality. It built on reactjs & react redux. ",
  },
  {
    name: "Survey",
    url: "http://135.181.47.181:43300/auth/login",
    desc: "Its a online survey management for  Bussiness & reseller. I built APis for its different modules and design database architecture and established relationship among its different modules database table.",
  },
  {
    name: "User Data",
    git: 'source code',
    giturl: 'https://github.com/vipul71098/user-activity',
    url: "https://fathomless-bastion-21454.herokuapp.com/",
    desc: "Its i a small task in which i have display data in reactjs from mock api. And also interpret and visualise data in form of chart. I deployed its on heroku server.",
  },

]
