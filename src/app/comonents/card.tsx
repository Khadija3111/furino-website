interface ICardProps {
    imgLink: string;
    PercentOff: string;
    disColor: string;
    Pname: string;
    Cutprice?: string;
    Pprice: string ;
    PDiscrip:string;
  }

export default function Card(props :ICardProps){
    const{imgLink, PercentOff, disColor,Pname, Pprice,Cutprice ,PDiscrip}=props

    
return(
<div>
<div className="relative w-[285px] h-[406px] bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={imgLink} className="w-[285px] h-[301px]  object-cover"  />
      
      <div className={`absolute top-4 left-4 w-[48px] h-[48px] ${disColor} text-white flex items-center justify-center text-sm font-semibold rounded-full`}>
        {PercentOff}
      </div>
      
      <div className="absolute bottom-1 l-4 text-black p-6 rounded-md w-full">
        <h3 className="text-base text-[#3A3A3A] font-semibold">{Pname}</h3>
        <p className="text-xs text-gray-500">{PDiscrip}</p>
       <div className='flex'><label><p className="text-sm font-bold">{Pprice}</p>
       </label>  
       <label>      <p className="line-through text-xs pl-4 text-[#B0B0B0]">{Cutprice}</p></label> </div>
      
      </div>
    </div>

</div>


)

}