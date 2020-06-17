import React, { Component } from 'react';
import {whiteColor} from "assets/jss/material-kit-react.js";

class FloatToTop extends Component {
  constructor(props) {
    super(props)

    this.state = ({
      show: false
    })
 
    this.changeScrollTopShow = this.changeScrollTopShow.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.changeScrollTopShow)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeScrollTopShow)
  }
  render() {
    const { show } = this.state;
    const ScrollToTopWrapper = {
        circle: {
            backgroundColor: "rgba(105, 105, 105, 0.3)",
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            position: "fixed",
            right: "0",
            bottom: "320px",
            zIndex: "100"
          },
          middleCircle: {
            backgroundColor: "rgba(117, 117, 117, 0.4)",
            width: "60px",
            height: "60px",
            borderRadius: "50%",  
            border: "2px solid rgba(255, 255, 255, 0.55)",
            margin: "5px"
          },
          circleTxt: {
            color: whiteColor,
            width: "60px",
            height: "60px",
            lineHeight: "60px",
            fontSize: "18px",
            textAlign: "center",
            fontFamily: "Arial Rounded MT Bold, Helvetica, sans-serif",
            cursor: "pointer"
           }
    }
    return(
        show && 
        <div 
            className='circle'
            style={ScrollToTopWrapper.circle}
            onClick = {this.scrollToTop}
        >
            <div
             className='middleCircle'
             style={ScrollToTopWrapper.middleCircle}           
            >
                <div 
                    className='circleTxt'
                    style={ScrollToTopWrapper.circleTxt}               
                >TOP</div>
            </div>
        </div>

    )
  }

  changeScrollTopShow() {
    if (window.pageYOffset < 400) {
      this.setState({
        show: false
      })
    }else {
      this.setState({
        show: true
      })
    }
  }

  scrollToTop() {
    const scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if ( pos > 0 ) {
        window.scrollTo( 0, pos - 20 );
      } else {
        window.clearInterval( scrollToTop );
      }
    }, 1);
  }
}

export default FloatToTop;