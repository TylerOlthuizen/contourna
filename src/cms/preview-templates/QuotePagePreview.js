import React from 'react'
import PropTypes from 'prop-types'
import { QuotePageTemplate } from '../../templates/quote-page'

const QuotePagePreview = ({ entry, widgetFor }) => (
  <QuotePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

QuotePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default QuotePagePreview
