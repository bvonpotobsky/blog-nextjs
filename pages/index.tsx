import Head from "next/head";
import { Header } from "../components/Header";

import { Superpowers } from "../components/Superpowers";

export default function Home() {
  const myDescription = [
    "FrontEnd Developer",
    "Software Developer",
    "Crypto Enthusiast",
  ];

  return (
    <div className="pageDefault">
      <Head>
        <title>Benjamín von Potobsky</title>
      </Head>

      <Header />

      <h1 className="text-center font-extrabold text-4xl tracking-wide pt-2">
        Benjamin von Potobsky
      </h1>

      <Superpowers superpowers={myDescription} />

      <p className="tracking-wide text-center text-lg mx-2">
        Passionate about performance, new technologies and connecting the online
        world with the offline world.
      </p>
    </div>
  );
}
