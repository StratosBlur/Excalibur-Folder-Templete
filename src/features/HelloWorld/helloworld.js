import React from 'react';
import {connect} from 'react-redux';
import Credit from '../../components/credit';
import action from './actions';
import '../../assets/css/app.css';


const mapStateToProps = state => ({
  helloworld: state.helloWorld, // From RootReducer.js
});

const mapDispatchToProps = dispatch => ({
  Incress: () => dispatch(action.Incress()),
  Decress: () => dispatch(action.Decress()),
});

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.handleIncress = this.handleIncress.bind(this);
    this.handleDecress = this.handleDecress.bind(this);
  }

  handleIncress() {
    this.props.Incress();
  }
  
  handleDecress() {
    this.props.Decress();
  }


  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <div className="Controller">
          {this.props.helloworld.count}
          <button onClick={() => this.handleIncress()}>+</button>
          <button onClick={() => this.handleDecress()}>-</button>
        </div>
        <Credit />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);