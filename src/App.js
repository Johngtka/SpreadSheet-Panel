import React from 'react';

import "./index.css";

class App extends React.Component {
  state = {
    mode: 0,
    result: ''
  }

  calc() {
    var res
    var l1 = parseInt(document.getElementById('l1').value)
    var l2 = parseInt(document.getElementById('l2').value)
    switch (this.state.mode) {
      case 0:
        res = l1 + l2
        break
      case 1:
        res = l1 - l2
        break
      case 2:
        res = l1 * l2
        break
      case 3:
        if (l1 === 0 || l2 === 0) {
          res = "Nie można"
        } else {
          res = l1 / l2
        }
        break
      case 4:
        const meme = [l1, l2]
        res = meme.map((number) => <li class="meme">{number}</li>);
        break
      default:
        break
    }
    this.setState({
      result: res
    })
  }
  render() {
    return (
      <div className="App">
        <header>React Calculator</header>
        <main>
          <div id="screen">
            <div id="do">
              <input type="text" id="l1" placeholder="tu 1 liczba"></input>
              {this.state.mode === 0 && <div style={{ width: 40, height: 20, display: 'inline', fontFamily: "serif" }}>+</div>}
              {this.state.mode === 1 && <div style={{ width: 40, height: 20, display: 'inline', fontFamily: "serif" }}>-</div>}
              {this.state.mode === 2 && <div style={{ width: 40, height: 20, display: 'inline', fontFamily: "serif" }}>*</div>}
              {this.state.mode === 3 && <div style={{ width: 40, height: 20, display: 'inline', fontFamily: "serif" }}>/</div>}
              {this.state.mode === 4 && <div style={{ width: 40, height: 20, display: 'inline', fontFamily: "serif" }}>;-)</div>}
              <input type="text" id="l2" placeholder="tu 2 liczba"></input><br></br><br></br>
              <button className='dzial' onClick={this.calc.bind(this)}>=</button><br></br><br></br>
            </div>
          </div>
          <button className='dzial' onClick={() => this.setState({ mode: 0 })}>+</button>
          <button className='dzial' onClick={() => this.setState({ mode: 1 })}>-</button><br></br>
          <button className='dzial' onClick={() => this.setState({ mode: 2 })}>*</button>
          <button className='dzial' onClick={() => this.setState({ mode: 3 })}>/</button><br></br>
          <button className='dzial' onClick={() => this.setState({ mode: 4 })}>;-)</button><br></br>
          <div style={{ fontSize: 40, backgroundColor: "#ffffff", height: 50, marginLeft: "auto", marginRight: "auto", marginTop: 20, borderTop: '2px solid #000000', borderBottom: '2px solid #000000' }} id="wynik">{this.state.result}</div><br></br>
          <p style={{ margin: 0 }}><span style={{ color: '#ff0000' }}><b>*</b></span> - <i><b>" Wpisz liczbę 1 i 2 wybierz działanie<br></br> i kliknij = "</b></i></p>
        </main>
      </div>
    );
  }
}
export default App;