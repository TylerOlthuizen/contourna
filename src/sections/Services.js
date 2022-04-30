import React from "react"
import Button from "components/Button"
import { ContentCardAndImage } from "components/ContentCardAndImage"

const Services = ({services}) => {
  const {heading , description , ctaTitle , ctaPath, service_stat_cards } = services;
  console.log(service_stat_cards);
  return(
    <section className="section services section--gradient">
    <div className="container">
      <div className="py-4">
        {/* Any content here will be centered in the component */}
        {heading && (
          <h2 className="is-size-2">
            {heading}
          </h2>
        )}
        {description && (
          <p className="is-size-5">
            {description}
          </p>
        )}
        {ctaTitle && (
          <Button title={ctaTitle} path={ctaPath} type="primary" />
        )}
      </div>

      <div className="service-card-grid">
        {
          service_stat_cards.map((service,index) => {
            return(
              <ContentCardAndImage key={`home-service-card-${index}`} item={service} index={index} />
            )
          })
        }  
      </div> 

    </div>
  </section>
  )
} 


export default Services