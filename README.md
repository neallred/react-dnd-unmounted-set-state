# react-dnd-unmounted-set-state

If you quickly drag "<drag handle>" past the red markers of the neighboring `<Letter />`, the child `<Side />` component will unmount before collect runs. That will lead to the following error.

```
index.js:1 Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
    in Side (at Letter.tsx:33)
console.<computed>	@	index.js:1
r	@	backend.js:6
warningWithoutStack	@	react-dom.development.js:530
warnAboutUpdateOnUnmountedFiberInDEV	@	react-dom.development.js:25738
scheduleUpdateOnFiber	@	react-dom.development.js:23679
dispatchAction	@	react-dom.development.js:17076
(anonymous)	@	useCollector.js:31
handleChange	@	DragDropMonitorImpl.js:44
dispatch	@	redux.js:222
(anonymous)	@	DragDropManagerImpl.js:93
HTML5Backend.handleTopDragEnter	@	HTML5Backend.js:230
```
