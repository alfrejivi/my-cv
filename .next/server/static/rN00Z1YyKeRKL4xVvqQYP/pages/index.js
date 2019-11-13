module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./data/data.tsx
const Resume = {
  introduction: {
    name: "Freddy Jimenez",
    avatar: "./avatar.jpg",
    location: "Amsterdam, The Netherlands"
  },
  experience: [{
    title: 'Full Stack Engineer',
    company: 'QWIC',
    logo: './qwic.png',
    duration: 'December 2018 - Current',
    location: 'Amsterdam, The Netherlands',
    description: ['Full-stack development for an e-commerce platform which provides to our customers a user-friendly application for ordering and managing our products.', 'Involved into the planning/designing phase for a brand-new back-end system.', 'Third-party software integrations such as Salesforce, Auth0, IcePay.', "Mobile application development that connects to the e-bike's hardware(IoT)."],
    stack: [{
      name: 'Reactjs',
      icon: 'https://cdn.svgporn.com/logos/react.svg'
    }, {
      name: 'Typescript',
      icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg'
    }, {
      name: 'Mobx State Tree',
      icon: 'https://cdn.svgporn.com/logos/mobx.svg'
    }, {
      name: 'Nodejs',
      icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg'
    }, {
      name: 'AWS',
      icon: 'https://cdn.svgporn.com/logos/aws.svg'
    }, {
      name: 'Git',
      icon: 'https://cdn.svgporn.com/logos/git-icon.svg'
    }]
  }, {
    title: 'Frontend Engineer II',
    company: 'Ooyala',
    logo: './ooyala.png',
    duration: 'February 2017 - November 2018',
    location: 'Guadalajara, Mexico',
    description: ['Leadership on Front End development in the Solutions Engineering team.', 'Development of a UI Components library using Storybook.', 'Web platform development for creating custom OTT applications in order to demonstrate product capabilities on the tradeshow.', "Development of prototypes, demos, and proofs of concepts (PoC's) used by the sales team at the trade shows.", "Development of web applications used in large-scale events such as the National Association of Broadcasters Show (NAB) in Las Vegas, Nevada and the International Broadcasting Convention (IBC) in Amsterdam in order to attract new prospects to the Company.", "Third-party software integrations such as Microsoft, MPP Global Solutions, Vindicia and Gigya.", "Some projects: Manchester United F.C., beIN Sports, Bloomberg, Chivas TV, Interactive Advertising Bureau (IAB), Redbox, and THX."],
    stack: [{
      name: 'Reactjs',
      icon: 'https://cdn.svgporn.com/logos/react.svg'
    }, {
      name: 'Redux',
      icon: 'https://cdn.svgporn.com/logos/redux.svg'
    }, {
      name: 'Nodejs',
      icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg'
    }, {
      name: 'Hapijs',
      icon: 'https://cdn.svgporn.com/logos/hapi.svg'
    }, {
      name: 'PostgreSQL',
      icon: 'https://cdn.svgporn.com/logos/postgresql.svg'
    }, {
      name: 'Git',
      icon: 'https://cdn.svgporn.com/logos/git-icon.svg'
    }]
  }, {
    title: 'Frontend Engineer',
    company: 'Ooyala',
    logo: './ooyala.png',
    duration: 'July 2015 - January 2017',
    location: 'Guadalajara, Mexico',
    description: ['Leadership in Frontend development in the Value Engineering team.', "Development of prototypes, demos, and proofs of concepts (PoC's) used by the sales team at the trade shows.", 'Development of web applications used in large-scale events such as the National Association of Broadcasters Show (NAB) in Las Vegas, Nevada and the International Broadcasting Convention (IBC) in Amsterdam in order to attract new prospects to the Company.', "Working with products/services of third-party Companies such as Microsoft, MPP Global Solutions, Vindicia and Gigya.", "Some projects/customers: Manchester United F.C., beIN Sports, Bloomberg, Chivas TV, Interactive Advertising Bureau (IAB), Redbox, and THX."],
    stack: [{
      name: 'Reactjs',
      icon: 'https://cdn.svgporn.com/logos/react.svg'
    }, {
      name: 'Flux',
      icon: 'https://cdn.svgporn.com/logos/flux.svg'
    }, {
      name: 'Angularjs',
      icon: 'https://cdn.svgporn.com/logos/angular-icon.svg'
    }, {
      name: 'Nodejs',
      icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg'
    }, {
      name: 'Expressjs',
      icon: 'https://cdn.svgporn.com/logos/express.svg'
    }, {
      name: 'PostgreSQL',
      icon: 'https://cdn.svgporn.com/logos/postgresql.svg'
    }, {
      name: 'Git',
      icon: 'https://cdn.svgporn.com/logos/git-icon.svg'
    }]
  }, {
    title: 'Frontend Engineer',
    company: 'Intagono',
    logo: 'https://intagono.com/wp-content/uploads/2017/08/logo_intagono-2x.png',
    duration: 'May 2014 - July 2015',
    location: 'Guadalajara, Mexico',
    description: ['Development of web sites and web applications for different types of clients.', "Frontend developer role supporting some Backend tasks as well, working with technologies such as Laravel framework, Javascript (vanilla, jquery, and angular.js), HTML, CSS.", 'Leadership in some projects on the frontend side.', "Some projects: Hersheys Mexico, Growerspace, Prep Academy Tutors, and BigAppetit (food delivery startup)."],
    stack: [{
      name: 'jQuery',
      icon: 'https://cdn.svgporn.com/logos/jquery.svg'
    }, {
      name: 'Angularjs',
      icon: 'https://cdn.svgporn.com/logos/angular-icon.svg'
    }, {
      name: 'PHP',
      icon: 'https://cdn.svgporn.com/logos/php.svg'
    }, {
      name: 'Laravel',
      icon: 'https://cdn.svgporn.com/logos/laravel.svg'
    }, {
      name: 'MySQL',
      icon: 'https://cdn.svgporn.com/logos/mysql.svg'
    }, {
      name: 'Git',
      icon: 'https://cdn.svgporn.com/logos/git-icon.svg'
    }]
  }, {
    title: 'Fullstack Engineer',
    company: 'ZipVisual',
    logo: 'https://www.zipvisual.com/bundles/front/images/zipvisual-logo.png',
    duration: 'February 2013 - May 2014',
    location: 'Guadalajara, Mexico',
    description: ['Development of web sites and web applications for different types of clients.', "Fullstack developer role working with technologies such as Symfony framework, Javascript (vanilla and jquery), HTML, CSS.", 'Some projects: Crown Paradise hotels, Color and Art, Moco de Gorila and Colibrí Jewellery.'],
    stack: [{
      name: 'jQuery',
      icon: 'https://cdn.svgporn.com/logos/jquery.svg'
    }, {
      name: 'PHP',
      icon: 'https://cdn.svgporn.com/logos/php.svg'
    }, {
      name: 'Symfony',
      icon: 'https://cdn.svgporn.com/logos/symfony.svg'
    }, {
      name: 'MySQL',
      icon: 'https://cdn.svgporn.com/logos/mysql.svg'
    }]
  }],
  education: [{
    name: 'Universidad de Guadalajara',
    logo: './udg.png',
    title: 'Computer Engineering, Software',
    duration: '2008 - 2013'
  }, {
    name: 'IoT',
    logo: 'https://cdn.svgporn.com/logos/aws.svg',
    title: 'Developing and Deploying an Internet of Things',
    duration: 'August 2019',
    credentialLink: 'https://courses.edx.org/certificates/d372e340b9894e80becea59fd705967b'
  }, {
    name: '',
    logo: './jsnation.svg',
    title: 'TypeScript Workshop with Michel Weststrate + Conference',
    duration: 'June 2019'
  }, {
    name: 'Lynda.com',
    logo: 'https://cdn.svgporn.com/logos/lynda.svg',
    title: 'Performing Complex State Management with Redux',
    duration: 'September 2018',
    credentialLink: 'http://www.lynda.com/Redux-tutorials/Performing-Complex-State-Management-Redux/724805-2.html'
  }, {
    name: 'Lynda.com',
    logo: 'https://cdn.svgporn.com/logos/lynda.svg',
    title: 'React: Testing and Debugging',
    duration: 'September 2018',
    credentialLink: 'http://www.lynda.com/React-js-tutorials/React-Testing-Debugging/592511-2.html'
  }, {
    name: '',
    logo: './platzi.png',
    title: 'Javascript Fundamentals',
    duration: 'December 2017',
    credentialLink: 'https://platzi.com/@alfrejivi/curso/1099-fundamentos-javascript-2017/diploma/detalle/'
  }, {
    name: '',
    logo: './caav.svg',
    title: 'Graphic Design Certified',
    duration: 'June 2015'
  }, {
    name: '',
    logo: 'https://cdn.svgporn.com/logos/oracle.svg',
    title: 'Oracle Certified Professional, Java SE 6 Programmer',
    duration: 'January 2013',
    credentialLink: 'https://www.youracclaim.com/badges/4783a9a8-75d8-4bd1-b1a4-983db13c8dbe/linked_in_profile'
  }, {
    name: '',
    logo: './brandhome.png',
    title: 'Web Development Certified',
    duration: 'September 2011'
  }, {
    name: 'Code School',
    logo: './code-school.png',
    title: 'Shaping up with angularjs',
    duration: 'September 2011'
  }],
  skills: [{
    name: 'Javascript',
    icon: 'https://cdn.svgporn.com/logos/javascript.svg'
  }, {
    name: 'Reactjs',
    icon: 'https://cdn.svgporn.com/logos/react.svg'
  }, {
    name: 'Typescript',
    icon: 'https://cdn.svgporn.com/logos/typescript-icon.svg'
  }, {
    name: 'Mobx State Tree',
    icon: 'https://cdn.svgporn.com/logos/mobx.svg'
  }, {
    name: 'Redux',
    icon: 'https://cdn.svgporn.com/logos/redux.svg'
  }, {
    name: 'Flux',
    icon: 'https://cdn.svgporn.com/logos/flux.svg'
  }, {
    name: 'Angularjs',
    icon: 'https://cdn.svgporn.com/logos/angular-icon.svg'
  }, {
    name: 'AWS',
    icon: 'https://cdn.svgporn.com/logos/aws.svg'
  }, {
    name: 'Nextjs',
    icon: 'https://cdn.svgporn.com/logos/nextjs.svg'
  }, {
    name: 'Nodejs',
    icon: 'https://cdn.svgporn.com/logos/nodejs-icon.svg'
  }, {
    name: 'Nestjs',
    icon: 'https://cdn.svgporn.com/logos/nestjs.svg'
  }, {
    name: 'Jest',
    icon: 'https://cdn.svgporn.com/logos/jest.svg'
  }, {
    name: 'Enzyme',
    icon: 'https://cdn.svgporn.com/logos/airbnb.svg'
  }, {
    name: 'Mocha',
    icon: 'https://cdn.svgporn.com/logos/mocha.svg'
  }, {
    name: 'Puppeteer',
    icon: 'https://cdn.svgporn.com/logos/puppeteer.svg'
  }, {
    name: 'Sentry',
    icon: 'https://cdn.svgporn.com/logos/sentry.svg'
  }, {
    name: 'Git',
    icon: 'https://cdn.svgporn.com/logos/git-icon.svg'
  }, {
    name: 'Jira',
    icon: 'https://cdn.svgporn.com/logos/jira.svg'
  }, {
    name: 'HTML',
    icon: 'https://cdn.svgporn.com/logos/html-5.svg'
  }, {
    name: 'CSS',
    icon: 'https://cdn.svgporn.com/logos/css-3.svg'
  }, {
    name: 'Java',
    icon: 'https://cdn.svgporn.com/logos/java.svg'
  }, {
    name: 'Zeplin',
    icon: 'https://cdn.svgporn.com/logos/zeplin.svg'
  }],
  awards: [{
    title: 'BlackBerry Jam Sessions Latino America Winner!',
    logo: './blackberry.png',
    location: 'CDMX, Mexico',
    issuer: 'BlackBerry',
    description: 'First place winner at BlackBerry Jam Sessions Latino America #15 on the “Best Design” category and second place on the “Best app” category.',
    link: 'http://www.youtube.com/watch?feature=player_embedded&v=QQL9PpvNwRo',
    date: 'November 2012'
  }],
  languages: [{
    name: 'English',
    level: 'Professional working proficiency'
  }, {
    name: 'Spanish',
    level: 'Native or bilingual proficiency'
  }],
  contact: [{
    name: 'Linkedin',
    icon: './linkedin.png',
    link: 'https://www.linkedin.com/in/alfrejivi/'
  }, {
    name: 'Github',
    icon: 'https://cdn.svgporn.com/logos/github-icon.svg',
    link: 'https://github.com/alfrejivi'
  }, {
    name: 'Twitter',
    icon: 'https://cdn.svgporn.com/logos/twitter.svg',
    link: 'https://twitter.com/alfrejivi'
  }, {
    name: 'alfrejivi@gmail.com',
    icon: 'https://cdn.svgporn.com/logos/google-gmail.svg',
    link: 'mailto:alfrejivi@gmail.com'
  }, {
    name: 'Instagram',
    icon: 'https://cdn.svgporn.com/logos/instagram-icon.svg',
    link: 'http://instagram.com/alfrejivi'
  }]
};
/* harmony default export */ var data_data = (Resume);
// CONCATENATED MODULE: ./components/experience.tsx

