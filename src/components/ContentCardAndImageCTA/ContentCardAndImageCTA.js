import React from 'react'
import Button from "components/Button"

export const ContentCardAndImageCTA = ({item,index}) => {

  const {title,content,image, ctaPath, ctaTitle} = item;
 
  return(
    <div className={`ContentCardAndImageCTA`}>
      <div className="content ">
        <h4 className="is-size-4">
          {title}
        </h4>
        <p>
          {content}
        </p>
        {ctaTitle && (
          <Button title={ctaTitle} path={ctaPath} type="secondary" />
        )}
      </div>
      <img src={image.publicURL} /> 
    </div>
  )

}