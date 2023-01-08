const quotes = [
    {
      quote: "삶이 있는 한 희망은 있다.",
      author: "키케로",
    },
    {
      quote: "하루에 3시간을 걸으면 7년 후에 지구를 한 바뀌 돌 수 있다.",
      author: "사무엘 존슨",
    },
    {
      quote:
        "신은 용기있는 자를 절대 버리지 않는다.",
      author: "켄러",
    },
    {
      quote: "내일은 내일의 태양이 뜬다.",
      author: "로버트 엘리엇",
    },
    {
      quote: "행복은 습관이다, 그것을 몸 속에 지녀라.",
      author: "허버드",
    },
    {
      quote: "1%의 가능성, 그게 나의 길이다.",
      author: "나폴레옹",
    },
    {
      quote: "고난의 시기에 동요하지 않는 것, 이것은 칭찬 받을 뛰어난 사람의 증거이다.",
      author: "베토벤",
    },
    {
      quote: "당신이 믿는 대로 될 것이다.",
      author: "헨리 포드",
    },
    {
      quote: "작은 기회로부터 종종 위대한 업적이 시작된다.",
      author: "데모스테네스",
    },
    {
      quote: "최고에 도달하려면 최저에서 시작하라.",
      author: "P.시루스",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;