import React from 'react';
import { InnerPageTitleBlock, Header, FooterCTA, Footer, Navigation, PricingPlans } from '../theme/components';


import { connect } from 'react-redux';


interface props {
  onLeftMenu?(): void;
  OpenMenuBar: boolean
}

class Pricing extends React.Component<props, any> {

  render(): any {

    return (
      <div>
        <Header />
        <div className="bodySection">
          <InnerPageTitleBlock fromPage="Pricing" pageSubtitle="" videoDisplay="true" tryBtnDisplay="true" />
          <PricingPlans />
          <FooterCTA />
        </div>
        <Footer />
      </div>
    )
  }
}

const map = (state: any) => {
  return {
    ...state.MainReducer
  };
};

export default connect(
  map,
  null,
)(Pricing);





