import React from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import styled from "styled-components";

interface Props {
    city_name: string,
}

function CityIcon(props: Props) {

  const {city_name} = props;
  return (
    <div>
        {city_name === "稚内" ? <img src={require('./assets/wakkanai.jpg').default} width="300" height="auto"/> : null}
        {city_name === "札幌" ? <img src={require('./assets/sapporo.jpg').default} width="300" height="auto" /> : null}
        {city_name === "函館" ? <img src={require('./assets/hakodate.jpg').default} width="300" height="auto" /> : null}
        {city_name === "知床" ? <img src={require('./assets/shiretoko.jpg').default} width="300" height="auto"/> : null}
        {city_name === "旭川" ? <img src={require('./assets/asahikawa.jpg').default} width="300" height="auto" /> : null}
    </div>
  );
}

export default CityIcon;


const A  = styled.div`
margin: 0px;

`