var __jsx = external_react_default.a.createElement;

const styles = __jsx("style", {
  jsx: true
}, `
        .Experience {
            display: flex;
            flex-direction: column;    
            padding: 0 1rem;
        }
        .Experience-work {
            display: flex;
            flex-direction: column;
            padding: 3rem 0;
            border-bottom: 1px solid rgba(200,200,200, .2);
        }
        .Experience-work:first-child{
            padding-top: 0;
        }
        .Experience-work-title {
            display: flex;
            align-items: baseline;
        }

        .Experience-work-duration {
            font-size: 1rem;
            margin: 0 1rem
            opacity: .5;
            margin-left: 1rem;
        }

        .Experience-work-place {
            display: flex;
            align-items: center;
            margin: .5rem 0;
        }

        .Experience-work-place img {
            max-height: 45px;
            max-width: 100px;
            justify-self: center
        }

        .Experience-work-place div {
            display: flex;
            flex-direction: column;
            margin-left: 1rem;
        }

        .Experience-work-stack{
            display: flex;
            flex-wrap: wrap;
            margin-top: 1rem;
        }

        .Experience-work-tool{
            display: flex;
            align-items: center;
            margin: .5rem 1rem;
        }

        .Experience-work-tool img{
            width: 20px;
            margin-right: .5rem;
        }
    `);

