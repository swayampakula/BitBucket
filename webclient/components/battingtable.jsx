import React , { Component } from 'react'
import { Table, Image,Icon, Card } from 'semantic-ui-react'
import teamobj from './teamsInfo.js'
export default class BattingTable extends Component {
  handleItemClick(value){
this.props.setParent(value,!this.props.toggle)
  }
  render() {
    const {battingsstats,sortparameter}=this.props
    console.log(battingsstats);
    const TableRows=battingsstats.map((val,index)=>(
      <Table.Row key={index}>
        <Table.Cell>{index+1+'.'}</Table.Cell>
        <Table.Cell><Image src={teamobj[val.team]["url"]} className="teamimage" size='mini' avatar/>{val.name}</Table.Cell>
        <Table.Cell style={{backgroundColor:(sortparameter=='matchesplayed')?'#e8e8ee':'white'}}>{val["matchesplayed"]}</Table.Cell>
        <Table.Cell style={{backgroundColor:(sortparameter=='runs')?'#e8e8ee':'white'}}>{val["runs"]}</Table.Cell>
        <Table.Cell style={{backgroundColor:(sortparameter=='highestScore')?'#e8e8ee':'white'}}>{val["highestScore"]}</Table.Cell>
        <Table.Cell style={{backgroundColor:(sortparameter=='avg')?'#e8e8ee':'white'}}>{val["avg"]}</Table.Cell>
        <Table.Cell style={{backgroundColor:(sortparameter=='strikerate')?'#e8e8ee':'white'}}>{val["strikerate"]}</Table.Cell>
        <Table.Cell style={{backgroundColor:(sortparameter=='100s')?'#e8e8ee':'white'}}>{val["100s"]}</Table.Cell>
        <Table.Cell style={{backgroundColor:(sortparameter=='50s')?'#e8e8ee':'white'}}>{val["50s"]}</Table.Cell>
        <Table.Cell style={{backgroundColor:(sortparameter=='6s')?'#e8e8ee':'white'}}>{val["6s"]}</Table.Cell>
        <Table.Cell style={{backgroundColor:(sortparameter=='4s')?'#e8e8ee':'white'}}>{val["4s"]}</Table.Cell>
      </Table.Row>
    ))
  return (
    <div>
    <h1>Batting Stats</h1>
    <Table striped>
      <Table.Header>
        <Table.Row>
        <Table.HeaderCell><a >Pos </a></Table.HeaderCell>
        <Table.HeaderCell>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Player</Table.HeaderCell>
          <Table.HeaderCell style={{backgroundColor:(sortparameter=='matchesplayed')?'#e8e8ee':'white'}}><a >Ins</a></Table.HeaderCell>
          <Table.HeaderCell style={{backgroundColor:(sortparameter=='runs')?'#e8e8ee':'white'}}><a >Runs </a></Table.HeaderCell>
          <Table.HeaderCell style={{backgroundColor:(sortparameter=='highestScore')?'#e8e8ee':'white'}}><a >Hs </a></Table.HeaderCell>
          <Table.HeaderCell style={{backgroundColor:(sortparameter=='avg')?'#e8e8ee':'white'}}>Avg</Table.HeaderCell>
          <Table.HeaderCell style={{backgroundColor:(sortparameter=='strikerate')?'#e8e8ee':'white'}}><a>SR</a></Table.HeaderCell>
          <Table.HeaderCell style={{backgroundColor:(sortparameter=='100s')?'#e8e8ee':'white'}}><a>100</a></Table.HeaderCell>
          <Table.HeaderCell style={{backgroundColor:(sortparameter=='50s')?'#e8e8ee':'white'}}><a>50</a></Table.HeaderCell>
          <Table.HeaderCell style={{backgroundColor:(sortparameter=='6s')?'#e8e8ee':'white'}}><a>6s</a></Table.HeaderCell>
          <Table.HeaderCell style={{backgroundColor:(sortparameter=='4s')?'#e8e8ee':'white'}}><a>4s</a></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      {TableRows}
      </Table.Body>
    </Table>
    </div>
  )
}
}
