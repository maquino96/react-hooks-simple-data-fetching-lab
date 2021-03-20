import {useState, useEffect} from 'react'

function App () {

    const [isLoading, setIsLoading] = useState(true)
    const [img, setImg] = useState('')

    useEffect( ()=>{

        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setImg(data.message)
                setIsLoading(!isLoading)
            });
        
    }, [])



    return (
        <>
            <p> {isLoading ? 'Loading...' : null} </p>
            {!isLoading? <img src={img} alt='A Random Dog'/>: null}
            
        </>
    )
    
}

export default App 