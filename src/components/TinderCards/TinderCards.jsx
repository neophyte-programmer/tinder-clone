import React, { useState } from 'react'
import './TinderCards.css'


import TinderCard from 'react-tinder-card'


const TinderCards = () => {
	const [people, setPeople] = useState([
		{
			name:"Billie Eilish",
			imageUrl: "https://deadline.com/wp-content/uploads/2021/04/eilish.jpg",
		},
		{
			name: "Michael B. Jordan",
			imageUrl: "https://cdn.gobankingrates.com/wp-content/uploads/2022/06/shutterstock_editorial_12869333ug-1.jpg?w=675&quality=75",
		},
		{
			name: "Zendaya",
			imageUrl: "https://www.byrdie.com/thmb/p1NcK7Kxq2V2Akp0ii9zxJMPifk=/735x0/Screenshot1906-6fc696a44dba4097a4a42961f77f244f.png",
		},
		{
			name: "Chris Hemsworth",
			imageUrl: "https://pbs.twimg.com/media/Eav5wDGXsAEMUL5.jpg",
		},
		{
			name: "Michael Jackson",
			imageUrl: "https://i.guim.co.uk/img/media/20d9ad9ab7006201441a5bfd92ad05ae4dfcd367/0_49_3500_2101/master/3500.jpg?width=700&quality=85&auto=format&fit=max&s=bd13086bae6a07f9e28df3f759493d6d",
		},
  ])
  
  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    // setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen')
  }

	return (
		<div className='tinderCards'>
			<div className='tinderCards__cardContainer'>
				{people.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up', 'down']}
            onSwipe={(direction) => swiped(direction, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div className='card'>
              <div className='card__image'>
                <img src={person.imageUrl} alt={person.name} />
              </div>
              <h3 className='card__name'>{person.name}</h3>
              
            </div>
          </TinderCard>
				))}
			</div>
		</div>
	)
}

export default TinderCards
