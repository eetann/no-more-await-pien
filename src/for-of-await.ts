import { setTimeout } from "timers/promises";

const unit = 1000;

async function logSleepLog(msg: string) {
  console.log(msg);
  await setTimeout(1.5 * unit);
  console.log(msg);
}

(async () => {
  const foo = [1, 2];
  for (const f of foo) {
    await logSleepLog(`${f}`);
  }
  console.log("finish");
})();
