import React, { useState } from 'react'
import classes from './UserInput.module.css'

const UserInput = ({ calculateHandler }) => {
	const initialValues = {
		'current-savings': 10000,
		'yearly-contribution': 500,
		'expected-return': 5,
		duration: 10,
	}

	const [userInput, setUserInput] = useState(initialValues)

	const resetHandler = () => {
		setUserInput(initialValues)
	}

	const submitHandler = (e) => {
		e.preventDefault()
		calculateHandler(userInput)
	}

	const changeHandler = (input, value) => {
		setUserInput((prevInput) => {
			return {
				...prevInput,
				[input]: +value,
			}
		})
	}

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<div className={classes['input-group']}>
				<p>
					<label htmlFor='current-savings'>Current Savings ($)</label>
					<input
						onChange={(e) => changeHandler('current-savings', e.target.value)}
						type='number'
						id='current-savings'
						value={userInput['current-savings']}
					/>
				</p>
				<p>
					<label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
					<input
						onChange={(e) => changeHandler('yearly-contribution', e.target.value)}
						type='number'
						id='yearly-contribution'
						value={userInput['yearly-contribution']}
					/>
				</p>
			</div>
			<div className={classes['input-group']}>
				<p>
					<label htmlFor='expected-return'>Expected Interest (%, per year)</label>
					<input
						onChange={(e) => changeHandler('expected-return', e.target.value)}
						type='number'
						id='expected-return'
						value={userInput['expected-return']}
					/>
				</p>
				<p>
					<label htmlFor='duration'>Investment Duration (years)</label>
					<input
						onChange={(e) => changeHandler('duration', e.target.value)}
						type='number'
						id='duration'
						value={userInput['duration']}
					/>
				</p>
			</div>
			<p className={classes['actions']}>
				<button onClick={resetHandler} type='reset' className={classes.buttonAlt}>
					Reset
				</button>
				<button type='submit' className={classes.button}>
					Calculate
				</button>
			</p>
		</form>
	)
}

export default UserInput
