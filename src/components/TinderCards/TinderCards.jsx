import React, { useState } from 'react'
import './TinderCards.css'

import billie from '../../images/billie.jpg'
import mBJordan from '../../images/m-b-jordan.webp'
import zendaya from '../../images/zendaya.png'
import chris from '../../images/chris.jpg'
import jackson from '../../images/jackson.webp'

import TinderCard from 'react-tinder-card'


const TinderCards = () => {
	const [people, setPeople] = useState([
		{
			name: 'Billie Eilish',
			image: billie,
		},
		{
			name: 'Michael B. Jordan',
			image: mBJordan,
		},
		{
			name: 'Zendaya',
			image: zendaya,
		},
		{
			name: 'Chris Hemsworth',
			image: chris,
		},
		{
			name: 'Michael Jackson',
			image: jackson,
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
                <img src={person.image} alt={person.name} />
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
