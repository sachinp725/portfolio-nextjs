"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import styles from "../styles/Tab.module.css";

const Tab = ({
  icon,
  filename,
  path,
}: {
  icon: any;
  filename: string;
  path: string;
}) => {
  const pathname = usePathname();

  return (
    <Link href={path} className={styles.aTag}>
      <div className={`${styles.tab} ${pathname === path && styles.active}`}>
        <Image src={icon} alt={filename} height={18} width={18} />
        <p>{filename}</p>
      </div>
    </Link>
  );
};

export default Tab;
