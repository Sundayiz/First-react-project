import { Card } from "react-bootstrap";
import product from "./components/Productt";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

function App() {
  const firstName = "YourName"; // Change to your first name or leave as an empty string

  return (
    <div className="App d-flex flex-column align-items-center p-4">
      <Card style={{ width: "18rem", textAlign: "center" }}>
        <Card.Body>
          <Image imageUrl={product.imageUrl} />
          <Card.Title>
            <Name name={product.name} />
          </Card.Title>
          <Card.Text>
            <Price price={product.price} />
            <Description description={product.description} />
          </Card.Text>
        </Card.Body>
      </Card>

      <p className="mt-3">
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </p>

      {firstName && (
        <img
          src="https://via.placeholder.com/100"
          alt="User avatar"
          className="rounded-circle mt-2"
        />
      )}
    </div>
  );
}

export default App;
