import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Logo from "/Nextop.png";
import { SignedOut, SignIn, useUser } from "@clerk/clerk-react";
import { SignedIn } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";
import { Button } from "./ui/button";
import { BriefcaseBusinessIcon, Heart, PenBox } from "lucide-react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams("");
  const { user } = useUser();
  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
    }
  }, [search]);
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
      setSearch("");
    }
  };
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
          <img src={Logo} alt="" className="h-20" />
        </Link>
        <div className="flex gap-8">
          <SignedOut>
            <Button onClick={() => setShowSignIn(true)} variant="outline">
              Login
            </Button>
          </SignedOut>
          <SignedIn>
            {/* add a condition to validate recruiter  */}
            {user?.unsafeMetadata?.role === "recruiter" && (
              <Link to="post-job">
                <Button variant="destructive" className="rounded-full">
                  <PenBox size={20} className="mr-2" /> Post a Job
                </Button>
              </Link>
            )}

            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Jobs"
                  labelIcon={<BriefcaseBusinessIcon size={15} />}
                  href="/my-jobs"
                />
                <UserButton.Link
                  label="Saved Jobs"
                  labelIcon={<Heart size={15} />}
                  href="/saved-job"
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>
      {showSignIn && (
        <div
          className="fixed flex inset-0 items-center justify-center bg-black bg-opacity-50"
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

export default Header;
