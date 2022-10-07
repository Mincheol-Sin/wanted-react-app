import styled from "styled-components";

const ArticleCard = (props) => {
  return (
    <Card>
      <a href={props.href}>
        <div className="thumbnail">
          <img src={props.thumbnail} alt={props.title} />
        </div>
        <div className="content">
          <h4>{props.title}</h4>
          <p>{props.category}</p>
        </div>
      </a>
    </Card>
  );
};

const Card = styled.li`
  padding 10px;

  .thumbnail {
    position: relative;
    padding-bottom: 70%;
    padding-left: 0;

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
    h4 {
    margin-top: 17px;
    font-size: 16px;
    font-weight: 700;
    }

    p {
      font-size: 12px;
      font-weight: 500;
      margin-top: 13px;
    }
  }
`;

export default ArticleCard;
