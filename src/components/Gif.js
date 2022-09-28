import React from "react"

export default function gif({title, id, url}) {
  return (
    <div>
      <h4>{title}</h4>
      <small>{id}</small>
      <img alt={title} src={url} />
    </div>
  )
}