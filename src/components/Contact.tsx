import { ReactNode } from "react";
import { GithubIcon, LinkedInIcon } from "./Icons";

const socialLinks: { href: string; icon: ReactNode; alt: string }[] = [
  {
    href: "https://www.github.com/codewithsadee-org",
    icon: (
      <GithubIcon
        width={24}
        height={24}
        fillColor="#ffffff"
        viewBox="0 0 24 24"
      />
    ),
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/codewithsadee",
    icon: (
      <LinkedInIcon
        width={24}
        height={24}
        fillColor="#ffffff"
        viewBox="0 0 24 24"
      />
    ),
    alt: "LinkedIn",
  },
  // {
  //   href: "https://x.com/codewithsadee_",
  //   icon: (
  //     <svg
  //       width="24"
  //       height="24"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M6.25 3C4.46403 3 3 4.46403 3 6.25V17.75C3 19.536 4.46403 21 6.25 21H17.75C19.536 21 21 19.536 21 17.75V6.25C21 4.46403 19.536 3 17.75 3H6.25ZM6.25 4.5H17.75C18.725 4.5 19.5 5.27497 19.5 6.25V17.75C19.5 18.725 18.725 19.5 17.75 19.5H6.25C5.27497 19.5 4.5 18.725 4.5 17.75V6.25C4.5 5.27497 5.27497 4.5 6.25 4.5ZM6.91406 7L10.7822 12.5283L6.91113 17H7.93262L11.2344 13.1758L13.9102 17H17.1289L13.0127 11.1172L16.5684 7H15.5684L12.5615 10.4717L10.1328 7H6.91406ZM8.46777 7.84766H9.74902L15.5752 16.1523H14.2939L8.46777 7.84766Z"
  //         fill="currentColor"
  //       />
  //     </svg>
  //   ),
  //   alt: "Twitter X",
  // },
  // {
  //   href: "https://www.instagram.com/codewithsadee",
  //   icon: (
  //     <svg
  //       width="25"
  //       height="24"
  //       viewBox="0 0 25 24"
  //       fill="none"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M8.75 2.5C5.58319 2.5 3 5.08319 3 8.25V15.75C3 18.9164 5.5831 21.5 8.75 21.5H16.25C19.4165 21.5 22 18.9165 22 15.75V8.25C22 5.0831 19.4164 2.5 16.25 2.5H8.75ZM8.75 4H16.25C18.6056 4 20.5 5.8939 20.5 8.25V15.75C20.5 18.1055 18.6055 20 16.25 20H8.75C6.3939 20 4.5 18.1056 4.5 15.75V8.25C4.5 5.89381 6.39381 4 8.75 4ZM17.5 6C16.9475 6 16.5 6.4475 16.5 7C16.5 7.5525 16.9475 8 17.5 8C18.0525 8 18.5 7.5525 18.5 7C18.5 6.4475 18.0525 6 17.5 6ZM12.5 7C9.74759 7 7.5 9.24759 7.5 12C7.5 14.7524 9.74759 17 12.5 17C15.2524 17 17.5 14.7524 17.5 12C17.5 9.24759 15.2524 7 12.5 7ZM12.5 8.5C14.4416 8.5 16 10.0584 16 12C16 13.9416 14.4416 15.5 12.5 15.5C10.5584 15.5 9 13.9416 9 12C9 10.0584 10.5584 8.5 12.5 8.5Z"
  //         fill="currentColor"
  //       />
  //     </svg>
  //   ),
  //   alt: "Instagram",
  // },
];

const Contact = () => {
  return (
    <section id="contact" className="pt-20 lg:pt-32">
      <div className="container">
        <div className="">
          <h2 className="headline-2">Contact me for collaboration</h2>
          <p className="">
            Reach out today to discuss your project needs and start
            collaboration on something amazing!
          </p>
          <div className="">
            {socialLinks.map(() => {
              return <></>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
