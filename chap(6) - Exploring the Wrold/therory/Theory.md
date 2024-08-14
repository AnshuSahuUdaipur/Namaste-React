## Namaste React Course by Akshay Saini
# Chapter 06 - Exploring the world

## Q: What is `Microservice`?
A: `Microservice` - also known as the microservice architecture - is an architectural and organizational approach to software development where software is composed of small independent services like database, server or a UI of the application, that communicate over well-defined APIs. These services are owned by small, self-contained teams.
Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.
means we are dividing software into small, well-defined modules enables teams to use functions for multiple purposes.

- Benefits of Microservices:
  - Flexible Scaling
  - Easy Deployment
  - Technological Freedom
  - Reusable Code
  - Resilience

----------------------------------------------

Microservice ek architectural style hai jo software applications ko chhote, independent services mein divide karta hai. Har microservice ek specific functionality ya business logic ko handle karta hai, aur yeh services independently deploy, scale, aur maintain ki ja sakti hain.

Microservices ke kuch khas features:

Independence: Har microservice apna apna kaam karta hai aur dusre services se loosely coupled hota hai. Matlab, agar ek service mein koi problem aati hai, toh dusre services par iska koi direct asar nahi hota.

Scalability: Aap har service ko alag-alag scale kar sakte hain, jaha jarurat ho, instead of the whole application.

Technology Diversity: Har service ko alag technology stack (programming languages, databases, etc.) mein likha ja sakta hai, jo us specific problem ke liye best suited ho.

Decentralized Data Management: Har microservice apna data manage karta hai, aur yeh data independently stored hota hai.

Faster Deployment: Chhote services ko quickly develop aur deploy kiya ja sakta hai, jo rapid deployment aur continuous delivery mein madad karta hai.

Microservices architecture aaj kal modern web applications mein kaafi popular hai, kyunki yeh large-scale applications ko manage karna aasan banata hai.

## Q: What is `Monolith architecture`?
A: A `Monolith architecture` is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications. A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. This makes updates restrictive and time-consuming.
means we are not dividing software into small, well-defined modules, we use every services like, database, server or a UI of the application, in one Application file.


-------------------------------------------Monolith architecture mein, pura application ek single codebase ke andar hota hai, jaha sari functionalities tightly coupled hoti hain. React mein ek monolithic architecture ka example create karne ke liye, aap puri application ko ek single component ya kuch tightly coupled components mein organize kar sakte hain.

Monolithic Architecture Example in React
Maan lijiye, aap ek chhoti si e-commerce application bana rahe hain jisme Products, Cart, aur Checkout functionalities hain. Monolithic architecture mein, aap sari functionalities ko ek single component ya kuch closely related components ke andar likhenge.

jsx
Copy code
import React, { useState } from 'react';

function ECommerceApp() {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
  ]);

  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleCheckout = () => {
    setCheckout(true);
  };

  return (
    <div>
      <h1>My E-Commerce App</h1>
      
      {/* Products Listing */}
      <div>
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Cart */}
      <div>
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <button onClick={handleCheckout}>Checkout</button>
      </div>

      {/* Checkout */}
      {checkout && (
        <div>
          <h2>Checkout</h2>
          <p>Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
          <p>Thank you for your purchase!</p>
        </div>
      )}
    </div>
  );
}

export default ECommerceApp;

## Q: What is the difference between `Monolith and Microservice`?
A: With `monolithic architectures`, all processes are tightly coupled and run as a single service. This means that if one process of the application experiences a spike in demand, the entire architecture must be scaled. Adding or improving a monolithic application’s features becomes more complex as the code base grows. This complexity limits experimentation and makes it difficult to implement new ideas. Monolithic architectures add risk for application availability because many dependent and tightly coupled processes increase the impact of a single process failure.

With a `microservices architecture`, an application is built as independent components that run each application process as a service. These services communicate via a well-defined interface using lightweight APIs. Services are built for business capabilities and each service performs a single function. Because they are independently run, each service can be updated, deployed, and scaled to meet demand for specific functions of an application.
![Monolith and Microservice](../Coding/Images/monolith-microservices.png)

## Q: Why do we need a `useEffect Hook`?
A: `useEffect Hook` is javascript function provided by `react`. The useEffect Hook allows you to  `eliminate side effects` in your components. Some examples of side effects are: `fetching API data`, `directly updating the DOM`, and `setting up subscriptions or timers`, etc can be lead to unwarranted side-effects.
useEffect accepts `two arguments`, a `callback function` and a `dependency array`. The second argument is optional.

```
useEffect(() => {}, [])
```
The `() => {}` is callback function and `[]` is called a empty dependency array. 
If anything that we pass (suppose currentState) inside the `[]` it trigger the callback function and changes the state of the application.
```
useEffect(() => {
    setCurrentState("true");
}, [currentState])
```
If we do not pass empty dependency array then the useEffect runs everytime when the UI is rendered.

