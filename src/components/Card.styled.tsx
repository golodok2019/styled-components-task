import {styled} from "styled-components";
import {mainTheme} from "../styles/Theme";

type CardPropsType = {
    color?: string
}

export const Card = styled.div<CardPropsType>`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  background-color: ${props => props.color || mainTheme.color.primary};
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
`