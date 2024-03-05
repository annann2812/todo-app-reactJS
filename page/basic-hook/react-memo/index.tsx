import React, { useState } from "react";

interface ChildProps {
    name: string;
}

const MemorizedChildComponent = React.memo(({name}: ChildProps) => 
    {console.log(`rendering MemorizedChildComponent: ${name}`)
        return <p>Memorized: {name}</p>
    }, 
    (prevProps, nextProps) => {
    return prevProps.name === nextProps.name;
})


// child component
const ChildComponent = ({name}: ChildProps) => {
    console.log(`rendering child component: ${name}`);
    return <p>{name}</p>
}

// parent component
const ReactMemo: React.FC = () => {
    const [name, setName] = useState("MU");
    const [counter, setCounter] = useState<number>(0);

    const handleChangeName = () => {
        setName("Chelsea");
    };

    const handleChangeCounter = () => {
        setCounter((prevState) => (prevState += 1))
    }

    return (
        <div>
            <h2>React Memo example</h2>
            <button className="btn" onClick={handleChangeName}>Change Name</button>
            <button className="btn" onClick={handleChangeCounter}>Change Counter</button>
            <h2>{counter}</h2>
            <ChildComponent name={name}/>
            <MemorizedChildComponent name={name} />
        </div>
    )
}

export default ReactMemo;