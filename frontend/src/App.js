import React from 'react';
// import Preloader from './Components/Preloader';

function App() {
  return (
    <div classname="center-align">
  <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s4">
          <i className="material-icons prefix">title</i>
          <input id="icon_prefix" type="text" className="validate" />
          <label htmlFor="icon_prefix">title</label>
        </div>
        <div className="input-field col s5">
          <i className="material-icons prefix">description</i>
          <input id="description" type="tel" className="validate" />
          <label htmlFor="description">content</label>
        </div>
        <div class="input-field col s1">
        <i className="material-icons prefix">delete</i>
        </div>
      </div>
    </form>
  </div>
</div>

  );
}

export default App;
