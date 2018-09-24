# gatsby-dynamic-image

A React component that given a [Gatsby][gatsby] `File` [node][node] will either
render a [gatsby-image][gi] component or a native `img` element. This is useful
for cases where you don't know whether or not an image has been processed by
[gatsby-transformer-sharp][gts] (such as when iterating over a collection which
contains references to images of varying formats).

## Usage

- Install the package from npm:

```sh
npm install --save gatsby-dynamic-image
```

- Import the component and use it in place of any existing gatsby-image instance
  or img element. The following example assumes a collection of Markdown
  documents processed with [gatsby-transformer-remark][gtr] and
  [gatsby-remark-images][gri] containing image paths in frontmatter:

```js
import Image from 'gatsby-dynamic-image';
import React from 'react';

export default ({ data }) => (
  <React.Fragment>
    <h1>My images</h1>
    {data.allMarkdownRemark.edges.map(node => (
      <Image node={node.frontmatter.image} />
    ))}
    <Image node={data} />
  </React.Fragment>
);

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 980) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
```

[gatsby]: https://www.gatsbyjs.org/
[node]: https://www.gatsbyjs.org/docs/node-interface/
[gi]: https://www.gatsbyjs.org/packages/gatsby-image/
[gts]: https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/
[gtr]: https://www.gatsbyjs.org/packages/gatsby-transformer-remark/
[gri]: https://www.gatsbyjs.org/packages/gatsby-remark-images/
