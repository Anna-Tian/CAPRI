import React, { Component } from 'react';
import { primaryColor, whiteColor} from "assets/jss/material-kit-react.js";

class ScrollToTop extends Component {
  constructor(props) {
    super(props)

    this.scrollToTop = this.scrollToTop.bind(this);
  }

  render() {
    const ScrollToTopWrapper = {
        circle: {
            backgroundColor: whiteColor,
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            border: "2px solid #29A8DF",
        //     "&:hover": {
        //       backgroundColor: primaryColor,
        //       border: "3px solid #FFFFFF"
        //   }
          },
          circleTxt: {
            color: primaryColor,
            width: "80px",
            height: "80px",
            lineHeight: "80px",
            fontSize: "20px",
            textAlign: "center",
            fontFamily: "Arial Rounded MT Bold, Helvetica, sans-serif",
            cursor: "pointer",
        //     "&:hover": {
        //       color: whiteColor,
        //       fontSize: "25px",
        //    }
           }
    }
    return(
        <div 
            className='circle'
            style={ScrollToTopWrapper.circle}
            onClick = {this.scrollToTop}
        >
            <div 
                className='circleTxt'
                style={ScrollToTopWrapper.circleTxt}               
            >TOP</div>
        </div>

    )
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

export default ScrollToTop;