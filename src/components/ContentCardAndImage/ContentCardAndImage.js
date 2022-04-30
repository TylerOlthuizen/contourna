import React from 'react'
export const ContentCardAndImage = ({item,index}) => {

  const {title,content,image} = item;
  let direction;
  switch(index % 2){
    case 0:
      direction = "bottom"
      break;
    case 1 :
      direction = "top"
      break;
    default:
    return false
  }

  return(
    <div className={`${direction} ContentCardAndImage`}>
      <div className="content ">
        <h4 className="is-size-4">
          {title}
        </h4>
        <p>
          {content}
        </p>
      </div>
      <img src={image.publicURL} /> 
    </div>
  )

}