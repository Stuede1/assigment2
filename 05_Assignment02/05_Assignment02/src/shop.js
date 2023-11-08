import React, { useState, useEffect } from "react";
import items from "./selected_products.json";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [showClass, setShowClass] = useState("view1");
  const [alertMessage, setAlertMessage] = useState("");

  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputCard, setInputCard] = useState("");
  const [inputCity, setInputCity] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputZip, setInputZip] = useState("");

 
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items); 

  const handleChange = (e) => {
    setQuery(e.target.value);

    
    const results = items.filter((eachProduct) => {
      if (e.target.value === "") return true;
      return eachProduct.title
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });

    setFilteredItems(results); 
  };

  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

 
  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    let removed = false; 

    hardCopy = hardCopy.filter((cartItem) => {
      if (!removed && cartItem.id === el.id) {
        removed = true; 
        return false; 
      }
      return true; 
    });

    setCart(hardCopy);
  };

  const listItems = filteredItems.map((el) => (
    <div className="card shadow-sm" key={el.id}>
      <div className="card-header">
        <img className="img-fluid" src={el.photo} width={400} alt={el.title} />
      </div>
      <div className="card-body">
        <p className="card-text">
          {
            <ul>
              <li>Title: {el.title}</li>
              <li>Author: {el.author}</li>
              <li>Pages: {el.pages}</li>
              <li>Description: {el.description}</li>
              <li>Publisher: {el.publisher}</li>
              <li>Price: {el.price}</li>
            </ul>
          }
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
           
            <button
              type="button"
              variant="light"
              onClick={() => removeFromCart(el)}
            >
              {" "}
              -{" "}
            </button>{" "}
            <button type="button" variant="light" onClick={() => addToCart(el)}>
              {" "}
              +{" "}
            </button>
          </div>
          <div class="card-body">
            ${el.price} <span class="close">&#10005;</span>
            {howManyofThis(el.id)}
          </div>
        </div>
      </div>
    </div>
  ));

  const listCart = items.map((el) => (
    
    <div class="row border-top border-bottom" key={el.id}>
      <div class="row main align-items-center">
        <div class="col-2">
          <img class="img-fluid" src={el.photo} />
        </div>
        <div class="col">
          <div class="row text-muted">{el.title}</div>
          
        </div>
        <div class="col">
          <button
            type="button"
            variant="light"
            onClick={() => removeFromCart(el)}
          >
            {" "}
            -{" "}
          </button>{" "}
          <button type="button" variant="light" onClick={() => addToCart(el)}>
            {" "}
            +{" "}
          </button>
        </div>
        <div class="col">
          ${el.price} <span class="close">&#10005;</span>
          {howManyofThis(el.id)}
        </div>
      </div>
    </div>
  ));

  const listend = items.map((el) => (
   
    <div class="row border-top border-bottom" key={el.id}>
      <div class="row main align-items-center">
        <div class="col-2">
          <img class="img-fluid" src={el.photo} />
        </div>
        <div class="col">
          <div class="row text-muted">{el.title}</div>
          
        </div>

        <div class="col">
          ${el.price} <span class="close">&#10005;</span>
          {howManyofThis(el.id)}
        </div>
      </div>
    </div>
  ));

  function howManyofThis(id) {
    let hmot = cart.filter((cartItem) => cartItem.id === id);
    return hmot.length;
  }

  const validateForm = () => {
    const inputName = document.getElementById("inputName").value;
    const inputEmail = document.getElementById("inputEmail4").value;
    const inputCard = document.getElementById("inputCard").value;
    const inputCity = document.getElementById("inputCity").value;
    const inputAddress = document.getElementById("inputAddress").value;
    const inputZip = document.getElementById("inputZip").value;
    const inputState = document.getElementById("inputState").value;

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const cardRegex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    const zipRegex = /^[0-9]{5}$/;

    if (!inputName.match(nameRegex)) {
      setAlertMessage('Full Name must be in the format "John Doe"');
      return false;
    }

    if (!inputEmail.match(emailRegex)) {
      setAlertMessage('Email must be in the format "abc@xyz.efg"');
      return false;
    }

    if (!inputCard.match(cardRegex)) {
      setAlertMessage('Card must be in the format "7777-7777-7777-7777"');
      return false;
    }
    if (inputCity.trim() === "") {
      setAlertMessage("City must not be empty Ex. Atlanta");
      return false;
    }
    if (inputAddress.trim() === "") {
      setAlertMessage("Address must not be empty Ex. 225 State Ave");
      return false;
    }
    if (!inputZip.match(zipRegex)) {
      setAlertMessage("Invalid Zip Ex. 12345");
      return false;
    }
    if (inputState == "Choose...") {
      setAlertMessage("Choose a State");
      return false;
    }
    // Clear the alert message
    setAlertMessage("");

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Handle the form submission (e.g., make an order)
      console.log("Order placed!");
      // You can add your order handling logic here
      setShowClass("view4");
      // Reload the page or navigate to another view
      // window.location.reload();
      // or
      // navigateToOtherView();
    }
  };

  return (
    <body>
      <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <div>
                    <button type="button" onClick={() => setShowClass("view1")}>
                      Return
                    </button>
                  </div>
                </li>
              </ul>

              <div className="py-10">
                <input type="search" value={query} onChange={handleChange} />
              </div>

              <button type="button" onClick={() => setShowClass("view2")}>
                {" "}
                Checkout Cart{" "}
              </button>
            </div>
          </div>
        </nav>
      </header>
      {showClass == "view1" && (
        <main>
          <section class="py-5 text-center container">
            <div class="row py-lg-5">
              <div class="col-lg-6 col-md-8 mx-auto">
                <p className="font-weight: bold; font-size: xx-large">
                  Books for Javascript
                </p>

                <h6 class="lead text-muted" color="aliceblue;">
                  A collection of books for beginners through advanced
                  programmers in JavaScript.
                  <br />
                </h6>
              </div>
            </div>
          </section>
          <div class="album py-5 bg-light">
            <div class="container">
              <div
                id="laptops"
                class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"
              >
                {listItems}
              </div>
            </div>
          </div>
        </main>
      )}

      {showClass == "view1" && (
        <footer class="text-muted py-5" background-color="rgb(220, 218, 219)">
          <div class="container">
            <p class="float-end mb-1">
              <a href="#">Back to top</a>
            </p>
            <p class="mb-1">Cole Stuedeman and Josh Whittington</p>
            <p class="mb-0"></p>
          </div>
        </footer>
      )}

      {showClass == "view2" && (
        <div>
          <div class="col-md-8 cart">
            <div class="title">
              <div class="row">
                <div class="col">
                  <h4>
                    <b>
                      <br></br>
                      <br></br>Cart
                    </b>
                  </h4>
                </div>
                <div class="col align-self-center text-right text-muted">
                  <br></br>
                  <br></br> Products selected {cart.length}
                </div>
              </div>
            </div>
            <div>{listCart}</div>
          </div>
          <div class="float-end">
            <p class="mb-0 me-5 d-flex align-items-center">
              <span class="small text-muted me-2">Order total:</span>
              <span class="lead fw-normal">${cartTotal}</span>
            </p>
          </div>
          <div class="float-end">
            <button type="button" onClick={() => setShowClass("view3")}>
              {" "}
              Order{" "}
            </button>
          </div>
        </div>
      )}

      {showClass == "view3" && (
        <div className="container">
          <div className="row">
            <div className="col-2"></div>

            <div className="col-8">
              <h1>
                <br></br>Complete Your Order
              </h1>

              <div id="liveAlertPlaceholder">
                {alertMessage && (
                  <div
                    className="alert alert-danger alert-dismissible"
                    role="alert"
                  >
                    {alertMessage}
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setAlertMessage("")}
                      aria-label="Close"
                    ></button>
                  </div>
                )}
              </div>

              <form
                className="row g-3"
                id="checkout-form"
                onSubmit={handleSubmit}
              >
                <div className="col-md-6">
                  <label htmlFor="inputName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    required
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">
                    Must be like, "John Doe"
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    required
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                  />
                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">
                    Must be like, "abc@xyz.efg"
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="inputCard" className="form-label">
                    Card
                  </label>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="bi-credit-card-fill"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCard"
                      placeholder="XXXX-XXXX-XXXX-XXXX"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      required
                      value={inputCard}
                      onChange={(e) => setInputCard(e.target.value)}
                    />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">
                      Must be like, "7777-7777-7777-7777"
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                    value={inputAddress}
                    onChange={(e) => setInputAddress(e.target.value)}
                  />
                </div>
                <div class="col-12">
                  <label for="inputAddress2" class="form-label">
                    Address 2
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                    value={inputCity}
                    onChange={(e) => setInputCity(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">
                    State
                  </label>
                  <select id="inputState" className="form-select">
                    <option defaultValue={"Selected"}>Choose...</option>
                    <option>Alabama</option>
                    <option>Alaska</option>
                    <option>Arizona</option>
                    <option>Arkansas</option>
                    <option>California</option>
                    <option>Colorado</option>
                    <option>Connecticut</option>
                    <option>Delaware</option>
                    <option>Florida</option>
                    <option>Georgia</option>
                    <option>Hawaii</option>
                    <option>Idaho</option>
                    <option>Illinois</option>
                    <option>Indiana</option>
                    <option>Iowa</option>
                    <option>Kansas</option>
                    <option>Kentucky</option>
                    <option>Louisiana</option>
                    <option>Maine</option>
                    <option>Maryland</option>
                    <option>Massachusetts</option>
                    <option>Michigan</option>
                    <option>Minnesota</option>
                    <option>Mississippi</option>
                    <option>Missouri</option>
                    <option>Montana</option>
                    <option>Nebraska</option>
                    <option>Nevada</option>
                    <option>New Hampshire</option>
                    <option>New Jersey</option>
                    <option>New Mexico</option>
                    <option>New York</option>
                    <option>North Carolina</option>
                    <option>North Dakota</option>
                    <option>Ohio</option>
                    <option>Oklahoma</option>
                    <option>Oregon</option>
                    <option>Pennsylvania</option>
                    <option>Rhode Island</option>
                    <option>South Carolina</option>
                    <option>South Dakota</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Utah</option>
                    <option>Vermont</option>
                    <option>Virginia</option>
                    <option>Washington</option>
                    <option>West Virginia</option>
                    <option>Wisconsin</option>
                    <option>Wyoming</option>
                  </select>
                  <div className="invalid-feedback">
                    Invalid State. Something other than the default must be
                    chosen.
                  </div>
                </div>

                {/* Zip Code */}
                <div className="col-md-2">
                  <label htmlFor="inputZip" className="form-label">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputZip"
                    value={inputZip}
                    onChange={(e) => setInputZip(e.target.value)}
                  />
                  <div className="invalid-feedback">
                    Invalid Zip Code. Must be formatted like "55555"
                  </div>
                </div>

                <div className="col-12">
                  <button
                    type="submit"
                    class="btn btn-success"
                    onClick={handleSubmit}
                  >
                    {" "}
                    <i class="bi-bag-check"></i>
                    Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {showClass == "view4" && (
        <div>
          <div class="col-md-8 cart">
            <div class="title">
              <div class="row">
                <div class="col">
                  <h4>
                    <b>
                      <br></br>
                      <br></br>Order Summary
                    </b>
                  </h4>
                </div>
                <div class="col align-self-center text-right text-muted">
                  <br></br>
                  <br></br> Products selected {cart.length}
                </div>
              </div>
            </div>
            <div>{listend}</div>
          </div>

          <div class="float-end">
            <p class="mb-0 me-5 d-flex align-items-center">
              <span class="small text-muted me-2">Order total:</span>
              <span class="lead fw-normal">${cartTotal}</span>
            </p>
          </div>
          <div class="float-end">
            <div class="float-end">
              <div className="user-information">
                <h5>User Information:</h5>
                <p>Name: {inputName}</p>
                <p>Email: {inputEmail}</p>
                <p>Card: {inputCard}</p>
                <p>Address: {inputAddress}</p>
                <p>City: {inputCity}</p>
                <p>Zip: {inputZip}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </body>
  );
};
export default Shop;
