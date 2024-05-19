import {styled} from "styled-components";

type ImagePropsType = {
    src?: string,
    alt?: string,
    title?: string
}

export const Image = styled.img.attrs<ImagePropsType>(props =>
    ({
        src: props.src || process.env.PUBLIC_URL + "/desert.png",
        alt: props.alt || "The image is gone!",
        title: props.title
    }))`
  width: 280px;
  height: 170px;
  margin: 10px 10px;
  border-radius: 10px;
`