import {useContext, useEffect, useState, useRef} from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

import Image from "./Image.jsx";
function getClass(i) {
    if (i % 5 === 0) {
        return 'big';
    }
    else if (i % 6 === 0) {
        return 'wide'
    } else {
        return ""
    }
}


function Photos(props) {


const [photos, setPhotos] = useState([])
    useEffect(() => {
            let subscribed = true;
            async function getData() {
                  let res = await fetch("https://picsum.photos/v2/list?page=4&limit=100");
                  let data = await res.json();

                  if (subscribed ) {
                    setPhotos(prevState => {
                        data.length = 10;
                        return data
                    })
                    // setPhotosLoaded(true)
                 }
             }
            getData()
            return () => {
                subscribed = false;
            }
    }, [])


    const photoElements = photos.map((item, index) => {
        return (
            <Image key={item.id} img={item}  class={getClass(index)}/>
        )
    })
    const data = [1,2,3,4]
    const renderLineChart = (
  <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);

    return (
        <main className="photos">
            {photoElements}
            {renderLineChart}

        </main>
    )
}

export default Photos
