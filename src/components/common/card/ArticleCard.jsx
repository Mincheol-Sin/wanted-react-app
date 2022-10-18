import styled from "styled-components";

const ArticleCard = (props) => {
  return (
    <Card version={props.version}>
      <a href={props.href}>
        <div className="thumbnail">
          <img src={props.thumbnail} alt={props.title} />
        </div>
        <div className="content">
          <p className="author">{props.author}</p>
          <h4 className="title">{props.title}</h4>
          <p className="subTitle">{props.subTitle}</p>
          <p className="category">{props.category}</p>
        </div>
      </a>
    </Card>
  );
};

const Card = styled.li`
  padding 10px;

  .thumbnail {
    position: relative;
    padding-bottom: ${(props) => (props.version === "2" ? "52.3%" : "70%")};
    padding-left: 0;
    margin-bottom: 17px;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border-radius: 4px;
      object-fit: cover;
    }
  }

  .content {  

    .author {
      font-size: 14px;
      font-weight: 600;
      margin: 5px 0;
    }

    .title {
    font-size: 16px;
    font-weight: 700;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    }

    .subTitle {
      font-size: 13px;
      margin-top: 8px;
      font-weight: 600;
      color: #aaa;
    }

    .category {
      font-size: 12px;
      font-weight: 500;
      margin-top: 13px;
    }
  }
`;

export default ArticleCard;
