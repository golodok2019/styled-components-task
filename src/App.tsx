import React from 'react';
import {styled} from "styled-components";
import {Card} from "./components/Card.styled";
import {Image} from "./components/Image.styled";
import {Text} from "./components/Text.styled";
import {mainTheme} from "./styles/Theme";
import {Button} from "./components/Button.styled";

function App() {
    return (
        <Container>
            <Card color={mainTheme.color.primary}>
                <Image/>
                <Text weight={700} lineHeight={"20px"} size={"20px"} color={mainTheme.color.text.primary}
                      margin={"0 0 0 20px"}>Headline</Text>
                <Text weight={500} lineHeight={"20px"} size={"15px"} color={mainTheme.color.text.gray}
                      margin={"20px 0 0 20px"}>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut.
                    Sit molestie ornare in venen.</Text>
                <Button onClick={AlertSee} buttonType={"primary"}
                        color={mainTheme.color.buttons.white} backgroundColor={mainTheme.color.buttons.primary}
                        height={"30px"} width={"86px"} margin={"19px 0 0px 20px"}>
                    <Text as={"span"} weight={700} size={"12px"} lineHeight={"15px"}
                          color={mainTheme.color.buttons.white}>See more</Text>
                </Button>
                <Button onClick={AlertSave} buttonType={"outlined"}
                        color={mainTheme.color.buttons.primary} height={"30px"} width={"86px"}
                        margin={"19px 0 0px 12px"}>
                    <Text as={"span"} weight={700} size={"12px"} lineHeight={"15px"}
                          color={mainTheme.color.buttons.primary}>Save</Text>
                </Button>
            </Card>

            <Card>
                <Image title={"Card with less changes"}/>
                <Text weight={700} margin={"0 0 0 20px"} size={"16px"}>Second headline</Text>
                <Text color={"green"} margin={"20px 0 0 20px"} size={"12px"}>Faucibus. Faucibus. Sit sit sapien sit
                    tempusrisu ut.
                    Sit molestie ornare in venen.</Text>
                <Button onClick={AlertSee} buttonType={"primary"}
                        margin={"19px 0 0px 20px"}>See more</Button>
                <Button onClick={AlertSave} margin={"19px 0 0px 12px"}>Save</Button>
            </Card>

            <Card color={"#282828"}>
                <Image title={"Full changed card"}/>
                <Text weight={900} lineHeight={"20px"} size={"20px"} color={"#e1e1e1"}
                      margin={"0 0 0 20px"}> Third headline</Text>
                <Text weight={500} lineHeight={"20px"} size={"16px"} color={mainTheme.color.text.gray}
                      margin={"20px 0 0 20px"}>Текст который просто сущесвует в отрыве от смысла</Text>
                <Button onClick={AlertSee} buttonType={"primary"}
                        color={mainTheme.color.buttons.white} backgroundColor={"#09a601"}
                        height={"35px"} width={"90px"} margin={"19px 0 0px 20px"}>
                    <Text as={"span"} weight={800} size={"13px"} lineHeight={"22px"}
                          color={"#e1e1e1"}>See more</Text>
                </Button>
                <Button onClick={AlertSave} buttonType={"outlined"}
                        color={"#ffc400"} height={"35px"} width={"90px"}
                        margin={"19px 0 0px 12px"}>
                    <Text as={"span"} weight={800} size={"13px"} lineHeight={"22px"}
                          color={"#ffc400"}>Save</Text>
                </Button>
            </Card>
        </Container>
    );
}

function AlertSee() {
    alert("Click on See button");
}

function AlertSave() {
    alert("Click on Save button");
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 25px;
  margin-top: 20px;
  align-items: center;

  @media screen and ${mainTheme.media.small} {
    flex-direction: column;
  }
`

export default App;
