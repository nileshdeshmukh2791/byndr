import React from 'react';
import { FooterCTA, Header, Navigation, Footer, InnerPageTitleBlock } from '../theme/components';
import { AppContext } from '../contextApi/AppContext';
import WhoIsBynderFor from '../theme/components/WhoIsBynderFor';
import ProductCoreCapabilities from '../theme/components/ProductCoreCapabilities';

interface props {
    onLeftMenu?(): void;
}

export default class Product extends React.Component<props, any> {

    render(): any {

        return (
            <AppContext.Provider value={{
                authenticated: false,
            }}>
              <Header />
            <div className="bodySection">
            <InnerPageTitleBlock />
            <WhoIsBynderFor />
            <ProductCoreCapabilities />
            <FooterCTA />
            </div>
            <Footer />
          <Navigation />
          </AppContext.Provider>
       )
    }
}