const Experience = ({
  data
}) => {
  return __jsx(external_react_default.a.Fragment, null, __jsx("h3", null, "Experience"), __jsx("article", {
    className: "Experience"
  }, data.map((work, index) => __jsx("div", {
    key: `work_${index}`,
    className: "Experience-work"
  }, __jsx("div", {
    className: "Experience-work-title"
  }, __jsx("h4", {
    className: "Experience-work-position"
  }, work.title), __jsx("span", {
    className: "Experience-work-duration"
  }, work.duration)), __jsx("div", {
    className: "Experience-work-place"
  }, __jsx("img", {
    src: work.logo,
    alt: work.company
  }), __jsx("div", null, __jsx("h6", {
    className: "Experience-work-company"
  }, work.company), __jsx("span", {
    className: "Experience-work-location"
  }, work.location))), __jsx("ul", {
    className: "Experience-work-description"
  }, work.description.map((point, index) => __jsx("li", {
    key: `point_${index}`
  }, point))), __jsx("div", {
    className: "Experience-work-stack"
  }, work.stack.map((tool, index) => __jsx("div", {
    className: "Experience-work-tool",
    key: `tool_${index}`
  }, __jsx("img", {
    src: tool.icon
  }), __jsx("span", null, tool.name))))))), styles);
};

