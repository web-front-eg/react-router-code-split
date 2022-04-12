export async function delayAsync(timeInMilliseconds) {
  return await new Promise(resolve =>
    setTimeout(() => resolve(), timeInMilliseconds),
  );
}

export async function tickAsync(executer, timeInMilliseconds) {
  return await new Promise(resolve =>
    setInterval(() => {
      executer();
      resolve();
    }, timeInMilliseconds),
  );
}
