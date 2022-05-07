import React from 'react'
import Button from "components/Button"

const HowItWorks = ({howItWorks}) => {
  const { copy,ctaPath,ctaTitle,heading,how_it_works_list, image } = howItWorks;
  return(
    <section class="how-it-works section py-6">
      <div className="container">
          <div className="is-flex-tablet is-align-items-center columns">
            <div className="header__illustration column is-half-tablet">
              <img src={image.publicURL} />
            </div>
            <div className="header__content column is-half-tablet pr-5">
                {/* Any content here will be centered in the component */}
                {heading && (
                  <h1 className="is-size-1 mb-3">
                    {heading}
                  </h1>
                )}
                {how_it_works_list && (
                  <div class="list-item-container">
                    {
                      how_it_works_list.map((item,index) => {
                        return (
                          <div className="list-item">
                            <p>
                              {item.listHeading}
                            </p>
                            <p className="ml-1 mt-1">
                              {item.listContent}
                            </p>
                          </div>
                        )
                      })
                    }
                  </div>
                )}
                {copy && (
                  <p className="is-size-6">
                    {copy}
                  </p>
                )}
                {ctaTitle && (
                  <Button title={ctaTitle} path={ctaPath} type="primary" />
                )}
            </div>
          </div>
        </div>
    </section>
  )
}

export default HowItWorks