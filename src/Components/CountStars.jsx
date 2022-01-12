import React from 'react'
import { StarFilled } from "../Assets/SVGs/icons"

export const CountStars = ({rating}) => {
  
  let ratingSolid = Math.floor(rating)
  let fullStars = ratingSolid
  let emptyStars = 5 - ratingSolid
  let template = []

  for(let i = 0; i < fullStars; i++){
    template.push("f")
  }

  for(let i = 0; i < emptyStars; i++){
    template.push("e")
  }

  return (
    <div className="stars">
      {
        template.map((i, index) => {
          return(
            <p key={index}>{i === "f" ? StarFilled(.75, "#f2c94c", "#f2c94c") : StarFilled(.75, "#f2c94c")}</p>
          )
        })
      }
    </div>
  )
}