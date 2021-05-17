const push = require("web-push");
const keys = {
  publicKey:
    "BFT1WitJl8PuYRNToLz0MWxNeGFOW1AzI7rATtmkWFnhY-lDkU6ieG_Mhl_T571VERo4MZAX4yspEso6WAUowDo",
  privateKey: "EiH-7up2kJqRqv4AREBUp-b-UHK_D3kSQoWJRtBJbSs",
};

// Send Notification

push.setVapidDetails("mailto:test@code.co.au", keys.publicKey, keys.privateKey);

const sub = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/dDUNHXXoPeo:APA91bFv68HU5RkO3qB-J7EZjr57Upy9oUQzqdsSjqEkdyppFYLSQ-SkkKOXjZSE-tObkU50rZVzQONFb8INkvUhnRSTpeMwR1ueqnEr4Y1trCszGb_5tGopf0GNZYzxJVAFfM6Q6blX",
  expirationTime: null,
  keys: {
    p256dh:
      "BCH7-HVEaQOKOFWFmO_vg-RxGsvRExYs_v3d17jz1PzsyiPwTbwT99vGgL5NfYwC3jd094zJViDZLO6ncM8uBEE",
    auth: "lvR7_-LCnK38mD7phO4ciA",
  },
};
push.sendNotification(sub, "test message");
