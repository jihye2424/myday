import { useEffect, useState } from 'react';

const Lucky=[
"Good luck!",

"Best of luck!",

"Wishing you all the best!",

"You got this!",

"Fingers crossed!",

"Knock 'em dead!",

"Go get 'em!",

"Break a leg!",

"Sending positive vibes!",

"Hope everything goes well!",

"You’re going to do great!"
,
"May the odds be ever in your favor.",

"May luck be with you!",

"All the best for your future!",

"Rooting for you!",

"Hope you ace it!",

"Wishing you a smooth journey.",

"Hope today brings you lots of good fortune!",

"May your dreams come true.",

"Here’s to your success!"
]



const Luck = () => {
    const[quote,setQuote]=useState();
    useEffect(()=>{
        const random= Math.floor(Math.random()*Lucky.length);
        setQuote(Lucky[random]);
    },[])
    // Math.random(); //0~1 :0~qoutes.length
    return (
        <div className='luck'> 
            <p>✨{quote}✨</p>
        </div>
    );
};

export default Luck;