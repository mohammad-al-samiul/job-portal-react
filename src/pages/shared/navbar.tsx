import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
import { PenBox } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
    }
  };
  return (
    <>
      <nav className="flex justify-between items-center py-4 ">
        <Link to={"/"}>
          <img src="/logo.png" alt="logo" className="h-20" />
        </Link>

        <div className="flex gap-8">
          <SignedOut>
            <Button variant="outline" onClick={() => setShowSignIn(true)}>
              Login
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
            <Link to="/post-job">
              <Button variant="destructive" className="rounded-full">
                <PenBox size={20} className="mr-2" />
                Post a Job
              </Button>
            </Link>
          </SignedIn>
        </div>
      </nav>
      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};
