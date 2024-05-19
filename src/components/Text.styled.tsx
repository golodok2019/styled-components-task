import {styled} from "styled-components";
import {mainTheme} from "../styles/Theme";

type TextPropsType = {
    weight?: number,
    color?: string,
    size?: string,
    lineHeight?: string,
    margin?: string
}

export const Text = styled.p<TextPropsType>`
  text-align: left;
  margin: ${props => props.margin};
  font-weight: ${props => props.weight || 300};
  color: ${props => props.color || mainTheme.color.text.primary};
  font-size: ${props => props.size || "15px"};
  line-height: ${props => props.lineHeight || "20px"};
`