```
useEffect(() => {})
```
--------------------------------------
`useEffect` hook React me ek essential tool hai jo component lifecycle management ke liye use hota hai. Jab aap functional components ka use karte hain (instead of class components), to `useEffect` hook aapko side effects ko handle karne me madad karta hai, jaise data fetching, subscriptions, ya DOM manipulations.

## Q: What is `Optional Chaining`?
A: `Optional Chaining` (`?.`) operator accesses an object's property or calls a function. If the object accessed or function called is `undefined or null` , it returns `undefined` instead of throwing an error.
`Optional Chaining` (`?.`) is good way of accessing the object keys, it prevents the application from being crashed if the key that we are trying to access is not present. If the key is not present then instead of a throwing key error, it returns `undefined`.
# Example:
`const street = user?.address?.street?.name;`

-------------------------------
Optional chaining (?.) JavaScript me ek syntax feature hai jo aapko nested object properties ya methods ko access karte waqt errors se bachne me madad karta hai. Yeh feature tab useful hota hai jab aapko uncertain ho ki koi specific property ya method exist karta hai ya nahi.


## Q: What is `Shimmer UI`?
A: A `Shimmer UI` resembles the page's actual UI, so users will understand how quickly the web or mobile app will load even before the content has shown up. It gives people an idea of what's about to come and what's happening (while UI currently loading) when a page full of content/data takes more than 3 - 5 seconds to load.
Shimmer UI is a great way for loading the applications. Instead of showing a loading circle we can design a shimmer UI for our application that is good for user experience.


## Q: What is the difference between `JS expression and JS statement`?
A: A `JS expression` returns a value that we use in the application. for example: 
```
1 + 2 // expresses 
"foo".toUpperCase() // expresses 'FOO'
console.log(2) // logs '2'
isTrue ? true : false // returns us a true or false value based on isTrue value
```
A `JS statement`, does not return a value. for example:
```
let x; // variable declaration
if () { } // if condition
```
If we want to use `JS expression` in JSX, we have to wrap in `{/* expression slot */}` and if we want to use `JS statement` in JSX, we have to wrap in `{(/* statement slot */)}`;


## Q: What is `Conditional Rendering`? explain with a code example.
A: `Conditional rendering` in React works the same way conditions work in `JavaScript`. Use JavaScript operators like `if` or the `conditional operator` to create elements representing the current state, and let React update the UI to match them. for example:
```
// Using Ternary operator as a shorthand way or writing an if-else statement
{isLoggedIn ? (return <UserGreeting />) : (return <GuestGreeting />)};
// Using an if…else Statement
{
  (if (isLoggedIn) {
    return <UserGreeting />;
  }else {
    return <GuestGreeting />;
  })
}
// Using Logical &&
{isLoggedIn && <button>Logout</button>}
```


## Q: What is `CORS`?
A: Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request.
------------------------------------------
CORS Kya Hai?
Jab aapki web application kisi doosri origin se data ya resources access karna chahti hai (jaise kisi doosri domain, subdomain, ya port se), to yeh "cross-origin" request kehlaati hai. By default, web browsers cross-origin requests ko block karte hain, taaki security risks (jaise CSRF attacks) se bachaya ja sake. CORS is behavior ko manage karne ke liye ek standardized way provide karta hai.

CORS in Action:
Same-Origin Policy:
By default, browsers me "same-origin policy" enforced hoti hai. Is policy ke according, ek web page sirf apni hi origin (domain, protocol, aur port) se resources access kar sakta hai.

Example:

Same Origin: `https://example.com/page1` can access resources from `https://example.com/data`.
Different Origin: `https://example.com `cannot access resources from `https://another-domain.com/api`.

Example Without CORS:
Maan lijiye, aapki web application `https://myapp.com se https://api.example.com/data` ko access karna chahti hai. Agar CORS properly configure nahi kiya gaya hai, to browser request ko block kar dega.

```
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

```
```
Access to fetch at 'https://api.example.com/data' from origin 'https://myapp.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.


```


## Q: What is `async and await`?
A: `Async`: It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a promise. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.
`Await`: Await function is used to wait for the promise. It could be used within the `async` block only. It makes the code wait until the promise returns a result. It only makes the async block wait.
for example: 
```
// async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    const data = await fetch(
      "FOODFIRE_API_URL"
    );
    const json = await data.json();
    // we get the Swiggy API data in json format
    console.log(json);
  }
```


## Q: What is the use of `const json = await data.json()`; in `getRestaurants()`?
A: The `data` object, returned by the `await fetch()`, is a generic placeholder for multiple data formats.
so we can extract the `JSON object` from a `fetch` response by using `await data.json()`.
`data.json()` is a method on the data object that lets you extract a `JSON object` from the data or response. The method returns a promise because we have used `await` keyword.
so `data.json()` returns a promise resolved to a `JSON object`.