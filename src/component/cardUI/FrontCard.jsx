import logo from '../../assets/card-logo.svg'
export default function FrontCard({
  cardName, 
  cardNumber,
  expMonth,
  expYear
}) {
  return (
    <div className="absolute z-10 sm:top-[15%] top-[16%] lg:left-[5%] xl:left-[8%] sm:left-[25%] left-[5%] flex flex-col bg-cardFrontBg p-[20px] lg:w-[410px] w-[320px] bg-contain bg-no-repeat lg:gap-[60px] gap-[30px]">
      <div className='flex flex-row items-center gap-[10px] sm:w-[80px] w-[60px]'>
        <img className='w-full' src={logo} alt="log" />
      </div>
      <div className='flex flex-col gap-[20px]'>
        <div className="flex flex-row lg:gap-[22px] gap-[15px] lg:text-[25px] text-[20px] text-ui-white">
          {cardNumber.length > 0 ? 
            <>
              <span className='tracking-widest'>{cardNumber[0]}{cardNumber[1]}{cardNumber[2]}{cardNumber[3]}</span>
              <span className='tracking-widest'>{cardNumber[4]}{cardNumber[5]}{cardNumber[6]}{cardNumber[7]}</span>
              <span className='tracking-widest'>{cardNumber[8]}{cardNumber[9]}{cardNumber[10]}{cardNumber[11]}</span>
              <span className='tracking-widest'>{cardNumber[12]}{cardNumber[13]}{cardNumber[14]}{cardNumber[15]}</span>
            </>
           : 
           <>
            <span className='tracking-widest'>0000</span>
            <span className='tracking-widest'>0000</span>
            <span className='tracking-widest'>0000</span>
            <span className='tracking-widest'>0000</span>
          </>}
        </div>
        <div className='flex flex-row justify-between text-ui-white lg:text-[16px] text-[14px]'>
          <div>
            {cardName ? <p className='uppercase'>{cardName}</p> : <p>JANE APPLESEED</p>}
          </div>
          <div className="flex flex-row lg:text-[16px] text-[14px]">
            {expMonth.length > 0 ? <span>{expMonth}</span>:<span>00</span>}
            <span>/</span>
            {expYear.length > 0 ? <span>{expYear}</span>:<span>00</span>}
          </div>
        </div>
      </div>
    </div>
  )
}