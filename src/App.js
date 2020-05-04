import React from 'react';
import './App.css';
import Colors from './components/pages/Colors.component';
import Blue from './components/pages/Blue.colors';
import Yellow from './components/pages/yellow.colors';
import { Route} from 'react-router-dom';
import Red from './components/pages/Red.colors';
import New from './components/pages/New.colors';
import Pink from './components/pages/pink.colors';








function App() {
  return (
    <div className="App">
     
        <Route exact path='/colors' component={ Colors } />
        <Route  path='/colors/blue' component={Blue} />
        <Route  path='/colors/yellow' component={Yellow} />
        <Route  path='/colors/red' component={Red} />
        <Route  path='/colors/pink' component={Pink} />
        <Route  path='/colors/new' component={New} />
        
    </div>
  );
}

export default App;
