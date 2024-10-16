import pageStyles from './page.module.css';
import ShowcaseImg from '@/components/ShowcaseImg';

export default function Home() {
  return (
    <main>
      <h1>The Zebra</h1>
      <section className={pageStyles.zebraShowcaseImgs}>
        <ShowcaseImg title="On the Beach" shortDesc="Summer 2023"/>
        <ShowcaseImg title="Snowboarding" shortDesc="Winter 2023"/>
        <ShowcaseImg title="Rockclimbing" shortDesc="Spring 2023"/>
      </section>
    </main>
  );
}
