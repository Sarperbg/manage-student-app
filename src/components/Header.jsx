import { AiOutlineLeftCircle } from "react-icons/ai"
import { BsBell } from "react-icons/bs"


const Header = () => {
  return (
    <div className='flex items-center w-[1170px] h-[60px] '>
        <div className="flex justify-between w-[90%] mx-auto">
        <AiOutlineLeftCircle className="w-5 h-5 text-[#C4C4C4]"/>
        <BsBell className="w-5 h-6 text-[#C4C4C4]"/>

        </div>

      
    </div>
  )
}

export default Header
