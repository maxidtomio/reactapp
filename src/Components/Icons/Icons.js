import React from 'react';

const Icons = ({Icon, color, size}) => {

    return (
        <>
            {<Icon style={{color: color, fontSize: size}}/>}
        </>
    )
}

export default Icons