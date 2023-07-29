import React from "react"
import {Helmet} from "react-helmet"
import { StaticQuery, graphql } from "gatsby"


const SEO = ({title, description, keywords, image}) => (
<StaticQuery 
  query={query}
  render={({
    site : {
        siteMetadata: {
          defaultTitle,
          defaultImage,
          defaultDescription,
          defaultKeywords,
        },
      },
  }) => {
    const seo = {
        title: title || defaultTitle,
        image: '${image ? image : defaultImage}',
        keywords: keywords || defaultKeywords,
        description: description || defaultDescription

   }
    return(
    <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} ></meta>
        <meta name="keywords" content={seo.keywords} ></meta>
        <meta name="robots" content="index,follow"></meta>
    </Helmet>
        )
  }  
}
/>
)

export default SEO

export const query = graphql`
{
    site{
      siteMetadata{
        defaultTitle: title
        defaultImage: image
        defaultDescription: description
        defaultKeywords: keywords
      }
    }
  }
`
