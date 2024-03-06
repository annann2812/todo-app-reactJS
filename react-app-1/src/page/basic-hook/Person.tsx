import React, { useEffect, useState } from 'react'
import PersonPoint from './PersonPoint'

const Person = () => {
    // State
    const [name, setName] = useState<string>("FPT")
    const [age, setAge] = useState(36)
    const [point, setPoint] = useState(1)
    const [finalPoint, setFinalPoint] = useState(point * 10)
    const [destroyed, setDestroyed] = useState<boolean>(false)
    const [personState, setPersonState] = useState({
        name: "FPT Corp",
        age: 36,
        point: 1,
        finalPoint: 10,
        destroyed: false,
    })

    const handleChangeName = () => {
        // setName("FPT Software")
        setPersonState((prevState) => ({
            ...prevState, name: "FPT Software"}
        ))
    }

    const changePoint = () => {
        setPoint((prevState) => prevState + 1)
    }

    const changeFinalPoint = (point: number) => {
        setFinalPoint((prevState) => prevState + point + 11)
    }

    // useEffect
    // run after mounting - componentDidMount
    useEffect(() => {
        console.log("componentDidMount")
        // logic to run once after the component is mounted
    }, []); // array dependencies
    // run on every render - componentDidUpdate
    useEffect(() => {
        console.log("componentDidUpdate")
    }, []);
    // run on dependencies changed
    useEffect(() => {
        console.log("point or finalPoint changed")
    }, [point, finalPoint]);

  return (
    <div>
        <h2>Our class's name: {personState.name} with {age} years of experience</h2>
        <h2>
            {!destroyed && (
                <PersonPoint 
                finalPoint={finalPoint} 
                setPoint={changeFinalPoint} 
                point={point}
                changePoint={changePoint}/>
            )}
        </h2>
        <button className='btn btn-primary mr-2' onClick={handleChangeName}>Change Name</button>
        <button className='btn btn-primary mr-2' onClick={() => setAge(40)}>Change Age</button>
        <button onClick={() => setDestroyed((prevState) => !prevState )}>Toggle</button>
    </div>
  )
}

export default Person