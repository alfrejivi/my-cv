import { string } from "prop-types";

export interface IIntroduction {
    name: string;
    avatar: string;
    location: string;
    description: string;
    position: string;
}

export interface IWork {
    title: string;
    logo: string;
    company: string;
    location: string;
    duration: string;
    description: string[];
    stack: { name: string; icon: string; }[];
}

export interface ISchoolEntity {
    name: string;
    logo: string;
    title: string;
    duration: string;
    credentialLink?: string;
}

export interface ISkill {
    name: string;
    icon: string;
    current?: boolean;
}

export interface IAward {
    title: string;
    issuer: string;
    location: string;
    logo: string;
    description: string;
    link: string;
    date: string;
}

export interface ILanguage {
    name: string;
    level: string;
}

export interface IContact {
    name: string;
    icon: string;
    link: string;
}

export interface IResume {
    introduction: IIntroduction;
    experience: IWork[];
    education: ISchoolEntity[];
    skills: ISkill[];
    awards: IAward[];
    languages: ILanguage[];
    contact: IContact[];
}

const Resume: IResume = {
    introduction: {
        name: "Freddy Jimenez",
        avatar: "./images/avatar.jpg",
        location: "Amsterdam, The Netherlands",
        description: "Versatile Fullstack Developer with 6+ years of experience developing Javascript applications. -- RESTful API development and integrations. -- Translating from design, wireframes, and mockups into responsive, interactive websites/apps, using HTML, CSS, and JavaScript. -- Good eye for design. Sensitivity for details. -- Ease of learning.",
        position: "Fullstack Engineer @qwic"
    },
    experience: [
        {
            title: 'Full Stack Engineer',
            company: 'QWIC',
            logo: './images/qwic.png',
            duration: 'December 2018 - Present',
            location: 'Amsterdam, The Netherlands',
            description: [
                'Full-stack development for an e-commerce platform which provides to our customers a user-friendly application for ordering and managing our products.',
                'Involved into the planning/designing phase for a brand-new back-end system.',
                'Third-party software integrations such as Salesforce, Auth0, IcePay.',
                "Mobile application development that connects to the e-bike's hardware(IoT)."
            ],
            stack: [
                { name: 'Reactjs', icon: 'https://cdn.svgporn.com/logos/react.svg' },
                { name: 'Typescript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg' },
                { name: 'Mobx State Tree', icon: 'https://cdn.svgporn.com/logos/mobx.svg' },
                { name: 'Nestjs', icon: 'https://cdn.svgporn.com/logos/nestjs.svg' },
                { name: 'AWS', icon: 'https://cdn.svgporn.com/logos/aws.svg' },
                { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
                { name: 'Flutter', icon: 'https://cdn.svgporn.com/logos/flutter.svg' },
                { name: 'JSS', icon: './images/jss.png' },
            ]
        },
        {
            title: 'Frontend Engineer II',
            company: 'Ooyala',
            logo: './images/ooyala.png',
            duration: 'February 2017 - November 2018',
            location: 'Guadalajara, Mexico',
            description: [
                'Leadership on Front End development in the Solutions Engineering team.',
                'Development of a UI Components library using Storybook.',
                'Web platform development for creating custom OTT applications in order to demonstrate product capabilities on the tradeshow.',
                "Development of prototypes, demos, and proofs of concepts (PoC's) used by the sales team at the trade shows.",
                "Development of web applications used in large-scale events such as the National Association of Broadcasters Show (NAB) in Las Vegas, Nevada and the International Broadcasting Convention (IBC) in Amsterdam in order to attract new prospects to the Company.",
                "Third-party software integrations such as Microsoft, MPP Global Solutions, Vindicia and Gigya.",
                "Some projects: Manchester United F.C., beIN Sports, Bloomberg, Chivas TV, Interactive Advertising Bureau (IAB), Redbox, and THX.",
            ],
            stack: [
                { name: 'Reactjs', icon: 'https://cdn.svgporn.com/logos/react.svg' },
                { name: 'Redux', icon: 'https://cdn.svgporn.com/logos/redux.svg' },
                { name: 'Nodejs', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg' },
                { name: 'Hapijs', icon: 'https://cdn.svgporn.com/logos/hapi.svg' },
                { name: 'PostgreSQL', icon: 'https://cdn.svgporn.com/logos/postgresql.svg' },
                { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
                { name: 'Stylus', icon: 'https://cdn.svgporn.com/logos/stylus.svg' }
            ]
        },
        {
            title: 'Frontend Engineer',
            company: 'Ooyala',
            logo: './images/ooyala.png',
            duration: 'July 2015 - January 2017',
            location: 'Guadalajara, Mexico',
            description: [
                'Leadership in Frontend development in the Value Engineering team.',
                "Development of prototypes, demos, and proofs of concepts (PoC's) used by the sales team at the trade shows.",
                'Development of web applications used in large-scale events such as the National Association of Broadcasters Show (NAB) in Las Vegas, Nevada and the International Broadcasting Convention (IBC) in Amsterdam in order to attract new prospects to the Company.',
                "Working with products/services of third-party Companies such as Microsoft, MPP Global Solutions, Vindicia and Gigya.",
                "Some projects/customers: Manchester United F.C., beIN Sports, Bloomberg, Chivas TV, Interactive Advertising Bureau (IAB), Redbox, and THX.",
            ],
            stack: [
                { name: 'Reactjs', icon: 'https://cdn.svgporn.com/logos/react.svg' },
                { name: 'Flux', icon: 'https://cdn.svgporn.com/logos/flux.svg' },
                { name: 'Angularjs', icon: 'https://cdn.svgporn.com/logos/angular-icon.svg' },
                { name: 'Nodejs', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg' },
                { name: 'Expressjs', icon: 'https://cdn.svgporn.com/logos/express.svg' },
                { name: 'PostgreSQL', icon: 'https://cdn.svgporn.com/logos/postgresql.svg' },
                { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
                { name: 'Sass', icon: 'https://cdn.svgporn.com/logos/sass.svg' },
            ]
        },
        {
            title: 'Frontend Engineer',
            company: 'Intagono',
            logo: './images/intagono.png',
            duration: 'May 2014 - July 2015',
            location: 'Guadalajara, Mexico',
            description: [
                'Development of web sites and web applications for different types of clients.',
                "Frontend developer role supporting some Backend tasks as well, working with technologies such as Laravel framework, Javascript (vanilla, jquery, and angular.js), HTML, CSS.",
                'Leadership in some projects on the frontend side.',
                "Some projects: Hersheys Mexico, Growerspace, Prep Academy Tutors, and BigAppetit (food delivery startup).",
            ],
            stack: [
                { name: 'jQuery', icon: 'https://cdn.svgporn.com/logos/jquery.svg' },
                { name: 'Angularjs', icon: 'https://cdn.svgporn.com/logos/angular-icon.svg' },
                { name: 'PHP', icon: 'https://cdn.svgporn.com/logos/php.svg' },
                { name: 'Laravel', icon: 'https://cdn.svgporn.com/logos/laravel.svg' },
                { name: 'MySQL', icon: 'https://cdn.svgporn.com/logos/mysql.svg' },
                { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg' },
                { name: 'Sass', icon: 'https://cdn.svgporn.com/logos/sass.svg' },
            ]
        },
        {
            title: 'Fullstack Engineer',
            company: 'ZipVisual',
            logo: 'https://www.zipvisual.com/bundles/front/images/zipvisual-logo.png',
            duration: 'February 2013 - May 2014',
            location: 'Guadalajara, Mexico',
            description: [
                'Development of web sites and web applications for different types of clients.',
                "Fullstack developer role working with technologies such as Symfony framework, Javascript (vanilla and jquery), HTML, CSS.",
                'Some projects: Crown Paradise hotels, Color and Art, Moco de Gorila and Colibrí Jewellery.',
            ],
            stack: [
                { name: 'jQuery', icon: 'https://cdn.svgporn.com/logos/jquery.svg' },
                { name: 'PHP', icon: 'https://cdn.svgporn.com/logos/php.svg' },
                { name: 'Symfony', icon: 'https://cdn.svgporn.com/logos/symfony.svg' },
                { name: 'MySQL', icon: 'https://cdn.svgporn.com/logos/mysql.svg' },
            ]
        }
    ],
    education: [
        { name: 'Universidad de Guadalajara', logo: './images/udg.png', title: 'Computer Engineering, Software', duration: '2008 - 2013' },
        { name: 'IoT', logo: 'https://cdn.svgporn.com/logos/aws.svg', title: 'Developing and Deploying an Internet of Things', duration: 'August 2019', credentialLink: 'https://courses.edx.org/certificates/d372e340b9894e80becea59fd705967b' },
        { name: '', logo: './images/jsnation.svg', title: 'TypeScript Workshop with Michel Weststrate + Conference', duration: 'June 2019' },
        { name: 'Lynda.com', logo: 'https://cdn.svgporn.com/logos/lynda.svg', title: 'Performing Complex State Management with Redux', duration: 'September 2018', credentialLink: 'http://www.lynda.com/Redux-tutorials/Performing-Complex-State-Management-Redux/724805-2.html' },
        { name: 'Lynda.com', logo: 'https://cdn.svgporn.com/logos/lynda.svg', title: 'React: Testing and Debugging', duration: 'September 2018', credentialLink: 'http://www.lynda.com/React-js-tutorials/React-Testing-Debugging/592511-2.html' },
        { name: '', logo: './images/platzi.png', title: 'Javascript Fundamentals', duration: 'December 2017', credentialLink: 'https://platzi.com/@alfrejivi/curso/1099-fundamentos-javascript-2017/diploma/detalle/' },
        { name: '', logo: './images/caav.svg', title: 'Graphic Design Certified', duration: 'June 2015' },
        { name: '', logo: 'https://cdn.svgporn.com/logos/oracle.svg', title: 'Oracle Certified Professional, Java SE 6 Programmer', duration: 'January 2013', credentialLink: 'https://www.youracclaim.com/badges/4783a9a8-75d8-4bd1-b1a4-983db13c8dbe/linked_in_profile' },
        { name: '', logo: './images/brandhome.png', title: 'Web Development Certified', duration: 'September 2011' },
        { name: 'Code School', logo: './images/code-school.png', title: 'Shaping up with angularjs', duration: 'September 2011' },
    ],
    skills: [
        { name: 'Javascript', icon: 'https://cdn.svgporn.com/logos/javascript.svg' },
        { name: 'Reactjs', icon: 'https://cdn.svgporn.com/logos/react.svg', current: true },
        { name: 'Typescript', icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg', current: true },
        { name: 'Mobx State Tree', icon: 'https://cdn.svgporn.com/logos/mobx.svg', current: true },
        { name: 'Redux', icon: 'https://cdn.svgporn.com/logos/redux.svg' },
        { name: 'Flux', icon: 'https://cdn.svgporn.com/logos/flux.svg' },
        { name: 'Angularjs', icon: 'https://cdn.svgporn.com/logos/angular-icon.svg' },
        { name: 'AWS', icon: 'https://cdn.svgporn.com/logos/aws.svg', current: true },
        { name: 'Netlify', icon: 'https://cdn.svgporn.com/logos/netlify.svg' },
        { name: 'Zeit', icon: 'https://cdn.svgporn.com/logos/zeit-icon.svg' },
        { name: 'Nextjs', icon: 'https://cdn.svgporn.com/logos/nextjs.svg' },
        { name: 'Nodejs', icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg', current: true },
        { name: 'Nestjs', icon: 'https://cdn.svgporn.com/logos/nestjs.svg', current: true },
        { name: 'Jest', icon: 'https://cdn.svgporn.com/logos/jest.svg', current: true },
        { name: 'React Testing library', icon: 'https://testing-library.com/img/logo-large.png', current: true },
        { name: 'Enzyme', icon: 'https://cdn.svgporn.com/logos/airbnb.svg' },
        { name: 'Mocha', icon: 'https://cdn.svgporn.com/logos/mocha.svg' },
        { name: 'Puppeteer', icon: 'https://cdn.svgporn.com/logos/puppeteer.svg', current: true },
        { name: 'Sentry', icon: 'https://cdn.svgporn.com/logos/sentry.svg', current: true },
        { name: 'Git', icon: 'https://cdn.svgporn.com/logos/git-icon.svg', current: true },
        { name: 'Jira', icon: 'https://cdn.svgporn.com/logos/jira.svg', current: true },
        { name: 'HTML5', icon: 'https://cdn.svgporn.com/logos/html-5.svg', current: true },
        { name: 'CSS3', icon: 'https://cdn.svgporn.com/logos/css-3.svg', current: true },
        { name: 'Java', icon: 'https://cdn.svgporn.com/logos/java.svg' },
        { name: 'Zeplin', icon: 'https://cdn.svgporn.com/logos/zeplin.svg', current: true },
        { name: 'Flutter', icon: 'https://cdn.svgporn.com/logos/flutter.svg', current: true },
        { name: 'Styled Components', icon: './images/styled-components.png' },
        { name: 'JSS', icon: './images/jss.png', current: true },
        { name: 'Sass', icon: 'https://cdn.svgporn.com/logos/sass.svg' },
        { name: 'Stylus', icon: 'https://cdn.svgporn.com/logos/stylus.svg' },
    ],
    awards: [
        {
            title: 'BlackBerry Jam Sessions Latino America Winner!',
            logo: './images/blackberry.png',
            location: 'CDMX, Mexico',
            issuer: 'BlackBerry',
            description: 'First place winner at BlackBerry Jam Sessions Latino America #15 on the “Best Design” category and second place on the “Best app” category.',
            link: 'http://www.youtube.com/watch?feature=player_embedded&v=QQL9PpvNwRo',
            date: 'November 2012'
        }
    ],
    languages: [
        {
            name: 'English',
            level: 'Professional working proficiency'
        },
        {
            name: 'Spanish',
            level: 'Native or bilingual proficiency'
        }
    ],
    contact: [
        { name: 'Linkedin', icon: './images/linkedin.png', link: 'https://www.linkedin.com/in/alfrejivi/' },
        { name: 'Github', icon: 'https://cdn.svgporn.com/logos/github-icon.svg', link: 'https://github.com/alfrejivi' },
        { name: 'Twitter', icon: 'https://cdn.svgporn.com/logos/twitter.svg', link: 'https://twitter.com/alfrejivi' },
        { name: 'alfrejivi@gmail.com', icon: 'https://cdn.svgporn.com/logos/google-gmail.svg', link: 'mailto:alfrejivi@gmail.com' },
        { name: 'Instagram', icon: 'https://cdn.svgporn.com/logos/instagram-icon.svg', link: 'http://instagram.com/alfrejivi' },
    ]
};

export default Resume;