/* harmony default export */ var experience = (Experience);
// CONCATENATED MODULE: ./components/education.tsx

var education_jsx = external_react_default.a.createElement;

const education_styles = education_jsx("style", {
  jsx: true
}, `
        .Education {
            display: flex;
            flex-direction: column;
            padding-bottom: 3rem;
            padding: 0 1rem;
        }

        .Education-entity{
            margin: 1rem 0;
        }

        .Education-entity-place {
            display: flex;
            align-items: center;
        }

        .Education-entity img {
            max-height: 45px;
            max-width: 80px;
        }

        .Education-entity-name {
            margin-left: .5rem;
        }

        .Education-entity-details {
            display: flex;
            flex-direction: column;
            margin-top: .5rem;
        }

        .Education-entity-duration{
            opacity: .8;
            font-size: .8rem;
            align-self: flex-end;
        }
    `);

const Education = ({
  data
}) => {
  return education_jsx(external_react_default.a.Fragment, null, education_jsx("h3", null, "Education"), education_jsx("article", {
    className: "Education"
  }, data.map((entity, index) => education_jsx("div", {
    key: `entity_${index}`,
    className: "Education-entity"
  }, education_jsx("div", {
    className: "Education-entity-place"
  }, education_jsx("img", {
    src: entity.logo,
    alt: entity.name
  }), education_jsx("h6", {
    className: "Education-entity-name"
  }, entity.name)), education_jsx("div", {
    className: "Education-entity-details"
  }, education_jsx("span", {
    className: "Education-entity-subject"
  }, entity.title), education_jsx("span", {
    className: "Education-entity-duration"
  }, entity.duration))))), education_styles);
};

