import React from 'react';
import { NavLink } from 'react-router-dom';
import ModelPopup from './ModelPopup';

interface props {
    onLeftMenu?(): void,
    fromPage:any,
    pageSubtitle:any,
    videoDisplay:any,
    tryBtnDisplay:any,
    OpenModelPopup?: any
}

export default class InnerPageTitleBlock extends React.Component<props, any> {
  constructor(props) {
    super(props);
    this.state = { OpenModelPopup: false };
}

togglePopup() {
  this.setState({
    OpenModelPopup: !this.state.OpenModelPopup
  });
}
    render(): any {

      const {fromPage,pageSubtitle,videoDisplay,tryBtnDisplay} = this.props

        return (
            <section>
            <div className="homeBanner_backgroundimage">
              <div className="homeBanner_main">
                <div className="homeBanner_contentblock">
                  <div className="banner_title">
                    {fromPage}
                  </div>
                  {pageSubtitle !=""?<div className="banner_content">
                    {pageSubtitle}
                  </div>:null}
                  {videoDisplay == "true"?<div className="video">
                    <div className="home_v2_banner_play">
                      <div className="home_v2_banner_play_icon">
                        <a href="https://vimeo.com/83897470" data-lightbox><i className="material-icons">
                            play_arrow
                          </i></a>
                      </div>
                    </div>
                  </div>:null}
                  {/* <button onClick={this.togglePopup.bind(this)}> Play</button>
                  {this.state.OpenModelPopup ?
         <ModelPopup OpenModelPopup={this.state.OpenModelPopup}
         />
         : null
       } */}
                  {/* <ModelPopup OpenModelPopup={this.props.OpenModelPopup}/> */}
                  {tryBtnDisplay == "true"?<div className="CallToAction_btn">
                    <div className="CallToAction_btn_inr">
                      <a href="./"> 
                        Start using Byndr Free.
                      </a>
                    </div>
                  </div>:null}
                </div>
              </div>
            </div>
          </section>          
            );
    }
}