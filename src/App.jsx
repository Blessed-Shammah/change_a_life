import './App.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Touch a life today.</h1>
      <div className="payment-box">
        <img
          src="binance_free.jpeg"
          alt="Binance Pay QR Code"
          className="qr-code"
        />
        
      </div>\<a
          href="https://app.binance.com/qr/dplkf7243516931b457b9bb27ede7b190a02" // Replace with your payment link
          target="_blank"
          rel="noopener noreferrer"
          className="pay-button"
        >
          Pay Now
        </a>
    </div>
  );
}

export default App;