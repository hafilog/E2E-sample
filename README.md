# E2E-sample
CodeceptJS × PuppeteerでのE2Eテスト

## E2Eテストの実行方法
* 環境変数にGitHubのログインに関する情報をセット
```
$ export E2E_USERNAME=[GitHubのusername]
$ export E2E_PASSWORD=[GitHubのpassword]
```

* 以下のコマンドを実行
```
$ node node_modules/.bin/codeceptjs run --steps
```
