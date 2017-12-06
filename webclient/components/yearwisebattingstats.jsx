import React , { Component } from 'react'
import battingsstats from '../../battingyearwise.json'
import BattingTable from './battingtable.jsx'
export default class YearWiseBattingStats extends Component {
  constructor () {
		super();
	}
  render() {
    const {year,sortparameter}=this.props.params
    battingsstats[year].sort((b,a)=>{
      if(sortparameter!='highestScore')
    if(a.matchesplayed<7)
     return 0-b[sortparameter]
    else if(b.matchesplayed<7){
      return a[sortparameter]-0
    }
    return a[sortparameter]-b[sortparameter]
      })
      battingsstats[year].splice(100)
  return (
      <BattingTable location={'All Times'}  battingsstats={battingsstats[year]} sortparameter={sortparameter} />
  )
}
}
