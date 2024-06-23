
#!/bin/bash

# .envファイルから環境変数を読み込む
source .env

# 環境変数を変換して新しい環境変数として設定する
export APPLICATION_ID=$ALGOLIA_APP_ID
export API_KEY=$ALGOLIA_WRITE_API_KEY

# docker runコマンドを実行する
docker run --rm -it --env APPLICATION_ID --env API_KEY -e "CONFIG=$(cat script/crawl.config.json | jq -r tostring)" algolia/docsearch-scraper