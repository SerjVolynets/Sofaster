import React from 'react';
import Home from './containers/home/index'
import RouteNavigation from './navigation/index'

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
    <RouteNavigation />
          </>
  );
};

export default App;
