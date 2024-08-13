import '../style/slideShow.css'
import SlideshowImage from './SlideshowImages';
import React, { useState } from 'react';


const SlideShow = () => {

    // let imgArray = ['src/assets/img1.jpeg', 'src/assets/img2.jpeg', 'src/assets/img.3.jpg', 'src/assets/img.4.jpg', 'src/assets/img5.jpeg']

    const [imgState, setImgState] = useState(0)

    const nextBtn = () => {
        { setImgState(imgState + 1) }
        if (imgState === 4) {
            setImgState(0)
        }
    }
    const backBtn = () => {
        { setImgState(imgState - 1) }
        if (imgState === 4) {
            setImgState(0)
        }
    }
    return (
        <>
            <div className="slideshow-con">
                <h5>{imgState}</h5>
                <button onClick={backBtn}>&#10094;</button>
                <div className='img-div'>
                    <SlideshowImage state={imgState} />
                </div>
                <button onClick={nextBtn} >&#10095;</button>
            </div>
        </>
    )
}
export default SlideShow