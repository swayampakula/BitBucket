import React , { Component } from 'react'
import { Table, Image } from 'semantic-ui-react'
import records from '../../alltimerecords.json'
import teamobj from './teamsInfo.js'
import GennericTable from './gennerictable.jsx'
import bowllingStats from '../../bowlingalltime.json'
import battingsstats from '../../battingalltime.json'
export default class AllTimeRecornds extends Component {
  constructor () {
		super();
		this.state = {
sortParameter:"winPercentage",toggle:true}
	}
  handleParent(value,toggle){
    this.setState({sortParameter:value,toggle:toggle})
  }
  render() {
  const  {sortParameter,toggle}=this.state;
    console.log("alltimerecords");
    if(toggle)
      records.sort((b,a)=>(a[sortParameter]-b[sortParameter]))
    else {
      records.sort((a,b)=>(a[sortParameter]-b[sortParameter]))
    }
  return (
      <GennericTable location={'All Times'}  battingsstats={battingsstats} bowllingStats={bowllingStats} records={records} activeItem={this.state.sortParameter} toggle={this.state.toggle} setParent={this.handleParent.bind(this)}/>
  )
}
}
