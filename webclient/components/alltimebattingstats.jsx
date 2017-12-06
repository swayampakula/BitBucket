import React , { Component } from 'react'
import battingsstats from '../../battingalltime.json'
import BattingTable from './battingtable.jsx'
export default class AllTimeBattingStats extends Component {
  constructor () {
		super();
	}
  render() {
    const {sortparameter}=this.props.params
    console.log(this.props);
      battingsstats.sort((b,a)=>{
        if(sortparameter!='highestScore')
    if(a.matchesplayed<15)
     return 0-b[sortparameter]
    else if(b.matchesplayed<15){
      return a[sortparameter]-0
    }
    return a[sortparameter]-b[sortparameter]
      })
      battingsstats.splice(100)
  return (
      <BattingTable location={'All Times'}  battingsstats={battingsstats} sortparameter={sortparameter} />
  )
}
}
