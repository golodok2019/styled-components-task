import {css, styled} from "styled-components";
import {mainTheme} from "../styles/Theme";

type ButtonPropsType = {
    buttonType?: "primary" | "outlined",
    backgroundColor?: string, //Не нужно при типе "outlined"
    color?: string,
    width?: string,
    height?: string,
    margin?: string
}

export const Button = styled.button<ButtonPropsType>`
  width: ${props => props.width || "86px"};
  height: ${props => props.height || "30px"};
  margin: ${props => props.margin};
  border-radius: 5px;
  
  ${props => props.buttonType === "primary" && css<ButtonPropsType>`
    background-color: ${props => props.backgroundColor || mainTheme.color.buttons.primary};
    color: ${props => props.color || mainTheme.color.buttons.white};
    border: none;
  `}

  ${props => props.buttonType === "outlined" && css<ButtonPropsType>`
    background-color: transparent;
    color: ${props => props.color || mainTheme.color.buttons.primary};
    border: 2px solid ${props => props.color || mainTheme.color.buttons.primary};
  `}
`