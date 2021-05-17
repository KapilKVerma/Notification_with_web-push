const push = require("web-push");
const keys = {
  publicKey:
    "BFT1WitJl8PuYRNToLz0MWxNeGFOW1AzI7rATtmkWFnhY-lDkU6ieG_Mhl_T571VERo4MZAX4yspEso6WAUowDo",
  privateKey: "EiH-7up2kJqRqv4AREBUp-b-UHK_D3kSQoWJRtBJbSs",
};

// Send Notification

push.setVapidDetails("mailto:test@code.co.au", keys.publicKey, keys.privateKey);

const sub = {};
push.sendNotification(sub, "test message");
