import React, { useState } from 'react';

const quotes = [
  '성공은 준비와 기회의 만남에서 온다.',
  '노력하지 않고 얻을 수 있는 것은 없다.',
  '실패는 성공으로 가는 또 다른 시작이다.',
  '행복은 내가 만드는 것이다.',
  '인내는 쓰지만 그 열매는 달다.',
  '도전하지 않으면 새로운 것을 얻을 수 없다.',
  '오늘 할 수 있는 일에 최선을 다하라.',
  '꿈을 이루기 위해 필요한 첫걸음은 믿음이다.',
  '변화는 두려움이 아니라 성장이다.',
  '가장 큰 영광은 실패하지 않음이 아니라 실패할 때마다 다시 일어나는 데 있다.',
];

function RandomAuddjs() {
  const [quote, setQuote] = useState(quotes[0]); //초기값 명언 설정

  // 랜덤 명언 가져오기 너무어렵다 뭐라는지 모르겄다
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <h2>랜덤 명언</h2>
      <p>"{quote}"</p>
      <button onClick={getRandomQuote}>새로운 명언</button>
    </div>
  );
}

export default RandomAuddjs;
