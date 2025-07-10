// following is a simpler way to understand how react works under the hood
// We have 3 things: 
// 1. JS object(react element), we define in our JS
// 2. A div container in the dom(index.html) and 
// 3. A Render function renders the JS object to the html element on the webpage.

//function that will facilitate rendering
function customRender(reactElement, container){ 
    const domElement = document.createElement(reactElement.type) // creating a dom element of type defined in reactElement object
    domElement.innerHTML = reactElement.children //accessing the text contnt of the element

    for(const prop in reactElement.props){ // iterating over the props in react element
        if(prop === 'children') continue; // to avoid the case where children is a key in props,
        domElement.setAttribute(prop, reactElement.props[prop]) 
    }
    container.appendChild(domElement) // append the element to the html container/page
}


// below reactElement is a javascript object that will be converted to html element
// so basically it will create a html element as following
// <a href="https://www.google.com" target="_blank">Click me to visit Google</a>
const reactElement = {
    type: 'a', // type of the element, anchor tag
    props: { //properties of the element
        href: 'https://www.google.com', // attributes of the element
        target: '_blank', // attributes of the element
    },
    children: 'Click me to visit Google', //text that will be displayed on page
}

const mainContainer = document.getElementById('root'); // container reference(select the div container) with id='root'

// so now we have defines the element(reactElement) we want to append to the webpage and we have the container reference (mainContainer) that we want to append this element to

//But how will it happen? So for that we need a function that facalitates this process.
//The function which facilitate this process is called a renderer that will take the react element and the container reference and will append the react element to the container. This process is called rendering.

customRender(reactElement, mainContainer); //select the react element and add it to the main container in the index.html


// In react we dont write elements and neither the function.
// React has it's own Renderer that does everything.
// We define a function which returns JSX and then React handels everything from converting JSX to an element and updating DOM.
//these functions we define are called Components in React. They have JS and HTML both in it, and return a JSX