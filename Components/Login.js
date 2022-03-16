import { React, createContext, useContext, useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import { useAuthRequest, exchangeCodeAsync } from "expo-auth-session";
import { Button, SafeAreaView, TouchableOpacity, Text } from "react-native";
WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: "https://www.reddit.com/api/v1/authorize.compact",
  tokenEndpoint: "https://www.reddit.com/api/v1/access_token",
  refreshEndpoint: "https://www.reddit.com/api/v1/refresh_token",
};

export default function Login({ navigation }) {
  const AuthContext = createContext({
    accessToken: "",
    setAccessToken: () => {},
  });
  const useAuthAccessToken = () => useContext(AuthContext);
  const { setAccessToken } = useAuthAccessToken();
  // const { navigate } = useNavigation<StackNavigationProp<LaunchRoutes, "SignIn">>();
  const authDiscovery = {
    authorizationEndpoint: "https://www.reddit.com/api/v1/authorize.compact",
    tokenEndpoint: "https://www.reddit.com/api/v1/access_token",
  };
  const authConfig = {
    clientId: "exyT9ijL2YVObOBTjjugtQ",
    clientSecret: "",
    scopes: ["identity", "mysubreddits", "read", "account", "subscribe"],
    redirectUri: "exp://localhost:19000/",
    usePKCE: false,
    // additionalParameters: {
    //   duration: "permanent",
    // },
  };
  const [, responseAuth, PressToSignIn] = useAuthRequest(
    authConfig,
    authDiscovery
  );

  useEffect(() => {
    const getAccessTokenByAuthCode = async () => {
      console.log(responseAuth);
      if (responseAuth?.type === "success") {
        console.log(responseAuth.params.code);
        const authCode = responseAuth.params.code;
        const configCode = { code: authCode, grant_type: "authorization_code" };

        const response = await exchangeCodeAsync(
          { ...authConfig, ...configCode },
          authDiscovery
        ).then((res) => {
          setAccessToken(res.accessToken);
          console.log(res.accessToken);
          navigation.navigate("Profile", {
            token: res.accessToken,
            all: res,
          });
        });
      }
    };
    getAccessTokenByAuthCode();
  }, [responseAuth]);

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          PressToSignIn();
        }}
        activeOpacity={0.8}
        style={{ top: "700%", backgroundColor: "wheat" }}
      >
        <Text style={{ textAlign: "center" }}>Redditech</Text>
        <Text style={{ textAlign: "center", color: "brown" }}>Sign in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
