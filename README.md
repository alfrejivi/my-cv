# My CV - Resume [![GitHub](https://img.shields.io/github/license/alfrejivi/my-cv?color=blue)](https://github.com/alfrejivi/my-cv/blob/master/LICENSE.md) ![GitHub stars](https://img.shields.io/github/stars/alfrejivi/my-cv) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/0350622c71654fe192995003e7f3ffb2)](https://app.codacy.com/manual/alfrejivi/my-cv?utm_source=github.com&utm_medium=referral&utm_content=alfrejivi/my-cv&utm_campaign=Badge_Grade_Dashboard)

**CV/Resume** personal website template built it using Next.js and Typescript.

Please go and change the `data/data.tsx` file to fill the CV/Resume with your personal information Feel free to use it and customize it as much as you desire.

To view a live example, **[click here](https://freddyjimenez.dev)**

## Getting Started

From your command line, clone and run this repository running:

```bash
# Clone this repository
$ git clone https://github.com/alfrejivi/my-cv.git

# Go into the repository
$ cd /my-cv

# Install dependencies
$ npm i

# Run the project
$ npm run dev
```

## Google Analitycs

Create an `.env` file and add your GA ID:

```javascript
GA_ID=UA-XXXXXXXX-X
```

## Images and Fonts and public assets

Store any public assets in `public` folder and access to them as root folder in your website `./`


## Customize every section in `/data/data.tsx` with your own information.

```javascript
/* Change this file to have your own CV / Resume data */

const Resume: IResume = {
    /* Your summary and introduction */
    introduction: {
        name: "Freddy Jimenez",
        avatar: "./images/avatar.jpg",
        location: "Amsterdam, The Netherlands",
        description: "I'm a happy Software Developer :)",
        position: "Fullstack Engineer @awesome-company"
    },
    /* Your work experience */
    experience: [ ... ],
    education: [ ... ],
    skills: [ ... ],
    awards: [ ... ],
    languages: [ ... ],
    contact: [ ... ]
};
```

## Technologies used

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/) 
- [Typescript](https://www.typescriptlang.org/)


## Deployment
I'm currently using [ZEIT Now](https://zeit.co/) and I highly recommend to use it. Please go to the [docs](https://zeit.co/docs) to see how incredibly easy and fast is to deploy with it.

## Contribute

If you are interested in **contribute** and make this project much better for the community, plese open a [pull request](https://github.com/alfrejivi/my-cv/pulls) or take a look at the [issues](https://github.com/alfrejivi/my-cv/issues).

## Contact

Freddy Jimenez :
[alfrejivi@gmail.com](mailto:alfrejivi@gmail.com) |
[alfrejivi.com](https://alfrejivi.com) |
[Linkedin](https://www.linkedin.com/in/alfrejivi/) |
[Github](https://github.com/alfrejivi)

## Other info
For more information please visit https://nextjs.org/docs 


