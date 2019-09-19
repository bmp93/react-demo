
##  Context API

This is the alternative to **prop drilling**.

It means Context provides a way to pass data through the component tree without having to pass props down manually at every level.

## Description

I'll create Context with `React.createContext()`, and call it  `AppContext`. This will also give me  `AppContext.Provider`  and  `AppContext.Consumer`. 
What these two components do is:

-   **Provider**  - The component that provides the value
-   **Consumer**  - A component that is consuming the value