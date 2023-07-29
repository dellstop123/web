import * as React from "react"
import { graphql} from "gatsby"

export default ({data}) => {
 console.log(data);
  return(
    <div>

      <title></title>
      <img></img>

    </div>
  )
}

export const query = graphql`{
  allMarkdownRemark {
    nodes {
      frontmatter {
        Title
        Date
        Keywords
        image
      }
    }
  }
}`