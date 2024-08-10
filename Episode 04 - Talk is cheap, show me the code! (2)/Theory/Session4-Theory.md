## Namaste React Course by Akshay Saini
# Chapter 03 - Laying the Foundation

## Q: What is `JSX`?
A: JSX stands for JavaScript XML.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
JSX makes it easier to write and add HTML in React.
JSX converts HTML tags into react elements.
## Namaste React Course by Akshay Saini
# Chapter 04 - Talk is Cheap, show me the code

## Q: Is `JSX` mandatory for React?
A: `JSX` is an Extension Syntax that allows writing HTML and Javascript together easily in React and is used to create React elements. These elements are then rendered to the React DOM. Each JSX element is just to make use of React easy and for calling React.createElement(component, props, …children) with less work. So, anything that is done with JSX can also be done with just plain JavaScript. So `JSX` is not mandatory but is used for writing better and clean code instead of writing code using `React.CreateElement`.
#### Example of `JSX`
```
const sample = <h2>Greetings</h2>;
```


## Q: Is `ES6` mandatory for React?
A: `ES6` is not mandatory for `React` but is highly recommendable. The latest projects created on React rely a lot on ES6. React uses ES6, and you should be familiar with some of the new features like: Classes, Arrow Functions, Variables(let, const).
ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015.


## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable or React element. 
The `{}` can embed a javascript expression or a variable or React element inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value. If component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
#### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```


## Q: How can I write `comments` in JSX?
A: JSX comments are written as follows:
- `{/*  */}` - for single or multiline comments
#### Example
```
{/* A JSX comment */}
{/* 
  Multi
  line
  JSX
  comment
*/}  
```

## Q: What is `<React.Fragment></React.Fragment>` and `<></>`?
A: `<React.Fragment></React.Fragment>` is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
`<></>` is the shorthand tag for `React.Fragment`. The only difference between them is that the shorthand version does not support the key attribute.
#### Example
```
return (
        <React.Fragment>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </React.Fragment>
    );

return (
        <>
            <Header />
            <Navigation />
            <Main />
            <Footer />
        </>
    );
```


## Q: What is `Reconciliation` in React?
A: `Reconciliation` is the process through which React updates the Browser DOM and makes React work faster. React use a `diffing algorithm` so that component updates are predictable and faster. React would first calculate the difference between the real DOM and the copy of DOM (Virtual DOM) when there's an update of components.
React stores a copy of Browser DOM which is called `Virtual DOM`. When we make changes or add data, React creates a new Virtual DOM and compares it with the previous one. Comparison is done by `Diffing Algorithm`.
React compares the Virtual DOM with Real DOM. It finds out the changed nodes and updates only the changed nodes in Real DOM leaving the rest nodes as it is. This process is called Reconciliation.


## Q: What is `React Fiber`?
A: React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter.
The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React.
Because Fiber is asynchronous, React can:
- Pause, resume, and restart rendering work on components as new updates come in
- Reuse previously completed work and even abort it if not needed
- Split work into chunks and prioritize tasks based on importance


## Q: Why do we need `keys` in React?
A: A `key` is a special attribute you need to include when creating lists of elements in React. Keys are used in React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are unique Identifier used to give an identity to the elements in the lists.
Keys should be given to the elements within the array to give the elements a stable identity.
#### Example
```
<li key={0}>1</li>
<li key={1}>2</li>
<li key={2}>3</li>
```


## Q: Can we use `index as keys` in React?
A: Yes, we can use the `index as keys`, but it is not considered as a good practice to use them because if the order of items may change. This can negatively impact performance and may cause issues with component state.
Keys are taken from each object which is being rendered. There might be a possibility that if we modify the incoming data react may render them in unusual order.


## Q: What is `props in React`? Ways to.
A: props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.
#### Example
```
function App() {
  return (
    <div className="App">
      <Tool name="Chetan Nada" tool="Figma"/> // name and tool are props
    </div>
  )
}
```

