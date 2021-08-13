# Redux Starter Code - Boiler Plate

1. run `npm install` to get started 
2. run `npm i redux react-redux` (gets access to the store to all of your components)
3. run `npm start` to start server
4. In index.js, insert `import { Provider } from 'react-redux'` because in order to give access to our store to our components, we bring in `Provider` from react-redux. We'll wrap `App` with the `Provider`. !!!PROVIDER WILL GIVE ACCESS TO THE STORE.!!!
5. To give this provider a store, we have to create one. We'll insert the following in index.js: `import { createStore } from 'redux'`.
6. We'll bring in store by creating `const store = createStore(() => {})`. `createStore` takes in as an argument is a reducer. Reducers have to be functions. For right now, we'll plug in a random function just to stop it from breaking.
7. Once our store is create, we can pass that onto our `provider`. We pass it as a prop. Like so: `<Provider store={store}>`.
8. `console.log` store and check in your browser. You should see an object that has functions in there. Like: dispatch, getState, replaceReducer, etc. This is what our store looks like.

# REDUX

1. What is redux?
- It is a state management tool. It was built to manage our state. You get the option of having a global state (aka store).
- In a typical app (React), your state will live in components. 
- But the redux store is usually for state that you have to pass 50 components or more. 
- Redux handles state management at the top level. There is a hierarchy.
- By having a redux store, it lives outside the top level. In a React app, state lives in a component that can be passed down to other components. Like this:

State
|     \      \
Comp   Comp   Comp
|       \      \
Comp    Comp    Comp

- However, Redux lives outside at the top level deep where components can access the store directly. We won't need to pass the state from the stop level component down to different components. We can access store from any component within our application. It is a global store/state. Like so:

Redux Store 
|          \        \
State                \
|     \      \        \
Comp   Comp   Comp     Comp
|       \      \
Comp    Comp    Comp

2. Why use Redux?
- For bigger applications where it's hard to manage state
- Trouble mutating state

3. Benefits of using Redux?
- There is only one way to change state; therefore, you can not mutate it. There's only one way to get things into the store and one way out of the store. The ONLY way to change state from the store is called `dispatch()` (a function).

4. Some of the functions used in Redux:
- *dispatch (only way to change state in Redux)
- getState
- subscribe
- replace reducer

5. Dispatch in Redux
- dispatch takes in an action which then gets passed to the reducer and tells it how to change state exactly.
- Pseudocode: `dispatch(action)`
- Example: `dispatch({type: "hello"})`

6. Reducers in Redux
- They are functions and they are pure functions (pure functions is without any side effects)
- They control the state in Redux.

7. Actions in Redux
- Actions are just objects `{}`
- Example: actions = `{type: ""}` (This type is going to be used to tell your reducer how it should change the state. The type is always a string.)
- `dispatch()` takes in objects that are actions.
- Whenever you want to change the state, you will dispatch an action (i.e. `dispatch({})`) to the store. That action will then be fed to every single one of your reducers and your reducers will figure out if they need to handle the action or not handle the action.