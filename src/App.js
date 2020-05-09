import React from 'react';
import { fetchData} from './api' ;
import { Cards, Tables} from './components' ;
import styles from './App.module.css' ;
import StatePicker from './components/StatePicker/StatePicker';

export default class App extends React.Component {
  state = {
    data : {},
    state_name : '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData() ;
    this.setState({data : fetchedData}) ;
  }

  handleState = (state_name) => {
    this.setState({state_name : state_name}) ;
  }

  render() {
    const { data, state_name } = this.state ;
    return (
      <div className = {styles.container}>
          <Cards  data = { data } state_name = {state_name} />
          <StatePicker data = {data} state_name = {state_name} handleState = { this.handleState } />
          <Tables data = { data } state_name = {state_name} handleState = { this.handleState } />
      </div>
    )
  }
}
