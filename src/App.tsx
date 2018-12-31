import { Feather } from "@expo/vector-icons";
import { AppLoading, Font } from "expo";
import { Body, Button, Container, Content, Header, Left, Right, Text, Title } from "native-base";
import React, { PureComponent } from "react";

interface IAppProps { }

interface IAppState {
    isFontLoaded: boolean;
}

export default class App extends PureComponent<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);
        this.state = { isFontLoaded: false };
    }

    public componentDidMount() {
        Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        }).then(() => this.setState({ isFontLoaded: true }));
    }

    public render() {
        const { isFontLoaded } = this.state;
        if (!isFontLoaded) {
            return <AppLoading />;
        }
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Feather name="menu" size={32} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Vesta</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Text>Vesta Native Client Template</Text>
                </Content>
            </Container>
        );
    }
}
