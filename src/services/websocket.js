let socket = null;

export const connectWebSocket = (onMessage) => {
  socket = new WebSocket(
    "wss://stream.binance.com:9443/stream?streams=btcusdt@trade/ethusdt@trade/solusdt@trade"
  );

  socket.onopen = () => {
    console.log("✅ Binance Connected");
  };

  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);

    console.log(message);

    onMessage(message);
  };

  socket.onerror = (error) => {
    console.log(error);
  };

  socket.onclose = () => {
    console.log("Socket Closed");
  };
};

export const disconnectWebSocket = () => {
  if (socket) {
    socket.close();
  }
};