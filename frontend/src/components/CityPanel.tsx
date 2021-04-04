import React from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import styled from "styled-components";
import {Card} from "@blueprintjs/core";

import CityIcon from "./CityIcon";

interface Props {
    city_name: string,
    arrival_time: string,
}

function CityPanel(props: Props) {
  
  const {city_name, arrival_time} = props;
  
  return (
    <Card>
      <A>{city_name}</A>
      <A>{arrival_time}</A>
      
      <B><CityIcon city_name={city_name} /></B>
    </Card>
  );
}

export default CityPanel;

// const MainContainer = styled.div`
//   fontSize: 30;
//   alignItems: center;
//   display: flex;
//   padding: 60px;
//   list-style: none;
//   margin: 0px;
//   width: 100%;
// 
//   
// `

const A  = styled.div`
text-align: center;
font-size:40px;
margin: 50px;

`

const B  = styled.div`
`
