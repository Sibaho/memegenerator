import React, {Component} from 'react';
import {connect} from 'react-redux';

class MyMemes extends Component{
  render(){
    console.log("MyMemes", this.props.myMemes);
    return(
      <div>
        <h4>My Memes</h4>
        {
          this.props.myMemes.map((meme, index) => {
            return(
              <div className="my-meme-item" key={index}>
                <img src={meme.data.url} alt="my-meme" className="my-meme-image"/>
                <a href={meme.data.url} download="meme" className="download-text">Download</a>
              </div>
            );
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    myMemes: state.myMemes
  }
}

export default connect(mapStateToProps, null)(MyMemes);
