import Link from "next/link";
//import Illustration from '../components/Illustration';
import styles from "@/app/styles/HomePage.module.css";

import React from "react";

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Sachin Panchal</h1>
            <br />
            <br />
            <h6 className={styles.bio}>
              [info] Getting details from sessions...
            </h6>

            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

// export async function getStaticProps() {
//   return {
//     props: { title: "Home" },
//   };
// }

export default Home;
