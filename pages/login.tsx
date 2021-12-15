import type { NextPage } from "next";
import Navbar from "@/components/layouts/Navbar";
import LoginBox from "@/components/LoginBox";

const login: NextPage = () => {
  return (
    <main className="container">
      <LoginBox />
    </main>
  );
};

export default login;
