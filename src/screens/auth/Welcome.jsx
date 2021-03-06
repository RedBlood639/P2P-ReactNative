import React from "react";
import { Image, VStack, Button } from "native-base";
import BG_IMAGE from "@assets/images/bgimg.png";
import { Layout } from "@components/Layout";

const Welcome = (props) => {
  const { navigation } = props;
  return (
    <Layout th={5} scroll={true}>
      <VStack space={3}>
        <Image source={BG_IMAGE} alt="Revoclix" height={600} />
        <Button onPress={() => navigation.navigate("register")} size="lg">
          {"Sign Up"}
        </Button>
        <Button
          onPress={() => navigation.navigate("login")}
          size="lg"
          variant="outline"
        >
          {"I already have an account"}
        </Button>
      </VStack>
    </Layout>
  );
};

export default Welcome;
