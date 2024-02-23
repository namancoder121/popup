import React, { useEffect, useState } from 'react'

const UseEffect = () => {
const[data,setData]=useState([])
const [isLoading, setIsLoading] = useState(true);

 async function fetchdataJSON() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const movies = await response.json();
    setData(movies)
    setIsLoading(false)
  }



useEffect(()=>{
   fetchdataJSON()
},[])


if (isLoading) {
    return (<>
    <div><h3>Loading......</h3></div>
    </>)
  } else {
    return(<>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
        Id
        </th>
        <th scope="col" className="px-6 py-3">
          Title
        </th>
        <th scope="col" className="px-6 py-3">
        Body
        </th>
        
      </tr>
    </thead>
    <tbody>

        {data.map((i)=>{
            return(
                <tr key={i.id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                
                <td className="px-6 py-4">{i.id}</td>
                <td className="px-6 py-4">{i.title}</td>
                <td className="px-6 py-4">{i.body}</td>
               
              </tr>
            )
        })}
     
    
    </tbody>
  </table>
</div>

    </>)
  }
}

export default UseEffect