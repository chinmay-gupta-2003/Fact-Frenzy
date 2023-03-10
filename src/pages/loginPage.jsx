import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Wrapper } from "../components/wrapper";
import supabase from "../supabase";

const LoginPage = () => {
  return (
    <Wrapper>
      <h1 className="login-header">Login</h1>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={["google"]}
      />
    </Wrapper>
  );
};

export default LoginPage;
