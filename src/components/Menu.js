import { useEffect, useState } from "react";
import './Menu.scss';

export default function Menu(){
    const [menu, setMenu] = useState();
    useEffect(()=>{
        if (localStorage.getItem('menu')) {
            setMenu(localStorage.getItem('menu'))
        }
        //Get image from backend//
    },[])
    function uploadFile(){
        var file = document.getElementById("menu").files[0];
        var reader = new FileReader();
        reader.onloadend = function(){
        localStorage.setItem('menu',reader.result);
        setMenu(reader.result);  
        //Send to backend to store////      
        }
        if(file){
             reader.readAsDataURL(file);
        }
    }
    return(
        <>
        <div className='container'>
            <div className='menu'>
                {menu ?( 
                    <img className="menuImg" src={menu} alt="menu"/>
                ):(
                    <p>Upload Menu</p>
                )}
            </div>
            <input type='file' id='menu' name="menu" onChange={()=>uploadFile()}/>
        </div>
        </>
    )
}