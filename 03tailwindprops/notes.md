In this lecture we covered "props".

We create Coponents, that can be re-used as many times as required.

But the valuse inside the card will be different for each card. So how to do that?
- That's were props are used. -> Props (short for properties) are read-only data passed from a parent component to a child component.
- We can pass variable values in each "components.jsx" which will be used to set the value of text and other things inside the components.

They are the way components communicate with each other in React.

---

## 🔑 Key Features of Props

| Feature       | Description                                      |
|---------------|--------------------------------------------------|
| Purpose       | Pass data to child components                    |
| Direction     | Top-down (parent → child)                        |
| Mutability    | Immutable in child                               |
| Analogy       | Like function arguments                          |
| Syntax        | `<Component propName="value" />`                 |

---

## 🧪 Basic Example

### Parent Component:

```jsx
function App() {
  return <Greeting name="Ram" />;
}
```

### Child Component (Receiving Props):

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

- The App passes a prop named name with value "Ram" to the Greeting component.
- Greeting uses props.name to show the message.
---

### 📌 Props Are Read-Only

```
function Greeting({ name }) {
  name = "Someone else"; // ❌ Not allowed
}
```


---

### 🧾 Summary

| Question                          | Answer                         |
| --------------------------------- | ------------------------------ |
| What are props?                   | Inputs to a component          |
| Who sends them?                   | Parent component               |
| Who receives them?                | Child component                |
| How are they used?                | As function arguments          |
| Can they be changed in child?     | ❌ No, they are read-only       |
| Can functions be passed as props? | ✅ Yes, for callbacks or events |


