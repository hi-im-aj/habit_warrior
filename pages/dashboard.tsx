import type { NextPage } from "next";
import { useAuth } from "@/utils/auth";

const dashboard: NextPage = () => {
  const { user } = useAuth();
  return (
    <main className="container">
      <h1>Dashboard</h1>
      <h2>{user && user.email}</h2>
    </main>
  );
};

export default dashboard;
