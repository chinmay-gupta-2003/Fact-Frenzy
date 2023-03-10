import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import CategoryFilter from "../components/categoryFilter";
import FactForm from "../components/factForm";
import FactList from "../components/factList";
import Header from "../components/header";
import { initialFacts } from "../utils";

import supabase from "../supabase";

const HomePage = () => {
  const [user, setUser] = useState(null);
  const [factList, setFactList] = useState(initialFacts);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    try {
      const getUserData = async () => {
        await supabase.auth.getUser().then((value) => {
          if (value.data?.user) setUser(value.data.user);
        });
      };
      getUserData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSignout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const toggleForm = () => setShowForm(!showForm);

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
          userEmail={user?.email}
          factList={factList}
          toggleForm={toggleForm}
          setFactList={setFactList}
        />
      )}
      <main className="main">
        <CategoryFilter />
        <FactList factList={factList} />
      </main>
    </>
  );
};

export default HomePage;
