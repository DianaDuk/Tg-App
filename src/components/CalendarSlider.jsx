import { Box } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import DateCard from './DateCard'

const CARD_WIDTH = 69.19

const CalendarSlider = () => {
  const [cards, setCards] = useState([{ id: 0 }])
  const [offset, setOffset] = useState(0)
  const nextId = useRef(1)

  useEffect(() => {
    let timeoutId

    const addCard = () => {
      const delay = Math.random() * 3000 + 1000

      timeoutId = setTimeout(() => {
        setCards(prev => [{ id: nextId.current++ }, ...prev])
        setOffset(prev => prev + CARD_WIDTH - 10)
        addCard()
      }, delay)
    }

    addCard()
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <Box
      sx={{
        width: '100%',
        height: '53px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          position: 'absolute',
          top: 0,
          right: 'calc(100% - 69.19px)',
          height: '100%',
          transition: 'transform 0.5s ease-in-out',
          transform: `translateX(${offset}px)`,
        }}
      >
        {cards.map(card => (
          <Box
            key={card.id}
            sx={{
              width: `${CARD_WIDTH}px`,
              height: '100%',
              flexShrink: 0,
              ml: '-10px',
            }}
          >
            <DateCard />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default CalendarSlider
