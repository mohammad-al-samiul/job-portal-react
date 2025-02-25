import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center py-4 ">
        <Link to={"/"}>
          <img src="/logo.png" alt="logo" className="h-20" />
        </Link>
        {/* <Link to={"/login"}>
          <Button>Login</Button>
        </Link> */}

        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </>
  );
};
