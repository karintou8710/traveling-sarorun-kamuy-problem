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
    <div>
        {city_name}
        {arrival_time}
        <CityIcon city_name={city_name} />
    </div>
  );
}

export default CityPanel;

