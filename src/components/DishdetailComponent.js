import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderComments({ dish }) {
  if (dish != null && dish.comments != null) {
    const comment = dish.comments.map((comment) => {
      const dateOptions = { year: "numeric", month: "short", day: "2-digit" };
      const formattedDate = new Date(comment.date).toLocaleDateString(
        "en-US",
        dateOptions
      );
      return (
        <ul key={comment.id} className="list-unstyled">
          <li>{comment.comment}</li>
          <li>
            --{comment.author}, {formattedDate}
          </li>
        </ul>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        {comment}
      </div>
    );
  } else return <div></div>;
}

function RenderDish({ dish }) {
  if (dish != null)
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  else return <div></div>;
}

const DishDetail = (props) => {
  const selectedDish = props.dish;
  return (
    <div className="container">
      <div className="row">
        <RenderDish dish={selectedDish} />
        <RenderComments dish={selectedDish} />
      </div>
    </div>
  );
};

export default DishDetail;
