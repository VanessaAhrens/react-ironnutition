import React from 'react';

class FoodBox extends React.Component {

    render() {
        return (
            (<div className="box">
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={this.props.foodData.image} />
        </figure>
      </div>
      <div className="media-content">
        <div className="content">
          <p>
            <strong>{this.props.foodData.name}</strong> <br />
            <small>{this.props.foodData.calories} cal</small>
          </p>
        </div>
      </div>
      <div className="media-right">
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="number" 
              value="1"
            />
          </div>
          <div className="control">
            <button className="button is-info">
              +
            </button>
          </div>
        </div>
      </div>
    </article>
  </div>)

        )
    }
}
export default FoodBox;