import React, { useRef, useState } from 'react'
import {  NavLink } from 'react-router-dom';



let data = ["","","","","","","","",""];


const WithHuman = () => {
  document.body.style.background = "black"

  let [count, setCount] = useState(0);
  let [block, setBlock] =useState(false);
  
  const HeaderRef = useRef(null);

  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);


  const array_box =[box1,box2,box3,box4,box5,box6,box7,box8,box9]




  const Toggle = (e, num )=>{
    if (block) {
      return 0
    }
    if (count % 2 === 0 ){
    e.target.innerHTML = 'X'
    data[num] = "X";
    setCount(++count);
    }
    else{
      e.target.innerHTML ='O'
      data[num]="O";
      setCount(++count);
    }
    
    checkingWinner();
  }

  const winner =(win)=>{
    setBlock(true);
    if(win === 'X'){
      HeaderRef.current.innerHTML = `Congratulation X is a Winner `;
    }
    else if(win === 'O'){
      HeaderRef.current.innerHTML = `Congratulation O is a Winner `;

    }
   
  }

  
  const checkingWinner = ()=>{

    if( data[0]===data[1]  &&  data[1]===data[2]  && data[2] !== "" ){
      winner(data[2])
    }
    else if( data[3]===data[4]  &&  data[4]===data[5]  && data[5] !== "" ){
      winner(data[5])
    }
    else if( data[6]===data[7]  &&  data[7]===data[8]  && data[8] !== "" ){
      winner(data[8])
    }
    
    
    else if( data[0]===data[3]  &&  data[3]===data[6]  && data[6] !== "" ){
      winner(data[6])
    }
    else if( data[1]===data[4]  &&  data[4]===data[7]  && data[7] !== "" ){
      winner(data[7])
    }
    else if( data[2]===data[5]  &&  data[5]===data[8]  && data[8] !== "" ){
      winner(data[8])
    }
    
    
    else if( data[0]===data[4]  &&  data[4]===data[8]  && data[8] !== "" ){
      winner(data[8])
    }
    else if( data[2]===data[4]  &&  data[4]===data[6]  && data[6] !== "" ){
      winner(data[6])
    }
    
    else if(data[0]!== "" && data[1] !== "" && data[2]!== "" && data[3]!== "" && data[4]!== "" && data[5]!=="" && data[6]!=="" && data[7]!=="" && data[8] !=="" && data[9] !== ""){
      HeaderRef.current.innerHTML = `OOP'S Game is Tie`;
      
    }
    
  }
  
  const Reset = () =>{
    setBlock(false);
    data = ["","","","","","","","",""]
    HeaderRef.current.innerHTML = "Start The Game with Human !!"
    array_box.map((e)=>{
      return e.current.innerHTML = "";
    })
  
  }
  console.log(block);
  
  return (
    <div className=' mt-7' >
      <h1 className='sm:text-3xl text-[24px] text-center font-bold font-sans text-white pr-3 pl-3' ref={HeaderRef}> Start The Game With <span className='text-green-400'>Human</span>  !!</h1>
      <div className='flex justify-center  sm:mt-14 mt-8'>
        <div className='sm:w-[500px] w-[300px] text-3xl font-bold font-sans sm:h-[400px] h-[250px] gap-1 flex flex-wrap justify-center items-center'>
          <div className='sm:w-32 w-20 sm:h-32 h-20 border-2 rounded-md bg-yellow-400 flex justify-center items-center hover:bg-orange-200' ref={box1} onClick={(e)=> {Toggle(e,0)}} ></div>
          <div className='sm:w-32 w-20 sm:h-32 h-20 border-2 rounded-md bg-yellow-400 flex justify-center items-center hover:bg-orange-200' ref={box2} onClick={(e)=> {Toggle(e,1)}} ></div>
          <div className='sm:w-32 w-20 sm:h-32 h-20 border-2 rounded-md bg-yellow-400 flex justify-center items-center hover:bg-orange-200' ref={box3} onClick={(e)=> {Toggle(e,2)}} > </div>
          <div className='sm:w-32 w-20 sm:h-32 h-20 border-2 rounded-md bg-yellow-400 flex justify-center items-center hover:bg-orange-200' ref={box4} onClick={(e)=> {Toggle(e,3)}} ></div>
          <div className='sm:w-32 w-20 sm:h-32 h-20 border-2 rounded-md bg-yellow-400 flex justify-center items-center hover:bg-orange-200' ref={box5} onClick={(e)=> {Toggle(e,4)}} ></div>
          <div className='sm:w-32 w-20 sm:h-32 h-20 border-2 rounded-md bg-yellow-400 flex justify-center items-center hover:bg-orange-200' ref={box6} onClick={(e)=> {Toggle(e,5)}} ></div>
          <div className='sm:w-32 w-20 sm:h-32 h-20 border-2 rounded-md bg-yellow-400 flex justify-center items-center hover:bg-orange-200' ref={box7} onClick={(e)=> {Toggle(e,6)}} ></div>        
          <div className='sm:w-32 w-20 sm:h-32 h-20 border-2 rounded-md bg-yellow-400 flex justify-center items-center hover:bg-orange-200' ref={box8} onClick={(e)=> {Toggle(e,7)}} ></div>
          <div className='sm:w-32 w-20 sm:h-32 h-20 border-2 rounded-md bg-yellow-400 flex justify-center items-center hover:bg-orange-200' ref={box9} onClick={(e)=> {Toggle(e,8)}} ></div>
        </div>
    </div> 
          <div className='flex justify-center sm:mt-14 mt-10 sm:gap-10 gap-11'>
          <button className='border-2 font-semibold font-sans sm:p-2 p-0 sm:w-36 sm:h-14 h-9 flex justify-center items-center w-20 rounded-xl sm:text-xl text-lg bg-green-600 text-white hover:bg-slate-500 hover:text-black' onClick={()=>{Reset()}}>Reset</button>
         <NavLink to = '/prodigy_wd_03/withai'> <button className='border-2 sm:p-2  p-0 sm:w-40 sm:h-14 h-9 w-20 rounded-xl sm:text-[18px]  text-lg bg-green-600 text-white hover:bg-red-600 hover:text-blue-950 font-semibold font-sans'>With <span className='text-black'>Ai</span></button></NavLink>
          </div>
    </div> 
  )
}

export default WithHuman;
