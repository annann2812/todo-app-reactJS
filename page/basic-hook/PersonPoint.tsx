import React, { Fragment, useEffect } from 'react'

interface PersonPointInfo {
    point?: number;
    finalPoint?: number;
    changePoint?: () => void;
    setPoint?: (point: number) => void;
}

const PersonPoint = (props: PersonPointInfo) => {
    const { point, finalPoint, changePoint, setPoint } = props;

    // cleanup function
    useEffect(() => {
        console.log('childComponent re-rendered')
        return () => {
            // cleanup logic (clearInterval)
            console.log('useeffect - componentWillUnmount')
        }
    })
  return (
    <Fragment>
        <h3>Your Point: <span style={{color: "tomato"}}>{point}</span></h3>
        <h3>Your Final Point: <span style={{color: "tomato"}}>{finalPoint}</span></h3>
        <button className='btn'onClick={changePoint}>Change Point</button>
        <button className='btn'onClick={() => {
            setPoint(9)
        }}>Change Final Point</button>
    </Fragment>
  )
}

export default PersonPoint