import { IAward } from "../data/data";

interface AwardsProps {
    data: IAward[];
}

const Awards = ({ data }: AwardsProps) => {
    return (
        <>
            <h3>Award</h3>
            <article className="Award">
                {
                    data.map((award, index) => (
                        <div key={`award_${index}`} className="Award-award">
                            <div className="Award-award-place">
                                <img src={award.logo} alt={award.issuer} />
                                <span>{award.location}</span>
                            </div>
                            <a href={award.link} target="_blank"><h5 className="Award-award-title">{award.title}</h5></a>
                            <p>{award.description}</p>
                            <span className="Award-award-date">{award.date}</span>
                        </div>
                    ))
                }
            </article>
            <style jsx>
                {`
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
                `}
            </style>
        </>
    );
}

export default Awards;