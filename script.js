let prevInput = '0'
let calculationOperator = ''
let currentInput = '0'

//for initializing
const initialize = () =>
{
	prevInput = '0'
	calculationOperator = ''
	currentInput = '0'
}

//for inputting a number
const inputNumber = (number) =>
{
	if (currentInput === '0')
	{
		currentInput = number
	}
	else
	{
	currentInput += number
	}
}

//for inputting an operator
const inputOperator = (operator) =>
{
	prevInput = currentInput
	calculationOperator = operator
	currentInput = '0'
}

//for Percent
const Percent = () =>
{
	calculationOperator = '%'
}

//for calculating
const calculate = () =>
{
	let result = 0;
	switch(calculationOperator)
	{
		case '+': result = parseFloat(prevInput) + parseFloat(currentInput)
				  break
		case '-': result = parseFloat(prevInput) - parseFloat(currentInput)
				  break
		case '*': result = parseFloat(prevInput) * parseFloat(currentInput)
				  break
		case '/': result = parseFloat(prevInput) / parseFloat(currentInput)
				  break
		case '%': result = parseFloat(currentInput) / 100
				  break
		default:  return
	}
	currentInput = result.toString();
	calculationOperator = ''
}

//for updating Screen
const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) =>
{
	calculatorScreen.value = number
}

//for numbers
const numbers = document.querySelectorAll(".number")

numbers.forEach((number) =>
{
	number.addEventListener("click", (event) =>
	{
		inputNumber(event.target.value)
		updateScreen(currentInput)
	})
})

//for operators
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) =>
{
	operator.addEventListener("click" , (event) =>
	{
		inputOperator(event.target.value)
	})
})

//for decimal
const decimalPoint = document.querySelector(".decimal")

	decimalPoint.addEventListener("click", (event) =>
	{
		inputNumber(event.target.value)
		updateScreen(currentInput)
	})

//for equal to
const equalSign = document.querySelector(".equal-sign")

equalSign.addEventListener('click' , ()=>
{
	calculate()
	updateScreen(currentInput)
})

//for AC
const allClear = document.querySelector(".all-clear")

allClear.addEventListener('click' , ()=>
{
	initialize()
	updateScreen(currentInput)
})

//for Percentage
const percentageSign = document.querySelector(".percentage")
percentageSign.addEventListener('click' , (event)=>
{
	Percent()
})

