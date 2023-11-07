import React, { useState } from "react";
import Shop from "./shop";



const ShopView3 = () => {
  const [alertMessage, setAlertMessage] = useState("");
  const [showClass, setShowClass] = useState('view3');

  const validateForm = () => {
    const inputName = document.getElementById('inputName').value;
    const inputEmail = document.getElementById('inputEmail4').value;
    const inputCard = document.getElementById('inputCard').value;

    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const cardRegex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;

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

    // Clear the alert message
    setAlertMessage('');

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Handle the form submission (e.g., make an order)
      console.log('Order placed!');
      // You can add your order handling logic here

      // Reload the page or navigate to another view
      // window.location.reload();
      // or
      // navigateToOtherView();
    }
  };

  return (
   
    <body>
      {showClass == 'view3' && (
    <div className="container">
      <div className="row">
        <div className="col-2"></div>

        <div className="col-8">
          <h1><br></br>Complete Your Order</h1>

          <div id="liveAlertPlaceholder">
            {alertMessage && (
              <div className="alert alert-danger alert-dismissible" role="alert">
                {alertMessage}
                <button type="button" className="btn-close" onClick={() => setAlertMessage('')} aria-label="Close"></button>
              </div>
            )}
          </div>

          <form className="row g-3" id="checkout-form" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label htmlFor="inputName" className="form-label">
                Full Name
              </label>
              <input type="text" className="form-control" id="inputName" required />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Must be like, "John Doe"</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail4" required />
              <div className="valid-feedback">Looks good!</div>
              <div className="invalid-feedback">Must be like, "abc@xyz.efg"</div>
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
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">Must be like, "7777-7777-7777-7777"</div>
              </div>
            </div>
            <div class="col-12">
            <label for="inputAddress" class="form-label">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">Address 2</label>
            <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">City</label>
            <input type="text" class="form-control" id="inputCity"/>
          </div>
          <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
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
                      Invalid State. Something other than the default must be chosen.
                    </div>
                  </div>
  
                  {/* Zip Code */}
                  <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip Code</label>
                    <input type="text" className="form-control" id="inputZip" />
                    <div className="invalid-feedback">
                      Invalid Zip Code. Must be formatted like "55555"
                    </div>
                  </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div className="col-12">
            <button type="submit" class="btn btn-success" onDoubleClick={() => setShowClass('view4')}  > <i class="bi-bag-check"></i>  
                Order</button>
            </div>
          </form>
          
          </div>
          </div>
    </div>
    )}
          
          {showClass == 'view4' && 
<Shop/>
           
          }
        

        <div className="col-2"></div>
        </body>
  );
};

export default ShopView3;