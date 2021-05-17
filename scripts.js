addEventListener("load", async () => {
  let sw = navigator.serviceWorker.register("./sw.js");
  console.log(sw);
});

async function subscribe() {
  let sw = await navigator.serviceWorker.ready;
  let push = await sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey:
      "BFT1WitJl8PuYRNToLz0MWxNeGFOW1AzI7rATtmkWFnhY-lDkU6ieG_Mhl_T571VERo4MZAX4yspEso6WAUowDo",
  });
  console.log(JSON.stringify(push));
}