/* harmony default export */ var education = (Education);
// CONCATENATED MODULE: ./components/introduction.tsx

var introduction_jsx = external_react_default.a.createElement;

const introduction_styles = introduction_jsx("style", {
  jsx: true
}, `
        .Introduction {
            background-color: rgba(200,200,200,.1);
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 3rem 0;
            margin: 0 2rem;
        }
        .Introduction-avatar {
            width: 200px;
            height: 200px;
            padding: 0 2rem;
            border-radius: 50%;
            margin: auto;
        }
        .Introduction-wrapper{
            padding: 1rem 2rem;
            flex: 1 350px;
        }
        .Introduction-name{
            font-size: 3rem;
        }
        .Introduction-title{
            font-size: 1.2rem;
            margin-top: .5rem;
        }
        
    `);

const Introduction = ({
  data
}) => {
  return introduction_jsx(external_react_default.a.Fragment, null, introduction_jsx("article", {
    className: "Introduction"
  }, introduction_jsx("img", {
    className: "Introduction-avatar",
    src: data.avatar
  }), introduction_jsx("div", {
    className: "Introduction-wrapper"
  }, introduction_jsx("h1", {
    className: "Introduction-name"
  }, data.name), introduction_jsx("h2", {
    className: "Introduction-title"
  }, "Fullstack Engineer @qwic"), introduction_jsx("p", {
    className: "Introduction-description"
  }, "Versatile Fullstack Developer with more experience on the frontend. 5+ years of experience developing web applications using Javascript (latest 3 years using React.js)."), introduction_jsx("span", {
    className: "Introduction-location"
  }, data.location))), introduction_styles);
};

/* harmony default export */ var introduction = (Introduction);
// CONCATENATED MODULE: ./components/skills.tsx

var skills_jsx = external_react_default.a.createElement;

const skills_styles = skills_jsx("style", {
  jsx: true
}, `
        .Skills {
            display: flex;
            flex-direction: column;
            border-bottom: 1px solid rgba(200,200,200, .2);
            padding: 0 1rem;
            padding-bottom: 3rem;
        }
        .Skills-skill{
            display: flex;
            align-items: center;
            margin: .5rem 0;
        }

        .Skills-skill img{
            width: 20px;
            margin-right: .5rem;
        }
    `);

const Skills = ({
  data
}) => {
  return skills_jsx(external_react_default.a.Fragment, null, skills_jsx("h3", null, "Skills & Tools"), skills_jsx("article", {
    className: "Skills"
  }, data.map((skill, index) => skills_jsx("div", {
    className: "Skills-skill",
    key: `skill_${index}`
  }, skills_jsx("img", {
    src: skill.icon
  }), skills_jsx("span", null, skill.name)))), skills_styles);
};

/* harmony default export */ var skills = (Skills);
// CONCATENATED MODULE: ./components/languages.tsx

var languages_jsx = external_react_default.a.createElement;

const languages_styles = languages_jsx("style", {
  jsx: true
}, `
        .Languages {
            display: flex;
            flex-direction: column;    
            border-bottom: 1px solid rgba(200,200,200, .2);
            padding: 0 1rem;
            padding-bottom: 3rem;
        }
        .Languages-language{
            margin: .5rem 0;
        }
    `);

const Languages = ({
  data
}) => {
  return languages_jsx(external_react_default.a.Fragment, null, languages_jsx("h3", null, "Languages"), languages_jsx("article", {
    className: "Languages"
  }, data.map((language, index) => languages_jsx("div", {
    key: `language_${index}`,
    className: "Languages-language"
  }, languages_jsx("h6", {
    className: "Languages-language-name"
  }, language.name), languages_jsx("span", {
    className: "Languages-language-level"
  }, language.level)))), languages_styles);
};

/* harmony default export */ var languages = (Languages);
// CONCATENATED MODULE: ./components/contact.tsx

var contact_jsx = external_react_default.a.createElement;

const contact_styles = contact_jsx("style", {
  jsx: true
}, `
        .Contact {
            display: flex;
            flex-direction: column;    
            padding: 0 1rem;
            padding-bottom: 3rem;
        }
        .Contact-type{
            display: flex;
            align-items: center;
            margin: .5rem 0;
        }

        .Contact-type img{
            width: 20px;
            margin-right: .5rem;
        }

        .Contact-type a{
            text-decoration: none;
            color: black;
        }
    `);

