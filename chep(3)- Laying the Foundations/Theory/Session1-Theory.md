## Namaste React Course by Akshay Saini
# Chapter 03 - Laying the Foundation

## Q: What is `JSX`?
A: JSX stands for JavaScript XML.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.
JSX makes it easier to write and add HTML in React.
JSX converts HTML tags into react elements.

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




