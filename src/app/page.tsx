import Image from "next/image";
import styles from "./page.module.css";
import cx from 'classix';
import Header from './Header'
import Footer from './Footer'
import Carousel from './Carousel'

export default function Home() {
  return (
    <>
      <Header/>
      <main className={cx(styles.main)}>
        <div className={'size-full'}>
          <Carousel images={['https://picsum.photos/id/744/640/480',
          'https://picsum.photos/id/845/640/480',
          'https://picsum.photos/id/368/640/480']} />
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

      </main>
      <Footer />
    </>
  );
}
