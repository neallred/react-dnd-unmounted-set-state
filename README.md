# react-dnd-unmounted-set-state

If you quickly drag "<drag handle>" past the red markers of the neighboring `<Letter />`, the child `<Side />` component will unmount before collect runs. That will lead to the following error.

```
index.js:1 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    in Side (at Letter.tsx:32)
```
