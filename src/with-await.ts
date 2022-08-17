import { setTimeout } from "timers/promises";

const unit = 1000;

async function logSleepLog(msg: string) {
  console.log(msg);
  await setTimeout(1.5 * unit);
  console.log(msg);
}

(async () => {
  await logSleepLog("hoo");
  console.log("finish");
})();
