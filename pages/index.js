import Head from "next/head";
import Link from "next/link";

import { Header } from "../components/Header";

// Social media icons
import Twitter from "../assets/icons/Twitter.jsx";
import GitHub from "../assets/icons/GitHub.jsx";
import LinkedIn from "../assets/icons/LinkedIn.jsx";

export default function Home() {
  return (
    <div className="pageDefault">
      <Head>
        <title>Benjamín von Potobsky</title>
      </Head>
      <Header />
      <h1 className="font-semibold tracking-wide text-center text-2xl mt-5">
        Benjamín von Potobsky
      </h1>
      <p className="tracking-wide text-center text-md mt-8 mx-3">
        FrontEnd Developer from Argentina.
      </p>
      <p className="tracking-wide text-center text-md mx-3">
        Passionate about performance, new technologies and connecting the online
        world with the offline world.
      </p>

      <div className="flex flex-row justify-evenly mt-10">
        <Link href="https://twitter.com/bvonpotobsky">
          <a target="_blank">
            <Twitter />
          </a>
        </Link>
        <Link href="https://github.com/bvonpotobsky">
          <a target="_blank">
            <GitHub />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/bvonpotobsky/">
          <a target="_blank">
            <LinkedIn />
          </a>
        </Link>
      </div>
    </div>
  );
}
