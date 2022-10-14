import {useState} from 'react'
import BackCard from "./component/cardUI/BackCard"
import FrontCard from "./component/cardUI/FrontCard"
import Form from "./component/Form"


// Since this is the JSX file that contains all the components, the state were created here to avoid excessive prop drilling and keep the code neat

function App() {
  // All states linked to the card name input
  const [cardName, setCardName] = useState('')
  const [errorCN, setErrorCN] = useState(false)
  const [errorMsgCN, setErrorMsgCN] = useState('')

  // All states linked to the card number input
  const [cardNumber, setCardNumber] = useState([])
  const [errorCNumber, setErrorCNumber] = useState(false)
  const [errorMsgCNumber, setErrorMsgCNumber] = useState('')

  // All states linked to the expiring date inputs
  const [expMonth, setExpMonth] = useState([])
  const [expYear, setExpYear] = useState([])
  const [errorEM, setErrorEM] = useState(false)
  const [errorEY, setErrorEY] = useState(false)
  const [errorMsgE, setErrorMsgE] = useState('')

  // All states linked to the cvc input
  const [cvc, setCvc] = useState([])
  const [errorCVC, setErrorCVC] = useState(false)
  const [errorMsgCVC, setErrorMsgCVC] = useState('')

  // State for handling submission of form
  const [success, setSuccess] = useState(false)

  // A function to handle error for inputs involving numbers
  const handleErrorNumber = (e, setError, setErrorMsg) => {
    // Since input must contain only number, a condition that checks if any of the input is not a number
    if(isNaN(e.target.value)){
      setError(true)
      setErrorMsg('Wrong format, numbers only')

    // A check for an empty input
    }else if (e.target.value === ''){
      setError(true)
      setErrorMsg("Can't be blank")
    }else{
      setError(false)
    }
  }
  // A function that handle error for the input for card name
  const handleErrorName = (e, setError, setErrorMsg) => {
    // Since the type of input does not matter, there is no check except a check for when it is empty
    if (e.target.value === ''){
      setError(true)
      setErrorMsg("Can't be blank")
    }else{
      setError(false)
    }
  }

  // This function helps update the the various state linked to the inputs as the value of the input are changing. This is done to acheive real-time update functionality

  const handleChangeCN = (e) => {
    handleErrorName(e, setErrorCN, setErrorMsgCN)
    setCardName(e.target.value)
  }
  const handleChangeCNumber = (e) => {
    handleErrorNumber(e, setErrorCNumber, setErrorMsgCNumber)
    const arrayNum = e.target.value.split('')
    setCardNumber(arrayNum)
  }
  const handleChangeExpMonth = (e) => {
    handleErrorNumber(e, setErrorEM, setErrorMsgE)
    const arrayNum = e.target.value.split('')
    setExpMonth(arrayNum)
  }
  const handleChangeExpYear = (e) => {
    handleErrorNumber(e, setErrorEY, setErrorMsgE)
    const arrayNum = e.target.value.split('')
    setExpYear(arrayNum)
  }
  const handleChangeCvc = (e) => {
    handleErrorNumber(e, setErrorCVC, setErrorMsgCVC)
    const arrayNum = e.target.value.split('')
    setCvc(arrayNum)
  }

  // Function that handle error on submit. This set the success to be false and prevent form submission
  const handleSubmitError = (setError, setErrorMsg, msg="Can't be blank") => {
    setError(true)
    setSuccess(false)
    setErrorMsg(msg)
  }

  const handleSubmit = (e) => {
    // This help prevent normal reload of page on submit
    e.preventDefault()

    // A check for the card name, if empty it set error of the input to be true
    if(cardName == ''){
      handleSubmitError(setErrorCN, setErrorMsgCN)
    }

    // A check for the card number, if empty or card number not up to 16 it set error of the input to be true
    if(cardNumber.length < 1){
      handleSubmitError(setErrorCNumber, setErrorMsgCNumber)
    }else if(cardNumber.length > 0 && cardNumber.length < 16){
      handleSubmitError(setErrorCNumber, setErrorMsgCNumber, 'Card number must be 16 digits')
    }

    // A check for the expiring month, if empty or digit not up to 2 it set error of the input to be true
    if(expMonth.length < 1){
      handleSubmitError(setErrorEM, setErrorMsgE)
    }else if(expMonth.length > 0 && expMonth.length < 2){
      handleSubmitError(setErrorEM, setErrorMsgE, 'Month/Year must be in the right format')
    }

    // A check for the expiring year, if empty or digit not up to 2 it set error of the input to be true
    if(expYear.length < 1){
      handleSubmitError(setErrorEY, setErrorMsgE)
    }else if(expYear.length > 0 && expYear.length < 2){
      handleSubmitError(setErrorEY, setErrorMsgE, 'Month/Year must be in the right format')
    }

    // A check for the cvc, if empty or digit not up to 3 it set error of the input to be true
    if(cvc.length < 1){
      handleSubmitError(setErrorCVC, setErrorMsgCVC)
    }else if(cvc.length > 0 && cvc.length < 3){
      handleSubmitError(setErrorCVC, setErrorMsgCVC, 'CVC must be in the right format(3 digits)')
    }

    // This is the check that goes through all the condition that is to be met for form submission. If one of the condition is not met then the form doesn't submit, hence success will still be set to be false
    if((!errorCN && !errorCNumber && !errorEM && !errorEY && !errorCVC) && (cardName != '' && cardNumber.length == 16 &&  expMonth.length == 2 && expYear.length == 2 && cvc.length == 3)){
      setSuccess(true)
    }
  }

  return (
    <div className="relative App font-space-grotesk">
      <Form
        handleChangeCN={handleChangeCN} 
        handleChangeCNumber={handleChangeCNumber}
        handleChangeExpMonth={handleChangeExpMonth}
        handleChangeExpYear={handleChangeExpYear}
        handleChangeCvc={handleChangeCvc}
        handleSubmit={handleSubmit}
        errorCN={errorCN}
        errorMsgCN={errorMsgCN}
        errorCNumber={errorCNumber}
        errorMsgCNumber={errorMsgCNumber}
        errorEM={errorEM}
        errorEY={errorEY}
        errorMsgE={errorMsgE}
        errorCVC={errorCVC}
        errorMsgCVC={errorMsgCVC}
        success = {success}
      />
      <FrontCard 
        cardName={cardName} 
        cardNumber={cardNumber}
        expMonth={expMonth}
        expYear={expYear}
      />
      <BackCard cvc={cvc}/>
    </div>
  )
}

export default App
