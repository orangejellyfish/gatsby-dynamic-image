import React from 'react';
import GatsbyImage from 'gatsby-image';

// A React component that takes a Gatsby File node and renders either a
// gatsby-image component or a native <img> element depending on whether or not
// the node is of type ImageSharp.
export default ({ node, ...props }) => {
  if (node.childImageSharp && node.childImageSharp.fluid) {
    return <GatsbyImage fluid={node.childImageSharp.fluid} {...props} />;
  }

  if (node.childImageSharp && node.childImageSharp.fixed) {
    return <GatsbyImage fixed={node.childImageSharp.fixed} {...props} />;
  }

  // eslint-disable-next-line jsx-a11y/alt-text
  return <img src={node.publicURL} {...props} />;
};
