import React from 'react'
import PropTypes from 'prop-types'
import { SolutionsPageTemplate } from '../../templates/solutions-page'

const SolutionsPagePreview = ({ entry, widgetFor }) => (
  <SolutionsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

SolutionsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SolutionsPagePreview
