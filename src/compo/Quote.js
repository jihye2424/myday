import { useEffect, useState } from 'react';

const Quotes=[
"일찍 일어나는 새가 피곤하다.",
"열심히 한다고 다 되는 건 아니지만, 안 하면 진짜 아무것도 안 된다.",
"세상에서 제일 어려운 일은 꾸준함이다.",
"돈이 다는 아니지만, 없으면 힘든 게 맞다.",
"남과 비교하지 마라. 그 사람도 힘들다.",
"사는 게 늘 계획대로 되면 그게 인생이겠냐.",
"기회는 준비된 자에게 온다지만, 안 올 수도 있다.",
"무리하지 말자. 몸이 고장 나면 아무 의미 없다.",
"내가 나를 안 믿으면, 누가 믿어주겠어.",
"가끔은 ‘그만두고 싶다’는 마음으로도 버티는 거다.",
"성공은 1%의 재능과 99%의 ‘그만둘까 말까’ 싸움이다."
]



const Quote = () => {
    const[quote,setQuote]=useState();
    useEffect(()=>{
        const random= Math.floor(Math.random()*Quotes.length);
        setQuote(Quotes[random]);
    },[])
    // Math.random(); //0~1 :0~qoutes.length
    return (
        <div className='qq'>
            오늘의 명언✏️ "{quote}"
        </div>
    );
};

export default Quote;