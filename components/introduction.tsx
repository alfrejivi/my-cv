import { IIntroduction } from "../data/data";

interface IntroductionProps {
    data: IIntroduction;
}

const styles = (
    <style jsx>{`
        .Introduction {
            background-color: rgba(200,200,200,.1);
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 3rem 0;
            margin: 0 1rem;
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
        
    `}</style>
);

const Introduction = ({ data }: IntroductionProps) => {
    return (
        <>
            <article className="Introduction">
                <img className="Introduction-avatar" src={data.avatar} />
                <div className="Introduction-wrapper">
                    <h1 className="Introduction-name">{data.name}</h1>
                    <h2 className="Introduction-title">Fullstack Engineer @qwic</h2>
                    <p className="Introduction-description">
                        Versatile Fullstack Developer with more experience on the frontend. 5+ years of experience developing web applications using Javascript (latest 3 years using React.js).
                    </p>
                    <span className="Introduction-location">
                        {data.location}
                    </span>
                </div>
            </article>
            {styles}
        </>
    );
}

export default Introduction;