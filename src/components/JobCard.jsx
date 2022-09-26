import styled from "styled-components";
import { Link } from "react-router-dom";

const JobCard = (props) => {
  return (
    <PositionLink to="/" backgroundImg={props.imgSrc}>
      <div className="job-card__header"></div>
      <div className="job-card__body">
        <h3 className="job-card-position">{props.position}</h3>
        <p className="job-card-company-name">{props.company}</p>
        <p className="job-card-company-location">{props.location}</p>
        <p className="job-card-reward">채용보상금 {props.reward}원</p>
      </div>
    </PositionLink>
  );
};

const PositionLink = styled(Link)`
  .job-card__header {
    padding-bottom: 75%;ß
    position: relative;
    background-size: cover;
    background-position: 50%;
    background-image: url(${(props) => props.backgroundImg});
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px rgb(0 0 0 / 10%);
  }

  .job-card__body {
    padding: 14px 0;
  }

  .job-card-position {
    color: #333;
    font-size: 18px;
    font-weight: 600;
  }

  .job-card-company-name {
    font-weight: 600;
    margin-top: 8px;
  }

  .job-card-company-location {
    font-weight: 400;
    color: #999;
    margin-top: 8px;
  }

  .job-card-reward {
    font-weight: 500;
    margin-top: 8px;
  }
`;

export default JobCard;
