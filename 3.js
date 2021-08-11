let count = 0;
let isTimeout = true;

const getData = () => Promise.resolve(++count);

const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

const memoize = (func, secs) => {
  return function () {
    return new Promise((resolve) => {
      if (!isTimeout) {
        isTimeout = !isTimeout;
        return resolve(count);
      }
      setTimeout(async () => {
        isTimeout = !isTimeout;
        return resolve(await func());
      }, secs);
    });
  };
};

const getJsonMemoize = memoize(getData, 1000);

async function start() {
  await getJsonMemoize(); // 1
  await getJsonMemoize(); // 1
  await sleep(3000);
  await getJsonMemoize(); // 2
}
