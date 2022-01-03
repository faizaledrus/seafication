import React, { useState, useEffect }  from 'react'
import axios from "axios";

function GetOpenseaTransaction() {

    const [data, setData] = useState([]);       

        useEffect(()=>{
            axios.get("https://api.etherscan.io/api?module=account&action=txlist&address=0xddbd2b932c763ba5b1b7ae3b362eac3e8d40121a&startblock=0&endblock=99999999&page=1&offset=100&sort=desc&apikey=6QSMK6YW9M17TJVG1ZTYEMRIUUUWQHER8Q")
        .then((res) => setData(res.data.result)).catch(err=>console.log(err))
        // console.log(res)

        }, [])

        

  
    return (
        <div>
            {data.map((item, index) => {
              return <div key={item.hash}> {item.hash}</div>;
            })}
        </div>
    )
}

export default GetOpenseaTransaction
