import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from 'templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
        heroImage={getAsset(data.heroImage)}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        ctaTitle={data.ctaTitle}
        ctaPath={data.ctaPath}
        description={data.description}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