const Contact = ({
  data
}) => {
  return contact_jsx(external_react_default.a.Fragment, null, contact_jsx("h3", null, "Contact"), contact_jsx("article", {
    className: "Contact"
  }, data.map((contact, index) => contact_jsx("div", {
    className: "Contact-type",
    key: `skill_${index}`
  }, contact_jsx("img", {
    src: contact.icon
  }), contact_jsx("a", {
    href: contact.link,
    target: "_blank"
  }, contact.name)))), contact_styles);
};

/* harmony default export */ var contact = (Contact);
// CONCATENATED MODULE: ./components/awards.tsx

var awards_jsx = external_react_default.a.createElement;

const awards_styles = awards_jsx("style", {
  jsx: true
}, `
        .Award {
            display: flex;
            flex-direction: column; 
            border-bottom: 1px solid rgba(200,200,200, .2);
            padding: 0 1rem;
            padding-bottom: 3rem;    
        }
        .Award-award {
            display: flex;
            flex-direction: column;
            margin: 2rem 0;
        }
        .Award-award-title {
            display: flex;
            align-items: baseline;
            justify-content: space-between;
        }

        .Award-award-date {
            font-size: 1rem;
            margin: 0 1rem
        }

        .Award-award-place {
            display: flex;
            align-items: flex-end;
            margin: .5rem 0;
        }

        .Award-award-place img {
            max-height: 80px;
            max-width: 140px;
            justify-self: center
        }

        .Award-award-place span {
            margin-left: 1rem;
        }
        .Award-award-date{
            opacity: .8;
            font-size: .8rem;
            align-self: flex-end;
        }
    `);

const Awards = ({
  data
}) => {
  return awards_jsx(external_react_default.a.Fragment, null, awards_jsx("h3", null, "Award"), awards_jsx("article", {
    className: "Award"
  }, data.map((award, index) => awards_jsx("div", {
    key: `award_${index}`,
    className: "Award-award"
  }, awards_jsx("div", {
    className: "Award-award-place"
  }, awards_jsx("img", {
    src: award.logo,
    alt: award.issuer
  }), awards_jsx("span", null, award.location)), awards_jsx("a", {
    href: award.link,
    target: "_blank"
  }, awards_jsx("h5", {
    className: "Award-award-title"
  }, award.title)), awards_jsx("p", null, award.description), awards_jsx("span", {
    className: "Award-award-date"
  }, award.date)))), awards_styles);
};

/* harmony default export */ var awards = (Awards);
// CONCATENATED MODULE: ./pages/index.tsx


var pages_jsx = external_react_default.a.createElement;









const pages_styles = pages_jsx(style_default.a, {
  id: "966896618"
}, ["@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap');", "body,h1,h2,h3,h4,h5,h6{border:0;padding:0;margin:0;}", "body,h2{font-family:'Roboto',sans-serif;font-weight:300;}", "a{-webkit-text-decoration:none;text-decoration:none;color:black;}", "h1{font-weight:500;}", "h3{font-size:2rem;font-weight:400;margin:2rem 0;background-color:rgba(200,200,200,.1);padding:1rem;}", "h4{font-size:1.7rem;font-weight:500;}", "h5{font-weight:400;font-size:1.5rem;}", "h6{font-weight:400;font-size:1.2rem;}", "p{max-width:800px;}", ".Resume{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:5rem 1rem;width:100vw;max-width:1500px;margin:auto;box-sizing:border-box;}", ".Resume-content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0 1rem;}", ".Resume-main{-webkit-flex:2 520px;-ms-flex:2 520px;flex:2 520px;margin:0 1rem;}", ".Resume-sidebar{-webkit-flex:1 100px;-ms-flex:1 100px;flex:1 100px;margin:0 1rem;}"]);

const pages_Resume = ({
  data
}) => pages_jsx("section", {
  className: "Resume"
}, pages_jsx(introduction, {
  data: data.introduction
}), pages_jsx("section", {
  className: "Resume-content"
}, pages_jsx("section", {
  className: "Resume-main"
}, pages_jsx(experience, {
  data: data.experience
}), pages_jsx(education, {
  data: data.education
})), pages_jsx("section", {
  className: "Resume-sidebar"
}, pages_jsx(skills, {
  data: data.skills
}), pages_jsx(languages, {
  data: data.languages
}), pages_jsx(awards, {
  data: data.awards
}), pages_jsx(contact, {
  data: data.contact
}))), pages_styles);

pages_Resume.getInitialProps = async () => {
  return {
    data: data_data
  };
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Resume);

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });