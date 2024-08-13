// let imgArray = ['src/assets/img1.jpeg', 'src/assets/img2.jpeg', 'src/assets/img.3.jpg', 
//'src/assets/img.4.jpg', 'src/assets/img5.jpeg']
import '../style/slideShow.css'


const SlideshowImages = ({ state }) => {
    if (state === 0) {
        return (
            <img src="src/assets/img8.jfif" className="img" />
        )
    }
    else if (state === 1) {
        return (
            <img src="src/assets/img2.jpeg" className="img"/>
        )
    }
    else if (state === 2) {
        return (
            <img src="src/assets/img6.jfif" className="img"/>
        )
    }
    else if (state === 3) {
        return (
            <img src="src/assets/img7.jfif" className="img"/>
        )
    }
    else {
        return (
            <img src="src/assets/img5.jpeg" className="img"/>
        )

    }
}

export default SlideshowImages;
