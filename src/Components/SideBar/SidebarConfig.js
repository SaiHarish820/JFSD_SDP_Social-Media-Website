import {AiFillMessage , AiFillCompass , AiFillHome, AiOutlineCompass, AiOutlineHome, AiOutlineSearch , AiOutlineMessage, AiOutlineHeart, AiFillHeart, AiOutlinePlusCircle, AiFillPlusCircle , } from 'react-icons/ai'
import {RiVideoFill,RiVideoLine} from 'react-icons/ri'
import {CgProfile} from "react-icons/cg"


export const menu =  [ 
    {
        title:"Home" , icon: <AiOutlineHome> </AiOutlineHome> , iactiveIcon:<AiFillHome></AiFillHome>
     } ,

    {
        title:"Search" , icon:<AiOutlineSearch></AiOutlineSearch> , activeIcon:<AiOutlineSearch></AiOutlineSearch>
    } ,

    {
        title:"Explore" , icon:<AiOutlineCompass></AiOutlineCompass> , activeIcon:<AiFillCompass></AiFillCompass>
    } , 

    {
        title:"Reels" , icon:<RiVideoLine></RiVideoLine> , activeIcon:<RiVideoFill></RiVideoFill>
    } ,

    {
        title: "Message" ,
        icon : <AiOutlineMessage></AiOutlineMessage> , 
        activeIcon:<AiFillMessage></AiFillMessage>
    } , 

    {
        title : "Notification",
        icon : <AiOutlineHeart></AiOutlineHeart> , 
        activeIcon : <AiFillHeart></AiFillHeart>
    } , 

    {
        title : "Create" , 
        icon : <AiOutlinePlusCircle></AiOutlinePlusCircle> , 
        activeIcon : <AiFillPlusCircle></AiFillPlusCircle>
    } , 

    {
        title : "Profile" , 
        icon : <CgProfile></CgProfile> , 
        activeIcon : <CgProfile></CgProfile>
    }


]