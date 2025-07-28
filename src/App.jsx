import { Box } from '@mui/material'
import './App.css'
import UniversalCaseCard from './components/UniversalCaseCard'
import FreeCaseCard from './components/FreeCaseCard'
import DateCard from './components/DateCard'
import Header from './layouts/Header'
import cardData from './data/cardData.json'
import CalendarSlider from './components/CalendarSlider'
import Footer from './layouts/Footer'

function App() {
	const cards = new Array(10).fill(0)

	return (
		<Box
			sx={{
				height: '100vh',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				bgcolor: '#080512',
			}}
		>
			<Header />
			<Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
				<Box sx={{ px: '12px' }}>
					<CalendarSlider />
				</Box>
				<Box
					sx={{
						display: 'flex',
						gap: '10px',
						flexWrap: 'wrap',
						justifyContent: 'center',
					}}
				>
					<FreeCaseCard />
					{cardData.map((card, index) => (
						<UniversalCaseCard
							key={index}
							gradientColor={card.color}
							price={card.price}
						/>
					))}
				</Box>
			</Box>
			<Footer />
		</Box>
	)
}

export default App
