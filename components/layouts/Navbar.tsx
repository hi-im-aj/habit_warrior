import type { FunctionComponent } from "react";
import Link from "next/link";

const Navbar: FunctionComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="login">Log in</Link>
        </li>
        <li>
          <Link href="signup">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
