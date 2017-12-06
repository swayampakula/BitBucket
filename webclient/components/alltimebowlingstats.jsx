import React , { Component } from 'react'
import teamobj from './teamsInfo.js'
import GennericTable from './gennerictable.jsx'
import bowllingstats from '../../bowlingalltime.json'
import BowlingTable from './bowlingtable.jsx'
export default class AllTimeBowlingStats extends Component {
  constructor () {
		super();
	}
  render() {
    const {sortparameter}=this.props.params
    bowllingstats.sort((b,a)=>{
      if(sortparameter=='wickets')
        return a[sortparameter]-b[sortparameter]
      else if(sortparameter=='bf') {
        if(b[sortparameter].wickets-a[sortparameter].wickets==0)
            return b[sortparameter].runs-a[sortparameter].runs;
          return a[sortparameter].wickets-b[sortparameter].wickets;
      }
      else {
        if(a.matches<21)
         return b[sortparameter]-200
        else if(b.matches<21){
          return 200-a[sortparameter]
        }
        return b[sortparameter]-a[sortparameter]
      }
    })
    bowllingstats.splice(100)
  return (
      <BowlingTable location={'All Times'}  bowlingstats={bowllingstats} sortparameter={sortparameter}/>
  )
}
}
