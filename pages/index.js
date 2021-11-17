import Head from "next/head";
import { SocialMedia } from "../components/SocialMedia/SocialMedia";

import { ThemeToggler } from "../components/ThemeToggler";

export default function Home() {
  return (
    <div className="pageDefault">
      <Head>
        <title>Benjamín von Potobsky</title>
      </Head>
      <h1 className="first-letter:ont-semibold tracking-wide text-center text-2xl py-2">
        Benjamín von Potobsky
      </h1>
      <ThemeToggler />
      <p className="tracking-wide text-center text-md mt-2 mx-3">
        FrontEnd Developer from Argentina.
      </p>
      <p className="tracking-wide text-center text-md mx-3">
        Passionate about performance, new technologies and connecting the online
        world with the offline world.
      </p>
      <SocialMedia />
    </div>
  );
}
