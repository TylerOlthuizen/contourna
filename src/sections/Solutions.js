import React from 'react'
import { ContentCardAndImageCTA } from "components/ContentCardAndImageCTA"

const Solutions = ({solutions}) => {
  const {heading , home_solution_cards } = solutions
  return(
    <section class="solutions section py-6">
      <div className="container">
        <h2 className="is-size-2">{heading}</h2>
        <div className="home-solution-grid">
          {home_solution_cards.map((solution,index) => {
            return(
              <ContentCardAndImageCTA item={solution} index={index} />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Solutions