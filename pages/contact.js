import Head from "next/head";
import Link from "next/link";

const contact = () => {
  return (
    <div className="pageDefault">
      <Head>
        <title> Lucho | Web Developer</title>
      </Head>
      <h1>Hola Soy contact PAge</h1>

      <Link href="/">
        <a>Go home</a>
      </Link>
    </div>
  );
};

export default contact;
