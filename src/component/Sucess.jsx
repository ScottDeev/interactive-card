import SuccessIcon from '../assets/icon-complete.svg'
export default function Sucess() {
  return (
    <div className='flex flex-col w-[320px] gap-[25px] items-center transition-all'>
      <div>
        <img src={SuccessIcon} alt="successicon" />
      </div>
      <div className='flex flex-col gap-[10px] text-center'>
        <h1>THANK YOU </h1>
        <p>We've added your card details</p>
      </div>
      <button className='bg-btn text-ui-white p-[8px] rounded-[8px] w-full'>Continue</button>
    </div>
  )
}