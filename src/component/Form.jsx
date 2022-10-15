import Sucess from "./Sucess"

export default function Form({
  handleChangeCN, 
  handleChangeCNumber,
  handleChangeExpMonth,
  handleChangeExpYear,
  handleChangeCvc,
  handleSubmit,
  errorCN,
  errorMsgCN,
  errorCNumber,
  errorMsgCNumber,
  errorEM,
  errorEY,
  errorMsgE,
  errorCVC,
  errorMsgCVC,
  success
}) 
{
  return (
    <div className="flex lg:flex-row flex-col">
      <div className="lg:bg-bgMainDesktop bg-bgMainMobile lg:h-screen h-[240px] lg:w-[30%] bg-cover"></div>
      <div className="flex items-center justify-center h-screen lg:w-[70%]">
        {/* If sucess is equal true then the success message is displayed */}
        {success && <Sucess/>}
        {!success && <form onSubmit={handleSubmit} className="flex flex-col max-w-[320px] gap-[15px]">
          <label className="flex flex-col">
            <span>CARDHOLDER NAME</span>
            <input type="text" 
              className={`${errorCN ? 'border-error' : 'focus:border-correct'}`} 
              placeholder="Jane Appleseed"
              onChange={(e) => {handleChangeCN(e)}}
            />
            {errorCN && <span className="text-error">{errorMsgCN}</span>}
          </label>
          <label className="flex flex-col">
            <span>CARD NUMBER</span>
            <input
              className={`${errorCNumber ? 'border-error' : 'focus:border-correct'}`} 
              type="text" 
              placeholder='e.g. 1234 5678 9123 0000'
              maxLength="16"
              onChange={(e) => {handleChangeCNumber(e)}}
            />
            {errorCNumber && <span className="text-error">{errorMsgCNumber}</span>}
          </label>
          <div className="flex flex-row w-full gap-[15px]">
            <label className="flex flex-col w-1/2">
              <span>EXP. DATE(MM/YY)</span>
              <div className="flex flex-row gap-[10px]">
                <input
                  className={`${errorEM ? 'border-error' : 'focus:border-correct'} w-1/2`}
                  type="text" 
                  placeholder='MM'
                  maxLength="2"
                  onChange={(e) => {handleChangeExpMonth(e)}}
                />
                <input 
                   className={`${errorEY ? 'border-error' : 'focus:border-correct'} w-1/2`}
                  type="text" 
                  placeholder='YY'
                  maxLength="2"
                  onChange={(e) => {handleChangeExpYear(e)}}
                />
              </div>
            {(errorEM || errorEY) && <span className="text-error">{errorMsgE}</span>}
            </label>
            <label className="flex flex-col w-1/2">
              <span>CVC</span>
              <input 
                className={`${errorCVC ? 'border-error' : 'focus:border-correct'}`}
                type="text" 
                placeholder='123'
                maxLength="3"
                onChange={(e) => {handleChangeCvc(e)}}
              />
              {errorCVC && <span className="text-error">{errorMsgCVC}</span>}
            </label>
          </div>
          <input type='submit' value='Confirm' className="bg-btn text-ui-white cursor-pointer"/>
        </form>}
      </div>
    </div>
  )
}