## Q: What is `Config Driven UI`?
A: `Config Driven UI` are based on the configurations of the data application receives. It is rather a good practice to use config driven UIs to make application for dynamic. 
It is a very common & basic approach to interact with the User. It provides a generic interface to develop things which help your project scale well. It saves a lot of development time and effort.
A typical login form, common in most of the Apps. Most of these forms also get frequent updates as the requirements increase in terms of Form Validations, dropdown options,.. or design changes.


## Q: Difference between `Virtual DOM` and `Real DOM`?
A: DOM stands for `Document Object Model`, which represents your application UI and whenever the changes are made in the application, this DOM gets updated and the user is able to visualize the changes. DOM is an interface that allows scripts to update the content, style, and structure of the document.
- `Virtual DOM`
    - The Virtual DOM is a light-weight abstraction of the DOM. You can think of it as a copy of the DOM, that can be updated without affecting the actual DOM. It has all the same properties as the real DOM object, but doesn’t have the ability to write to the screen like the real DOM.
    - Virtual DOM is just like a blueprint of a machine, can do the changes in the blueprint but those changes will not directly apply to the machine.
    - Reconciliation is a process to compare and keep in sync the two files (Real and Virtual DOM). Diffing algorithm is a technique of reconciliation which is used by React.
- `Real DOM`
    - The DOM represents the web page often called a document with a logical tree and each  branch of the tree ends in a node and each node contains object programmers can modify the content of the document using a scripting language like javascript and the changes and updates to the dom are fast because of its tree-like structure but after changes, the updated element and its children have to be re-rendered to update the application UI so the  re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render the entire list and not only those item that receives the update .

|   `Real DOM`    |   `Virtual DOM` |
|-------------|-----------------|
| DOM manipulation is very expensive  | DOM manipulation is very easy  | 
| There is too much memory wastage  | No memory wastage  |
| It updates Slow | It updates fast |
| It can directly update HTML | It can’t update HTML directly  |
|  Creates a new DOM if the element updates. | Update the JSX if the element update |
| It allows us to directly target any specific node (HTML element) | It can produce about 200,000 Virtual DOM Nodes / Second. |
| It represents the UI of your application | It is only a virtual representation of the DOM 

DOM (Document Object Model) क्या होता है?
DOM (डॉक्युमेंट ऑब्जेक्ट मॉडल) एक प्रोग्रामिंग इंटरफ़ेस है, जो HTML और XML डॉक्युमेंट्स की स्ट्रक्चर को दर्शाता है। इसे वेब पेज का "हड्डी का ढांचा" भी कह सकते हैं। DOM का उपयोग करके हम वेब पेज के एलिमेंट्स को ऐक्सेस और मैनिपुलेट कर सकते हैं।

Real DOM (वास्तविक DOM) क्या होता है?
Real DOM वह है जो ब्राउज़र के अंदर वास्तविक वेब पेज की स्ट्रक्चर को दर्शाता है।
जब हम किसी एलिमेंट में बदलाव करते हैं, जैसे टेक्स्ट बदलते हैं, स्टाइल बदलते हैं, या कुछ और, तो पूरा DOM फिर से रेंडर होता है। इसका मतलब है कि पेज का हर एलिमेंट फिर से ब्राउज़र में रिफ्रेश होता है।
यह प्रक्रिया समय ले सकती है, खासकर जब पेज में बहुत सारे एलिमेंट्स हों।
Virtual DOM (वर्चुअल DOM) क्या होता है?
Virtual DOM एक हल्की कॉपी होती है Real DOM की, जिसे जावास्क्रिप्ट द्वारा मेमोरी में रखा जाता है।
जब किसी एलिमेंट में बदलाव किया जाता है, तो सबसे पहले यह बदलाव Virtual DOM में किया जाता है।
इसके बाद Virtual DOM यह गणना करता है कि कौन से एलिमेंट्स में वास्तविक रूप से बदलाव हुआ है और केवल उन्हीं को Real DOM में अपडेट करता है।
यह प्रक्रिया तेज़ होती है और परफॉर्मेंस को बेहतर बनाती है, क्योंकि पूरे DOM को फिर से रेंडर करने की बजाय केवल आवश्यक हिस्सों को अपडेट किया जाता है।
React.js जैसे लाइब्रेरीज और फ्रेमवर्क्स Virtual DOM का उपयोग करते हैं ताकि वेब ऐप्लिकेशन तेज़ और स्मूथ हो।
उदाहरण:
Real DOM: अगर किसी वेब पेज में 1000 एलिमेंट्स हैं और आप एक एलिमेंट बदलते हैं, तो पूरा 1000 एलिमेंट्स का DOM फिर से रेंडर होगा।
Virtual DOM: इसी स्थिति में, वर्चुअल DOM केवल उस एक एलिमेंट को रेंडर करेगा जिसमें बदलाव हुआ है, जिससे प्रक्रिया तेज़ हो जाएगी।
संक्षेप में:
Real DOM: ब्राउज़र का वास्तविक डॉक्युमेंट स्ट्रक्चर, धीमा रेंडरिंग।
Virtual DOM: वास्तविक DOM की हल्की कॉपी, तेज़ रेंडरिंग।
Virtual DOM की इस विशेषता के कारण, यह आधुनिक फ्रंट-एंड डेवलपमेंट में बहुत लोकप्रिय हो गया है।|
### Example 1 using JSX:
```
const myElement = <h1>I Love JSX!</h1>;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```
### Example 2 Without JSX:
```
const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```


