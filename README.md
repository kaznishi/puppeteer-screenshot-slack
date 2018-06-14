## Setting

```
$ docker build -t puppeteer-screenshot-slack .
```

## USAGE

```
$ docker run --rm -e BOT_TOKEN=[slack bot token] -e CHANNEL=[channel name] puppeteer-screenshot-slack [target URL] [(optional) comment]
```

Example

```
$ docker run --rm -e BOT_TOKEN=xoxb-xxxxxxx-xxxxxxxxx -e CHANNEL=xxxxxxxxx puppeteer-screenshot-slack http://example.com
```

### Option

FILE_NAME : slack投稿時のファイル名(.pngを末尾に付けてください)  
WIDTH : スクリーンショットを撮るheadless chromeのブラウザ幅(pixel)  
HEIGHT : スクリーンショットを撮るheadless chromeのブラウザ高さ(pixel)  
WAIT : URL遷移後にスクリーンショットを撮るまでの待ち時間(msec)  

Example

```
$ docker run --rm -e BOT_TOKEN=xoxb-xxxxxxx-xxxxxxxxx -e CHANNEL=xxxxxxxxx -e FILE_NAME=hogehoge.png -e WIDTH=800 -e HEIGHT=360 -e WAIT=5000 puppeteer-screenshot-slack http://example.com "これはコメントです"
```

```
