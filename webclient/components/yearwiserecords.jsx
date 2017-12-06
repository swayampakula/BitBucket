import React , { Component } from 'react'
import { Table, Image } from 'semantic-ui-react'
import records from '../../year.json'
import teamobj from './teamsInfo.js'
import GennericTable from './gennerictable.jsx'
import bowllingStats from '../../bowlingyearwise.json'
import battingsstats from '../../battingyearwise.json'
export default class YearWiseRecords extends Component {
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
    const {year}=this.props.params
    console.log(this.props.params.year);
    if(toggle)
      records[year].sort((b,a)=>(a[sortParameter]-b[sortParameter]))
    else {
        records[year].sort((a,b)=>(a[sortParameter]-b[sortParameter]))
      }
  return (
      <GennericTable bowllingStats={bowllingStats[year]} battingsstats={battingsstats[year]} location={year} records={records[year]} activeItem={this.state.sortParameter} toggle={this.state.toggle} setParent={this.handleParent.bind(this)}/>
  )
}
}
