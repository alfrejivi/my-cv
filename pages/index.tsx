import { NextPage } from 'next';
import withGA from 'next-ga';

import data, { IResume } from '../data/data';
import Experience from '../components/experience';
import Education from '../components/education';
import Introduction from '../components/introduction';
import Skills from '../components/skills';
import Languages from '../components/languages';
import Contact from '../components/contact';
import Awards from '../components/awards';

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

const Resume: NextPage<{ data: IResume }> = ({ data }) => (
    <section className="Resume">
        <Introduction data={data.introduction} />
        <section className="Resume-content">
            <section className="Resume-main">
                <Experience data={data.experience} />
                <Education data={data.education} />
            </section>
            <section className="Resume-sidebar">
                <Skills data={data.skills} />
                <Languages data={data.languages} />
                <Awards data={data.awards} />
                <Contact data={data.contact} />
            </section>
        </section>
        {styles}
    </section>
);

Resume.getInitialProps = async () => {
    return { data };
};

export default withGA("UA-40889102-4")(Resume);