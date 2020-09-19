import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = { span: 0 };
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.spans);
  }
  spans = () => {
    const height = this.imageRef.current.clientHeight;
    const span=Math.ceil(height/10)
    this.setState({span});
  };
  render() {
    return (
      <div style={{gridRowEnd:`span ${this.state.span}`}}>
        <img className="image"
          ref={this.imageRef}
          src={this.props.image.urls.regular}
          alt={this.props.image.description}
        />
      </div>
    );
  }
}
export default ImageCard;
