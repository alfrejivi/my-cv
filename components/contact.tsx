import { IContact } from "../data/data";

interface ContactsProps {
    data: IContact[];
}

const Contact = ({ data }: ContactsProps) => {
    return (
        <>
            <h3>Contact</h3>
            <article className="Contact">
                {
                    data.map((contact, index) => (
                        <div className="Contact-type" key={`skill_${index}`} >
                            <img src={contact.icon} />
                            <a href={contact.link} target="_blank">{contact.name}</a>
                        </div>
                    ))
                }
            </article>
            <style jsx>
                {`
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
                `}
            </style>
        </>
    );
}

export default Contact;