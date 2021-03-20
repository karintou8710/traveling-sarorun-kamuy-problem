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
        {city_name === "小樽" ? <img src={require('./assets/otaru.png').default} /> : null}
    </div>
  );
}

export default CityIcon;

