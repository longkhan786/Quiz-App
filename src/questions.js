export default [
  {
    id: "q1",
    text: "Which of the following definitions best describes React.js?",
    answers: [
      "A library to build user interfaces with help of declarative code.",
      "A library for managing state in web applications.",
      "A framework to build user interfaces with help of imperative code.",
      "A library used for building mobile applications only.",
    ],
  },
  {
    id: "q2",
    text: "What purpose do React hooks serve?",
    answers: [
      "Enabling the use of state and other React features in functional components.",
      "Creating responsive layouts in React applications.",
      "Handling errors within the application.",
      "Part of the Redux library for managing global state.",
    ],
  },
  {
    id: "q3",
    text: "Can you identify what JSX is?",
    answers: [
      "A JavaScript extension that adds HTML-like syntax to JavaScript.",
      "A JavaScript library for building dynamic user interfaces.",
      "A specific HTML version that was explicitly created for React.",
      "A tool for making HTTP requests in a React application.",
    ],
  },
  {
    id: "q4",
    text: "What is the most common way to create a component in React?",
    answers: [
      "By defining a JavaScript function that returns a renderable value.",
      "By defining a custom HTML tag in JavaScript.",
      "By creating a file with a .jsx extension.",
      'By using the "new" keyword followed by the component name.',
    ],
  },
  {
    id: "q5",
    text: 'What does the term "React state" imply?',
    answers: [
      "An object in a component that holds values and may cause the component to render on change.",
      "The lifecycle phase a React component is in.",
      "The overall status of a React application, including all props and components.",
      "A library for managing global state in React applications.",
    ],
  },
  {
    id: "q6",
    text: "How do you typically render list content in React apps?",
    answers: [
      "By using the map() method to iterate over an array of data and returning JSX.",
      "By using the for() loop to iterate over an array of data and returning JSX.",
      "By using the forEach() method to iterate over an array of data and returning JSX.",
      "By using the loop() method to iterate over an array of data and returning JSX.",
    ],
  },
  {
    id: "q7",
    text: "Which approach can NOT be used to render content conditionally?",
    answers: [
      "Using a the #if template syntax.",
      "Using a ternary operator.",
      "Using the && operator.",
      "Using an if-else statement.",
    ],
  },
  {
    id: "q8",
    text: "What is the significance of the virtual DOM in React?",
    answers: [
      "It improves the performance of the application by reducing the need for direct manipulation of the actual DOM.",
      "It is an alternative to the real DOM used in React for server-side rendering.",
      "It is a concept unrelated to React and used only in other JavaScript frameworks.",
      "It is a tool for debugging React applications in the browser.",
    ],
  },
  {
    id: "q9",
    text: "What is JSX syntax and why is it used in React?",
    answers: [
      "JSX is a syntax extension for JavaScript, recommended for use with React to describe what the UI should look like.",
      "JSX is a lightweight templating engine used to generate HTML in React applications.",
      "JSX is a separate programming language designed for building user interfaces in React.",
      "JSX is a deprecated feature in React and should be avoided in modern applications.",
    ],
  },
  {
    id: "q10",
    text: "Explain the concept of lifting state up in React.",
    answers: [
      "Lifting state up involves moving the state to a higher-level component to share it with one or more child components.",
      "It refers to the process of elevating a components state to make it globally accessible.",
      "It is a term used for updating the state of a component based on user input.",
      "It is a technique used to improve the performance of React applications.",
    ],
  },
  {
    id: "q11",
    text: "What are React props, and how are they different from state?",
    answers: [
      "Props are inputs to a React component that are passed down from its parent, while state is managed within the component itself.",
      "Props and state are interchangeable terms in React, representing the same concept.",
      "State is used for static data, while props are used for dynamic data in React components.",
      "Props are used only in class components, while state is used only in functional components.",
    ],
  },
  {
    id: "q12",
    text: "Explain the concept of controlled components in React forms.",
    answers: [
      "Controlled components are form elements whose value is controlled by React state, enabling React to be the source of truth for the input value.",
      "Controlled components are components that automatically handle form validation in React applications.",
      "Controlled components are components that manage their own state independently of React.",
      "Controlled components are a deprecated feature in React and should be avoided.",
    ],
  },
  {
    id: "q13",
    text: "What is the purpose of the useEffect() hook in React?",
    answers: [
      "It is used to perform side effects in function components.",
      "It is used to handle asynchronous operations in React applications.",
      "It is used to manage state in React applications.",
      "It is used to create custom hooks in React applications.",
    ],
  },
  {
    id: "q14",
    text: "What is the purpose of the useCallback() hook in React?",
    answers: [
      "It is used to memoize functions in React applications.",
      "It is used to create custom hooks in React applications.",
      "It is used to manage state in React applications.",
      "It is used to perform side effects in function components.",
    ],
  },
  {
    id: "q15",
    text: "What is the purpose of the useMemo() hook in React?",
    answers: [
      "It is used to memoize values in React applications.",
      "It is used to create custom hooks in React applications.",
      "It is used to manage state in React applications.",
      "It is used to perform side effects in function components.",
    ],
  },
  {
    id: "q16",
    text: "What is the purpose of the useReducer() hook in React?",
    answers: [
      "It is used to manage state in React applications.",
      "It is used to create custom hooks in React applications.",
      "It is used to memoize values in React applications.",
      "It is used to perform side effects in function components.",
    ],
  },
  {
    id: "q17",
    text: "What is the purpose of the useContext() hook in React?",
    answers: [
      "It is used to consume context in React applications.",
      "It is used to create custom hooks in React applications.",
      "It is used to memoize values in React applications.",
      "It is used to manage state in React applications.",
    ],
  },
  {
    id: "q18",
    text: "What is the purpose of the useRef() hook in React?",
    answers: [
      "It is used to create references in React applications.",
      "It is used to create custom hooks in React applications.",
      "It is used to memoize values in React applications.",
      "It is used to manage state in React applications.",
    ],
  },
  {
    id: "q19",
    text: "Explain the concept of React context and when it is useful.",
    answers: [
      "React context is a feature that enables the sharing of values, such as theme or authentication status, between components without explicit prop drilling.",
      "React context is used to manage the local state within a component.",
      "React context is a deprecated feature in React and should be avoided.",
      "React context is only applicable to class components and is not used in functional components.",
    ],
  },
  {
    id: "q20",
    text: "What is the role of the ReactDOM library in React applications?",
    answers: [
      "ReactDOM is used to render React components into the DOM, facilitating the interaction between React and the browser.",
      "ReactDOM is a separate framework for building user interfaces, independent of React.",
      "ReactDOM is a deprecated feature in React and should be replaced with a different library.",
      "ReactDOM is only used for server-side rendering in React applications.",
    ],
  },
];
