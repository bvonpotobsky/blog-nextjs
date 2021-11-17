import Head from "next/head";
import { Header } from "../components/Header";
import { SocialMedia } from "../components/SocialMedia/SocialMedia";

import { useTypeSuperPower } from "../hooks/useTypeSuperPower";

export default function Home() {
  const supertype = "Benjamín von Potobsky";

  const superpower = useTypeSuperPower(supertype);

  return (
    <div className="pageDefault">
      <Head>
        <title>Benjamín von Potobsky</title>
      </Head>

      <Header />

      <h1 className="font-bold tracking-wide text-center text-2xl py-2 blinking-cursor">
        {superpower}
      </h1>

      <p className="tracking-wide text-center text-xl mt-2 mx-3">
        FrontEnd Developer.
      </p>
      <p className="tracking-wide text-center text-md mx-3">
        Passionate about performance, new technologies and connecting the online
        world with the offline world.
      </p>
      <SocialMedia />
    </div>
  );
}
