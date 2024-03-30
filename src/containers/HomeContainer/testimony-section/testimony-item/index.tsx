import React from 'react'

type TestimonyItemProps = {
  image_url: string
  name: string
  testimony: string
}

const TestimonyItem: React.FC<TestimonyItemProps> = ({
  image_url,
  name,
  testimony
}) => {
  return (
    <div className="testimonial-item mx-auto mb-5 mb-lg-0 select-none max-w-xs">
      <figure className="rounded-full overflow-hidden h-48 w-h-48 cursor-pointer select-none inline-block shadow-lg">
        <img
          className="h-full object-cover w-full"
          src={image_url}
          alt={name}
        />
      </figure>
      <h5 className="font-bold text-lg">{name}</h5>
      <p className="font-weight-light mb-0">{testimony}</p>
    </div>
  )
}

export default TestimonyItem
