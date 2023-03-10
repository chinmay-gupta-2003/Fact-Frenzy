import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Wrapper } from "../components/wrapper";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase";

const LoginPage = () => {
  const navigate = useNavigate();

  supabase.auth.onAuthStateChange(async (event) => {
    if (event !== "SIGNED_OUT") {
      navigate("/");
    } else {
      navigate("/login");
    }
  });

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
