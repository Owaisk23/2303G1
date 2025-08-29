import React from 'react'
import Cards from '../Cards';

const Parent = () => {
    let cardData = [
        {
          image:
            "https://fastly.picsum.photos/id/133/200/300.jpg?hmac=eJnFxvIwHgkkHHPb2ppK_QqUG4mmom1XpVG0MLQcdTE",
          title: "Random Image",
          description: "This is a random img description",
        },
        {
          image:
            "https://fastly.picsum.photos/id/133/200/300.jpg?hmac=eJnFxvIwHgkkHHPb2ppK_QqUG4mmom1XpVG0MLQcdTE",
          title: "Car Image",
          description: "This is a random img description",
        },
        {
          image:
            "https://fastly.picsum.photos/id/133/200/300.jpg?hmac=eJnFxvIwHgkkHHPb2ppK_QqUG4mmom1XpVG0MLQcdTE",
          title: "Juice Image",
          description: "This is a random img description",
        },
        {
          image:
            "https://fastly.picsum.photos/id/431/200/304.jpg?hmac=gIcmEH2eY9G8u2YKE1oieHLVS9oPPMccM7KykLQM8q0",
          title: "Tea Image",
          description: "This is a random img description",
        },
      ];
  return (
    <div>
      <div className="d-flex justify-content-around mt-3">
          {cardData.map((item, index) => {
            return (
              <Cards
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
    </div>
  )
}

export default Parent
