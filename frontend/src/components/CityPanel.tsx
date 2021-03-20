import React from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import styled from "styled-components";

import CityIcon from "./CityIcon";

interface Props {
    city_name: string,
    arrival_time: string,
}

function CityPanel(props: Props) {
  
  const {city_name, arrival_time} = props;
  
  return (
    <MainContainer>
        <A>{city_name}</A>
        <A>{arrival_time}</A>
        
        <B><CityIcon city_name={city_name} /></B>
          
    </MainContainer>

  );
}

export default CityPanel;

const MainContainer = styled.div`
  color: #763f2d ;
  fontSize: 30;
  background-color:  #03a8d6;
  alignItems: center;
  display: flex;
  padding: 60px;
  list-style: none;
  margin: 0px;
  width: 100%;

  
`

const A  = styled.div`
text-align: center;
font-size:40px;
margin: 50px;

`

const B  = styled.div`
position: absolute;
right: 500px;
margin: 50px;

`





