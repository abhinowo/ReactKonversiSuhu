import React, { Component } from 'react'
import '../App.css';
import { Card, Row, Space } from 'antd';
import mainLogo from'./1.PNG';
import secondLogo from './2.jpg';
import Select from '../elements/Select';

const { Meta } = Card;

function Card2(props){
    return(
        <div>
              <Card
                hoverable
                style={{ width: 240 }}
            >
            {/* <img  src={secondLogo} style={{width: 194, height: 193, left: 365 , top: 228 ,borderRadius: 400/ 2}} alt="fireSpot"/> */}
            <h3>{props.nama}</h3>
            <p> {props.nim}</p>
            <p>{props.hobi}</p>
            <Select>
                <option value="kelas">Kelas</option>
                <option value="praktikum">Praktikum</option>
                <option value="libur">Libur</option>
            </Select>
                </Card>
        </div>
    );
}


//class components
export default class CompAndProps extends Component {
    render(){
        const background={
            backgroundColor : this.props.bgcolor
        }
    return (
        <Row align="center">
        <Space>
        <div className="wrapper">
            <div className="User-info" style={background}>
            <img  src={mainLogo} style={{width: 194, height: 193, left: 365 , top: 228 ,borderRadius: 400/ 2}} alt="fireSpot"/>
                <Card2 nama="Aryo Anindyo A" nim="21120117140020" hobi="Peternak Meme"/>
                          </div>
            <div className="User-info" style={background}>
            <img  src={secondLogo} style={{width: 194, height: 193, left: 365 , top: 228 ,borderRadius: 400/ 2}} alt="fireSpot"/>
                <Card2 nama="Dwi Supardiyono" nim="21120117120024" hobi="Gowesan"/>
            </div> 
        </div>
        </Space>
        </Row>
    )
    }
}

