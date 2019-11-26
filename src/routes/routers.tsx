import { HomeSplit_A, HomeSplit_B } from "../screens"
import AboutUs from "../screens/AboutUs"
import Pricing from "../screens/Pricing"
import Product from "../screens/Product"
import ProductRoles from "../screens/ProductRoles"

const ByndrRoutes = [
    {
        pageName:"Page 1",
        title:"Page 1",
        seoVisibility:true, // default it has to be true
        metaTitle:"Page 1",
        metaTags:"Meta Tags for Page 1",
        path:'/',
        metaDescription:"Meta Description for Page 1",
        component:HomeSplit_A,
        routes: [],
    },
    {
        pageName:"Page 2",
        title:"Page 2",
        seoVisibility:true, // default it has to be true
        metaTitle:"Page 2",
        metaTags:"Meta Tags for Page 2",
        path:'/test-case',
        metaDescription:"Meta Description for Page 2",
        component:HomeSplit_B,
        routes: []
    },
    {
        pageName:"We are an education company",
        title:"About Us",
        seoVisibility:true, // default it has to be true
        metaTitle:"About Us",
        metaTags:"About Us Meta Tags",
        path:'/aboutus',
        metaDescription:"About Us Meta Description",
        component:AboutUs,
        routes: []
    },
    {
        pageName:"Pricing Plans",
        title:"Pricing Plans",
        seoVisibility:true, // default it has to be true
        metaTitle:"Pricing Plans",
        metaTags:"Pricing Plans Meta Tags",
        path:'/pricing',
        metaDescription:"Pricing Plans Meta Description",
        component:Pricing,
        routes: []
    },
    {
        pageName:"Product",
        title:"Product",
        seoVisibility:true, // default it has to be true
        metaTitle:"Product",
        metaTags:"Product Meta Tags",
        path:'/product',
        metaDescription:"Product Meta Description",
        component:Product,
        routes: []
    },
    {
        pageName:"Product Roles",
        title:"Product Roles",
        seoVisibility:true, // default it has to be true
        metaTitle:"Product Roles",
        metaTags:"Product Roles Meta Tags",
        path:'/product-roles',
        metaDescription:"Product Roles Meta Description",
        component:ProductRoles,
        routes: []
    }
]

export { ByndrRoutes}