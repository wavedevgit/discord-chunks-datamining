/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
"use strict";
n.d(t, {
  Z: () => i
});
var r = n(358085);
async function i(e, t) {
  let {
    default: i
  } = await Promise.resolve().then(n.bind(n, 315263)), o = i(e, {
    skipExtensionCheck: t,
    analyticsLocations: []
  });
  if (null != o) o(null);
  else if (r.isPlatformEmbedded) window.open(e);
  else {
    let t = document.createElement("a");
    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
  }
}