## Q: Superpowers of `JSX`.
A: Using JSX, you can write markup inside Javascript, providing you with a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.
### Example
```
function greeting(user) {
//JSX
  return <h1>{user}, How are you!!!</h1>;
}
```


## Q: Role of `type` attribute in script tag? What options can I use there?
A: The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.
### `type` attribute can be of the following types:
- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
    ### Syntax
    ```
    <script type="text/javascript"></script>
    ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

## Q: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. 
The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```



## Q 3. 


In JSX, the three different ways to use a component ({TitleComponent}, {<TitleComponent/>}, and {<TitleComponent></TitleComponent>}) serve different purposes and have different meanings. Here’s an explanation of each in Hindi:

1. {TitleComponent}
अर्थ: यह केवल TitleComponent के संदर्भ (reference) को दर्शाता है।

उपयोग: जब आप किसी कम्पोनेंट को उसकी क्लास या फ़ंक्शन के रूप में पास करना चाहते हैं।

उदाहरण:

jsx
Copy code
function WrapperComponent(Component) {
  return <div><Component /></div>;
}

// Call the WrapperComponent and pass TitleComponent as an argument
const wrappedComponent = WrapperComponent(TitleComponent);
यहाँ, {TitleComponent} का मतलब है कि आप TitleComponent को एक कम्पोनेंट के रूप में पास कर रहे हैं, न कि उसे रेंडर कर रहे हैं।

2. {<TitleComponent/>}
अर्थ: यह एक TitleComponent को तुरंत रेंडर करता है और उसे एक बंद टैग (self-closing tag) के रूप में लिखा गया है।

उपयोग: जब कम्पोनेंट में कोई child elements नहीं होते हैं और आप इसे तुरंत रेंडर करना चाहते हैं।

उदाहरण:

jsx
Copy code
const element = <div>{<TitleComponent/>}</div>;
यहाँ, {<TitleComponent/>} का मतलब है कि TitleComponent को रेंडर किया जा रहा है और इसमें कोई child elements नहीं हैं।

3. {<TitleComponent></TitleComponent>}
अर्थ: यह TitleComponent को रेंडर करता है लेकिन एक खुले और बंद टैग के साथ लिखा गया है।

उपयोग: जब आप कम्पोनेंट में child elements या nested content देना चाहते हैं।

उदाहरण:

jsx
Copy code
const element = (
  <div>
    {<TitleComponent>Some Content</TitleComponent>}
  </div>
);
यहाँ, {<TitleComponent></TitleComponent>} का मतलब है कि TitleComponent को रेंडर किया जा रहा है और इसमें "Some Content" नाम का child element है।

सारांश:
{TitleComponent}: केवल TitleComponent को रेफर करता है, इसे रेंडर नहीं करता।
{<TitleComponent/>}: कम्पोनेंट को बिना किसी child elements के रेंडर करता है।
{<TitleComponent></TitleComponent>}: कम्पोनेंट को child elements या nested content के साथ रेंडर करता है।




