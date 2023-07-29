/**
//  * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
     title: "Charan Kamal Sahib, JASROTA",
     description : "This is the description of our website",
     keywords: "charan kamal, charan, kamal, sahib, charan kamal sahib, Jasrota gurudwara, guru nanak dev ji",
     image: "/static/kanda.png"
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    // {
    //   resolve: "gatsby-transformer-remark",    
    // },
    {
      resolve: "gatsby-plugin-react-helmet"
    },
  ],
};
