import React from "react";
import { Link } from "react-router-dom";
import Logo from "/Nextop.png";
import { SignedOut } from "@clerk/clerk-react";
import { SignedIn } from "@clerk/clerk-react";
import { SignInButton } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
          <img src={Logo} alt="" className="h-20" />
        </Link>
        {/* <Button variant="outline">Login</Button> */}
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

export default Header;
