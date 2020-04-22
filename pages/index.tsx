import Head from 'next/head';
import Router from 'next/router';
import withGA from 'next-ga';

import data from '../data/data';
import Experience from '../components/experience';
import Education from '../components/education';
import Introduction from '../components/introduction';
import Skills from '../components/skills';
import Languages from '../components/languages';
import Contact from '../components/contact';
import Awards from '../components/awards';
import { GetStaticProps } from 'next';

const styles = (
    <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap');
        body, h1, h2, h3, h4, h5, h6 {
            border: 0;
            padding: 0; 
            margin: 0;
        }
        
        body, h2 {
            font-family: 'Roboto', sans-serif;
            font-weight: 300;
        }
        a{
            text-decoration: none;
            color: black;
        }
        h1 {
            font-weight: 500;
        }
        h3 {
            font-size: 2rem;
            font-weight: 400;
            margin: 2rem 0;
            background-color: rgba(200,200,200,.1);
            padding: 1rem;
        }
        h4 {
            font-size: 1.7rem;
            font-weight: 500;
        }
        h5 {
            font-weight: 400;
            font-size: 1.5rem;
        }
        h6 {
            font-weight: 400;
            font-size: 1.2rem;
        }
        p {
            max-width: 800px;
        }
      
        .Resume {
            display: flex;
            flex-direction: column;
            padding: 2rem 1rem;
            width: 100vw;
            max-width: 1500px;
            margin: auto;
            box-sizing: border-box;
        }
        .Resume-content{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between
        }
        .Resume-main{
            flex: 2 520px;
            margin: 0 1rem;
        }
        .Resume-sidebar{
            flex: 1 100px;
            margin: 0 1rem;
        }
        
    `}</style>
);

const Resume = () => (
    <section className="Resume">
        <Head>
            <title>{data.introduction.name}</title>
            <meta name="description" content={data.introduction.description} />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png" />
            <link rel="manifest" href="./favicon/site.webmanifest" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff"></meta>
        </Head>
        <Introduction data={data.introduction} />
        <section className="Resume-content">
            <section className="Resume-main">
                <Experience data={data.experience} />
                <Education data={data.education} />
            </section>
            <section className="Resume-sidebar">
                <Skills data={data.skills.filter(skill => skill.current)} title="Current Stack" />
                <Skills data={data.skills.filter(skill => !skill.current)} title="I Have Used" />
                <Languages data={data.languages} />
                <Awards data={data.awards} />
                <Contact data={data.contact} />
            </section>
        </section>
        {styles}
    </section>
);

export default withGA(process.env.GA_ID, Router)(Resume);