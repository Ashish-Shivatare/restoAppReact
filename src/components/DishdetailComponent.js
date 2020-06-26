import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  renderComments(dish) {
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
        <div>
          <h4>Comments</h4>
          {comment}
        </div>
      );
    } else return <div></div>;
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  }

  render() {
    const dish = this.props.dish;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">{this.renderDish(dish)}</div>
          <div className="col-12 col-md-5 m-1">{this.renderComments(dish)}</div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
