import "./Article.css";

export const Article = ({topic, hashtag, type, title, image, tweets}) => {
    return(
        <div>
            <div className="article">
            <span className="article_topic">{topic}</span> . <span className="article_type">{type}</span>
            <h4 className="article_title">{title}{hashtag}</h4>
            {/* <p>{tweets}</p> */}
            </div>
            {/* <div>
                <img src={image} alt="" />
            </div> */}
        </div>
    )
}