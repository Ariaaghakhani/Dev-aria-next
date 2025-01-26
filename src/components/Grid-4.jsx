'use client'
import React, {useEffect, useState} from 'react';
import HoveredButton from "@/components/HoveredButton";

function Grid4() {
    const [hover, setHover] = useState(false);
    useEffect(() => {

    }, [hover]);
    return (
        <section className="col-span-8 lg:col-span-3"
                 onMouseEnter={()=>{
                     setHover(true);
                     console.log('enter4')
                 }}
                 onMouseLeave={()=>{
                     setHover(false);
                     console.log('leave4')
                 }}
        >
            4
            <HoveredButton hovered={hover}/>
        </section>
    );
}

export default Grid4;