import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      {" "}
      <h1>Fast and Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h1>Our Menu</h1>
      <Pizza
        name="Pizza Spinachi"
        ingredients="Spinach, tomato sauce, basil leaves, oregano, red bell peppers, black olives"
        price="10"
        photo="pizzas\spinaci.jpg"
      />
      <Pizza
        name="Pizza Fungui"
        ingredients=" Tomato,mushrooms"
        price={10} //number mein convert kiya hai ye ki chang karna pade tho yaha se hi ho jaye
        photo="pizzas\funghi.jpg"
      />
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.photo} alt="pizza" />
      <h3>{props.name}</h3>
      <p>{props.ingredients}</p>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openhour = 12;
  const closeHour = 22;
  const isOpen = hour >= openhour && hour <= closeHour;
  // if (isOpen) {
  //   return (
  //     <>
  //       <h1>WE are open!!!!😃</h1>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <h1>We are Closed😪</h1>
  //     </>
  //   );
  // }
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}.We're currently open😀
    </footer>
  );
}

//React version 18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before 18
// React.render(<App />);
