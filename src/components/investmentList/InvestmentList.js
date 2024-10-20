import classes from './InvestmentList.module.css'

const formatter = new Intl.NumberFormat('PL', {
	style: 'currency',
	currency: 'PLN',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
})

const InvestmentList = ({ userInput, data }) => {
	return (
		<table className={classes.result}>
			<thead>
				<tr>
					<th>Year</th>
					<th>Total Savings</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				{data.map((yearData) => (
					<tr key={yearData.year}>
						<td>{yearData.year}</td>
						<td>{formatter.format(yearData.savingsEndOfYear)}</td>
						<td>{formatter.format(yearData.yearlyInterest)}</td>
						<td>
							{formatter.format(yearData.savingsEndOfYear - userInput['current-savings'] - yearData.yearlyContribution * yearData.year)}
						</td>
						<td>{formatter.format(userInput['current-savings'] + yearData.yearlyContribution * yearData.year)}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default InvestmentList
