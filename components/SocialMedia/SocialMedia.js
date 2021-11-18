import Link from "next/link";
// Social media icons
import Twitter from "../../public/icons/Twitter.jsx";
import GitHub from "../../public/icons/GitHub.jsx";
import LinkedIn from "../../public/icons/LinkedIn.jsx";

export function SocialMedia() {
  return (
    <div className="w-40 flex flex-row justify-between mt-10">
      <Link href="https://twitter.com/bvonpotobsky">
        <a className="hoverSocialMedia" target="_blank">
          <Twitter />
        </a>
      </Link>
      <Link href="https://github.com/bvonpotobsky">
        <a className="hoverSocialMedia" target="_blank">
          <GitHub />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/bvonpotobsky/">
        <a className="hoverSocialMedia" target="_blank">
          <LinkedIn />
        </a>
      </Link>
    </div>
  );
}
