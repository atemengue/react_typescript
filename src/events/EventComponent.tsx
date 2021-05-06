import React from "react"

const EventComponent: React.FC = () => {

  // passer le type de l'event
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
  }

  const onDragStart = (event: React.DragEvent<HTMLInputElement>) => {
    console.log(event)
  }

  return (
    <div>
      <input onChange={onChange} />
      <div  draggable onDragStart={onDragStart} >
        Drag me!!
      </div>
    </div>
  )
}
export default EventComponent