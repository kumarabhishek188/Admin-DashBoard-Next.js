import Link from "next/link";
import {
  GitHubIcon,
  LinkedInIcon,
} from "./icons";

const ACCOUNTS = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/abhishek-kumar-92157823a/",
    Icon: LinkedInIcon,
  },
  {
    platform: "GitHub",
    url: "https://github.com/kumarabhishek188",
    Icon: GitHubIcon,
  },
];

export function SocialAccounts() {
  return (
    <div className="mt-4.5">
      <h4 className="mb-3.5 font-medium text-dark dark:text-white">
        Follow me on
      </h4>
      <div className="flex items-center justify-center gap-3.5">
        {ACCOUNTS.map(({ Icon, ...item }) => (
          <Link
            key={item.platform}
            href={item.url}
            className="hover:text-primary"
          >
            <span className="sr-only">View {item.platform} Account</span>

            <Icon />
          </Link>
        ))}
      </div>
    </div>
  );
}
