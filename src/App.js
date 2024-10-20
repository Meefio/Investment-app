import Header from './components/header/Header'
import UserInput from './components/userInput/UserInput'
import InvestmentList from './components/investmentList/InvestmentList'
import { useState } from 'react'

function App() {
	const [userInput, setUserInput] = useState(null)

	const calculateHandler = (userInput) => {
		setUserInput(userInput)
	}

  const yearlyData = []

	if (userInput) {

		let currentSavings = +userInput['current-savings']
		const yearlyContribution = +userInput['yearly-contribution']
		const expectedReturn = +userInput['expected-return'] / 100
		const duration = +userInput['duration']

		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn
			currentSavings += yearlyInterest + yearlyContribution
			yearlyData.push({
				// feel free to change the shape of the data pushed to the array!
				year: i + 1,
				yearlyInterest: yearlyInterest,
				savingsEndOfYear: currentSavings,
				yearlyContribution: yearlyContribution,
			})
		}
	}

	return (
		<div>
			<Header title='Investment Calculator' />
			<UserInput calculateHandler={calculateHandler} />
			{userInput !== null ? <InvestmentList userInput={userInput} data={yearlyData}/> : <h3 style={{'textAlign': 'center' }}>no investment calculated yet.</h3>}

			{/* Todo: Show below table conditionally (only once result data is available) */}
			{/* Show fallback text if no data is available */}
		</div>
	)
}

export default App
