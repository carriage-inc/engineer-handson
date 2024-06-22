import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useColorMode } from "@docusaurus/theme-common";

import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { isDarkTheme } = useColorMode();

  return (
    <header className={clsx("hero hero--dark", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {isDarkTheme ? (
            <img
              src={useBaseUrl("/img/logo-dark.png")}
              alt={siteConfig.title}
              width="200"
            />
          ) : (
            <img
              src={useBaseUrl("/img/logo-dark.png")}
              alt={siteConfig.title}
              width="200"
            />
          )}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <img src={useBaseUrl("/img/service-summary.png")} alt="サービス概要" />
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/lp/intro"
          >
            学習を開始する
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title="ホーム" description="マナテクのコース教材サイトです。">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
