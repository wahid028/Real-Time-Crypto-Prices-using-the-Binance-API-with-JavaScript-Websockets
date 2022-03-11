let ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");
let stockePriceElement = document.getElementById("stock-price");
let lastPrice = "null";

ws.onmessage = (event) => {
  let socketObject = JSON.parse(event.data);
  let price = parseFloat(socketObject.p).toFixed(2);
  stockePriceElement.innerText = price;
  stockePriceElement.style.color =
    !lastPrice || lastPrice === price
      ? "black"
      : price > lastPrice
      ? "green"
      : "red";

  lastPrice = price;
};
