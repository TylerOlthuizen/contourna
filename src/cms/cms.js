import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import CompanyPagePreview from './preview-templates/CompanyPagePreview'
import QuotePagePreview from './preview-templates/QuotePagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ServicesPagePreview from './preview-templates/ServicesPagePreview'
import SolutionsPagePreview from './preview-templates/SolutionsPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('company', CompanyPagePreview)
CMS.registerPreviewTemplate('quote', QuotePagePreview)
CMS.registerPreviewTemplate('services', ServicesPagePreview)
CMS.registerPreviewTemplate('solutions', SolutionsPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
