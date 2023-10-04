import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "website",
    link: "www.sachinpanchal.in",
    href: "https://sachinpanchal.in",
  },
  {
    social: "email",
    link: "sachinp725@gmail.com",
    href: "mailto:sachinp725@gmail.com",
  },
  {
    social: "github",
    link: "sachinp725",
    href: "https://github.com/sachinp725",
  },
  {
    social: "linkedin",
    link: "sachinp725",
    href: "https://www.linkedin.com/in/sachinp725/",
  },

  {
    social: "telegram",
    link: "sachinp725",
    href: "https://t.me/sachinp725",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
