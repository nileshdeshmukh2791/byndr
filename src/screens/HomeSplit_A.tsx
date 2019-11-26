import React, { Component } from 'react'
import { AppContext } from '../contextApi/AppContext';
import { Home_A_Hero, Home_A_Grids, FeaturesGrid, FooterCTA, SupportedDivices, HomeTestimonial, Header, Footer } from '../theme/components';
import { Helmet } from "react-helmet";
import { Home_A_Context } from '../contextApi/HomeSplit_A.context';

interface props {

}

class HomeSplit_A extends Component<props, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            //   ReturnMessage:""
            selectedTab: "teacher",

        };
        this.onbuttonclick = this.onbuttonclick.bind(this)
    }

    onbuttonclick(key, value): any {
        console.log("clicked: ", key, value);
        this.setState({ [key]: value })
    }

    render(): any {
        // console.log('this.props From HomeSplit A', this.props)

        // let activeTab= "teacher";
        return (
            <Home_A_Context.Provider value={{
                state: this.state,
                click_Tab: this.onbuttonclick
            }}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Byndr Title Goes here Page by Page</title>
                    <link rel="canonical" href="https://www.byndr.com" />
                </Helmet>
                <Header />
                <div className="bodySection">
                    <Home_A_Hero
                    //  State={this.state}  click_Tab={this.onbuttonclick}  
                    />
                    <Home_A_Grids />
                    <FeaturesGrid />
                    <SupportedDivices />
                    <HomeTestimonial />
                    <FooterCTA />
                </div>
                <Footer />
            </Home_A_Context.Provider>
        );
    }
}

export default HomeSplit_A;