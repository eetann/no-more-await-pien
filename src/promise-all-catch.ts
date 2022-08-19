import { setTimeout } from "timers/promises";

const unit = 1000;

async function hoge(num: number, msg: string) {
  const a = "hoge";
  await setTimeout(num * unit);
  if (a === msg) {
    console.log(`正常 ${num}:${msg}`);
  } else {
    console.log(`エラーが起きた ${num}:${msg}`);
    throw `throwのメッセージ ${num}:${msg}`;
  }
}

(async () => {
  const promises = [];
  promises.push(hoge(1, "hoge")); // 1秒後に 正常
  promises.push(hoge(2, "foo")); // 2秒後に エラー
  promises.push(hoge(5, "bar")); // 5秒後に エラー
  promises.push(hoge(4, "bar")); // 4秒後に エラー
  promises.push(hoge(3, "bar")); // 3秒後に エラー
  await Promise.all(promises).catch((e) => console.log(e));
  console.log("finish");
})();
