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
"성공은 1%의 재능과 99%의 ‘그만둘까 말까’ 싸움이다.",
"사는 게 왜 이렇게 힘드냐고 묻지 마라. 네가 가벼웠던 적은 없다.",
"나이는 숫자일 뿐이라지만, 그 숫자가 내 허리 사이즈를 넘어서기 시작했다.",
"시간은 금이다. 그래서 난 항상 무일푼이다.",
"다이어트는 내일부터, 내일은 항상 바쁘다.",
"아무 일도 안 하면 아무 일도 안 생긴다. 근데 왜 이렇게 피곤하지?",
"성공하려면 일찍 일어나야 한다는데… 난 이미 지각했다.",
"현실은 드라마가 아니다. 드라마는 예쁘고 현실은 피곤하다.",
"좋은 일엔 늘 남이 끼어 있다.",
"세상은 넓고 할 일은 많은데, 왜 나는 침대 밖을 못 나가냐…",
"노력은 배신하지 않는다지만, 배신당한 기분은 왜일까?",
"자존감은 월급날까지 유효합니다.",
"어른이 된다는 건, 하고 싶은 일을 미루는 연습이다.",
"꿈은 이루어진다고? 꿈에서 깼다.",
"스스로에게 솔직해지자. 귀찮은 건 귀찮다.",
"돈이 다가 아니야. 통장에 돈이 없을 때야말로 그걸 뼈저리게 느낀다.",
"인생은 속도가 아니라 방향이라더라. 그래서 난 아직도 제자리.",
"현실은 내 통장 잔고보다 냉정하다.",
"퇴근은 했는데 마음이 회사에 갇혀 있다.",
"주말은 빠르고 월요일은 무겁다. 중력의 장난인가?",
"오늘도 살아낸 나, 진심으로 존경한다."
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
            <h2>오늘의 명언✏️</h2> 
            <p>"{quote}"</p>
        </div>
    );
};

export default Quote;