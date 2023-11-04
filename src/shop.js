import React, { useState, useEffect } from "react";
import items from "./selected_products.json";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [showClass, setShowClass] = useState(true);

  const [query, setQuery] = useState('');
  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log("Step 6 : in handleChange, Target Value :", e.target.value, " Query Value :", query);
    const results = listItems.filter(eachProduct => {
      if (e.target.value === "") return listItems;
      return eachProduct.title.toLowerCase().includes(e.target.value.toLowerCase())
    });
    setCart(results);
  }

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
    hardCopy = hardCopy.filter((cartItem) => cartItem.productID !== el.productID);
    setCart(hardCopy);
  };

  const listItems = items.map((el) => (
    // PRODUCT
    <div class="card shadow-sm">
      <img src={el.image_url} alt={el.productName} hspace="30" vspace="30" />
      <div class="card-header">
      <img class="img-fluid" src={el.photo} width={400} />
      </div>
      <div class="card-body">
        <p class="card-text">
            
          {
            <ul>
         <li>Title: {el.title}</li>
         <li>Author: {el.author}</li>
         <li>Pages: {el.pages}</li>
         <li>Description: {el.description}</li>
         <li>Publisher: {el.publisher}</li>

      {/* "title": "Eloquent JavaScript, Second Edition",
      "subtitle": "A Modern Introduction to Programming",
      "author": "Marijn Haverbeke",
      "published": "2014-12-14T00:00:00.000Z",
      "publisher": "No Starch Press",
      "pages": 472,
      "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
      "website": "http://eloquentjavascript.net/" */}
          </ul>
          /* <ul>
            <li>Size: {el.productDescription.size}</li>
            <li>Resolution: {el.productDescription.resolution}</li>
            <li>Processor: {el.productDescription.processor}</li>
            <li>RAM: {el.productDescription.ram}</li>
            <li>Storage: {el.productDescription.storage}</li>
            <li>Operating System: {el.productDescription.operatingSystem}</li>
          </ul> */}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            {/* <button type="button" class="btn btn-sm btn-outline-secondary" onClick={() => addToCart(el)} >
              Add to Cart
            </button> */}
            <button type="button" variant="light" onClick={() => removeFromCart(el)} > - </button>{" "}
            <button type="button" variant="light" onClick={() => addToCart(el)}> + </button>
          </div>
          <div class="card-body">
            ${el.price} <span class="close">&#10005;</span>{howManyofThis(el.productID)}
          </div>
        </div>
      </div>
    </div>
  ));

  const listCart = items.map((el) => (
    // PRODUCT
    <div class="row border-top border-bottom" key={el.id}>
      <div class="row main align-items-center">
        <div class="col-2">
          <img class="img-fluid" src={el.image_url} />
        </div>
        <div class="col">
          <div class="row text-muted">{el.productName}</div>
          {/* <div class="row">{el.category}</div> */}
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
          {howManyofThis(el.productID)}
        </div>
      </div>
    </div>
  ));

  function howManyofThis(id) {
    let hmot = cart.filter((cartItem) => cartItem.productID === id);
    return hmot.length;
  }

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      <img class="img-fluid" src={el.image} width={30} />
      {el.title}${el.price}
    </div>
  ));

  // Write a search method for this?

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
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="./laptops.html"
                  >
                    Books
                  </a>
                </li>
              </ul>


              <div className="py-10">
                <input type="search" value={query} onChange={handleChange} />
              </div>



              <button type="button" onClick={() => setShowClass(!showClass)}>
                {" "}
                Checkout Cart{" "}
              </button>
            </div>
          </div>
        </nav>
      </header>
      {showClass && (
        <main>
          <section class="py-5 text-center container">
            <div class="row py-lg-5">
              <div class="col-lg-6 col-md-8 mx-auto">
                <p className="font-weight: bold; font-size: xx-large">
                  Books for Javascript
                </p>

                <h6 class="lead text-muted" color="aliceblue;">
                  A collection of books for beginners through advanced programmers in JavaScript.
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

      {showClass && (
        <footer class="text-muted py-5" background-color="rgb(220, 218, 219)">
          <div class="container">
            <p class="float-end mb-1">
              <a href="#">Back to top</a>
            </p>
            <p class="mb-1">Cole Stuedeman and Josh Whittington</p>
            <p class="mb-0">
              
            </p>
          </div>
        </footer>
      )}

      {!showClass && (
        <div>
          <div class="col-md-8 cart">
            <div class="title">
              <div class="row">
                <div class="col">
                  <h4>
                    <b>Cart</b>
                  </h4>
                </div>
                <div class="col align-self-center text-right text-muted">
                  Products selected {cart.length}
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
        </div>
      )}
    </body>
  );
};
export default Shop;
// import React, { useState, useEffect } from "react";
// import items from "./selected_products.json";

// const Shop = () => {
//   const [cart, setCart] = useState([]);
//   const [cartTotal, setCartTotal] = useState(0);

//   const addToCart = (el) => {
//     setCart([...cart, el]);
//   };

//   const removeFromCart = (el) => {
//     let hardCopy = [...cart];
//     hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
//     setCart(hardCopy);
//   };

//   function howManyofThis(id) {
//     let hmot = cart.filter((cartItem) => cartItem.id === id);
//     return hmot.length;
//   }

//   const cartItems = cart.map((el) => (
//     <div key={el.id}>
//       <img class="img-fluid" src={el.image} width={150} />
//       {el.title}${el.price}
//     </div>
//   ));

//   useEffect(() => {
//     total();
//   }, [cart]);
//   const total = () => {
//     let totalVal = 0;
//     for (let i = 0; i < cart.length; i++) {
//       totalVal += cart[i].price;
//     }
//     setCartTotal(totalVal);
//   };

//   const listItems = items.map((el) => (
//     // PRODUCT
//     <div class="row border-top border-bottom" key={el.id}>
//       <div class="row main align-items-center">
//         <div class="col-2">
//           <img class="img-fluid" src={el.image} />
//         </div>
//         <div class="col">
//           <div class="row text-muted">{el.title}</div>
//           <div class="row">{el.category}</div>
//         </div>
//         <div class="col">
//           <button
//             type="button"
//             variant="light"
//             onClick={() => removeFromCart(el)}
//           >
//             {" "}
//             -{" "}
//           </button>{" "}
//           <button type="button" variant="light" onClick={() => addToCart(el)}>
//             {" "}
//             +{" "}
//           </button>
//         </div>
//         <div class="col">
//           ${el.price} <span class="close">&#10005;</span>
//           {howManyofThis(el.id)}
//         </div>
//       </div>
//     </div>
//   ));

//   return (
//     <div>
//       STORE SE/ComS319
//       <div class="card">
//         <div class="row">
//           {/* HERE, IT IS THE SHOPING CART */}
//           <div class="col-md-8 cart">
//             <div class="title">
//               <div class="row">
//                 <div class="col">
//                   <h4>
//                     <b>319 Shopping Cart</b>
//                   </h4>
//                 </div>
//                 <div class="col align-self-center text-right text-muted">
//                   Products selected {cart.length}
//                 </div>
//               </div>
//             </div>
//             <div>{listItems}</div>
//           </div>
//           <div class="float-end">
//             <p class="mb-0 me-5 d-flex align-items-center">
//               <span class="small text-muted me-2">Order total:</span>
//               <span class="lead fw-normal">${cartTotal}</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Shop;