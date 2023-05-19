import {useContext, useEffect, useState, useRef} from 'react'

function Image(props) {



    return (
        <div className={`${props.class} image-container`} >
            <img src={props.img.download_url} alt="img" className={"image-grid"}/>
        </div>
    )
}

export default Image
