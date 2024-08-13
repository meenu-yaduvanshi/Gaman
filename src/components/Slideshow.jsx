import '../style/slide.css'

const SlideShow = () => {

    let imageAry = ["./src/assets/img1.jpeg", "./src/assets/img2.jpeg", "./src/assets/img.3.jpg",
        "./src/assets/img.4.jpg", "./src/assets/img5.jpeg"];
    let textAry = ["A", "B", "C", "D", "E"];

    const handleClick = () => {
        console.log("button clicked")

    };
    const backBtn = () => {
        console.log("back button")
    }
    return (
        <>
        <div className='main-container'>
            <button onClick={handleClick}>Front button</button>
            <div className="image-container">
                <div>
                    <img src="./src/assets/img.3.jpg" alt="img1"  height={300} width={300}  />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam asperiores optio doloribus velit quia adipisci modi accusantium nam, tempora saepe, harum totam quisquam?</p>
                </div>
                <div className='second-image-box'>
                    <img src="./src/assets/img.3.jpg" alt="img1"  height={300} width={300}  />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et magni culpa ratione officia, consequuntur velit, molestiae praesentium quibusdam optio minus eaque corrupti placeat debitis. Vel quas tenetur nemo mollitia iusto asperiores debitis expedita, repellat explicabo quod? Nulla officia sunt perspiciatis eum impedit eius natus autem labore, facere omnis quos aperiam dolor placeat quo consectetur ratione commodi! Aliquam, laboriosam? Odit, quasi! Ab repellendus fugit ea et esse nulla aperiam neque aspernatur distinctio quasi cumque, consequuntur autem, corporis beatae odio. Obcaecati, quas. Quo temporibus vel dolorem debitis ipsam! Blanditiis ipsa iste officia eaque quos deleniti suscipit commodi possimus, assumenda in corrupti repellendus.</p>
                </div>
            </div>
            <button onClick={backBtn}>Back button</button>
            </div>
        </>

    )
}


export default SlideShow