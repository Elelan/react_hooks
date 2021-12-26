import React from 'react';


// components
import UseMemoExample from './UseMemoExample'
import UseContextExample from './UseContextExample'
import UseCallbackExample from './UseCallbackExample'
import UseRefExample from './UseRefExample'

// styles
import './style.css'

const App = () => (
    <>
        <UseCallbackExample/>
        <hr/>
        <UseContextExample/>
        <hr/>
        <UseRefExample/>
        <hr/>
        <UseMemoExample/>
        <hr/>

    </>
);

export default App;