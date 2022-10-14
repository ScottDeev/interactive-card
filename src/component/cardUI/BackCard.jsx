export default function BackCard({cvc}) {
  return (
    <div className="absolute lg:top-[55%] top-[5%] sm:left-[35%] lg:left-[9%] xl:left-[15%] left-[10%] z-0 flex flex-col bg-cardBackBg p-[20px] lg:w-[410px] w-[320px] h-[270px] bg-contain bg-no-repeat">
      {cvc.length > 0 ? 
      <span className="absolute lg:right-[60px] right-[40px] lg:top-[100px] top-[75px] text-ui-white">{cvc}</span>:<span className="absolute lg:right-[60px] right-[40px] lg:top-[100px] top-[75px]  text-ui-white">000</span>}
    </div>
  )
}