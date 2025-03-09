import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn, isLoaded } = useUser();

  if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
    return <Navigate to={"/?sign-in=true"} />;
  }

  return children;
};
