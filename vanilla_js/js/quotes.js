const quotes =[
    {
        quote:"부자가 되려면 가난함을 두려워하지 말고, 불행을 두려워하고 그것을 피하려 하지 마라.",
        author:"로버트 기요사키",
    },{
        quote:"부자는 돈을 쓰는 법을, 가난한 사람은 돈을 모으는 법을 알아야 한다.",
        author:"볼테르",
    },{
        quote:"부자는 그가 가진 것을 소유하고 있지만, 가난한 사람은 그가 가진 것이 그를 소유하고 있다.",
        author:"라이너 마리아 릴케",
    },{
        quote:"부자는 미래를 위해 투자하지만, 가난한 사람은 현재를 위해 소비한다.",
        author:"워렌 버핏",
    },{
        quote:"부자는 지금보다 더 부유해지기 위해 노력하지만, 가난한 사람은 이제껏 그랬듯이 무엇도 변화시키지 않으면 된다.",
        author:"제임스 얼스",
    },{
        quote:"부자는 다른 사람들이 돈을 버는 방법을 배우고, 가난한 사람들은 다른 사람들이 돈을 쓰는 방법을 배운다.",
        author:"로버트 기요사키",
    },{
        quote:"부자가 되려면 돈을 어떻게 벌어야 하는지 아는 것이 아니라, 돈을 어떻게 사용해야 하는지 아는 것이 중요하다.",
        author:"롬 카세",
    },{
        quote:"부자가 되는 방법은 돈을 버는 것이 아니라, 문제를 해결하는 것이다.",
        author:"헨리 포드",
    },{
        quote:"부자는 돈을 위해 일하지 않는다. 돈이 그들을 위해 일하게 만든다.",
        author:"로버트 기요사키",
    },{
        quote:"부자는 불안과 두려움을 이길 수 있다. 그들은 돈을 통제할 수 있기 때문이다.",
        author:"T. 하버드 의류",
    },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');
const index = Math.floor(Math.random() * quotes.length);

quote.innerText = quotes[index].quote;
author.innerText = quotes[index].author;