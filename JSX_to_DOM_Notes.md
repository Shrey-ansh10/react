# 🧩 JSX to Real DOM — Step-by-Step Notes

This guide explains how JSX (JavaScript XML) is transformed into actual HTML elements using React.

---

## 🔄 Step-by-Step: JSX to Real DOM Element

### 1. ✅ JSX Syntax

You write:
```jsx
const anElement = <a href="https://google.com" target="_blank">Visit Google</a>;
```

### 2. 🔧 Transpilation (by Babel)

JSX is not valid JavaScript by default, so it is transpiled (converted) using Babel into:

```js
React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Visit Google'
);
```

### 3. 🧠 Virtual DOM Object

`React.createElement()` returns a **virtual DOM object** — a JavaScript representation of the UI element:

```js
{
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
    children: 'Visit Google'
  }
}
```

This is still **not real HTML** — it's an in-memory object.

### 4. ⚛️ ReactDOM Rendering

When you use:

```js
ReactDOM.render(anElement, document.getElementById('root'));
```

React:

- Compares this virtual DOM to the previous one
- Calculates the **minimal set of changes**
- Applies those changes to the real DOM efficiently using `document.createElement`, `setAttribute`, etc.

### 5. 🌐 Real DOM is Updated

Finally, the real DOM is rendered in the browser as:

```html
<a href="https://google.com" target="_blank">Visit Google</a>
```

---

## 💡 Key Terms Recap

| Term | Description |
|------|-------------|
| JSX | HTML-like syntax used in React |
| `React.createElement()` | Converts JSX to virtual DOM object |
| Virtual DOM | Lightweight JS representation of actual DOM elements |
| ReactDOM | Renders virtual DOM to the real DOM in the browser |

---

## ✅ Summary

- JSX is syntactic sugar for `React.createElement()`
- It returns a **virtual DOM object**, not real HTML
- `ReactDOM.render()` mounts the virtual DOM to the actual DOM in the browser


React uses `React.createElement()` to convert JSX into virtual DOM objects, and ReactDOM is the one that takes that and renders it into real DOM elements in the browser.

<!-- JSX --Transpilation ==> `React.createElement()` ==> VirtualDOM object ==> ReactDOM Rendering ==> update realDOM -->

➡️ **JSX** → _(Transpilation)_ → `React.createElement()` → **Virtual DOM Object** → `ReactDOM.render()` → **Real DOM Update**
