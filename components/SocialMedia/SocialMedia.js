import Link from "next/link";
// Social media icons
import Twitter from "../../assets/icons/Twitter.jsx";
import GitHub from "../../assets/icons/GitHub.jsx";
import LinkedIn from "../../assets/icons/LinkedIn.jsx";

export function SocialMedia() {
  return (
    <div className="flex flex-row justify-evenly mt-10">
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
