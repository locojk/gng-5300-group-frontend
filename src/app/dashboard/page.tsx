"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Summary from "@/components/Dashboard/Summary";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export default function Dashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push("/");
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (isAuthenticated === null) {
    // Render a loading state while checking authentication
    return <p>Loading...</p>;
  }

  return (
    <DefaultLayout>
      <Summary />
    </DefaultLayout>
  );
}
