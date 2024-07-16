import { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [cost, setCost] = useState("");
    const [selectedCoin, setSelectedCoin] = useState(null);
    const [calculatedCost, setCalculatedCost] = useState(0);

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);

    const onSelectCoin = (event) => {
        const selectedIndex = event.target.value;
        const coin = coins[selectedIndex];
        // console.log("changed coin ", coin);
        setSelectedCoin(coin);
    };
    const onChangeInputCost = (event) => {
        setCost(Number(event.target.value));
        // console.log("changed cost " + event.target.value);
    };
    const onClick = () => {
        const isCoin = selectedCoin === null ? coins[0] : selectedCoin;
        // console.log(isCoin);
        const calculate =
            Math.round((cost / isCoin.quotes.USD.price) * 100) / 100;
        //소수점 2자리까지 반올림
        setCalculatedCost(calculate);
    };
    return (
        <div>
            <h1>The Coins! ({coins.length})</h1>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <div>
                    <select onChange={onSelectCoin}>
                        {coins.map((coin, index) => (
                            <option key={coin.id} value={index}>
                                {coin.name} ({coin.symbol} : $
                                {coin.quotes.USD.price})
                            </option>
                        ))}
                    </select>
                    <hr />
                    <input
                        type="text"
                        value={cost}
                        onChange={onChangeInputCost}
                        placeholder="보유 달러 금액을 쓰세요"
                    ></input>
                    <button onClick={onClick}>계산하기</button>
                    <p>
                        {cost ? cost : 0}달러로{" "}
                        {selectedCoin ? selectedCoin.name : coins[0].name}
                        코인을 구매한다면 :{" "}
                        {calculatedCost ? calculatedCost : "0"}{" "}
                        {selectedCoin ? selectedCoin.symbol : coins[0].symbol}
                    </p>
                    <p>
                        <small>
                            *1
                            {selectedCoin
                                ? selectedCoin.symbol
                                : coins[0].symbol}{" "}
                            시세 :{" $"}
                            {selectedCoin
                                ? selectedCoin.quotes.USD.price
                                : coins[0].quotes.USD.price}
                        </small>
                    </p>
                </div>
            )}
        </div>
    );
}

export default App;
