import { ISkill } from "../data/data";

interface SkillsProps {
    data: ISkill[];
    title: string;
}

const Skills = ({ data, title }: SkillsProps) => {
    return (
        <>
            <h3>{title}</h3>
            <article className="Skills">
                {data.map((skill, index) => (
                    <div className="Skills-skill" key={`skill_${index}`} >
                        <img src={skill.icon} />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </article>
            <style jsx>
                {`
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
                `}
            </style>
        </>
    );
}

export default Skills;