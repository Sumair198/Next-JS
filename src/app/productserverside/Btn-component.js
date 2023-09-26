'use client'
export default function BtnComponent({price})
{
   return(
       <div>
           <button onClick={()=>alert(price)}>Price</button>
       </div>
   )
}
