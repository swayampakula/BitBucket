import React , { Component } from 'react'
import { Table, Image,Icon, Card } from 'semantic-ui-react'
import teamobj from './teamsInfo.js'
import StatCard from './statcard.jsx'
export default class GennericTable extends Component {
  handleItemClick(value){
this.props.setParent(value,!this.props.toggle)
  }
  render() {
    const {activeItem,toggle,records,location,battingsstats,bowllingStats}=this.props
    var flag;
    if(location=='All Times')
      { flag=15;}
      else{
        flag=7
      }
    var batstats=["runs",'6s','highestScore','strikerate']
      var  batstatsObj={}
      console.log("gennerictable");
      batstats.forEach((val)=>{
        batstatsObj[val]=battingsstats.sort((b,a)=>{
      if(val!='highestScore')
      if(a.matchesplayed<flag)
       return 0-b[val]
      else if(b.matchesplayed<flag){
        return a[val]-0
      }
      return a[val]-b[val]
        }).slice()
      })
      if(location=='All Times')
        { flag=21;}
        else{
          flag=3
        }
      var bowlstatsObj={}
      var bowlStats=['wickets','bf','avg','eco']
          bowlStats.forEach((val)=>{
              bowlstatsObj[val]=bowllingStats.sort((b,a)=>{
                if(val=='wickets')
                  return a[val]-b[val]
                else if(val=='bf') {
                  if(b[val].wickets-a[val].wickets==0)
                      return b[val].runs-a[val].runs;
                    return a[val].wickets-b[val].wickets;
                }
                else {
                  if(a.matches<flag)
                   return b[val]-200
                  else if(b.matches<flag){
                    return 200-a[val]
                  }
                  return b[val]-a[val]

                }
              }).slice()
          })
          console.log(bowlstatsObj);

    const TableRows=records.map((val,index)=>(
      <Table.Row key={index}>
        <Table.Cell>{(index+1)+'.'}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Image src={teamobj[val.name]["url"]} className="teamimage" size='mini' avatar/>{teamobj[val.name]["ab"]}</Table.Cell>
        <Table.Cell>{val["played"]}</Table.Cell>
        <Table.Cell>{val["wins"]}</Table.Cell>
        <Table.Cell>{val["lost"]}</Table.Cell>
        <Table.Cell>{val["noResult"]}</Table.Cell>
        <Table.Cell>{val["winPercentage"]}%</Table.Cell>
      </Table.Row>
    ))
    console.log(batstatsObj);
  return (
    <div>
    <h1>{this.props.location} Points Table</h1>
    <Table striped>
      <Table.Header>
        <Table.Row>
        <Table.HeaderCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Team</Table.HeaderCell>
          <Table.HeaderCell><a onClick={this.handleItemClick.bind(this,"played")}>Played<Icon name={(activeItem=="played")?(toggle)?"sort descending":"sort ascending":'sort'} /></a></Table.HeaderCell>
          <Table.HeaderCell><a onClick={this.handleItemClick.bind(this,"wins")}>Won<Icon name={(activeItem=="wins")?(toggle)?"sort descending":"sort ascending":'sort'} /></a></Table.HeaderCell>
          <Table.HeaderCell><a onClick={this.handleItemClick.bind(this,"lost")}>Lost<Icon name={(activeItem=="lost")?(toggle)?"sort descending":"sort ascending":'sort'} /></a></Table.HeaderCell>
          <Table.HeaderCell>NR</Table.HeaderCell>
          <Table.HeaderCell><a onClick={this.handleItemClick.bind(this,"winPercentage")}>Win %<Icon name={(activeItem=="winPercentage")?(toggle)?"sort descending":"sort ascending":'sort'} /></a></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      {TableRows}
      </Table.Body>
    </Table>
    <h1>{this.props.location} Batting Leaders</h1>
    <StatCard statsobj={batstatsObj} location={location} type={"batting"} />
    <h1>{this.props.location} Bowling Leaders</h1>
    <StatCard statsobj={bowlstatsObj} location={location} type={"bowling"}/>

    </div>
  )
}
}
