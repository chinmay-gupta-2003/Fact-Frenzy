import { useEffect, useState } from "react";
import CategoryFilter from "../components/categoryFilter";
import FactForm from "../components/factForm";
import FactList from "../components/factList";
import Header from "../components/header";
import supabase from "../supabase";
import { useNavigate } from "react-router-dom";
import { Loader } from "../components/loader";

const HomePage = () => {
  const navigate = useNavigate();
  const [factList, setFactList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    try {
      supabase.auth.onAuthStateChange((event) => {
        if (event === "SIGNED_IN") {
          navigate("/");
        }
      });

      const getUserData = async () => {
        await supabase.auth.getUser().then((value) => {
          if (value.data?.user) setUser(value.data.user);
        });
      };

      const getFactList = async () => {
        setIsLoading(true);
        let query = supabase.from("facts").select("*");

        if (currentCategory !== "all")
          query = query.eq("category", currentCategory);

        const { data: facts, error } = await query
          .order("votesInteresting", { ascending: false })
          .limit(100);

        if (error) return alert("An error occured");
        setFactList(facts);

        setIsLoading(false);
      };

      getUserData();
      getFactList();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [currentCategory, navigate]);

  const handleSignout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);

      alert("You have been signed out");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleForm = () => {
    if (!user) return alert("Please login to share a fact");
    setShowForm(!showForm);
  };

  return (
    <>
      <Header
        formVisible={showForm}
        formHandler={toggleForm}
        user={user}
        handleSignout={handleSignout}
      />
      {showForm && (
        <FactForm
          user={user}
          userEmail={user?.email}
          factList={factList}
          toggleForm={toggleForm}
          setFactList={setFactList}
        />
      )}
      <main className="main">
        <CategoryFilter setCurrentCategory={setCurrentCategory} />
        {isLoading ? (
          <Loader />
        ) : (
          <FactList
            currentCategory={currentCategory}
            factList={factList}
            setFactList={setFactList}
          />
        )}
      </main>
    </>
  );
};

export default HomePage;
