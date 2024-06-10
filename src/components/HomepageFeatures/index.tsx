import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  imageUrl: string;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "LPサイト作成",
    imageUrl: require("@site/static/img/lp-image.png").default,
    description: (
      <>
        <p>
          HTML, CSS,
          JavaScriptを使ってLPを実装します。最近のレイアウト手法を学び、CSSとJavaScriptで見た目と動きを整えます。
        </p>
      </>
    ),
    link: "/docs/lp/intro",
  },
  {
    title: "CRUDアプリ作成",
    imageUrl: require("@site/static/img/crud-image.png").default,
    description: (
      <>
        <p>
          Laravelを使ってCRUDアプリを実装します。PHPでシンプルな投稿アプリを作成し、JavaScriptフレームワークを用いたフロントエンド実装を学びます。
        </p>
      </>
    ),
    link: "/docs/crud/intro",
  },
  {
    title: "ECサイト作成",
    imageUrl: require("@site/static/img/ec-image.png").default,
    description: (
      <>
        <p>
          絵画専門のECサイトを実装します。LaravelでAPIサーバを構築し、NextJSでフロントエンドを実装します。DB設計とAPI設計も行います。
        </p>
      </>
    ),
    link: "/docs/ec/intro",
  },
];

function Feature({ title, imageUrl, description, link }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className={clsx("text--center", styles.featureItem)}>
        <img src={imageUrl} className={styles.featureimageUrl} alt={title} />
        <div className="text--left padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          {description}
          <div className="text--center">
            <Link className="button button--primary button--lg" to={link}>
              詳細はこちら
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
